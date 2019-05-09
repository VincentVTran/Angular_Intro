import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-comp',
  templateUrl: './hello-comp.component.html',
  styleUrls: ['./hello-comp.component.css']
})
export class HelloCompComponent implements OnInit {
  customer = {
    name: "stuff"
  } 
  isVisible = true;
  constructor() { }

  ngOnInit() {
  }

}
