import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
baseURL:'https://localhost:5001/api/';
validationerrors:string[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  get404error()
  {
    console.log("Route:"+this.baseURL);
    this.http.get('https://localhost:5001/api/Buggy/not-found').subscribe(response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      })
  }

  get401error()
  {
    this.http.get('https://localhost:5001/api/Buggy/auth').subscribe(response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      })
  }
  get500error()
  {
    this.http.get('https://localhost:5001/api/Buggy/server-error').subscribe(response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      })
  }

  get400error()
  {
    this.http.get('https://localhost:5001/api/Buggy/bad-request').subscribe(response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      })
  }

  getvalidationerror()
  {
    this.http.post('https://localhost:5001/api/Account/register',{}).subscribe(response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
        this.validationerrors=error;
      })
  }
}
