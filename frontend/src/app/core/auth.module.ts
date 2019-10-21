import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  exports: [LoginComponent, RegistrationComponent, ForgotPasswordComponent]
})
export class AuthModule { }
