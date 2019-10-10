import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {LoginComponent} from '../login/login.component';
import { BottomHeaderComponent } from '../header/bottom-header/bottom-header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import {LogoComponent} from '../header/logo/logo.component';
import {TopHeaderEndComponent} from "../header/top-header/top-header-end/top-header-end.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, LoginComponent, BottomHeaderComponent, LogoComponent, TopHeaderComponent, TopHeaderEndComponent]
})
export class HomePageModule {}
