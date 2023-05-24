import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageService } from 'src/app/shared/services/landing-page/landing-page.service';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate the button component for the content', () => {
    let lpService = fixture.debugElement.injector.get(LandingPageService);
    expect(component.getStartedBtn).not.toBe({label:""});
    expect(component.getUploadICTBtn).not.toBe({label:""});
    expect(component.getStartedBtn.label).toEqual(lpService.getLpGetStrBtn().label);
    expect(component.getUploadICTBtn.label).toEqual(lpService.getLpUplBtn().label);
  });

  it('should initiate the lpButtonHeader for the content', () => {
    let lpService = fixture.debugElement.injector.get(LandingPageService);
    expect(component.lpButtonHeader).not.toBe("");
    expect(component.lpButtonHeader).toBe(lpService.getLpButtonData().buttonHeader);
  });
});

describe('LandingPageComponent layout', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the button component', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('art-button').textContent).toBeDefined();
  });

  it('should display the Sample Procurement Language  content', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[art-generic-text-layout="background-color"]')?.textContent).toBeDefined();
  });
});
