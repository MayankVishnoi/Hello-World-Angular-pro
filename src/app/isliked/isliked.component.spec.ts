import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslikedComponent } from './isliked.component';

describe('IslikedComponent', () => {
  let component: IslikedComponent;
  let fixture: ComponentFixture<IslikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslikedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
