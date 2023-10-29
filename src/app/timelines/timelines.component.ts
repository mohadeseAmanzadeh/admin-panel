import { Component } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent {
 public menu = [
  {
    title: 'Colorful Dots',
    listPs: [
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
        descStatusBtn : {
          title: 'New',
          type: 'badge-danger'
        },
        type: 'dot-success'
      },
      {
        title: 'Something not important',
        type: 'dot-primary',
        textType: ''
      },
      {
        title: 'This dot has an info state',
        type: 'dot-info',
      },  
      {
        title: 'This dot has a dark state',
        type: 'dot-dark',
      },
    ]
  },
  {
    listPs: [
      { 
        title: 'All Hands Meeting',
        type: ''
      },
      {
        text: 'Yet another one, at',
        time: '15:00 PM',
        type: '',
      },
      {
        title: 'Build the production release',
        descStatusBtn : {
          title: '',
          type: ''
        },
        type: ''
      },
      {
        title: 'Something not important',
        type: '',
        textType: 'text-success'
      },
    ]
  }
 ]
}
