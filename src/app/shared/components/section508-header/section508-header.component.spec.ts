import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section508HeaderComponent } from './section508-header.component';

describe('Section508HeaderComponent', () => {
  let component: Section508HeaderComponent;
  let fixture: ComponentFixture<Section508HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section508HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section508HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
