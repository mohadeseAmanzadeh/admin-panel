import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent {
  public salesList = [
    {
      price: '874',
      title: 'sales last month',
      type: 'card-shadow-success',
      borderClass: 'border-success'
    },
    {
      price: '1283',
      title: 'Sales Income',
      type: 'card-shadow-primary',
      borderClass: 'border-primary'
    },
    {
      price: '1286',
      title: 'last month sales',
      type: 'card-shadow-warning',
      borderClass: 'border-warning'
    },
    {
      price: '564',
      title: 'total revenue',
      type: 'card-shadow-danger',
      borderClass: 'border-danger'
    },
    {
      price: '1283',
      title: 'Sales Income',
      type: 'card-shadow-info',
      borderClass: 'border-info'
    },
    {
      price: '874',
      title: 'sales last month',
      type: 'card-shadow-warning',
      borderClass: 'border-warning'
    }
  ]
}
