import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import {AuthService} from '../../../services/authService/auth.service';
import {PopoverService} from '../../../services/popoverService/popover.service';
import {LoginComponent} from '../../../authentication/login/login.component';
import {RegistrationComponent} from '../../../authentication/registration/registration.component';

@Component({
  selector: 'app-top-header-end',
  templateUrl: './top-header-end.component.html',
  styleUrls: ['./top-header-end.component.scss'],
})
export class TopHeaderEndComponent implements OnInit {

  constructor(
      private popoverController: PopoverController,
      private authService: AuthService,
      private popoverService: PopoverService) { }

  ngOnInit() {}

  async presentLoginPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
    return await popover.present();
  }

  async presentRegistrationPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: RegistrationComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
    return await popover.present();
  }
}
