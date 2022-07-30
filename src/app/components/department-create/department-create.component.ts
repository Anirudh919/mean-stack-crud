import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css'],
})
export class DepartmentCreateComponent implements OnInit {
  submitted = false;
  departmentform = this.fb.group({
    departmentid: [''],
    departmentname: [''],
    mgrid: [''],
    loactionid: [''],
  });

  constructor(public fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.departmentform.value);
    this.submitted = true;
    if (!this.departmentform.valid) {
      return false;
    } else {
      return this.apiService
        .createEmployee(this.departmentform.value)
        .subscribe({
          complete: () => {
            console.log('Employee successfully created!');
            // this.ngZone.run(() =>
            //   this.router.navigateByUrl('/department-list')
            // );
          },
          error: (e) => {
            console.log(e);
          },
        });
      return false;
    }
  }
}
