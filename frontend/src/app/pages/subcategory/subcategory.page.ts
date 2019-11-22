import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {ProductService} from '../../core/services/productService/product.service';
import {CategoryService} from '../../core/services/categoryService/category.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';


@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.page.html',
    styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

    private allProducts: {}[] = [];
    private products: {}[] = [];
    private featuredProducts = [];
    private filledStars = 0;
    private priceSpan: {lower: number, upper: number} = {lower: 0, upper: 1000};

    private filterSettings: {rating: string, location: string, minPrice: string, maxPrice: string} = {rating: '', location: '', minPrice: '', maxPrice: ''};
    private filterargs: string[] = [];
    private subcategory;
    private carouselIsReady = false;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private categoryService: CategoryService,
                private popoverController: PopoverController,
                private filterAndSearchService: FilterAndSearchService,
                private progressIndicatorService: ProgressIndicatorService) {
    }

    /*
    The url-slug is saved and used for a request. The request fetches details of the subcategory and the
    products of this subcategory from the backend.
     */
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).subscribe(data => {
            this.subcategory = data[0];
            this.updateProducts();
        });
    }

    // Select featured products for product-carousel
    selectFeaturedProducts() {
        this.featuredProducts = this.allProducts.slice(0, 2);
        this.carouselIsReady = true;
    }

    updateProducts(){
        return this.productService.getProductsById(this.subcategory._id).then(products => {
            //@ts-ignore
            this.allProducts = products;
            this.products = this.applyFilters(this.allProducts);
            this.selectFeaturedProducts();
        });
    }

    applyFilters(products: {}[]) : {}[] {
        this.filterargs = [];
        Object.keys(this.filterSettings).forEach((key) => {
            if (this.filterSettings[key] != ''){
                this.filterargs.push(this.filterSettings[key]);
            }
        });
        if (this.filterargs.length > 0)
        return this.filterAndSearchService.filterComplex(products, this.filterargs);
        return products;

    }

    filterargsToDisplay(): {}[] {
        let filterObjArray: {name: string, operator: string, value: string}[] = [];
        this.filterargs.forEach((el)=> {
            filterObjArray.push(this.filterAndSearchService.filterToObject(el));
        });
        return this.filterargsToDisplay();
    }

    displayLoading(promise: Promise<void>) {
        this.progressIndicatorService.presentLoading("Updating products");
        promise.then(() => {
            this.progressIndicatorService.dismissLoadingIndicator();
            this.progressIndicatorService.presentToast("Successfully updated products", 2000);
        }, () => {
            this.progressIndicatorService.dismissLoadingIndicator();
            this.progressIndicatorService.presentToast("Products couldn't be updated", 2000, "danger");
        });
    }

    onRatingFilterChanged(n: number) {
        this.filterSettings.rating = `>;rating;${n}`;
        let promise = this.updateProducts();
        this.displayLoading(promise);
    }
    array(n: number) :number[] {
        let arr = Array(n);
        return [...arr.keys()].map(ind => ind+1);
      }

  fillTo(n: number) :void {
    this.filledStars = n;
  }

  getPriceSpan(){

  }

}
