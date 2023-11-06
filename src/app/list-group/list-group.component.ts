import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent {

  

  public  listGroup = [
    {
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      },
      title: 'Alina Mcloughlin',
      desc: 'A short profile description',
      statusBtn: null,
      buttons: null,
      actions: true,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: 'rounded'
      },
      title: 'Ruben Tillman',
      desc: 'Etiam sit amet orci eget eros faucibus',
      statusBtn: {
          title: 'NEW',
          type: 'badge-danger'
      },
      buttons: null, 
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: ''
      },
      title: 'Vinnie Wagstaff',
      statusBtn: null,
      buttons: {
        title: 'Details',
        className: 'btn-pill btn-hover-shine btn-sm btn-focus'
      },
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/3.jpg',
        type: ''
      },
      title: 'Ella-Rose Henry',
      desc: 'Lorem ipsum dolor sit amet, consectetuer',
      text  : '$377',
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/3.jpg',
        type: 'rounded'
      },
      title: 'Eliot Huber',
      statusBtn: {
        title: '43',  
        type: 'badge-warning badge-pill ml-auto',
      },
      buttons: null,
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: ''
      },
      head: 'Product Sales',
      total: '$156,24',
      statusBtn: null,
      buttons: null,
      actions: false,
      percent: '52,5%',
      right: false
    },
    {
      title: 'Product Sales',
      avatarImg: null,
      statusBtn: null,
      buttons:null,
      actions: false,
      right: true
    },
    { 
      title: 'Hidden Actions Pane',
      button: {
        title: 'follow',
        className: 'btn-outline-primary btn-pill',
      },
      avatarImg: null,
      statusBtn: null,
      actions: false,
      right: false,
      icon: 'bg-happy-itemo'
    },
    {
      title: 'Example file 1',
      avatarImg: null,
      statusBtn: null,
      buttons: null,
      actions: false,
      right: true,
      iconName: 'pe-7s-file',
      link: 'btn-link'
    }
  ]

  public listyGroup2 =  [
    {
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      },
      title: 'Alina Mcloughlin',
      desc: 'A short profile description',
      statusBtn: null,
      buttons: null,
      actions: true,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: 'rounded'
      },
      title: 'Ruben Tillman',
      desc: 'Etiam sit amet orci eget eros faucibus',
      statusBtn: {
          title: 'NEW',
          type: 'badge-danger'
      },
      buttons: null, 
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: ''
      },
      title: 'Vinnie Wagstaff',
      statusBtn: null,
      buttons: {
        title: 'Details',
        className: 'btn-pill btn-hover-shine btn-sm btn-focus'
      },
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/3.jpg',
        type: ''
      },
      title: 'Ella-Rose Henry',
      desc: 'Lorem ipsum dolor sit amet, consectetuer',
      text  : '$377',
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/3.jpg',
        type: 'rounded'
      },
      title: 'Eliot Huber',
      statusBtn: {
        title: '43',  
        type: 'badge-warning badge-pill ml-auto',
      },
      buttons: null,
      actions: false,
      right: true
    },
    {
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: ''
      },
      head: 'Product Sales',
      total: '$156,24',
      statusBtn: null,
      buttons: null,
      actions: false,
      percent: '52,5%',
      right: false
    },
    {
      title: 'Product Sales',
      avatarImg: null,
      statusBtn: null,
      buttons:null,
      actions: false,
      right: true
    },
    { 
      title: 'Hidden Actions Pane',
      button: {
        title: 'follow',
        className: 'btn-outline-primary btn-pill',
      },
      avatarImg: null,
      statusBtn: null,
      actions: false,
      right: false,
      icon: 'bg-happy-itemo'
    },
    {
      title: 'Example file 1',
      avatarImg: null,
      statusBtn: null,
      buttons: null,
      actions: false,
      right: true,
      iconName: 'pe-7s-file',
      link: 'btn-link'
    }
  ]

  public  menuCol = [
    {
      menuChild: [
        {
          title: 'List group',
          subMenu: [
            {title: 'Cras justo odio',},
            {title: 'Dapibus ac facilisis in',},
            {title: 'Morbi leo risus',},
            {title: 'Porta ac consectetur ac',},
            {title : 'Vestibulum at eros',}
          ]
        },
        {
          title: 'List group buttons',
          buttons: [
            {
              title: 'Cras justo odio',
              type: 'active'
            },
            {title: 'Dapibus ac facilisis in'},
            {title: 'Morbi leo risus',},
            {title: 'Porta ac consectetur ac'},
            {title : 'Vestibulum at eros',}
          ]
        },
        {
          title: 'List group badges',
          menu: [
            {
              title: 'Cras justo odio',
              number: '14'
            },
            {
              title: 'Dapibus ac facilisis in',
              number: '2'
            },
            {
              title: 'Morbi leo risus',
              number: '1'
            },
          ]
        },
        {
          title: 'List group contextual classes',
          listItem: [
            {
              title: 'Cras justo odio',
              type: 'list-group-item-success'
            },
            {
              title: 'Dapibus ac facilisis in',
              type: 'list-group-item-info'
            },
            {
              title: 'Morbi leo risus',
              type: 'list-group-item-warning'
            },
            {
              title: 'Porta ac consectetur ac',
              type: 'list-group-item-danger'
            },
          ]
        },
        {
          title: 'List group custom content',
          list: [
            {
              title: 'List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
              type: 'active'
            },
            {
              title: 'List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            },
            {
              title: 'List group item heading',
              desc: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            }
          ]
        },
        {
          title: 'List group disabled items',
          menuLink: [
            {
              title: 'Cras justo odio',
              type: 'disabled'
            },
            {title: 'Dapibus ac facilisis in'},
            {title: 'Morbi leo risus'},
            {title: 'Porta ac consectetur ac'},
            {title : 'Vestibulum at eros'}
          ]
        },
        {
          title: 'List group without border',
          menuLinkFlush: [
            {
              title: 'Cras justo odio',
              type: 'disabled'
            },
            {title: 'Dapibus ac facilisis in'},
            {title: 'Morbi leo risus'},
            {title: 'Porta ac consectetur ac'},
            {title : 'Vestibulum at eros'}
          ]
        }
      ]
    }
  ]
}
