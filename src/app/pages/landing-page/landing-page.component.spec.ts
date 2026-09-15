import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingPageService, NextPage } from 'src/app/shared/services/landing-page/landing-page.service';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let service: LandingPageService;
  let router: jasmine.SpyObj<Router>;
  let consoleWarn: jasmine.Spy;

  beforeEach(async () => {
    consoleWarn = spyOn(console, 'warn').and.callThrough();
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
    fixture = TestBed.createComponent(LandingPageComponent);
    service = TestBed.inject(LandingPageService);
    fixture.detectChanges();
  });

  it('starts a new review using the existing workflow', () => {
    fixture.nativeElement.querySelectorAll('.review-card button')[0].click();
    expect(service.getNextPage()).toBe(NextPage.getStarted);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/ict-listing-page');
  });

  it('loads a saved review from the combined continue, view, or export card', () => {
    fixture.nativeElement.querySelectorAll('.review-card button')[1].click();
    expect(service.getNextPage()).toBe(NextPage.uploadICT);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/ict-listing-page');
  });

  it('renders the video thumbnail without HTML sanitization warnings', () => {
    expect(fixture.nativeElement.querySelector('.training img').classList).toContain('width-full');
    const warnings = consoleWarn.calls.allArgs().flat().join(' ');
    expect(warnings).not.toContain('sanitizing HTML stripped');
  });

  it('links to SRT and retains the training video', () => {
    expect(fixture.nativeElement.querySelector('.srt-footer .usa-button').href).toBe('https://srt.app.cloud.gov/');
    expect(fixture.nativeElement.querySelector('.training img')).toBeTruthy();
  });
});
