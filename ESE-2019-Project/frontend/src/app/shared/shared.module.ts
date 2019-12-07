import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {IonicModule} from '@ionic/angular';
import { ProfileInformationsComponent } from './components/profile-informations/profile-informations.component';
import {ImagePickerComponent} from "./components/image-picker/image-picker.component";
import {FooterComponent} from "./components/footer/footer.component";




@NgModule({
  declarations: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent, FooterComponent]
})
export class SharedModule { }
