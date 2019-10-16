import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeaderModule} from '../header/header.module';

import { HomePage } from './home.page';
import {LoginComponent} from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import {FooterComponent} from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '', component: HomePage },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ]),
    HeaderModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [HomePage, LoginComponent,
    RegistrationComponent, FooterComponent]
})
export class HomePageModule {}
