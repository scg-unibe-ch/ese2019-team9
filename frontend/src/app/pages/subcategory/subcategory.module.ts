import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SubcategoryPage} from './subcategory.page';
import {HeaderModule} from '../../core/header.module';
import {SubcategoryItemComponent} from './subcategory-item/subcategory-item.component';

const routes: Routes = [
    {path: '', component: SubcategoryPage},
    {path: ':subcategorySlug', component: SubcategoryPage},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    declarations: [SubcategoryPage, SubcategoryItemComponent]
})
export class SubcategoryPageModule {
}
