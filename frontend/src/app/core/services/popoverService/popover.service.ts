import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
      private popoverController: PopoverController) { }
}
