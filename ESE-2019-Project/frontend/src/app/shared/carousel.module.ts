import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {CarouselComponent} from './components/carousel/carousel.component';
import {CarouselItemComponent} from './components/carousel/carousel-item/carousel-item.component';

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
  exports: [ CarouselComponent, CarouselItemComponent ]
})
export class CarouselModule { }
