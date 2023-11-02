import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() title: string = '';

  constructor(
    private el: ElementRef
  ) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.show();        
}

  @HostListener('mouseleave') onMouseLeave() {
    this.hide();         
  }

  show() {
    const tooltipElement: HTMLElement|null = document.querySelector('.tooltip');
    const tooltipInnerElement: HTMLElement|null = document.querySelector('.tooltip-inner');
    tooltipElement && tooltipElement.classList.add('active');
    tooltipInnerElement && (tooltipInnerElement.innerHTML = this.title);


    
  }

  hide() {
    const tooltipElement: HTMLElement|null = document.querySelector('.tooltip');
    tooltipElement && tooltipElement.classList.remove('active');
  };

}
