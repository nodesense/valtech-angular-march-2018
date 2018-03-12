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


  // update
  // PUT /api/products/123
  // {json data}

  // server receives, commit data to db
  // server read data from db, sends back to client
 
  private updateProduct(product: Product): Observable<Product> {
      return this.
             http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, 
                      product);
  }

  // create, no ID
  // POST /api/products
  // {json data}

  // server receives, commit data to db, server generates id
  // server read data from db, sends back to client, with id

  private  createProduct(product: Product): Observable<Product> {
    return this.
           http.post<Product>(`${environment.apiEndPoint}/api/products`, 
                    product);
}

saveProduct(product: Product): Observable<Product> {
   if (product.id) {
     return this.updateProduct(product);
   }

   return this.createProduct(product);
}


}
