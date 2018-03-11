import {Component, OnInit} from '@angular/core';

@Component({
    // component html tag name
    selector: 'app-root',
    // View
    templateUrl: 'app.component.html',
    // Scopped style, only for this component
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
    appTitle: string = 'Product App';
    year: number = 2018;

    constructor() {
         
    }

    // called after view initialized in browser
    ngOnInit() {
     
        setTimeout(() => {
            console.log("Timeout called");
            this.year = 2020;
        }, 3000);
    }

    fromChild(msg: string) {
        alert(msg);
    }
}
