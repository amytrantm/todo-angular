import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = []
 
 //to use service
  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    //subcribe to observable 
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

}
