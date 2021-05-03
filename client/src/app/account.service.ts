import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { observable, Observable, ReplaySubject } from 'rxjs';
import { user } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  loggedin:boolean=false
baseUrl="https://localhost:5001/api/";
private currentusersource=new ReplaySubject<user>(1);
currentuser$=this.currentusersource.asObservable();

  constructor(private http:HttpClient) { }
  login(model:any)
  {
    console.log("ACCOUNTSERVICE:"+model.username+model.password);
    return this.http.post<user>(this.baseUrl + "account/login",model).pipe(
      map((respone:user) => {
        const user=respone;
        localStorage.setItem('user',JSON.stringify(user));
        this.currentusersource.next(user);
      })
    );
  }
  Register(model:any)
  {
    
    return this.http.post<user>(this.baseUrl + "account/register",model).pipe(
      map((respone:user) => {
        const user=respone;
        localStorage.setItem('user',JSON.stringify(respone));
        this.currentusersource.next(user);
      })
    );
  }
  setcurrentuser(user:user)
  {
    this.currentusersource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentusersource.next(null);
    
    }
}
