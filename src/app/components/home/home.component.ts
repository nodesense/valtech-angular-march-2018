import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price: number = 99.99;
  title: string = 'Home';
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  parentClick() {
    alert('Parent');
  }

  increment(e: Event) {
    // cancel bubble
    e.stopPropagation();
    
    console.log("incr");
    this.counter += 1;

    console.trace();
  }

}
