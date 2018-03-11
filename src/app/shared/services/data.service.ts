import { Injectable } from '@angular/core';

// Business logic, communication with web service
// data sharing amoung components

// Angular creates service object, inject the instance

// singleton object and multiple instances

@Injectable()
export class DataService {

  constructor() {
    console.log("DataService created");
   }

}
