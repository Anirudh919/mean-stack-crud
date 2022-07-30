import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createEmployee(data: any): Observable<any> {
    let url = `${this.baseUri}/employeeinsert`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getEmployees() {
    return this.http.get(`${this.baseUri}/employee`);
  }
  getdepartment() {
    return this.http.get(`${this.baseUri}/departments`);
  }
  getjob() {
    return this.http.get(`${this.baseUri}/job`);
  }
  getmgr() {
    return this.http.get(`${this.baseUri}/mgr`);
  }
  getjobt() {
    return this.http.get(`${this.baseUri}/jobt`);
  }
  // Delete employee
  deleteEmployee(id: any): Observable<any> {
    let url = `${this.baseUri}/employeedelete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  //delete department
  deletedepartment(id: any): Observable<any> {
    let url = `${this.baseUri}/departmentdelete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  //update employee list
  updateEmployee(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/employeeupdate`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  getEmployee(id: any): Observable<any> {
    let url = `${this.baseUri}/employee/${id}`;

    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        return res[0] || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
