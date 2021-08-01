import { Component, OnInit } from '@angular/core';
import { GradeServiceService } from '../services/grade-service.service';
import { Grade } from '../services/student-model';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(public service: GradeServiceService) { }

  displayedColumns: string[] = ['name', 'section', 'count', 'edit', 'delete' ];

  ngOnInit() {
    this.service.gradeData = new Grade();
    this.service.getList().subscribe(
      res => {
        this.service.list = res as Grade[];
        console.log(this.service.list);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateGrade(id: number) {
    this.service.getSingle(id).subscribe(
      res => {
        this.service.gradeData = res as Grade;
      },
      error => {
        console.log(error);
      }
    )
  }
  deleteGrade(id: number) {
    if (confirm("Are you want to delete?")) {
      this.service.deleteGrade(id).subscribe(
        res => {
          this.refreshData();
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  refreshData() {
    this.service.getList().subscribe(
      res => {
        this.service.list = res as Grade[];
      },
      error => {
        console.log(error);
      }
    )
  }
}
