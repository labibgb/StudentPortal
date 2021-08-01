import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Grade } from './student-model';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  api: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.api = baseUrl + "api/grade"
  }

  gradeData: Grade = new Grade();

  list: Grade[];

  addGrade() {
    if (this.gradeData.id == null) {
      return this.insertGrade();
    }
    else {
      return this.updateGrade(this.gradeData.id);
    }
  }

  insertGrade() {
    return this.http.post(this.api, this.gradeData);
  }

  updateGrade(id: number) {
    return this.http.put(`${this.api}/${id}`, this.gradeData);
  }

  deleteGrade(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  getList() {
    return this.http.get(this.api);
  }

  getSingle(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }
}