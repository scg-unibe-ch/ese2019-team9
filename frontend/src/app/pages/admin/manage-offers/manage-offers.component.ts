import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {ProductService} from 'src/app/core/services/productService/product.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {isUndefined} from 'util';
import {NotificationService} from '../../../core/services/notificationService/notification.service';
import { FilterAndSearchService } from 'src/app/core/services/filterAndSearchService/filter-and-search.service';

@Component({
    selector: 'app-manage-offers',
    templateUrl: './manage-offers.component.html',
    styleUrls: ['./manage-offers.component.scss'],
})
export class ManageOffersComponent implements OnInit {
    listOfOffers;
    private listOfAllOffers;
    private showVerified = true;
    private filterOptions: {showVerified: boolean, showRevising: boolean} = { showVerified: true, showRevising: true};

    constructor(
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private notificationService: NotificationService,
        private filterService: FilterAndSearchService) {
    }

    ngOnInit() {
    }

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

    deleteOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.deleteProduct(productId).pipe(first()).subscribe(
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

    onToggleShowVerified(event) {
        this.filterOptions.showVerified = event.target.checked;
        this.filterProducts();
    }

    onToggleShowRevise(event) {
        this.filterOptions.showRevising = event.target.checked;
        this.filterProducts();
    }

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

    notifySeller(productId: string, productName: string, sellerId: string, notificationType: string) {
        let link = '/home';
        let message = '';

        if (notificationType === 'delete') {
            message = `Your product ${productName} has been deleted`;
            link = '/my-products';
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

    onSortChange(evt) {
        this.filterService.sort(this.listOfOffers, (evt as any).target.value, '-date');
    }

    getDateString(stringRepresentation: string): string {
        return new Date(stringRepresentation).toUTCString();
    }
}
