import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  
})
export class TasksListComponent {
  
  public menuDropDown = [
    { 
      title: 'Menus',
      type: 'lnr-indbox'
    },
    { 
      title: 'Settings',
      type: 'lnr-file-empty'
    },
    {
      title: 'Actions',
      type: 'lnr-book'
    },
  ]
  public menuNav = [
    {
      title: 'Activity',
      header: 'nav-item-header'
    },
    {
      titleLink: 'Chat',
      type: 'badge-info',
      text: '8'
    },
    {
      titleLink: 'Recover Password'
    },
    {
      title: 'My Account',
      header: 'nav-item-header'
    },
    {
      titleLink: 'Settings',
      type: 'badge-success',
      text: 'New'
    },
    {
      titleLink: 'Messages',
      type: 'badge-warning',
      text: '512'
    },
    {
      titleLink: 'Logs'
    },
    {
      divider: 'nav-item-divider'
    },
    {
      button: 'Cancel'
    }
  ]
  public taskList = [
    {
      title: 'Wash the car',
      statusBtn : {
        title: 'Rejected',
        type: 'badge-danger'
      },
      desc: 'Written by Bob',
      descStatusBtn : null,
      canConfirm: true,
      canDelete: true
    },
    {   
      title: 'Task with dropdown menu',
      statusBtn : null,
      desc: 'By Johnny',
      descStatusBtn : {
        title: 'New',
        type: 'badge-info'
      },
      canConfirm: false,
      canDelete: false
    // btnNew: 'NEW',
    // backgrondType: 'bg-focus',
    // typeDanger: 'badge-info',
    // typebtnDanger: 'btn-outeline-danger',
    // typeBtnSuccess: 'btn-outeline-success',
    // marginLeftType: 'ml-2'
    },
    {
      title: 'Badge on the right task',
      statusBtn : null,
      desc: 'This task has show on hover actions!',
      descStatusBtn : null,
      canConfirm: true,
      canDelete: false,
      type: 'flex2',
      actionStatusBtn : {
        title: 'Latest Task',
        type: 'badge-success'
      },
    },
    {
      title: 'Go grocery shopping',
      statusBtn : null,
      desc: 'A short description for this todo item',
      descStatusBtn : null,
      canConfirm: true,
      canDelete: true,
      avatarImg: {
        img: '/assets/images/1.jpg',
      }
    }
]
}
