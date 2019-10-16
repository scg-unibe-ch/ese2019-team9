import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoginComponent } from '../../../login/login.component';
import { RegistrationComponent } from '../../../registration/registration.component';
import { AuthService} from '../../../auth.service';
import {PopoverService} from '../../../popover.service';

@Component({
  selector: 'app-top-header-end',
  templateUrl: './top-header-end.component.html',
  styleUrls: ['./top-header-end.component.scss'],
})
export class TopHeaderEndComponent implements OnInit {

  constructor(
      private popoverController: PopoverController,
      private authService: AuthService) { }

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
