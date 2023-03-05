import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  private initialBorderColor: string = '#f5f5f5';
  private defaultBorderColor: string = '#009688';
  private defaultHeight: number = 180;

  @Input('appBorderCard')
  borderColor: string;

  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.setBorder(this.borderColor || this.defaultBorderColor);
  }

  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.setBorder(this.initialBorderColor);
  }

  setHeight(height: number)
  {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string)
  {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
