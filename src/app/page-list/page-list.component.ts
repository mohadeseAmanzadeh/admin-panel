import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit{
  @Input() items: any = []

  // public last: any = {};
  // public first: any = {};



  ngOnInit(): void {
    console.log('items' , this.items);
    // this.items.forEach((value:any, key:number) => {
    //   this.last = value; 
    // });
  }

  addActive(item: any) {
    console.log('here');
    
    this.items.forEach((value:any, key:number)=>{
      value.active = ( item.id == value.id);
    });
  }

  currentPage: number = 1;
  goToNext() {
      const isLastPage = this.currentPage === this.items.length;
      const newPage = isLastPage ? 1 : this.currentPage + 1;
      this.currentPage = newPage 
      this.items.forEach((value:any, key:number)=>{
        value.active = ( this.currentPage == value.id);
      });
  }

  goToPrevious() {
    const isFirstPage = this.currentPage === 1;
    const newIndex = isFirstPage ? this.items.length : this.currentPage - 1;
    this.currentPage = newIndex;
    this.items.forEach((value:any, key:number)=>{
      value.active = ( this.currentPage == value.id);
    }); 
  }


  goToLastPage() {
    this.currentPage = this.items.length 
    console.log('length' , length)
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




