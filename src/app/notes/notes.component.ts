import { Component } from '@angular/core';
import {ContarClicksDirective} from "../directives/contar-clicks.directive";

@Component({
    selector: 'notes-component',
    templateUrl: './notes.component.html'
})
export class NotesComponent {
    title = 'Notes Component';
    notasListas = false;
    action = 'new';
    response = 200;
    notas = [
        {titulo:'Nota 1', descripcion:"Descripcioón de la Nota 1"},
        {titulo:'Nota 2', descripcion:"Descripcioón de la Nota 2"},
        {titulo:'Nota 3', descripcion:"Descripcioón de la Nota 3"}
    ];
    constructor(){
        setTimeout(()=>{
            this.notasListas = true;
        }, 3000);
    }
    hazAlgo(){
        this.title = 'Haciendo Algo!';
    }
    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
}
