import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDocxDownloadComponent } from './art-docx-download.component';
import createSpyObj = jasmine.createSpyObj;

describe('ArtDocxDownloadComponent', () => {
  let component: ArtDocxDownloadComponent;
  let fixture: ComponentFixture<ArtDocxDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDocxDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDocxDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('label should be', () => {
    component.params = {btnName: "testButton", fileName: "testFile"};
    component.markup = '<div><p>Test Markup</p></div>';
    fixture.detectChanges();
    let elem = fixture.nativeElement.querySelector('button');
    expect(elem.innerHTML).toContain('testButton');

    component.params.btnName = "buttonTest";
    fixture.detectChanges();
    expect(elem.innerHTML).toContain("buttonTest");
  })

  it('click should execute handler', () => {
    component.params = { btnName: "test", fileName: "testFile" };
    component.markup = '<div><p>Test Markup</p></div>';

    let elem = fixture.nativeElement.querySelector('button');
    let spy = spyOn(component, 'generateFile');
    elem.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it ('file should download', () => {
    component.params = { btnName: "test", fileName: "testFile" };
    component.markup = '<div><p>Test Markup</p></div>';
    fixture.detectChanges();

    let elem = fixture.nativeElement.querySelector('button');

    const spyObj = createSpyObj('button', ['click']);
    let spy = spyOn(document, 'createElement').and.callThrough();

    elem.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith('div');
    expect(spy).toHaveBeenCalledWith('a');
    fixture.whenStable().then(() => {
      let a: HTMLAnchorElement | null = document.querySelector('body a:last-child');

      //expect(spyObj.href).toContain('blob:http://localhost:4200/75da761a-40f2-4307-b7b0-57a90d8e1b64');
      expect(a?.href.toString().match(/^blob:[.]*\/75da761a-40f2-4307-b7b0-57a90d8e1b64$/)).toBeTruthy();
      expect(a?.download).toBe('testFile.docx');
      expect(a?.click).toHaveBeenCalled();
    });
  });
});
