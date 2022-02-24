import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  rows :any
  id = ''
  name = ''
  dept_name = ""
  tot_cred = 0

  departmentresult:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.refresh();

    this.http.get('/api/get/department').subscribe((response:any)=>{
      if(response){
        this.departmentresult = response.result;
        this.dept_name = this.departmentresult[0].DEPT_NAME;
      }
    })
  }

  ondepartmentSelect(selected:any){
    this.dept_name = this.departmentresult[selected.selectedIndex].DEPT_NAME
  }

  submit(){
    this.http.post('/api/student',{id:this.id,dept_name:this.dept_name,name:this.name,tot_cred:this.tot_cred})
    .subscribe((Response:any)=>{
      if(Response.status){
        alert('Student Added');
        this.tot_cred = 0
        this.name = ''
        this.id = ''
        this.dept_name = ""
      this.refresh();
      }
      else{
        alert("Submission Failed");
      }
    })
  }

  refresh(){
    this.http.get('/api/get/student').subscribe((response:any)=>{
      if(response){
          this.rows = response.result;
      }
    })
  }

}
