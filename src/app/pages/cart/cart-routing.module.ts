import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-cart',
    pathMatch: 'full'
  },
  {
    path: 'all-cart',
    component: CartDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
