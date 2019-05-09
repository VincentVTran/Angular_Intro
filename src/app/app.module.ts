import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloCompComponent } from './Components/hello-comp/hello-comp.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
