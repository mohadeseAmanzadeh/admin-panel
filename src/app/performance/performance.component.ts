import { Component } from '@angular/core';
  interface listPortfoioInterface {
    title: string
    number: string
    percent?: string
    price?: string
    titlePercent: string
  }
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
      titlePercent: 'less earnings',
      opacity: 'opacity-10',
      background: 'bg-warning',
      fontName: 'pe-7s-album',
      text: 'text-danger',
      padding: 'pr-1'
    },
    {
      title: 'Invested Dividents',
      number: '9M',
      percent: '14.1%',
      titlePercent: 'Grow Rate',
      opacity: 'opacity-9',
      background: 'bg-danger',
      fontName: 'pe-7s-portfolio',
      text: 'text-info',
      padding: 'pl-1'
      
    },
    {
      title: 'Capital Gains',
      price: '$563',
      percent: '7.35%',
      type: 'text-success',
      titlePercent: 'Increased by',
      opacity: 'opacity-9',
      background: 'bg-success',
      fontName: 'pe-7s-light',
      text: 'text-warning',
      padding: ''
    }
  ]
}
