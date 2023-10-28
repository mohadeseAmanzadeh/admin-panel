import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list-content',
  templateUrl: './tasks-list-content.component.html',
  styleUrls: ['./tasks-list-content.component.scss']
})
export class TasksListContentComponent {
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
        type: 'szdfgdfsd',
      }
    }
]
}
