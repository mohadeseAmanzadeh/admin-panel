import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  heading = 'Pagination';
  subHeading = 'Basic and dynamic pagination for use in your next awesome application.';
  icon = 'pe-7s-notebook bg-mixed-hopes';


  public list = [
    {
      title: 'Basic',
      children: [
        {
          title: 'Default pagination:',
          class: 'divider',
          type: 1,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
          ],   
        },
        {
          title: 'No direction links:',
          class: 'divider',
          type: 2,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
          ],  
        },
        {
          title: 'With boundary links:',
          type: 0,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
          ],   
        },
      ]
    },
    {
      title: 'Advanced',
      children: [
        {
          title: '',
          type: 4,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
            {
              text: 8,
              active: false,
              id: 8
            },
            {
              text: 9,
              active: false,
              id: 9
            },
            {
              text: 10,
              active: false,
              id: 10
            },
            {
              text: 11,
              active: false,
              id: 11
            },
            {
              text: 12,
              active: false,
              id: 12
            },
          ],    
        },
        {
          title: '',
          type: 4,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
            {
              text: 8,
              active: false,
              id: 8
            },
            {
              text: 9,
              active: false,
              id: 9
            },
            {
              text: 10,
              active: false,
              id: 10
            },
            {
              text: 11,
              active: false,
              id: 11
            },
            {
              text: 12,
              active: false,
              id: 12
            },
          ],   
        },
        {
          title: '',
          type: 4,
          pageList: [
            {
              text: 1,
              active: false,
              id: 1
            },
            {
              text: 2,
              active: false,
              id: 2
            },
            {
              text: 3,
              active: false,
              id: 3
            },
            {
              text: 4,
              active: true,
              id: 4
            },
            {
              text: 5,
              active: false,
              id: 5
            },
            {
              text: 6,
              active: false,
              id: 6
            },
            {
              text: 7,
              active: false,
              id: 7
            },
            {
              text: 8,
              active: false,
              id: 8
            },
            {
              text: 9,
              active: false,
              id: 9
            },
            {
              text: 10,
              active: false,
              id: 10
            },
            {
              text: 11,
              active: false,
              id: 11
            },
            {
              text: 12,
              active: false,
              id: 12
            },
          ],   
        },
      ]
    }
  ]
  ngOnInit(): void {
    
    // this.pageList.forEach(()=>{
      
    // });
  }
}

