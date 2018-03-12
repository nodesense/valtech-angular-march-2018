import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';

console.log("ENV", environment);

@Injectable()
export class ProductService {

  // DI
  constructor(private http: HttpClient) { }

  // GET /api/products
  getProducts(): Observable<Product[]> {
    return this.
           http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

   // GET /api/brands
  getBrands(): Observable<Brand[]> {
    return this.
           http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }


  // GET /api/products/12345
  getProduct(id): Observable<Product> {
    return this.
           http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }



}
