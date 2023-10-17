import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-btn',
  templateUrl: './drop-down-btn.component.html',
  styleUrls: ['./drop-down-btn.component.scss']
})
export class DropDownBtnComponent {
  public menu = [
    {
      children: [
        {
          title: 'Basic',
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
          title: 'split Dropdowns',
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
          title: 'split Outline Dropdowns',
          listButton:[
            {
              title: 'Primary',
              type: 'btn-outline-primary',
              className: 'btn-transition',
              borderClass: 'border-0'
              // border-0
    
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
          title: 'Menu positions',
          listButton:[
            {
              title: 'Dropleft',
              type: 'btn-primary',
              className: 'btn-wite'
            },
            {
              type: 'btn-primary',
              className: 'dropdown-toggle-split',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'dropup',
              type: 'btn-primary',
              className: 'btn-wite'
            },
            {
              type: 'btn-primary',
              className: 'dropdown-toggle-split',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'dropright',
              type: 'btn-primary',
              className: 'btn-wite'
            },
            {
              type: 'btn-primary',
              className: 'dropdown-toggle-split',
              dropclass: 'dropdown-toggle'
            },
          ] 
        },
      ]
    },
    {
      children: [
        {
          title: 'Outline',
          listButton:[
            {
              title: 'Primary',
              type: 'btn-outline-primary',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Success',
              type: 'btn-outline-success',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Info',
              type: 'btn-outline-info',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Warning',
              type: 'btn-outline-warning',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Danger',
              type: 'btn-outline-danger',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Focus',
              type: 'btn-outline-focus',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Alt',
              type: 'btn-outline-alternate',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Light',
              type: 'btn-outline-light',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'Dark',
              type: 'btn-outline-dark',
              dropclass: 'dropdown-toggle'
            },
            {
              title: 'link',
              type: 'btn-outline-link',
              dropclass: 'dropdown-toggle'
            }
            
          ] 
        },
        {
          title: 'Sizing',
          listButton:[
            {
              btnGroup: [
                {
                  title: 'Large',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Normal',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Small',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
              ],
              divider: 'divider',
              subBtnGroup: [
                {
                  title: 'Large',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Normal',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Small',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
              ]
            },   
          ] 
        },
        {
          title: 'Wider',
          listButton:[
            {
              btnGroup: [
                {
                  title: 'Large',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Normal',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Small',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
              ],
              // divider
              subBtnGroup: [
                {
                  title: 'Large',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Normal',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
                {
                  title: 'Small',
                  type: 'btn-primary',
                  className: 'btn-wite'
                },
                {
                  type: 'btn-primary',
                  className: 'dropdown-toggle-split',
                  dropclass: 'dropdown-toggle'
                },
              ]
            },   
          ] 
        },
      ]
    }
  ] 
}