import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  public list = [
    {
      title: 'Basic',
      children: [
        {
          title: 'Default pagination:',
          class: 'divider',
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
          type: '',
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
          type: '',
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
          title: '',
          type: '',
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
          title: '',
          type: '',
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
    }
  ]
  ngOnInit(): void {
    
    // this.pageList.forEach(()=>{
      
    // });
  }
}

