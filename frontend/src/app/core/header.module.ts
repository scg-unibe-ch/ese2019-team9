import {Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFormModule} from '../shared/input-form.module';

import { AuthModule } from './auth.module';

import {HeaderComponent} from './header/header.component';
import {TopHeaderComponent} from './header/top-header/top-header.component';
import {TopHeaderEndComponent} from './header/top-header/top-header-end/top-header-end.component';
import {NavigationBarComponent} from './header/navigation-bar/navigation-bar.component';
import {LogoComponent} from './header/logo/logo.component';
import {HomeBannerComponent} from '../pages/home/home-banner/home-banner.component';

import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';
import {CategoryMenuComponent} from "./header/navigation-bar/category-menu/category-menu.component";


@NgModule({
    declarations: [HeaderComponent, TopHeaderComponent, TopHeaderEndComponent,
        NavigationBarComponent, LogoComponent, HomeBannerComponent, CategoryMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormModule,
    AuthModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent }
    ])
  ],
    exports: [HeaderComponent, TopHeaderComponent, HomeBannerComponent, NavigationBarComponent, LogoComponent]
})
export class HeaderModule { }
