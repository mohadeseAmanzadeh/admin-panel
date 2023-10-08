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
      value: '12Dec',
    },
    {
      hashtag: '#55',
      name: 'Johnathan Phelan',
      company: 'Hatchwork',
      value: '12Dec',
    },
    {
      hashtag: '#56',
      name: 'Darrel Lowe',
      company: 'Riddle Electronics',
      value: '12Dec',
    },
    {
      hashtag: '#56',
      name: 'George T.Cottrell',
      company: 'Pixelcloud',
      value: '12Dec',
    }
  ]
}
