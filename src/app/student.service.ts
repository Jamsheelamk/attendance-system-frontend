import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  item= {
    email :'',
    name:''}

  constructor(private http:HttpClient) { }

  getstudent(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getstudents(){
    return this.http.get("http://localhost:3000/students");
  }

  newstudent(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"student":item})
    .subscribe(data =>{console.log(data)})
  }
  
  approvestudent(student:any,emptype:any){
    return this.http.put('http://localhost:3000/approve',student,emptype)
    

  }
  rejectstudent(studentid:any){
   
    return this.http.delete('http://localhost:3000/reject/'+studentid)
    
.subscribe((data)=>{
  
})
    

  }
}
