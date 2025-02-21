import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { IctListingPageComponent } from './pages/ict-listing-page/ict-listing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TestComponent } from './pages/test/test.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';

const routes: Routes = [
  { path:'' ,  component: LandingPageComponent },  
  { path:'ict-listing-page' ,  component: IctListingPageComponent },  
  { path:'form-page' ,  component: FormPageComponent },  
  { path:'summary-page' ,  component: SummaryPageComponent } 
  // { path:'test' ,  component: TestComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
