import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponentShell } from './app-shell.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponentShell
  ],
  providers: [],
  bootstrap: [AppComponentShell]
})
export class AppModule { }
