import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takes',
  templateUrl: './takes.component.html',
  styleUrls: ['./takes.component.css']
})
export class TakesComponent implements OnInit {

  id = ''
  course_id = ''
  sec_id = 0
  semester = 0
  year = 0
  grade = 0
  rows:any

  studentresult:any
  sectionresult:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();

    this.http.get('/api/get/section').subscribe((response:any)=>{
      if(response){
        this.sectionresult = response.result;
        this.course_id = this.sectionresult[0].COURSE_ID;
        this.sec_id = this.sectionresult[0].SEC_ID;
        this.semester = this.sectionresult[0].SEMESTER;
        this.year = this.sectionresult[0].YEAR;
      }
    })
    this.http.get('/api/get/student').subscribe((response:any)=>{
      if(response){
        this.studentresult = response.result;
        this.id = response.ID;
      }
    })
  }

  oncourseSelect(selected:any){
    this.course_id = this.sectionresult[selected.selectedIndex].COURSE_ID
    this.sec_id = this.sectionresult[selected.selectedIndex].SEC_ID;
    this.semester = this.sectionresult[selected.selectedIndex].SEMESTER;
    this.year = this.sectionresult[selected.selectedIndex].YEAR;
  }
  onstudentSelect(selected:any){
    this.id = this.studentresult[selected.selectedIndex].ID;
  }

  submit(){
    this.http.post('/api/takes',{id:this.id,course_id:this.course_id,sec_id:this.sec_id,semester:this.semester,year:this.year,grade:this.grade})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Student Added');
        this.grade = 0
        this.course_id = ''
        this.id = ''
        this.sec_id = 0
        this.year = 0
        this.semester = 0
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/takes').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
