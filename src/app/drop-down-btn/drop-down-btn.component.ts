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
          buttonGroup: null,
          listButton:[
            {
              title: 'Primary',
              className: 'btn-primary',
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
          title: 'split Dropdowns',
          buttonGroup: null,
          listButton:[
            {
              title: 'Primary',
              className: 'btn-transition btn-outline-primary'
            },
            {
              title: 'Success',
              className: 'btn-transition btn-outline-success'
            },
            {
              title: 'Info',
              className: 'btn-transition btn-outline-info'
            },
            {
              title: 'Warning',
              className: 'btn-transition btn-outline-warning'
            },
            {
              title: 'Danger',
              className: 'btn-transition btn-outline-danger'
            },
            {
              title: 'Focus',
              className: 'btn-transition btn-outline-focus'
            },
            {
              title: 'Alt',
              className: 'btn-transition btn-outline-alternate'
            },
            {
              title: 'Light',
              className: 'btn-transition btn-outline-light'
            },
            {
              title: 'Dark',
              className: 'btn-transition btn-outline-dark'
            },
            {
              title: 'link',
              className: 'btn-transition btn-outline-link'
            }
            
          ] 
        },
        {
          title: 'split Outline Dropdowns',
          buttonGroup: null,
          listButton:[
            {
              title: 'Primary',
              className: 'btn-transition border-0 btn-outline-primary',
    
            },
            {
              title: 'Success',
              className: 'btn-transition border-0 btn-outline-success',
            },
            {
              title: 'Info',
              className: 'btn-transition border-0 btn-outline-info',
            },
            {
              title: 'Warning',
              className: 'btn-transition border-0 btn-outline-warning',
            },
            {
              title: 'Danger',
              className: 'btn-transition border-0 btn-outline-danger',
            },
            {
              title: 'Focus',
              className: 'btn-transition border-0 btn-outline-focus',
            },
            {
              title: 'Alt',
              className: 'btn-transition border-0 btn-outline-alternate',
            },
            {
              title: 'Light',
              className: 'btn-transition border-0 btn-outline-light',
            },
            {
              title: 'Dark',
              className: 'btn-transition border-0 btn-outline-dark',
            },
            {
              title: 'link',
              className: 'btn-transition border-0 btn-outline-link',
            }
            
          ] 
        },
        {
          title: 'Menu positions',
          buttonGroup: null,
          listButton:[
            {
              title: 'Dropleft',
              className: 'btn-wite btn-primary'
            },
            {
              className: 'dropdown-toggle-split btn-primary dropdown-toggle',
            },
            {
              title: 'dropup',
              className: 'btn-wite btn-primary'
            },
            {
              className: 'dropdown-toggle-split dropdown-toggle btn-primary',
            },
            {
              title: 'dropright',
              className: 'btn-wite btn-primary'
            },
            {
              className: 'dropdown-toggle-split dropdown-toggle btn-primary',
            },
          ] 
        },
      ]
    },
    {
      children: [
        {
          title: 'Outline',
          buttonGroup: null,
          listButton:[
            {
              title: 'Primary',
              className: 'dropdown-toggle btn-outline-primary'
            },
            {
              title: 'Success',
              className: 'dropdown-toggle btn-outline-success'
            },
            {
              title: 'Info',
              className: 'dropdown-toggle btn-outline-info'
            },
            {
              title: 'Warning',
              className: 'dropdown-toggle btn-outline-warning'
            },
            {
              title: 'Danger',
              className: 'btn-outline-danger dropdown-toggle',
              dropclass: ''
            },
            {
              title: 'Focus',
              className: 'dropdown-toggle btn-outline-focus'
            },
            {
              title: 'Alt',
              dropclass: 'dropdown-toggle btn-outline-alternate'
            },
            {
              title: 'Light',
              dropclass: 'dropdown-toggle btn-outline-light'
            },
            {
              title: 'Dark',
              dropclass: 'dropdown-toggle btn-outline-dark'
            },
            {
              title: 'link',
              dropclass: 'dropdown-toggle btn-outline-link'
            }
            
          ] 
        },
        {
          title: 'Sizing',
          listButton: null,
          buttonGroup:[
            {
              btnGroup: [
                {
                  title: 'Large',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Normal',
                  className: 'btn-wite  btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Small',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
              ],
              divider: 'divider',
              subBtnGroup: [
                {
                  title: 'Large',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Normal',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Small',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
              ]
            },   
          ] 
        },
        {
          title: 'Wider',
          listButton: null,
          buttonGroup:[
            {
              btnGroup: [
                {
                  title: 'Large',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Normal',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split dropdown-toggle btn-primary',
                },
                {
                  title: 'Small',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
              ],
              // divider
              subBtnGroup: [
                {
                  title: 'Large',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Normal',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
                {
                  title: 'Small',
                  className: 'btn-wite btn-primary'
                },
                {
                  className: 'dropdown-toggle-split btn-primary dropdown-toggle',
                },
              ]
            },   
          ] 
        },
      ]
    }
  ] 
}