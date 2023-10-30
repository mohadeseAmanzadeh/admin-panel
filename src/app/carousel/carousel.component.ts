import { Component } from '@angular/core';

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
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      id: 2,
      img: '/assets/images/p.jpg',
      // title: 'Second slide label',
      // desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      img: '/assets/images/car.jpg',
      // title: 'Third slide label',
      // desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ]




  
  currentIndex: number = 0;


  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
  
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }
}
