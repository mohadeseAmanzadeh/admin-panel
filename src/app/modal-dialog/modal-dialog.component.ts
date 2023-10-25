import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  providers: [ModalService]
})
export class ModalDialogComponent {
  constructor( private modalService: ModalService) {
    
  }
}
