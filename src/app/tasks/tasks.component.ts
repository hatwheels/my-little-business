import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, private changeDetectorRef: ChangeDetectorRef) {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.tasks = this.taskService.getTasks();
  }

  selectedTask: Task;

  onSelect(task:Task): void {
    this.selectedTask = task;
  }

  deleteTask(i) {
    if (this.selectedTask == this.tasks[i]) {
      this.selectedTask = null;
    }
    this.taskService.deleteTask(i);
    this.changeDetectorRef.markForCheck();
  }
}
