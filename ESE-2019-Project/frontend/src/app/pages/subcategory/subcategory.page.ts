import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/productService/product.service';
import { CategoryService } from '../../core/services/categoryService/category.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import { isUndefined } from 'util';
import { IonRange } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { filter } from 'rxjs/operators';


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
    private priceSpan: { lower: number, upper: number } = { lower: 0, upper: 1000 };

    private filterSettings: { rating: string, location: string, minPrice: string, maxPrice: string } =
        { rating: '', location: '', minPrice: '', maxPrice: '' };
    private filterargs: string[] = [];
    private lastfilterargs: string[] = [];
    private subcategory;
    private carouselIsReady = false;

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private categoryService: CategoryService,
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

    updateProducts() {
        return this.productService.getProductsById(this.subcategory._id).then(products => {
            // @ts-ignore
            this.allProducts = products;
            this.products = this.applyFilters(this.allProducts);
            this.getPriceSpan();
            this.selectFeaturedProducts();
        });
    }

    applyFilters(products: {}[]): {}[] {
        this.filterargs = [];
        Object.keys(this.filterSettings).forEach((key) => {
            if (this.filterSettings[key] !== '') {
                this.filterargs.push(this.filterSettings[key]);
            }
        });
        if (this.filterargs.length > 0) {
            this.lastfilterargs = this.filterargs;
            return this.filterAndSearchService.filterComplex(products, this.filterargs);
        }
        this.lastfilterargs = this.filterargs;
        return products;
    }

    filterDidNotChange(arr1: string[], arr2: string[]): boolean {
        if (arr1 === arr2) { return true; }
        if (arr1 === null || arr2 === null) { return false; }
        if (arr1.length !== arr2.length) { return false; }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) { return false; }
        }
        return true;
    }

    get filterargsToDisplay(): { name: string, operator: string, value: string }[] {
        const detailNames: Map<string, Map<string, string>> = new Map<string, Map<string, string>>([
            ['price', new Map<string, string>(
                [
                    ['>=', 'minPrice'],
                    ['<=', 'maxPrice']
                ]
            )]
        ]);
        const filterObjArray: { name: string, operator: string, value: string, detailName: string }[] = [];
        this.filterargs.forEach((el) => {
            const filterObj = this.filterAndSearchService.filterToObject(el);
            const name = filterObj.name;
            const operator = filterObj.operator;
            const map = (detailNames.has(name)) ? detailNames.get(name) : undefined;
            const detailName = (map && map.get(operator)) ? map.get(operator) : filterObj.name;
            if (name == 'price'){
                // Remove duplicate price
                for (let i = 0; i < filterObjArray.length; i++){
                    if (filterObjArray[i].name === 'price'){
                        return;
                    }
                }
            }
            filterObjArray.push({ name: filterObj.name, operator: filterObj.operator, value: filterObj.value, detailName });
        });

        return filterObjArray;
    }

    get selectedPrice(): RangeValue {
        return ((document.querySelector('#priceRangeInput') as unknown) as IonRange).value;
    }

    removeFilter(filter: { name: string, operator: string, value: string, detailName?: string }) {
        const resetFilterInput: Map<string, Function> = new Map<string, Function>(
            [
                ['rating', () => { this.filledStars = 0; }],
                ['maxPrice', () => {
                    (document.querySelector('#maxPriceInput') as HTMLInputElement).value = this.priceSpan.upper.toString();
                    const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
                    this.setRangeValueTo((element.value as any).lower, this.priceSpan.upper);
                }],
                ['minPrice', () => {
                    (document.querySelector('#minPriceInput') as HTMLInputElement).value = this.priceSpan.lower.toString();
                    const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
                    this.setRangeValueTo(this.priceSpan.lower, (element.value as any).upper);
                }]
            ]
        );
        if (!filter.detailName) {
            filter.detailName = filter.name;
        }
        if (this.filterSettings[filter.detailName]){
            this.filterSettings[filter.detailName] = '';
            this.products = this.applyFilters(this.allProducts);
            if (resetFilterInput.has(filter.detailName)) {
                resetFilterInput.get(filter.detailName)();
            }
        }
        
    }

    setRangeValueTo(lower: number, upper: number) {
        const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
        element.value = { lower, upper };
    }

    onRatingFilterChanged(n: number) {
        this.filterSettings.rating = `>=;rating;${n}`;
        this.products = this.applyFilters(this.allProducts);
    }

    onPriceSliderChange(evt) {
        const newPrice: { lower: number, upper: number } = evt.target.value;
        this.onMinPriceChange(newPrice.lower);
        this.onMaxPriceChange(newPrice.upper);
    }

    onMinPriceChange(n?: number) {
        const input: HTMLInputElement = document.querySelector('#minPriceInput');
        if (!isUndefined(n)) {
            if (input.value !== n.toString()) {
                input.value = n.toString();
            }
        } else {
            const newValue: number = Number(input.value);
            if (isNaN(newValue)) { return; }
            n = newValue;
            const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
            this.setRangeValueTo(n, (element.value as any).upper);
        }
        if (n === 0) {
            this.removeFilter({ name: 'minPrice', operator: '>=', value: '' });
        } else {
            this.filterSettings.minPrice = `>=;price;${n}`;
        }
        this.products = this.applyFilters(this.allProducts);
    }

    onMaxPriceChange(n: number) {
        const input: HTMLInputElement = document.querySelector('#maxPriceInput');
        if (!isUndefined(n)) {
            if (input.value !== n.toString()) {
                input.value = n.toString();
            }
        } else {
            const newValue: number = Number(input.value);
            if (isNaN(newValue)) { return; }
            n = newValue;
            const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
            this.setRangeValueTo((element.value as any).lower, n);
        }
        if (n === this.priceSpan.upper) {
            this.removeFilter({ name: 'maxPrice', operator: '<=', value: '' });
        } else {
            this.filterSettings.maxPrice = `<=;price;${n}`;
        }
        this.products = this.applyFilters(this.allProducts);
    }

    array(n: number): number[] {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
    }

    fillTo(n: number): void {
        this.filledStars = n;
    }

    getPriceSpan(): { lower: number, upper: number } {
        const sorted = this.filterAndSearchService.sort([...this.products], '+price');
        if (sorted.length === 0) { return { lower: 0, upper: 1000 }; }
        this.priceSpan = { lower: sorted[0]['price'], upper: sorted[sorted.length - 1]['price'] };
    }

    onSortChange(evt: Object){
        this.filterAndSearchService.sort(this.products, (evt as any).target.value, '-date');
    }

}
