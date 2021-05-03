import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { user } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'DatingApp';
  users:any;
  constructor(private accountservice: AccountService){}
  ngOnInit(): void {
    //this.getUsers();
    this.setcurrentuser();
  }
  setcurrentuser(){
    
    const user:user = JSON.parse(localStorage.getItem('user'));
    this.accountservice.setcurrentuser(user);
    } 
 
}
