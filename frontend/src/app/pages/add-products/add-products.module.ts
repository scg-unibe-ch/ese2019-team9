import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddProductsPage } from './add-products.page';
import {HeaderModule} from '../../core/header.module';
import {InputFormModule} from '../../shared/input-form.module';
import {SharedModule} from '../../shared/shared.module';
import {MapPickerComponent} from './map-picker/map-picker.component';
import {MapModalComponent} from './map-modal/map-modal.component';


const routes: Routes = [
  {
    path: '',
    component: AddProductsPage
  }
];

@NgModule({
  declarations: [AddProductsPage, MapPickerComponent, MapModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    SharedModule,
    InputFormModule,
  ],
  exports: [MapPickerComponent, MapModalComponent],
  entryComponents: [MapModalComponent]
})
export class AddProductsPageModule {}


