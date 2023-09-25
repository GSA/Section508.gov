import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtSaveZipComponent } from './art-save-zip.component';

describe('ArtSaveZipComponent', () => {
  let component: ArtSaveZipComponent;
  let fixture: ComponentFixture<ArtSaveZipComponent>;
  let testICTItems1 = [{name:'my-new-ict-item', timeStamp: Date.now().toString(), langKeyWords:['lang1','lang2','lang3']}];
  let testICTItems2 = [{name:'my-new-ict-item1', timeStamp: Date.now().toString(), langKeyWords:['lang1','lang2','lang3']},
  {name:'my-new-ict-item2', timeStamp: Date.now().toString(), langKeyWords:['lang1','lang2','lang3']}];
  let saveAsInfoObject:any = {btnName:'Download all ICTs', fileName:'jsonData'}


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtSaveZipComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtSaveZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with buttonIsEnabled as false', () => {
    expect(component.buttonIsEnabled).toBe(false);
  });

  it('should enable the button when ictItems length is greater than 1', () => {
    component.ictItems = testICTItems2;
    component.ngOnInit();
    expect(component.buttonIsEnabled).toBe(true);
  });

  it('should not enable the button when ictItems length is not greater than 1', () => {
    component.ictItems = testICTItems1;
    component.ngOnInit();
    expect(component.buttonIsEnabled).toBe(false);
  });

  it('should generate a zip file when generateZip is called', async () => {
    component.ictItems = testICTItems2;
    component.saveAsInfo = saveAsInfoObject;

    const blobSpy = spyOn(URL, 'createObjectURL').and.callFake(() => 'fake-url');
    const linkSpy = spyOn(document, 'createElement').and.callThrough();
    const clickSpy = spyOn(document.createElement('a'), 'click');

    await component.generateZip();

    expect(blobSpy).toHaveBeenCalled();
    expect(linkSpy).toHaveBeenCalledWith('a');
    expect(clickSpy).toHaveBeenCalled();
  });

  it('should handle errors when generating a zip file', async () => {
    component.ictItems = testICTItems2;
    component.saveAsInfo = saveAsInfoObject;

    spyOn(URL, 'createObjectURL').and.callFake(() => {
      throw new Error('Test error');
    });

    spyOn(console, 'error'); // Spy on the console.error method to capture error messages

    await component.generateZip();

    expect(console.error).toHaveBeenCalledWith('Error generating zip:', new Error('Test error'));
  });
});
