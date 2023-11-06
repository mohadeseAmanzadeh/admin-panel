import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-tables',
  templateUrl: './bootstrap-tables.component.html',
  styleUrls: ['./bootstrap-tables.component.scss']
})
export class BootstrapTablesComponent {

  heading = 'Bootstrap 4 Tables';
  subHeading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer'


  public menu = [
    {
      title: 'Simple table',
      className: 'border-top'
    },
    {
      title: 'Table bordered',
      className: 'table-bordered'
    },
    {
      title: 'Table without border',
      className: 'table-borderless'
    },
    {
      title: 'Table dark',
      className: 'table-dark'
    },
    {
      title: 'Table with hover',
      className: 'table-hover'
    },
    {
      title: 'Table responsive',
      className: 'table-reponsive'
    },
    {
      title: 'Table sizing',
      className: 'table-sm'
    },
    {
      title: 'Table striped',
      className: 'table-striped'
    }
  ]
}
