import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-buttons',
  templateUrl: './standard-buttons.component.html',
  styleUrls: ['./standard-buttons.component.scss']
})
export class StandardButtonsComponent {

  public cardlist = [
    {
      title: 'Solid',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary'
        },
        {
          title: 'Success',
          type: 'btn-success'
        },
        {
          title: 'Info',
          type: 'btn-info'
        },
        {
          title: 'Warning',
          type: 'btn-warning'
        },
        {
          title: 'Danger',
          type: 'btn-danger'
        },
        {
          title: 'Focus',
          type: 'btn-focus'
        },
        {
          title: 'Alt',
          type: 'btn-alternate'
        },
        {
          title: 'Light',
          type: 'btn-light'
        },
        {
          title: 'Dark',
          type: 'btn-dark'
        },
        {
          title: 'link',
          type: 'btn-link'
        }
        
      ] 
    },
    {
      title: 'Color Transition',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-outline-primary'
        },
        {
          title: 'Success',
          type: 'btn-outline-success'
        },
        {
          title: 'Info',
          type: 'btn-outline-info'
        },
        {
          title: 'Warning',
          type: 'btn-outline-warning'
        },
        {
          title: 'Danger',
          type: 'btn-outline-danger'
        },
        {
          title: 'Focus',
          type: 'btn-outline-focus'
        },
        {
          title: 'Alt',
          type: 'btn-outline-alternate'
        },
        {
          title: 'Light',
          type: 'btn-outline-light'
        },
        {
          title: 'Dark',
          type: 'btn-outline-dark'
        },
        {
          title: 'link',
          type: 'btn-outline-link'
        }
        
      ] 
    },
    {
      title: 'Color Transition No Borders',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-outline-primary'
        },
        {
          title: 'Success',
          type: 'btn-outline-success'
        },
        {
          title: 'Info',
          type: 'btn-outline-info'
        },
        {
          title: 'Warning',
          type: 'btn-outline-warning'
        },
        {
          title: 'Danger',
          type: 'btn-outline-danger'
        },
        {
          title: 'Focus',
          type: 'btn-outline-focus'
        },
        {
          title: 'Alt',
          type: 'btn-outline-alternate'
        },
        {
          title: 'Light',
          type: 'btn-outline-light'
        },
        {
          title: 'Dark',
          type: 'btn-outline-dark'
        },
        {
          title: 'link',
          type: 'btn-outline-link'
        }
        
      ] 
    },
    {
      title: 'Hover Shine',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary'
        },
        {
          title: 'Success',
          type: 'btn-success'
        },
        {
          title: 'Info',
          type: 'btn-info'
        },
        {
          title: 'Warning',
          type: 'btn-warning'
        },
        {
          title: 'Danger',
          type: 'btn-danger'
        },
        {
          title: 'Focus',
          type: 'btn-focus'
        },
        {
          title: 'Alt',
          type: 'btn-alternate'
        },
        {
          title: 'Light',
          type: 'btn-light'
        },
        {
          title: 'Dark',
          type: 'btn-dark'
        },
        {
          title: 'link',
          type: 'btn-link'
        }
        
      ] 
    },
    {
      title: 'Active State',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary',
        },
        {
          title: 'Success',
          type: 'btn-success'
        },
        {
          title: 'Info',
          type: 'btn-info'
        },
        {
          title: 'Warning',
          type: 'btn-warning'
        },
        {
          title: 'Danger',
          type: 'btn-danger'
        },
        {
          title: 'Focus',
          type: 'btn-focus'
        },
        {
          title: 'Alt',
          type: 'btn-alternate'
        },
        {
          title: 'Light',
          type: 'btn-light'
        },
        {
          title: 'Dark',
          type: 'btn-dark'
        },
        {
          title: 'link',
          type: 'btn-link'
        }
        
      ] 
    },
    {
      title: 'Disabled State',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary',
        },
        {
          title: 'Success',
          type: 'btn-success'
        },
        {
          title: 'Info',
          type: 'btn-info'
        },
        {
          title: 'Warning',
          type: 'btn-warning'
        },
        {
          title: 'Danger',
          type: 'btn-danger'
        },
        {
          title: 'Focus',
          type: 'btn-focus'
        },
        {
          title: 'Alt',
          type: 'btn-alternate'
        },
        {
          title: 'Light',
          type: 'btn-light'
        },
        {
          title: 'Dark',
          type: 'btn-dark'
        },
        {
          title: 'link',
          type: 'btn-link'
        }
        
      ] 
    },
    {
      title: 'Block Level',
      listButton: [
        {
          title: 'Block Large',
          type: 'btn-primary',
        },
        {
          title: 'Block Normal',
          type: 'btn-primary',
        },
        {
          title: 'Block Small',
          type: 'btn-primary',
        }
      ]

    },
    {
      title: 'Wider',
      listButton: [
        {
          title: 'Wider Large',
          type: 'btn-primary',
        },
        {
          title: 'Wider Normal',
          type: 'btn-primary',
        },
        {
          title: 'Wider Small',
          type: 'btn-primary',
        }
      ]
    },
    {
      title: 'Sizing',
      listButton: [
        {
          title: 'Large',
          type: 'btn-primary',
        },
        {
          title: 'Normal',
          type: 'btn-primary',
        },
        {
          title: 'Small',
          type: 'btn-primary',
        }
      ]
    }
  ]
 
}
