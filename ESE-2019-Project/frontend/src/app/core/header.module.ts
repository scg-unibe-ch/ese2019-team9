import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFormModule} from '../shared/input-form.module';

import {AuthModule} from './auth.module';

import {HeaderComponent} from './header/header.component';
import {TopHeaderComponent} from './header/top-header/top-header.component';
import {HeaderButtonsComponent} from './header/top-header/header-buttons/header-buttons.component';
import {NavigationBarComponent} from './header/navigation-bar/navigation-bar.component';
import {HomeBannerComponent} from '../pages/home/home-banner/home-banner.component';

import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';
import {CategoryMenuComponent} from './header/navigation-bar/category-menu/category-menu.component';


@NgModule({
    declarations: [HeaderComponent, TopHeaderComponent, HeaderButtonsComponent,
        NavigationBarComponent, HomeBannerComponent, CategoryMenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        InputFormModule,
        AuthModule,
        RouterModule.forChild([
            {path: 'login', component: LoginComponent},
            {path: 'registration', component: RegistrationComponent},
            {path: 'forgotPassword', component: ForgotPasswordComponent}
        ])
    ],
    exports: [HeaderComponent, TopHeaderComponent, HeaderButtonsComponent, HomeBannerComponent, NavigationBarComponent]
})
export class HeaderModule {
}
