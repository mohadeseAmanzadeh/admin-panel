import { Component } from '@angular/core';

@Component({
  selector: 'app-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.scss']
})
export class PerfectScrollbarComponent {
  

  // public menuSide = [
  //   {
  //     menuTitle: [
  //       {title: 'MAIN NAVIGATION'},
  //     ],
  //     title: 'Dashboards',
  //     type: 'pe-7s-rocket',
  //     collapse: 40,
  //     active: false,
  //     subMenu: [
  //       {title: 'analytics'}
  //     ]
  //   },
  //   {
  //     title: 'Pages',
  //     type: 'pe-7s-browser',
  //     collapse: 120,
  //     active: false,
  //     subMenu: [
  //       {title: 'Login Boxed'},
  //       {title: 'Register Boxed'},
  //       {title: 'Forget Password Boxed'}
  //     ]
  //   },
  //   {
  //     menuTitle: [
  //       {title: 'BOOTSTRAP COMPONENTS'},
  //     ],
  //     title: 'Elements',
  //     type: 'pe-7s-diamond',
  //     collapse: 160,
  //     active: false,
  //     subMenu: [
  //       {title: 'Standard Buttons'},
  //       {title: 'Dropdowns'},
  //       {title: 'Icons'},
  //       {title: 'Cards'}
  //     ]
  //   },
  //   {
  //     title: 'Components',
  //     type: 'pe-7s-car',
  //     collapse: 240,
  //     active: false,
  //     subMenu: [
  //       {title: 'Tabs'},
  //       {title: 'Accordions'},
  //       {title: 'Models'},
  //       {title: 'Progress Bar'},
  //       {title: 'Tooltips & Popovers'},
  //       {title: 'Carousel'},
  //       {title: 'Pagination'}
  //     ]
  //   },
  //   {
  //     title: 'Form Element',
  //     type: 'pe-7s-helm',
  //     collapse: 80,
  //     active: false,
  //     subMenu: [
  //       {title: 'Controls'},
  //       {title: 'Layout'}
  //     ]
  //   },
 
  //   {
  //     menuTitle: [
  //       {title: 'DASHBOARD BOXES'},
  //     ],
  //     title: 'Chart Boxes',
  //     type: 'pe-7s-graph2',
  //     collapse: 40,
  //     active: false,
  //     subMenu: [
  //       {title: 'Variation 3'}
  //     ]
  //   },
  //   {
  //     menuTitle: [
  //       {title: 'CHARTS'},
  //     ],
  //     title: 'ChartJS',
  //     type: 'pe-7s-graph2',
  //     collapse: 40,
  //     active: false,
  //   },
  // ]
  // public menuSide = [
  //  {
  //     menutitle: [
  //       title: 'MAIN NAVIGATION',


  //     ]
  //   }
  // ]
  public menuSide = [
    {
      title: 'MAIN NAVIGATION',
      subMenu : [
        { 
          title: 'dashboard',
          type: 'pe-7s-rocket',
          collapse: 40,
          active: false,
          children: [
            {title: 'analytics'}
          ]
        },
        { 
          title: 'Pages',
          type: 'pe-7s-browser',
          collapse: 120,
          active: false,
          children: [
            {title: 'Login Boxed'},
            {title: 'Register Boxed'},
            {title: 'Forget Password Boxed'}
          ]
        }
        ],
    },
    {
      title: 'BOOTSTRAP COMPONENTS',
      subMenu : [
        { 
          title: 'Elements',
          type: 'pe-7s-diamond',
          collapse: 160,
          active: false,
          children: [
            {title: 'Standard Buttons'},
            {title: 'Dropdowns'},
            {title: 'Icons'},
            {title: 'Cards'}
            ]
        },
        { 
          title: 'Components',
          type: 'pe-7s-car',
          collapse: 240,
          active: false,
          children: [
            {title: 'Tabs'},
            {title: 'Accordions'},
            {title: 'Models'},
            {title: 'Progress Bar'},
            {title: 'Tooltips & Popovers'},
            {title: 'Carousel'},
            {title: 'Pagination'}
          ]
        },
        {
          title: 'Form Element',
          type: 'pe-7s-helm',
          collapse: 80,
          active: false,
          children: [
              {title: 'Controls'},
              {title: 'Layout'}
          ]
        },
        {
          title: 'Tables',
          type: 'pe-7s-safe',
          active: false,
          collapse: 40,
          children: [
            {title: 'Bootstrap 4 Tables'}
          ]
        },
      ],
      
    },
    {
      title: 'DASHBOARD BOXES',
      subMenu : [
        { 
          title: 'Chart Boxes',
          type: 'pe-7s-graph2',
          collapse: 40,
          active: false,
          children: [
            {title: 'Variation 3'}
          ]
        },
      ], 
    },
    {
      title: 'CHARTS',
      subMenu : [
        { 
          title: 'ChartJS',
          type: 'pe-7s-graph2',
          collapse: 40,
          active: false,
          children: [
           
          ]
        },
        ],
    }
  ]
}
