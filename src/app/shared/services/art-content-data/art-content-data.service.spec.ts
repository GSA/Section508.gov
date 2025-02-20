import { TestBed } from '@angular/core/testing';

import { ArtContentDataService } from './art-content-data.service';

describe('ArtContentDataService', () => {
  let service: ArtContentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtContentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
