import { TestBed } from '@angular/core/testing';

import { PerformMucsicService } from './perform-mucsic.service';

describe('PerformMucsicService', () => {
  let service: PerformMucsicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformMucsicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
