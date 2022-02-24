import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  capacity = 0
  roomnumber = 0
  building = ""
  rows :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  submit(){
    this.http.post('/api/classroom',{building:this.building,room_number:this.roomnumber,capacity:this.capacity})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Classroom Added');
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/classroom').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }
}
