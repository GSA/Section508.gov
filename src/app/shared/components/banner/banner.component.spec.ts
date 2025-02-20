import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header if set', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.header = "test header";
    fixture.detectChanges();
    expect(compiled.querySelector('#art-banner-header').textContent).toContain(component.header);
  });

  it('should display the title if set', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.title = "test title";
    fixture.detectChanges();
    expect(compiled.querySelector('#art-banner-title').textContent).toContain(component.title);
  });
});
