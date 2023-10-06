import { Component } from '@angular/core';
interface MenuSideInterface {
  menuTitle?: MenuTitleInterface[]
  title : string
  subMenu?: SubMenuInterface[]
}

interface SubMenuInterface {
  title: string
}

interface MenuTitleInterface {
  title: string
}
@Component({
  selector: 'app-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.scss']
})
export class PerfectScrollbarComponent {
  public listPs = [
    { 
      color: '#C71C22',
      title: 'All Hands Meeting'
    },
    {
      color: '#DD5600',
      titleP: 'Yet another one,',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      badge: ' NEW'

    },
    {
      color: '#033C73',
      title: 'Something not important'
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production releaseBuild',
      badge: ' NEW'
    },
    {
      color: '#2FA4E7',
      title: 'This dot has an info state'
    },
    {
      color: '#343a40',
      title: 'This dot has a dark state'
    },
    {
      color: '#C71C22',
      title: 'All Hands Meeting'
    },
    {
      color: '#DD5600',
      titeP: 'Yet another one,',
      time: '15:00 PM'
    },
    {
      color: '#73A839',
      title: 'Build the production release ',
      badge: ' NEW'
    },
    {
      color: '#033C73',
      title: 'Something not important'
    }
  ]
  public menuSide : MenuSideInterface[] = [
    {
      menuTitle: [
        {title: 'MAIN NAVIGATION'},
      ],
      title: 'Dashboards',
      subMenu: [
        {title: 'analytics'}
      ]
    },
    {
      title: 'Pages',
      subMenu: [
        {title: 'Login Boxed'},
        {title: 'Register Boxed'},
        {title: 'Forget Password Boxed'}
      ]
    },
    {
      menuTitle: [
        {title: 'BOOTSTRAP COMPONENTS'},
      ],
      title: 'Elements',
      subMenu: [
        {title: 'Standard Buttons'},
        {title: 'Dropdowns'},
        {title: 'Icons'},
        {title: 'Cards'}
      ]
    },
    {
      title: 'Components',
      subMenu: [
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
      subMenu: [
        {title: 'Controls'},
        {title: 'Layout'}
      ]
    },
    {
      title: 'Tables',
      subMenu: [
        {title: 'Bootstrap 4 Tables'}
      ]
    },
    {
      menuTitle: [
        {title: 'DASHBOARD BOXES'},
      ],
      title: 'Chart Boxes',
      subMenu: [
        {title: 'Variation 3'}
      ]
    },
    {
      menuTitle: [
        {title: 'CHARTS'},
      ],
      title: 'ChartJS'
    },
  ]
}
