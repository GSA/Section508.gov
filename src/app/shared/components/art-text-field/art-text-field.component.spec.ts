import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { FormElement } from '../../models/form-element.interface';

import { ArtTextFieldComponent, ErrorText } from './art-text-field.component';

describe('ArtTextFieldComponent', () => {
  let component: ArtTextFieldComponent;
  let fixture: ComponentFixture<ArtTextFieldComponent>;
  const data:FormElement = { 
    "elementType":"text",
    "label": "First: Please list Items or deliverables that contain ICT. You may add more than one ICT item. You may also use one name for multiple ICT Items providing an overall solution (for example: Security Equipment).",
    "title": "",
    "description": "",
    "errorMessages": {"maxlength":"The maximum length has exceeded 25"},
    "controlName": "ictItemTextfield1",
    "validations": [ "required", "maxLength(25)"],
    "next":"",
    "formSection": "What is the name of your procurement?",
    "value": "Form 1 1",
    "options": []
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtTextFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtTextFieldComponent);
    const tempControl = new FormControl('controlname controlname controlname',[Validators.maxLength(25)]);
    component = fixture.componentInstance;
    component.formData = data;
    component.control = tempControl;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const labelContent = compiled.querySelector('label').textContent;
    expect(data.label).toContain(labelContent);
  });

  it('should display the input field', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const inputField = compiled.querySelectorAll('input');
    expect(inputField.length).toBe(1);
  });

  it('should run error validation', () => {
    spyOn(component,'displayError');
    fixture.detectChanges();
    expect(component.displayError).toHaveBeenCalled();
  });

  it('shouldn\'t display error validation', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.control?.setValue("test");
    fixture.detectChanges();
    const errorMessage = compiled.querySelectorAll('span');
    expect(errorMessage.length).toBe(0);
  });

  it('should display error validation', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const errorMessage = compiled.querySelector('span').textContent;
    expect(component.displayError()).toBe(data.errorMessages[ErrorText.maxlength]);
    expect(errorMessage).toBe(data.errorMessages[ErrorText.maxlength]);
  });
});
