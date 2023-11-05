import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-btn',
  templateUrl: './drop-down-btn.component.html',
  styleUrls: ['./drop-down-btn.component.scss']
})
export class DropDownBtnComponent {
  public menu = [
    {
      children : [
        {
          title: 'Basis',
          buttons : [    
            {
              title: 'Primary',
              className: 'btn-primary'
            },
            {
              title: 'Secondary',
              className: 'btn-secondary'
            },
            {
              title: 'Success',
              className: 'btn-success'
            },
            {
              title: 'Info',
              className: 'btn-info'
            },
            {
              title: 'Warning',
              className: 'btn-warning'
            },
            {
              title: 'Danger',
              className: 'btn-danger'
            },
            {
              title: 'Focus',
              className: 'btn-focus'
            },
            {
              title: 'Alt',
              className: 'btn-alternate'
            },
            {
              title: 'Light',
              className: 'btn-light'
            },
            {
              title: 'Dark',
              className: 'btn-dark'
            },
            {
              title: 'link',
              className: 'btn-link'
            }
                        
          ]
        },
        {
          title: 'Split Dropdowns',
          buttonList : [    
            {
              title: 'Primary',
              className: 'btn-primary'
            },
            {
              title: 'Secondary',
              className: 'btn-secondary'
            },
            {
              title: 'Success',
              className: 'btn-success'
            },
            {
              title: 'Info',
              className: 'btn-info'
            },
            {
              title: 'Warning',
              className: 'btn-warning'
            },
            {
              title: 'Danger',
              className: 'btn-danger'
            },
            {
              title: 'Focus',
              className: 'btn-focus'
            },
            {
              title: 'Alt',
              className: 'btn-alternate'
            },
            {
              title: 'Light',
              className: 'btn-light'
            },
            {
              title: 'Dark',
              className: 'btn-dark'
            },              
          ]
        },
        {
          title: 'Split Dropdowns',
          buttonList : [    
            {
              title: 'Primary',
              className: 'btn-outline-primary'
            },
            {
              title: 'Secondary',
              className: 'btn-outline-secondary'
            },
            {
              title: 'Success',
              className: 'btn-outline-success'
            },
            {
              title: 'Info',
              className: 'btn-outline-info'
            },
            {
              title: 'Warning',
              className: 'btn-outline-warning'
            },
            {
              title: 'Danger',
              className: 'btn-outline-danger'
            },
            {
              title: 'Focus',
              className: 'btn-outline-focus'
            },
            {
              title: 'Alt',
              className: 'btn-outline-alternate'
            },
            {
              title: 'Light',
              className: 'btn-outline-light'
            },
            {
              title: 'Dark',
              className: 'btn-outline-dark'
            },              
          ]
        }
      ]
      

    },
    {
      children: [ 
        {
        title: 'Outline',
        buttons : [    
          {
            title: 'Primary',
            className: 'btn-outline-primary'
          },
          {
            title: 'Secondary',
            className: 'btn-outline-secondary'
          },
          {
            title: 'Success',
            className: 'btn-outline-success'
          },
          {
            title: 'Info',
            className: 'btn-outline-info'
          },
          {
            title: 'Warning',
            className: 'btn-outline-warning'
          },
          {
            title: 'Danger',
            className: 'btn-outline-danger'
          },
          {
            title: 'Focus',
            className: 'btn-outline-focus'
          },
          {
            title: 'Alt',
            className: 'btn-outline-alternate'
          },
          {
            title: 'Light',
            className: 'btn-outline-light'
          },
          {
            title: 'Dark',
            className: 'btn-outline-dark'
          },
          {
            title: 'link',
            className: 'btn-outline-link'
          }
                      
        ]
        },
        
        
      ]

    }
  ]
 
}