import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../Task';
import {Location} from '@angular/common';
@Component({
  selector: 'task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent  {

	   @Input() task: Task;
	   constructor(private dataService: DataService, private location: Location) {}
	  
	   onSubmit() {
		    this.save();
		}
		 
	   private save(): void {
		    this.dataService.create(this.task);
		    this.goBack();
	   }
		 
	   goBack(): void {
	    this.location.back();
	  }

}
