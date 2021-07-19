import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string; // => <app-button color="green" text="Add"> ->props
  @Input() color: string;

  @Output() btnClick = new EventEmitter(); // add event listener

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('add button clicked')
    this.btnClick.emit();
  }
}
