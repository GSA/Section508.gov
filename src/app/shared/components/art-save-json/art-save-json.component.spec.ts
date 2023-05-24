import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtSaveJsonComponent } from './art-save-json.component';
import {By} from "@angular/platform-browser";

describe('ArtSaveJsonComponent', () => {
  let component: ArtSaveJsonComponent;
  let fixture: ComponentFixture<ArtSaveJsonComponent>;
  let saveAsInfoObject:any = {btnName:"Download Json", fileName:"jsonData.json"}
  let testICTItem = {name:'my-new-ict-item', timeStamp: Date.now().toString(), langKeyWords:['lang1','lang2','lang3']};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtSaveJsonComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ArtSaveJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the button name as "Download Json"', () =>{
    component.saveAsInfo = saveAsInfoObject;
    component.ictItem = testICTItem;
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.usa-button').textContent).toContain("Download Json");
  });

  it('should name the download file as "jsonData.json"', () =>{
    component.saveAsInfo = saveAsInfoObject;
    component.ictItem = testICTItem;
    component.ngOnInit();
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.usa-button'));
    expect(button.nativeElement.getAttribute('download')).toEqual('jsonData.json');
  });

  it('should be disabled when there is no ICT passed', () =>{
    component.saveAsInfo = saveAsInfoObject;
    component.ngOnInit();
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.usa-button'));

    //this asserts that button matches <button disabled>Download Json</button>  
    expect(button.nativeElement.getAttribute('disabled')).toEqual('');
  });

  it('should be enabled when there is ICT item input', () =>{
    component.saveAsInfo = saveAsInfoObject;
    component.ictItem = testICTItem;
    component.ngOnInit();
    fixture.detectChanges();
    
    const button = fixture.debugElement.query(By.css('.usa-button'));

    //this asserts that button has 'href' attribute which makes it clickable  
    expect(button.nativeElement.getAttribute('href')).toContain('data:application/json')
  });
});
