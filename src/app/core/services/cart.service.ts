import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../interface/cartInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  allCarts(): Observable<ICart[]> {
    return this.http.get<ICart[]>('api/cart/shoAllCart')
  }
}
