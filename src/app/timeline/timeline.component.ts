import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public listPs = [
    { 
      color: '#C71C22',
      title: 'All Hands Meeting',
      type: 'danger'
    },
    {
      color: '#DD5600',
      titleP: 'Yet another one,',
      type: 'dots-danger',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      type: 'warning',
      badge: ' NEW'

    },
    {
      color: '#033C73',
      title: 'Something not important',
      type: 'success',
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      badge: ' NEW'
    },
    {
      color: '#2FA4E7',
      title: 'This dot has an info state'
    },
    {
      color: '#343a40',
      title: 'This dot has a dark state'
    },
    {
      color: '#C71C22',
      title: 'All Hands Meeting'
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production release ',
      badge: ' NEW'
    },
    {
      color: '#033C73',
      title: 'Something not important'
    }
  ]
}
