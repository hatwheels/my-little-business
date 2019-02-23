import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService} from "./task.service";


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        EmployeesComponent,
        EmployeeDetailComponent,
        DepartmentsComponent,
        DepartmentDetailComponent,
        TaskDetailComponent,
        AddTaskComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }

