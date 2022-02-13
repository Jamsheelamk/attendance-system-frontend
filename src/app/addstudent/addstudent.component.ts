import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentService: StudentService,private router: Router){  } 
  studentItem= {
     email :'',
     name:''}

  ngOnInit() {
  }
  Addstudent()
  {    
    this.studentService.newstudent(this.studentItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/students']);
  }
}
