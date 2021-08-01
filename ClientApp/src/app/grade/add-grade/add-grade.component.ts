import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { GradeServiceService } from '../../services/grade-service.service';
import { Grade } from '../../services/student-model';
import { GradeComponent } from '../grade.component';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  constructor(public service: GradeServiceService, public grade: GradeComponent) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.service.addGrade().subscribe(
      res => {
        this.resetForm(form);
        this.grade.refreshData();
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
  }
}
