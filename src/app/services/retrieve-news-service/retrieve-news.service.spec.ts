import { TestBed } from '@angular/core/testing';

import { RetrieveNewsService } from './retrieve-news.service';

describe('RetrieveNewsService', () => {
  let service: RetrieveNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
