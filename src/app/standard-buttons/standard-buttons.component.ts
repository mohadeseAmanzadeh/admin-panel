import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-buttons',
  templateUrl: './standard-buttons.component.html',
  styleUrls: ['./standard-buttons.component.scss']
})
export class StandardButtonsComponent {

  public cardList = [
    {
      title: 'Solid',
      listButton:[
        {
          title: 'Primary',
          className: 'btn-primary mb-2 mr-2',
        },
        {
          title: 'Secondary',
          className: 'btn-secondary mb-2 mr-2'
        },
        {
          title: 'Success',
          className: 'btn-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'btn-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'btn-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'btn-danger mb-2 mr-2',
        },
        {
          title: 'Focus',
          className: 'btn-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'btn-alternate mb-2 mr-2',
        },
        {
          title: 'Light',
          className: 'btn-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'btn-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'btn-link mb-2 mr-2'
        }
      ],
      buttonGroup: null 
    },
    {
      title: 'Color Transition',
      listButton:[
        {
          title: 'Primary',
          className: 'btn-transition btn-outline-primary mb-2 mr-2',
        },
        {
          title: 'Secondary',
          className: 'btn-transition btn-outline-secondary mb-2 mr-2'
        },
        {
          title: 'Success',
          className: 'btn-transition btn-outline-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'btn-transition btn-outline-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'btn-transition btn-outline-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'btn-transition btn-outline-danger mb-2 mr-2',
        },
        {
          title: 'Focus',
          className: 'btn-transition btn-outline-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'btn-transition btn-outline-focus mb-2 mr-2',
        },
        {
          title: 'Light',
          className: 'btn-transition btn-outline-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'btn-transition btn-outline-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'btn-transition btn-outline-link mb-2 mr-2',
        }
        
      ],
      buttonGroup: null 
    },
    {
      title: 'Color Transition No Borders',
      listButton:[
        {
          title: 'Primary',
          className: 'btn-transition border-0 btn-outline-primary mb-2 mr-2',
        },
        {
          title: 'secondary',
          className: 'btn-transition border-0 btn-outline-secondary mb-2 mr-2'
        },
        {
          title: 'Success',
          className: 'btn-transition border-0 btn-outline-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'btn-transition border-0 btn-outline-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'btn-transition border-0 btn-outline-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'btn-transition border-0 btn-outline-danger mb-2 mr-2'
        },
        {
          title: 'Focus',
          className: 'btn-transition border-0 btn-outline-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'btn-transition border-0 btn-outline-alternate mb-2 mr-2'
        },
        {
          title: 'Light',
          className: 'btn-transition border-0 btn-outline-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'btn-transition border-0 btn-outline-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'btn-transition border-0 btn-outline-link mb-2 mr-2',
        }
        
      ],
      buttonGroup: null 
    },
    {
      title: 'Hover Shine',
      listButton:[
        {
          title: 'Primary',
          className: 'btn-hover-shine btn-primary mb-2 mr-2',
        },
        {
          title: 'secondary',
          className: 'btn-hover-shine btn-secondary mb-2 mr-2'
        },
        {
          title: 'Success',
          className: 'btn-hover-shine btn-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'btn-hover-shine btn-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'btn-hover-shine btn-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'btn-hover-shine btn-danger mb-2 mr-2',
        },
        {
          title: 'Focus',
          className: 'btn-hover-shine btn-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'btn-hover-shine btn-alternate mb-2 mr-2',
        },
        {
          title: 'Light',
          className: 'btn-hover-shine btn-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'btn-hover-shine btn-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'btn-hover-shine btn-link mb-2 mr-2',
        }
        
      ],
      buttonGroup: null 
    },
    {
      title: 'Active State',
      listButton:[
        {
          title: 'Primary',
          className: 'active btn-primary mb-2 mr-2',
        },
        {
          title: 'Secondary',
          className: 'active btn-secondary mb-2 mr-2',
        },
        {
          title: 'Success',
          className: 'active btn-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'active btn-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'active btn-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'active btn-danger mb-2 mr-2',
        },
        {
          title: 'Focus',
          className: 'active btn-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'active btn-alternate mb-2 mr-2',
        },
        {
          title: 'Light',
          className: 'active btn-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'active btn-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'active btn-link mb-2 mr-2',
        }  
      ],
      buttonGroup: null 
    },
    {
      title: 'Disabled State',
      listButton:[
        {
          title: 'Primary',
          className: 'disabled btn-primary mb-2 mr-2',
        },
        {
          title: 'Secondary',
          className: 'disabled btn-secondary mb-2 mr-2'
        },
        {
          title: 'Success',
          className: 'disabled btn-success mb-2 mr-2',
        },
        {
          title: 'Info',
          className: 'disabled btn-info mb-2 mr-2',
        },
        {
          title: 'Warning',
          className: 'disabled btn-warning mb-2 mr-2',
        },
        {
          title: 'Danger',
          className: 'disabled btn-danger mb-2 mr-2',
        },
        {
          title: 'Focus',
          className: 'disabled btn-focus mb-2 mr-2',
        },
        {
          title: 'Alt',
          className: 'disabled btn-alternate mb-2 mr-2',
        },
        {
          title: 'Light',
          className: 'disabled btn-light mb-2 mr-2',
        },
        {
          title: 'Dark',
          className: 'disabled btn-dark mb-2 mr-2',
        },
        {
          title: 'link',
          className: 'disabled btn-link mb-2 mr-2',
        }
        
      ],
      buttonGroup: null 
    },
    {
      title: 'Block Level',
      listButton: [
        {
          title: 'Block Large',
          className: 'btn-lg btn-block btn-primary mb-2 mr-2',
        },
        {
          title: 'Block Normal',
          className: 'btn-block btn-primary mb-2 mr-2',
        },
        {
          title: 'Block Small',
          className: 'btn-block btn-primary btn-sm mb-2 mr-2',
        }
      ],
      buttonGroup: null
    },
    {
      listButton: null,
      buttonGroup: [ 
          {
            title: 'Wider',
            buttons: [
              {
                title: 'Wider Large',
                className: 'btn-lg btn-primary btn-wide mb-2 mr-2'
              },
              {
                title: 'Wider Normal',
                className: 'btn-primary btn-wide mb-2 mr-2',
              },
              {
                title: 'Wider Small',
                className: 'btn-sm btn-primary btn-wide mb-2 mr-2'
              }
            ]
          },
          {
            title: 'Sizing',
            buttons: [
              {
                title: 'Large',
                className: 'btn-lg btn-primary mb-2 mr-2'
              },
              {
                title: 'Normal',
                className: 'btn-primary mb-2 mr-2',
              },
              {
                title: 'Small',
                className: 'btn-sm btn-primary mb-2 mr-2'
              }
            ]
          }
      ]
    },
  ] 
  public menu = [
    {
      title: 'Checkbox Buttons',
      subMenu: [
        {
          type: 'btn-group-sm',
          divider: 'divider',
          children: [
            { 
              title: 'One',
              type: 'btn-primary'
            },
            {
              title: 'Two',
              type: 'btn-primary'
            },
            {
              title: 'Three',
              type: 'btn-primary'
            },
          ],
        },
        {
          divider: 'divider',
          children: [
            {
              title: 'One',
              type: 'btn-danger'
            },
            {
              title: 'Two',
              type: 'btn-danger'
            },
            {
              title: 'Three',
              type: 'btn-danger'
            },
          ],
        },
        {
          type: 'btn-group-lg',
          children: [
            {
              title: 'One',
              type: 'btn-alternate'
            },
            {
              title: 'Two',
              type: 'btn-alternate'
            },
            {
              title: 'Three',
              type: 'btn-alternate'
            } 
          ],
        },
      ]
    },
    {
      title: 'Radio Buttons',
      subMenu: [
        {
          type: 'btn-group-sm',
          divider: 'divider',
          children: [
            {
              title: 'Left(pre-checked)',
              type: 'btn-primary'
            },
            {
              title: 'Middle',
              type: 'btn-primary'
            },
            {
              title: 'Right',
              type: 'btn-primary'
            },
          ]
        },
        {
          type: '',
          divider: 'divider',
          children: [
            {
              title: 'Left(pre-checked)',
              type: 'btn-warning'
            },
            {
              title: 'Middle',
              type: 'btn-warning'
            },
            {
              title: 'Right',
              type: 'btn-warning'
            },
          ]
        },
        {
          type: 'btn-group-lg',
          children: [
            {
              title: 'Left(pre-checked)',
              type: 'btn-focus'
            },
            {
              title: 'Middle',
              type: 'btn-focus'
            },
            {
              title: 'Right',
              type: 'btn-focus'
            }
          ]
        },
      ]
    }

  ]
}
// 