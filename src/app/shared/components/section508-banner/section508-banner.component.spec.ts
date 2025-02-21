import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section508BannerComponent } from './section508-banner.component';

describe('Section508BannerComponent', () => {
  let component: Section508BannerComponent;
  let fixture: ComponentFixture<Section508BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section508BannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section508BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
