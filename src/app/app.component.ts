import { Component } from '@angular/core';
import {TestComponent} from './test_Module/test.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  obj = [{name: "stuff"}]
}
