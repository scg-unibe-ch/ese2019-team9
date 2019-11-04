import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeaderModule} from '../../core/header.module';
import { AuthModule } from '../../core/auth.module';
import { CarouselModule } from '../../shared/carousel.module';

import { HomePage } from './home.page';
import {FooterComponent} from '../../core/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage }
    ]),
    HeaderModule,
    AuthModule,
    CarouselModule
  ],
  exports: [],
  declarations: [HomePage, FooterComponent]
})
export class HomePageModule {}
