import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-deparment-list',
  templateUrl: './deparment-list.component.html',
  styleUrls: ['./deparment-list.component.css'],
})
export class DeparmentListComponent implements OnInit {
  department: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.readdepartment();
  }

  readdepartment() {
    this.apiService.getdepartment().subscribe((data: any) => {
      this.department = data;
      console.log(this.department);
    });
  }

  removedepartment(department: { deptid: any }, index: any) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletedepartment(department.deptid).subscribe(() => {
        this.department.splice(index, 1);
      });
    }
  }
}
