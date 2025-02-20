import { RadiobuttonGroupComponent } from './art-radiobutton-group.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser'

describe('RadiobuttonGroupComponent', () => {
  let component: RadiobuttonGroupComponent;
  let fixture: ComponentFixture<RadiobuttonGroupComponent>;
  let formData =  { 
    elementType:"radioButtonGroup",
    label: "",
    title: "What is the color of your component?",
    placeholder:"",
    description: "",
    errorMessages: {"required":"Select one option."},
    controlName: "ictItemRadioButtonGroup1",
    validations: ["required"],
    next:"",
    formSection: "",
    value: "red",
    options: [
                {elementType:"radioButton",label:"Red",value:"red", controlName:"optColor", validations:[],next:"",formSection:""},
                {elementType:"radioButton",label:"Green",value:"green",controlName:"optColor", validations:[],next:"",formSection:""},
                {elementType:"radioButton",label:"Blue",value:"blue",controlName:"optColor", validations:[],next:"",formSection:""}
            ]
  }; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiobuttonGroupComponent ],
      imports:[BrowserModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiobuttonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count the total items as 3', () => {
    component.formData = formData;
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.usa-radio__input').length).toEqual(3);
  });

  //TODO: Test for default selection

  //TODO: Test for click event
});