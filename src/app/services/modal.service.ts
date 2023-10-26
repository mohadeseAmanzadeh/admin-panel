import { Injectable } from '@angular/core';

export interface ModalData {
  title: string;
  desc: string;
  isOpen: boolean;
  saveButton: {};
  CloseButton: {}
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData: ModalData = {
    title: '',
    desc: '',
    isOpen: false,
    saveButton: {},
    CloseButton: {}
  };

  openModal(modalData: ModalData) {
    this.modalData = modalData;
    this.modalData.isOpen = true;
    console.log('this.modalData', this.modalData);
  }

  closeModal() {
    this.modalData.isOpen = false;
  }

  // modals = [
    
  //   {
  //     id: 2,
  //     title: 'Scrollable fixed content',
  //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     saveButton: {
  //       title: 'Save changes',
  //       type: 'btn-primary'
  //     },
  //     CloseButton: {
  //       title: 'close',
  //       type: 'btn-secondary'
  //     } 
  //   },
  //   {
  //     id: 3,
  //     title: 'Scrollable fixed content',
  //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     saveButton: {
  //       title: 'Save changes',
  //       type: 'btn-primary'
  //     },
  //     CloseButton: {
  //       title: 'close',
  //       type: 'btn-secondary'
  //     } 
  //   },
  //   {
  //     id: 4,
  //     className: 'modal-lg',
  //     title: 'Modal title',
  //     desc: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
  //     saveButton: {
  //       title: 'Save changes',
  //       type: 'btn-primary'
  //     },
  //     CloseButton: {
  //       title: 'close',
  //       type: 'btn-secondary'
  //     } 
  //   },
  //   {
  //     id: 5,
  //     className: 'modal-sm',
  //     title: 'Modal title',
  //     desc: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
  //     saveButton: {
  //       title: 'Save changes',
  //       type: 'btn-primary'
  //     },
  //     CloseButton: {
  //       title: 'close',
  //       type: 'btn-secondary'
  //     } 
  //   }
  // ]
  constructor() { }
}
