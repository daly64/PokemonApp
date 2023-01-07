import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appBorderCard]'
})
export class BorderCardDirective {

    defaultHeight: number = 180
    defaultColor: string = '#f5f5f5'
    initialColor: string = '#008080'

    constructor(private element: ElementRef) {
        this.setBorder(this.defaultColor)
        this.setHeight(this.defaultHeight)
    }

    // @Input('appBorderCard') borderColor: string

    @HostListener('mouseenter') onMouseEnter() {
        // this.borderColor ||
        this.setBorder(this.initialColor)
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5')
    }

    setHeight(height: number) {
        this.element.nativeElement.style.height = height + 'px'
    }

    setBorder(color: string) {
        this.element.nativeElement.style.border = `solid 4px ${color}`
    }



}
