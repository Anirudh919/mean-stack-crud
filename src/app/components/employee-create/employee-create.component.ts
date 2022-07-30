import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

// type NewType_2 = ApiService;

// type NewType = NewType_2;

// type NewType_1 = NewType;

// type NewType = NewType_1;

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  mgr: any = [];
  job: any = [];
  jobt: any = [];
  department: any = [];
  employeeForm = this.fb.group({
    ename: [''],
    jobid: [''],
    mgrid: [''],
    hiredate: [''],
    salary: [''],
    comission: [''],
    deptid: [''],
  });
  ngZone: any;
  router: any;
  // employeeForm!: FormGroup;
  // apiService: any;
  // ngZone: any;
  // router: any;

  constructor(public fb: FormBuilder, private apiService: ApiService) {
    //   private router: Router,
    //   private ngZone: NgZone) {
    //   email: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    //     ],
    //   ],
    //   designation: ['', [Validators.required]],
    //   phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    // });
  }
  readdepartment() {
    this.apiService.getdepartment().subscribe((data: any) => {
      this.department = data;
      // console.log(this.department);
    });
  }
  readjob() {
    this.apiService.getjob().subscribe((data: any) => {
      this.job = data;
      console.log(this.job);
    });
  }
  readmgr() {
    this.apiService.getmgr().subscribe((data: any) => {
      this.mgr = data;
      console.log(this.mgr);
    });
  }
  ngOnInit(): void {
    this.readjob();
    this.readdepartment();
    this.readmgr();
  }
  onSubmit() {
    console.log(this.employeeForm.value);
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      return this.apiService.createEmployee(this.employeeForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
      return false;
    }
  }
}
