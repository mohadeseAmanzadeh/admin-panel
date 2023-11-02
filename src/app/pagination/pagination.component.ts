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
          type: 'divider',
          pageList: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
          ],   
        },
        {
          title: 'No direction links:',
          type: 'divider',
          pageList: [
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
          type: '',
          pageList: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
          ],
        },
      ]
    },
    {
      title: 'Advanced',
      children: [
        {
          title: 'Default pagination:',
          type: 'divider',
          pageList: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
          ],   
        },
        {
          title: 'No direction links:',
          type: 'divider',
          pageList: [
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
          type: '',
          pageList: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'},
            {text: '5'},
            {text: '6'},
            {text: '7 '},
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

