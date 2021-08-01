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

  studentData: Student = new Student();
  list: Student[];

  addStudent() {
    if (this.studentData.id == null) {
      return this.insertStudent();
    }
    else {
      console.log(this.studentData);
      return this.updateStudent(this.studentData.id);
    }
  }

  insertStudent() {
    return this.http.post(this.api, this.studentData);
  }

  updateStudent(id: number) {
    return this.http.put(`${this.api}/${id}`, this.studentData);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  getList() {
    return this.http.get(this.api);
  }

  getSingle(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

}


