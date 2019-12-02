import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPage } from './order-details.page';
import {HeaderModule} from '../../core/header.module';
import {SharedModule} from '../../shared/shared.module';
import {InputFormModule} from '../../shared/input-form.module';

const routes: Routes = [
  {  path: '',  component: OrderDetailsPage },
  {  path: ':orderId', component: OrderDetailsPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SharedModule,
    InputFormModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderDetailsPage]
})
export class OrderDetailsPageModule {}
