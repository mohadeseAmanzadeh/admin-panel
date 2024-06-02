import { Component } from '@angular/core';

@Component({
  selector: 'app-agents-status',
  templateUrl: './agents-status.component.html',
  styleUrls: ['./agents-status.component.scss']
})
export class AgentsStatusComponent {
  public agnetsStatusTable = [
    {
      hashtag: '#54',
      name: 'Juan C.Cargill',
      company: 'Micro electronics',
      value: '12Dec',
      achievement: {
        percent: '50%',
        type: 'danger'
      },
      statusBtn : {
        title: 'Canceled',
        type: 'badge-danger badge-pill'
      },
      avatarImg: {
        img: '/assets/images/1.jpg',
        type: ''
      }
    },
    {
      hashtag: '#55',
      name: 'Johnathan Phelan',
      company: 'Hatchwork',
      value: '12Dec',
      achievement: {
        percent: '90%',
        type: 'warning'
      },
      statusBtn : {
        title: 'On Hold',
        type: 'badge-info badge-pill'
      },
      avatarImg: {
        img: '/assets/images/2 (1).jpg',
        type: ''
      }
    },
    {
      hashtag: '#56',
      name: 'Darrel Lowe',
      company: 'Riddle Electronics',
      value: '12Dec',
      achievement: {
        percent: '35%',
        type: 'success'
      },
      statusBtn : {
        title: 'In Progress',
        type: 'badge-warning badge-pill'
      },
      avatarImg: {
        img: '/assets/images/3.jpg',
        type: ''
      }
    },
    {
      hashtag: '#56',
      img: '/assets/images/4.jpg',
      name: 'George T.Cottrell',
      company: 'Pixelcloud',
      value: '12Dec',
      achievement: {
        percent: '63%',
        type: 'info'
      },
      statusBtn : {
        title: 'Completed',
        type: 'badge-success badge-pill'
      },
      avatarImg: {
        img: '/assets/images/4.jpg',
        type: ''
      }
    }
  ]
}
