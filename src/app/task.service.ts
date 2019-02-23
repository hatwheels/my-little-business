import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }
  baseUrl: string = "http://localhost:8080/"

  tasks: Task[] = [
    { name:"to clean", location:"Athens", description:"the whole floor has to be cleaned", startDate:new Date("2018-02-01"), endDate:new Date("2018-02-02") },
    { name:"to teach math1", location:"Athens", description:"the whole floor has to be cleaned", startDate:new Date("2018-02-01"), endDate:new Date("2018-02-02") },
    { name:"to teach web2", location:"Athens", description:"the whole floor has to be cleaned", startDate:new Date("2018-02-01"), endDate:new Date("2018-02-02") },
    { name:"to do logistics", location:"Athens", description:"the whole floor has to be cleaned", startDate:new Date("2018-02-01"), endDate:new Date("2018-02-02") },
    { name:"to supervise tests", location:"Athens", description:"the whole floor has to be cleaned", startDate:new Date("2018-02-01"), endDate:new Date("2018-02-02") }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(task: Task) {
    // task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    console.log(this.tasks);
  }
}
