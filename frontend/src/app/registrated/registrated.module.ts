import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HeaderModule} from '../header/header.module';

import { RegistratedPage } from './registrated.page';

const routes: Routes = [
  {
    path: '',
    component: RegistratedPage
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
  declarations: [RegistratedPage]
})
export class RegistratedPageModule {}
