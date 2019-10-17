import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../core/header.module';
import { AuthModule } from '../../core/auth.module';

import { RegisteredPage } from './registered.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteredPage
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
  declarations: [RegisteredPage]
})
export class RegisteredPageModule {}
