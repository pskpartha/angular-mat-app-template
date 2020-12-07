import { Component, OnInit, Inject } from '@angular/core';
import * as Chart from 'chart.js';
import { ApiService } from 'src/app/_services/api.service';
import * as annotation from 'chartjs-plugin-annotation';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  max = 1.5;
  min = -1.5;
  cvalue: number;
  sChart: Chart;
  // Define the data
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
  ]; // Add data values to array

  chartDataSet: any;

  constructor(
    public dialogRef: MatDialogRef<ChartComponent>,
    @Inject(MAT_DIALOG_DATA) public cdata: any,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    //   this.apiService.getAmplitudePlot().subscribe((res: any) => {
    //     console.log(res);
    //     this.chartDataSet = res.data.datasets;
    //     console.log(this.chartDataSet);
    //   });
    // }
    console.log(this.cdata);
  }
  ngAfterViewInit() {
    // End Defining data

    this.showChart();
  }

  showChart() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var options = {
      responsive: false, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'year',
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: -1.0,
              max: 1.5,
            },
          },
        ],
      },
      annotation: {
        annotations: [
          {
            id: '1',
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-1',
            value: '1',
            borderColor: '#1f77b4',
            borderWidth: 1,
          },
          {
            id: '2',
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-1',
            value: '1',
            borderColor: '#ff7f0e',
            borderWidth: 1,
          },
        ],
        drawTime: 'afterDatasetsDraw', // (default)
      },
    };

    this.sChart = new Chart(this.ctx, {
      plugins: [annotation],
      type: 'scatter',
      data: {
        // datasets: this.cdata.chartData.datasets,
        datasets: this.cdata.chartData.datasets,
      },
      options: options,
    });
    setTimeout(() => {
      this.colorerChart();
    }, 100);
  }

  colorerChart() {
    this.sChart.config.data.datasets[0].backgroundColor = '#1f77b4';
    this.sChart.config.data.datasets[0].borderColor = '#1f77b4';
    this.sChart.config.data.datasets[1].borderColor = '#ff7f0e';
    this.sChart.config.data.datasets[1].backgroundColor = '#ff7f0e';

    console.log('config', this.sChart.config.data.datasets[0]);

    this.sChart.update();
  }

  getCurrentValue(value: string, id) {
    console.log(value, id);
    // this.annotations.find((item) => item.id == id).value = value.toString();
    this.sChart.annotation.elements[id].options.value = value;

    console.log(this.sChart.annotation.elements[id].options.value);

    this.sChart.update();
  }
}

// datasets: [
//   {
//     label: 'Population', // Name the series
//     data: this.data, // Specify the data values array
//     borderColor: '#2196f3', // Add custom color border
//     backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
//   },
// ],
