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
          type: 'btn-outline-primary',
          className: 'btn-transition'
        },
        {
          title: 'Success',
          type: 'btn-outline-success',
          className: 'btn-transition'
        },
        {
          title: 'Info',
          type: 'btn-outline-info',
          className: 'btn-transition'
        },
        {
          title: 'Warning',
          type: 'btn-outline-warning',
          className: 'btn-transition'
        },
        {
          title: 'Danger',
          type: 'btn-outline-danger',
          className: 'btn-transition'
        },
        {
          title: 'Focus',
          type: 'btn-outline-focus',
          className: 'btn-transition'
        },
        {
          title: 'Alt',
          type: 'btn-outline-alternate',
          className: 'btn-transition'
        },
        {
          title: 'Light',
          type: 'btn-outline-light',
          className: 'btn-transition'
        },
        {
          title: 'Dark',
          type: 'btn-outline-dark',
          className: 'btn-transition'
        },
        {
          title: 'link',
          type: 'btn-outline-link',
          className: 'btn-transition'
        }
        
      ] 
    },
    {
      title: 'Color Transition No Borders',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-outline-primary',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Success',
          type: 'btn-outline-success',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Info',
          type: 'btn-outline-info',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Warning',
          type: 'btn-outline-warning',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Danger',
          type: 'btn-outline-danger',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Focus',
          type: 'btn-outline-focus',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Alt',
          type: 'btn-outline-alternate',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Light',
          type: 'btn-outline-light',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'Dark',
          type: 'btn-outline-dark',
          className: 'btn-transition',
          borderClass: 'border-0'
        },
        {
          title: 'link',
          type: 'btn-outline-link',
          className: 'btn-transition',
          borderClass: 'border-0'
        }
        
      ] 
    },
    {
      title: 'Hover Shine',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary',
          className: 'btn-hover-shine'
        },
        {
          title: 'Success',
          type: 'btn-success',
          className: 'btn-hover-shine'
        },
        {
          title: 'Info',
          type: 'btn-info',
          className: 'btn-hover-shine'
        },
        {
          title: 'Warning',
          type: 'btn-warning',
          className: 'btn-hover-shine'
        },
        {
          title: 'Danger',
          type: 'btn-danger',
          className: 'btn-hover-shine'
        },
        {
          title: 'Focus',
          type: 'btn-focus',
          className: 'btn-hover-shine'
        },
        {
          title: 'Alt',
          type: 'btn-alternate',
          className: 'btn-hover-shine'
        },
        {
          title: 'Light',
          type: 'btn-light',
          className: 'btn-hover-shine'
        },
        {
          title: 'Dark',
          type: 'btn-dark',
          className: 'btn-hover-shine'
        },
        {
          title: 'link',
          type: 'btn-link',
          className: 'btn-hover-shine'
        }
        
      ] 
    },
    {
      title: 'Active State',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary',
          className: 'active'
        },
        {
          title: 'Success',
          type: 'btn-success',
          className: 'active'
        },
        {
          title: 'Info',
          type: 'btn-info',
          className: 'active'
        },
        {
          title: 'Warning',
          type: 'btn-warning',
          className: 'active'
        },
        {
          title: 'Danger',
          type: 'btn-danger',
          className: 'active'
        },
        {
          title: 'Focus',
          type: 'btn-focus',
          className: 'active'
        },
        {
          title: 'Alt',
          type: 'btn-alternate',
          className: 'active'
        },
        {
          title: 'Light',
          type: 'btn-light',
          className: 'active'
        },
        {
          title: 'Dark',
          type: 'btn-dark',
          className: 'active'
        },
        {
          title: 'link',
          type: 'btn-link',
          className: 'active'
        }
        
      ] 
    },
    {
      title: 'Disabled State',
      listButton:[
        {
          title: 'Primary',
          type: 'btn-primary',
          className: 'disabled'
        },
        {
          title: 'Success',
          type: 'btn-success',
          className: 'disabled'
        },
        {
          title: 'Info',
          type: 'btn-info',
          className: 'disabled'
        },
        {
          title: 'Warning',
          type: 'btn-warning',
          className: 'disabled'
        },
        {
          title: 'Danger',
          type: 'btn-danger',
          className: 'disabled'
        },
        {
          title: 'Focus',
          type: 'btn-focus',
          className: 'disabled'
        },
        {
          title: 'Alt',
          type: 'btn-alternate',
          className: 'disabled'
        },
        {
          title: 'Light',
          type: 'btn-light',
          className: 'disabled'
        },
        {
          title: 'Dark',
          type: 'btn-dark',
          className: 'disabled'
        },
        {
          title: 'link',
          type: 'btn-link',
          className: 'disabled'
        }
        
      ] 
    },
    {
      title: 'Block Level',
      listButton: [
        {
          title: 'Block Large',
          type: 'btn-primary',
          className: 'bt-lg',
          class: 'btn-block'
          // bt-block
        },
        {
          title: 'Block Normal',
          type: 'btn-primary',
          className: 'btn-block'
        },
        {
          title: 'Block Small',
          type: 'btn-primary',
          className: 'btn-block',
          class: 'btn-sm'
          // btn-sm
        }
      ]

    },
    {
      title: 'Wider',
      listButton: null,
      buttons: [
        {
          title: 'Wider Large',
          type: 'btn-primary',
          className: 'btn-lg'
        },
        {
          title: 'Wider Normal',
          type: 'btn-primary',
        },
        {
          title: 'Wider Small',
          type: 'btn-primary',
          className: 'btn-sm'
        }
      ]
    },
    {
      title: 'Sizing',
      listButton: null,
      buttons: [
        {
          title: 'Large',
          type: 'btn-primary',
          className: 'btn-lg'
        },
        {
          title: 'Normal',
          type: 'btn-primary',
        },
        {
          title: 'Small',
          type: 'btn-primary',
          className: 'btn-sm'
        }
      ]
    }
  ] 
  public menu = [
    {
      title: 'Checkbox Buttons',
      subMenu: [
        {
          type: 'btn-group-sm',
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
              tite: 'Three',
              type: 'bt-primary'
            }
          ]
        },
        {
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
              tite: 'Three',
              type: 'bt-danger'
            } 
          ]
        },
        {
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
              tite: 'Three',
              type: 'bt-alternate'
            } 
          ]
        },
      ]
    },
    {
      title: 'Radio Buttons',
      subMenu: [
        {
          type: 'btn-group-sm',
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
            }
          ]

        },
        {
          children: [
            {
              title: 'Left(pre-checked)',
              type: 'btn-warning'
            },
            {
              title: 'Middle',
              type: 'btn-waring'
            },
            {
              title: 'Right',
              type: 'btn-warning'
            }
          ]
        },
        {
          type: 'btn-group-lg',
          children: [
            {
              title: 'Left(pre-checked)',
              type: 'btn-Focus'
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
        }
      ]
    }

  ]
}
