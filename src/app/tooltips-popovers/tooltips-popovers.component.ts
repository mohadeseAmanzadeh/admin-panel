import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips-popovers',
  templateUrl: './tooltips-popovers.component.html',
  styleUrls: ['./tooltips-popovers.component.scss']
})
export class TooltipsPopoversComponent implements OnInit{
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
  // public tooltipMenu = [
  //   {
  //     type: 'bs-tooltip-top',
  //     text: 'Tooltip on top',
  //     active: false
  //   },
  //   {
  //     type: 'bs-tooltip-right',
  //     text: 'Tooltip on right',
  //     active: false
  //   },
  //   {
  //     type: 'bs-tooltip-bottom',
  //     text: 'Tooltip on bottom',
  //     active: false
  //   },
  //   {
  //     type: 'bs-tooltip-left',
  //     text: 'Tooltip on left',
  //     active: false
  //   }
  // ]
 ngOnInit(): void {

 }
}
