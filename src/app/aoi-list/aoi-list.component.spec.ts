import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoiListComponent } from './aoi-list.component';

describe('AoiListComponent', () => {
  let component: AoiListComponent;
  let fixture: ComponentFixture<AoiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
