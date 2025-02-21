import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

import { ICTItemComponent } from './art-ict-item.component';
import {ICTInterface} from "../../models/ict.interface";

describe('ICTItem', () => {
  let component: ICTItemComponent;
  let fixture: ComponentFixture<ICTItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICTItemComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICTItemComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be', () => {
    component.ictItem = {langKeyWords: {}, name: "test", timeStamp: ""};
    const span = fixture.nativeElement.querySelector('abbr');
    fixture.detectChanges();
    expect(span.innerHTML).toContain("test");
    component.ictItem = {langKeyWords:{}, name: "TEST2", timeStamp: ""}
    fixture.detectChanges();
    expect(span.textContent).toContain("TEST2");

    component.ictItem = {langKeyWords: {}, name: "LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG", timeStamp: ""};
    fixture.detectChanges();
    expect(span.textContent).toContain("LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG");
    const abbr = span.querySelector('abbr');
    expect(span.getAttribute('title')).toContain("LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG");
  });

  it('delete button emits event', () => {
    spyOn(component.delete, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.delete.emit).toHaveBeenCalledWith(0);

    component.index = 1;
    fixture.detectChanges();

    button.dispatchEvent(new Event('click'));

    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });
});
