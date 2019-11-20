import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/categoryService/category.service';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';

@Component({
	selector: 'app-home-banner',
	templateUrl: './home-banner.component.html',
	styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {

	categories = [];
	products = [];
	lastPulled: Map<any[], Date> = new Map<any[], Date>();

	constructor(private categoryService: CategoryService, private productService: ProductService, private progressIndicatorService: ProgressIndicatorService, private filterAndSearchService: FilterAndSearchService) {
	}

	ngOnInit() {
		this.updateCategoriesAndProducts();
	}

	onSearchbarChange(evt) {
		const value = evt.target.value;
		let searchableArray = (this.categories) ? [...this.categories] : [];
		if (this.products) {
			searchableArray.push(...this.products);
		}
		if (searchableArray.length > 0) {
			let searchResults = this.filterAndSearchService.searchUnique(searchableArray as Object[], value, undefined, false, ['id', '_id']);
			console.table(Array.from(searchResults)[0]);

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
				this.progressIndicatorService.presentToast(err.error.message, 2000, "danger");
			}
		);
	}

	updateProducts(){
		this.productService.getAllProducts().subscribe((data) => {
			this.products = data as any;
			this.lastPulled.set(this.products, new Date());
			console.log(this.products);
			console.log(this.filterAndSearchService.sort(this.products, "-name"));
		},
			(err) => {
				console.log(err);
				this.progressIndicatorService.presentToast(err.error.message, 2000, "danger");
			}
		);
	}
}
