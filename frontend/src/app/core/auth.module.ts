import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegistrationComponent]
})
export class AuthModule { }
