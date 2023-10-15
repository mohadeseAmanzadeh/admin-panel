import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  public titlePage = [

    {
      id: 1,
      img: '',
      title: 'Analytics Dashboard',
      desc: 'This is an example dashboard created using build-in elements and components.',
    },
    { 
      id: 2,
      img: '',
      title: 'Standard Buttons',
      desc: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
    },
    {
      id: 3,
      img: '',
      title: 'Dropdowns',
      desc: 'Multiple styles, actions and effects are available for the ArchutectUI dropdown buttons.'
    },
    {
      id: 4,
      img: '',
      title: 'Icons',
      desc: 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.'
    },
    {
      id: 5,
      img: '',
      title: 'Cards',
      desc: 'Wide selection of cards with multiple styles, borders, actions and hover effects.'
    },
    {
      id: 6,
      img: '',
      title: 'List Groups',
      desc: 'These can be used with other components and elements to create stunning and unique new elements for your UIs.'
    },
    {
      id: 7,
      img: '',
      title: 'Timelines',
      desc: 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.'
    },
    {
      id: 8,
      img: '',
      title: 'Tabs',
      desc: 'Tabs are used to split content between multiple sections. Wide variety available.'
    },
    {
      id: 9,
      img: '',
      title: 'Accordions',
      desc: 'Accordions represent collapsable component with extended functionality.'
    },
    {
      id: 10,
      img: '',
      title: 'Modals',
      desc: 'Wide selection of modal dialogs styles and animations available.'
    },
    {
      id: 11,
      img: '',
      title: 'Progress Bar',
      desc:  'You can use the progress bars on their own or in combination with other widgets.'
    },
    {
      id: 12,
      img: '',
      title: 'Tooltips & Popovers',
      desc: 'These Vue components are used to add interaction or extra information for your apps content.'
    },
    {
      id: 13,
      img: '',
      title: 'Carousels & Slideshows',
      desc: 'Create easy and beautiful slideshows with these Vue components.'
    },
    {
      id: 14,
      img: '',
      title: 'Pagination',
      desc: 'Basic and dynamic pagination for use in your next awesome application.'
    },
    {
      id: 15,
      img: '',
      title: 'Form Controls',
      desc: 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.'
    },
    {
      id: 16,
      img: '',
      title: 'Form Controls',
      desc : 'Build whatever layout you need with our ArchitectUI framework.'
    },
    {
      id: 17,
      img: '',
      title: 'Bootstrap 4 Tables',
      desc: 'Tables are the backbone of almost all web applications.'
    },
    { 
      id: 18,
      img: '',
      title: 'Chart Boxes III',
      desc: 'Highly configurable boxes best used for showing numbers in an user friendly way.'
    },
    {
      id: 19,
      img: '',
      title: 'ChartJS',
      desc: 'Huge selection of charts created with the Vue ChartJS Plugin'
    }
  ]
}
