import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
//  @Input() title : string = '';
 @Input() className : string = '';
 @Input() item : any = {};
}
