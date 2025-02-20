import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopComponent } from './back-to-top.component';

describe('BackToTopComponent', () => {
  let component: BackToTopComponent;
  let fixture: ComponentFixture<BackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Appear on the page.
  it("should display the Back to Top button", function () {
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let addItemDebugElement = compiled.querySelector('#backtotop');
    expect(addItemDebugElement).toBeTruthy();
  });

});
