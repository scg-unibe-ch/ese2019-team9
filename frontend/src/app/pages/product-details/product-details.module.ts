import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPage } from './product-details.page';
import { HeaderModule } from 'src/app/core/header.module';

const routes: Routes = [
  {  path: '',  component: ProductDetailsPage },
  {  path: ':productId', component: ProductDetailsPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
