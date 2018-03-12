import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartItem, DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  //products: Product[] = [];

  products$: Observable<Product[]>;

  //subscription: Subscription;

  cartSubscription: Subscription;

  cartItems: CartItem[] = [];

  fieldName: string;
  predicate: string;
  expectedValue: any;
 

  constructor(private productService: ProductService,
              private dataService: DataService
        ) { }

  ngOnInit() {
      this.products$ = this.productService.getProducts();

    // this.subscription = this.productService
    //     .getProducts()
    //     .subscribe ( products => {
    //         this.products = products;
    //         console.log("got products", products);
    //     });


    this.cartSubscription = this.dataService.cartItemsSource
                                .subscribe ( cartItems => {
                                  console.log("PRODUCT LIST CART SUB");
                                  this.cartItems = cartItems;
                                });
  }

  ngOnDestroy() {
   // if (!this.subscription.closed) {
    //  this.subscription.unsubscribe();


    //}

    this.cartSubscription.unsubscribe();
  }

  addToCart(product: Product) {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price
    };

    this.dataService.addItem(cartItem);

  }

}
