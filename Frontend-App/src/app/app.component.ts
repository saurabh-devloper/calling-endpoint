import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'New Web App';
  data : any;
  constructor(private http : HttpClient ){}

  ngOnInit() {
    this.getData();
  //   setTimeout(()=>{                         
  //     this.getData();
  // }, 3000);    
  }

  getData(){
   debugger;
    let header = new HttpHeaders().set(
      "Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxIiwibmJmIjoxNjY0MzYzODkzLCJleHAiOjE2NjQzNjU2OTIsImlhdCI6MTY2NDM2Mzg5M30.roU5PV1OlO9jYC3jj-cpVaFtE-D6Rj5DCRUV1ndKc9k'
    );
    this.http.get("http://localhost:21317/api/Users/userlists",{headers : header}).subscribe(result =>{       
    this.data = result;
    });
  }
}

