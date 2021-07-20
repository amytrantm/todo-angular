import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo'; //pass title to header.html
  showAddTask: boolean = false;
  subscription: Subscription; //to watch the change on toggle button

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAdd() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {  //*ngIf="hasRoute('/')"
    return this.router.url === route;
  }
}
