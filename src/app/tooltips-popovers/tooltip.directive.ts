import { HtmlParser } from '@angular/compiler';
import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() title: string = '';
  @Input() tooltipClass: string = '';
  @Input() placement: string = 'top';
  offset = 5;

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
    this.tooltipClass && tooltipElement && tooltipElement.classList.add(this.tooltipClass)

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    if(this.placement === 'top') {
      if(tooltipElement) {
        const tooltipElementPos = tooltipElement.getBoundingClientRect();
        tooltipElement.style.top = hostPos.top - hostPos.height - 4 + 'px';
        tooltipElement.style.left = (hostPos.left + (hostPos.width / 2)) - (tooltipElementPos.width / 2) + 'px';
      }
    } else if(this.placement === 'right') {
      if(tooltipElement) {
        const tooltipElementPos = tooltipElement.getBoundingClientRect();
        tooltipElement.style.top = hostPos.top + 4 + 'px';
        tooltipElement.style.left = (hostPos.left + hostPos.width * 2 ) - tooltipElementPos.width + 2 + 'px';
      }

    } else if(this.placement === 'bottom') {
      if(tooltipElement) {
        const tooltipElementPos = tooltipElement.getBoundingClientRect();
        tooltipElement.style.top = hostPos.top + hostPos.height  + 'px';
        tooltipElement.style.left = (hostPos.left + (hostPos.width / 2)) - (tooltipElementPos.width / 2) + 'px';
      }
    } else if(this.placement === 'left') {
      if(tooltipElement) {
        const tooltipElementPos = tooltipElement.getBoundingClientRect();
        tooltipElement.style.top = hostPos.top + 4 + 'px';
        tooltipElement.style.left = hostPos.left + hostPos.width  - (tooltipElementPos.width * 2 ) + 2 + 'px';
      }
    }
    
  }

  hide() {
    const tooltipElement: HTMLElement|null = document.querySelector('.tooltip');
    this.tooltipClass && tooltipElement && tooltipElement.classList.remove(this.tooltipClass)
    tooltipElement && tooltipElement.classList.remove('active');

  };



}
