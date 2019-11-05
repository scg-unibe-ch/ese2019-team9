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
  { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
