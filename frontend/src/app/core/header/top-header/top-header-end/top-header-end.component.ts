import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import {LoginComponent} from '../../../authentication/login/login.component';
import {RegistrationComponent} from '../../../authentication/registration/registration.component';
import { AuthService } from 'src/app/core/services/authService/auth.service';

/**
 * Component containing the Buttons in the upper right corner. 
 * Contains:
 *  - `Login` Button
 *  - `Join` Button to register
 *  - `Admin` Button to get to the admin realm
 *  - `Logout` Button
 *  - `Profile` Button to get to the profile page
 */
@Component({
  selector: 'app-top-header-end',
  templateUrl: './top-header-end.component.html',
  styleUrls: ['./top-header-end.component.scss']
})
export class TopHeaderEndComponent {

  /**
   * Assign new private variables `popoverController` and `authService`
   * @param popoverController Auto injected Popovercontroller
   * @param authService Auto injected AuthService
   */
  constructor(
      private popoverController: PopoverController,
      private authService: AuthService) { }

  /**
   * Creates and displays a Popover via the `PopoverController`
   * with the {@link LoginComponent} as the component. 
   * When dismissed with the {@link LoginComponent.html#presentRegistrationPopover presentRegistrationPopover method} dismisses the 
   * current {@link LoginComponent} popover and opens the `registration Popover` via {@link #presentRegistrationPopover} 
   */
  async presentLoginPopover() {
    const popover = await this.popoverController.create({
      component: LoginComponent,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
    });
    popover.onDidDismiss().then((data) => {
		if (data.data === 'openRegistration') {
			this.presentRegistrationPopover();
		}
    });
    return await popover.present();
  }

   /**
   * Creates and displays a Popover via the `PopoverController`
   * with the {@link RegistrationComponent} as the component. 
   * When dismissed with the {@link RegistrationComponent.html#presentLoginPopover presentLoginPopover method} dismisses the 
   * current {@link RegistrationComponent} popover and opens the `Login Popover` via {@link #presentLoginPopover} 
   */
  async presentRegistrationPopover() {
    const popover = await this.popoverController.create({
      component: RegistrationComponent,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'
	});
	popover.onDidDismiss().then((data) => {
		if (data.data === 'openLogin') {
			this.presentLoginPopover();
		}
    });
    return await popover.present();
  }
}
