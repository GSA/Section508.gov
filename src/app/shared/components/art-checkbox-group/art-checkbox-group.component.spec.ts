import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCheckboxGroupComponent } from './art-checkbox-group.component';
import {FormElement} from "../../models/form-element.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

describe('ArtCheckboxGroupComponent', () => {
  let component: ArtCheckboxGroupComponent;
  let fixture: ComponentFixture<ArtCheckboxGroupComponent>;
  const data:FormElement = {
    "elementType": "checkboxGroup",
    "label": "Select any of the options below",
    "title": "Select any of the options below",
    "placeholder": "",
    "description": "",
    "errorMessages": {
      "maxlength": "Select at leas one option"
    },
    "controlName": "ictItemcheckboxGroup1",
    "validations": [
      "required"
    ],
    "next": "",
    "formSection": "What is the name of your procurement?",
    "value": "",
    "options": [
      {
        "elementType": "checkbox",
        "label": "Project Planning",
        "title": "Project Planning",
        "placeholder": "",
        "description": "Project Planning description here",
        "errorMessages": {},
        "controlName": "checkbox1",
        "validations": [],
        "next": "",
        "formSection": "What is the name of your procurement?",
        "value": true,
        "options": []
      },
      {
        "elementType": "checkbox",
        "label": "Market research",
        "title": "Market research",
        "placeholder": "",
        "description": "Market research description here",
        "errorMessages": {},
        "controlName": "checkbox2",
        "validations": [],
        "next": "",
        "formSection": "What is the name of your procurement?",
        "value": "",
        "options": []
      },
      {
        "elementType": "checkbox",
        "label": "None of the above",
        "title": "None of the above",
        "placeholder": "",
        "description": "",
        "errorMessages": {},
        "controlName": "checkbox3",
        "validations": [],
        "next": "",
        "formSection": "What is the name of your procurement?",
        "value": "",
        "options": [],
        "onlyOption": true
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCheckboxGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCheckboxGroupComponent);
    const tempControl = new FormGroup({});
    tempControl.addControl('formgroup', new FormControl('controlname controlname controlname',[Validators.maxLength(25)]));
    component = fixture.componentInstance;
    component.formData = data;
    component.formGroup = tempControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display the label', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const labelContent = compiled.querySelector('legend').textContent;
    expect(data.label).toContain(labelContent);
  });

  xit('should display the checkbox', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const inputField = compiled.querySelector('#checkbox1');
    expect(inputField.length).not.toBeNull();
  });
});
