import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubcategoryPage } from './subcategory.page';
import {HeaderModule} from "../../core/header.module";

const routes: Routes = [
  {
    path: '',
    component: SubcategoryPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
  declarations: [SubcategoryPage]
})
export class SubcategoryPageModule {}
