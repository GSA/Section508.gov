import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Art508LangService } from 'src/app/shared/services/art-508-lang/art-508-lang.service';
import { SummaryPageComponent } from './summary-page.component';
import {IctItemService} from "../../shared/services/ict-item/ict-item.service";
import { ClipboardService } from 'ngx-clipboard';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Unit test will be added later
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});