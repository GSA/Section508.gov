import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtIctLpService } from 'src/app/shared/services/art-ict-lp/art-ict-lp.service';

import { IctListingPageComponent } from './ict-listing-page.component';

describe('IctListingPageComponent', () => {
  let component: IctListingPageComponent;
  let fixture: ComponentFixture<IctListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IctListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should initiate the lpUploadButtonDesc for the content', () => {
    let lpService = fixture.debugElement.injector.get(ArtIctLpService);
  });

  xit('should not display the upload button on page load', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#art-upload-button-container[hidden]').textContent).toBeDefined();
  });

  xit('should display the upload button when uploadDisplayed is true', () => {
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#art-upload-button-container[hidden]')?.textContent).not.toBeDefined();
    expect(compiled.querySelector('art-file-upload').textContent).toBeDefined();
  });

  xit('should display the click here link', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#art-click-here').textContent).toContain("click here");
  });
});
