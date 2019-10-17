import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPage } from './verify.page';
import {HeaderModule} from '../../core/header.module';
import { AuthModule } from '../../core/auth.module';

const routes: Routes = [
  {
    path: '',
    component: VerifyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    AuthModule
  ],
  declarations: [VerifyPage]
})
export class VerifyPageModule {}
