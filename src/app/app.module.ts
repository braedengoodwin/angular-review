import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    Assignment2Component,
    Assignment3Component
  ],
  imports: [BrowserModule, ServerComponent, ServersComponent, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
