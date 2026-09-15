import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingPageService, NextPage } from 'src/app/shared/services/landing-page/landing-page.service';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let service: LandingPageService;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
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

  for (const index of [1, 2]) {
    it(`loads a saved review from card ${index + 1}`, () => {
      fixture.nativeElement.querySelectorAll('.review-card button')[index].click();
      expect(service.getNextPage()).toBe(NextPage.uploadICT);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/ict-listing-page');
    });
  }

  it('links to SRT and retains the training video', () => {
    expect(fixture.nativeElement.querySelector('.srt-footer .usa-button').href).toBe('https://srt.app.cloud.gov/');
    expect(fixture.nativeElement.querySelector('.training img')).toBeTruthy();
  });
});
