import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtButtonComponent } from './shared/components/art-button/art-button.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { IctListingPageComponent } from './pages/ict-listing-page/ict-listing-page.component';
import { ArtGenericTextComponent } from './shared/components/art-generic-text/art-generic-text.component';
import { Section508HeaderComponent } from './shared/components/section508-header/section508-header.component';
import { Section508BannerComponent } from './shared/components/section508-banner/section508-banner.component';
import { Section508FooterComponent } from './shared/components/section508-footer/section508-footer.component';
import { StepIndicatorComponent } from './shared/components/step-indicator/step-indicator.component';
import { ArtDocxDownloadComponent } from './features/art-docx-download/art-docx-download.component';
import { ArtSideNavigationComponent } from './shared/components/art-side-navigation/art-side-navigation.component';
import { ArtTextFieldComponent } from './shared/components/art-text-field/art-text-field.component';
import { ArtFormTemplateComponent } from './shared/templates/art-form-template/art-form-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ICTItemComponent } from './shared/components/art-ict-item/art-ict-item.component';
import { TestComponent } from './pages/test/test.component';
import { ArtCheckboxGroupComponent } from './shared/components/art-checkbox-group/art-checkbox-group.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { RadiobuttonGroupComponent } from './shared/components/art-radiobutton-group/art-radiobutton-group.component';
import { ArtSaveJsonComponent } from './shared/components/art-save-json/art-save-json.component';
import { BackToTopComponent} from "./shared/components/back-to-top/back-to-top.component";
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ArtButtonComponent,
    LandingPageComponent,
    BannerComponent,
    IctListingPageComponent,
    ArtGenericTextComponent,
    Section508HeaderComponent,
    Section508BannerComponent,
    Section508FooterComponent,
    StepIndicatorComponent,
    ArtDocxDownloadComponent,
    ArtSideNavigationComponent,
    ArtTextFieldComponent,
    ArtFormTemplateComponent,
    ICTItemComponent,
    TestComponent,
    RadiobuttonGroupComponent,
    ArtSaveJsonComponent,
    ArtCheckboxGroupComponent,
    FormPageComponent,
    RadiobuttonGroupComponent,
    BackToTopComponent,
    SummaryPageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
