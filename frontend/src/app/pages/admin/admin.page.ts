import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { first } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private selectedTab;
  private listOfOffers;
  private listOfAllOffers;
  private showVerified = true;

    constructor(private productService: ProductService,public toastController: ToastController, public loadingController: LoadingController) {
    }

    ngOnInit() {
      this.selectedTab = 0;
      this.selectTabDeleteOffers();
    }

    onTabSwitch(evt: CustomEvent) {
        const id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
        if (id === 0) {
            this.selectTabDeleteOffers();
        } else if (id === 1) {
            this.selectTabManageUsers();
        }
    }

    selectTabDeleteOffers() {
       this.updateProducts();
    }

    selectTabManageUsers() {
        // (Re-)load all Users from Backend
    }

    getAllProducts(){
      return new Promise((resolve, reject)=>{
        this.productService.getAllProducts().pipe(first()).subscribe(
        data => {
          resolve(data);
        },
        err => {
          this.presentToast('Products could not be loaded', 2000, "danger");
          reject(err);
        }
      );
    });
  }

  deleteOffer(productId: string) {
    this.presentLoading('Loading...');
    this.productService.deleteProduct(productId).pipe(first()).subscribe(
      data => {
        this.loadingController.dismiss();
        this.presentToast('Product deleted', 2000);
        this.updateProducts();
      },
      err => {
        this.loadingController.dismiss();
        this.presentToast('Product could not be verified', 2000, "danger");
        console.log(err);
      }, 
    );
  }

  verifyOffer(productId: string) {
    this.presentLoading('Loading...');
    this.productService.verifyProduct(productId).pipe(first()).subscribe(
      data => {
        this.loadingController.dismiss();
        this.presentToast('Product verified', 2000);
        this.updateProducts();
      },
      err => {
        this.loadingController.dismiss();
        this.presentToast('Product could not be verified', 2000, "danger");
        console.log(err);
      }
    );
  }

  updateProducts(){
    this.getAllProducts().then(data => {
      this.listOfAllOffers = data;
      if (this.showVerified) this.listOfOffers = this.listOfAllOffers;
      if (!this.showVerified) this.listOfOffers = filter(this.listOfAllOffers);
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  async presentToast(message: string, duration: number, color?: string) {
    const toastColor = (color) ?  color :"primary";
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: toastColor,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        }
      ]   
    });
    toast.present();
  }

  async presentLoading(message: string){
    const loading = await this.loadingController.create({
      message: message
    });
    await loading.present();
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
