import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule<% if (routing) { %>,
    AppRoutingModule<% } %>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
