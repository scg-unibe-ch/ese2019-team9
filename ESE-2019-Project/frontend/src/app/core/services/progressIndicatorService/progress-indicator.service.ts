import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { isUndefined } from 'util';
import { isDefined } from '@angular/compiler/src/util';

/**
 * The ProgressIndicator Service which handles
 *  - Presenting of a toast
 *  - displaying of a loading overlay
 *  - dismissing the top-most loading overlay
 */
@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {

  /**
   * Assigns two new private variables `toastController` and `loadingController`
   * @param toastController Auto injected ToastController used for displaying toasts
   * @param loadingController Auto injected Loading Controller used for displaying and dismissing loading overlays
   */
  constructor(private toastController: ToastController, private loadingController: LoadingController) { }

  /**
   * presents a toast
   * @param message the message in the toast
   * @param color the color of the toast background. If not specified it is 'success'
   * @param duration the duration of the toast. Default is 4500 for 'success' toasts 10'000 for others.
   * (Numbers specified in environment variables). Duration 0 for toasts that should stay forever
   * @param closeBtn True if a close Button should be shown. Defaults to true.
   * @param position The position of the toast on the screen.
   * @returns a promise that resolves true as soon as the toast is closed
   */
  async presentToast(message: string, color?: string, duration?: number | 'success' | 'other',
                     closeBtn?: boolean, position?: 'bottom' | 'middle' | 'top'):
  Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const isSuccess: boolean = this.isSuccessToast(color);
      const toastDuration = (isDefined(duration)) ? (this.getDurationFromVariable(duration)) :
      (isSuccess) ? environment.notificationsLength.success : environment.notificationsLength.other;
      const toastColor = (isDefined(color)) ?  color : 'success';
      const showCloseButton = (isDefined(closeBtn)) ? closeBtn : true;
      const closeButtonText = 'Ok';
      const toast = await this.toastController.create({
      message,
      duration: toastDuration,
      color: toastColor,
      showCloseButton,
      closeButtonText,
      position
    });
      toast.onDidDismiss().then(() => {
        resolve(true);
      });
      toast.present();
    });
  }

  /**
   * Resolves the duration into a number in milliseconds. If a string is given, it returns the environment variables with that indicator
   * @param duration a number or 'success' or 'other'
   * @returns the duration in milliseconds
   */
  private getDurationFromVariable(duration: number | 'success' | 'other' ): number {
    if (typeof duration === 'number') { return duration; } else if (duration === 'success') {
      return environment.notificationsLength.success;
    } else {
      return environment.notificationsLength.other;
    }
  }
  
  /**
   * Presents a loading overlay with the given message and the moln-logo spinner
   * @param message the message to display in the overlay
   */
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

  /**
   * Dismisses the top overlay if it has one
   */
  dismissLoadingIndicator() {
    this.loadingController.getTop().then((id: HTMLIonLoadingElement | undefined )=> {
      if (isUndefined(id)) { return; } else {
        this.loadingController.dismiss();
      }
    });
  }

  /**
   * Checks if the color is 'success' or undefined and not something different
   * @param color the color as a string
   * @returns true if the color is 'success' or undefined
   */
  private isSuccessToast(color: string): boolean{
    if (isUndefined(color) || color === 'success') {
      return true;
    } else {
      return false;
    }
  }
}
