import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesModule } from './modules/pages/pages.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
