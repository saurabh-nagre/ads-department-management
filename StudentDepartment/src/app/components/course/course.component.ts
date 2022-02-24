import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course_id = ''
  title = ''
  dept_name = ''
  credits = 0
  rows :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  submit(){
    this.http.post('/api/course',{course_id:this.course_id,title:this.title,dept_name:this.dept_name,credits:this.credits})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Course Added');
        this.course_id = '0'
        this.title = ''
        this.dept_name = ""
        this.credits = 0
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/course').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
