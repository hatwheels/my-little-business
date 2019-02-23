import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskService} from "../task.service";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  toggled: boolean = false;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      id: [],
      name: [],
      location: [],
      description: [],
      startDate: [],
      endDate: [],
    });
  }

  onSubmit() {
    this.taskService.createTask(this.addTaskForm.value);
    this.toggleButton();
  }

  toggleButton() {
    this.toggled = !this.toggled;
  }
}
