import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './Task';

@Injectable()
export class DataService {

  private tasksUrl = '/api/tasks';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  // Get all Tasks
  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);
  }

  getTasksByName(name: string): Promise<Task[]> {
    const url = '/api/findByName/${name}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Task)
      .catch(this.handleError);
  }

  create(task: Task): Promise<Task> {
    return this.http
      .post("/api/task", JSON.stringify(task), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = '/api/task/'+id;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}