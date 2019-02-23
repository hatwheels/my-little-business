import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  @Input() department: Department;

  constructor() { }

  ngOnInit() {
  }
}
