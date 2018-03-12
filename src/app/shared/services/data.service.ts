import { Injectable } from '@angular/core';

// Business logic, communication with web service
// data sharing amoung components

// Angular creates service object, inject the instance

// singleton object and multiple instances

import {Subject} from 'rxjs/Subject';

// Subject => subscribe called only on next()

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// BehaviorSubject => subscribe called as soon subscribed
// publish the last known value

export interface CartItem {
  name: string;
  price: number;
  id: number;
}

@Injectable()
export class DataService {

  cartItems: CartItem[] = [];

  cartItemsSource: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  constructor() {
    console.log("DataService created");
   }

   addItem(cartItem: CartItem) {
      this.cartItems.push(cartItem);
      console.log("Item added, total ", this.cartItems.length);

      // publish
      this.cartItemsSource.next(this.cartItems);
    }

   empty() {
     this.cartItems = [];
     console.log("empty cart ", this.cartItems);

     this.cartItemsSource.next(this.cartItems);

   }

}
