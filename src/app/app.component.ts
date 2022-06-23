import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api_data_binding';
  jsonData: any = [];

  rdata: any
  httpService: any;
  posts: any;
  num = [1, 2, 3, 4, 5, 6, 7, 8]
  array = [{ name: "rajesh", age: 26, gender: "male" },
{ name: "suresh", age: 32, gender: "male" },
{ name: "vinoth", age: 40, gender: "male" },
{ name: "rita", age: 14, gender: "female" },
{ name: "sushma", age: 23, gender: "female" },
{ name: "sunith", age: 17, gender: "female" },
{ name: "john", age: 32, gender: "male" }]

  Rfunc(event: any) {
    this.rdata = event
    // console.log(event)
  }
  url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';
  constructor(private api: ApiService, private toastr: ToastrService, private http: HttpClient) {

  }
  ngOnInit() {

    // for (let i = 0; i < this.num.length; i++) {
    //   const element = this.num[i];
    //   if (element / 2 == 0) {
    //     console.log("even is" + element)
    //   }
    //   else {
    //     console.log("odd is" + element)
    //   }

    // }

    // this.array.forEach(element => {
    //   if(element/2==0){
    //     console.log("even"+element)
    //   }
    //   else{
    //     console.log("odd"+element)
    //   }
      
    // });

    this.array.forEach(element => {
     if(element.age>18 && element.age<30){
      console.log(element.name)
     }
    });



    this.api.getData().subscribe((response: any) => {
      
      
    });

    

  }
 


  showToasterSuccess() {
    this.toastr.success("Data shown successfully !!", "Data shown successfully !!")
  }

  showToasterError() {
    this.toastr.error("Something is wrong", "Something is wrong")
  }

  showToasterInfo() {
    this.toastr.info("This is info", "This is info")
  }

  showToasterWarning() {
    this.toastr.warning("This is warning", "This is warning")
  }




}





