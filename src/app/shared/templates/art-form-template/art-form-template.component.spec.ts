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


    const formConfig = [
      {
        clearForm: true,
        disable:false,
        formButtons: 
        {
          submit: 'Get 508 Results'},
          formElements: [
            {
              controlName: "sol-type",
              description: "",
              elementType: "radioButtonGroup",
              errorMessages: {required: 'Select one option.'},
              formSection: "Solicitation Phase",
              hidden: false,
              label: "Select one of the options below",
              next: "",
              options: [
                {
                  controlName: "proj-plan-1682517821075-0",
                  description: "I want to identify the applicable Section 508 standards I need to address during project planning",
                  elementType: "radioButton",
                  formSection: "",
                  label: "Project Planning",
                  next: "ict-group",
                  validations: [],
                  value: "red"
                },
                {
                  controlName: "mark-research-1682517821075-0",
                  description: "I want to obtain product documentation and/or capability statements to determine the availability of accessible products and services using a Request for information (RFI).",
                  elementType: "radioButton",
                  formSection: "",
                  label: "Market Research",
                  next: "ict-mark-research-group",
                  validations: [],
                  value: "green"

                },
                {
                  controlName: "solic-dev-1682517821075-0",
                  description: "I want to obtain Section 508 requirements to include in my statement of work",
                  elementType: "radioButton",
                  formSection: "",
                  label: "Solicitation Development",
                  next: "ict-group",
                  validations: [],
                  value: "red"

                }
              ], 
              placeholder: "",
              title: "",
              validations: [null],
              value: ""
            }
          ],
          id:0
      }
    ]
    fixture = TestBed.createComponent(ArtFormTemplateComponent);
    component = fixture.componentInstance;
    component.formConfig = formConfig;
    component.scanChange = true,
    component.pageIndex = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
