import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {IonicModule} from '@ionic/angular';
import { ProfileInformationsComponent } from './components/profile-informations/profile-informations.component';
import {ImagePickerComponent} from "./components/image-picker/image-picker.component";



@NgModule({
  declarations: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent]
})
export class SharedModule { }
