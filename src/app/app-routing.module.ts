
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-auth',
    component: SellingAuthComponent,
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductsComponent,
    canActivate:[authGuard]
  },
  {
    path:'seller-update-product',
    component:SellerUpdateProductComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
