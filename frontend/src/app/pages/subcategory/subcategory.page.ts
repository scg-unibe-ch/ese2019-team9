import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {ProductService} from '../../core/services/productService/product.service';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {FilterRatingComponent} from './filter-rating/filter-rating.component';
import {FilterLocationComponent} from './filter-location/filter-location.component';
import {FilterPriceComponent} from './filter-price/filter-price.component';


@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.page.html',
    styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

    private products = [];
    private featuredProducts = [];

    private subcategory;
    private carouselIsReady = false;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private categoryService: CategoryService,
                private popoverController: PopoverController) {
    }

    /*
    The url-slug is saved and used for a request. The request fetches details of the subcategory and the
    products of this subcategory from the backend.
     */
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).subscribe(data => {
            this.subcategory = data[0];
            // fetch products of the selected subcategory from backend
            this.productService.getProductsById(data[0]._id).then(products => {
                // @ts-ignore
                this.products = products;
                this.selectFeaturedProducts();
            });
        });
    }

    // Select featured products for product-carousel
    selectFeaturedProducts() {
        this.featuredProducts = this.products.slice(0, 2);
        this.carouselIsReady = true;
    }

    async openRatingPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: FilterRatingComponent,
            translucent: true,
            event: ev,
            backdropDismiss: true,
        });
        return await popover.present();
    }

    async openLocationPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: FilterLocationComponent,
            translucent: true,
            event: ev,
            backdropDismiss: true,
        });
        return await popover.present();
    }

    async openPricePopover(ev: any) {
        const popover = await this.popoverController.create({
            component: FilterPriceComponent,
            translucent: true,
            event: ev,
            backdropDismiss: true,
        });
        return await popover.present();

    }
}
