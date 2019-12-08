import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/categoryService/category.service';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { PopoverController } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-home-banner',
    templateUrl: './home-banner.component.html',
    styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {

    searchResults: {
        popover: HTMLIonPopoverElement,
        resultsSubject: BehaviorSubject<{ set: Set<{ obj: any, app: any }>, searchTerm: string }>
    } = { popover: undefined, resultsSubject: new BehaviorSubject({ set: new Set(), searchTerm: '' }) };
    categories = [];
    products = [];
    lastPulled: Map<any[], Date> = new Map<any[], Date>();
    popoverLock = false;


    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private filterAndSearchService: FilterAndSearchService,
        private popoverController: PopoverController) {
    }

    ngOnInit() {
        this.updateCategoriesAndProducts();
    }

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

    updateCategoriesAndProducts() {
        if (this.categories.length === 0 || (new Date().getTime() - this.lastPulled.get(this.categories).getTime()) > 45000) {
            this.updateCategories();
        }
        if (this.products.length === 0 || (new Date().getTime() - this.lastPulled.get(this.products).getTime()) > 45000) {
            this.updateProducts();
        }
    }

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

    
    closeSearchResultPopover() {
        if (this.popoverLock) { return; }
        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').removeEventListener('scroll', () => {
            this.popoverController.dismiss(this.searchResults.popover.id);
        });
        this.popoverController.dismiss(this.searchResults.popover.id);
        this.searchResults.popover = undefined;
    }

    async presentPopover(ev: any) {
        const popoverElement = await this.popoverController.create({
            component: SearchResultComponent,
            translucent: true,
            cssClass: 'results',
            leaveAnimation: null,
            animated: false,
            event:ev,
            backdropDismiss: false,
            componentProps: {
                searchResults: this.searchResults
            }
        });

        this.searchResults.popover = popoverElement;
        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').addEventListener('scroll', () => {
            this.popoverController.dismiss(this.searchResults.popover.id);
        });
        return await popoverElement.present();
    }
}
