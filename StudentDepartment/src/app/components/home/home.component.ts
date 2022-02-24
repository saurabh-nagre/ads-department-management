import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSelected = 0;
  constructor() { }

  ngOnInit(): void {
  }

  select(n:number){
    this.currentSelected = n;
  }
}
