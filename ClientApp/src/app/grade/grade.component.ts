import { Component, OnInit } from '@angular/core';
import { GradeServiceService } from '../services/grade-service.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(public service: GradeServiceService) { }

  ngOnInit() {
    this.service.getGrade();
  }

}
