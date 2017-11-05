import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../Task';
import {Location} from '@angular/common';

@Component({
  selector: 'task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  task = new Task;
  submitted = false;
  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit() {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }
 
  private save(): void {
	  console.log(this.task);
    this.dataService.create(this.task);
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
  goBack(): void {
    this.location.back();
  }

}
