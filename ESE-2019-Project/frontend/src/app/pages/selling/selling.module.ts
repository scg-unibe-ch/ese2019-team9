import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SellingPage } from './selling.page';
import {UserProductsComponent} from './user-products/user-products.component';
import {OrdersComponent} from './orders/orders.component';
import {HeaderModule} from '../../core/header.module';
import {SharedModule} from '../../shared/shared.module';
import {InputFormModule} from '../../shared/input-form.module';

const routes: Routes = [
  {
    path: '',
    component: SellingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    InputFormModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SellingPage, OrdersComponent, UserProductsComponent]
})
export class SellingPageModule {}
