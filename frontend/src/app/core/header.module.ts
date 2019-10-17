import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {HeaderComponent} from './header/header.component';
import {TopHeaderComponent} from './header/top-header/top-header.component';
import {TopHeaderEndComponent} from './header/top-header/top-header-end/top-header-end.component';
import {BottomHeaderComponent} from './header/bottom-header/bottom-header.component';
import {LogoComponent} from './header/logo/logo.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';


@NgModule({
  declarations: [HeaderComponent, TopHeaderComponent, TopHeaderEndComponent,
    BottomHeaderComponent, LogoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ])
  ],
  exports: [HeaderComponent, TopHeaderComponent]
})
export class HeaderModule { }
