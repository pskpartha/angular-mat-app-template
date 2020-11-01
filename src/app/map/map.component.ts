import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  showFiller = false;
  hidden = false;
  showObList = false;
  constructor(private activatedRoute: ActivatedRoute) {}

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
}
