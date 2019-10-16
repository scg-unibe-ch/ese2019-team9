import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeaderModule} from '../header/header.module';

import { HomePage } from './home.page';
import { FooterComponent} from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ]),
    HeaderModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [HomePage, FooterComponent]
})
export class HomePageModule {}
