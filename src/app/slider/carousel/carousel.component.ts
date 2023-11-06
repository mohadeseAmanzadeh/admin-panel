import { Component } from '@angular/core';
import { elements } from 'chart.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  heading = 'Carousels & Slideshows';
  subHeading = 'Create easy and beautiful slideshows with these Vue components.';
  icon = 'pe-7s-album bg-sunny-morning'

 public slides = [
    {
      id: 0,
      img: '/assets/images/flower.jpg',
      title: 'First slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      id: 1,
      img: '/assets/images/p.jpg',
      title: 'Second slide label',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      img: '/assets/images/car.jpg',
      title: 'Third slide label',
      desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ]
 
}
