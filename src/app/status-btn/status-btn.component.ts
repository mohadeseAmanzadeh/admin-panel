import { Component } from '@angular/core';
  // interface statusBtnInerface {
  //   title: string
  // }
@Component({
  selector: 'app-status-btn',
  templateUrl: './status-btn.component.html',
  styleUrls: ['./status-btn.component.scss']
})
export class StatusBtnComponent {
  public statusBtn = [
    { title: 'Cancel',
      color: '#C71C22',
    },
    { title: 'On Hold',
      color: '#2FA4E7'
    },
    { title: 'In Progress',
      color: '#DD5600'
    },
    { title: ' Complated',
      color: '#73A839'
    }
  ]
}
