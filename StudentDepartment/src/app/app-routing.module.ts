import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { CourseComponent } from './components/course/course.component';
import { DepartmentComponent } from './components/department/department.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { PrereqComponent } from './components/prereq/prereq.component';
import { SectionComponent } from './components/section/section.component';
import { StudentComponent } from './components/student/student.component';
import { TakesComponent } from './components/takes/takes.component';
import { TeachesComponent } from './components/teaches/teaches.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,children:[
    {path:'',redirectTo:'classroom',pathMatch:'full'},
    {path:'classroom',component:ClassroomComponent},
    {path:'department',component:DepartmentComponent},
    {path:'course',component:CourseComponent},
    {path:'instructor',component:InstructorComponent},
    {path:'section',component:SectionComponent},
    {path:'teaches',component:TeachesComponent},
    {path:'student',component:StudentComponent},
    {path:'takes',component:TakesComponent},
    {path:'advisor',component:AdvisorComponent},
    {path:'time_slot',component:TimeSlotComponent},
    {path:'prereq',component:PrereqComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
