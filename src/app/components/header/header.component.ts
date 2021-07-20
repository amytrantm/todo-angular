import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo'; //pass title to header.html
  showAddTask: boolean = false;
  subscription: Subscription;  //to watch the change on toggle button

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAdd() {
   this.uiService.toggleAddTask();
  }
}
