import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GradeServiceService } from '../../services/grade-service.service';
import { StudentServicesService } from '../../services/student-services.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public service: StudentServicesService, public gradeService: GradeServiceService) { }

  ngOnInit() {
    this.gradeService.getGrade();
    console.log(this.gradeService.list);

  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
