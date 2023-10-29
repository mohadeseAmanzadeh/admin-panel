import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent {

  constructor(
    public modalService: ModalService
  ) {
    
  }

  public cardList = [
    {
      children: [
        {
          title: 'Basic',
          desc: 'Dismissed with: Cross click',
          className: 'divider',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary',
          },
          modalData: {
            id: 1,
            className: 'modal-dialog',
            title: 'Scrollable fixed content',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            saveButton: {
              title: 'Save changes',
              className: 'btn-primary btn'
            },
            CloseButton: {
              title: 'close',
              className: 'btn-secondary btn mr-2'
            } 
          }
        },
        {
          title: 'Scrollable Fixed Content',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary'
          },
          modalData: {
            id: 2,
            className: 'modal-dialog',
            title: 'Scrollable fixed content',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            saveButton: {
              title: 'Save changes',
              className: 'btn-primary'
            },
            CloseButton: {
              title: 'close',
              className: 'btn-secondary mr-2'
            } 
          },
        },
        {
          title: 'Long Content',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-primary'
          },
          modalData: {
            id: 3,
            className: 'modal-dialog',
            title: 'Scrollable fixed content',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            descTwo:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            descThree:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            saveButton: {
              title: 'Save changes',
              className: 'btn-primary'
            },
            CloseButton: {
              title: 'close',
              className: 'btn-secondary mr-2'
            } 
          },
        }
      ]
    },
    {
      children: [
        {
          title: 'Large Modal',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-success'
          },
          modalData: {
            id: 4,
            className: 'modal-lg modal-dialog',
            title: 'Modal title',
            desc: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            saveButton: {
              title: 'Save changes',
              className: 'btn-primary'
            },
            CloseButton: {
              title: 'close',
              className: 'btn-secondary mr-2'
            } 
          },
        },
        {
          title: 'Small Modal',
          buutons: {
            title: 'Launch demo modal',
            className: 'btn-success'
          },
          modalData: {
            id: 5,
            className: 'modal-sm modal-dialog',
            title: 'Modal title',
            desc: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            saveButton: {
              title: 'Save changes',
              className: 'btn-primary'
            },
            CloseButton: {
              title: 'close',
              className: 'btn-secondary mr-2'
            } 
          }
        }
      ]
    }
  ];



  showDialog(child: any) {
    console.log('child', child);
    this.modalService.openModal(child.modalData);
  }
}
