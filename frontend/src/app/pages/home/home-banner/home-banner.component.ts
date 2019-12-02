import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/categoryService/category.service';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { PopoverController } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component'
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-home-banner',
	templateUrl: './home-banner.component.html',
	styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {

	searchResults: {popover: HTMLIonPopoverElement, resultsSubject: BehaviorSubject<{set: Set<{obj: any, app: any}>, searchTerm: string}>} = {popover: undefined, resultsSubject: new BehaviorSubject({set: new Set(), searchTerm: ''})};
	categories = [];
	products = [];
	lastPulled: Map<any[], Date> = new Map<any[], Date>();
	popoverLock = false;
	

	constructor(private categoryService: CategoryService, private productService: ProductService, private progressIndicatorService: ProgressIndicatorService, private filterAndSearchService: FilterAndSearchService, private popoverController: PopoverController) {
	}

	ngOnInit() {
		this.updateCategoriesAndProducts();
	}

	onSearchbarChange(evt) {
		const value = evt.target.value;
		let allSubcategories = [];
		if (this.categories) {
			this.categories.forEach((cat) => {
				if (cat.subcategories && cat.subcategories.length){
					allSubcategories = allSubcategories.concat(cat.subcategories);
				}
			});
		}
		let searchableArray = [...allSubcategories];
		if (this.products) {
			searchableArray.push(...this.products);
		}
		if (searchableArray.length > 0) {
			let searchResults = this.filterAndSearchService.searchUnique(searchableArray as Object[], value, undefined, false, ['id', '_id', 'toRevise', 'verified', 'image', 'slug']);
			this.searchResults.resultsSubject.next({set: searchResults, searchTerm: value});
		}

	}

	updateCategoriesAndProducts() {
		if (this.categories.length === 0 || (new Date().getTime() - this.lastPulled.get(this.categories).getTime()) > 45000){
			this.updateCategories();
		}
		if (this.products.length === 0 || (new Date().getTime() - this.lastPulled.get(this.products).getTime()) > 45000){
			this.updateProducts();
		}
	}

	updateCategories(){
		this.categoryService.getCategories().subscribe((data) => {
			this.categories = data;
			this.lastPulled.set(this.categories, new Date());
		},
			(err) => {
				console.log(err);
				this.progressIndicatorService.presentToast(err.error.message, 3500, "danger");
			}
		);
	}

	updateProducts(){
		this.productService.getAllProducts().subscribe((data) => {
			this.products = data as any;
			this.lastPulled.set(this.products, new Date());
		},
			(err) => {
				console.log(err);
				this.progressIndicatorService.presentToast(err.error.message, 3500, "danger");
			}
		);
	}

	async openSearchResultPopover(){
		if (this.searchResults.popover) { 
			return; 
		}
		this.popoverLock = true;
		await this.presentPopover();
		document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').addEventListener('scroll', ()=> {
			this.modifyMargin();
		}); 
		(document.getElementsByClassName('popover-content')[0] as any).style = 'top: 5px; left: 0px; width: 100%, height: 100%';
		const evt = {target:{value: undefined}};
		evt.target.value = (document.getElementById('searchbar') as HTMLIonInputElement).value;
		this.onSearchbarChange(evt);	
		(document.getElementById('searchbar') as HTMLIonInputElement).setFocus();
		//this.popoverLock = false;
	}

	closeSearchResultPopover(){
		if (this.popoverLock) { return; }
		document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').removeEventListener('scroll', ()=> {
			this.modifyMargin();
		});
		this.popoverController.dismiss(this.searchResults.popover.id);
		this.searchResults.popover = undefined;
	}

	public modifyMargin() {
		if (!this.searchResults.popover) { return; }
		const searchbar =  document.getElementById('searchbar');
		this.searchResults.popover.style.marginTop = searchbar.getBoundingClientRect().bottom +'px';
	}	

	async presentPopover() {
	const popoverElement = await this.popoverController.create({
			component: SearchResultComponent,
			translucent: true,
			cssClass: 'results',
			event: event,
			backdropDismiss: false,
			componentProps: {
				searchResults: this.searchResults
			}
	});
	const searchbar =  document.getElementById('searchbar');
	popoverElement.style.marginTop =searchbar.getBoundingClientRect().bottom +'px';
	this.searchResults.popover = popoverElement;
	return await popoverElement.present();
  }
  
  
}
