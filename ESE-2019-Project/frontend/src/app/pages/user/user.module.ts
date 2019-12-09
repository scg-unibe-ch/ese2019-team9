import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { HeaderModule } from 'src/app/core/header.module';
import {SharedModule} from "../../shared/shared.module";
import {SubcategoryPageModule} from "../subcategory/subcategory.module";

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SharedModule,
    RouterModule.forChild(routes),
    SubcategoryPageModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
