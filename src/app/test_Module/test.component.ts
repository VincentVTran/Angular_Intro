import { Component, OnInit } from '@angular/core';
import {HTTPService} from '../service/HTTP'
import {Input} from '@angular/core'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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
  constructor(private data:HTTPService) { }

  ngOnInit() {
    this.data.getData().subscribe((data:any[]) => this.customerList = data);
  }
  printout(){
    console.log("Hello World");
  }

}
