import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloCompComponent } from './Components/hello-comp/hello-comp.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [ //Components being added into declaration (Allows components to be used in HTML)
    AppComponent,
    HelloCompComponent,//Imported components inside of modules do not need to be declared
  ],
  imports: [ //All modules being imported
    BrowserModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
