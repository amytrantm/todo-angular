import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = TASKS
  //variable tasks : type in array = array TASKS in mock-tasks.js
 
  constructor() { }

  ngOnInit(): void {
  }

}
