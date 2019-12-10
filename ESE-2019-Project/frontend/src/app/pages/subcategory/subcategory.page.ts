import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/productService/product.service';
import { CategoryService } from '../../core/services/categoryService/category.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { isUndefined } from 'util';
import { IonRange } from '@ionic/angular';
import { RangeValue } from '@ionic/core';


/**
 * The page with the selection of products from a given category
 */
@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.page.html',
    styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

    /**
     * An array with all Products of the category
     */
    private allProducts: {}[] = [];
    /**
     * An array with all products that match the current filter
     */
    products: {}[] = [];
    /**
     * The number of filled Stars in the filter section
     */
    filledStars = 0;
    /**
     * The price span of all the products unified
     */
    priceSpan: { lower: number, upper: number } = { lower: 0, upper: 1000 };

    /**
     * The current filter settings
     */
    private filterSettings: { rating: string, location: string, minPrice: string, maxPrice: string } =
        { rating: '', location: '', minPrice: '', maxPrice: '' };
    /**
     * The arguments that are given to the filterService
     */
    private filterargs: string[] = [];
    /**
     * The last filter arguments to avoid redundant filter calls
     */
    private lastfilterargs: string[] = [];
    /**
     * The subcategory of which the items are displayed
     */
    subcategory;
    /**
     * A boolean indicating whether the page is being loaded
     */
    isLoading = true;
    /**
     * A boolean indicating whether the carousel is prepared
     */
    private carouselIsReady = false;
    /**
     * A boolean indicating whether the filter options should be displayed
     */
    private displayFilterOptions = false;

    /**
     * Assings new private variables
     * @param route Auto injected ActivatedRoute to read the current subcategory
     * @param productService Auto injected ProductService to fetch all Products
     * @param categoryService Auto injected CategoryService to fetch all information of the category
     * @param filterAndSearchService Auto injected FilterAndSearchService to filter and sort Products
     */
    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private categoryService: CategoryService,
                private filterAndSearchService: FilterAndSearchService) {
    }

    /**
     * The url-slug is saved and used for a request. The request fetches details of the subcategory and the
     * products of this subcategory from the backend.
     */
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).subscribe(data => {
            this.subcategory = data[0];
            this.updateProducts();
        });
    }

    /**
     * Updates the Products from the backend and filters them accordingly
     */
    updateProducts() {
        return this.productService.getProductsById(this.subcategory._id).then(products => {
            // @ts-ignore
            this.allProducts = products;
            this.products = this.applyFilters(this.allProducts);
            this.getPriceSpan();
            this.isLoading = false;
        });
    }

    /**
     * Applies all the {@link #filterSettings} and returns the filtered list of products
     * @param products the products to be filtered
     * @returns the filtered list of products
     */
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

    /**
     * Checks if the filter arguments have not been changed
     * @param arr1 the new filter arguments
     * @param arr2 the last filter arguments
     * @returns true if the filter arguments stayed the same and false otherwise
     */
    filterDidNotChange(arr1: string[], arr2: string[]): boolean {
        if (arr1 === arr2) { return true; }
        if (arr1 === null || arr2 === null) { return false; }
        if (arr1.length !== arr2.length) { return false; }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) { return false; }
        }
        return true;
    }

    /**
     * Returns an array with all filter arguments to be displayed
     */
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
            if (name == 'price') {
                // Remove duplicate price
                for (let i = 0; i < filterObjArray.length; i++) {
                    if (filterObjArray[i].name === 'price') {
                        return;
                    }
                }
            }
            filterObjArray.push({ name: filterObj.name, operator: filterObj.operator, value: filterObj.value, detailName });
        });

        return filterObjArray;
    }

    /**
     * Returns a RangeValue with the selected Price
     */
    get selectedPrice(): {lower:number, upper:number} {
        return ((document.querySelector('#priceRangeInput') as unknown) as any).value;
    }

    /**
     * Removes a filter from the filter settings and updates the displayed products
     * @param filter the filter to be removed
     */
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
        if (this.filterSettings[filter.detailName]) {
            this.filterSettings[filter.detailName] = '';
            this.products = this.applyFilters(this.allProducts);
            if (resetFilterInput.has(filter.detailName)) {
                resetFilterInput.get(filter.detailName)();
            }
        }

    }

    /**
     * Sets the (price)-range value to the given numbers
     * @param lower the lower number
     * @param upper the upper number
     */
    setRangeValueTo(lower: number, upper: number) {
        const element = ((document.querySelector('#priceRangeInput') as unknown) as IonRange);
        element.value = { lower, upper };
    }

    /**
     * Update the rating filter setting
     * @param n the min number of stars
     */
    onRatingFilterChanged(n: number) {
        this.filterSettings.rating = `>=;rating;${n}`;
        this.products = this.applyFilters(this.allProducts);
    }

    /**
     * Change the filter settings if the range slider changed
     * @param evt the ion change event of the slider
     */
    onPriceSliderChange(evt) {
        const newPrice: { lower: number, upper: number } = evt.target.value;
        this.onMinPriceChange(newPrice.lower);
        this.onMaxPriceChange(newPrice.upper);
    }

    /**
     * Change the filtersettings of the min price and update products with the new filter
     * @param n the min price of the product
     */
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

    /**
     * Change the filtersettings of the max price and update products with the new filter
     * @param n the max price of the product
     */
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

    /**
     * Helper function to create anew array to use ngFor
     * @param n the number of elements in the array
     */
    array(n: number): number[] {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
    }

    /**
     * Replace the given amount of stars with filled Stars
     * @param n the amount of filled stars
     */
    fillTo(n: number): void {
        this.filledStars = n;
    }

    /**
     * Calculates the price span of all products. If no products are found it returns {lower: 0, upper: 1000}
     */
    getPriceSpan(): { lower: number, upper: number } {
        const sorted = this.filterAndSearchService.sort([...this.products], '+price');
        if (sorted.length === 0) { return { lower: 0, upper: 1000 }; }
        this.priceSpan = { lower: (sorted[0]as any).price, upper: (sorted[sorted.length - 1] as any).price };
    }

    /**
     * Sorts the displayed products with the given value
     * @param evt the event containing the value with which to sort the array with
     */
    onSortChange(evt: Object) {
        this.filterAndSearchService.sort(this.products, (evt as any).target.value, '-date');
    }

    /**
     * toggles the {@link #displayFilterOptions} variable
     */
    displayHideFilterOptions() {
        this.displayFilterOptions = !this.displayFilterOptions;
    }

    /**
     * Returns the {@link #displayFilterOptions indicator} whether the filter Options should be displayed
     */
    get filterOptions() {
        return this.displayFilterOptions;
    }

    /**
     * Hides the filter Options when leving the view
     */
    ionViewDidLeave() {
        this.displayFilterOptions = false;
    }

}
