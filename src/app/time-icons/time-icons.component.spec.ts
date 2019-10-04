import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIconsComponent } from './time-icons.component';

describe('TimeIconsComponent', () => {
  let component: TimeIconsComponent;
  let fixture: ComponentFixture<TimeIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
