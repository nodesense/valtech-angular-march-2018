import { Component, OnInit } from '@angular/core';

interface Member {
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: Member[] = [ { name: 'Krish'},
                        {name: 'Venkat'}
                      ];

  show: boolean = true;

  highlight: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.members.push({ name: 'Member' + Math.random()});
  }


}
