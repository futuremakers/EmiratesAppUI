import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../Task';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  
  constructor(private dataService: DataService) { }


  getTasks() {
    this.dataService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
