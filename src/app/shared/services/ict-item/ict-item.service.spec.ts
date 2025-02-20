import { TestBed } from '@angular/core/testing';

import { IctItemService } from './ict-item.service';

describe('IctItemService', () => {
  let service: IctItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IctItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
