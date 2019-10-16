import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';


import {HeaderComponent} from './header.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {TopHeaderEndComponent} from './top-header/top-header-end/top-header-end.component';
import {BottomHeaderComponent} from './bottom-header/bottom-header.component';
import {LogoComponent} from './logo/logo.component';



@NgModule({
  declarations: [HeaderComponent, TopHeaderComponent, TopHeaderEndComponent, BottomHeaderComponent, LogoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, TopHeaderComponent]
})
export class HeaderModule { }
