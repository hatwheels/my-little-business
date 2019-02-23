import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddTaskComponent} from "./add-task/add-task.component";
// import { DepartmentsComponent } from './departments/departments.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  // { path: 'detail/:id', component: DepartmentDetailComponent },
  // { path: 'departments', component: DepartmentsComponent}
  { path: 'add-user', component: AddTaskComponent },
  // { path: 'list-user', component: ListUserComponent },
  // { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
