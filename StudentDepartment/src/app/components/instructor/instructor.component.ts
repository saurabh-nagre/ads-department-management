import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  id = 0
  name =""
  dept_name = ""
  salary = 0
  rows :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  submit(){
    this.http.post('/api/instructor',{id:this.id,salary:this.salary,dept_name:this.dept_name,name:this.name})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Instructor Added');
        this.id = 0
        this.salary = 0
        this.dept_name = ""
        this.name = ''
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/instructor').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
