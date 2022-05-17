import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshgitComponent } from './moshgit.component';

describe('MoshgitComponent', () => {
  let component: MoshgitComponent;
  let fixture: ComponentFixture<MoshgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoshgitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
