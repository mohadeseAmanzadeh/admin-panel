import { Component, Input } from '@angular/core';
  // interface statusBtnInerface {
  //   title: string
  // }
@Component({
  selector: 'app-status-btn',
  templateUrl: './status-btn.component.html',
  
})
export class StatusBtnComponent {

  @Input() className: string = '';
  @Input() item : any = {};
  // public statusBtn = [
  //   { title: 'Cancele',
  //     color: '#C71C22',
  //   },
  //   { title: 'On Hold',
  //     color: '#2FA4E7'
  //   },
  //   { title: 'In Progress',
  //     color: '#DD5600'
  //   },
  //   { title: ' Complated',
  //     color: '#73A839'
  //   }
  // ]
}
