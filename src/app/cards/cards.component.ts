import { Component } from '@angular/core';


  interface cardListInterface {
  
  }

  interface subMenuInterface {
    title?: string;
    desc?: string;
    className?: string;
    buttns?: {};
    subTitle?: string;
    text?: string
    head?: string;
    footer?: string 
  }

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public cardList = [
    {
      subMenu: [
        {
          title: 'Basic Example',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          className: 'main-card mb-3 card',
          buttons: null
        },
        {
          title: 'Card with Subtitle',
          subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
          desc: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni',
          className: 'main-card card mb-3',
          buttons: null
        },
        {
          titleP: 'Special Title Treatment',
          text: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-body mb-3 card',
          buttons: {
            title: 'Go somewhere',
            className: 'btn-primary mt-2 w-100'
          }
        },
        {
          titleP: 'Special Title Treatment',
          text: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card card-body t-center mb-3',
          buttons: {
            title: 'Go somewhere',
            className: 'btn-danger mt-2 w-100'
          }
        },
        {
          titleP: 'Special Title Treatment',
          text: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-right card card-body mb-3',
          buttons: {
            title: 'Go somewhere',
            className: 'btn-outline-focus mt-2 w-100'
          }
        },
      ],
      subCard: [
        {
          head: 'Header',
          title: 'Special Title Treatment',
          text: 'With supporting text below as a natural lead-in to additional content.',
          className: 'main-card mb-3 card',
          buttons: {
            title: 'Go somewhere',
            className: 'btn-warning mt-2'
          },
          footer: 'Footer'
        }
      ]
    },
    {
      subMenu: null,
      subCard: null,
      cards: [
        {
          className: 'main-card card mb-3',
          img: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
          title: 'Card title',
          subTitle: 'Card subtitle',
          desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          button: {
            title: 'Button',
            className: 'btn-secondary'
          }
        },
        {
          className: 'main-card card mb-3',
          image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
          title: 'Card title',
          desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
          text: 'Last updated 3 mins ago'
        }
        
      ]

    },
    {
      cardD: [
        {
          className: 'main-card card mb-3',
          img: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
          title: 'Card title',
          subTitle: 'Card subtitle',
          desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        },
      ],
    }
  ]
  public menuCard = [
    {
      cardList: null,
      children: [
        {
          title: 'Primary Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-primary border mb-3 card card-body border-primary'
        },
        {
          title: 'Secondary Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-secondary border mb-3 card card-body border-seondry'
        },
        {
          title: 'Warning Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-warning border mb-3 card card-body border-warning'
        },
        {
          title: 'Danger Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-danger border mb-3 card card-body border-danger'
        },
        {
          title: 'Success Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-success border mb-3 card card-body border-success'
        },
        {
          title: 'Info Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-info border mb-3 card card-body border-info'
        },
        {
          title: 'Focus Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-focus border mb-3 card card-body border-focus'
        },
        {
          title: 'Alternate Card Shadow',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-shadow-alternate border mb-3 card card-body border-alternate'
        },
      ],
      menu: [
        {
          img: 'https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97270&amp;w=318&amp;h=270&amp;bg=333333&amp;txtclr=666666',
          title: 'Card Title',
          desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ',
          text: 'Last updated 3 mins ago'
        }
      ]
    },
    {
      cardList: null,
      children: [
        {
          title: 'Primary Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-primary'
        },
        {
          title: 'Secondary Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-seondry'
        },
        {
          title: 'Warning Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-warning'
        },
        {
          title: 'Danger Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-danger'
        },
        {
          title: 'Success Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-success'
        },
        {
          title: 'Info Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-info'
        },
        {
          title: 'Focus Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-focus'
        },
        {
          title: 'Alternate Card border',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'card-border mb-3 card card-body border-alternate'
        },
      ],
      menu: null
    },
    {
      cards: [
       {
        title: 'Header',
        desc: 'With supporting text below as a natural lead-in to additional content.',
        text: 'Footer'
       }
      ],
      children: [
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-rgba'
        },
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-primary'
        },
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-success'
        },
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-danger'
        },
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-info'
        },
        {
          title: 'Special Title Treatment',
          desc: 'With supporting text below as a natural lead-in to additional content.',
          className: 'text-white mb-3 card card-body bg-warning'
        }

      ],
      menu: null
    }
  ]
}
