import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {ProductService} from 'src/app/core/services/productService/product.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {isUndefined} from 'util';
import {NotificationService} from '../../../core/services/notificationService/notification.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';
import { isDefined } from '@angular/compiler/src/util';

/**
 * The component for the admin panel to manage offers
 *  - accept
 *  - send to revise status
 *  - delete
 */
@Component({
    selector: 'app-manage-offers',
    templateUrl: './manage-offers.component.html',
    styleUrls: ['./manage-offers.component.scss'],
})
export class ManageOffersComponent {
    /**
     * The current sorting, where 0 stands for not sorting for this field, + stands for ascending and - for descending
     */
    sorting: {name: 0 | '+' | '-', seller: 0 | '+' | '-', status: 0 | '+' | '-'} = {name: 0, seller: 0, status: 0};
    /**
     * The list of all displayed offers
     */
    listOfOffers;
    /**
     * the list of all offers
     */
    private listOfAllOffers;
    /**
     * the filter options
     */
    private filterOptions: {showVerified: boolean, showRevising: boolean} = { showVerified: true, showRevising: true};

    /**
     * @ignore
     */
    constructor(
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private notificationService: NotificationService,
        private filterService: FilterAndSearchService) {
    }
    /**
     * Fetches all products from the backend
     */
    getAllProducts() {
        return new Promise((resolve, reject) => {
            this.productService.getAllProducts().subscribe(
                data => {
                    resolve(data);
                },
                err => {
                    this.progressIndicatorService.presentToast('Products could not be loaded', 'danger');
                    reject(err);
                }
            );
        });
    }

    /**
     * Deletes an offer and notifies the seller about it
     * @param productId the productId of the product
     * @param productName  the name of the product
     * @param sellerId the id of the seller
     */
    deleteOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.deleteProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product deleted');
                this.notifySeller(productId, productName, sellerId, 'delete');
                this.updateProducts();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be deleted', 'danger');
                console.log(err);
            },
        );
    }

    /**
     * Verifies an offer and notifies the seller about it
     * @param productId the productId of the product
     * @param productName  the name of the product
     * @param sellerId the id of the seller
     */
    verifyOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.verifyProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product verified');
                this.updateProducts();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be verified', 'danger');
                console.log(err);
            }
        );
    }

    /**
     * Sends an offer to the revise status and notifies the seller about it
     * @param productId the productId of the product
     * @param productName  the name of the product
     * @param sellerId the id of the seller
     */
    reviseOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.reviseProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Revision initialized');
                this.updateProducts();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Revision could not be initialized', 'danger');
                console.log(err);
            }
        );
    }

    /**
     * Updates all products and displays loading indicator
     */
    updateProducts() {
        this.progressIndicatorService.presentLoading('Updating Products...');
        this.getAllProducts().then(data => {
            this.listOfAllOffers = data;
            this.filterProducts();
            this.progressIndicatorService.dismissLoadingIndicator();
        }, err => {
            this.progressIndicatorService.dismissLoadingIndicator();
            console.log(err);
        });
    }

    /**
     * Toggles the filter option whether to show verified offers or not
     * @param event the event of the toggle
     */
    onToggleShowVerified(event) {
        this.filterOptions.showVerified = event.target.checked;
        this.filterProducts();
    }

    /**
     * Toggles the filter option whether to show revising offers or not
     * @param event the event of the toggle
     */
    onToggleShowRevise(event) {
        this.filterOptions.showRevising = event.target.checked;
        this.filterProducts();
    }

    /**
     * Filters products
     */
    filterProducts() {
        let productsToShow = this.listOfAllOffers;
        if (this.filterOptions.showRevising === false) {
            productsToShow = this.filterService.filter(productsToShow, '=;toRevise;0');
        }
        if (this.filterOptions.showVerified === false) {
            productsToShow = this.filterService.filter(productsToShow, '=;verified;0');
        }
        this.listOfOffers = productsToShow;
    }

    /**
     * Notifies the seller about an update with the sellers product
     * @param productId the productId of the product
     * @param productName  the name of the product
     * @param sellerId the id of the seller
     * @param notificationType the type of notification
     */
    notifySeller(productId: string, productName: string, sellerId: string, notificationType: string) {
        let link = '/home';
        let message = '';

        if (notificationType === 'delete') {
            message = `Your product ${productName} has been deleted`;
            link = '/selling';
        }

        // remove this once backend removed text or message
        const text = message;
        // create the body for the backend request
        const body = `{"text":"${text}", "message":"${message}", "userId":"${sellerId}", "link":"${link}"}`;
        setTimeout(() => {
            this.notificationService.notifySingleUser(sellerId, body).subscribe(
                data => {
                }, err => {
                    this.progressIndicatorService.presentToast('Error while trying to notify seller', 'danger');
                    console.log(err);
                }
            );
        }, 3750);
    }

    /**
     * Changes the sorting of the displayed offers
     * @param evt the change event of the selection
     */
    onSortChange(evt) {
        const fieldNameMap  = new Map<string, string>([
            ['name', 'name'],
            ['seller.name', 'seller'],
            ['status', 'status']
        ]);
        this.sorting = {name: 0, seller: 0, status: 0};
        const sortString: string = evt.target.value;
        const key = fieldNameMap.get(sortString.substring(1));
        if (isDefined(key)) {this.sorting[key] = sortString.charAt(0); }
        if (sortString.endsWith('status')) {
            const sortDirection = this.sorting.status;
            this.filterService.sort(this.listOfOffers, `${sortDirection}verified`, `${sortDirection}toRevise`, '-date');
        } else {
            this.filterService.sort(this.listOfOffers, (evt as any).target.value, '-date');
        }
    }

    /**
     * Returns the Date as an UTC string
     * @param stringRepresentation the date as a string
     */
    getDateString(stringRepresentation: string): string {
        return new Date(stringRepresentation).toUTCString();
    }

    /**
     * sort by the fieldname, which was clicked on
     * @param fieldname the fieldname that was clicked on
     */
    sortBy(fieldname: string) {
        const fieldNameMap  = new Map<string, string>([
            ['name', 'name'],
            ['seller.name', 'seller'],
            ['status', 'status']
        ]);
        let newSortDirection = '-';
        if (this.sorting[fieldNameMap.get(fieldname)] === '-') {
            newSortDirection = '+';
        }
        const evt: {target: {value: string}} = {target: {value: `${newSortDirection}${fieldname}`}};
        this.onSortChange(evt);
    }
}
