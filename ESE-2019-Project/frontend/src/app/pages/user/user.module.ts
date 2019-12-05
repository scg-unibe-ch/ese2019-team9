import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { HeaderModule } from 'src/app/core/header.module';
import {SharedModule} from "../../shared/shared.module";
import {InputFormModule} from '../../shared/input-form.module';
import {SubcategoryItemComponent} from 'src/app/pages/subcategory/subcategory-item/subcategory-item.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [UserPage, SubcategoryItemComponent]
})
export class UserPageModule {}
