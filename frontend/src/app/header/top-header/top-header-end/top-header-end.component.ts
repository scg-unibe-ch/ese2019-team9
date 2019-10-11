import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoginComponent } from '../../../login/login.component';


@Component({
  selector: 'app-top-header-end',
  templateUrl: './top-header-end.component.html',
  styleUrls: ['./top-header-end.component.scss'],
})
export class TopHeaderEndComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'popover-style'

    });
    return await popover.present();
  }

}
