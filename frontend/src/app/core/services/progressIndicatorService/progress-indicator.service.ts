import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { isUndefined } from 'util';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  constructor(private toastController: ToastController, private loadingController: LoadingController) { }

  async presentToast(message: string, duration?: number, color?: string, closeBtn?: boolean) {
    const isSuccess: boolean = this.isSuccessToast(color);
    const toastDuration = (isDefined(duration)) ? duration :
      (isSuccess) ? environment.notificationsLength.success : environment.notificationsLength.failure;
    const toastColor = (isDefined(color)) ?  color : 'success';
    const showCloseButton = (isDefined(closeBtn)) ? closeBtn : true;
    const closeButtonText = 'Ok';
    const toast = await this.toastController.create({
      message,
      duration: toastDuration,
      color: toastColor,
      showCloseButton,
      closeButtonText
    });
    toast.present();
  }
  
  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: '<img class="custom-spinner" src="../../../assets/images/logo.png">' + message,
      backdropDismiss: true,
      spinner: null,
      duration: 5000,
      cssClass: 'loadingSpinner'
    });
    await loading.present();
  }

  dismissLoadingIndicator() {
    this.loadingController.dismiss();
  }

  private isSuccessToast(color: string): boolean{
    if (isUndefined(color) || color === 'success') {
      return true;
    } else {
      return false;
    }
  }
}
