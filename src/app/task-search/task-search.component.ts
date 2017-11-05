import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { DataService } from '../data.service';

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  name: string;
  tasks:Task[];
  
  constructor(private dataService: DataService) {}
 
  ngOnInit() {
    this.name = "";
  }
 
  private searchTasks() {
    this.dataService.getTasksByName(this.name).then(tasks => this.tasks = tasks);
  }
 
  onSubmit() {
    this.searchTasks();
  }

}
