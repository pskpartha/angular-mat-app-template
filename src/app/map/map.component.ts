import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';
import * as annotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  showFiller = false;
  hidden = false;
  showObList = false;

  max = 10;
  min = 4;
  cvalue: number;
  sChart: Chart;

  constructor(private activatedRoute: ActivatedRoute) {}
  data = [
    {
      x: 5,
      y: 4,
    },
    {
      x: 2,
      y: 14,
    },
    {
      x: 4,
      y: 12,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 3,
      y: 4,
    },
    {
      x: 3,
      y: 5,
    },
    {
      x: 3,
      y: 8,
    },
    {
      x: 6,
      y: 12,
    },
  ];
  annotations = [
    {
      id: '1',
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-1',
      value: '6',
      borderColor: 'tomato',
      borderWidth: 3,
    },
    {
      id: '2',
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-1',
      value: '12',
      borderColor: 'blue',
      borderWidth: 3,
    },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['type']);
      let aoiid = params['aoiid'];
      console.log(`${aoiid}`);

      if (aoiid) {
        this.showObList = true;
      }
    });
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngAfterViewInit() {
    var canvas: any = document.getElementById('barChart');
    var ctx = canvas.getContext('2d');

    // var data = {
    //   datasets: this.data,
    //   // labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    //   // datasets: [
    //   //   {
    //   //     label: 'My Second dataset',
    //   //     fillColor: 'rgba(0,191,255,0.5)',
    //   //     strokeColor: 'rgba(0,191,255,0.8)',
    //   //     highlightFill: 'rgba(100,149,237,0.75)',
    //   //     highlightStroke: 'rgba(100,149,237,1)',
    //   //     data: [60, 50, 40, 30, 20, 10, 20],
    //   //     borderColor: 'grey',
    //   //     borderWidth: 1,
    //   //   },
    //   // ],
    // };

    var options = {
      legend: {
        display: true,
      },
      tooltips: {
        enabled: false,
      },
      scales: {
        xAxes: [
          {
            // display: true,
            // ticks: {
            //   beginAtZero: true,
            // },
          },
        ],
        yAxes: [
          {
            // display: true,
            // ticks: {
            //   beginAtZero: true,
            // },
          },
        ],
      },
      annotation: {
        annotations: this.annotations,
        drawTime: 'afterDatasetsDraw', // (default)
      },
    };

    // Chart declaration:
    this.sChart = new Chart(ctx, {
      plugins: [annotation],
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'My First dataset',
            data: this.data,
          },
        ],
      },
      options: options,
    });

    this.sChart.update();
    console.log(this.sChart.config.data.datasets[0]);
  }

  getCurrentValue(value: string, id) {
    console.log(value, id);
    // this.annotations.find((item) => item.id == id).value = value.toString();
    this.sChart.annotation.elements[id].options.value = value;

    console.log(this.sChart.annotation.elements[id].options.value);

    this.sChart.update();
  }
}
