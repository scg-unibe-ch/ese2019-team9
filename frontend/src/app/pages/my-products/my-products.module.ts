import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyProductsPage } from './my-products.page';
import {UserProductsComponent} from './user-products/user-products.component';
import {OrdersComponent} from './orders/orders.component';
import {HeaderModule} from '../../core/header.module';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MyProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyProductsPage, OrdersComponent, UserProductsComponent]
})
export class MyProductsPageModule {}
