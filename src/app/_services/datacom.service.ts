import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DatacomService {
  private aoiSource = new BehaviorSubject<any>({ show: false, aoiid: null });
  aoiInfo = this.aoiSource.asObservable();

  constructor() {}

  updateAOIinfo(showS: boolean, id: number): void {
    this.aoiSource.next({ show: showS, aoiid: id });
  }
}
