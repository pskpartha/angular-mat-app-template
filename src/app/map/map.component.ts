import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  showFiller = false;
  constructor() {}

  ngOnInit(): void {}
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
