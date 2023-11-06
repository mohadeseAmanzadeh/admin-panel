import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  
})
export class TasksListComponent {
  activeMenu: boolean = false;
  showMenu() {
    this.activeMenu = !this.activeMenu
  }
  
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
  
}
