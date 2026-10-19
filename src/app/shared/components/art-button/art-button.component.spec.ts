import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { ArtButtonComponent } from './art-button.component';
import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';

describe('ArtButtonComponent', () => {
    let component: ArtButtonComponent;
    let fixture: ComponentFixture<ArtButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtButtonComponent],
            providers: [provideRouter([])]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ArtButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe("button clicked", function () {
    let router: Router;
    let component: ArtButtonComponent;
    let fixture: ComponentFixture<ArtButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtButtonComponent],
            providers: [provideRouter([{ path: '', component: LandingPageComponent }])]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ArtButtonComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router); // TestBed.inject(Router)
    });
    //defining it should be something
    it("should display the button with the correct label", function () {
        component.buttonData = { "label": "Test", "description": "/" };
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('button').textContent).toContain(component.buttonData?.label);
    });

    it("should call buttonClicked when button is clicked", function () {
        component.buttonData = { "label": "Test", "description": "/" };
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        let spy = vi.spyOn(component, 'buttonClicked').mockReturnValue(undefined);
        compiled.querySelector('button').click();
        expect(spy).toHaveBeenCalled();
    });

    it.skip("should navigate to destination when button clicked", function () {
        component.buttonData = { "label": "Test", "description": "/" };
        let compiled = fixture.debugElement.nativeElement;
        compiled.querySelector('button').click();
        const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(false);
        fixture.detectChanges();
        expect(navigateSpy).toHaveBeenCalled();
    });

});



