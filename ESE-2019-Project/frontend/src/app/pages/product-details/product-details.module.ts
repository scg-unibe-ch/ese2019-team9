import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPage } from './product-details.page';
import { HeaderModule } from 'src/app/core/header.module';
import {ProductReviewComponent} from "./product-review/product-review.component";
import {SharedModule} from "../../shared/shared.module";
import {InputFormModule} from '../../shared/input-form.module';
import { DatePicker } from '@ionic-native/date-picker/ngx';

const routes: Routes = [
  {  path: '',  component: ProductDetailsPage },
  {  path: ':productId', component: ProductDetailsPage }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        RouterModule.forChild(routes),
        SharedModule,
        InputFormModule
    ],
    declarations: [ProductDetailsPage, ProductReviewComponent],
    providers:[DatePicker]
})
export class ProductDetailsPageModule {}
