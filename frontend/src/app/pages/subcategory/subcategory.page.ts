import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../core/services/productService/product.service';
import {first} from 'rxjs/operators';
import {CategoryService} from '../../core/services/categoryService/category.service';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.page.html',
    styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

    private products = [];
    private featuredProducts = [];

    private subcategory;
    private paramMap: any;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private categoryService: CategoryService) {
    }

    /*
    The url-slug is saved and used for a request. The request fetches details of the subcategory and the
    products of this subcategory from the backend.
     */
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).pipe(first()).subscribe(data => {
            this.subcategory = (data as any).categories[0];
            // filter for verification, only verified products are displayed
            this.products = this.subcategory.products.filter(prod => prod.verified);
            this.selectFeaturedProducts();
        });
    }
    // Select products that are to be displayed in featureProductsCarousel
    selectFeaturedProducts() {
        this.featuredProducts = this.products.slice(0, 4);
    }
}
