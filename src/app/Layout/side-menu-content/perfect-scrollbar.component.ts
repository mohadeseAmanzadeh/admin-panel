import { Component } from '@angular/core';

@Component({
  selector: 'app-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.scss']
})
export class PerfectScrollbarComponent {
  
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
            {
              title: 'analytics',
              link: 'analytics'
            }
          ]
        },
        { 
          title: 'Pages',
          type: 'pe-7s-browser',
          collapse: 105,
          active: false,
          children: [
            { 
              title: 'Login Boxed',
              link: 'loginBoxed'
            },
            { 
              title: 'Register Boxed',
              link: 'registerBoxed'
            },
            {
              title: 'Forget Password Boxed',
              link: 'forgetPassword'
            }
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
          collapse: 210,
          active: false,
          children: [
            {
              title: 'Standard Buttons',
              link: 'standardButtons'
            },
            {
              title: 'Dropdowns',
              link: 'Dropdowns'
            },
            {
              title: 'Icons',
              link: 'icons'
            },
            {
              title: 'Cards',
              link: 'cards'
            },
            {
              title: 'List Group',
              link: 'listGroup'
            },
            {
              title: 'Timeline',
              link: 'timelines'
            }
            ]
        },
        { 
          title: 'Components',
          type: 'pe-7s-car',
          collapse: 250,
          active: false,
          children: [
            {
              title: 'Tabs',
              link: 'tabs'
            },
            {
              title: 'Accordions',
              link: 'accordions'
            },
            {
              title: 'Models',
              link: 'Models'
            },
            {
              title: 'Progress Bar',
              link: 'progressBar'
            },
            { 
              title: 'Tooltips & Popovers',
              link: 'tooltips'
            },
            {
              title: 'Carousel',
              link: 'carousel'
            },
            {
              title: 'Pagination',
              link: 'pagination'
            }
          ]
        },
        {
          title: 'Form Element',
          type: 'pe-7s-helm',
          collapse: 70,
          active: false,
          children: [
              {
                title: 'Controls',
                link: 'Controls'
              },
              {
                title: 'Layouts',
                link: 'Layouts'
              }
          ]
        },
        {
          title: 'Tables',
          type: 'pe-7s-safe',
          active: false,
          collapse: 40,
          children: [
            { 
              title: 'Bootstrap 4 Tables',
              link: 'bootstrapTable'
            }
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
            {
              title: 'Variation 3',
              link: 'variations'
            }
          ]
        },
      ], 
    },
    {
      title: 'CHARTS',
      subMenu : [
        { 
          title: 'ChartJS',
          link: 'charts',
          type: 'pe-7s-graph2',
          collapse: 50,
          active: false,
          children: [
           {
            title: 'ChartJS',
            link: 'charts',
            }
          ]
        },
        ],
    }
  ]
}
