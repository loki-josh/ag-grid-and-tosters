import { Component, Input, OnInit ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Input() jsonDataFromAppComp:any = [] ;

@Output() Eventmsg = new EventEmitter()
value:any 
fucn(){
  this.Eventmsg.emit(this.value=true)
  
}

fucn2(){
  this.Eventmsg.emit(this.value=false)
}


  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonDataFromAppComp)
  }

}






