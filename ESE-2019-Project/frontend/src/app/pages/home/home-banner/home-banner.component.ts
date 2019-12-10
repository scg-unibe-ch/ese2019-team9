import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/categoryService/category.service';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { PopoverController } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';
import { BehaviorSubject } from 'rxjs';

/**
 * The home banner containing the search bar and the banner image
 */
@Component({
    selector: 'app-home-banner',
    templateUrl: './home-banner.component.html',
    styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {
/**
 * The search results
 */
    searchResults: {
        popover: HTMLIonPopoverElement,
        resultsSubject: BehaviorSubject<{ set: Set<{ obj: any, app: any }>, searchTerm: string }>
    } = { popover: undefined, resultsSubject: new BehaviorSubject({ set: new Set(), searchTerm: '' }) };
    /**
     * All categories
     */
    categories = [];
    /**
     * All products
     */
    products = [];
    /**
     * A map when each array of {@link #categories} and {@link #products} has been pulled the last time
     */
    lastPulled: Map<any[], Date> = new Map<any[], Date>();
    /**
     * A boolean indicating whether the searchresultspopover should close
     */
    popoverLock = false;

/**
 * @ignore
 */
    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private filterAndSearchService: FilterAndSearchService,
        private popoverController: PopoverController) {
    }

    /**
     * Updates categories and products
     */
    ngOnInit() {
        this.updateCategoriesAndProducts();
    }

    /**
     * Searches the categories and prdocuts after the new searchterm
     * @param evt the change event containing the searchterm
     */
    onSearchbarChange(evt) {
        const value = evt.target.value;
        let allSubcategories = [];
        if (this.categories) {
            this.categories.forEach((cat) => {
                if (cat.subcategories && cat.subcategories.length) {
                    allSubcategories = allSubcategories.concat(cat.subcategories);
                }
            });
        }
        const searchableArray = [...allSubcategories];
        if (this.products) {
            searchableArray.push(...this.products);
        }
        if (searchableArray.length > 0) {
            let searchResults = this.filterAndSearchService.searchUnique(searchableArray as object[], value, ['name', 'description']);
            this.searchResults.resultsSubject.next({ set: searchResults, searchTerm: value });
        }

    }

    /**
     * Fetch and update Categories and Products if they are older thatn 45000 milliseconds
     */
    updateCategoriesAndProducts() {
        if (this.categories.length === 0 || (new Date().getTime() - this.lastPulled.get(this.categories).getTime()) > 45000) {
            this.updateCategories();
        }
        if (this.products.length === 0 || (new Date().getTime() - this.lastPulled.get(this.products).getTime()) > 45000) {
            this.updateProducts();
        }
    }

    /**
     * Fetch and update categories
     */
    updateCategories() {
        this.categoryService.getCategories().subscribe((data) => {
            this.categories = data;
            this.lastPulled.set(this.categories, new Date());
        },
            (err) => {
                console.log(err);
                this.progressIndicatorService.presentToast(err.error.message, 'danger');
            }
        );
    }

    /**
     * Fetch and update products
     */
    updateProducts() {
        this.productService.getAllProducts().subscribe((data) => {
            this.products = data as any;
            this.lastPulled.set(this.products, new Date());
        },
            (err) => {
                console.log(err);
                this.progressIndicatorService.presentToast(err.error.message, 'danger');
            }
        );
    }

/**
 * Opens the popover with the search results
 * @param ev the event opening the popover
 */
    async openSearchResultPopover(ev: any) {
        if (this.searchResults.popover) {
            return;
        }
        this.popoverLock = true;
        await this.presentPopover(ev);
        const evt = { target: { value: undefined } };
        evt.target.value = (document.getElementById('searchbar') as HTMLIonInputElement).value;
        this.onSearchbarChange(evt);
        (document.getElementById('searchbar') as HTMLIonInputElement).setFocus();
        this.popoverLock = false;
    }

    /**
     * Closes the search result popover if it isn't {@link #popoverLock locked}
     */
    closeSearchResultPopover() {
        if (this.popoverLock) { return; }
        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').removeEventListener('scroll', () => {
            if(this.searchResults.popover) {
                this.popoverController.dismiss(this.searchResults.popover.id);
                this.searchResults.popover = undefined;
            }
        });
        if(this.searchResults.popover) {
            this.popoverController.dismiss(this.searchResults.popover.id);
            this.searchResults.popover = undefined;
        }
    }

    /**
     * Presents the popover
     * @param ev the event given to the popover
     */
    async presentPopover(ev: any) {
        const popoverElement = await this.popoverController.create({
            component: SearchResultComponent,
            cssClass: 'results',
            event:ev,
            componentProps: {
                searchResults: this.searchResults
            }
        });

        this.searchResults.popover = popoverElement;
        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').addEventListener('scroll', () => {
            if(this.searchResults.popover) {
                this.popoverController.dismiss();
                this.searchResults.popover = undefined;
            }
        });
        return await popoverElement.present();
    }
}
