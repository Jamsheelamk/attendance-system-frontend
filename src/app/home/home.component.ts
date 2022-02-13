import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = 'Attendance management system';


  students=[{
   email :'',
    name:'',
  emptype:''}]

  constructor(private router:Router,private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getstudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
  })
  }
 
  present(student:any){

    this.studentService.approvestudent(student,this.students)
    .subscribe((data) => {
      this.ngOnInit()

    })


  }
  abscent(student:any,studentdtls: any){

    this.studentService.rejectstudent(student._id);

    this.ngOnInit()


  }



}
