import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import {HeaderModule} from "../../core/header.module";
import { AdminPage } from './admin.page';
import { DeleteOffersComponent } from './delete-offers/delete-offers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPage, DeleteOffersComponent]
})
export class AdminPageModule {}
