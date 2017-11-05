import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import {DataService} from './data.service';

import {enableProdMode} from '@angular/core';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskSearchComponent,
    TaskDetailsComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
