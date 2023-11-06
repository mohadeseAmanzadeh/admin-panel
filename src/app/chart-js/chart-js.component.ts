import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJSComponent implements OnInit {
  heading = 'ChartJS'; 
  subHeading = 'Huge selection of charts created with the Vue ChartJS Plugin';
  icon = 'pe-7s-bandaid bg-amy-crisp'

  ngOnInit(): void {

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const acquisitionsElement: any = document.getElementById('acquisitions');
    if(acquisitionsElement) {
      new Chart(
        acquisitionsElement,
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
    }
  }


}
