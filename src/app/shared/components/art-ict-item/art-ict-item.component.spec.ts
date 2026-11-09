import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICTItemComponent } from './art-ict-item.component';
import { ICTInterface } from "../../models/ict.interface";

describe('ICTItem', () => {
    let component: ICTItemComponent;
    let fixture: ComponentFixture<ICTItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ICTItemComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ICTItemComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('title should be', () => {
        fixture.componentRef.setInput('ictItem', { langKeyWords: {}, name: "test", timeStamp: "" });
        fixture.detectChanges();
        const span = fixture.nativeElement.querySelector('abbr');
        expect(span.innerHTML).toContain("test");
        fixture.componentRef.setInput('ictItem', { langKeyWords: {}, name: "TEST2", timeStamp: "" });
        fixture.detectChanges();
        expect(span.textContent).toContain("TEST2");

        fixture.componentRef.setInput('ictItem', { langKeyWords: {}, name: "LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG", timeStamp: "" });
        fixture.detectChanges();
        expect(span.textContent).toContain("LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG");
        const abbr = span.querySelector('abbr');
        expect(span.getAttribute('title')).toContain("LOOOOOOOOOOOO OOOOOOOOOOOO OOOOOOOOOOO OOOOOOOOOOOOO OOOOOOOOOOOOOOOOO NG");
    });

    it('delete button emits event', () => {
        vi.spyOn(component.delete, 'emit').mockReturnValue(undefined);
        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('button');
        button.dispatchEvent(new Event('click'));

        expect(component.delete.emit).toHaveBeenCalledWith(0);

        fixture.componentRef.setInput('index', 1);
        fixture.detectChanges();

        button.dispatchEvent(new Event('click'));

        expect(component.delete.emit).toHaveBeenCalledWith(1);
    });
});
