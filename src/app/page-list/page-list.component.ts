import { Component, Input, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit{
  @Input() items: any = []
  @Input() type: number = 0;
  public last: any =  {
    text: '',
    active: false,
    id: 1
  };
  public first: any =  {
    text: '',
    active: false,
    id: 1
  };

  public itemShow: any = [];

  currentPage: number = 1;

  ngOnInit(): void {
    console.log('items' , this.items);
    // this.items.forEach((value:any, key:number) => {
    //   this.last = value; 
    // });
    this.init();
    this.last = this.items[ this.items.length - 1 ];
    this.first = this.items[0];
  }

  init(id = 0) {
    if(this.type != 4) {
      this.itemShow = this.items;
      return;
    }
    for (let index = id; index < id + 3; index++) {
      this.itemShow.push(this.items[index + 1]) 
      
    }
  }

  addActive(item: any) {
    // console.log('here');
    
    this.currentPage = item.id;
    this.items.forEach((value:any, key:number)=>{
      value.active = ( item.id == value.id);
    });
  }

  goToNext() {
    if(this.type != 4 ){
      const isLastPage = this.currentPage === this.items.length;
      const newPage = isLastPage ? 1 : this.currentPage + 1;
      this.currentPage = newPage;
      this.items.forEach((value:any, key:number)=>{
          value.active = ( this.currentPage == value.id);
        });
    }else{
      const isLastPage = this.currentPage === this.items.length;
      const newPage = isLastPage ? 1 : this.currentPage + 1;
      this.currentPage = newPage;
      this.items.forEach((value:any, key:number)=>{
        value.active = ( this.currentPage == value.id);
      }); 
      if(this.itemShow[this.itemShow.length - 1].active == true && this.currentPage - this.last.id > 1) {
        this.init(this.currentPage); 
      }else if(this.itemShow[0].active == true && this.currentPage - this.first.id > 1) {
        this.init(this.currentPage - 2)
      }   
    }
  }

  goToPrevious() {

    if(this.type != 4) {
      const isFirstPage = this.currentPage === 1;
      const newIndex = isFirstPage ? this.items.length : this.currentPage - 1;
      this.currentPage = newIndex;
      this.items.forEach((value:any, key:number)=>{
        value.active = ( this.currentPage == value.id);
      }); 
    }else {
      const isFirstPage = this.currentPage === 1;
      const newIndex = isFirstPage ? this.items.length : this.currentPage - 1;
      this.currentPage = newIndex;
      this.items.forEach((value:any, key:number)=>{
        value.active = ( this.currentPage == value.id);
      }); 
      if(this.itemShow[this.itemShow.length - 1].active == true && - this.last.id > 1) {
        this.init(this.currentPage);
      }else if(this.itemShow[0].active == true && - this.first.id > 1) {
        this.init(this.currentPage - 2)
      }
    }
  }


  goToLastPage() {
    this.currentPage = this.items.length ;
    this.items.forEach((value:any, key:number)=>{
      value.active = ( this.currentPage == value.id);
    }); 
  }
 
  goToFirstPage() {
    this.currentPage = 1;
    this.items.forEach((value:any, key:number)=>{
      value.active = ( this.currentPage == value.id);
    }); 
  }
}

