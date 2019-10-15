import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {LoginComponent} from '../login/login.component';
import { BottomHeaderComponent } from '../header/bottom-header/bottom-header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import {LogoComponent} from '../header/logo/logo.component';
import {TopHeaderEndComponent} from '../header/top-header/top-header-end/top-header-end.component';
import { RegistrationComponent } from '../registration/registration.component';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '', component: HomePage },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ]),
    ReactiveFormsModule
  ],
  exports: [HeaderComponent],
  declarations: [HomePage, LoginComponent,
    BottomHeaderComponent, LogoComponent,
    TopHeaderComponent, TopHeaderEndComponent,
    RegistrationComponent, HeaderComponent]
})
export class HomePageModule {}
