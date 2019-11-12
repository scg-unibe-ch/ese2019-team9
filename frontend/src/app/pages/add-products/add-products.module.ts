import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddProductsPage } from './add-products.page';
import {HeaderModule} from '../../core/header.module';
import {InputFormModule} from '../../shared/input-form.module';
import { ImagePickerComponent } from './image-picker/image-picker.component';

const routes: Routes = [
  {
    path: '',
    component: AddProductsPage
  }
];

@NgModule({
  declarations: [ImagePickerComponent, AddProductsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    InputFormModule
  ],
  exports: [ImagePickerComponent]
})
export class AddProductsPageModule {}


