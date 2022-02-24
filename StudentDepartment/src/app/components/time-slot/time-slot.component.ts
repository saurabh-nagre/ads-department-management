import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  time_slot_id = 0
  day = ''
  start_time = ''
  end_time = ''
  rows :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  submit(){
    this.http.post('/api/time_slot',
    {time_slot_id:this.time_slot_id,day:this.day,start_time:this.start_time,end_time:this.end_time})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Time Slot Added');
        this.day = ''
        this.start_time = ''
        this.end_time = ''
        this.time_slot_id = 0
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/time_slot').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
