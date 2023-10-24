import { Component } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {
  public cardList = [
    {
      children: [
        {
          title: 'Basic',
          desc: 'Dismissed with: Cross click',
          className: 'divider',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary'
          }
        },
        {
          title: 'Scrollable Fixed Content',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary'
          },
        },
        {
          title: 'Long Content',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary'
          },
        }
      ]
    },
    {
      children: [
        {
          title: 'Large Modal',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-success'
          }
        },
        {
          title: 'Small Modal',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-success'
          }
        }
      ]
    }
  ]
}
