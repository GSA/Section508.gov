import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDocxDownloadComponent } from './art-docx-download.component';
import { Packer } from 'docx';

describe('ArtDocxDownloadComponent', () => {
    let component: ArtDocxDownloadComponent;
    let fixture: ComponentFixture<ArtDocxDownloadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtDocxDownloadComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ArtDocxDownloadComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('label should be', () => {
        component.params = { btnName: "testButton", fileName: "testFile" };
        component.markup = '<div><p>Test Markup</p></div>';
        fixture.detectChanges();
        let elem = fixture.nativeElement.querySelector('button');
        expect(elem.innerHTML).toContain('testButton');

        fixture.componentRef.setInput('params', { btnName: 'buttonTest', fileName: 'testFile' });
        fixture.detectChanges();
        expect(elem.innerHTML).toContain("buttonTest");
    });

    it('click should execute handler', () => {
        component.params = { btnName: "test", fileName: "testFile" };
        component.markup = '<div><p>Test Markup</p></div>';
        fixture.detectChanges();

        let elem = fixture.nativeElement.querySelector('button');
        let spy = vi.spyOn(component, 'generateFile').mockReturnValue(undefined);
        elem.dispatchEvent(new Event('click'));

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('file should download', async () => {
        component.params = { btnName: "test", fileName: "testFile" };
        component.markup = '<div><p>Test Markup</p></div>';
        fixture.detectChanges();

        const elem = fixture.nativeElement.querySelector('button');
        const createElementSpy = vi.spyOn(document, 'createElement');
        const anchorClickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockReturnValue(undefined);
        const objectUrlSpy = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test-docx');
        vi.spyOn(URL, 'revokeObjectURL').mockReturnValue(undefined);
        vi.spyOn(Packer, 'toBlob').mockResolvedValue(new Blob());

        elem.dispatchEvent(new Event('click'));
        await fixture.whenStable();

        const anchor = document.querySelector<HTMLAnchorElement>('body a:last-child');
        expect(createElementSpy).toHaveBeenCalledWith('div');
        expect(createElementSpy).toHaveBeenCalledWith('a');
        expect(objectUrlSpy).toHaveBeenCalled();
        expect(anchor?.href).toContain('blob:test-docx');
        expect(anchor?.download).toBe('testFile.docx');
        expect(anchorClickSpy).toHaveBeenCalled();
    });
});
