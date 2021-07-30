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

  gradeData: Grade = new GradeModel();
  list: Grade[];

  addGrade() {
    return this.http.post(this.api, this.gradeData);
  }
  getGrade() {
    this.http.get(this.api)
      .toPromise()
      .then(res => {
        //console.log(res);
        this.list = res as Grade[]
      });
  }
}

class GradeModel implements Grade {
  id = 0;
  name = null;
  section = null;
}
