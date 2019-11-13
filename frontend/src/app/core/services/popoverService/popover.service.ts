import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {PopoverController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  currentPopover;

  constructor(
      private popoverController: PopoverController,
      private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  async createPopover(comp: any) {
    const popover = await this.popoverController.create({
      component: comp,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
    this.currentPopover = popover;
    return popover;
  }

  dismissPopover(data? :any) {
    if (data) return this.popoverController.dismiss(data);
    this.popoverController.dismiss();
  }
}
