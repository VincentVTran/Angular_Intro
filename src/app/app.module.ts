import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test_Module/test.module';
import {ServiceModule} from './service/service.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [ //Components being added into declaration (Allows components to be used in HTML)
    AppComponent,
  ],
  imports: [ //All modules being imported
    BrowserModule,
    AppRoutingModule,
    TestModule,
    ServiceModule, 
    HttpClientModule //Used to allow http request
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
