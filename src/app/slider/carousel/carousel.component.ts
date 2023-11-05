import { Component } from '@angular/core';
import { elements } from 'chart.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

 public slides = [
    {
      id: 1,
      img: '/assets/images/flower.jpg',
      title: 'First slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      id: 2,
      img: '/assets/images/p.jpg',
      title: 'Second slide label',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      img: '/assets/images/car.jpg',
      title: 'Third slide label',
      desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ]
 
}
