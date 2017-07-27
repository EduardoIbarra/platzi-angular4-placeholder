import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NotesComponent} from "./notes/notes.component";
import {FormsModule} from "@angular/forms";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

@NgModule({
    declarations: [
        AppComponent,
        NotesComponent,
        ContarClicksDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
