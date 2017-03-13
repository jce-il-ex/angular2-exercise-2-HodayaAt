import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   myList = [
    {
      id: 1,
      txt: 'a'
    },
    {
      id: 2,
      txt: 'b'
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
