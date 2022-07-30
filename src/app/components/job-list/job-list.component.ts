import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  job: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.readjob();
  }
  readjob() {
    this.apiService.getjob().subscribe((data: any) => {
      this.job = data;
      console.log(this.job);
    });
  }
}
