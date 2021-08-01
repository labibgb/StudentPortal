import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Student } from '../services/student-model';
import { StudentServicesService } from '../services/student-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public service: StudentServicesService, private router: Router) { }

  hide = false;
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
  pageData : Student[];

  pageEvent: PageEvent;

  ngOnInit() {
    this.service.getList().subscribe(
      res => {
        this.hide = true;
        this.service.list = res as Student[];
        this.length = this.service.list.length;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.iterate();
      },
      error => {
        console.log(error);
      }
    );
  }

  addNew() {
    this.service.studentData = new Student();
    this.router.navigate(['/student/add']);
  }

  handlePage(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterate();
  }

  iterate() {
    let end = (this.pageIndex + 1) * this.pageSize;
    let start = this.pageIndex * this.pageSize;
    this.pageData = this.service.list.slice(Math.min(start, end), Math.max(start, end));
  }

  step = 0;
  studentId = 0;
  setStep(id: number, index: number) {
    this.step = index;
    this.studentId = id;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateData(id: number) {
    this.service.getSingle(id).subscribe(
      res => {
        this.service.studentData = res as Student;
        this.router.navigate([`/student/edit/${id}`]);
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteData(id: number) {
    if (confirm("Are you want to delete?")) {
      this.service.deleteStudent(id).subscribe(
        res => {
          this.refreshData();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  refreshData() {
    this.service.getList().subscribe(
      res => {
        this.service.list = res as Student[];
        this.length = this.service.list.length;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.iterate();
      },
      error => {
        console.log(error);
      }
    )
  }
}
