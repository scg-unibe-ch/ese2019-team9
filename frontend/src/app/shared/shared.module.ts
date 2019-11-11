import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {IonicModule} from '@ionic/angular';
import { ProfileInformationsComponent } from './components/profile-informations/profile-informations.component';



@NgModule({
  declarations: [RatingComponent, ProfileInformationsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RatingComponent, ProfileInformationsComponent]
})
export class SharedModule { }
