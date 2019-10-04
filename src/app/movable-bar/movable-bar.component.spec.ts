import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableBarComponent } from './movable-bar.component';

describe('MovableBarComponent', () => {
  let component: MovableBarComponent;
  let fixture: ComponentFixture<MovableBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovableBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
