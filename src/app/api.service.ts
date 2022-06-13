import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  url :any
  data:any
  rowData: any;

  constructor(private http : HttpClient) {
    this.url = "https://reqres.in/api/users?page=2"
   }
   
   ngOnInit(): void {
    //  this.getDatadetails();
    // this.getData();
   }
  

   getData(){
    return this.http.get(this.url)
  }
  

  // getDatadetails(){
  //   this.getData().subscribe((response:any) =>{
  //     console.log(response)
  //   })
  // }
}
