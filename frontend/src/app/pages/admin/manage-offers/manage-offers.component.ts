import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {ProductService} from 'src/app/core/services/productService/product.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {isUndefined} from 'util';
import {NotificationService} from '../../../core/services/notificationService/notification.service';

@Component({
    selector: 'app-manage-offers',
    templateUrl: './manage-offers.component.html',
    styleUrls: ['./manage-offers.component.scss'],
})
export class ManageOffersComponent implements OnInit {
    private listOfOffers;
    private listOfAllOffers;
    private showVerified = true;

    constructor(
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private notificationService: NotificationService) {
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
                    this.progressIndicatorService.presentToast('Products could not be loaded', 3500, "danger");
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
                this.progressIndicatorService.presentToast('Product deleted', 3500);
                this.updateProducts();
                this.notifySeller(productId, productName, sellerId, 'delete');
                
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be deleted', 3500, "danger");
                console.log(err);
            },
        );
    }

    verifyOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.verifyProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product verified', 3500);
                this.updateProducts();
                this.notifySeller(productId, productName, sellerId, 'verify');
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be verified', 3500, 'danger');
                console.log(err);
            }
        );
    }

    reviseOffer(productId: string, productName: string, sellerId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.reviseProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Revision initialized', 3500);
                this.updateProducts();
                this.notifySeller(productId, productName, sellerId, 'revise');
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Revision could not be initialized', 3500, 'danger');
                console.log(err);
            }
        );
    }

    updateProducts() {
        this.progressIndicatorService.presentLoading('Updating Products...');
        this.getAllProducts().then(data => {
            this.listOfAllOffers = data;
            if (this.showVerified) this.listOfOffers = this.listOfAllOffers;
            if (!this.showVerified) this.listOfOffers = this.filter(this.listOfAllOffers);
            this.progressIndicatorService.dismissLoadingIndicator();
        }, err => {
            this.progressIndicatorService.dismissLoadingIndicator();
            console.log(err);
        });
    }

    onToggleShowVerified(event) {
        if (event.target.checked) {
            this.listOfOffers = this.listOfAllOffers;
        } else {
            this.listOfOffers = this.filter(this.listOfAllOffers);
        }
    }

    filter(array: []) {
        if (isUndefined(array) || array.length == 0) return [];
        return array.filter(product => !(product as any).verified);
    }

    notifySeller(productId: string, productName: string, sellerId: string, notificationType: string) {
        let link = '/home';
        let message = '';
        if (notificationType === 'delete') {
            message = 'Product deleted: ' + productName;
            link = '/add-products';
        } else if (notificationType === 'verify') {
            message = 'Product verified: ' + productName;
            link = `/product-details/${productId}`;
        } else if (notificationType === 'revise') {
            message = 'Revise: ' + productName;
            link = `/product-details/${productId}`;
        }
        // remove this once backend removed text or message
        const text = message;
        // create the body for the backend request
        const body = `{"text":"${text}", "message":"${message}", "userId":"${sellerId}", "link":"${link}"}`;
        setTimeout(() => {
            this.notificationService.notifySingleUser(sellerId, body).subscribe(
                data => {
                    this.progressIndicatorService.presentToast('Seller notified', 3500, 'success');
                }, err => {
                    this.progressIndicatorService.presentToast('Seller not notified', 3500, 'danger');
                    console.log(err);
                }
            );
        }, 2250);
    }
}
