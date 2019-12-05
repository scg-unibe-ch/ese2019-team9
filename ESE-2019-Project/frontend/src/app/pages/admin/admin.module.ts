import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import {HeaderModule} from '../../core/header.module';
import { AdminPage } from './admin.page';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from 'src/app/shared/input-form.module';

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
    SharedModule,
    InputFormModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPage, ManageOffersComponent, ManageUsersComponent, AddCategoryComponent]
})
export class AdminPageModule {}
