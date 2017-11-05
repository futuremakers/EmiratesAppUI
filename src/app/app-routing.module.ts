import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'task', component: TaskCreateComponent},
  {path: 'findByName', component: TaskSearchComponent},
  {path: 'editTask', component: TaskUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}