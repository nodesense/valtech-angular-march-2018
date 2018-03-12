import { Component, OnInit } from '@angular/core';

// GET /api/products/34345
// Edit existing data (id exist) or create new one (id is not present)

import {ActivatedRoute, // read url params
        Router  // helps to navigate between pages
        } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // create
  brands: Brand[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService
            ) { }

  ngOnInit() {
     const id = this.route.snapshot.params['id'];
     console.log("ID is", id);

     if (id) { // edit part
        this.productService.getProduct(id)
            .subscribe (product => {
              this.product = product;
            });
     }

     this.productService.getBrands()
        .subscribe( brands => {
          this.brands = brands;
        });

  }

  gotoList() {
    this.router.navigateByUrl("/products"); //products/list
  }
 
}
