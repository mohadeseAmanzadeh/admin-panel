import { Component } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
  public progressBarList = [
    {
      perent: '71%',
      color: '#C71C22'
    },
    {
      perent: '54%',
      color: '#DD5600'
    },
    {
      perent: '97%',
      color: '#73A839'
    },
    {
      perent: '88%',
      color: '#2FA4E7'
    },
  ]
}
