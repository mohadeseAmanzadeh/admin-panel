import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  public listOrder = [
    {
      items: [
        {
          title: 'Total Orders',
          desc: 'Last year expenses',
          value: '1896',
          type: 'text-success'
        },
        {
          title: 'Clients',
          desc: 'Total Clients Profit',
          value: '$12.6k',
          type: 'text-primary'
        }
      ]
      
    },
    {
      items: [
        {
          title: 'Followers',
          desc: 'People Interested',
          value: '45,9%',
          type: 'text-danger'
        },
        {
          title: 'Products Sold',
          desc: 'Total revenue streams',
          value: '$3M',
          type: 'text-warning' 
        }
      ]
      
    },
    {
      items: [
        {
          title: 'Total Orders',
          desc: 'Last year expenses',
          value: '1896',
          type: 'text-success' 
        },
        {
          title: 'Clients',
          desc: 'Total Clients Profit',
          value: '$12.6k',
          type: 'text-primary'
        }
      ]
      
    },

  ]
}
