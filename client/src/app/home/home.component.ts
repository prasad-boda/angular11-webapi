import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode=false;
  constructor() { }

  ngOnInit(): void {
   
  }
registertoggle()
{
  this.registermode=!this.registermode;
  console.log(this.registermode);
}

cancelregistermode(event:boolean)
{
  this.registermode=event;
}
}

  
