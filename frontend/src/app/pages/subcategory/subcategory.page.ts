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

    private subcategory;
    private paramMap: any;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getCategories().pipe(first()).subscribe(data => {
            this.subcategory = (data as any).categories[0].subcategories[0];
        });

        this.productService.getAllProducts().pipe(first()).subscribe(data => {
            this.products = data;
            console.log(this.products);
        });



    }
}
