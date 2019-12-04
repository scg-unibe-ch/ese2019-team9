import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {HeaderModule} from '../../core/header.module';
import {InputFormModule} from '../../shared/input-form.module';

import { ResetPage } from './reset.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule,
        InputFormModule
    ],
  declarations: [ResetPage]
})
export class ResetPageModule {}
