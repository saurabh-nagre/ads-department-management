import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  course_id = ''
  sec_id = 0
  semester = 0
  year = 0
  building = ''
  room_number = 0
  time_slot_id = 0
  rows :any

  timeslotidresult :any
  courseidresult:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/get/course').subscribe((response:any)=>{
      if(response){
        this.courseidresult = response.result;
        this.course_id = this.courseidresult[0].COURSE_ID;
      }
    })

    this.http.get('/api/get/time_slot').subscribe((response:any)=>{
      if(response){
        this.timeslotidresult = response.result;
        this.time_slot_id = this.timeslotidresult[0].TIME_SLOT_ID; 
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
  getTimeSlot(id:any){
    for(let res of this.timeslotidresult){
      if(res.TIME_SLOT_ID==id){
        return (res.START_TIME +" TO "+res.END_TIME);
      }
    }
    return ' ';
  }
  ontimeslotSelect(selected:any){
    console.log(selected.selectedIndex);

    this.time_slot_id = this.timeslotidresult[selected.selectedIndex].TIME_SLOT_ID; 
  }
  oncourseselected(selected:any){
    console.log(selected.selectedIndex);
    this.course_id = this.courseidresult[selected.selectedIndex].COURSE_ID;
  }

  submit(){
    this.http.post('/api/section',
    {course_id:this.course_id,sec_id:this.sec_id,semester:this.semester,year:this.year,building :this.building,room_number :this.room_number,time_slot_id:this.time_slot_id})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Section Added');
        this.course_id = ''
        this.sec_id = 0
        this.semester = 0
        this.year = 0
        this.building = ''
        this.room_number = 0
        this.time_slot_id = 0
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/section').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
