import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoleguardService } from './core/services/roleguardService/roleguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'verify', loadChildren: './pages/verify/verify.module#VerifyPageModule' },
  { path: 'registered', loadChildren: './pages/registered/registered.module#RegisteredPageModule' },
  { path: 'subcategory', loadChildren: './pages/subcategory/subcategory.module#SubcategoryPageModule' },

  { path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule', canActivate: [RoleguardService],
  data: { expectedRole: 'admin' }},
  { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'add-products', loadChildren: './pages/add-products/add-products.module#AddProductsPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'my-products', loadChildren: './pages/my-products/my-products.module#MyProductsPageModule' },
  { path: 'my-orders', loadChildren: './pages/my-orders/my-orders.module#MyOrdersPageModule' },
  { path: 'order-details', loadChildren: './pages/order-details/order-details.module#OrderDetailsPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'user/:userId', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' },
  { path: 'payment/:token', loadChildren: './pages/payment/payment.module#PaymentPageModule'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
