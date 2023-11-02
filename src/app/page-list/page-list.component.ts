import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit{
  @Input() items: any = []

  public last: any = {};
  ngOnInit(): void {
    console.log('items' , this.items)
    this.items.forEach((value:any, key:number) => {
      this.last = value
    });
    console.log("last" , this.last)

  }
}
