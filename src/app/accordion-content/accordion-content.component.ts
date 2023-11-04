import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent implements OnInit{

  @Input() items: any = {};
  @Input() type: number| undefined = 1;
  // @Input() typeChild: number = 0;

  ngOnInit(): void {
    
  }

  changeView(item : any) {
    if(item.disabled) {
      return;
    }

    if( item.type ) {
      if( item.type == 1 ) {
        item.active = !item.active;
      }
    }else{
      if( this.type == 1 ) {
        item.active = !item.active;
      }
    }
  
    if(item.type ) {
      if( item.type == 2) {
        this.items.forEach((value:any, key:number) => {
          // value.active = (item.id == value.id); 
          if(item.id == value.id) {
            value.active = !value.active
          } else {
            value.active = false
          }
        })
      }
      // this.items.forEach((value:any, key:number) => {
      //   // value.active = (item.id == value.id); 
      //   if(item.id == value.id) {
      //     value.active = !value.active
      //   } else {
      //     value.active = false
      //   }
      // })
    } else{
    if (this.type == 2) {
      this.items.forEach((value:any, key:number) => {
        // value.active = (item.id == value.id); 
        if(item.id == value.id) {
          value.active = !value.active
        } else {
          value.active = false
        }
      }) 
    }
  }

    if(item.type) {  
      if(item.type == 3) {
        item.active = !item.active;

      }
    }
  }
}
