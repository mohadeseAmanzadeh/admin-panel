import { Component } from '@angular/core';

  interface progressbarInterface {
    subMenu: subMenuInterface[];
  }

  interface subMenuInterface {
    title: string;
    children: childrenInterface[];
  }

  interface childrenInterface {
    text?: string;
    desc?: string;
    type: string;
    percent: string;
    height?: string;
    className?: string;
  }
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  public progressbar: progressbarInterface[] = [
    {
      subMenu: [
        {
          title: 'Basic',
          children: [
            {
              type: 'success',
              percent: '25%',
            },
            {
              type: 'info',
              percent: '50%',

            },
            {
              type: 'warning',
              percent: '75%'
            },
            {
              type: 'danger',
              percent: '100%'
            }
          ]
        },
        {
          title: 'Current Values',
          children: [
            {
              type: 'success',
              percent: '25%',
              text: '25%'
            },
            {
              type: 'info',
              percent: '50%',
              text: '50%'
            },
            {
              type: 'warning',
              percent: '75%',
              text: '75%'
            },
            {
              type: 'danger',
              percent: '100%',
              text: '100%'
            }
          ]
        },
        {
          title: 'Striped',
          children: [
            {
              type: 'success',
              percent: '25%',
              className: 'progress-bar-striped'
            },
            {
              type: 'info',
              percent: '50%',
              className: 'progress-bar-striped',
            },
            {
              type: 'warning',
              percent: '75%',
              className: 'progress-bar-striped'
            },
            {
              type: 'danger',
              percent: '100%',
              className: 'progress-bar-striped'
            }
          ]
        }
      ]
    },
    {
      subMenu: [
        {
          title: 'Custom Labels',
          children: [
            {
              type: 'success',
              percent: '25%',
              text: '25'
            },
            {
              type: 'info',
              percent: '50%',
              text: '2 of 4',
              className: 'progress-bar-animated',
            },
            {
              type: 'warning',
              percent: '75%',
              text: '50%',
              className: 'progress-bar-striped progress-bar-animated'
            },
            {
              type: 'danger',
              percent: '100%',
              text: 'Completed!',
              className: 'progress-bar-striped'
            }
          ]
        },
        {
          title: 'Sizing',
          children: [
            {
              type: 'success',
              percent: '25%',
              desc: 'default'
            },
            {
              type: 'info',
              percent: '50%',
              desc: '10px',
              height: '10px'
            },
            {
              type: 'warning',
              percent: '75%',
              desc: '.5rem',
              height: '.5rem'
            },
            {
              type: 'danger',
              percent: '100%',
              desc: '20px'
            }
          ]
        },
      ]
    }
  ]
}
