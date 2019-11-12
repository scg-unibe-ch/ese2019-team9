import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SubcategoryPage} from './subcategory.page';
import {HeaderModule} from '../../core/header.module';
import {SubcategoryItemComponent} from './subcategory-item/subcategory-item.component';
import {SharedModule} from '../../shared/shared.module';
import {CarouselModule} from '../../shared/carousel.module';
import {FilterRatingComponent} from './filter-rating/filter-rating.component';
import {FilterLocationComponent} from './filter-location/filter-location.component';
import {FilterPriceComponent} from './filter-price/filter-price.component';

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
        HeaderModule,
        SharedModule,
        CarouselModule
    ],
    declarations: [SubcategoryPage, SubcategoryItemComponent, FilterRatingComponent, FilterLocationComponent, FilterPriceComponent],
    entryComponents: [FilterPriceComponent, FilterLocationComponent, FilterRatingComponent]
})
export class SubcategoryPageModule {
}
