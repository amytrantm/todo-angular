import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  //to use service
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //subcribe to observable
    this.taskService
      .getTasks()
      .subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      //.subscribe  similar to  .then
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task : Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
