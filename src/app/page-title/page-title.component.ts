import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  public titlePage = [
    { img: '',
      title: 'Analytics Dashboard',
      desc: 'This is an example dashboard created using build-in elements and components.',
    },
    {
      img: '',
      title: 'Standard Buttons',
      desc: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
    },
    {
      img: '',
      title: 'Dropdowns',
      desc: 'Multiple styles, actions and effects are available for the ArchutectUI dropdown buttons.'
    },
    {
      img: '',
      title: 'Icons',
      desc: 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.'
    },
    {
      img: '',
      title: 'Cards',
      desc: 'Wide selection of cards with multiple styles, borders, actions and hover effects.'
    },
    {
      img: '',
      title: 'List Groups',
      desc: 'These can be used with other components and elements to create stunning and unique new elements for your UIs.'
    },
    {
      img: '',
      title: 'Timelines',
      desc: 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.'
    },
    {
      img: '',
      title: 'Tabs',
      desc: 'Tabs are used to split content between multiple sections. Wide variety available.'
    },
    {
      img: '',
      title: 'Accordions',
      desc: 'Accordions represent collapsable component with extended functionality.'
    },
    {
      img: '',
      title: 'Modals',
      desc: 'Wide selection of modal dialogs styles and animations available.'
    },
    {
      img: '',
      title: 'Progress Bar',
      desc:  'You can use the progress bars on their own or in combination with other widgets.'
    },
    {
      img: '',
      title: 'Tooltips & Popovers',
      desc: 'These Vue components are used to add interaction or extra information for your apps content.'
    },
    {
      img: '',
      title: 'Carousels & Slideshows',
      desc: 'Create easy and beautiful slideshows with these Vue components.'
    },
    {
      img: '',
      title: 'Pagination',
      desc: 'Basic and dynamic pagination for use in your next awesome application.'
    },
    {
      img: '',
      title: 'Form Controls',
      desc: 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.'
    }
  ]
}
