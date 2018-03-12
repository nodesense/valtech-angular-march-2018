import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

console.log("ENV", environment);

@Injectable()
export class ProductService {

  // DI
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.
           http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

}
