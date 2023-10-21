import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  public tableBasic = [
    {
      title: 1,
      country: 'Russia',
      area: '17,075,200',
      value: '146,989,754',
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'
    },
    {
      title: 2,
      country: 'Canada',
      area: '9,976,140',
      value: '36,624,199',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg'
    },
    {
      title: 3,
      country: 'United States',
      area: '9,629,091',
      value: '324,459,463',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
    },
    {
      title: 4,
      country: 'China',
      area: '9,596,960',
      value: '1,409,517,397',
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg'
    },
  ]
}
// 