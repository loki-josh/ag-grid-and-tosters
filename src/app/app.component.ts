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

  Rfunc(event: any) {
    this.rdata = event
    // console.log(event)
  }
   url =  'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';
  constructor(private api: ApiService, private toastr: ToastrService, private http:HttpClient) {

  }
  ngOnInit() {
    this.api.getData().subscribe((response: any) => {
      this.jsonData = response.data
      // console.log(this.jsonData)
    });

    this.httpService.getPosts().subscribe(
      (response:any) => { this.posts = response; },
      (error:any) => { console.log(error); });

  }
  getPosts() {
    return this.http.get(this.url);
  }


  showToasterSuccess(){
    this.toastr.success("Data shown successfully !!", "Data shown successfully !!")
  }
   
  showToasterError(){
    this.toastr.error("Something is wrong", "Something is wrong")
  }
   
  showToasterInfo(){
    this.toastr.info("This is info", "This is info")
  }
   
  showToasterWarning(){
    this.toastr.warning("This is warning", "This is warning")
  }


}





