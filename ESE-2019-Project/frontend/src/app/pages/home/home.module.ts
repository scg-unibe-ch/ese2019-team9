import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeaderModule} from '../../core/header.module';
import { AuthModule } from '../../core/auth.module';
import { CarouselModule } from '../../shared/carousel.module';

import { HomePage } from './home.page';
import { SearchResultComponent } from './home-banner/search-result/search-result.component';
import {SharedModule} from "../../shared/shared.module";


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
    CarouselModule,
    SharedModule
  ],
  exports: [],
  declarations: [HomePage, SearchResultComponent],
  entryComponents: [SearchResultComponent]
})
export class HomePageModule {}
