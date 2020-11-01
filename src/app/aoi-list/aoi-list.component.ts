import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
@Component({
  selector: 'app-aoi-list',
  templateUrl: './aoi-list.component.html',
  styleUrls: ['./aoi-list.component.scss'],
})
export class AoiListComponent implements OnInit {
  aoiList: any;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAOIlist().subscribe((data) => {
      this.aoiList = data;
    });
  }

  navigateToObjectList(id): void {
    this.router.navigate(['list', id]);
  }
}
