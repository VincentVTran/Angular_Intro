import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent], //Allows component to be used in HTML
  imports: [
    CommonModule
  ],
  exports: [ TestComponent ] //Exporting all components in the array 
})
export class TestModule { }
