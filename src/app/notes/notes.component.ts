import { Component } from '@angular/core';

@Component({
    selector: 'notes-component',
    templateUrl: './notes.component.html'
})
export class NotesComponent {
    title = 'Notes Component';
    notasListas = false;
    action = 'new';
    constructor(){
        setTimeout(()=>{
            this.notasListas = true;
        }, 3000);
    }
    hazAlgo(){
        this.title = 'Haciendo Algo!';
    }
}
