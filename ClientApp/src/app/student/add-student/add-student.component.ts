import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GradeServiceService } from '../../services/grade-service.service';
import { Grade, Student } from '../../services/student-model';
import { StudentServicesService } from '../../services/student-services.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public service: StudentServicesService, public gradeService: GradeServiceService, private router: Router) { }

  ngOnInit() {
    this.gradeService.getList().subscribe(
      res => {
        this.gradeService.list = res as Grade[];
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form: NgForm) {
    this.service.addStudent().subscribe(
      res => {
        
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
