import { Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {
  public listPortfoio = [
    {
      title: 'Cash Deposits',
      number: '1,7M',
      percent: '54.1%',
      titlePercent: 'less earnings'
    },
    {
      title: 'Invested Dividents',
      number: '9M',
      percent: '14.1%',
      titlePercent: 'Grow Rate'
    },
    {
      title: 'Capital Gains',
      number: '$563',
      percent: '7.35%',
      titlePercent: 'Increased by'
    }
  ]
}
