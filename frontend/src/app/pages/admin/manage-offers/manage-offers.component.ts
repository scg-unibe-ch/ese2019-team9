import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {ProductService} from 'src/app/core/services/productService/product.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {isUndefined} from 'util';

@Component({
    selector: 'app-delete-offers',
    templateUrl: './manage-offers.component.html',
    styleUrls: ['./manage-offers.component.scss'],
})
export class ManageOffersComponent implements OnInit {
    private listOfOffers;
    private listOfAllOffers;
    private showVerified = true;

    constructor(
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService) {
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
                    this.progressIndicatorService.presentToast('Products could not be loaded', 2000, "danger");
                    reject(err);
                }
            );
        });
    }

    deleteOffer(productId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.deleteProduct(productId).pipe(first()).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product deleted', 2000);
                this.updateProducts();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be verified', 2000, "danger");
                console.log(err);
            },
        );
    }

    verifyOffer(productId: string) {
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.verifyProduct(productId).subscribe(
            data => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product verified', 2000);
                this.updateProducts();
            },
            err => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Product could not be verified', 2000, 'danger');
                console.log(err);
            }
        );
    }

    reviseOffer(productId: string) {
      this.progressIndicatorService.presentLoading('Loading...');
      this.productService.reviseProduct(productId).subscribe(
          data => {
            this.progressIndicatorService.dismissLoadingIndicator();
            this.progressIndicatorService.presentToast('Revision initialized', 2000);
            this.updateProducts();
          },
          err => {
            this.progressIndicatorService.dismissLoadingIndicator();
            this.progressIndicatorService.presentToast('Revision could not be initialized', 2000, 'danger');
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
}
