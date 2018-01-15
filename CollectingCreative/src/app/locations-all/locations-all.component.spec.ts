import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAllComponent } from './locations-all.component';

describe('LocationsAllComponent', () => {
  let component: LocationsAllComponent;
  let fixture: ComponentFixture<LocationsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
