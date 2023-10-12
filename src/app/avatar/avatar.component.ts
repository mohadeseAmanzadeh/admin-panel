import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() className : string = '';
  @Input() item : any = {}
  // public imgAvatar = [
  //   {
  //     id: 1,
  //     img: "/assets/images/1.jpg"
  //   },
  //   {
  //     id: 2,
  //     img: "/assets/images/2 (1).jpg"
  //   },
  //   {
  //     id: 3,
  //     img: "/assets/images/3.jpg"
  //   },
  //   {
  //     id: 4,
  //     img: "/assets/images/4.jpg"
  //   }
  // ] 

}
