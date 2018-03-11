import { Component, OnInit, 
         Input,
        
         Output,
         EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // property binding [parent to child]

  @Input()
  year: number;

  @Input('x-title')
  appTitle: string;


  // output, event binding ()
  @Output()
  contactEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("year ", this.year, typeof this.year);
  }

  contact() {
    // publishing event
    this.contactEvent.emit(1234);
  }

}
