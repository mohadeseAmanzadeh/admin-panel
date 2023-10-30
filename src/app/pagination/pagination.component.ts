import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  public pageList = [
    {
      title: 'Basic',
      children: [
        {
          title: 'Default pagination:',
          type: 'divider',
          list: [
            {
              text: '«',
              type: 'disabled'
            },
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
            {
              text: '»',
              type: 'disabled'
            }
          ],
          
        },
        {
          title: 'No direction links:',
          type: 'divider',
          list: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '}, 
          ]
        },
        {
          title: 'With boundary links:',
          type: 'divider',
          list: [
            {
              text: '««',
              type: 'disabled'
            },
            {
              text: '«',
              type: 'disabled'
            },
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
            {
              text: '»',
              type: 'disabled'
            },
            {
              text: '»»',
              type: 'disabled'
            }
          ],
        },
        {
          list: null,
          desc: 'Current page: 1'
        }

      ]
    },
    {
      title: 'Advanced',
      children: [
       
      ]
    }
  ]
}
