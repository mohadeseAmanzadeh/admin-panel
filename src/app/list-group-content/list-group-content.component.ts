import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group-content',
  templateUrl: './list-group-content.component.html',
  styleUrls: ['./list-group-content.component.scss']
})
export class ListGroupContentComponent implements OnInit {
  
  @Input() listGroup:any;
  ngOnInit(): void {
    console.log('listGrouplistGroup', this.listGroup);
  }
}
