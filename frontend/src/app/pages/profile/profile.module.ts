import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import {HeaderModule} from '../../core/header.module';
import {SharedModule} from '../../shared/shared.module';
import {UserInformationComponent} from './user-information/user-information.component';
import {UserProductsComponent} from './user-products/user-products.component';
import {UserProductsInformationComponent} from "./user-products/user-products-information/user-products-information.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    SharedModule,
  ],
    declarations: [ProfilePage, UserInformationComponent, UserProductsComponent, UserProductsInformationComponent]
})
export class ProfilePageModule {}
