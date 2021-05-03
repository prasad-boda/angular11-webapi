import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { user } from 'src/app/Models/user';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(public accountservice:AccountService) { 
    
  }

  ngOnInit(): void {
    const user:user = JSON.parse(localStorage.getItem('user'));
    this.accountservice.setcurrentuser(user);
  }

}
