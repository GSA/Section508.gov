import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGenericTextComponent } from './art-generic-text.component';

describe('ArtGenericTextComponent', () => {
  let component: ArtGenericTextComponent;
  let fixture: ComponentFixture<ArtGenericTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtGenericTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtGenericTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title if set up', () => {
    component.title = "My test title";
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector(".art-agt-title").textContent).toContain(component.title);
  });

  xit('should display the ngContent directive', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll("ng-content").length).toBe(1);
  });


});
