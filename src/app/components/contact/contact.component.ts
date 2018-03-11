import { Component, OnInit,
          ViewChild,
          ElementRef
      } from '@angular/core';

import * as $ from 'jquery';

interface Address {
  city: string;
  pincode: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // <input #name />
  @ViewChild("name")
  nameInput: ElementRef;

  @ViewChild("para1")
  para1: ElementRef;

  // Option 1
  //@ViewChild("rootDiv")
  //rootDiv: ElementRef;


  address: Address; //undefined



  // dependency injection
  // option 2, Angular shall inject top element
  constructor(private rootDiv:ElementRef) { }

  ngOnInit() {
    //nativeElement is DOM object
    this.nameInput.nativeElement.focus();
    this.nameInput.nativeElement.value = 'From TS';

    //BAD
    //$("p").text("Hi JQuery");

    // Scopped search
    $(this.rootDiv.nativeElement)
      .find("p").text("Hi Jquery");


    setTimeout( () => {
      this.address = {city: 'BLR', pincode: 560001};
    }, 3000);

    //Intellisense for jquery
    
    
  }

}
