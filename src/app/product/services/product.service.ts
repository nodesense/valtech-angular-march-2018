import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  // DI
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.
           http.get<Product[]>('http://localhost:7070/delayed/api/products');
  }

}
