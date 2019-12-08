import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {PopoverController} from '@ionic/angular';

/**
 * The popover service handling the dismissing of the popover
 */
@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  /**
   * Assings a new private variable to dismiss the popover
   * @param popoverController Auto injected PopoverController
   */
  constructor(
      private popoverController: PopoverController
  ) { }

  /**
   * Dismisses the popover
   * @param data The data which should be given with the dismission
   */
  dismissPopover(data?: any) {
    if (data) { return this.popoverController.dismiss(data); }
    return this.popoverController.dismiss();
  }
}
