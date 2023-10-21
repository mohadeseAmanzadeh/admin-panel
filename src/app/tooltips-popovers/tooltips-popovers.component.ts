import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltips-popovers',
  templateUrl: './tooltips-popovers.component.html',
  styleUrls: ['./tooltips-popovers.component.scss']
})
export class TooltipsPopoversComponent {
  public menu = [
    { 
      title: 'Tooltip on top',
    },
    { 
      title: 'Tooltip on right',
    },
    {
      title: 'Tooltip on bottom',
    },
    {
      title: 'Tooltip on left',
    },
  ]
  public tooltipMenu = [
    {
      type: 'bs-tooltip-top',
      children: [
        {
          text: 'Tooltip on top',
        }
      ]
    },
    {
      type: 'bs-tooltip-right',
      children: [
        {
          text: 'Tooltip on right',
        }
      ]
    },
    {
      type: 'bs-tooltip-bottom',
      children: [
        {
          text: 'Tooltip on bottom',
        }
      ]
    },
    {
      type: 'bs-tooltip-left',
      children: [
        {
          text: 'Tooltip on left',
        }
      ]
    }
  ]
}
