import { TestBed } from '@angular/core/testing';

import { Art508LangService } from './art-508-lang.service';

describe('Art508LangService', () => {
  let service: Art508LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Art508LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
