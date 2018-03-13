import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancesAllComponent } from './appearances-all.component';

describe('AppearancesAllComponent', () => {
  let component: AppearancesAllComponent;
  let fixture: ComponentFixture<AppearancesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearancesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearancesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
