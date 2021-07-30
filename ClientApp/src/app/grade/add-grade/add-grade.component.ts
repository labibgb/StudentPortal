import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { GradeServiceService } from '../../services/grade-service.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  constructor(public service: GradeServiceService) { }

  ngOnInit() {
  }
  onSubmit(form: NgModel) {

    this.service.addGrade().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
    console.log(form);
  }
}
