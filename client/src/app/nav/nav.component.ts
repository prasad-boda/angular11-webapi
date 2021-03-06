import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';
import { user } from '../Models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}


  constructor(public accountservice:AccountService,private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  
  }
  login()
  {
    console.log("account:"+this.model);

    this.accountservice.login(this.model).subscribe(response=>
      {
        this.router.navigateByUrl("/members");
        console.log("dp"+response);
        
      },error=>
      {
        this.toastr.error(error.error);
      });
  }
  logout()
  {
    this.accountservice.logout();
    this.router.navigateByUrl("/");
  }
  
}
