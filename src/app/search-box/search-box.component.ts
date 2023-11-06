import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  active: boolean = false;

  open() {
    this.active = !this.active
  }

  close(event:any) {
    console.log(event, 'event');
    this.active = !this.active
  }
}
