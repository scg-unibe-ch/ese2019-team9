import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputFormComponent} from '../shared/components/input-form/input-form.component';



@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
      IonicModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
  ],
  exports: [InputFormComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class InputFormModule { }
