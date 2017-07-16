import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NotesComponent} from "./notes/notes.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
      NotesComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
