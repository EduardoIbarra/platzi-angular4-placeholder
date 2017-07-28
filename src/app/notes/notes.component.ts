import { Component } from '@angular/core';
import {ContarClicksDirective} from "../directives/contar-clicks.directive";
import {trigger, state, style} from "@angular/animations";

@Component({
    selector: 'notes-component',
    templateUrl: './notes.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0,
                backgroundColor: 'green',
                transform: 'rotate3d(0,0,0,0deg)'
            })),
            state('final', style({
                opacity: 1,
                backgroundColor: 'yellow',
                transform: 'rotate3d(0,0,0,180deg)'
            }))
        ])
    ]
})
export class NotesComponent {
    state = 'inicial';
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
