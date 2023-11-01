import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  
  @Input() items: any = [];
  @Input() type: string = '';

  ngOnInit(): void {
    
  }


  changeView(item : any) {
   if(item.disabled) {
    return;
   }
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
