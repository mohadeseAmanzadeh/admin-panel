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
      img: '/assets/images/1.jpg',
      name: 'Juan C.Cargill',
      company: 'Micro electronics',
      dd: '12Dec',
    },
    {
      hashtag: '#55',
      name: 'Johnathan Phelan',
      company: 'Hatchwork',
      dd: '12Dec',
    },
    {
      hashtag: '#56',
      name: 'Darrel Lowe',
      company: 'Riddle Electronics',
      dd: '12Dec',
    },
    {
      hashtag: '#56',
      name: 'George T.Cottrell',
      company: 'Pixelcloud',
      dd: '12Dec',
    }
  ]
}
