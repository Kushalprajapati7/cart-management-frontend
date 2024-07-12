import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/core/interface/cartInterface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent  implements OnInit{
 cartList:any;

 constructor(
  private cartService:CartService
 ){}

 ngOnInit(): void {
   this.loadAllCarts();
 }
 loadAllCarts(){
  this.cartService.allCarts().subscribe(
    (data:ICart[])=>{
      this.cartList = data
    },
    (error)=>{
      console.error(error)
    }
  )
 }

}
