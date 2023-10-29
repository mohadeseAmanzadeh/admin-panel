import { Component } from '@angular/core';
 

@Component({
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.scss']
})
export class VariationsComponent {

  
  public menu = [
    {
      type: 'mt-4',
      children: [
        {
          title: 'Total Orders',
          desc: 'Last year expenses',
          number: '1896',
          type: 'text-success',
          className: '',
          color: ''
        },
        {
          title: 'Clients',
          desc: 'Total Clients Profit',
          number: '$ 568',
          type: 'text-primary',
          className: '',
          color: ''
        },
        {
          title: 'Products Sold',
          desc: 'Total revenue streams',
          number: '$14M',
          type: 'text-warning',
          className: '',
          color: ''
        },
        {
          title: 'Followers',
          desc: 'People Interested',
          number:'46%',
          type: 'text-danger',
          className: '',
          color: ''
        },
      ],
      divider: 'divider',
    },
    {
      children: [
        {
          title: 'Total Orders',
          desc: 'Last year expenses',
          number: '1896',
          type: '',
          className: 'bg-night-fade',
          color: 'text-white'
        },
        {
          title: 'Clients',
          desc: 'Total Clients Profit',
          number: '$ 568',
          type: '',
          className: 'bg-arielle-smile',
          color: 'text-white'
        },
        {
          title: 'Products Sold',
          desc: 'Total revenue streams',
          number: '$14M',
          type: 'text-warning',
          className: 'bg-premium-dark',
          color: 'text-white'
        },
        {
          title: 'Followers',
          desc: 'People Interested',
          number:'46%',
          type: 'text-dark',
          color: 'text-white',
          className: 'bg-happy-green'
        }
      ],
      divider: 'divider',
    },
  ]
  public orders = [
    {
      title: 'Total Orders',
      desc: 'Last year expenses',
      number: '1896',
      type: 'text-success',
      className: 'card mb-3',
      color: '',
      value: '65%',
      bgColor: 'bg-primary',
      percent: '100%',
      text: 'YoY Growth',
      show: true
    },
    {
      title: 'Clients',
      desc: 'Total Clients Profit',
      number: '$12.6k',
      type: 'text-primary',
      className: 'card mb-3',
      color: '',
      value: '47%',
      bgColor: 'bg-warning',
      percent: '100%',
      text: 'YoY Growth',
      show: false
    },
    {
      title: 'Products Sold',
      desc: 'Total revenue streams',
      number: '$3M',
      type: 'text-warning',
      className: 'card mb-3',
      color: '',
      value: '85%',
      bgColor: 'bg-danger',
      percent: '100%',
      text: 'YoY Growth',
      show: true
    },
    {
      title: 'Followers',
      desc: 'People Interested',
      number: '45,9%',
      type: 'text-danger',
      className: 'card mb-3',
      color: '',
      value: '65%',
      bgColor: 'bg-success',
      percent: '100%',
      text: 'YoY Growth',
      show: true
    },
  ]
  public cards = [
    {
      children: [
        {
          number: '1896',
          type: 'text-success',
          title: 'Total Orders',
          desc: 'Last year expenses',
        },
        {
          number: '$ 14M',
          type: 'text-warning',
          title: 'Products Sold',
          desc: 'Total revenue streams', 
        },
        {
          number: '45.9%',
          type: 'text-danger',
          title: 'Followers',
          desc: 'People Interested',
        }
      ]
    }
  ];

  getCards(orders: any) {
    return orders;
  }

  getWithoutCards(orders: any) {
    return orders.map((order: any) => {
      let order2 = Object.assign({}, order)
      order2.className = '';
      return order2;
    });
  }

  getShowCards(orders: any) {
    return orders.filter((order: any) => order.show === true)
    .map((order: any) => {
      let order2 = Object.assign({}, order)
      order2.className = '';
      return order2
    });
  }
}
