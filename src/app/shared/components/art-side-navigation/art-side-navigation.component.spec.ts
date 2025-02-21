import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ArtSideNavigationComponent} from './art-side-navigation.component';
import {RouterTestingModule} from "@angular/router/testing";
import {LandingPageComponent} from "../../../pages/landing-page/landing-page.component";
import {ArtSideMenuInterface} from "../../models/art-side-menu.interface";

describe('ArtSideNavigationComponent', () => {
  let component: ArtSideNavigationComponent;
  let fixture: ComponentFixture<ArtSideNavigationComponent>;
  let testMenu: ArtSideMenuInterface;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtSideNavigationComponent],
      imports: [RouterTestingModule.withRoutes([{path: '', component: LandingPageComponent}])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArtSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testMenu = {
      sideNavItems: [
        {
          name: 'Menu item',
          id: 0
        },
        {
          name: 'Next Item',
          id: 1
        },
        {
          name: 'One More Item',
          id: 2
        },
      ],
      activeId: 1
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Appear a menu.
  it("should display the menu with the correct links", function () {
    component.sideMenu = testMenu;
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.usa-sidenav').textContent).toContain('Menu item');
  });

  // Change active link
  it("set active link", function () {
    component.sideMenu = testMenu;
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.usa-sidenav .usa-current').textContent).toContain('Next Item');
  });

});
