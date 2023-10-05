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
      title: 'sales last month'
    },
    {
      price: '1283',
      title: 'Sales Income'
    },
    {
      price: '1286',
      title: 'last month sales'
    },
    {
      price: '564',
      title: 'total revenue'
    },
    {
      price: '1283',
      title: 'Sales Income'
    },
    {
      price: '874',
      title: 'sales last month'
    }
  ]
}
