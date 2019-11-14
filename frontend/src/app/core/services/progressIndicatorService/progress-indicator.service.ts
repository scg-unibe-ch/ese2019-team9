import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  constructor(private toastController: ToastController, private loadingController: LoadingController) { }

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
      message: '<img class="custom-spinner" src="../../../assets/images/logo.png">' + message,
      backdropDismiss: true,
      spinner: null,
      cssClass: "loadingSpinner"
    });
    await loading.present();
  }

  dismissLoadingIndicator() {
    // this.loadingController.dismiss();
  }
}
