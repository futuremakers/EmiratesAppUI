import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../Task';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [DataService]
})
export class TaskDetailsComponent  {

  @Input() task: Task;
  selectedTask: Task;
   constructor(private dataService: DataService) {}
  
   delete(): void {
	   console.log(this.task.id);
     this.dataService.delete(this.task.id).then(() => this.goBack());
   }
   
   goBack(): void {
     window.location.replace('');
   }
   
   onSelect(task: Task): void {
	    this.selectedTask = task;
	}
}
