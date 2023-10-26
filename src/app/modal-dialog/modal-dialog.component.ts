import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {

  constructor(
    public modalService: ModalService
  ) {
    
  }

  closeDialog() {
    this.modalService.closeModal();
  }
}
