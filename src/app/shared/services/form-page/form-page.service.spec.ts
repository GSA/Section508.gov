import { TestBed } from '@angular/core/testing';

import { FormPageService } from './form-page.service';

describe('FormPageService', () => {
  let service: FormPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
