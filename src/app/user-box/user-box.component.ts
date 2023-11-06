import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent {

  @Input() activeMenu: boolean;
  showMenu() {
    this.activeMenu = !this.activeMenu
  }
}
