import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [provideRouter([])],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'ART'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Accessibility Requirements Tool (ART)');
    });

    it('shows the introduction on the landing page and the note only during the review', () => {
        const router = TestBed.inject(Router);
        let route = '/';
        vi.spyOn(router, 'url', 'get').mockImplementation(() => route);
        const renderAt = (url: string): string => {
            route = url;
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const textContent = fixture.nativeElement.textContent;
            fixture.destroy();
            return textContent;
        };

        let textContent = renderAt('/');
        expect(textContent).toContain('Through a guided process');
        expect(textContent).not.toContain('Note');

        for (const reviewRoute of ['/ict-listing-page', '/form-page', '/summary-page']) {
            textContent = renderAt(reviewRoute);
            expect(textContent).not.toContain('Through a guided process');
            expect(textContent).toContain('Note');
        }
    });
});
