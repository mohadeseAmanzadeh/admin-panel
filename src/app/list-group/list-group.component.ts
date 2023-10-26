import { Component } from '@angular/core';


@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {
  public menu = [
    {
      children: [
        {
          title: 'List group',
          items: [
            {
              title: 'Cras justo odio',
              descBtn: ''
            },
            {title: 'Cras justo odio', descBtn: ''},
            {title: 'Morbi leo risus', descBtn: ''},
            {title: 'Porta ac consectetur ac', descBtn: ''},
            {title: 'Vestibulum at eros', descBtn: ''}
          ],
          buttons: null,
          subMenu: null,
          list: null    
        },
        {
          title: 'List group badges',
          items: [
            {
              title: 'Cras justo odio',
              descBtn: '14'
            },
            {
              title: 'Dapibus ac facilisis in',
              descBtn: '2'
            },
            {
              title: 'Dapibus ac facilisis in',
              descBtn: '1'
            }
          ],
          buttons: null,
          subMenu: null,
          list: null
        },
        {
          title: 'List group custom content',
          subMenu: [
            {
              title: 'List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            },
            {
              title: ' List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            },
            {
              title: 'List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            }
          ],
          buttons: null,
          items: null,
          list: null
        },
        {
          title: 'List group without border',
          list: [
            {
              title: 'Cras justo odio',
              className: 'disabled'
            },
            {
              title: 'Dapibus ac facilisis in'
            },
            {
              title: 'Morbi leo risus'
            },
            {
              title: 'Porta a consectetur ac'
            },
            {
              title: 'Vestibulum at eros'
            }
          ],
          buttons: null,
          items: null,
          subMenu: null
        }
      ]
    },
    {
      children: [
        {
          title: 'List group buttons',

          buttons: [
            {title: 'Cras justo odio'},
            {title: 'Cras justo odio'},
            {title: 'Morbi leo risus'},
            {title: 'Porta ac consectetur ac'},
            {title: 'Vestibulum at eros'}
          ], 
          list: null,
          items: null,
          subMenu: null 
        },
        {
          title: 'List group contextual classes',
          items: [
            {title: 'Cras justo odio'},
            {title: 'Cras justo odio'},
            {title: 'Morbi leo risus'},
            {title: 'Porta ac consectetur ac'},
            {title: 'Vestibulum at eros'}
          ],
          buttons: null,
          list: null,
          subMenu: null
        },
        {
          title: 'List group disabled items',
          list: [
            {
              title: 'Cras justo odio',
              className: 'disabled'
            },
            {
              title: 'Dapibus ac facilisis in'
            },
            {
              title: 'Morbi leo risus'
            },
            {
              title: 'Porta a consectetur ac'
            },
            {
              title: 'Vestibulum at eros'
            }
          ],
          buttons: null,
          items: null,
          subMenu: null
        }
      ]
    }
  ]
}
