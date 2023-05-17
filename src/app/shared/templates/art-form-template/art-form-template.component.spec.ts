import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ArtFormTemplateComponent } from './art-form-template.component';

describe('ArtFormTemplateComponent', () => {
  let component: ArtFormTemplateComponent;
  let fixture: ComponentFixture<ArtFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ ArtFormTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
