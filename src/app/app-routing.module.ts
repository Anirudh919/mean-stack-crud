import { NgModule } from '@angular/core';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { RouterModule, Routes } from '@angular/router';
import { DeparmentListComponent } from './components/department-list/deparment-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'department-list', component: DeparmentListComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'create-department', component: DepartmentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
