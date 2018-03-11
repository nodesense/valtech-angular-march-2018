import { Component, OnInit, 
         Input,
        
         Output,
         EventEmitter,

         ViewChild
        } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Get access to directive
  @ViewChild('myDirective')
  highlightDirective: HighlightDirective;


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

    this.highlightDirective.setColor('lightblue');
  }

  contact() {
    // publishing event
    this.contactEvent.emit(1234);
  }

}
