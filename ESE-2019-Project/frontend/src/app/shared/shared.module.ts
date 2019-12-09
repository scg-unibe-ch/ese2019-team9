import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {IonicModule} from '@ionic/angular';
import { ProfileInformationsComponent } from './components/profile-informations/profile-informations.component';
import {ImagePickerComponent} from "./components/image-picker/image-picker.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SubcategoryItemComponent} from "./components/subcategory-item/subcategory-item.component";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent, FooterComponent, SubcategoryItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [RatingComponent, ProfileInformationsComponent, ImagePickerComponent, FooterComponent, SubcategoryItemComponent]
})
export class SharedModule { }
