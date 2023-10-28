import { Component } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {

  public activeUserTable = [
    {
      value: '#345',
      avatarImg: {
        img: '/assets/images/1.jpg',
        type:''
      },
      title: 'John Doe',
      desc: 'Web Developer',
      text: 'Madrid',
      statusBtn: {
        title: 'Pending',
        type: 'badge-warning'
      },
      actionBtn: {
        title: 'Details',
        type: 'btn-primary'
      }
    },
    {
      value: '#347',
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      },
      title: 'Ruben Tillman',
      desc: 'Etiam sit amet orci eget',
      text: 'Berlin',
      statusBtn: {
        title: 'Completed',
        type: 'badge-success'
      },
      actionBtn: {
        title: 'Details',
        type: 'btn-primary'
      }
    },
    {
      value: '#321',
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      },
      title: 'Elliot Huber',
      desc: 'Lorem ipsum dolor sic',
      text: 'London',
      statusBtn: {
        title: 'In Progress',
        type: 'badge-danger'
      },
      actionBtn: {
        title: 'Details',
        type: 'btn-primary'
      }
    },
    {
      value: '#345',
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      },
      title: 'Vinnie Wagstaff',
      desc: 'UI Designer',
      text: 'Amsterdam',
      statusBtn: {
        title: 'On Hold',
        type: 'badge-info'
      },
      actionBtn: {
        title: 'Details',
        type: 'btn-primary'
      }
    }
  ]
}
