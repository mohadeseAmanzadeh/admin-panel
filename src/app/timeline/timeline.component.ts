import { Component } from '@angular/core';

 interface listPsInterface {
  title?: string,
  text?: string,
  time?: string,
  type?: string,
  descStatusBtn?: {}
 }
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
 
})
export class TimelineComponent {
  public listPs: listPsInterface []  = [
    { 
      title: 'All Hands Meeting',
      type: 'dot-danger'
    },
    {
      text: 'Yet another one, at',
      time: '15:00 PM',
      type: 'dot-warning',
    },
    {
      title: 'Build the production release',
      type: 'dot-success',
      descStatusBtn : {
        title: 'New',
        type: 'badge-danger'
      },
    },
    {
      title: 'Something not important',
      type: 'dot-primary',
    },
    {
      text: 'Yet another one, at',
      time: '15:00 PM',
      type: 'dot-warning', 
    },
    {
      title: 'Build the production release',
      descStatusBtn : {
        title: 'New',
        type: 'badge-danger'
      },
      type: 'dot-success'
    },
    {
      title: 'This dot has an info state',
      type: 'dot-info',
    },
    {
      title: 'This dot has a dark state',
      type: 'dot-dark',
    },
    {
      title: 'All Hands Meeting',
      type: 'dot-danger',
    },
    {
      text: 'Yet another one, at',
      time: '15:00 PM',
      type: 'dot-warning',
    },
    {
      title: 'Build the production release ',
      descStatusBtn : {
        title: 'New',
        type: 'badge-danger'
      },
      type: 'dot-success'
    },
    {
      title: 'Something not important',
      type: 'dot-primary',
    }
  ]
}
