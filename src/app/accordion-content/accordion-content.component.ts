import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent {
  @Input() item: any;
}
