import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { DepartmentComponent } from './components/department/department.component';
import { CourseComponent } from './components/course/course.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { SectionComponent } from './components/section/section.component';
import { TeachesComponent } from './components/teaches/teaches.component';
import { StudentComponent } from './components/student/student.component';
import { TakesComponent } from './components/takes/takes.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { PrereqComponent } from './components/prereq/prereq.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassroomComponent,
    DepartmentComponent,
    CourseComponent,
    InstructorComponent,
    SectionComponent,
    TeachesComponent,
    StudentComponent,
    TakesComponent,
    AdvisorComponent,
    TimeSlotComponent,
    PrereqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
