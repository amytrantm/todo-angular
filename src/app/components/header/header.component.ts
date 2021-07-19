import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo'; //pass title to header.html

  constructor() {}

  ngOnInit(): void {}
  
  toggleAdd() {
    console.log("toggle add task")
  }
}
