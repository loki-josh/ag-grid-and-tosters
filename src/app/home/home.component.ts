import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private http: HttpClient) { }
  // columnDefs = [
  //   { headerName: 'Make', field: 'make' },
  //   { headerName: 'Model', field: 'model' },
  //   { headerName: 'Price', field: 'price', editable: true }
  // ];

  columnDefs = [
    { headerName: 'FIRST NAME',  field: 'first_name' },
    { headerName: 'LAST NAME',   field: 'last_name' },
    { headerName: 'ID',          field: 'id' },
    { headerName: 'EMAIL',       field: 'email' },
    { headerName: 'AVATAR',      field: 'avatar' },
    


  ];

  rowData = [];

  ngOnInit() {
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    fetch('https://reqres.in/api/users?page=2')

      .then(result => result.json())
      .then(rowData => this.rowData = rowData.data);
  }
  defaultColDef = {
    sortable: true,
    
    filter: true
  };
 



}













