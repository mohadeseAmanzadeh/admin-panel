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
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
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
