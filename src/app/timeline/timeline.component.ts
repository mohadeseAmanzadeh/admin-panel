import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
 
})
export class TimelineComponent {
  public listPs = [
    { 
      color: '#C71C22',
      title: 'All Hands Meeting',
      type: 'dot-danger'
    },
    {
      color: '#DD5600',
      titleP: 'Yet another one,',
      type: 'dot-warning',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      type: 'dot-success',
      badge: ' NEW'

    },
    {
      color: '#033C73',
      title: 'Something not important',
      type: 'dot-primary',
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM',
      type: 'dot-warning'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      badge: ' NEW',
      type: 'dot-success'
    },
    {
      color: '#2FA4E7',
      title: 'This dot has an info state',
      type: 'dot-info'
    },
    {
      color: '#343a40',
      title: 'This dot has a dark state',
      type: 'dot-dark'
    },
    {
      color: '#C71C22',
      title: 'All Hands Meeting',
      type: 'dot-danger'
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM',
      type: 'dot-warning'
    },
    {
      color: '#73A839',
      title: 'Build the production release ',
      badge: ' NEW',
      type: 'dot-success'
    },
    {
      color: '#033C73',
      title: 'Something not important',
      type: 'dot-primary'
    }
  ]
}
