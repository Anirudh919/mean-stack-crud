import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];
  jobt: any = [];
  constructor(private apiService: ApiService) {
    // this.readEmployee();
  }
  ngOnInit() {
    this.readjobt();
  }

  readEmployee() {
    this.apiService.getEmployees().subscribe((data: any) => {
      this.Employee = data;
      console.log(this.Employee);
    });
  }
  readjobt() {
    this.apiService.getjobt().subscribe((data: any) => {
      this.Employee = data;
      console.log(this.jobt);
    });
  }

  removeEmployee(employee: { empid: any }, index: any) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee.empid).subscribe((data) => {
        this.Employee.splice(index, 1);
      });
    }
  }
}
