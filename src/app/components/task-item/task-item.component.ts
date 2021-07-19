import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task //declare task, pass task as props to <app-task-item>
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes //props

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task)
  }
}

// https://github.com/Fortawesome/angular-fontawesome
