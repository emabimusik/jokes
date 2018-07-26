import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Input}      from '@angular/core';

import { AppComponent } from './app.component';
import {JokeListComponent} from './JokeList.component';
import {JokeComponent} from './joke.component';
@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
 bootstrap: [AppComponent]
 //bootstrap: [JokeListComponent]
})
export class AppModule { }
