import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prereq',
  templateUrl: './prereq.component.html',
  styleUrls: ['./prereq.component.css']
})
export class PrereqComponent implements OnInit {

  course_id = ''
  prereq_id = 0
  rows :any
  courseidresult :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/get/course').subscribe((response:any)=>{
      if(response){
        this.courseidresult = response.result;
        this.course_id = this.courseidresult[0].COURSE_ID;
      }
    })
    this.refresh();
  }

  getCourse(id:any){
    for(let res of this.courseidresult){
      if(res.COURSE_ID==id){
        return (res.TITLE);
      }
    }
    return ' ';
  }

  oncourseselected(selected:any){
    this.course_id = this.courseidresult[selected.selectedIndex].COURSE_ID;
  }

  submit(){
    this.http.post('/api/prereq',
    {prereq_id:this.prereq_id,course_id:this.course_id})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Time Slot Added');
        this.course_id = '0'
        this.prereq_id = 0
        this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/prereq').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
