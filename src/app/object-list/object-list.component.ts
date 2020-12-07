import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ChartComponent } from '../_shared/chart/chart.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['type']);
      let aoiid = params['aoiid'];
      console.log(`${aoiid}`);
    });
  }

  openDialog(): void {
    this.apiService.getAmplitudePlot().subscribe((res: any) => {
      console.log(res);
      const dialogRef = this.dialog.open(ChartComponent, {
        data: { chartData: res.data },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        console.log(result);
      });
    });
  }
}
