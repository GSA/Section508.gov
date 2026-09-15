import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
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
    const url = spyOnProperty(router, 'url', 'get').and.returnValue('/');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Through a guided process');
    expect(fixture.nativeElement.textContent).not.toContain('Note:');

    for (const route of ['/ict-listing-page', '/form-page', '/summary-page']) {
      url.and.returnValue(route);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).not.toContain('Through a guided process');
      expect(fixture.nativeElement.textContent).toContain('Note:');
    }

    url.and.returnValue('/');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Through a guided process');
    expect(fixture.nativeElement.textContent).not.toContain('Note:');
  });
});
