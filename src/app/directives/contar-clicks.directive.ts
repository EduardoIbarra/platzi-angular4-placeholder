import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
    selector: "a[contar-clicks]"
})
export class ContarClicksDirective{
    clicksN = 0;
    @HostBinding('style.opacity') opacity:number = .1;
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('a', btn, "number of clicks:", this.clicksN++);
        this.opacity += .1;
    }
}