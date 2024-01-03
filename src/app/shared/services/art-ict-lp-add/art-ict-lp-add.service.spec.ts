import { TestBed } from '@angular/core/testing';

import { ArtIctLpAddService } from './art-ict-lp-add.service';

describe('ArtIctLpAddService', () => {
    let service: ArtIctLpAddService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ArtIctLpAddService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});