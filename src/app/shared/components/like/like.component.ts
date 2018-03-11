import { Component, 
        OnInit,
        OnDestroy,

         Input,
         Output, EventEmitter,

         Injector
} from '@angular/core';
import { DataService } from '../../services/data.service';
 
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],

  // life time of service is based on component life time
  
  providers: [
    // all the services
   // DataService
  ]
})
export class LikeComponent implements OnInit, OnDestroy {

  //Two way binding
  //input name, inputName + Change

  @Input()
  likes: number;

  // input name + Change
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  // constructor(private dataService: DataService) { 
  //   console.log("like component created");
  // }

  // Injector example
  private dataService: DataService;

  constructor(private injector: Injector) {
    console.log("Like cons begin");
    this.dataService = this.injector.get(DataService);
    console.log("Like comp created");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Like comp destroyed");
  }

  up() {
    this.likesChange.emit (this.likes + 1);
  }
  
  down() {
    this.likesChange.emit (this.likes - 1);
  }
}
