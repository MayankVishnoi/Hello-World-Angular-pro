import { TestBed } from '@angular/core/testing';

import { MoshgitService } from './moshgit.service';

describe('MoshgitService', () => {
  let service: MoshgitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoshgitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
