import { StepIndicatorComponent } from "./step-indicator.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('StepIndicatorComponent', () => {
  let component: StepIndicatorComponent;
  let fixture: ComponentFixture<StepIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.stepsData =  {tabs:[{name: 'Personal Detail', id:'01'},{name: 'Address Detail', id:'02'},{name: 'Educational Detail', id:'03'}, 
    {name: 'Account Detail', id:'04'},{name: 'Family Detail', id:'05'}],activeId:'02'};
    expect(component).toBeTruthy();
  });

  it('shold return 2', ()=>{
    component.tabSelected(2,'03');
    expect(component.currentIndex).toEqual(2);
  })

  it('shold return 04', ()=>{
    component.tabSelected(3,'04');
    expect(component.activeTab).toEqual("04");
  })

  it('should display Address Detail as active tab', () => {
    component.stepsData =  {tabs:[{name: 'Personal Detail', id:'01'},{name: 'Address Detail', id:'02'},{name: 'Educational Detail', id:'03'}, 
    {name: 'Account Detail', id:'04'},{name: 'Family Detail', id:'05'}],activeId:'02'};
    component.ngOnInit();
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.step-indicator-selected')?.textContent).toContain("Address Detail");
  });

  it('should return 5 as total tabs count', () => {
    component.stepsData =  {tabs:[{name: 'Personal Detail', id:'01'},{name: 'Address Detail', id:'02'},{name: 'Educational Detail', id:'03'}, 
    {name: 'Account Detail', id:'04'},{name: 'Family Detail', id:'05'}],activeId:'02'};
    component.ngOnInit();
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.usa-step-indicator__segment').length).toEqual(5);
  });

  it('should emit event when clicked on step indicator button', () => {
    spyOn(component.getSelectedTab, 'emit');
    component.stepsData =  {tabs:[{name: 'Personal Detail', id:'01'},{name: 'Address Detail', id:'02'},{name: 'Educational Detail', id:'03'}, 
    {name: 'Account Detail', id:'04'},{name: 'Family Detail', id:'05'}],activeId:'02'};
    component.ngOnInit();
    fixture.detectChanges();
    //last button
    const button = fixture.nativeElement.querySelectorAll('.usa-step-indicator__segment')[4];
    button.dispatchEvent(new Event('click'));
    expect(component.getSelectedTab.emit).toHaveBeenCalledWith(4);
    //3rd button
    const nextButton = fixture.nativeElement.querySelectorAll('.usa-step-indicator__segment')[2];
    nextButton.dispatchEvent(new Event('click'));
    expect(component.getSelectedTab.emit).toHaveBeenCalledWith(2);
  });
});
