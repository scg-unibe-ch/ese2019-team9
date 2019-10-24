import { Injectable } from '@angular/core';
import {PopoverController} from '@ionic/angular';

import {LoginComponent} from '../../authentication/login/login.component';
import {RegistrationComponent} from '../../authentication/registration/registration.component';
import {PopoverModule} from '../../popover.module';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
      private popoverController: PopoverController
  ) { }

  async presentLoginPopover(ev: any, comp: any) {
    return await this.popoverController.create({
      component: comp,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
  }

  async presentRegistrationPopover(ev: any, component: any) {
    const popover = await this.popoverController.create({
      component,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
    return popover;
  }
}
