import { TestBed } from '@angular/core/testing';

import { DbPostsService } from './db-posts.service';

describe('DbPostsService', () => {
  let service: DbPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
