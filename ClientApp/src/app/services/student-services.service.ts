import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Student } from './student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  private api: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.api = baseUrl + 'api/student';
  }

  studentData: Student;

  addGrade() {
    return this.http.post(this.api, this.studentData);
  }

}


