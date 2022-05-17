import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGithubProfileComponent } from './app-github-profile.component';

describe('AppGithubProfileComponent', () => {
  let component: AppGithubProfileComponent;
  let fixture: ComponentFixture<AppGithubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGithubProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
