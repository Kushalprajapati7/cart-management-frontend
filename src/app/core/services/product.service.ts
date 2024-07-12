import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  allProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('api/product/showProducts')
  }
}
