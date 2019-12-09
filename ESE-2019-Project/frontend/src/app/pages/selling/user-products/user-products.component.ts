import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/authService/auth.service';
import {ProductService} from '../../../core/services/productService/product.service';
import {ProgressIndicatorService} from '../../../core/services/progressIndicatorService/progress-indicator.service';
/**
 * A component to display all of the users product and a button to add a new product
 */
@Component({
    selector: 'app-user-products',
    templateUrl: './user-products.component.html',
    styleUrls: ['./user-products.component.scss'],
})
export class UserProductsComponent implements OnInit {
    /**
     * The id of the user
     */
    userId;
    /**
     * All Products of the user
     */
    products = [];
    /**
     * All values that should not be displayed to the user
     */
    valuesToHide = ['_id', 'id', 'category', 'seller', 'reviews', 'verified', 'image', 'toRevise', 'rating', 'openDetail', 'date'];
    /**
     * All values that should be displayed to the user but not as editable
     */
    additionalValues = ['category', 'verified', 'rating', 'toRevise', 'date'];
    /**
     * An indicator whether the products have finished laoding
     */
    loading = true;

    /**
     * Assings new private variables
     * @param authService Auto injected AuthService to get the user Id
     * @param productService Auto injected ProductService to fetch all Products of the user
     * @param progressIndicatorService Auto injected ProgressIndicatorService to display toasts to the user
     */
    constructor(
        private authService: AuthService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService
    ) {
    }

    /**
     * Fetches all Products of the user
     */
    ngOnInit() {
        this.getUserProducts();

    }

    /**
     * Delete a product identified by an Id
     * @param productId the id of the product which is to be deleted
     */
    deleteProduct(productId: string) {
        this.productService.deleteProduct(productId).subscribe(data => {
            this.progressIndicatorService.presentToast('Product successfully deleted');
            this.reloadProducts();
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Product could not be deleted', 'danger');
        });
    }

    /**
     * Fetches all Products of the user from the backend. Assigns the returned data to the {@link #products} and sets loading to false
     */
    getUserProducts() {
        this.userId = this.authService.getId();
        this.productService.getProductsByUserId(this.userId).subscribe(data => {
            this.products = data;
            this.loading = false;
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Products could not be updated', 'danger');
        });
    }

    /**
     * returns if the products are still being fetched from the backend
     */
    get isLoading() {
        return this.loading;
    }

    /**
     * sets loading to true and fetches the products from the backend again
     */
    reloadProducts() {
        this.loading = true;
        this.getUserProducts();
    }
}