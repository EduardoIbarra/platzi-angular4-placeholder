import {Directive, HostListener} from "@angular/core";
@Directive({
    selector: "a[contar-clicks]"
})
export class ContarClicksDirective{
    clicksN = 0;
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('a', btn, "number of clicks:", this.clicksN++);
    }
}