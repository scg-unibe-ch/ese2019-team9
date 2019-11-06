import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { ProgressIndicatorService } from 'src/app/core/services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-delete-offers',
  templateUrl: './delete-offers.component.html',
  styleUrls: ['./delete-offers.component.scss'],
})
export class DeleteOffersComponent implements OnInit {
  private listOfOffers;
  private listOfAllOffers;
  private showVerified = true;
  
  constructor(private productService: ProductService, private progressIndicatorService: ProgressIndicatorService) { }

  ngOnInit() {}

  getAllProducts(){
    return new Promise((resolve, reject)=>{
      this.productService.getAllProducts().pipe(first()).subscribe(
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
  this.productService.verifyProduct(productId).pipe(first()).subscribe(
    data => {
      this.progressIndicatorService.dismissLoadingIndicator();
      this.progressIndicatorService.presentToast('Product verified', 2000);
      this.updateProducts();
    },
    err => {
      this.progressIndicatorService.dismissLoadingIndicator();
      this.progressIndicatorService.presentToast('Product could not be verified', 2000, "danger");
      console.log(err);
    }
  );
}

updateProducts(){
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

  onToggleShowVerified(event){
    if (event.target.checked){
      this.listOfOffers = this.listOfAllOffers;
    }else{
      this.listOfOffers = this.filter(this.listOfAllOffers);
    }
  }

  filter(array: []) {
    return array.filter(product => !(product as any).verified);
  }
}
