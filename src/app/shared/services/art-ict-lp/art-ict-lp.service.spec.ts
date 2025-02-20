import { TestBed } from '@angular/core/testing';

import { ArtIctLpService } from './art-ict-lp.service';

describe('ArtIctLpService', () => {
  let service: ArtIctLpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtIctLpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
