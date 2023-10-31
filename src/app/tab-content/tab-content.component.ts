import { Component, Input, OnInit } from '@angular/core';

//  interface type {

//   justified: "",
//   bordered: '',
//   primary: ''

// }
@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  
  @Input() items: any = [];
  @Input() type: string = '';

  ngOnInit(): void {
    console.log(this.type, 'type');
    
  }


  changeView(item : any) {
   if(item.disabled) {
    return;
   }
    console.log('item', item);
    console.log('itemsitemsitems', this.items);
    this.items.forEach((value:any, key:number)=>{
      value.active = ( item.id == value.id);
    });
  }

//   getClass(type: any){
//     // calculation 
//     return type.item
//  }
}
