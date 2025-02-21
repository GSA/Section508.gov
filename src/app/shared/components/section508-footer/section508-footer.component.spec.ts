import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section508FooterComponent } from './section508-footer.component';

describe('Section508FooterComponent', () => {
  let component: Section508FooterComponent;
  let fixture: ComponentFixture<Section508FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section508FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section508FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
