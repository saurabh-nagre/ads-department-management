import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept_name = ''
  building = ''
  budget = 0
  rows :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  submit(){
    this.http.post('/api/department',{building:this.building,dept_name:this.dept_name,budget:this.budget})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Instructor Added');
        this.budget = 0
        this.building = ''
        this.dept_name = ""
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/department').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
