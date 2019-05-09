import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../Interfaces/objectInt';
@Component({
  selector: 'app-hello-comp',
  templateUrl: './hello-comp.component.html',
  styleUrls: ['./hello-comp.component.css']
})


export class HelloCompComponent implements OnInit {
  customerList:any[] = [{name: "stuff",id: 4,date: 4},{name: "stuff",id: 4,date: 4}]; //customerList = Name, Person type array
  customer = {
    name: "stuff"
  } 
  @Input() get inputs():any[] { //inputs = property name
    return this.customerList;
  }
  set inputs(list:any[]){
    if(list){
      console.log(list);
      this.customerList = list;
    }
  }

  isVisible = true;
  constructor() { }

  ngOnInit() {
  }
  printout(){
    console.log("Hello World");
  }

}
