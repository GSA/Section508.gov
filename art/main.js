"use strict";
(self["webpackChunkART"] = self["webpackChunkART"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/form-page/form-page.component */ 5514);
/* harmony import */ var _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ict-listing-page/ict-listing-page.component */ 7327);
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ 3048);
/* harmony import */ var _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/summary-page/summary-page.component */ 1617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: '', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__.LandingPageComponent },
    { path: 'ict-listing-page', component: _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_1__.IctListingPageComponent },
    { path: 'form-page', component: _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_0__.FormPageComponent },
    { path: 'summary-page', component: _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_3__.SummaryPageComponent }
    // { path:'test' ,  component: TestComponent },  
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/art-content-data/art-content-data.service */ 3604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ 3228);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/section508-header/section508-header.component */ 1592);
/* harmony import */ var _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/section508-banner/section508-banner.component */ 6452);
/* harmony import */ var _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/section508-footer/section508-footer.component */ 1137);
/* harmony import */ var _shared_components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/back-to-top/back-to-top.component */ 9482);











function AppComponent_art_banner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "art-banner", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r0.artContentDataService.getBannerData().title)("header", ctx_r0.artContentDataService.getBannerData().header);
} }
function AppComponent_art_generic_text_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "art-generic-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r1.artContentDataService.getHeader(), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "art-generic-text", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r2.artContentDataService.getFooter().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.artContentDataService.getFooter().data, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
class AppComponent {
    /**
    * @description Using service for all shared content
    * @params artContentDataService
    */
    constructor(artContentDataService, router) {
        this.artContentDataService = artContentDataService;
        this.router = router;
        this.url = "/preview/gsa/section508.gov/test-art/art";
        this.title = 'Accessibility Requirements Tool (ART)';
    }
    //url="";
    ngOnInit() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlPath;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__.ArtContentDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 7, consts: [["aria-label", "Official Government Site Banner", 1, "page-landing-page", "layout-demo", "art-default-font"], ["href", "#main-content", 1, "usa-skipnav"], [3, "url"], [1, "usa-overlay"], ["id", "main-content", 3, "title", "header", 4, "ngIf"], [1, "usa-graphic-list", "usa-section", "art-banner"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "tablet:", "grid-col"], [1, "margin-bottom-2"], [4, "ngIf"], ["art-generic-text-layout", "border", 1, "margin-top-5"], ["class", "padding-x-2 padding-bottom-3 margin-top-3", 4, "ngIf"], [1, "margin-y-2", 3, "innerHTML"], ["id", "main-content", 3, "title", "header"], [3, "innerHTML"], [1, "padding-x-2", "padding-bottom-3", "margin-top-3"], [1, "margin-top-3", 3, "title"], [1, "margin-top-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Skip to main content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "art-section508-banner", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "art-section508-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AppComponent_art_banner_6_Template, 1, 2, "art-banner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AppComponent_art_generic_text_12_Template, 2, 1, "art-generic-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AppComponent_div_15_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "art-section508-footer", 2)(18, "back-to-top");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getBannerData());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getFooter());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx.artContentDataService.getUpdatedDate(), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx.url);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__.ArtGenericTextComponent, _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_4__.Section508HeaderComponent, _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_5__.Section508BannerComponent, _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_6__.Section508FooterComponent, _shared_components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_7__.BackToTopComponent], styles: [".art-banner[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n#backtotop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: rgba(17, 47, 78, 0.93);\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydC1iYW5uZXJ7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNiYWNrdG90b3B7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNyw0Nyw3OCwwLjkzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ 3048);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ 3228);
/* harmony import */ var _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ict-listing-page/ict-listing-page.component */ 7327);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/section508-header/section508-header.component */ 1592);
/* harmony import */ var _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/section508-banner/section508-banner.component */ 6452);
/* harmony import */ var _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/section508-footer/section508-footer.component */ 1137);
/* harmony import */ var _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/step-indicator/step-indicator.component */ 340);
/* harmony import */ var _features_art_docx_download_art_docx_download_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/art-docx-download/art-docx-download.component */ 742);
/* harmony import */ var _shared_components_art_side_navigation_art_side_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/art-side-navigation/art-side-navigation.component */ 2796);
/* harmony import */ var _shared_components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/art-text-field/art-text-field.component */ 3150);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/templates/art-form-template/art-form-template.component */ 1589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/art-ict-item/art-ict-item.component */ 5478);
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/test/test.component */ 9492);
/* harmony import */ var _shared_components_art_checkbox_group_art_checkbox_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/art-checkbox-group/art-checkbox-group.component */ 8727);
/* harmony import */ var _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/form-page/form-page.component */ 5514);
/* harmony import */ var _shared_components_art_radiobutton_group_art_radiobutton_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/art-radiobutton-group/art-radiobutton-group.component */ 1556);
/* harmony import */ var _shared_components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/art-save-json/art-save-json.component */ 5632);
/* harmony import */ var _shared_components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/back-to-top/back-to-top.component */ 9482);
/* harmony import */ var _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/summary-page/summary-page.component */ 1617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_25__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_25__.HashLocationStrategy }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent,
        _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__.ArtButtonComponent,
        _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingPageComponent,
        _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent,
        _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_6__.IctListingPageComponent,
        _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_7__.ArtGenericTextComponent,
        _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_8__.Section508HeaderComponent,
        _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_9__.Section508BannerComponent,
        _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_10__.Section508FooterComponent,
        _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_11__.StepIndicatorComponent,
        _features_art_docx_download_art_docx_download_component__WEBPACK_IMPORTED_MODULE_12__.ArtDocxDownloadComponent,
        _shared_components_art_side_navigation_art_side_navigation_component__WEBPACK_IMPORTED_MODULE_13__.ArtSideNavigationComponent,
        _shared_components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_14__.ArtTextFieldComponent,
        _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_15__.ArtFormTemplateComponent,
        _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_16__.ICTItemComponent,
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_17__.TestComponent,
        _shared_components_art_radiobutton_group_art_radiobutton_group_component__WEBPACK_IMPORTED_MODULE_20__.RadiobuttonGroupComponent,
        _shared_components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_21__.ArtSaveJsonComponent,
        _shared_components_art_checkbox_group_art_checkbox_group_component__WEBPACK_IMPORTED_MODULE_18__.ArtCheckboxGroupComponent,
        _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_19__.FormPageComponent,
        _shared_components_art_radiobutton_group_art_radiobutton_group_component__WEBPACK_IMPORTED_MODULE_20__.RadiobuttonGroupComponent,
        _shared_components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_22__.BackToTopComponent,
        _pages_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_23__.SummaryPageComponent,
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_17__.TestComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 742:
/*!***************************************************************************!*\
  !*** ./src/app/features/art-docx-download/art-docx-download.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtDocxDownloadComponent": () => (/* binding */ ArtDocxDownloadComponent)
/* harmony export */ });
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! docx */ 4547);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class ArtDocxDownloadComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.params = { btnName: "", fileName: "" };
        this.markup = "";
    }
    ngOnInit() {
    }
    /**
     * Click Event. Generates the docx file and sends it to the user.
     */
    generateFile() {
        if (!this.validateFilename(this.params.fileName)) {
            throw "Invalid filename: " + this.params.fileName;
        }
        let container = document.createElement('div');
        container.innerHTML = this.markup;
        let elements = this.traverseTree(container);
        let docElems = [];
        for (let i = 0, l = elements.length; i < l; i++) {
            let elem = elements[i];
            switch (elem.nodeName) {
                case 'P':
                    docElems.push(this.parseParagraph(elem));
                    break;
                case 'OL':
                    docElems = docElems.concat(this.parseList(elem, true));
                    break;
                case 'UL':
                    docElems = docElems.concat(this.parseList(elem, false));
                    break;
                case 'H1':
                case 'H2':
                case 'H3':
                case 'H4':
                case 'H5':
                case 'H6':
                    docElems = docElems.concat(this.parseHeader(elem));
                    break;
            }
        }
        let d = new docx__WEBPACK_IMPORTED_MODULE_0__.Document({
            styles: {
                default: {
                    heading1: {
                        run: {
                            size: 48,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                    heading2: {
                        run: {
                            size: 44,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                    heading3: {
                        run: {
                            size: 40,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                    heading4: {
                        run: {
                            size: 36,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                    heading5: {
                        run: {
                            size: 32,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                    heading6: {
                        run: {
                            size: 28,
                            font: 'Source Sans Pro Web',
                            bold: true
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    },
                },
                paragraphStyles: [
                    {
                        id: 'default',
                        name: 'default',
                        basedOn: 'Normal',
                        next: 'Normal',
                        run: {
                            size: 24,
                            font: 'Source Sans Pro Web',
                        },
                        paragraph: {
                            spacing: {
                                before: 0,
                                after: 360,
                                line: 320
                            }
                        },
                    }
                ]
            },
            numbering: {
                config: [
                    {
                        reference: "number",
                        levels: [
                            {
                                level: 0,
                                format: docx__WEBPACK_IMPORTED_MODULE_0__.LevelFormat.DECIMAL,
                                text: "%1",
                                alignment: docx__WEBPACK_IMPORTED_MODULE_0__.AlignmentType.START,
                                style: {
                                    paragraph: {
                                        indent: { left: 720, hanging: 260 }
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            sections: [
                {
                    children: docElems
                }
            ]
        });
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.classList.add("display-none");
        docx__WEBPACK_IMPORTED_MODULE_0__.Packer.toBlob(d).then((b) => {
            let url = window.URL.createObjectURL(b);
            a.href = url;
            a.download = this.params.fileName + ".docx";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
    /**
     * Traverses the dom tree of the submitted markup and picks out relevant elements.
     *
     * @param root
     * @private
     */
    traverseTree(root) {
        let elems = [];
        let leaves = ['P', 'OL', 'UL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        for (let i = 0, l = root.children.length; i < l; i++) {
            let child = root.children[i];
            if (leaves.includes(child.nodeName)) {
                elems.push(child);
            }
            else {
                elems = elems.concat(this.traverseTree(child));
            }
        }
        return elems;
    }
    /**
     * Parses a p tag into a Docx element.
     * @param p
     * @private
     */
    parseParagraph(p) {
        let children = this.parseText(Array.from(p.childNodes));
        return new docx__WEBPACK_IMPORTED_MODULE_0__.Paragraph({
            children: children,
            style: 'default'
        });
    }
    /**
     * Parses lists into Docx elements.
     *
     * @param list
     * @param ordered  Whether this list should be numbered or just bullet points
     * @private
     */
    parseList(list, ordered) {
        let ps = [];
        ps = [...this.parseSubList(ps, list, ordered)];
        return ps;
    }
    /**
     * Parses lists and nested list into Docx elements.
     *
     * @param list
     * @param ordered  Whether this list should be numbered or just bullet points
     * @param childNumber nesting level or indexing level
     * @param ps paragraph array
     * @private
     */
    parseSubList(ps, list, ordered, childNumber = 0) {
        //Lopping to child each node of the parent node
        for (let i = 0; i < list.children.length; i++) {
            let child = list.children[i];
            if (ordered) {
                ps.push(new docx__WEBPACK_IMPORTED_MODULE_0__.Paragraph({
                    children: this.parseText(Array.from(child.childNodes)),
                    style: 'default',
                    numbering: {
                        reference: 'number',
                        level: 0
                    }
                }));
            }
            else {
                // If a child of the current node has a nested ol/ul
                const olNode = this.findNode(child, 'UL');
                ps.push(new docx__WEBPACK_IMPORTED_MODULE_0__.Paragraph({
                    children: this.parseText(Array.from(child.childNodes)),
                    style: 'default',
                    bullet: {
                        level: childNumber // updating index number
                    },
                }));
                // If there is a nested ul
                if (olNode) {
                    childNumber++; // move on padding up
                    this.parseSubList(ps, child.children[1], false, childNumber);
                    childNumber--; // after the recurssion is done, go one padding down
                }
            }
        }
        return ps;
    }
    /**
     * @description form a node, find if a child node has an UL node
     * @param node
     * @param nodeName
     * @returns boolean
     */
    findNode(node, nodeName) {
        let found = false;
        node.childNodes.forEach(eachNode => {
            if (eachNode.nodeName === nodeName) {
                found = true;
            }
        });
        return found;
    }
    /**
     * Parses H* tags into Docx elements.
     * @param elem
     * @private
     */
    parseHeader(elem) {
        let level = elem.nodeName[1];
        let headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.TITLE;
        switch (level) {
            case "1":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_1;
                break;
            case "2":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_2;
                break;
            case "3":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_3;
                break;
            case "4":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_4;
                break;
            case "5":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_5;
                break;
            case "6":
                headingLevel = docx__WEBPACK_IMPORTED_MODULE_0__.HeadingLevel.HEADING_6;
                break;
        }
        return new docx__WEBPACK_IMPORTED_MODULE_0__.Paragraph({
            children: this.parseText(Array.from(elem.childNodes)),
            heading: headingLevel,
        });
    }
    /**
     * Parses the text of an element into Docx elements, taking typographic elements into account.
     * @param elems
     * @private
     */
    parseText(elems) {
        let r = [];
        for (let i = 0, l = elems.length; i < l; i++) {
            let e = elems[i];
            // remove tab runs that occur in markup
            let text = (e.textContent ?? '').replace(/\s+/g, ' ');
            // strip leading whitespace from the first element
            if (i == 0) {
                text = text.trimStart();
            }
            switch (e.nodeType) {
                case 1:
                    // This is an element like b or i
                    switch (e.nodeName) {
                        case 'B':
                        case 'STRONG':
                            r.push(new docx__WEBPACK_IMPORTED_MODULE_0__.TextRun({
                                text: text,
                                style: 'default',
                                bold: true
                            }));
                            break;
                        case 'I':
                            r.push(new docx__WEBPACK_IMPORTED_MODULE_0__.TextRun({
                                text: text,
                                style: 'default',
                                italics: true
                            }));
                    }
                    break;
                case 3:
                    r.push(new docx__WEBPACK_IMPORTED_MODULE_0__.TextRun({
                        text: text,
                        style: 'default',
                    }));
                    break;
            }
        }
        return r;
    }
    /**
     * Tests that the given filename is valid.
     * @param filename
     * @protected
     */
    validateFilename(filename) {
        let test1 = /^[^\\/:*?"<>|]+$/;
        let test2 = /^\./;
        let test3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
        return test1.test(filename) && !test2.test(filename) && !test3.test(filename);
    }
}
ArtDocxDownloadComponent.ɵfac = function ArtDocxDownloadComponent_Factory(t) { return new (t || ArtDocxDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
ArtDocxDownloadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArtDocxDownloadComponent, selectors: [["art-docx-download"]], inputs: { params: "params", markup: "markup" }, decls: 2, vars: 1, consts: [[1, "usa-button", "usa-button--accent-warm", 3, "click"]], template: function ArtDocxDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArtDocxDownloadComponent_Template_button_click_0_listener() { return ctx.generateFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.params.btnName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtZG9jeC1kb3dubG9hZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5514:
/*!********************************************************!*\
  !*** ./src/app/pages/form-page/form-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageComponent": () => (/* binding */ FormPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_form_page_form_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/form-page/form-page.service */ 1491);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/step-indicator/step-indicator.component */ 340);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/templates/art-form-template/art-form-template.component */ 1589);








function FormPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "How can ART help you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function FormPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "art-form-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("formData", function FormPageComponent_div_2_Template_art_form_template_formData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onFormSubmitted($event)); })("pageNumber", function FormPageComponent_div_2_Template_art_form_template_pageNumber_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.onPageChanged($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formConfig", ctx_r1.formConfig)("scanChange", ctx_r1.scanChange)("pageIndex", ctx_r1.pageNumber);
} }
function FormPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class FormPageComponent {
    constructor(formPageService, ictItemService, changeDetectorRef, router) {
        this.formPageService = formPageService;
        this.ictItemService = ictItemService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        /**
         * @description Used to trigger the ngOnChanges function to listing to any input property change
         * @type any
         */
        this.scanChange = "";
        /**
         * @description To display a loading container as the form is loading
         * @type boolean
         */
        this.loading = false;
        /**
         * @description Track the form page from the form component as the user is navigating
         * @type Number
         */
        this.pageNumber = 0;
        /**
         * @description Provide all the configuration for the forms and elements which will be created
         * @type FormTemplateInterface
         */
        this.formConfig = [];
        /**
         * @description Steps data for StepIndicatorComponent.
         * @type IStepIndicator
         */
        this.stepsData = { tabs: [], activeId: '0' };
        /**
         * @description Flag to update step indicator.
         * @type boolean
         */
        this.updateStep = false;
    }
    ngOnInit() {
        // Getting the form configuration, creating a new address, any update will no change this.formPageService data
        this.formConfig = JSON.parse(JSON.stringify(this.formPageService.getConfigurations()));
        // Redirect to the home page if there is no ictitem/ on page reload
        if (this.ictItemService.get().length <= 0)
            this.router.navigateByUrl("/");
        // Letting the form to load before nay initialization
        setTimeout(() => {
            this.formConfig.splice(0, 1); // The default configuration from line 64 is still here and were never remover. Here we are removing the default configuration
            this.formPageService.prepopulateData(this.formConfig, this.ictItemService.get());
            this.loading = true;
        }, 1000);
        // Creating custom formName for each formElement and generation each configuration
        this.ictItemService.get().forEach((eachIctItem, index) => {
            this.stepsData.tabs.push({
                name: eachIctItem.name,
                id: index.toString()
            });
            //if(index > 0) { Removed this if condition   so the default configuration is still on the formConfig and by adding this, we will have an addional denerated form we wll be using
            const tempConfig = this.formPageService.generateNewConfig(JSON.parse(JSON.stringify(this.formPageService.getConfigurations()[0])), '-' + Date.now().toString() + '-'.concat(index.toString()), eachIctItem);
            tempConfig.id = index;
            this.formConfig.push(tempConfig);
            //}
        });
        // Load the form page based on which the user selection was on the summary page ot be amended, it is 0 by default
        this.onPageChanged(this.formPageService.navToFormPage());
    }
    ngAfterViewChecked() {
        // To evaluate any variable angular hasn't check the value change
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @description to update the page number when the form page is changing
     * @param index
     * @type number
     * @return void
     */
    onPageChanged(index) {
        this.pageNumber = index;
        this.stepsData.activeId = this.pageNumber.toString();
        this.updateStep = !this.updateStep;
    }
    /**
     * @return void
     * @description When the user submit an project or ICT name, it will call the addIctItem function
     * @param data
     */
    onFormSubmitted(data) {
        this.formPageService.setFormResults(data);
        const itcItems = this.ictItemService.get();
        itcItems.forEach((eachItem, index) => {
            eachItem.langKeyWords = data[index];
        });
        // Saved the updatde items, will be used when ever the user returns to the form to repopulated values
        this.ictItemService.reSet(itcItems);
        this.router.navigateByUrl(('/summary-page'));
    }
    /**
     * @description Update page number on step navigation click.
     * @param event
     */
    onSelectedTabReceive(event) {
        this.pageNumber = event;
    }
}
FormPageComponent.ɵfac = function FormPageComponent_Factory(t) { return new (t || FormPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_form_page_form_page_service__WEBPACK_IMPORTED_MODULE_0__.FormPageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
FormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FormPageComponent, selectors: [["app-form-page"]], decls: 4, vars: 5, consts: [[3, "stepsData", "update", "getSelectedTab"], ["class", "font-serif-xl margin-bottom-neg-1", 4, "ngIf"], ["class", "", 4, "ngIf"], ["class", "ogp-flex", 4, "ngIf"], [1, "font-serif-xl", "margin-bottom-neg-1"], [1, "grid-row"], [1, "tablet:grid-col-3", "margin-bottom-3", "tablet:margin-bottom-0", "tablet:margin-right-6"], [1, "ogp-title"], [1, ""], [3, "formConfig", "scanChange", "pageIndex", "formData", "pageNumber"], [1, "ogp-flex"], [1, "lds-ripple"]], template: function FormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "atr-step-indicator", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("getSelectedTab", function FormPageComponent_Template_atr_step_indicator_getSelectedTab_0_listener($event) { return ctx.onSelectedTabReceive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FormPageComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FormPageComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FormPageComponent_div_3_Template, 4, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepsData", ctx.stepsData)("update", ctx.updateStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ictItemService.get().length > 0 && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ictItemService.get().length > 0 && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_2__.StepIndicatorComponent, _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_3__.ArtFormTemplateComponent], styles: ["art-side-navigation[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.ogp-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ogp-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n@media screen and (max-width: 414px) {\n  .ogp-title[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNJLG1CQUFBO0lBQ0EsaUJBQUE7RUFDSjtBQUNGIiwiZmlsZSI6ImZvcm0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFydC1zaWRlLW5hdmlnYXRpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vZ3AtZmxleHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9ncC10aXRsZXtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5AbWVkaWEgIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5vZ3AtdGl0bGV7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7327:
/*!**********************************************************************!*\
  !*** ./src/app/pages/ict-listing-page/ict-listing-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IctListingPageComponent": () => (/* binding */ IctListingPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/landing-page/landing-page.service */ 3330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_art_ict_lp_art_ict_lp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/art-ict-lp/art-ict-lp.service */ 5767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/templates/art-form-template/art-form-template.component */ 1589);
/* harmony import */ var _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/art-ict-item/art-ict-item.component */ 5478);












function IctListingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 8)(6, "art-file-upload", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("getFileData", function IctListingPageComponent_div_2_Template_art_file_upload_getFileData_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.onFileReceive($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.artIctLpService.getUploadBtn().description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("maxFilesNbr", ctx_r0.maxItems - ctx_r0.ictItems.length)("maxFile", ctx_r0.maxItems)("maxLength", ctx_r0.artIctLpService.getMaxLength());
} }
function IctListingPageComponent_art_generic_text_3_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.artIctLpService.getErrorMsg());
} }
function IctListingPageComponent_art_generic_text_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 10)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 11)(5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "art-form-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("formData", function IctListingPageComponent_art_generic_text_3_Template_art_form_template_formData_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.onFormSubmitted($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, IctListingPageComponent_art_generic_text_3_i_8_Template, 2, 1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.artIctLpService.getSectionTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.artIctLpService.getInputLabel(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formConfig", ctx_r1.formConfig)("scanChange", ctx_r1.scanChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.ictItems.length >= ctx_r1.maxItems);
} }
function IctListingPageComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "art-ict-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("delete", function IctListingPageComponent_span_5_Template_art_ict_item_delete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onItemDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const eachIctItem_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("index", index_r10 + 1)("ictItem", eachIctItem_r9);
} }
function IctListingPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "art-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonData", ctx_r3.artIctLpService.getContBtl())("disabled", ctx_r3.ictItems.length <= 0);
} }
class IctListingPageComponent {
    /**
     * @description using the ictItemService component and artIctLpService service
     * @param ictItemService artIctLpService
     */
    constructor(router, landingPageService, ictItemService, artIctLpService) {
        this.router = router;
        this.landingPageService = landingPageService;
        this.ictItemService = ictItemService;
        this.artIctLpService = artIctLpService;
        /**
         * @description limit the maximum of ICT items that can be added
         * @type number
         */
        this.maxItems = 0;
        /**
         * @description Provide all the configuration for the forms and elements which will be created
         * @type FormTemplateInterface
         */
        this.formConfig = [];
        /**
         * @description Used to trigger the ngOnChanges function to listing to any input property change
         * @type any
         */
        this.scanChange = "";
        /**
         * @description to store all the ICT Items created or uploaded
         * @type: ICTInterface[]
         */
        this.ictItems = [];
        /**
        * @description enum to set predefined string
        * @type string
        */
        this.nextPage = src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__.NextPage;
    }
    ngOnInit() {
        this.maxItems = this.artIctLpService.getMaxItems();
        // Return on the home page if the user refreshes the page, because all the content will be lost
        if (!this.landingPageService.getNextPage()) {
            this.router.navigateByUrl("/");
        }
        // Getting the form configuration
        this.formConfig = this.artIctLpService.getConfigurations();
        this.tempPlaceHolder = this.formConfig[0].formElements[0].placeholder;
    }
    /**
     * @description Before the page is getting destructed, the form needs to be disable if it was enable before
     * @return void
     */
    ngOnDestroy() {
        if (this.ictItems.length <= this.maxItems && this.formConfig[0].disable) {
            this.formConfig[0].disable = false;
            this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
            this.scanChange = "false";
        }
    }
    /**
     * @return void
     * @description When the user submit an project or ICT name, it will call the addIctItem function
     * @param data
     */
    onFormSubmitted(dataArr) {
        const data = dataArr[0];
        const key = Object.keys(data)[0];
        const val = data[key];
        const tempIctItem = { name: val, langKeyWords: data, timeStamp: (Date.now()).toString() };
        this.addIctItem(tempIctItem);
    }
    /**
    * @description When the user delete an ictItem, it will return the index of the ictItem deleted
    * @param index
    * @type number
    * @return void
    */
    onItemDelete(index) {
        this.removeIctItem(index - 1);
    }
    /**
     * @description Used to remove an ICT item from the ictItem array
     * @type: number
     * @return void
     * @param index
     */
    removeIctItem(index) {
        if (this.ictItems[index]) {
            // If the form  is disabled and an item is being removed 
            if (this.ictItems.length <= this.maxItems && this.formConfig[0].disable) {
                this.formConfig[0].disable = false;
                this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
                this.scanChange = "false";
                this.ictItems.splice(index, 1);
            }
            else {
                this.ictItems.splice(index, 1);
            }
            ;
            this.ictItemService.reSet(this.ictItems);
        }
    }
    /**
     * @description Used to add an ICT item to the ictItem array
     * @type: ICTInterface
     * @return void
     */
    addIctItem(ictItem) {
        // No action needed if the mx item is reached
        if (this.ictItems.length >= this.maxItems && this.formConfig[0].disable) {
            return;
        }
        if (this.ictItems.length < this.maxItems) {
            this.ictItems.push(ictItem);
            this.ictItemService.reSet(this.ictItems);
        }
        // if the max item number has been reached, disable the form
        if (this.ictItems.length === this.maxItems) {
            this.formConfig[0].disable = true;
            this.formConfig[0].formElements[0].placeholder = "";
            this.scanChange = "true";
        }
    }
    /**
     * @description when the file has been uploaded successfully, this function is called
     * @param event
     * @type ICTInterface
     * @return void
     */
    onFileReceive(event) {
        //this.ictItemService.set(event);
        event.forEach(eachIctItem => this.addIctItem(eachIctItem));
    }
}
IctListingPageComponent.ɵfac = function IctListingPageComponent_Factory(t) { return new (t || IctListingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__.LandingPageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_art_ict_lp_art_ict_lp_service__WEBPACK_IMPORTED_MODULE_2__.ArtIctLpService)); };
IctListingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: IctListingPageComponent, selectors: [["app-ict-listing-page"]], decls: 7, vars: 4, consts: [["art-generic-text-layout", "top-border"], [1, "margin-3"], [4, "ngIf"], [1, "margin-left-2", "margin-top-1"], [4, "ngFor", "ngForOf"], ["class", "margin-top-5", 4, "ngIf"], [1, "margin-bottom-neg-1"], [1, "font-serif-lg"], ["id", "art-upload-button-container", 1, "margin-left-2", "margin-bottom-3"], [3, "maxFilesNbr", "maxFile", "maxLength", "getFileData"], [1, "font-serif-lg", "margin-bottom-1"], [1, "margin-left-2"], [1, "margin-bottom-0"], [3, "formConfig", "scanChange", "formData"], ["class", "usa-error-message font-sans-2xs", 4, "ngIf"], [1, "usa-error-message", "font-sans-2xs"], [3, "index", "ictItem", "delete"], [1, "margin-top-5"], [3, "buttonData", "disabled"]], template: function IctListingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, IctListingPageComponent_div_2_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, IctListingPageComponent_art_generic_text_3_Template, 9, 5, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, IctListingPageComponent_span_5_Template, 2, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, IctListingPageComponent_div_6_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.nextPage.uploadICT === ctx.landingPageService.getNextPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artIctLpService.getSectionTitle() && ctx.nextPage.getStarted === ctx.landingPageService.getNextPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.ictItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.ictItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.FileUploadComponent, _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_4__.ArtButtonComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_5__.ArtGenericTextComponent, _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_6__.ArtFormTemplateComponent, _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_7__.ICTItemComponent], styles: [".art-margin-bottom-03[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljdC1saXN0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImljdC1saXN0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0LW1hcmdpbi1ib3R0b20tMDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 3048:
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/landing-page/landing-page.service */ 3330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/art-generic-text/art-generic-text.component */ 4471);







function LandingPageComponent_art_generic_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 4)(2, "div", 5)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "art-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "art-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.lpButtonHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("btnTile", true)("buttonData", ctx_r0.getStartedBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("btnTile", true)("buttonData", ctx_r0.getUploadICTBtn);
} }
function LandingPageComponent_art_generic_text_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.landingPageService.getSampleProLang(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class LandingPageComponent {
    /**
     * @description Using the  ICT Item service and the landing page service
     * @params ictItemService, landingPageService
     */
    constructor(ictItemService, landingPageService) {
        this.ictItemService = ictItemService;
        this.landingPageService = landingPageService;
        /**
         * @description data for the description above the button
         * @type string
         */
        this.lpButtonHeader = "";
        /**
          * @description Storing the data for the get started button: label and destination
          * @type IButtonInterface
          */
        this.getStartedBtn = { label: "" };
        /**
        * @description storing the data for the upload ict button. labe and destination
        * @type IButtonInterface
        */
        this.getUploadICTBtn = { label: "" };
    }
    ngOnInit() {
        //Initialization
        this.lpButtonHeader = this.landingPageService.getLpButtonData().buttonHeader;
        this.getStartedBtn = { ...this.landingPageService.getLpGetStrBtn(), action: () => { this.getNextPage(src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__.NextPage.getStarted); } };
        this.getUploadICTBtn = { ...this.landingPageService.getLpUplBtn(), action: () => { this.getNextPage(src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__.NextPage.uploadICT); } };
    }
    /**
     * @description set the destination on the next page
     * @param nextPage
     * @type string
     */
    getNextPage(nextPage) {
        this.landingPageService.setNextPage(nextPage);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_0__.LandingPageService)); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["art-landing-page"]], decls: 5, vars: 2, consts: [["aria-label", "Landing Banner"], ["art-generic-text-layout", "top-border"], [4, "ngIf"], ["art-generic-text-layout", "background-color"], [1, "margin-2"], [1, "font-serif-lg", "margin-bottom-3"], [1, "art-flex"], [3, "btnTile", "buttonData"], [1, "art-btn"], [1, "padding-x-3", "padding-y-1", "margin-top-5"], [3, "innerHTML"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingPageComponent_art_generic_text_2_Template, 10, 5, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LandingPageComponent_art_generic_text_4_Template, 3, 1, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lpButtonHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.landingPageService && ctx.landingPageService.getSampleProLang);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__.ArtButtonComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__.ArtGenericTextComponent], styles: [".art-btn[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n@media screen and (max-width: 414px) {\n  .art-btn[_ngcontent-%COMP%] {\n    margin-left: 0rem;\n    margin-top: 0.5rem;\n  }\n}\n.art-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 414px) {\n  .art-flex[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 0rem;\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUZKO0lBR1EsaUJBQUE7SUFDQSxrQkFBQTtFQUdOO0FBQ0Y7QUFDQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFISjtJQUlRLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBSU47QUFDRiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0LWJ0bntcbiAgICBtYXJnaW4tbGVmdDowLjVyZW07XG4gICAgQG1lZGlhICBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICB9XG5cbn1cblxuLmFydC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgQG1lZGlhICBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 1617:
/*!**************************************************************!*\
  !*** ./src/app/pages/summary-page/summary-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryPageComponent": () => (/* binding */ SummaryPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_art_508_lang_art_508_lang_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/art-508-lang/art-508-lang.service */ 5583);
/* harmony import */ var _shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ 1691);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_form_page_form_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/form-page/form-page.service */ 1491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/step-indicator/step-indicator.component */ 340);
/* harmony import */ var _features_art_docx_download_art_docx_download_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/art-docx-download/art-docx-download.component */ 742);
/* harmony import */ var _shared_components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/art-save-json/art-save-json.component */ 5632);










function SummaryPageComponent_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Item that contains ICT: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.ictItems[ctx_r0.currentIndex].name, " ");
} }
const _c0 = function () { return { btnName: "Save as word (.docx)", fileName: "Language" }; };
const _c1 = function () { return { btnName: "Save for later (.json)", fileName: "jsonData.json" }; };
class SummaryPageComponent {
    constructor(art508LangService, ictItemService, clipboardService, router, formPageService) {
        this.art508LangService = art508LangService;
        this.ictItemService = ictItemService;
        this.clipboardService = clipboardService;
        this.router = router;
        this.formPageService = formPageService;
        /**
         * @description Used to trigger the ngOnChanges function to listing to any input property change
         * @type any
         */
        this.resultData = "";
        /**
         * To position the currently active item
         */
        this.currentIndex = 0;
        /**
         * Maximum index for form's step indicator
         */
        this.maxIndex = 0;
        /**
         * Will be populated from 508MappingService
         */
        this.languageGenerated = [];
        this.stepsData = { tabs: [], activeId: '' };
        /**
         * ICTItems can be populated from ICTItemService
         */
        this.ictItems = [];
    }
    ngOnInit() {
        // Get form data from the ICT service.
        this.ictItems = this.ictItemService.get();
        //if there is no icItems, return to landingPageComponent
        if (this.ictItems.length == 0) {
            this.router.navigateByUrl('');
        }
        this.maxIndex = this.ictItems.length - 1;
        this.ictItems.forEach((item, index) => {
            //Populate step data indicator
            this.stepsData.tabs.push({ id: "0" + index, name: item.name });
            const langKeyWords = JSON.parse(JSON.stringify(item.langKeyWords));
            const langGenerated = this.art508LangService.get508Languages(langKeyWords) ? this.art508LangService.get508Languages(langKeyWords) : "<p><b>No Language can be generated based on your selection!</b></p>";
            //508MapoingService call for language
            this.languageGenerated.push("<p><h2>" + item.name + "</h2></p>\n" + langGenerated);
        });
        this.stepsData.activeId = "00";
    }
    onNext() {
        this.currentIndex++;
        if (this.currentIndex >= this.maxIndex) {
            this.currentIndex = this.maxIndex;
        }
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
        //document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
        const section = document.getElementById('art-section-508-requirements');
        if (section instanceof HTMLElement) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    onPrevious() {
        this.currentIndex--;
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
        //document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
        const section = document.getElementById('art-section-508-requirements');
        if (section instanceof HTMLElement) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    copyToClipboard() {
        this.clipboardService.copyFromContent(this.languageGenerated[this.currentIndex]);
    }
    onAmendForm(index) {
        this.formPageService.setFormPage(index);
        this.router.navigateByUrl("/form-page");
    }
    onSelectedTabReceive(selectedIndex) {
        this.currentIndex = selectedIndex;
        this.stepsData.activeId = this.stepsData.tabs[this.currentIndex].id;
    }
}
SummaryPageComponent.ɵfac = function SummaryPageComponent_Factory(t) { return new (t || SummaryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_art_508_lang_art_508_lang_service__WEBPACK_IMPORTED_MODULE_0__.Art508LangService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__.ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_form_page_form_page_service__WEBPACK_IMPORTED_MODULE_2__.FormPageService)); };
SummaryPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SummaryPageComponent, selectors: [["app-summary-page"]], decls: 57, vars: 13, consts: [[3, "stepsData", "activeTab", "currentIndex", "getSelectedTab"], [1, "usa-media-block", "ogp-flex-space"], [1, "ogp-btn"], [1, "ogp-btn", "usa-button", "usa-button--outline", "float-right", 3, "click"], ["type", "", 1, "usa-button", "usa-button--accent-warm", 3, "click"], [3, "params", "markup"], [1, "width-full", 3, "saveAsInfo", "ictItem"], [1, "grid-row", "grid-gap", "margin-top-4"], [1, "usa-layout-docs__main", "desktop:grid-col-12", "usa-prose", "usa-layout-docs"], [1, "site-preview-heading"], ["id", "section-result"], ["role", "region", "aria-labelledby", "summary-box-key-information", 1, "usa-summary-box"], [1, "usa-summary-box__body"], [1, "usa-summary-box__heading"], ["id", "summary-box-key-information", 1, "usa-summary-box__heading"], [1, "usa-summary-box__text"], [1, "example-spacing", "usa-prose", "margin-top-1", "font-sans-sm"], ["id", "art-section-508-requirements"], ["id", "results"], [1, "section-1-results"], ["id", "copy-requirements"], [4, "ngIf"], [1, "margin-bottom-5", 3, "innerHTML"], [1, "width-full"], [1, "ogp-btn", "usa-button", "usa-button--base", 3, "disabled", "click"]], template: function SummaryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "atr-step-indicator", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("getSelectedTab", function SummaryPageComponent_Template_atr_step_indicator_getSelectedTab_0_listener($event) { return ctx.onSelectedTabReceive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SummaryPageComponent_Template_button_click_3_listener() { return ctx.onAmendForm(ctx.currentIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Return to Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SummaryPageComponent_Template_button_click_6_listener() { return ctx.copyToClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Copy All 508 Standards Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "art-docx-download", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "art-save-json", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "main", 8)(14, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Section 508 Requirements for Your Solicitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 10)(17, "div", 11)(18, "div", 12)(19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Why is this important?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " By including Section 508 requirements in the solicitation, you are ensuring potential Offerors know which Section 508 standards apply to commercially available technology products required to be offered by the vendor in their proposals, as well as requirements to ensure technology services provided will support the agency\u2019s ability to comply with the Section 508 law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 15)(26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Copy and paste the language below into your procurement (include in the SOW, PWS, or SOO)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ol")(29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Include the Section 508 Requirements generated by ART in your Statement of Work, Performance Work Statement, or Statement of Objectives. These requirements apply to the specific technology products and services you are buying. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "(do not copy these instructions into the solicitation)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " The ART output can be included as a separate document labeled as your 508 requirements or as part of your requirements sections of your contract. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " If you copied and pasted Section 508 language from an earlier contract or solicitation, remove this old language in its entirety and replace it with the language generated by ART. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Review the Section 508 requirements. If you have any questions about the requirements, contact your agency 508 program manager. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "section", 16)(41, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Section 508 Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "section")(44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 20)(47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " Section 508 of the Rehabilitation Act, as amended by the Workforce Investment Act of 1998 (P.L. 105-220) requires that when Federal agencies develop, procure, maintain, or use information and communication technology (ICT), it shall be accessible to people with disabilities. Federal employees and members of the public who have disabilities must have access to, and use of, information and data that is comparable to people without disabilities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, SummaryPageComponent_p_49_Template, 4, 1, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 1)(52, "div", 23)(53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SummaryPageComponent_Template_button_click_53_listener() { return ctx.onPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Previous ICT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SummaryPageComponent_Template_button_click_55_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Next ICT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stepsData", ctx.stepsData)("activeTab", ctx.stepsData.activeId)("currentIndex", ctx.currentIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0))("markup", ctx.languageGenerated[ctx.currentIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("saveAsInfo", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1))("ictItem", ctx.ictItems[ctx.currentIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ictItems[ctx.currentIndex] && ctx.ictItems[ctx.currentIndex].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.languageGenerated[ctx.currentIndex], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.currentIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.currentIndex == ctx.maxIndex);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_step_indicator_step_indicator_component__WEBPACK_IMPORTED_MODULE_3__.StepIndicatorComponent, _features_art_docx_download_art_docx_download_component__WEBPACK_IMPORTED_MODULE_4__.ArtDocxDownloadComponent, _shared_components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_5__.ArtSaveJsonComponent], styles: [".align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.ogp-flex-space[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 414px) {\n  .ogp-flex-space[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n@media screen and (max-width: 414px) {\n  .ogp-btn[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    margin-right: 0rem !important;\n    width: 100%;\n  }\n  art-save-json[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFBSTtFQUhKO0lBSVEsc0JBQUE7RUFHTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLDZCQUFBO0lBQ0EsV0FBQTtFQUVOO0VBQ0U7SUFDSSxjQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzdW1tYXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9ncC1mbGV4LXNwYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBtZWRpYSAgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgfVxufVxuXG5cbkBtZWRpYSAgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICAub2dwLWJ0bntcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgYXJ0LXNhdmUtanNvbntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuIH1cbiJdfQ== */"] });


/***/ }),

/***/ 9492:
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_art_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/art-test.service */ 6674);



class TestComponent {
    constructor(ictItemService, artTestService) {
        this.ictItemService = ictItemService;
        this.artTestService = artTestService;
        /**
         * @description Provide all the configuration for the forms and elements which will be created
         * @type FormTemplateInterface
         */
        this.formConfig = [];
        /**
        * @description Used to trigger the ngOnChanges function to listing to any input property change
        * @type any
        */
        this.scanChange = "";
    }
    ngOnInit() {
        this.formConfig = this.artTestService.getConfigurations();
    }
    /**
     * @return void
     * @description When the user submit an project or ICT name, it will call the addIctItem function
     * @param data
     */
    onFormSubmitted(data) {
        const key = Object.keys(data)[0];
        const val = data[key];
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_art_test_service__WEBPACK_IMPORTED_MODULE_1__.ArtTestService)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 0, vars: 0, template: function TestComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6703:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/art-button/art-button.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtButtonComponent": () => (/* binding */ ArtButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0, a1, a2) { return { "ogp-tile": a0, "usa-button--accent-warm": a1, "usa-button--base": a2 }; };
class ArtButtonComponent {
    constructor(router) {
        this.router = router;
        this.btnTile = false;
        /**
         * @description to disabled the button
         * @type boolean
         */
        this.disabled = false;
    }
    ngOnInit() {
        if (this.buttonData && !this.buttonData.btnClass)
            this.buttonData.btnClass = "warm";
        if (this.buttonData && !this.buttonData.ariaLabel) {
            this.buttonData.ariaLabel = this.buttonData?.label + " button";
        }
        ;
    }
    /**
     * @return void
     * @description this function is trigger when the button is and will redirect the user to the destination
     */
    buttonClicked() {
        // Calling the action method if defined
        if (this.buttonData?.action) {
            this.buttonData?.action();
        }
        if (this.buttonData?.destination) {
            this.router.navigateByUrl(this.buttonData?.destination);
        }
    }
}
ArtButtonComponent.ɵfac = function ArtButtonComponent_Factory(t) { return new (t || ArtButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ArtButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtButtonComponent, selectors: [["art-button"]], inputs: { buttonData: "buttonData", btnTile: "btnTile", disabled: "disabled" }, decls: 2, vars: 8, consts: [["type", "button", 1, "usa-button", 3, "disabled", "ngClass", "click"]], template: function ArtButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtButtonComponent_Template_button_click_0_listener() { return ctx.buttonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.btnTile, (ctx.buttonData == null ? null : ctx.buttonData.btnClass) == "warm", (ctx.buttonData == null ? null : ctx.buttonData.btnClass) == "base"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.buttonData == null ? null : ctx.buttonData.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonData == null ? null : ctx.buttonData.label, "\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".ogp-tile[_ngcontent-%COMP%] {\n  width: 20rem;\n  height: 10rem;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYXJ0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZ3AtdGlsZXtcbiAgICB3aWR0aDogMjByZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8727:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/art-checkbox-group/art-checkbox-group.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtCheckboxGroupComponent": () => (/* binding */ ArtCheckboxGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function (a0) { return { "is-active": a0 }; };
function ArtCheckboxGroupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtCheckboxGroupComponent_div_6_Template_input_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const formItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onClicked(formItem_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const formItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.getControls(formItem_r1.controlName).value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", formItem_r1.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", formItem_r1.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.getControls(formItem_r1.controlName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", formItem_r1.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", formItem_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", formItem_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ArtCheckboxGroupComponent {
    constructor() {
        /**
         * @description Formgroup passed by the parent to store all checkboxes control dynamically created
         * @type formGroup
         */
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        /**
         * @type boolean
         * @description used ot hide the control by the parent
         */
        this.hidden = false;
        /**
         * Used to trigger ngChange when an object is updated by a parent
         */
        this.dataUpdated = false;
        /**
         * @description Will return the data to the parent for only 1 form after form submission
         * @type FormElement
         */
        this.formElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @description return the element the user clicked on
         */
        this.eltClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges() {
        /**
         * Whenever the parent is updating the value of the checkbox element, this function will check if some element needs to be disable and disable them on a new page load.
         */
        this.enableFormElts();
    }
    ngOnInit() {
        this.formData?.options?.forEach(element => {
            this.formGroup?.addControl(element.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(element.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]));
        });
    }
    /**
     * @description Logic to uncheck all other option if a checkbox with onlyOption field is set to true
     * @param formElement
     * @return void
     */
    onClicked(formElement) {
        this.eltClicked.emit(formElement);
        const tempControl = this.formGroup.get(formElement.controlName);
        const value = tempControl.value;
        if (formElement.onlyOption && !value) {
            this.formGroup.reset();
            this.formGroup.get(formElement.controlName)?.patchValue(!value);
            Object.keys(this.formGroup.controls).forEach(key => {
                if (key !== formElement.controlName) {
                    this.formGroup.get(key)?.disable();
                }
            });
        }
        else {
            this.formGroup.enable();
        }
    }
    /**
     * @description Used when the page is loading by clicking on next or back, and any checkbox needed to by loaded disabled would be
     */
    enableFormElts() {
        let formElement;
        const values = this.formGroup.value;
        // Found the element which has a value
        Object.keys(this.formGroup.controls).forEach(key => {
            if (values[key] && !formElement?.controlName) {
                // find the formElement for the key which has a value and has a onlyOption
                formElement = this.formData?.options?.find(opt => {
                    return opt.controlName === key && opt.onlyOption;
                });
            }
        });
        // If that element is found disable all the other option in that group except that element
        if (formElement?.controlName) {
            Object.keys(this.formGroup.controls).forEach(key => {
                if (key !== formElement?.controlName && !this.formGroup.get(key).disabled) {
                    this.formGroup.get(key)?.disable();
                }
            });
        }
    }
    /**
     * @description Get FormControl by controlName.
     * @param controlName
     */
    getControls(controlName) {
        return this.formGroup.controls[controlName];
    }
}
ArtCheckboxGroupComponent.ɵfac = function ArtCheckboxGroupComponent_Factory(t) { return new (t || ArtCheckboxGroupComponent)(); };
ArtCheckboxGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtCheckboxGroupComponent, selectors: [["art-checkbox-group"]], inputs: { formData: "formData", formGroup: "formGroup", hidden: "hidden", dataUpdated: "dataUpdated" }, outputs: { formElement: "formElement", eltClicked: "eltClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 4, consts: [[1, "usa-form-group", 3, "hidden"], [1, "margin-bottom-2"], [1, "usa-fieldset"], [1, "usa-legend", 3, "innerHTML"], ["class", "usa-checkbox", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "usa-checkbox", 3, "ngClass"], ["type", "checkbox", 1, "usa-checkbox__input", 3, "id", "name", "formControl", "click"], [1, "usa-checkbox__label", "art-bold", 3, "for"], [1, "usa-checkbox__label-description", 3, "innerHTML"]], template: function ArtCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArtCheckboxGroupComponent_div_6_Template, 5, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formData == null ? null : ctx.formData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.formData == null ? null : ctx.formData.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData == null ? null : ctx.formData.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective], styles: [".usa-checkbox[_ngcontent-%COMP%] {\n  border: 2px solid rgba(27, 27, 27, 0.3);\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 5px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n.usa-checkbox.is-active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 94, 162, 0.1);\n  border-color: #005EA2;\n}\n.usa-checkbox__label-description[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.art-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.art-normal[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.usa-fieldset[_ngcontent-%COMP%]   .usa-legend[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.usa-legend[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n[_nghost-%COMP%]     .usa-checkbox.is-active a {\n  color: #1c68d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1jaGVja2JveC1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUlJO0VBQ0UsbUJBQUE7QUFGTjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1FO0VBQ0UsbUJBQUE7QUFISjtBQU9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtBQUpGIiwiZmlsZSI6ImFydC1jaGVja2JveC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2EtY2hlY2tib3gge1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjcsMjcsMjcsLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICYuaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsOTQsMTYyLC4xKTtcbiAgICBib3JkZXItY29sb3I6ICMwMDVFQTI7XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgJi1kZXNjcmlwdGlvbntcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICB9XG59XG4uYXJ0LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnQtbm9ybWFse1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnVzYS1maWVsZHNldCB7XG4gIC51c2EtbGVnZW5kIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi51c2EtbGVnZW5ke1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVzYS1jaGVja2JveC5pcy1hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMWM2OGQ0O1xufVxuIl19 */"] });


/***/ }),

/***/ 4471:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/art-generic-text/art-generic-text.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtGenericTextComponent": () => (/* binding */ ArtGenericTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["*"];
class ArtGenericTextComponent {
    constructor() {
        /**
         * @description the input value for this component
         * @type string
         */
        this.title = '';
        /**
         * @description return the element the user clicked on
         */
        this.eltClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
}
ArtGenericTextComponent.ɵfac = function ArtGenericTextComponent_Factory(t) { return new (t || ArtGenericTextComponent)(); };
ArtGenericTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtGenericTextComponent, selectors: [["art-generic-text"]], inputs: { title: "title" }, outputs: { eltClicked: "eltClicked" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "art-agt-title"]], template: function ArtGenericTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "strong", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtZ2VuZXJpYy10ZXh0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5478:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/art-ict-item/art-ict-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICTItemComponent": () => (/* binding */ ICTItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ICTItemComponent {
    constructor() {
        /**
         * @var index  The index of this item in a list
         */
        this.index = 0;
        /**
         * @var delete  An event emitter that triggers when the delete button is clicked.
         */
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Emits a delete event when the function is invoked.
     * This function is bound to the click event of the delete button.
     */
    deleteClicked() {
        this.delete.emit(this.index);
    }
}
ICTItemComponent.ɵfac = function ICTItemComponent_Factory(t) { return new (t || ICTItemComponent)(); };
ICTItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ICTItemComponent, selectors: [["art-ict-item"]], inputs: { index: "index", ictItem: "ictItem" }, outputs: { delete: "delete" }, decls: 6, vars: 4, consts: [[3, "title"], [1, "usa-button", "usa-button--secondary", 3, "click"]], template: function ICTItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span")(2, "abbr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ICTItemComponent_Template_button_click_4_listener() { return ctx.deleteClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.ictItem == null ? null : ctx.ictItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ictItem == null ? null : ctx.ictItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("aria-label", "Delete button for index ", ctx.index, "");
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1em;\n  border: 2px solid blue;\n  border-radius: 4px;\n  padding: 0.5em;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 7em;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: attr(data-index);\n  background-color: white;\n  top: -0.7em;\n  left: 0.8em;\n  padding: 0 0.5em;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1pY3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFBTTtFQUNFLHFCQUFBO0FBRVIiLCJmaWxlIjoiYXJ0LWljdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDdlbTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogYXR0cihkYXRhLWluZGV4KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdG9wOiAtLjdlbTtcbiAgICAgIGxlZnQ6IC44ZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgYWJiciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 1556:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/art-radiobutton-group/art-radiobutton-group.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadiobuttonGroupComponent": () => (/* binding */ RadiobuttonGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





function RadiobuttonGroupComponent_legend_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formData == null ? null : ctx_r0.formData.label);
} }
function RadiobuttonGroupComponent_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
} if (rf & 2) {
    const button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", button_r3.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "art-bold": a0 }; };
function RadiobuttonGroupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadiobuttonGroupComponent_div_6_Template_input_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const button_r3 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onClicked(button_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RadiobuttonGroupComponent_div_6_span_5_Template, 1, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const button_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "radio_answer_", button_r3.controlName, "_", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.formData == null ? null : ctx_r1.formData.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", button_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r1.formData == null ? null : ctx_r1.formData.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "radio_label_", button_r3.controlName, "_", i_r4, "")("for", "radio_answer_", button_r3.controlName, "_", i_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, button_r3.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", button_r3.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", button_r3.description);
} }
function RadiobuttonGroupComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const eachOpt_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachOpt_r9.info, " ");
} }
function RadiobuttonGroupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RadiobuttonGroupComponent_div_7_div_1_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachOpt_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.value[ctx_r2.formData.controlName] === eachOpt_r9.value && eachOpt_r9.info);
} }
class RadiobuttonGroupComponent {
    constructor() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.hidden = false;
        /**
         * @description return the element the user clicked on
         */
        this.eltClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        if (this.formData) {
            this.formGroup.addControl(this.formData.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.formData.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]));
        }
    }
    /**
      * @description emit the element the user clicked on
      * @param formElement
      * @return void
      */
    onClicked(formElement) {
        this.eltClicked.emit(formElement);
    }
}
RadiobuttonGroupComponent.ɵfac = function RadiobuttonGroupComponent_Factory(t) { return new (t || RadiobuttonGroupComponent)(); };
RadiobuttonGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadiobuttonGroupComponent, selectors: [["art-radiobutton-group"]], inputs: { formData: "formData", formGroup: "formGroup", hidden: "hidden" }, outputs: { eltClicked: "eltClicked" }, decls: 8, vars: 6, consts: [[3, "formGroup", "hidden"], [1, "margin-bottom-2"], [1, "usa-fieldset"], ["class", "usa-legend", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "usa-legend"], [1, "usa-radio"], ["type", "radio", 1, "usa-radio__input", "usa-radio__input--tile", 3, "id", "formControlName", "value", "click"], [1, "usa-radio__label", 3, "id", "ngClass", "for"], ["class", "usa-checkbox__label-description", 3, "innerHTML", 4, "ngIf"], [1, "usa-checkbox__label-description", 3, "innerHTML"], ["class", "usa-alert usa-alert--info usa-alert--no-icon margin-top-2", 4, "ngIf"], [1, "usa-alert", "usa-alert--info", "usa-alert--no-icon", "margin-top-2"], [1, "usa-alert__body"], [1, "usa-alert__text"]], template: function RadiobuttonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RadiobuttonGroupComponent_legend_5_Template, 2, 1, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RadiobuttonGroupComponent_div_6_Template, 6, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RadiobuttonGroupComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup)("hidden", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formData == null ? null : ctx.formData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formData == null ? null : ctx.formData.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData == null ? null : ctx.formData.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData == null ? null : ctx.formData.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".usa-checkbox__label-description[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.usa-legend[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n\n.art-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1yYWRpb2J1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLG1CQUFBO0FBRlI7O0FBT0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9FO0VBQ0UsaUJBQUE7QUFKSiIsImZpbGUiOiJhcnQtcmFkaW9idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnVzYS1jaGVja2JveCB7XG4gICAgJl9fbGFiZWwge1xuICAgICAgJi1kZXNjcmlwdGlvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNhLWxlZ2VuZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cblxuICAuYXJ0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 5632:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/art-save-json/art-save-json.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtSaveJsonComponent": () => (/* binding */ ArtSaveJsonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ArtSaveJsonComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("download", ctx_r0.saveAsInfo.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.dataUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.saveAsInfo.btnName, " ");
} }
function ArtSaveJsonComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.saveAsInfo.btnName, "\n");
} }
/**
 * A button component to facilitate downloading data in json format.
 */
class ArtSaveJsonComponent {
    constructor() {
        /**
         * @type obj{btnName:string, fileName:string}
         * @description the parent component will send input to configure the save as json button component
         */
        this.saveAsInfo = { btnName: '', fileName: '' };
        /**
         * @type boolean
         * @description makes the button enabled or disabled.
         */
        this.buttonIsEnabled = false;
    }
    ngOnInit() {
        if (this.ictItem) {
            this.buttonIsEnabled = true;
        }
    }
    /**
     * @returns SafeUrl
     * @description generates a json content from ICT Item and returns a safe url linking to the json file.
     */
    get dataUri() {
        const jsonData = JSON.stringify(this.ictItem);
        const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
        return uri;
    }
}
ArtSaveJsonComponent.ɵfac = function ArtSaveJsonComponent_Factory(t) { return new (t || ArtSaveJsonComponent)(); };
ArtSaveJsonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtSaveJsonComponent, selectors: [["art-save-json"]], inputs: { saveAsInfo: "saveAsInfo", ictItem: "ictItem" }, decls: 5, vars: 2, consts: [[1, "usa-tooltip", "width-full"], ["class", "usa-button usa-button--accent-warm usa-tooltip__trigger", "data-position", "right", "title", "", "aria-describedby", "tooltip-307972", "tabindex", "0", 3, "download", "href", 4, "ngIf"], ["id", "tooltip-307972", "role", "tooltip", "aria-hidden", "true", 1, "usa-tooltip__body"], ["class", "usa-button usa-button--accent-warm usa-tooltip", "data-position", "top", "title", "Top", "disabled", "", 4, "ngIf"], ["data-position", "right", "title", "", "aria-describedby", "tooltip-307972", "tabindex", "0", 1, "usa-button", "usa-button--accent-warm", "usa-tooltip__trigger", 3, "download", "href"], ["data-position", "top", "title", "Top", "disabled", "", 1, "usa-button", "usa-button--accent-warm", "usa-tooltip"]], template: function ArtSaveJsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtSaveJsonComponent_a_1_Template, 2, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This allows you to come back later and pick up where you left off. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArtSaveJsonComponent_button_4_Template, 2, 1, "button", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonIsEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonIsEnabled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtc2F2ZS1qc29uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2796:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/art-side-navigation/art-side-navigation.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtSideNavigationComponent": () => (/* binding */ ArtSideNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function ArtSideNavigationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtSideNavigationComponent_li_2_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const menuItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.menuItemClicked(menuItem_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("side-nav-link ", (menuItem_r1 == null ? null : menuItem_r1.id) == (ctx_r0.sideMenu == null ? null : ctx_r0.sideMenu.activeId) ? "usa-current" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.name);
} }
class ArtSideNavigationComponent {
    constructor() {
        this.menuItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    /**
     * @description this function is trigger when user click on the menu link.
     * @param id Active menu item id.
     * @return void
     */
    menuItemClicked(id) {
        this.menuItemSelected.emit(id);
        let section = document.getElementById('form-section-' + id);
        if (section instanceof HTMLElement) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}
ArtSideNavigationComponent.ɵfac = function ArtSideNavigationComponent_Factory(t) { return new (t || ArtSideNavigationComponent)(); };
ArtSideNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtSideNavigationComponent, selectors: [["art-side-navigation"]], inputs: { sideMenu: "sideMenu" }, outputs: { menuItemSelected: "menuItemSelected" }, decls: 3, vars: 1, consts: [["aria-label", "Side navigation", 1, "art-side-navigation"], [1, "usa-sidenav"], ["class", "usa-sidenav__item", 4, "ngFor", "ngForOf"], [1, "usa-sidenav__item"], ["href", "javascript:void(0);", 3, "click"]], template: function ArtSideNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtSideNavigationComponent_li_2_Template, 3, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideMenu == null ? null : ctx.sideMenu.sideNavItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".art-side-navigation[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1zaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFBRiIsImZpbGUiOiJhcnQtc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYXJ0LXNpZGUtbmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 3150:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/art-text-field/art-text-field.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtTextFieldComponent": () => (/* binding */ ArtTextFieldComponent),
/* harmony export */   "ErrorText": () => (/* binding */ ErrorText)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/form-element.interface */ 7516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ArtTextFieldComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "input" + ctx_r0.fromControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formData == null ? null : ctx_r0.formData.label);
} }
function ArtTextFieldComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formData == null ? null : ctx_r1.formData.description);
} }
function ArtTextFieldComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.displayError());
} }
const _c0 = function (a0) { return { "usa-form-group--error": a0 }; };
const _c1 = function (a0) { return { "usa-input--error": a0 }; };
class ArtTextFieldComponent {
    constructor() {
        this.hidden = false;
        this.fromControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    }
    ngOnInit() {
        this.fromControl = this.control;
        this.control?.statusChanges.subscribe(() => {
        });
    }
    /**
     * @description used to check if this formcontrol has any error based on the validations from its configuration, wit the max char length to be 25
     * @return string
    */
    displayError() {
        let errorMessage = "";
        const error = this.control?.errors;
        if (this.control?.getError(ErrorText.maxlength)) {
            errorMessage = this.formData?.errorMessages[ErrorText.maxlength];
        }
        ;
        return errorMessage || "";
    }
}
ArtTextFieldComponent.ɵfac = function ArtTextFieldComponent_Factory(t) { return new (t || ArtTextFieldComponent)(); };
ArtTextFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArtTextFieldComponent, selectors: [["art-text-field"]], inputs: { formData: "formData", control: "control", hidden: "hidden" }, decls: 8, vars: 15, consts: [[1, "usa-form-group", 3, "ngClass", "hidden"], [1, "margin-bottom-0"], ["class", "usa-label ", 3, "for", 4, "ngIf"], ["class", "usa-checkbox__label-description usa-hint", 4, "ngIf"], ["class", "usa-error-message", "role", "alert", "for", "input-error", 4, "ngIf"], ["autocomplete", "off", "name", "input", 1, "usa-input", 3, "ngClass", "id", "placeholder", "formControl"], [1, "usa-label", 3, "for"], [1, "usa-checkbox__label-description", "usa-hint"], ["role", "alert", "for", "input-error", 1, "usa-error-message"]], template: function ArtTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArtTextFieldComponent_label_4_Template, 2, 2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArtTextFieldComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArtTextFieldComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.displayError()))("hidden", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formData == null ? null : ctx.formData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formData == null ? null : ctx.formData.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formData == null ? null : ctx.formData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayError());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.displayError()))("id", "input" + ctx.fromControl)("placeholder", ctx.formData == null ? null : ctx.formData.placeholder)("formControl", ctx.fromControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.formData == null ? null : ctx.formData.placeholder);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["input[_ngcontent-%COMP%], .usa-error-message[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n.usa-form-group[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImFydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIC51c2EtZXJyb3ItbWVzc2FnZXtcbiAgICB3aWR0aDogMTVyZW07XG59XG5cbi51c2EtZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4iXX0= */"] });
var ErrorText;
(function (ErrorText) {
    ErrorText["maxlength"] = "maxlength";
})(ErrorText || (ErrorText = {}));


/***/ }),

/***/ 9482:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/back-to-top/back-to-top.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackToTopComponent": () => (/* binding */ BackToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BackToTopComponent {
    constructor() {
    }
    ngOnInit() {
        let topButton = document.getElementById('backtotop');
        if (topButton instanceof HTMLElement) {
            window.onscroll = function () {
                scrollFunction(topButton);
            };
            topButton.onclick = function () {
                document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });
            };
        }
    }
}
BackToTopComponent.ɵfac = function BackToTopComponent_Factory(t) { return new (t || BackToTopComponent)(); };
BackToTopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackToTopComponent, selectors: [["back-to-top"]], decls: 2, vars: 0, consts: [["id", "backtotop", "title", "Go to top", 2, "display", "none"]], template: function BackToTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u02C4 Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#backtotop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: rgba(17, 47, 78, 0.93);\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 10px;\n  font-size: 22px;\n}\n#backtotop[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2stdG8tdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7QUFDSiIsImZpbGUiOiJiYWNrLXRvLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrdG90b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsNDcsNzgsMC45Myk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgfVxufVxuIl19 */"] });
function scrollFunction(topButton) {
    if (topButton instanceof HTMLElement) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topButton.style.display = 'block';
        }
        else {
            topButton.style.display = 'none';
        }
    }
}


/***/ }),

/***/ 3228:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function BannerComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.header, " ");
} }
function BannerComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
} }
class BannerComponent {
    constructor() {
        /**
         * @description Title for the banner
         * @type string
         */
        this.title = "";
        /**
         * @description Header for the banner
         * @type string
         */
        this.header = "";
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["art-banner"]], inputs: { title: "title", header: "header" }, decls: 7, vars: 2, consts: [["aria-label", "Page Banner", 1, "usa-graphic-list", "usa-section", "art-landing-page-banner"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "tablet:", "grid-col"], ["id", "art-banner-header", "class", "art-banner-title-color font-sans-lg margin-bottom-0", 4, "ngIf"], ["id", "art-banner-title", "class", "text-white font-sans-xl margin-top-0 margin-bottom-0", 4, "ngIf"], ["id", "art-banner-header", 1, "art-banner-title-color", "font-sans-lg", "margin-bottom-0"], ["id", "art-banner-title", 1, "text-white", "font-sans-xl", "margin-top-0", "margin-bottom-0"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BannerComponent_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BannerComponent_h1_6_Template, 2, 1, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".art-landing-page-banner[_ngcontent-%COMP%] {\n  background-color: #162E51;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n\n.art-banner-title-color[_ngcontent-%COMP%] {\n  color: #9DDFEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnQtbGFuZGluZy1wYWdlLWJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYyRTUxO1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG4uYXJ0LWJhbm5lci10aXRsZS1jb2xvcntcbiAgICBjb2xvcjogIzlEREZFQjtcbn0iXX0= */"] });


/***/ }),

/***/ 7082:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/file-upload.service */ 8800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function FileUploadComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select JSON files. Do not exceed 8 ICTs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FileUploadComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r9, " ");
} }
function FileUploadComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_6_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.selectErrors);
} }
function FileUploadComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r11, " ");
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_7_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.result.errors);
} }
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.successMessage, " ");
} }
function FileUploadComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachFile_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", eachFile_r14.name, " ");
} }
function FileUploadComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Change files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileUploadComponent_div_10_div_5_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.files.length, " file", ctx_r4.files.length == 1 ? "" : "s", " selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.files);
} }
function FileUploadComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag file here or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "choose from folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function FileUploadComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); ctx_r15.onUpload(); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r6.value = ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FileUploadComponent {
    //Inject Services
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.selectErrors = [];
        //Store selected files
        this.files = [];
        //Output for parent component.
        this.result = { errors: [], jsonData: [] };
        //Flag to enable/disable the Upload button.
        this.isReadyToUpload = false;
        //Flag for file input. True if no file selected.
        this.fileInputRequired = true;
        //Max size allowed for a file (in Bytes)
        this.maxFileSize = 10485760;
        /**
         * @description Used to display successful message when the files has been upload successfully
         * @type string
         */
        this.successMessage = '';
        this.getFileData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * @description the maximum number of files to be uploaded. This will change by the parent
         */
        this.maxFilesNbr = 8;
        /**
         * @description the maximum number of files to be uploaded Initially
         */
        this.maxFile = 8;
        /**
         * @description the maximum number the name character
         */
        this.maxLength = 25;
    }
    ngOnInit() {
        this.fileUploadService.setMaxLength(this.maxLength);
    }
    /**
     * @param event
     * @returns void
     * @description invokes when user selects the files. Validates numbers of file selected, size and type of a file. Validation errors are stored in SelectErrors array.
     * @type {(event: Event) => void}
     **/
    onChange(event) {
        this.successMessage = "";
        //Initializing the variables
        this.result = { errors: [], jsonData: [] };
        this.isReadyToUpload = false;
        this.fileInputRequired = false;
        this.selectErrors = [];
        //checking if no file is selected
        if (event.target.files.length == 0) {
            this.fileInputRequired = true;
            return;
        }
        //checking if files are selected are more than the maximum sent by the parents
        if (event.target.files.length > this.maxFilesNbr) {
            this.selectErrors.push('Maximum Upload is ' + this.maxFile + '.');
        }
        //validating type and size of selected files.
        for (var file of event.target.files) {
            if (file.size > this.maxFileSize) {
                this.selectErrors.push('File size is limited to 10MB max. ' + file.name + ': ' + this.fileUploadService.truncate(file.size / 1048576, 2) + 'MB');
            }
            if (file.type != 'application/json') {
                this.selectErrors.push('Please upload a valid JSON file. ' + file.name);
            }
        }
        if (this.selectErrors.length > 0) {
            return;
        }
        this.files = event.target.files;
        this.isReadyToUpload = true;
    }
    /**
     * @returns void
     * @description collects the json data from all files and emits a single array to the calling component
     * @type {() => void}
     **/
    onUpload() {
        this.fileUploadService.upload(this.files)
            .then((fileData) => {
            this.result = fileData;
            this.getFileData.emit(this.result.jsonData);
            this.isReadyToUpload = false;
            if (this.result.errors && this.result.errors.length <= 0)
                this.successMessage = "File uploaded";
        });
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_0__.FileUploadService)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["art-file-upload"]], inputs: { maxFilesNbr: "maxFilesNbr", maxFile: "maxFile", maxLength: "maxLength" }, outputs: { getFileData: "getFileData" }, decls: 16, vars: 7, consts: [["aria-label", "File upload", 1, "usa-graphic-list"], [1, "usa-form-group", "margin-bottom-1"], ["for", "file-input-specific", 1, "usa-label"], ["class", "usa-hint", "id", "file-input-specific-hint", 4, "ngIf"], [1, "usa-file-input", "margin-top-1"], ["class", "input-error-alert error", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "art-file-input__target"], ["class", "margin-bottom-3", 4, "ngIf"], ["class", "usa-file-input__instructions", 4, "ngIf"], [1, "usa-file-input__box"], ["id", "file-input-specific", "type", "file", "name", "file-input-specific", "accept", ".json", "multiple", "multiple", "aria-live", "polite", "aria-label", "No files selected", "data-default-aria-label", "No files selected", 1, "usa-file-input__input", 3, "change"], ["fileUpload", ""], ["class", "usa-button usa-button--outline", 3, "click", 4, "ngIf"], ["id", "file-input-specific-hint", 1, "usa-hint"], [1, "input-error-alert", "error"], ["class", "margin-x-2", 4, "ngFor", "ngForOf"], [1, "margin-x-2"], [1, "error"], [4, "ngFor", "ngForOf"], [1, "success"], [1, "margin-bottom-3"], [1, "usa-file-input__preview-heading"], [1, "usa-file-input__choose"], ["class", "usa-file-input__preview", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "usa-file-input__preview"], [1, "usa-file-input__instructions"], [1, "usa-file-input__drag-text"], [1, "usa-button", "usa-button--outline", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Input accepts only specific file types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileUploadComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileUploadComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FileUploadComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FileUploadComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FileUploadComponent_div_10_Template, 6, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FileUploadComponent_div_11_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_13_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FileUploadComponent_button_15_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileInputRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.errors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReadyToUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isReadyToUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReadyToUpload);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".upload-message[_ngcontent-%COMP%] {\n  background: rgb(235, 187, 187);\n  margin-top: 5px;\n  pointer-events: none;\n  position: absolute;\n  align-items: center;\n  padding-top: 5px;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(3, 58, 3);\n  background-color: rgb(226, 230, 226);\n  border: solid 1px;\n  border-radius: 5px;\n  margin: 0 0 5px;\n  padding: 0 5px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  background-color: rgb(238, 197, 197);\n  border: solid 1px;\n  border-radius: 5px;\n  margin: 0 0 5px;\n}\n\n.usa-file-input[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.art-file-input__target[_ngcontent-%COMP%] {\n  border: 1px dashed #a9aeb1;\n  display: block;\n  font-size: 0.93rem;\n  margin-top: 0.5rem;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLW1lc3NhZ2V7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMTg3LCAxODcpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc3VjY2Vzc3tcbiAgICBjb2xvcjogcmdiKDMsIDU4LCAzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzAsIDIyNik7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5NywgMTk3KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xufVxuXG4udXNhLWZpbGUtaW5wdXR7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmFydC1maWxlLWlucHV0X190YXJnZXR7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhOWFlYjE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAuOTNyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6452:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/section508-banner/section508-banner.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section508BannerComponent": () => (/* binding */ Section508BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Section508BannerComponent {
    constructor() {
        this.url = "";
    }
    ngOnInit() {
    }
}
Section508BannerComponent.ɵfac = function Section508BannerComponent_Factory(t) { return new (t || Section508BannerComponent)(); };
Section508BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section508BannerComponent, selectors: [["art-section508-banner"]], inputs: { url: "url" }, decls: 35, vars: 3, consts: [[1, "usa-banner"], [1, "usa-accordion"], [1, "usa-banner__header"], [1, "usa-banner__inner"], ["aria-label", "U.S. Flag", 1, "grid-col-auto"], ["aria-hidden", "true", "alt", "U.S. Flag", 1, "usa-banner__header-flag", 3, "src"], [1, "grid-col-fill", "tablet:grid-col-auto"], [1, "usa-banner__header-text"], ["aria-hidden", "true", 1, "usa-banner__header-action"], ["aria-expanded", "false", "aria-controls", "gov-banner", 1, "usa-accordion__button", "usa-banner__button"], [1, "usa-banner__button-text"], ["id", "gov-banner", "hidden", "", 1, "usa-banner__content", "usa-accordion__content"], [1, "grid-row", "grid-gap-lg"], [1, "usa-banner__guidance", "tablet:grid-col-6"], ["alt", "Dot gov", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"], [1, "usa-media-block__body"], ["alt", "Https", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"]], template: function Section508BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "An official website of the United States government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Here\u2019s how you know");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9)(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Here's how you know");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15)(19, "p")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The .gov means it\u2019s official.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you\u2019re on a federal government site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15)(27, "p")(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "The site is secure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "https://");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/us_flag_small.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/icon-dot-gov.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/icon-https.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uNTA4LWJhbm5lci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1137:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/section508-footer/section508-footer.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section508FooterComponent": () => (/* binding */ Section508FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Section508FooterComponent {
    constructor() {
        this.url = "";
    }
    ngOnInit() {
    }
}
Section508FooterComponent.ɵfac = function Section508FooterComponent_Factory(t) { return new (t || Section508FooterComponent)(); };
Section508FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section508FooterComponent, selectors: [["art-section508-footer"]], inputs: { url: "url" }, decls: 111, vars: 1, consts: [[1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-container"], [1, "grid-row", "grid-gap", "padding-bottom-4"], [1, "desktop:grid-col-4"], [1, "text-bold"], [1, "add-list-reset", "line-height-sans-6"], ["href", "https://www.gsa.gov/technology/government-it-initiatives/digital-strategy", "target", "_blank"], ["href", "https://www.plainlanguage.gov/", "target", "_blank"], ["href", "https://designsystem.digital.gov/", "target", "_blank"], ["href", "https://www.cio.gov/about/members-and-leadership/accessibility-cop/", "target", "_blank"], [1, "desktop:grid-col-2"], ["href", "https://www.section508.gov/about-us/", "aria-label", "About Us in Organization"], ["aria-label", "Contact Us details", "href", "https://www.section508.gov/contact-us/"], ["href", "https://www.section508.gov/contributors/", "aria-label", "Section508.gov site Contributors"], [1, "desktop:grid-col-3"], ["href", "https://www.section508.gov/art", "aria-label", "Accessibility Requirements Tool"], ["href", "https://www.section508.gov/buy/solicitation-review-tool", "aria-label", "Solicitation Review Tool"], ["href", "https://www.section508.gov/content/guide-accessible-web-design-development"], ["href", "https://digitaldashboard.gov/", "target", "_blank"], ["href", "https://analytics.usa.gov/", "target", "_blank"], ["href", "https://www.section508.gov/content/glossary"], ["href", "https://www.section508.gov/website-policies"], ["href", "https://www.section508.gov/tools/coordinator-listing"], ["href", "https://www.section508.gov/manage/join-the-508-community/"], [1, "usa-identifier"], ["aria-label", "Agency identifier,", 1, "usa-identifier__section", "usa-identifier__section--masthead"], [1, "usa-identifier__container"], [1, "usa-identifier__logos"], ["href", "https://gsa.gov", 1, "usa-identifier__logo"], ["alt", "General Services Administration Logo", "integrity", "sha512-5ciC+l/ipR9VSnpK/i6PqrSHd0/pMTEBs6nArXajxdJ2S+59+E/itSW10iB2emnqYwwo1lYSTAXMiRp7TMGStg==", "crossorigin", "anonymous", 1, "usa-identifier__logo-img", 3, "src"], ["aria-label", "Agency description", 1, "usa-identifier__identity"], [1, "usa-identifier__identity-domain"], [1, "usa-identifier__identity-disclaimer"], ["href", "https://www.gsa.gov/"], ["aria-label", "Important links,,", 1, "usa-identifier__section", "usa-identifier__section--required-links"], [1, "usa-identifier__required-links-list"], [1, "usa-identifier__required-links-item"], ["href", "https://www.gsa.gov/about-us", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/accessibility-aids", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/freedom-of-information-act-foia", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsaig.gov/", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/reports/budget-performance", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/website-policies", 1, "usa-identifier__required-link", "usa-link"], ["aria-label", "U.S. government information and services,,", 1, "usa-identifier__section", "usa-identifier__section--usagov"], [1, "usa-identifier__usagov-description"], ["href", "https://www.usa.gov/", 1, "usa-link"]], template: function Section508FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Government-wide Initiatives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Digital Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Plain Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " US Web Design System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CIO Council Accessibility Community of Practice (ACOP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 6)(24, "li")(25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Contributors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 6)(37, "li")(38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " SRT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Developer Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " DigitalDashboard.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Analytics.usa.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15)(53, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 6)(56, "li")(57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Website Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Find Your Section 508 Program Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Join the Community(Listserv)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25)(69, "section", 26)(70, "div", 27)(71, "div", 28)(72, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31)(75, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Section508.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " An official website of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "General Services Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nav", 35)(82, "div", 27)(83, "ul", 36)(84, "li", 37)(85, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "About GSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 37)(88, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Accessibility support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 37)(91, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "FOIA requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 37)(94, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "No FEAR Act data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 37)(97, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Office of the Inspector General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 37)(100, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Performance reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 37)(103, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "section", 45)(106, "div", 27)(107, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Looking for U.S. government information and services? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Visit USA.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/images/gsa-logo-md.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uNTA4LWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1592:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/section508-header/section508-header.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section508HeaderComponent": () => (/* binding */ Section508HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class Section508HeaderComponent {
    constructor() {
        this.url = "";
    }
    ngOnInit() {
    }
}
Section508HeaderComponent.ɵfac = function Section508HeaderComponent_Factory(t) { return new (t || Section508HeaderComponent)(); };
Section508HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section508HeaderComponent, selectors: [["art-section508-header"]], inputs: { url: "url" }, decls: 57, vars: 3, consts: [["role", "banner", 1, "usa-header", "usa-header--extended"], [1, "usa-navbar"], ["id", "extended-logo", 1, "usa-logo"], ["href", "https://www.section508.gov/"], ["alt", "Section508.gov Home; GSA logo with text: Section508.gov Buy. Build. Be Accessible.", "integrity", "sha512-S2YGUVu8KqAmjqtxiMVq5MXieFg+L8T4y7Uv3eHZE3ePWZbUSJnehCZbsNEDiG/ZcFGxms61gqe9YViO6H/KZQ==", "crossorigin", "anonymous", 1, "logo", 3, "src"], [1, "usa-menu-btn"], ["role", "navigation", "aria-label", "Primary Site Navigation", 1, "usa-nav"], [1, "usa-nav__inner"], [1, "usa-nav__close"], ["alt", "close", "integrity", "sha512-XLawNnedFKdaFdJhoad/TAQHLO1XHwSyvZVlVpXieNmk80S974//1mU5khr0OXVTGH4H3k6mTs9tVP/J6fPoFw==", "crossorigin", "anonymous", 3, "src"], [1, "usa-nav__primary", "usa-accordion"], [1, "usa-nav__primary-item"], ["aria-label", "Policy & Management primary navigation", "href", "https://www.section508.gov/manage/", 1, "usa-nav__link"], ["aria-label", "Acquisition primary navigation", "href", "https://www.section508.gov/buy-sell/", 1, "usa-nav__link"], ["aria-label", "Content Creation primary navigation", "href", "https://www.section508.gov/create/", 1, "usa-nav__link"], ["aria-label", "Design & Develop primary navigation", "href", "https://www.section508.gov/develop/", 1, "usa-nav__link"], ["aria-label", "Testing primary navigation", "href", "https://www.section508.gov/test/", 1, "usa-nav__link"], ["aria-label", "Training, Tools & Events primary navigation", "href", "https://www.section508.gov/training/", 1, "usa-nav__link"], [1, "usa-nav__secondary"], [1, "usa-nav__secondary-links"], [1, "usa-nav__secondary-item"], ["href", "https://www.section508.gov/blog/"], ["href", "https://www.section508.gov/tools/coordinator-listing/"], ["href", "https://www.section508.gov/about-us/"], ["id", "search_form", "action", "https://search.usa.gov/search", "accept-charset", "UTF-8", "method", "get", 1, "usa-search", "usa-search--small"], ["name", "utf8", "type", "hidden", "value", "\u2713"], ["name", "affiliate", "type", "hidden", "value", "gsa-section508-accessibility"], ["role", "search"], ["for", "extended-search-field-small", 1, "usa-sr-only"], ["id", "extended-search-field-small", "type", "search", "name", "query", "autocomplete", "off", 1, "usa-input", "usagov-search-autocomplete"], ["type", "submit", 1, "usa-button", "primary-background-color"], ["alt", "Search", 1, "usa-search__submit-icon", 3, "src"]], template: function Section508HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10)(13, "li", 11)(14, "a", 12)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Policy & Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11)(18, "a", 13)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Acquisition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11)(22, "a", 14)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Content Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11)(26, "a", 15)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Design & Develop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 11)(30, "a", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11)(34, "a", 17)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Training, Tools & Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18)(38, "ul", 19)(39, "li", 20)(40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Blogs & Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 20)(43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "My Agency\u2019s 508 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 20)(46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 25)(50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27)(52, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Search small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/images/508-logo-cropped-web-altgreen.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/usa-icons/close.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/icons/search-white.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup], styles: [".usa-nav__secondary-item[_ngcontent-%COMP%]::before {\n  color: #ffffff !important;\n  content: \"--\" !important;\n}\n\n@media screen and (max-width: 1023px) {\n  .usa-navbar[_ngcontent-%COMP%], .usa-menu-btn[_ngcontent-%COMP%] {\n    height: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb241MDgtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUFOOztBQUlBO0VBQ0k7SUFDRSxZQUFBO0VBREo7QUFDRiIsImZpbGUiOiJzZWN0aW9uNTA4LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2EtbmF2X19zZWNvbmRhcnktaXRlbSB7XG4gICAgJjo6YmVmb3Jle1xuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgIGNvbnRlbnQ6IFwiLS1cIiAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSAge1xuICAgIC51c2EtbmF2YmFyLCAudXNhLW1lbnUtYnRue1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 340:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/step-indicator/step-indicator.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepIndicatorComponent": () => (/* binding */ StepIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function StepIndicatorComponent_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepIndicatorComponent_li_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "usa-step-indicator__segment--current": a0, "usa-step-indicator__segment--complete": a1 }; };
const _c1 = function (a0, a1) { return { "step-indicator-selected": a0, "truncate": a1 }; };
function StepIndicatorComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepIndicatorComponent_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const stepIndex_r2 = restoredCtx.index; const tab_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.tabSelected(stepIndex_r2, tab_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4)(2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepIndicatorComponent_li_2_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepIndicatorComponent_li_2_span_5_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const stepIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", tab_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r0.activeTab == tab_r1.id, ctx_r0.currentIndex > stepIndex_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", tab_r1.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r0.activeTab == tab_r1.id, tab_r1.name.indexOf(" ") < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentIndex > stepIndex_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentIndex < stepIndex_r2);
} }
class StepIndicatorComponent {
    constructor() {
        //variable to store index of active tab
        this.currentIndex = 0;
        //variable to store id of active tab
        this.activeTab = "";
        //output to calling component
        this.getSelectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        //input from calling component
        this.stepsData = { tabs: [], activeId: '' };
        this.update = false;
    }
    ngOnInit() {
        this.resetStep();
    }
    /**
     * @description sets the style of the tab and emits the index of the selected tab to getSelectedTab
     * @param tabIndex index of the selected tab
     * @param tabId id of the selected tab
     * @returns void
     * @type {(tabIndex:number, tabId:string) => void}
     */
    tabSelected(tabIndex, tabId) {
        this.currentIndex = tabIndex;
        this.activeTab = tabId;
        this.getSelectedTab.emit(tabIndex);
    }
    ngOnChanges(changes) {
        this.resetStep();
    }
    /**
     * @description Set current step.
     */
    resetStep() {
        this.activeTab = this.stepsData.activeId;
        let index = 0;
        for (let tab of this.stepsData.tabs) {
            if (tab.id == this.stepsData.activeId) {
                this.currentIndex = index;
            }
            index++;
        }
    }
}
StepIndicatorComponent.ɵfac = function StepIndicatorComponent_Factory(t) { return new (t || StepIndicatorComponent)(); };
StepIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepIndicatorComponent, selectors: [["atr-step-indicator"]], inputs: { currentIndex: "currentIndex", activeTab: "activeTab", stepsData: "stepsData", update: "update" }, outputs: { getSelectedTab: "getSelectedTab" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["aria-label", "progress", 1, "usa-step-indicator", "usa-step-indicator--counters-sm"], [1, "usa-step-indicator__segments"], ["class", "usa-step-indicator__segment", 3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "usa-step-indicator__segment", 3, "id", "ngClass", "click"], [1, "usa-step-indicator__segment-label"], [1, "step-indicator-button", 3, "title", "ngClass"], ["class", "usa-sr-only", 4, "ngIf"], [1, "usa-sr-only"]], template: function StepIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepIndicatorComponent_li_2_Template, 6, 13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stepsData.tabs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".step-indicator-selected[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #069;\n}\n\n.step-indicator-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0 !important;\n  font-family: arial, sans-serif;\n  cursor: pointer;\n  outline: none !important;\n}\n\n.usa-step-indicator__segment[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.step-indicator-button[_ngcontent-%COMP%]:hover {\n  font-weight: 700;\n  color: rgb(145, 65, 20);\n}\n\n.step-indicator-button[_ngcontent-%COMP%]:focus {\n  font-weight: 700;\n  color: rgb(145, 65, 20);\n}\n\n.truncate[_ngcontent-%COMP%] {\n  width: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSUoiLCJmaWxlIjoic3RlcC1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcC1pbmRpY2F0b3Itc2VsZWN0ZWR7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjojMDY5O1xufVxuLnN0ZXAtaW5kaWNhdG9yLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDsgXG59XG4udXNhLXN0ZXAtaW5kaWNhdG9yX19zZWdtZW50e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGVwLWluZGljYXRvci1idXR0b246aG92ZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjpyZ2IoMTQ1LCA2NSwgMjApO1xufVxuXG4uc3RlcC1pbmRpY2F0b3ItYnV0dG9uOmZvY3Vze1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6cmdiKDE0NSwgNjUsIDIwKTtcbn1cblxuLnRydW5jYXRle1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"] });


/***/ }),

/***/ 7516:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/form-element.interface.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementType": () => (/* binding */ ElementType)
/* harmony export */ });
var ElementType;
(function (ElementType) {
    ElementType["text"] = "text";
    ElementType["checkbox"] = "checkbox";
    ElementType["checkboxGroup"] = "checkboxGroup";
    ElementType["radioButton"] = "radioButton";
    ElementType["radioButtonGroup"] = "radioButtonGroup";
    ElementType["textDisplay"] = "textDisplay";
})(ElementType || (ElementType = {}));


/***/ }),

/***/ 5583:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/art-508-lang/art-508-lang.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Art508LangService": () => (/* binding */ Art508LangService)
/* harmony export */ });
/* harmony import */ var _assets_data_option_language_mapping_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/option-language-mapping.json */ 3961);
/* harmony import */ var _assets_data_508languages_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/data/508languages.json */ 7249);
/* harmony import */ var _assets_data_comp_hardware_keys_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/data/comp-hardware-keys.json */ 6421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class Art508LangService {
    constructor() {
    }
    /**
     * @description get 508 languages by form submission.
     * @param data
     */
    get508Languages(data) {
        let optionKeys = this.getOptionKeys(data, []);
        // Computer hardware
        _assets_data_comp_hardware_keys_json__WEBPACK_IMPORTED_MODULE_2__.forEach(key => {
            for (let k in optionKeys) {
                if (optionKeys[k].includes(key) && !optionKeys.includes("hardware-computer")) {
                    // @ts-ignore
                    optionKeys.push("hardware-computer");
                }
            }
        });
        let mapping = this.getMapping(optionKeys);
        return this.getResultString(mapping);
    }
    /**
     * Get filtered form options array
     *
     * @param data
     * @param optionKeys
     */
    getOptionKeys(data, optionKeys) {
        for (let key in data) {
            let value = data[key];
            if (typeof value !== 'object') {
                if (typeof value === 'string') {
                    // @ts-ignore
                    optionKeys.push(value.trim());
                }
                else if (typeof value === 'boolean' && value) {
                    // @ts-ignore
                    optionKeys.push(key.trim());
                }
            }
            else {
                this.getOptionKeys(value, optionKeys);
            }
        }
        return optionKeys;
    }
    /**
     * Option key to language key mapping.
     *
     * @param optionKeys
     */
    getMapping(optionKeys) {
        let mapping = [];
        for (let key in _assets_data_option_language_mapping_json__WEBPACK_IMPORTED_MODULE_0__) {
            for (let k in optionKeys) {
                if (optionKeys[k].includes(key)) {
                    // @ts-ignore
                    mapping = mapping.concat(_assets_data_option_language_mapping_json__WEBPACK_IMPORTED_MODULE_0__[key]);
                }
            }
        }
        mapping = [...new Set(mapping)];
        mapping.sort();
        return mapping;
    }
    /**
     * Get string language HTML by keys.
     *
     * @param mapping
     */
    getResultString(mapping) {
        let result = "";
        mapping.forEach(langKey => {
            if (langKey in _assets_data_508languages_json__WEBPACK_IMPORTED_MODULE_1__) {
                // @ts-ignore
                result += _assets_data_508languages_json__WEBPACK_IMPORTED_MODULE_1__[langKey];
            }
        });
        return result;
    }
}
Art508LangService.ɵfac = function Art508LangService_Factory(t) { return new (t || Art508LangService)(); };
Art508LangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Art508LangService, factory: Art508LangService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3604:
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/art-content-data/art-content-data.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtContentDataService": () => (/* binding */ ArtContentDataService)
/* harmony export */ });
/* harmony import */ var _assets_data_banner_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/banner.json */ 325);
/* harmony import */ var _assets_data_header_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/data/header.json */ 7121);
/* harmony import */ var _assets_data_footer_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/data/footer.json */ 3761);
/* harmony import */ var _assets_data_update_date_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/data/update-date.json */ 6077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class ArtContentDataService {
    constructor() { }
    /**
     * @description Getting the banner data from the json file
     * @returns title:string, header:string
     */
    getBannerData() {
        return _assets_data_banner_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * @description Getting the header data from the json file
     * @returns string
     */
    getHeader() {
        return _assets_data_header_json__WEBPACK_IMPORTED_MODULE_1__.data;
    }
    /**
     * @description Getting the footer data from the json file
     * @returns title:string, data:string
     */
    getFooter() {
        return _assets_data_footer_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    /**
     * @description Getting the updated date data from the json file
     * @returns string
     */
    getUpdatedDate() {
        return _assets_data_update_date_json__WEBPACK_IMPORTED_MODULE_3__.data;
    }
}
ArtContentDataService.ɵfac = function ArtContentDataService_Factory(t) { return new (t || ArtContentDataService)(); };
ArtContentDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ArtContentDataService, factory: ArtContentDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5767:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/art-ict-lp/art-ict-lp.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtIctLpService": () => (/* binding */ ArtIctLpService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _assets_form_config_ict_lp_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/form-config/ict-lp.config.json */ 5893);
/* harmony import */ var _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/data/buttons.json */ 3373);
/* harmony import */ var _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/data/ict-lp.json */ 5284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class ArtIctLpService {
    constructor() {
        /**
         * @description the maximum number the name character
         */
        this.charCount = 25;
        /**
         * @description Configuration for the ICT Listing Page input field, loading config for one Form
         */
        this.formConfig = _assets_form_config_ict_lp_config_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * @description Generation validation error from the configurations: Only required and maxLength has be configure, additional validations will have ot be added
     * @param strValidation
     * @type string[]
     * @returns ValidationErrors
     */
    generateValidations(strValidation) {
        if (strValidation[0]?.name)
            return strValidation;
        const validations = [];
        strValidation.forEach((eachVal) => {
            if (eachVal.includes("required"))
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
            if (eachVal.includes("maxLength")) {
                const length = eachVal.slice(eachVal.indexOf("(") + 1, eachVal.indexOf(")"));
                this.charCount = +length;
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(this.charCount));
            }
        });
        return validations;
    }
    /**
    * @description the parent will the sent maximum of character to be allowed
    * @return number
    */
    getMaxLength() {
        return this.charCount;
    }
    /**
     * @description Configuration for one form
     * @return: FormTemplateInterface
     */
    getConfigurations() {
        this.formConfig.forEach((eachForm, outterIndex) => {
            eachForm.formElements.forEach((eachElt, index) => {
                eachElt.validations = this.generateValidations(_assets_form_config_ict_lp_config_json__WEBPACK_IMPORTED_MODULE_0__[outterIndex].formElements[index].validations);
            });
        });
        return this.formConfig;
    }
    /**
     * @description Getting the label, the description and destination text for the upload button on the ict listing page
     * @returns IButtonInterface
     */
    getUploadBtn() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__.uploadICT;
    }
    /**
    * @description Getting the label, the description and destination text for the continue button on the ict listing page
    * @returns IButtonInterface
    */
    getContBtl() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__["continue"];
    }
    /**
    * @description Get the error message for the landing page, generated when the number of ICT items has reached the max
    * @returns string
    */
    getErrorMsg() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.errorMessage;
    }
    /**
     * @description Get the section title for the landing page
     * @returns string
     */
    getSectionTitle() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.sectionTitle;
    }
    /**
     * @description Get the error message for Input Label on the ICT page
     * @returns string
     */
    getInputLabel() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.inputLabel;
    }
    /**
  * @description Return the maximum number of items that should be allowed
  * @returns number
  */
    getMaxItems() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.maxItems;
    }
}
ArtIctLpService.ɵfac = function ArtIctLpService_Factory(t) { return new (t || ArtIctLpService)(); };
ArtIctLpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ArtIctLpService, factory: ArtIctLpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6674:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/art-test.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtTestService": () => (/* binding */ ArtTestService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _assets_form_config_test_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/form-config/test.config.json */ 1599);
/* harmony import */ var _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/buttons.json */ 3373);
/* harmony import */ var _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/ict-lp.json */ 5284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class ArtTestService {
    constructor() {
        /**
         * @description Configuration for the ICT Listing Page input field, loading config for one Form
         */
        this.formConfig = _assets_form_config_test_config_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * @description Generation validation error from the configurations: Only required and maxLength has be configure, additional validations will have ot be added
     * @param strValidation
     * @type string[]
     * @returns ValidationErrors
     */
    generateValidations(strValidation) {
        const validations = [];
        strValidation.forEach((eachVal) => {
            if (eachVal.includes("required"))
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
            if (eachVal.includes("maxLength")) {
                const length = eachVal.slice(eachVal.indexOf("(") + 1, eachVal.indexOf(")"));
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(+length));
            }
        });
        return validations;
    }
    /**
     * @description Configuration for one form
     * @return: FormTemplateInterface
     */
    getConfigurations() {
        this.formConfig.forEach((eachForm, outterIndex) => {
            eachForm.formElements.forEach((eachElt, index) => {
                eachElt.validations = this.generateValidations(_assets_form_config_test_config_json__WEBPACK_IMPORTED_MODULE_0__[outterIndex].formElements[index].validations);
            });
        });
        return this.formConfig;
    }
    /**
     * @description Getting the label, the description and destination text for the upload button on the ict listing page
     * @returns IButtonInterface
     */
    getUploadBtn() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__.uploadICT;
    }
    /**
    * @description Getting the label, the description and destination text for the continue button on the ict listing page
    * @returns IButtonInterface
    */
    getContBtl() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__["continue"];
    }
    /**
    * @description Get the error message for the landing page, generated when the number of ICT items has reached the max
    * @returns string
    */
    getErrorMsg() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.errorMessage;
    }
    /**
  * @description Return the maximum number of items that should be allowed
  * @returns number
  */
    getMaxItems() {
        return _assets_data_ict_lp_json__WEBPACK_IMPORTED_MODULE_2__.maxItems;
    }
}
ArtTestService.ɵfac = function ArtTestService_Factory(t) { return new (t || ArtTestService)(); };
ArtTestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ArtTestService, factory: ArtTestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8800:
/*!********************************************************!*\
  !*** ./src/app/shared/services/file-upload.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ict-item/ict-item.service */ 7719);


class FileUploadService {
    constructor(ictItemService) {
        this.ictItemService = ictItemService;
        /**
         * @description the maximum number the name character
         */
        this.charCount = 25;
    }
    /**
     * @param files - list of files selected from file-input component
     * @returns Promise<IFileData> - an object combining error messages and array of valid json objects.
     * @description incoming json files with valid structures will be collected in and array. Any errors will also pushed in another array
     * @type {(files:File[])=> Promise<IFileData>}
     **/
    upload(files) {
        let promises = [];
        for (var file of files) {
            let promise = new Promise((resolve) => {
                let fileName = file.name;
                const fileReader = new FileReader();
                fileReader.readAsText(file, "UTF-8");
                fileReader.onload = (e) => {
                    if (fileReader.result) {
                        var fileData;
                        //there may be chances that the file is not in proper json structure leading to break on parsing.
                        try {
                            fileData = JSON.parse(fileReader.result.toString());
                            if (fileData.name == null || fileData.langKeyWords == null) {
                                resolve({ data: 'JSON structure does not match: ' + fileName, error: true });
                            }
                            else if (fileData.name && fileData.name.length > this.charCount) {
                                resolve({ data: 'The maximum length has exceeded ' + this.charCount, error: true });
                            }
                            else if (this.checkItemDuplicated(fileData.timeStamp)) {
                                resolve({ data: 'This ICT Item has already been uploaded, please select a different ICT Item', error: true });
                            }
                            else {
                                //fileData.timeStamp = Date.now().toString();
                                resolve({ data: fileData });
                            }
                        }
                        catch (error) {
                            resolve({ data: 'JSON structure does not match:: ' + fileName, error: true });
                        }
                    }
                    else {
                        resolve({ data: 'Empty file: ' + fileName, error: true });
                    }
                };
            });
            promises.push(promise);
        }
        return new Promise((resolve) => {
            Promise.all(promises).then((values) => {
                let finalOuput = { errors: [], jsonData: [] };
                let hasError = false;
                for (var value of values) {
                    if (value.error) {
                        hasError = true;
                        finalOuput.errors.push(value.data);
                    }
                    else {
                        finalOuput.jsonData.push(value.data);
                    }
                }
                if (hasError) {
                    finalOuput.jsonData = [];
                }
                resolve(finalOuput);
            });
        });
    }
    /**
     * @param num - number to truncate
     * @param places - number of decimal places
     * @returns number
     * @description function to truncate the decimal number with the given place
     * @type {(num:number, places: number) => number}
     **/
    truncate(num, places) {
        return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
    }
    /**
     * @description the parent will the sent maximum of character to be allowed
     * @param maxLength
     * @type number
     */
    setMaxLength(charCount) {
        this.charCount = charCount;
    }
    /**
     * @description check if a timestamp from the upload json has already been uploaded
     * @params timeStamp
     * @type string
     * @returns boolean
     */
    checkItemDuplicated(timeStamp) {
        return !!this.ictItemService.get().find(eachItem => eachItem.timeStamp === timeStamp);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService)); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1491:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/form-page/form-page.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageService": () => (/* binding */ FormPageService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _assets_form_config_form_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/form-config/form.config.json */ 7126);
/* harmony import */ var _models_form_element_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/form-element.interface */ 7516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class FormPageService {
    constructor() {
        /**
          * @description Configuration for the ICT Listing Page input field, loading config for one Form
          */
        this.formConfig = _assets_form_config_form_config_json__WEBPACK_IMPORTED_MODULE_0__;
        /**
        * @description the maximum number the name character
        */
        this.charCount = 25;
        /**
         * @description identify the form page ot be displayed
         * @type number
         */
        this.formPage = 0;
        /**
         * @description get the form result generated on a form
         */
        this.formResults = {};
    }
    /**
     * @description Configuration for thr form
     * @return: FormTemplateInterface
     */
    getConfigurations() {
        this.formConfig.forEach((eachForm, outterIndex) => {
            eachForm.formElements.forEach((eachElt, index) => {
                eachElt.validations = this.generateValidations(_assets_form_config_form_config_json__WEBPACK_IMPORTED_MODULE_0__[outterIndex].formElements[index].validations);
            });
        });
        return this.formConfig;
    }
    /**
     * @description Set the date for a form
     * @param datat
     * @type {}
     */
    setFormResults(data) {
        this.formResults = data;
    }
    /**
     * @description return the data for a form
     * @returns {}
     */
    getFormResults() {
        return this.formResults;
    }
    /**
    * @description Generation validation error from the configurations: Only required and maxLength has be configure, additional validations will have ot be added
    * @param strValidation
    * @type string[]
    * @returns ValidationErrors
    */
    generateValidations(strValidation) {
        if (strValidation[0]?.name)
            return strValidation;
        const validations = [];
        strValidation.forEach((eachVal) => {
            if (eachVal.includes("required"))
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
            if (eachVal.includes("maxLength")) {
                const length = eachVal.slice(eachVal.indexOf("(") + 1, eachVal.indexOf(")"));
                this.charCount = +length;
                validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(this.charCount));
            }
        });
        return validations;
    }
    /**
     *
     * @description Used to clone and generate form configuration
     * @param formConfig
     * @param text
     * @returns FormTemplateInterface
     */
    generateNewConfig(formConfig, text, eachIctItem) {
        //console.log("ICTInterface-->", eachIctItem.langKeyWords);
        const newCongig = { ...formConfig };
        newCongig.formElements = [...newCongig.formElements];
        newCongig.formElements.forEach((eachFormElement, index) => {
            eachFormElement = { ...eachFormElement };
            newCongig.formElements[index] = { ...eachFormElement };
            if (eachFormElement.options && eachFormElement.options.length > 0) {
                eachFormElement.options = [...eachFormElement.options];
                newCongig.formElements[index].options = [...eachFormElement.options];
                eachFormElement.options.forEach((eachOption, innerIndex) => {
                    // Getting all the result for the form: For file upload or return to form page
                    const tempLang = eachIctItem.langKeyWords;
                    eachOption = { ...eachOption };
                    if (newCongig.formElements[index].options !== undefined) {
                        if (newCongig.formElements[index].options[innerIndex] !== undefined) {
                            newCongig.formElements[index].options[innerIndex] = { ...eachOption };
                        }
                    }
                    // Storing the options the group check box or group radio
                    const options = eachFormElement.options ? [...eachFormElement.options] : null;
                    //TO BE Removed console.log("options-> ", options);
                    // If this element has options, being checkbox group or radio button
                    if (options && options.length > 0) {
                        // Getting the lang object or the option value for this element group
                        const optionLang = tempLang[newCongig.formElements[index].controlName];
                        // if this option has a value or if this element has a value set to true
                        if (optionLang && Object.keys(optionLang).length > 0) {
                            // Capturing the control name an option for the checkbox group or radio button
                            const currentControlName = newCongig.formElements[index].options[innerIndex].controlName;
                            // If we have a radio button
                            if (newCongig.formElements[index].options[innerIndex].elementType !== "checkbox") {
                                //console.log("radioButton");
                                //We can change the controlName of each option because it does not matter eventhough there is a value. What is store on the json file is the controlName of the radioBUtton Group. We just change the options controlName to be different from other form
                                newCongig.formElements[index].options[innerIndex].controlName += text;
                            }
                            else { // if we have a checkbox
                                //console.log("Checkbox");
                                //console.log("No change------------------------------------->", currentControlName);
                                //console.log("optionLang------------------------------------->", optionLang);
                                // We are checking if any lang key saved from the jsonfile includes the controlName of this checkbox option, we want to change the controlName of all the checkbox option, eventhough they have a value, and that name should match the lang key saved before
                                const langKeyControName = Object.keys(optionLang).find(eachLangKey => eachLangKey.includes(currentControlName));
                                //console.log("langKeyControName------------------------------------->", langKeyControName);
                                // If incase we don't find that controlName on th elagn Key, it was not save, so we can give it a random controlName
                                newCongig.formElements[index].options[innerIndex].controlName = langKeyControName || newCongig.formElements[index].options[innerIndex].controlName + text;
                            }
                        }
                        else {
                            // Any option which does not have a value set will have to be givin a radon control name
                            newCongig.formElements[index].options[innerIndex].controlName += text;
                            //console.log("New controlName------------------------------------->",  newCongig.formElements[index].options![innerIndex].controlName);
                        }
                    }
                });
            }
        });
        return { ...newCongig };
    }
    /**
     * @description to retrieve the form page to be displayed
     * @returns number
     */
    navToFormPage() {
        return this.formPage;
    }
    /**
     * @description to update the form page to be displyaed
     * @param index
     * @returns void
     */
    setFormPage(index) {
        this.formPage = index;
    }
    /**
     * @description when the user return from the summary page to the form page, the data should be loaded
     * @returns void
     */
    prepopulateData(formConfig, ictItems) {
        //Getting the config for each from
        formConfig.forEach((eachConfig, index) => {
            //Looping each element of each form
            eachConfig.formElements.forEach(eachElement => {
                // the langkey or data for each form. ex. exemptions-group: {excep-idk-2: true}, hardware-group: {hardware-computer-2: false, hardware-tablet-2: false, hardware-printer-2: false, hardware-multi-func-2: false, hardware-peripheral-2: false, …}ict-group: {it-none-2: true}
                const resultObj = ictItems[index] && ictItems[index].langKeyWords ? { ...ictItems[index].langKeyWords } : {};
                if (resultObj) {
                    //Getting data for each fromControl eg: {excep-idk-2: true}
                    const value = resultObj[eachElement.controlName];
                    if (eachElement.elementType === _models_form_element_interface__WEBPACK_IMPORTED_MODULE_1__.ElementType.checkboxGroup && value) {
                        // a control can have many values for a checkbox. eg [excep-idk-2]
                        const keys = Object.keys(value);
                        // checking if any key is matching an option controlName and assign the value of the key if so
                        keys.forEach((eachKey, outterIndex) => {
                            eachElement.options.forEach((eachOption, innerIndex) => {
                                if (eachKey.includes(eachOption.controlName))
                                    eachOption.value = value[eachKey];
                            });
                        });
                    }
                    if (eachElement.elementType === _models_form_element_interface__WEBPACK_IMPORTED_MODULE_1__.ElementType.text && value) {
                        eachElement.value = value;
                    }
                    if (eachElement.elementType === _models_form_element_interface__WEBPACK_IMPORTED_MODULE_1__.ElementType.radioButtonGroup && value) {
                        const keys = Object.keys(value);
                        eachElement.value = value[keys[0]];
                    }
                }
            });
        });
    }
}
FormPageService.ɵfac = function FormPageService_Factory(t) { return new (t || FormPageService)(); };
FormPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FormPageService, factory: FormPageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7719:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/ict-item/ict-item.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IctItemService": () => (/* binding */ IctItemService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IctItemService {
    constructor() {
        this.ictItem = [];
    }
    /**
     * @description function to return any ICT items
     * @returns ICTInterface[]
     */
    get() {
        return JSON.parse(JSON.stringify(this.ictItem));
    }
    /**
     * @description function to assign a value to an ICT item
     * @param items
     * @return void
     * @type ICTInterface[]
     */
    set(items) {
        this.ictItem.push(...items);
    }
    /**
    * @description function to reassign updated set of data to items
    * @params items
    * @return void
    * @type ICTInterface[]
    */
    reSet(items) {
        this.ictItem = items;
    }
}
IctItemService.ɵfac = function IctItemService_Factory(t) { return new (t || IctItemService)(); };
IctItemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IctItemService, factory: IctItemService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3330:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/landing-page/landing-page.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageService": () => (/* binding */ LandingPageService),
/* harmony export */   "NextPage": () => (/* binding */ NextPage)
/* harmony export */ });
/* harmony import */ var _assets_data_lp_button_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/lp-button.json */ 8296);
/* harmony import */ var _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/data/buttons.json */ 3373);
/* harmony import */ var _assets_data_sample_procurement_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/data/sample-procurement.json */ 4209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class LandingPageService {
    constructor() {
        /**
         * @description store the value for the destination or next page
         * @type string
         */
        this.destination = NextPage.none;
    }
    /**
     * @description Getting the title header text and upload button description used on the landing page from the json file
     * @returns {buttonHeader:string}
     */
    getLpButtonData() {
        return _assets_data_lp_button_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * @description Getting the label, the description and destination text for the get started button on the landing page
     * @returns IButtonInterface
     */
    getLpGetStrBtn() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__.getStarted;
    }
    /**
     * @description Getting the label, the description and destination text for the upload json button on the landing page
     * @returns IButtonInterface
     */
    getLpUplBtn() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__.uploadICT;
    }
    /**
     * @description Getting the data for the Sample Procurement Language in 3 Steps in the json file
     * @returns string
     */
    getSampleProLang() {
        return _assets_data_sample_procurement_json__WEBPACK_IMPORTED_MODULE_2__.data;
    }
    /**
     * @description used to update the destination
     * @param nextPage
     * @type NextPage
     */
    setNextPage(nextPage) {
        this.destination = nextPage;
    }
    /**
     * @description used to update the destination
     * @return NextPage
     */
    getNextPage() {
        return this.destination;
    }
}
LandingPageService.ɵfac = function LandingPageService_Factory(t) { return new (t || LandingPageService)(); };
LandingPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LandingPageService, factory: LandingPageService.ɵfac, providedIn: 'root' });
var NextPage;
(function (NextPage) {
    NextPage["getStarted"] = "getStarted";
    NextPage["uploadICT"] = "uploadICT";
    NextPage["none"] = "";
})(NextPage || (NextPage = {}));


/***/ }),

/***/ 1589:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/templates/art-form-template/art-form-template.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtFormTemplateComponent": () => (/* binding */ ArtFormTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/form-element.interface */ 7516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ict-item/ict-item.service */ 7719);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/art-button/art-button.component */ 6703);
/* harmony import */ var _components_art_side_navigation_art_side_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/art-side-navigation/art-side-navigation.component */ 2796);
/* harmony import */ var _components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/art-text-field/art-text-field.component */ 3150);
/* harmony import */ var _components_art_radiobutton_group_art_radiobutton_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/art-radiobutton-group/art-radiobutton-group.component */ 1556);
/* harmony import */ var _components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/art-save-json/art-save-json.component */ 5632);
/* harmony import */ var _components_art_checkbox_group_art_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/art-checkbox-group/art-checkbox-group.component */ 8727);














function ArtFormTemplateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "art-side-navigation", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sideMenu", ctx_r0.sideMenu);
} }
const _c0 = function () { return { "margin-top-3": "index!==first" }; };
function ArtFormTemplateComponent_div_3_div_3_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 16)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const eachFormConfig_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](eachFormConfig_r3.formElements[index_r10].formSection);
} }
function ArtFormTemplateComponent_div_3_div_3_div_2_art_text_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "art-text-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("eltClicked", function ArtFormTemplateComponent_div_3_div_3_div_2_art_text_field_1_Template_art_text_field_eltClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const outerIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.onElementClick($event, outerIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const index_r10 = ctx_r23.index;
    const eachControl_r9 = ctx_r23.$implicit;
    const eachFormConfig_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formData", eachFormConfig_r3.formElements[index_r10])("hidden", false)("control", eachControl_r9);
} }
function ArtFormTemplateComponent_div_3_div_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "art-radiobutton-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("eltClicked", function ArtFormTemplateComponent_div_3_div_3_div_2_div_2_Template_art_radiobutton_group_eltClicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const outerIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.onElementClick($event, outerIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const index_r10 = ctx_r28.index;
    const eachControl_r9 = ctx_r28.$implicit;
    const eachFormConfig_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formData", eachFormConfig_r3.formElements[index_r10])("hidden", false)("formGroup", eachControl_r9);
} }
function ArtFormTemplateComponent_div_3_div_3_div_2_art_checkbox_group_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "art-checkbox-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("eltClicked", function ArtFormTemplateComponent_div_3_div_3_div_2_art_checkbox_group_3_Template_art_checkbox_group_eltClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const outerIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.onElementClick($event, outerIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const index_r10 = ctx_r33.index;
    const eachControl_r9 = ctx_r33.$implicit;
    const eachFormConfig_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formData", eachFormConfig_r3.formElements[index_r10])("formGroup", eachControl_r9)("dataUpdated", ctx_r18.eltUpdated);
} }
function ArtFormTemplateComponent_div_3_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ArtFormTemplateComponent_div_3_div_3_div_2_art_text_field_1_Template, 1, 3, "art-text-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ArtFormTemplateComponent_div_3_div_3_div_2_div_2_Template, 2, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ArtFormTemplateComponent_div_3_div_3_div_2_art_checkbox_group_3_Template, 1, 3, "art-checkbox-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const eachFormConfig_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", eachFormConfig_r3.formElements[index_r10].elementType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", eachFormConfig_r3.formElements[index_r10].elementType === "radioButtonGroup" && !eachFormConfig_r3.formElements[index_r10].hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", eachFormConfig_r3.formElements[index_r10].elementType === "checkboxGroup" && !eachFormConfig_r3.formElements[index_r10].hidden);
} }
function ArtFormTemplateComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ArtFormTemplateComponent_div_3_div_3_h2_1_Template, 3, 3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ArtFormTemplateComponent_div_3_div_3_div_2_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const outerIndex_r4 = ctx_r36.index;
    const eachFormConfig_r3 = ctx_r36.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "form-section-", ctx_r6.controlList.length * outerIndex_r4 + index_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !eachFormConfig_r3.formElements[index_r10].hidden && eachFormConfig_r3.formElements[index_r10].formSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !eachFormConfig_r3.formElements[index_r10].hidden);
} }
function ArtFormTemplateComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function ArtFormTemplateComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const outerIndex_r4 = ctx_r37.index;
    const eachFormConfig_r3 = ctx_r37.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "art-add-btn for index ", outerIndex_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r8.formList[outerIndex_r4].valid || ctx_r8.formList[outerIndex_r4].value === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", eachFormConfig_r3.formButtons.add, " ");
} }
const _c1 = function (a0, a1) { return { "ogp-display-none": a0, "ogp-display-bloc": a1 }; };
const _c2 = function (a0, a1, a2) { return { "flex-row": a0, "flex-align-end": a1, "flex-column": a2 }; };
function ArtFormTemplateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ArtFormTemplateComponent_div_3_Template_form_ngSubmit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const outerIndex_r4 = restoredCtx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.onFormSubmit(outerIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ArtFormTemplateComponent_div_3_div_3_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ArtFormTemplateComponent_div_3_div_4_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ArtFormTemplateComponent_div_3_button_5_Template, 2, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachFormConfig_r3 = ctx.$implicit;
    const outerIndex_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](8, _c1, outerIndex_r4 !== ctx_r1.navIndex, outerIndex_r4 === ctx_r1.navIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.formList[outerIndex_r4])("hidden", outerIndex_r4 !== ctx_r1.navIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", outerIndex_r4 !== ctx_r1.navIndex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](11, _c2, eachFormConfig_r3.formButtons.add, eachFormConfig_r3.formButtons.add, !eachFormConfig_r3.formButtons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.allControlList[outerIndex_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", eachFormConfig_r3.formButtons.add);
} }
function ArtFormTemplateComponent_div_4_art_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "art-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtFormTemplateComponent_div_4_art_button_3_Template_art_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.navNextForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonData", ctx_r40.nextButton);
} }
function ArtFormTemplateComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtFormTemplateComponent_div_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.onFormSubmit(0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r41.formConfig[0].formButtons.submit, " ");
} }
const _c3 = function () { return { btnName: "Save for later (.json)", fileName: "jsonData.json" }; };
function ArtFormTemplateComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "art-save-json", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("saveAsInfo", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c3))("ictItem", ctx_r42.currentFormData);
} }
function ArtFormTemplateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "div")(2, "art-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArtFormTemplateComponent_div_4_Template_art_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.navBackForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ArtFormTemplateComponent_div_4_art_button_3_Template, 1, 1, "art-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ArtFormTemplateComponent_div_4_button_4_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ArtFormTemplateComponent_div_4_div_5_Template, 2, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r2.navIndex === 0)("buttonData", ctx_r2.backButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.navIndex <= ctx_r2.formConfig.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.navIndex === ctx_r2.formConfig.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.formConfig[0].formButtons.submit);
} }
class ArtFormTemplateComponent {
    constructor(fb, router, ictItemService) {
        this.fb = fb;
        this.router = router;
        this.ictItemService = ictItemService;
        /**
         * @description An array of forms. Can have any any number of form, each form having its own sent of controls
         * @type Array<FormGroup>
         */
        this.formList = [];
        /**
         * @description All the elements for all any number of forms
         * @type Double array of FormControl
         */
        this.formElements = [[], []];
        /**
         * @description Will use the ElementType enum to enforce specific type of elements already predefined
         * @type
         */
        this.elementType = src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType;
        /**
         * @description To flag when all the forms have been completed
         * @type boolean[]
         */
        this.formCompletetion = [];
        /**
         * @description the button to navigate to the previous form
         * @type IButtonInterface
         */
        this.backButton = { label: "Previous ICT", ariaLabel: "navigate to the previous form", btnClass: "base", action: () => { } };
        /**
         * @description the button to navigate to the next form
         * @type IButtonInterface
         */
        this.nextButton = { label: "Next ICT", ariaLabel: "navigate to the next form", btnClass: "base", action: () => { } };
        /**
         * @type number
         * @description tracking the page navigation
         */
        this.navIndex = 0;
        /**
         * @description Generate side navigation
         * @type ArtSideMenuInterface
         */
        this.sideMenu = {
            sideNavItems: [],
            activeId: 0
        };
        /**
         * Used to trigger an component to run ngOnchange when an object was been updated but not flagged by angular
         */
        this.eltUpdated = false;
        /**
         * @description This input from the parent will provide all the configuration for the forms and elements which will be created
         * @type FormTemplateInterface
         */
        this.formConfig = [];
        /**
         * @description to display loading section
         */
        this.loading = false;
        /**
         * @description Navigation page index.
         */
        this.pageIndex = 0;
        /**
         * @description Will return the data to the parent for only 1 form after form submission
         * @type FormData[]
         */
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        /**
         * @type EventEmitter
         * @description to track the page number on the form.
         */
        this.pageNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        /**
         * @type ICTInterface
         * @description get the current formData on the form
         */
        this.currentFormData = { name: "", timeStamp: "", langKeyWords: {} };
        /**
         * @description holding all the control list data
         * @type any[][]
         */
        this.allControlList = [];
        /**
         * @description Used to identified which form is being used
         * @type number
         */
        this.formControlIndex = 0;
    }
    /**
     * @description will listening to any input property change, will capture if a disable property for a form has been update to disable or enable that form
     * @returns void
     */
    ngOnChanges() {
        //looping each form to check if it has been set to disable or enable by its parent
        this.formConfig.forEach((eachConfig, outerIndex) => {
            if (this.formList[outerIndex]) {
                if (this.formConfig[outerIndex].disable)
                    this.formList[outerIndex].disable();
                if (this.formConfig[outerIndex] && !this.formConfig[outerIndex].disable)
                    this.formList[outerIndex].enable();
            }
        });
        this.navIndex = this.pageIndex;
        this.sideNavConfig();
    }
    /**
     * @description Form Initialization
     * @returns void
     */
    ngOnInit() {
        // Setting each Form
        this.formConfig.forEach((eachConfig, outerIndex) => {
            //Init  each form
            this.formList.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({}));
            //Initialize form
            this.formCompletetion.push(false);
            //Only for debugging TOBE REMOVED
            this.formList[outerIndex].valueChanges.subscribe((data) => {
                //clearHiddenElts should be run first to clear and removed the data which was displayed when another option is clicked before any other element should be displayed 
                setTimeout(() => {
                    this.updateDownloadData();
                    //Loop all the field and display any elements which are needed based on the user answer
                    this.autoDisplayFields(outerIndex);
                    this.sideNavConfig();
                    this.loading = false;
                }, 1000);
            });
            //create controls elements for each form
            eachConfig.formElements.forEach((eachFormElement, index) => {
                if (eachFormElement.elementType === src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text) {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(eachFormElement.value, eachFormElement.validations));
                }
                else {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({}));
                    const k = { ...this.formList[outerIndex] };
                }
            });
            this.allControlList.push([]);
            Object.keys(this.formList[this.formControlIndex].controls).forEach(key => {
                this.allControlList[outerIndex].push(this.formList[outerIndex].controls[key]);
            });
            // Check if a form needs to be disabled based on its config or parent request. It should be if the ICT lp has 10 ICT items 
            if (this.formConfig[outerIndex].disable)
                this.formList[outerIndex].disable();
        });
        this.sideNavConfig();
    }
    /**
     *
     * @param elt
     * @type any
     * @param outerIndex
     * @description Capture the element the user click on and call the clearHiddenElts to clear and hide any other element which might be open on other options
     */
    onElementClick(elt, outerIndex) {
        this.loading = true;
        //Parent control of the element selected
        const parentControl = this.formConfig[outerIndex].formElements.find(data => {
            const result = data.options?.find(eachOption => {
                return eachOption.controlName === elt.controlName;
            });
            return result;
        });
        //If an element is clicked and it is not a page load, get the formElement data for that element. It will always stored the latest element selected adn will only be updated if a n element is selected
        if (elt && elt.controlName) {
            this.elementSelected = parentControl?.options?.find(eachElt => eachElt.controlName === elt.controlName);
        }
        //Except the option the user clicked on, all other option children will be clear out and hidden until the children element has done as next property "done" 
        this.clearHiddenElts(outerIndex, parentControl, elt.controlName);
    }
    /**
     * @description To check if an object has any value which is true
     * @param obj
     * @returns boolean
     */
    objectNotNull(obj) {
        const tempObj = JSON.parse(JSON.stringify(obj));
        // If it is not an object, for the text element
        if (tempObj === null)
            return false;
        const keys = Object.keys(tempObj);
        const data = keys.filter(eachKey => {
            return tempObj[eachKey];
        });
        return data.length > 0;
    }
    /**
     * @description from the list of all the formElement, it should return the formElement based on the controlName and index of the Form
     * @param index
     * @param controlName
     * @returns FormElement | undefined
     */
    findFormElement(index, controlName) {
        return controlName ? this.formConfig[index].formElements.find(eachElt => eachElt.controlName === controlName) : undefined;
    }
    /**
     * @description from the group element all the children of each element will be cleared and hidden except the element the user just selected.
     * @param index
     * @param parentElt
     * @param eltSelectedName
     */
    clearHiddenElts(index, parentElt, eltSelectedName) {
        //Getting the group of the option selected | e.g ict-group
        const parentControl = this.formList[index].get(parentElt.controlName);
        //Getting all the option of that group {it-prod:false,it-serv:true ,it-none:false}
        const vals = JSON.parse(JSON.stringify(parentControl.value));
        /**
         *  - this.objectNotNull(vals) => At least a  value should not be null on the current element. For user selection
         *  - eltSelectedName === "" => for recurssion or form on load, no direct click by the user
         *  - the group or formGroup should can be null if it is a text
         * */
        if (this.objectNotNull(vals) || eltSelectedName === "" || (vals === null && parentElt?.elementType === src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text)) { //for recursion, because the children of children will not be selected
            /**
             * the parent/group has many options, on the user click on one option, we want to cancel and hide them all next of each option
             * We are looping through all the option of the group
             * */
            parentElt.options.forEach(parentOption => {
                // From on option of the group, we are getting the group element it will open if a user have selected that option
                const nextElt = parentOption.next;
                // From on option of the group, we are getting the group element that will be open along with the nextElt element. Can be null, only one element options under exemptions-group has it now
                const nextEltAdd = parentOption.additionalNext;
                //Getting the FormElement for group element that will be opened if a user selected on option on the group element/parent
                const tempFormElt = this.findFormElement(index, nextElt);
                //The formElement of the groupElement that would be hidden with tempFormElt 
                const tempFormEltAdd = nextEltAdd ? this.findFormElement(index, nextEltAdd[0] ? nextEltAdd[0] : "") : null;
                /*
                * Even though it is the same control name, all need to be clear, until autoDisplayFields redisplay them and it should not be the last item and shouldn't be hidden
                * To clear anf hide that group element
                * - It shouldn't be done, the end of the question
                * - That element should not be already hidden unless the element to removed along with it exits
                *
                **/
                if (nextElt !== 'done' && (tempFormElt?.hidden === false || tempFormEltAdd)) {
                    // If the element that need to be hideen along exits, hide it. 
                    if (tempFormEltAdd)
                        tempFormEltAdd.hidden = true;
                    // Clearing all the data for the other option child
                    this.formList[index].get(nextElt)?.reset();
                    // Going to all the formElement
                    this.formConfig[index].formElements.forEach(eachElement => {
                        //If the element matching the next element
                        if (eachElement.controlName === nextElt) {
                            // WE should hide that element and enable any element which might have been disabled
                            eachElement.hidden = true;
                            // Only when the has a direct click, and one option of the group element from that element an additionAll next
                            if (this.elementSelected && this.elementSelected.additionalNext && this.elementSelected.additionalNext.length > 0) {
                                //We are checking if that controlName is matching any controlName in our list and hide it.
                                this.formConfig[index].formElements.forEach((elt, eltIndex) => {
                                    if (elt.controlName === this.elementSelected?.additionalNext[0])
                                        elt.hidden = true;
                                });
                            }
                            this.formList[index].get(eachElement.controlName)?.enable();
                            // check if any next of each options on the element hidden has a value
                            this.clearHiddenElts(index, tempFormElt, "");
                        }
                    });
                }
            });
        }
    }
    /**
     * @description to auto display controls on the form
     * @params number
     * @Type number
     * @returns void
     */
    autoDisplayFields(outerIndex) {
        //Looping to all the elements on the form
        this.formConfig[outerIndex].formElements.forEach(eachElement => {
            //If any elements has a value set or if the user selected a value
            if ((eachElement.elementType === src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text && this.formList[outerIndex].value[eachElement.controlName]) ||
                (eachElement.elementType !== src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text &&
                    this.formList[outerIndex].value[eachElement.controlName] &&
                    Object.keys(this.formList[outerIndex].value[eachElement.controlName]).length > 0 &&
                    Object.keys(this.formList[outerIndex].value[eachElement.controlName]).find(key => !!this.formList[outerIndex].value[eachElement.controlName][key]))) {
                // If the field selected is not a text
                if (eachElement.elementType !== src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text) {
                    // All the form(all elements on the form) key value are stored
                    const formKeysValues = this.formList[outerIndex].value[eachElement.controlName]; //{sot-type: 'red'} or {sof-type:true, elec-com:false ...}
                    //Only extract the keys from the form results which have values
                    const allKeysWithValues = Object.keys(formKeysValues).filter(key => !!formKeysValues[key]); // one or many keys have a value [fot-type, elec-com]
                    //Only extract the values which have been selected by the user input
                    const values = allKeysWithValues.map(eachVal => formKeysValues[eachVal]);
                    const eltSelected = [];
                    //Going over all the values selected
                    values.forEach((eachVal, indexVal) => {
                        /*
                         * Storing the list of all the elements the users interacted with. for radio or checkbox
                         * WHen a user clicked on a control. It can capture the option with value by matching the element name with all values(key is the controlname) stored in   allKeysWithValues
                        **/
                        const optWithValue = eachElement.options.find((elt, index) => elt.controlName === allKeysWithValues[indexVal]);
                        /*
                         * elt.value === eachVal is for prepopulated scenarious, when a user navigates back on the page.
                         * we can directly get the value from the value property because all the elt has been updated
                         * this option is needed only if the controlForm has not value, nothing has been selected by the user
                        **/
                        const optWithValuePrepo = eachElement.options.find((elt, index) => elt.value === eachVal);
                        //Storing all the element selected, or having values on page loaded
                        eltSelected.push(optWithValue ? optWithValue : optWithValuePrepo);
                        //Parent control of the element selected
                        const parentControl = this.formConfig[outerIndex].formElements.find(data => {
                            const result = data.options?.find(eachOption => {
                                return eachOption.controlName === eltSelected[0].controlName;
                            });
                            return result;
                        });
                        // For any option element having additionNext field set up
                        let additionNext = [];
                        //Based on the element selected, capture the next value and setting it to visible
                        this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) => {
                            if (eltSelected[indexVal] && eltSelected[indexVal].next && elt.controlName.includes(eltSelected[indexVal].next)) {
                                elt.hidden = false;
                                //if another element should be display at the same time of the current element, we are saving that element
                                if (eltSelected[indexVal].additionalNext && eltSelected[indexVal].additionalNext.length > 0) {
                                    additionNext = eltSelected[indexVal].additionalNext;
                                }
                            }
                            if (eltSelected[indexVal].next === 'done') {
                                this.formCompletetion[outerIndex] = true;
                            }
                            else
                                this.formCompletetion[outerIndex] = false;
                        });
                        // Looping to all the element t be displayed as well. For now ont one item on the array
                        this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) => {
                            if (elt.controlName === additionNext[0])
                                elt.hidden = false;
                        });
                    });
                }
                else {
                    // All the form(all elements on the form) key value are stored
                    const value = this.formList[outerIndex].value[eachElement.controlName]; //{sot-type: 'red'} or {sof-type:true, elec-com:false ...}
                    let eltSelected;
                    //Going over all the values selected
                    // Storing the list of all the elements the users interacted with. for radio or checkbox
                    eltSelected = eachElement;
                    //Based on the element selected, capture the next value and setting it to visible
                    this.formConfig[outerIndex].formElements.forEach((elt, eltIndex) => {
                        if (eltSelected && eltSelected.next && elt.controlName.includes(eltSelected.next)) {
                            elt.hidden = false;
                        }
                    });
                }
            }
        });
    }
    /**
     * @description Will be called on a form submission button being clicked. And will emit the data to its parent
     * @param index
     * @rerun void
     */
    onFormSubmit(index) {
        const data = this.formList.map(eachForm => eachForm.value);
        this.formData.emit(data);
        //Will reset the form based on the its configuration
        if (this.formConfig[index].clearForm)
            this.formList[index].reset();
        if (this.formCompletetion.find(eachComp => !eachComp) === false && !this.formConfig[0].formButtons.add)
            alert("One or more of your ICT items are incomplete. Are you sure you wish to continue?");
    }
    /**
     * @description For each form it will get all the control elements and return it as an array to be looped on the html
     * @returns FormControl[]
     */
    get controlList() {
        //Should not be go over the maximum number for forms set up.
        if (this.formControlIndex >= this.formList.length)
            this.formControlIndex = 0;
        const result = [];
        //Getting controls elements for a specific form
        Object.keys(this.formList[this.formControlIndex].controls).forEach(key => {
            result.push(this.formList[this.formControlIndex].controls[key]);
        });
        this.formControlIndex++;
        return (result);
    }
    /**
     * @description on page reset
     * @return void
     */
    onReset() {
        this.formList[this.navIndex].reset();
    }
    /**
     * @description to navigate to the previous form page
     * @returns void
     */
    navBackForm() {
        if (this.navIndex > 0) {
            if (this.formCompletetion[this.navIndex] === false)
                alert("Are you sure you want to move to the previous item? The form is incomplete.");
            this.navIndex--;
            this.pageNumber.emit(this.navIndex);
            this.updateDownloadData();
            document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    /**
     * @description Based on the current form page, the data to be downloaded should be updated
     * @return void
     */
    updateDownloadData() {
        //this is updated whenever the object is updated so the other component can render that object update
        this.eltUpdated = !this.eltUpdated;
        if (this.ictItemService.get() && this.ictItemService.get()[this.navIndex] && this.formList[this.navIndex] && this.formList[this.navIndex].value) {
            this.currentFormData = {
                name: this.ictItemService.get()[this.navIndex].name,
                timeStamp: Date.now().toString(),
                langKeyWords: this.formList[this.navIndex].value
            };
        }
    }
    /**
     * @description to navigate to the next form page
     * @returns void
     */
    navNextForm() {
        if (this.navIndex < this.formConfig.length - 1) {
            if (this.formCompletetion[this.navIndex] === false)
                alert("Are you sure you want to move to the next item? The form is incomplete.");
            this.navIndex++;
            this.pageNumber.emit(this.navIndex);
            this.updateDownloadData();
        }
        document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    sideNavConfig() {
        //side navigation configuration
        this.sideMenu.sideNavItems = [];
        this.formConfig[this.pageIndex].formElements.forEach((formElement, index) => {
            if (formElement.formSection && !formElement.hidden) {
                this.sideMenu.sideNavItems.push({
                    id: this.formConfig[this.pageIndex].formElements.length * this.pageIndex + index,
                    name: formElement.menuItem ? formElement.menuItem : formElement.formSection
                });
            }
        });
    }
    /**
     * @description Get array on menu IDs.
     * @return array
     */
    getMenuIds() {
        let ids = [];
        this.sideMenu.sideNavItems.forEach(item => {
            ids.push(item.id);
        });
        return ids;
    }
    /**
     * @description Windows scroll listener for set current side menu link as active.
     */
    onWindowScroll() {
        const allSections = document.querySelectorAll(`.form-section`);
        let currLink = -1;
        allSections.forEach((section, index) => {
            let pos = section.getBoundingClientRect();
            if (pos.bottom > 20 && currLink < 0 && this.getMenuIds().includes(index)) {
                currLink = this.sideMenu.activeId = index;
            }
        });
    }
}
ArtFormTemplateComponent.ɵfac = function ArtFormTemplateComponent_Factory(t) { return new (t || ArtFormTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_1__.IctItemService)); };
ArtFormTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ArtFormTemplateComponent, selectors: [["art-form-template"]], hostBindings: function ArtFormTemplateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function ArtFormTemplateComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, inputs: { formConfig: "formConfig", scanChange: "scanChange", pageIndex: "pageIndex" }, outputs: { formData: "formData", pageNumber: "pageNumber" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "grid-row"], ["class", "tablet:grid-col-3 margin-bottom-3 tablet:margin-bottom-0 tablet:margin-right-6", 4, "ngIf"], [1, "tablet:grid-col-8", "tablet:margin-bottom-0"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "ogp-flex", 4, "ngIf"], [1, "tablet:grid-col-3", "margin-bottom-3", "tablet:margin-bottom-0", "tablet:margin-right-6"], [3, "sideMenu"], [3, "ngClass"], [3, "formGroup", "hidden", "ngSubmit"], [1, "grid-row", 3, "hidden", "ngClass"], ["class", "form-section", 3, "id", 4, "ngFor", "ngForOf"], ["tabindex", "0", "aria-label", "Content is loading, additional information is being displayed", "class", "ogp-flex-center", 4, "ngIf"], ["aria-label", "Add an ICT Item", "class", "usa-button usa-button--accent-warm art-add-btn", "type", "submit", 3, "disabled", "id", 4, "ngIf"], [1, "form-section", 3, "id"], ["tabindex", "0", "class", "font-sans-lg  margin-bottom-2", 3, "ngClass", 4, "ngIf"], ["class", "margin-top-2", 4, "ngIf"], ["tabindex", "0", 1, "font-sans-lg", "margin-bottom-2", 3, "ngClass"], [1, "margin-top-2"], [3, "formData", "hidden", "control", "eltClicked", 4, "ngIf"], [4, "ngIf"], [3, "formData", "formGroup", "dataUpdated", "eltClicked", 4, "ngIf"], [3, "formData", "hidden", "control", "eltClicked"], [3, "formData", "hidden", "formGroup", "eltClicked"], [3, "formData", "formGroup", "dataUpdated", "eltClicked"], ["tabindex", "0", "aria-label", "Content is loading, additional information is being displayed", 1, "ogp-flex-center"], [1, "lds-ripple"], ["aria-label", "Add an ICT Item", "type", "submit", 1, "usa-button", "usa-button--accent-warm", "art-add-btn", 3, "disabled", "id"], [1, "ogp-flex"], [1, "", 3, "disabled", "buttonData", "click"], ["class", "ogp-btn", 3, "buttonData", "click", 4, "ngIf"], ["class", "ogp-btn usa-button usa-button--accent-warm", "type", "submit", 3, "disabled", "click", 4, "ngIf"], ["class", "ogp-btn", 4, "ngIf"], [1, "ogp-btn", 3, "buttonData", "click"], ["type", "submit", 1, "ogp-btn", "usa-button", "usa-button--accent-warm", 3, "disabled", "click"], [1, "ogp-btn"], [3, "saveAsInfo", "ictItem"]], template: function ArtFormTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ArtFormTemplateComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ArtFormTemplateComponent_div_3_Template, 7, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ArtFormTemplateComponent_div_4_Template, 6, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sideMenu.sideNavItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.formConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.router.url.includes("form-page"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__.ArtButtonComponent, _components_art_side_navigation_art_side_navigation_component__WEBPACK_IMPORTED_MODULE_3__.ArtSideNavigationComponent, _components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_4__.ArtTextFieldComponent, _components_art_radiobutton_group_art_radiobutton_group_component__WEBPACK_IMPORTED_MODULE_5__.RadiobuttonGroupComponent, _components_art_save_json_art_save_json_component__WEBPACK_IMPORTED_MODULE_6__.ArtSaveJsonComponent, _components_art_checkbox_group_art_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__.ArtCheckboxGroupComponent], styles: [".art-add-btn[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n@media screen and (max-width: 414px) {\n  .art-add-btn[_ngcontent-%COMP%] {\n    width: 15rem;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    margin-top: 0.75rem;\n  }\n}\n.ogp-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 414px) {\n  .ogp-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.ogp-display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n.ogp-display-bloc[_ngcontent-%COMP%] {\n  display: block;\n}\n.ogp-flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 414px) {\n  .ogp-btn[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    margin-right: 0rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBTEo7SUFNTyxZQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQ0FBQTtJQUNBLG1CQUFBO0VBRUw7QUFDRjtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQUhKO0lBSVEsc0JBQUE7RUFJTjtBQUNGO0FBREE7RUFDSSxhQUFBO0FBSUo7QUFEQTtFQUNJLGNBQUE7QUFJSjtBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQURBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLDZCQUFBO0VBSU47QUFDRiIsImZpbGUiOiJhcnQtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnQtYWRkLWJ0bntcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuXG4gICAgQG1lZGlhICBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgIHdpZHRoOiAxNXJlbTsgXG4gICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgIG1hcmdpbi10b3A6IC43NXJlbTtcbiAgICB9XG59XG5cbi5vZ3AtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAbWVkaWEgIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4ub2dwLWRpc3BsYXktbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2dwLWRpc3BsYXktYmxvY3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9ncC1mbGV4LWNlbnRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhICBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5vZ3AtYnRue1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlPath: "/preview/gsa/section508.gov/development-art/art"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7249:
/*!*******************************************!*\
  !*** ./src/assets/data/508languages.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"E201.1":"<p>    <strong>E201.1 Scope</strong> ICT that is procured, developed, maintained, or used by agencies shall conform to the Revised 508 Standards.</p>","E202.1":"<p>    <strong>E202.1 General</strong> ICT shall be exempt from compliance with the Revised 508 Standards to the extent specified by E202.</p>","E202.2":"<p>    <strong>E202.2 Legacy ICT</strong> Any component or portion of existing ICT that complies with an earlier standard issued pursuant to Section 508 of the Rehabilitation Act of 1973, as amended (as republished in Appendix D), and that has not been altered on or after January 18, 2018, shall not be required to be modified to conform to the Revised 508 Standards.  </p>","E202.3":"<p>    <strong>E202.3 National Security</strong> The Revised 508 Standards do not apply to ICT operated by agencies as part of a national security system, as defined by 40 U.S.C. 1103(a).  </p>","E202.4":"<p>    <strong>E202.4 Federal Contracts</strong> ICT acquired by a contractor incidental to a contract shall not be required to conform to the Revised 508 Standards.  </p>","E202.5":"<p>    <strong>E202.5 ICT Functions Located in Maintenance or Monitoring Spaces</strong> Where status indicators and operable parts for ICT functions are located in spaces that are frequented only by service personnel for maintenance, repair, or occasional monitoring of equipment, such status indicators and operable parts shall not be required to conform to the Revised 508 Standards.  </p>","E202.6":"<p>    <strong>E202.6 Undue Burden or Fundamental Alteration</strong> Where an agency determines in accordance with E202.5 that conformance to requirements in the Revised 508 Standards would impose an undue burden or would result in a fundamental alteration in the nature of the ICT, conformance shall be required only to the extent that it does not impose an undue burden, or result in a fundamental alteration in the nature of the ICT.  </p>","E202.7":"<p>    <strong>E202.7 Best Meets.</strong> Where ICT conforming to one or more requirements in the Revised 508 Standards is not commercially available, the agency shall procure the ICT that best meets the Revised 508 Standards consistent with the agency’s business needs  </p>    <p>    <strong>E202.7.1 Required Documentation. </strong>The responsible agency official shall document in writing: (a) the non-availability of conforming ICT, including a description of market research performed and which provisions cannot be met, and (b) the basis for determining that the ICT to be procured best meets the requirements in the Revised 508 Standards consistent with the agency’s business needs.  </p>    <p>    <strong>E202.7.2 Alternative Means. </strong>Where ICT that fully conforms to the Revised 508 Standards is not commercially available, the agency shall provide individuals with disabilities access to and use of information and data by an alternative means that meets identified needs.  </p>","E204.1":"<p>    <strong>E204 - Functional Performance Criteria (A: Chapt 2) </strong>  </p>    <p>    <strong>E204.1 General. </strong> Where the requirements in Chapters 4 and 5 do not address one or more functions of ICT, the functions not addressed shall conform to the Functional Performance Criteria specified in Chapter 3.  </p>","E205.1":"<p>    <strong>E205.1 General</strong> Electronic content shall comply with E205.  </p>","E205.2":"<p>    <strong>E205.2 Public Facing</strong> Electronic content that is public facing shall conform to the accessibility requirements specified in E205.4.  </p>","E205.3":"<p>    <strong>E205.3 Agency Official Communication</strong> Electronic content that is not public facing shall conform to the accessibility requirements specified in E205.4 when such content constitutes official business and is communicated by an agency through one or more of the following:  </p>    <ul>    <li>      A. An emergency notification;    </li>    <li>      B. An initial or final decision adjudicating an administrative claim or proceeding;    </li>    <li>      C. An internal or external program or policy announcement;    </li>    <li>      D. A notice of benefits, program eligibility, employment opportunity, or personnel action;    </li>    <li>      E. A formal acknowledgement of receipt;    </li>    <li>      F. A survey questionnaire;    </li>    <li>      G. A template or form;    </li>    <li>      H. Educational or training materials; or    </li>    <li>      I. Intranet content designed as a Web page.    </li>  </ul> ","E205.4":"<p>    <strong>E205.4 Accessibility Standard (WCAG 2.0)</strong> - Electronic content shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (Incorporated by reference, see 702.10.1).  </p>","E205.4.1":"<p>    <strong>E205.4.1 Word Substitution when Applying WCAG to Non-Web Documents. </strong>For non-Web documents, wherever the term \\"Web page\\" or \\"page\\" appears in WCAG 2.0 Level A and AA Success Criteria and Conformance Requirements, the term \\"document\\" shall be substituted for the terms \\"Web page\\" and \\"page\\". In addition, in Success Criterion in 1.4.2, the phrase \\"in a document\\" shall be substituted for the phrase \\"on a Web page\\".  </p>","E206.1":"<p>    <strong>E206.1 General. </strong> Where components of ICT are hardware and transmit information or have a user interface, such components shall conform to the requirements in Chapter 4.  </p>","E207.1":"<p>    <strong>E207.1 General</strong> Where components of ICT are software and transmit information or have a user interface, such components shall conform to E207 and the requirements in Chapter 5  </p><p>    <strong>Exception from E207.1 General:</strong> Software that is assistive technology and that supports the accessibility services of the platform shall not be required to conform to the requirements in Chapter 5.  </p>","E207.2":"<p>    <strong>E207.2 WCAG Conformance</strong> User interface components, as well as the content of platforms and applications, shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).  </p><p>    <strong>Exceptions from E207.2 WCAG Conformance:</strong>  </p>    <ul>    <li>      Software that is assistive technology and that supports the accessibility services of the platform shall not be required to conform to E207.2.    </li>    <li>      Non-web software shall not be required to conform to the following four Success Criteria in WCAG 2.0: 2.4.1 Bypass Blocks; 2.4.5 Multiple Ways; 3.2.3 Consistent Navigation; and 3.2.4 Consistent Identification.    </li>    <li>      Non-Web software shall not be required to conform to Conformance Requirement 3 Complete Processes in WCAG 2.0.    </li>  </ul>","E207.3":"<p>    <strong>E207.3 Complete Process for Non-Web Software</strong> Where non-Web software requires multiple steps to accomplish an activity, all software related to the activity to be accomplished shall conform to WCAG 2.0 as specified in E207.2.  </p>","E208.1":"<p>    <strong>E208.1 General</strong> Where an agency provides support documentation or services for ICT, such documentation and services shall conform to the requirements in Chapter 6.  </p>","E301.1":"<p>    <strong>E301 General </strong>  </p>    <p>    <strong>E301.1 Scope. </strong>The requirements of Chapter 3 shall apply to ICT where required by 508 Chapter 2 (Scoping Requirements), 255 Chapter 2 (Scoping Requirements), and where otherwise referenced in any other chapter of the Revised 508 Standards or Revised 255 Guidelines.  </p>","E302.1":"<p>    <strong>E302 Functional Performance Criteria</strong>  </p>    <p>    <strong>302.1 Without Vision.</strong> Where a visual mode of operation is provided, ICT shall provide at least one mode of operation that does not require user vision.  </p>","E302.2":"<p>    <strong>302.2 With Limited Vision. </strong>Where a visual mode of operation is provided, ICT shall provide at least one mode of operation that enables users to make use of limited vision.  </p>","E302.3":"<p>    <strong>302.3 Without Perception of Color. </strong>Where a visual mode of operation is provided, ICT shall provide at least one visual mode of operation that does not require user perception of color.  </p>","E302.4":"<p>    <strong>302.4 Without Hearing. </strong>Where an audible mode of operation is provided, ICT shall provide at least one mode of operation that does not require user hearing.  </p>","E302.5":"<p>    <strong>302.5 With Limited Hearing. </strong>Where an audible mode of operation is provided, ICT shall provide at least one mode of operation that enables users to make use of limited hearing.  </p>","E302.6":"<p>    <strong>302.6 Without Speech. </strong>Where speech is used for input, control, or operation, ICT shall provide at least one mode of operation that does not require user speech.  </p>","E302.7":"<p>    <strong>302.7 With Limited Manipulation. </strong>Where a manual mode of operation is provided, ICT shall provide at least one mode of operation that does not require fine motor control or simultaneous manual operations.  </p>","E302.8":"<p>    <strong>302.8 With Limited Reach and Strength. </strong>Where a manual mode of operation is provided, ICT shall provide at least one mode of operation that is operable with limited reach and limited strength.  </p>","E302.9":"<p>    <strong>302.9 With Limited Language, Cognitive, and Learning Abilities.</strong> ICT shall provide features making its use by individuals with limited cognitive, language, and learning abilities simpler and easier.</p>","E401.1":"<p>    <strong>401.1 Scope.</strong> The requirements of Chapter 4 shall apply to ICT that is hardware where required by 508 Chapter 2 (Scoping Requirements), 255 Chapter 2 (Scoping Requirements), and where otherwise referenced in any other chapter of the Revised 508 Standards or Revised 255 Guidelines.  </p>  <p>    Exception from E401.1 Scope: Hardware that is assistive technology shall not be required to conform to the requirements of this chapter.  </p>","E402.1":"<p>    <strong>402.1 General.</strong> ICT with closed functionality shall be operable without requiring the user to attach or install assistive technology other than personal headsets or other audio couplers, and shall conform to 402.  </p>","E402.2":"<p>    <strong>402.2 Speech-Output Enabled.</strong> ICT with a display screen shall be speech-output enabled for full and independent use by individuals with vision impairments.  </p>  <p>    <strong>402.2.1 Information Displayed On-Screen. </strong> Speech output shall be provided for all information displayed on-screen.  </p>  <p>    <strong>Exceptions from E402.2: </strong>  </p>    <p>    1. Variable message signs conforming to 402.5 shall not be required to be speech-output enabled.  </p>    <p>    2. Speech output shall not be required where ICT display screens only provide status indicators and those indicators conform to 409.  </p>    <p>    3. Where speech output cannot be supported due to constraints in available memory or processor capability, ICT shall be permitted to conform to 409 in lieu of 402.2.  </p>    <p>    4. Audible tones shall be permitted instead of speech output where the content of user input is not displayed as entered for security purposes, including, but not limited to, asterisks representing personal identification numbers.  </p>    <p>    5. Speech output shall not be required for: the machine location; date and time of transaction; customer account number; and the machine identifier or label.  </p>    <p>    6. Speech output shall not be required for advertisements and other similar information unless they convey information that can be used for the transaction being conducted.  </p>  <p>    <strong>402.2.2 Transactional Outputs.</strong> Where transactional outputs are provided, the speech output shall audibly provide all information necessary to verify a transaction.  </p>    <div id=\\"e402_2_3__e402_2_4\\">    <p>      <strong>402.2.3 Speech Delivery Type and Coordination.</strong> Speech output shall be delivered through a mechanism that is readily available to all users, including, but not limited to, an industry standard connector or a telephone handset. Speech shall be recorded or digitized human, or synthesized. Speech output shall be coordinated with information displayed on the screen.    </p><p>      <strong>402.2.4 User Control. </strong> Speech output for any single function shall be automatically interrupted when a transaction is selected. Speech output shall be capable of being repeated and paused.    </p>  </div><p>    <strong>402.2.5 Braille Instructions.</strong> Where speech output is required by 402.2, braille instructions for initiating the speech mode of operation shall be provided. Braille shall be contracted and shall conform to 36 CFR part 1191, Appendix D, Section 703.3.1.  </p>  <p>    Exception from E402.2.5 Braille Instructions: Devices for personal use shall not be required to conform to 402.2.5.  </p>","E402.3":"<p>    <strong>402.3 Volume.</strong> ICT that delivers sound, including speech output required by 402.2, shall provide volume control and output amplification conforming to 402.3.    </p>    <p>    <strong>402.3.1 Private Listening.</strong> Where ICT provides private listening, it shall provide a mode of operation for controlling the volume. Where ICT delivers output by an audio transducer typically held up to the ear, a means for effective magnetic wireless coupling to hearing technologies shall be provided.  </p>  <p>    <strong>402.3.2 Non-private Listening. </strong> Where ICT provides non-private listening, incremental volume control shall be provided with output amplification up to a level of at least 65 dB. A function shall be provided to automatically reset the volume to the default level after every use.  </p>","E402.4":"<p>    <strong>402.4 Characters on Display Screens.</strong> At least one mode of characters displayed on the screen shall be in a sans serif font. Where ICT does not provide a screen enlargement feature, characters shall be 3/16 inch (4.8 mm) high minimum based on the uppercase letter “I”. Characters shall contrast with their background with either light characters on a dark background or dark characters on a light background.  </p>","E402.5":"<p>    <strong>402.5 Characters on Variable Message Signs. </strong> Characters on variable message signs shall conform to section 703.7 Variable Message Signs of ICC A117.1-2009 (incorporated by reference, see 702.6.1).  </p>","E403.1":"<p>    <strong>403.1 General.</strong> Where provided, biometrics shall not be the only means for user identification or control.  </p>  <p>    Exception from E403.1 General: Where at least two biometric options that use different biological characteristics are provided, ICT shall be permitted to use biometrics as the only means for user identification or control.  </p>","E404.1":"<p>    <strong>404.1 General.</strong> ICT that transmits or converts information or communication shall not remove non-proprietary information provided for accessibility or shall restore it upon delivery.  </p>","E405.1":"<p>    <strong>405.1 General.</strong> The same degree of privacy of input and output shall be provided to all individuals. When speech output required by 402.2 is enabled, the screen shall not blank automatically.  </p>","E406.1":"<p>    <strong>406.1 General.</strong> Where data connections used for input and output are provided, at least one of each type of connection shall conform to industry standard non-proprietary formats.  </p>","E407.1":"<p>    <strong>407.1 General.</strong> Where provided, operable parts used in the normal operation of ICT shall conform to 407.  </p>","E407.2":"<p>    <strong>407.2 Contrast.</strong> Where provided, keys and controls shall contrast visually from background surfaces. Characters and symbols shall contrast visually from background surfaces with either light characters or symbols on a dark background or dark characters or symbols on a light background.  </p>","E407.3":"<p>    <strong>407.3 Input Controls.</strong> At least one input control conforming to 407.3 shall be provided for each function.  </p>  <p>    Exception from E407.3 Input Controls: Devices for personal use with input controls that are audibly discernable without activation and operable by touch shall not be required to conform to 407.3.  </p>  <p>    <strong>407.3.1 Tactilely Discernible.</strong> Input controls shall be operable by touch and tactilely discernible without activation.  </p>    <p>    <strong>407.3.2 Alphabetic Keys. </strong> Where provided, individual alphabetic keys shall be arranged in a QWERTY-based keyboard layout and the “F” and “J” keys shall be tactilely distinct from the other keys.  </p>    <p>    <strong>407.3.3 Numeric Keys.</strong> Where provided, numeric keys shall be arranged in a 12-key ascending or descending keypad layout. The number five key shall be tactilely distinct from the other keys. Where the ICT provides an alphabetic overlay on numeric keys, the relationships between letters and digits shall conform to ITU-T Recommendation E.161 (incorporated by reference, see 702.7.1).  </p>","E407.4":"<p>    <strong>407.4 Key Repeat.</strong> Where a keyboard with key repeat is provided, the delay before the key repeat feature is activated shall be fixed at, or adjustable to, 2 seconds minimum.  </p>","E407.5":"<p>    <strong>407.5 Timed Response.</strong> Where a timed response is required, the user shall be alerted visually, as well as by touch or sound, and shall be given the opportunity to indicate that more time is needed.  </p>","E407.6":"<p>    <strong>407.6 Operation. </strong> At least one mode of operation shall be operable with one hand and shall not require tight grasping, pinching, or twisting of the wrist. The force required to activate operable parts shall be 5 pounds (22.2 N) maximum.  </p>","E407.7":"<p>    <strong>407.7 Tickets, Fare Cards, and Keycards.</strong> Where tickets, fare cards, or keycards are provided, they shall have an orientation that is tactilely discernible if orientation is important to further use of the ticket, fare card, or keycard.  </p>","E407.8":"<p>    <strong>407.8 Reach Height and Depth.</strong> At least one of each type of operable part of stationary ICT shall be at a height conforming to 407.8.2 or 407.8.3 according to its position established by the vertical reference plane specified in 407.8.1 for a side reach or a forward reach. Operable parts used with speech output required by 402.2 shall not be the only type of operable part complying with 407.8 unless that part is the only operable part of its type.  </p>    <ul>    <li>      <strong>407.8.1 Vertical Reference Plane.</strong> Operable parts shall be positioned for a side reach or a forward reach determined with respect to a vertical reference plane. The vertical reference plane shall be located in conformance to 407.8.2 or 407.8.3. <ul>        <li id=\\"407_8_1_2__407_8_2__407_8_2_1__407_8_2_2\\">          <strong>407.8.1.1 Vertical Plane for Side Reach. </strong>Where a side reach is provided, the vertical reference plane shall be 48 inches (1220 mm) long minimum.        </li>        <li>          <strong>407.8.1.2 Vertical Plane for Forward Reach.</strong> Where a forward reach is provided, the vertical reference plane shall be 30 inches (760 mm) long minimum.        </li>      </ul>    </li><li>      <strong>407.8.2 Side Reach. </strong>Operable parts of ICT providing a side reach shall conform to 407.8.2.1 or 407.8.2.2. The vertical reference plane shall be centered on the operable part and placed at the leading edge of the maximum protrusion of the ICT within the length of the vertical reference plane. Where a side reach requires a reach over a portion of the ICT, the height of that portion of the ICT shall be 34 inches (865 mm) maximum. <ul>        <li>          <strong>407.8.2.1 Unobstructed Side Reach. </strong>Where the operable part is located 10 inches (255 mm) or less beyond the vertical reference plane, the operable part shall be 48 inches (1220 mm) high maximum and 15 inches (380 mm) high minimum above the floor.        </li>        <li>          <strong>407.8.2.2 Obstructed Side Reach. </strong>Where the operable part is located more than 10 inches (255 mm), but not more than 24 inches (610 mm), beyond the vertical reference plane, the height of the operable part shall be 46 inches (1170 mm) high maximum and 15 inches (380 mm) high minimum above the floor. The operable part shall not be located more than 24 inches (610 mm) beyond the vertical reference plane.        </li>      </ul>    </li><li id=\\"407_8_3__407_8_3_1__407_8_3_2\\">      <strong>407.8.3 Forward Reach. </strong>Operable parts of ICT providing a forward reach shall conform to 407.8.3.1 or 407.8.3.2. The vertical reference plane shall be centered, and intersect with, the operable part. Where a forward reach allows a reach over a portion of the ICT, the height of that portion of the ICT shall be 34 inches (865 mm) maximum. <ul>        <li>          <strong>407.8.3.1 Unobstructed Forward Reach. </strong>Where the operable part is located at the leading edge of the maximum protrusion within the length of the vertical reference plane of the ICT, the operable part shall be 48 inches (1220 mm) high maximum and 15 inches (380 mm) high minimum above the floor.        </li>        <li>          <strong>407.8.3.2 Obstructed Forward Reach. </strong>Where the operable part is located beyond the leading edge of the maximum protrusion within the length of the vertical reference plane, the operable part shall conform to 407.8.3.2. The maximum allowable forward reach to an operable part shall be 25 inches (635 mm). <ul id=\\"407_8_3_2_1\\">            <li>              <strong>407.8.3.2.1 Operable Part Height for ICT with Obstructed Forward Reach. </strong>The height of the operable part shall conform to Table 407.8.3.2.1.            </li>            <li id=\\"407_8_3_2_2\\">              <strong>407.8.3.2.2 Knee and Toe Space under ICT with Obstructed Forward Reach. </strong>Knee and toe space under ICT shall be 27 inches (685 mm) high minimum, 25 inches (635 mm) deep maximum, and 30 inches (760 mm) wide minimum and shall be clear of obstructions.            </li>          </ul>        </li>      </ul>    </li>  </ul>","E408.1":"<p>    <strong>408.1 General. </strong> Where provided, display screens shall conform to 408.  </p>","E408.2":"<p>    <strong>408.2 Visibility. </strong> Where stationary ICT provides one or more display screens, at least one of each type of display screen shall be visible from a point located 40 inches (1015 mm) above the floor space where the display screen is viewed.  </p>","E408.3":"<p>    <strong>408.3 Flashing.</strong> Where ICT emits lights in flashes, there shall be no more than three flashes in any one-second period.  </p>  <p>    Exception from E408.3 Flashing: Flashes that do not exceed the general flash and red flash thresholds defined in WCAG 2.0 (incorporated by reference, see 702.10.1) are not required to conform to 408.3.  </p>","E409.1":"<p>    <strong>409.1 General.</strong> Where provided, status indicators shall be discernible visually and by touch or sound.  </p>","E410.1":"<p>    <strong>410.1 General.</strong> Where provided, color coding shall not be used as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.  </p>","E411.1":"<p>    <strong>411.1 General.</strong> Where provided, audible signals or cues shall not be used as the only means of conveying information, indicating an action, or prompting a response  </p>","E412.1":"<p>    <strong>412.1 General.</strong> ICT that provides two-way voice communication shall conform to 412.  </p>","E412.2":"<p>    <strong>412.2 Volume Gain.</strong> ICT that provides two-way voice communication shall conform to 412.2.1 or 412.2.2.  </p>    <p>    <strong>412.2.1 Volume Gain for Wireline Telephones. </strong> Volume gain conforming to 47 CFR 68.317 shall be provided on analog and digital wireline telephones.  </p>  <p>    <strong>412.2.2 Volume Gain for Non-Wireline ICT. </strong> A method for increasing volume shall be provided for non-wireline ICT.  </p>  <p>    Exception from E412.2 Volume Gain: ICT conforming to 412.2 shall not be required to conform to 402.3.  </p>","E412.3":"<p>    <strong>412.3 Interference Reduction and Magnetic Coupling.</strong> Where ICT delivers output by a handset or other type of audio transducer that is typically held up to the ear, ICT shall reduce interference with hearing technologies and provide a means for effective magnetic wireless coupling in conformance with 412.3.1 or 412.3.2.  </p>    <ul>    <li>      <strong>412.3.1 Wireless Handsets. </strong>ICT in the form of wireless handsets shall conform to ANSI/IEEE C63.19-2011 (incorporated by reference, see 702.5.1).    </li>    <li>      <strong>412.3.2 Wireline Handsets. </strong> ICT in the form of wireline handsets, including cordless handsets, shall conform to TIA-1083-B (incorporated by reference, see702.9.1).    </li>  </ul>","E412.4":"<p>    <strong>412.4 Digital Encoding of Speech.</strong> ICT in IP-based networks shall transmit and receive speech that is digitally encoded in the manner specified by ITU-T Recommendation G.722.2 (incorporated by reference, see 702.7.2) or IETF RFC 6716 (incorporated by reference, see 702.8.1).  </p>","E412.5":"<p>    <strong>412.5 Real-Time Text Functionality.</strong> [Reserved].  </p>","E412.6":"<p>    <strong>412.6 Caller ID. </strong> Where provided, caller identification and similar telecommunications functions shall be visible and audible.  </p>","E412.7":"<p>    <strong>412.7 Video Communication. </strong> Where ICT provides real-time video functionality, the quality of the video shall be sufficient to support communication using sign language.  </p>","E413.1":"<p>    <strong>413.1 General. </strong> Where ICT displays or processes video with synchronized audio, ICT shall provide closed caption processing technology that conforms to 413.1.1 or 413.1.2.    </p><ul>      <li>        <strong>413.1.1 Decoding and Display of Closed Captions.</strong> Players and displays shall decode closed caption data and support display of captions.      </li>      <li>        <strong>413.1.2 Pass-Through of Closed Caption Data. </strong>Cabling and ancillary equipment shall pass through caption data.      </li>    </ul>","E414.1":"<p>    <strong>414.1 General. </strong> Where ICT displays or processes video with synchronized audio, ICT shall provide audio description processing technology conforming to 414.1.1 or 414.1.2.    </p><ul>      <li>        <strong>414.1.1 Digital Television Tuners.</strong> Digital television tuners shall provide audio description processing that conforms to ATSC A/53 Digital Television Standard, Part 5 (2014) (incorporated by reference, see 702.2.1). Digital television tuners shall provide processing of audio description when encoded as a Visually Impaired (VI) associated audio service that is provided as a complete program mix containing audio description according to the ATSC A/53 standard.      </li>      <li>        <strong>414.1.2 Other ICT.</strong> ICT other than digital television tuners shall provide audio description processing.      </li>    </ul>  ","E415.1":"<p>    <strong>415.1 General. </strong> Where ICT displays video with synchronized audio, ICT shall provide user controls for closed captions and audio descriptions conforming to 415.1.  </p>    <ul>    <li>      <strong>415.1.1 Caption Controls. </strong>Where ICT provides operable parts for volume control, ICT shall also provide operable parts for caption selection.    </li>    <li>      <strong>415.1.2 Audio Description Controls. </strong>Where ICT provides operable parts for program selection, ICT shall also provide operable parts for the selection of audio description.    </li>  </ul>  <p>    Exception from E415.1 General: Devices for personal use shall not be required to conform to 415.1 provided that captions and audio descriptions can be enabled through system-wide platform settings.  </p>","E501.1":"<p>    <strong>501.1 Scope - </strong>The requirements of Chapter 5 shall apply to software where required by 508 Chapter 2 (Scoping Requirements), 255 Chapter 2 (Scoping Requirements), and where otherwise referenced in any other chapter of the Revised 508 Standards or Revised 255 Guidelines.  </p>  <p>    Exception from E501.1 Scope: Where Web applications do not have access to platform accessibility services and do not include components that have access to platform accessibility services, they shall not be required to conform to 502 or 503 provided that they conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).  </p>","E502.1":"<p>    <strong>502.1 General</strong> - Software shall interoperate with assistive technology and shall conform to 502.  </p>  <p>    Exception from E502.1 General: ICT conforming to 402 shall not be required to conform to 502.  </p>","E502.2":"<p>    <strong>502.2 Documented Accessibility Features</strong> Software with platform features defined in platform documentation as accessibility features shall conform to 502.2. <strong>502.2.1 User Control of Accessibility Features</strong>Platform software shall provide user control over platform features that are defined in the platform documentation as accessibility features.  </p>","E502.3":"<p>    <strong>502.3 Accessibility Services</strong> Platform software and software tools that are provided by the platform developer shall provide a documented set of accessibility services that support applications running on the platform to interoperate with assistive technology and shall conform to 502.3. Applications that are also platforms shall expose the underlying platform accessibility services or implement other documented accessibility services.  </p>","E502.4":"<p>    <strong>502.4 Platform Accessibility Features. </strong>Platforms and platform software shall conform to the requirements in ANSI/HFES 200.2, Human Factors Engineering of Software User Interfaces — Part 2: Accessibility (2008) (incorporated by reference, see 702.4.1) listed below:  </p>    <ul>    <li>      <strong>A. Section 9.3.3 </strong>Enable sequential entry of multiple (chorded) keystrokes;    </li>    <li>      <strong>B. Section 9.3.4 </strong>Provide adjustment of delay before key acceptance;    </li>    <li>      <strong>C. Section 9.3.5 </strong>Provide adjustment of same-key double-strike acceptance;    </li>    <li>      <strong>D. Section 10.6.7</strong> Allow users to choose visual alternative for audio output;    </li>    <li>      <strong>E. Section 10.6.8 </strong>Synchronize audio equivalents for visual events;    </li>    <li>      <strong>F. Section 10.6.9 </strong>Provide speech output services; and    </li>    <li>      <strong>G. Section 10.7.1</strong> Display any captions provided.    </li>  </ul>","E503.1":"<p>    <strong>503.1 General</strong> Applications shall conform to 503.  </p>","E503.2":"<p>    <strong>503.2 User Preferences</strong> Applications shall permit user preferences from platform settings for color, contrast, font type, font size, and focus cursor.  </p> <p>    Exception from E503.2 User Preferences: Applications that are designed to be isolated from their underlying platform software, including Web applications, shall not be required to conform to 503.2.  </p>","E503.3":"<p>    <strong>503.3 Alternative User Interfaces.</strong> Where an application provides an alternative user interface that functions as assistive technology, the application shall use platform and other industry standard accessibility services.  </p>","E503.4":"<p>    <strong>503.4 User Controls for Captions and Audio Description</strong> Where ICT displays video with synchronized audio, ICT shall provide user controls for closed captions and audio descriptions conforming to 503.4.  </p>    <p>    <strong>503.4.1 Caption Controls</strong> Where user controls are provided for volume adjustment, ICT shall provide user controls for the selection of captions at the same menu level as the user controls for volume or program selection.  </p>    <p>    <strong>503.4.2 Audio Description Controls.</strong> Where user controls are provided for program selection, ICT shall provide user controls for the selection of audio descriptions at the same menu level as the user controls for volume or program selection.  </p>","E504.1":"<p>    <strong>504.1 General</strong> Where an application is an authoring tool, the application shall conform to 504 to the extent that information required for accessibility is supported by the destination format.  </p>","E504.2":"<p>    <strong>504.2 Content Creation or Editing</strong> Authoring tools shall provide a mode of operation to create or edit content that conforms to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1) for all supported features and, as applicable, to file formats supported by the authoring tool. Authoring tools shall permit authors the option of overriding information required for accessibility.  </p>    <p>    <strong>504.2.1 Preservation of Information Provided for Accessibility in Format Conversion.</strong> Authoring tools shall, when converting content from one format to another or saving content in multiple formats, preserve the information required for accessibility to the extent that the information is supported by the destination format.  </p><p>    <strong>504.2.2 PDF Export.</strong> Authoring tools capable of exporting PDF files that conform to ISO 32000-1:2008 (PDF 1.7) shall also be capable of exporting PDF files that conform to ANSI/AIIM/ISO 14289-1:2016 (PDF/UA-1) (incorporated by reference, see 702.3.1).  </p>","E504.3":"<p>    <strong>504.3 Prompts.</strong> Authoring tools shall provide a mode of operation that prompts authors to create content that conforms to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1) for supported features and, as applicable, to file formats supported by the authoring tool.  </p>","E504.4":"<p>    <strong>504.4 Templates.</strong> Where templates are provided, templates allowing content creation that conforms to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1) shall be provided for a range of template uses for supported features and, as applicable, to file formats supported by the authoring tool.  </p>","E601.1":"<p>    <strong>E601.1 Scope</strong> The technical requirements in Chapter 6 shall apply to ICT support documentation and services where required by 508 Chapter 2 (Scoping Requirements), 255 Chapter 2 (Scoping Requirements), and where otherwise referenced in any other chapter of the Revised 508 Standards or Revised 255 Guidelines.  </p>","E602.1":"<p>    <strong>602.1 General.</strong>Documentation that supports the use of ICT shall conform to 602.  </p>","E602.2":"<p>    <strong>602.2 Accessibility and Compatibility Features.</strong> Documentation shall list and explain how to use the accessibility and compatibility features required by Chapters 4 and 5. Documentation shall include accessibility features that are built-in and accessibility features that provide compatibility with assistive technology.  </p>","E602.3":"<p>    <strong>602.3 Electronic Support Documentation. </strong>Documentation in electronic format, including Web-based self-service support, shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).  </p>","E602.4":"<p>    <strong>602.4 Alternate Formats for Non-Electronic Support Documentation. </strong>Where support documentation is only provided in non-electronic formats, alternate formats usable by individuals with disabilities shall be provided upon request.  </p>","E603.1":"<p>    <strong>603.1 General. </strong>ICT support services including, but not limited to, help desks, call centers, training services, and automated self-service technical support, shall conform to 603.  </p>","E603.2":"<p>    <strong>603.2 Information on Accessibility and Compatibility Features. </strong> ICT support services shall include information on the accessibility and compatibility features required by 602.2.  </p>","E603.3":"<p>    <strong>603.3 Accommodation of Communication Needs. </strong> Support services shall be provided directly to the user or through a referral to a point of contact. Such ICT support services shall accommodate the communication needs of individuals with disabilities.</p>"}');

/***/ }),

/***/ 325:
/*!*************************************!*\
  !*** ./src/assets/data/banner.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"header":"Acquisition","title":"Accessibility Requirements Tool (ART)"}');

/***/ }),

/***/ 3373:
/*!**************************************!*\
  !*** ./src/assets/data/buttons.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"getStarted":{"label":"Select to get started","description":"Get Started Description","destination":"/ict-listing-page"},"uploadICT":{"label":"Continue where you left off","description":"Use the box below to modify/upload a previous acquisition file.","destination":"/ict-listing-page"},"continue":{"label":"Continue","description":"Continue to the form Page","destination":"/form-page"}}');

/***/ }),

/***/ 6421:
/*!*************************************************!*\
  !*** ./src/assets/data/comp-hardware-keys.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('["hardware-server","hardware-tablet","hardware-printer","hardware-multi-func","hardware-peripheral","hardware-kiosk","hardware-mobile","hardware-video-telecon","hardware-video-monitor"]');

/***/ }),

/***/ 3761:
/*!*************************************!*\
  !*** ./src/assets/data/footer.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Before You Go","data":"We\'re always working to improve the information and resources on this website. To suggest a new resource for this or another page, please <a class=\'mailto\' href=\'mailto:section.508@gsa.gov\'>contact us</a>."}');

/***/ }),

/***/ 7121:
/*!*************************************!*\
  !*** ./src/assets/data/header.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":"<p class=\'first-par\'>The Accessibility Requirements Tool (ART) is a step-by-step guide to help you easily identify relevant accessibility requirements from the <a href=\'https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines\'>Revised 508 Standards</a>, and incorporate them into your procurement and contracting documentation, as well as <a href=\'https://www.section508.gov/content/glossary/#ict\'>Information and Communication Technology (ICT)</a>. GSA’s IT Accessibility Program developed ART as part of its mission to provide technical assistance to federal agencies, to improve compliance with <a href=\'https://www.section508.gov/manage/laws-and-policies/\'>Section 508 of the Rehabilitation Act</a>. Use ART to buy and build technology that’s accessible to all.</p><b>Note:</b> Do not use the browser\'s back and refresh buttons. You will lose your information using the browser buttons."}');

/***/ }),

/***/ 5284:
/*!*************************************!*\
  !*** ./src/assets/data/ict-lp.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"errorMessage":"You have reached the maximum number of ICT Items","maxItems":8,"sectionTitle":"What is the name of your procurement?","inputLabel":"First: Please list Items or deliverables that contain ICT. You may add more than one ICT item. You may also use one name for multiple ICT Items providing an overall solution (for example: Security Equipment)."}');

/***/ }),

/***/ 8296:
/*!****************************************!*\
  !*** ./src/assets/data/lp-button.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"buttonHeader":"Select a button below to get 508 Language for your procurement."}');

/***/ }),

/***/ 3961:
/*!******************************************************!*\
  !*** ./src/assets/data/option-language-mapping.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"it-prod":["E201.1","E208.1"],"it-serv":["E208.1","E602.1","E603.1"],"excep-nat-sec":["E202.3"],"excep-mon-spa":["E202.5"],"excep-alter":["E202.6"],"excep-fed-con":["E202.4"],"excep-und-bur":["E202.6"],"elec-yes":["E205.1","E205.2","E205.3","E205.4"],"content-website-yes":["E205.1","E205.2","E205.3","E205.4","E503.1"],"content-website-no":["E205.1","E205.2","E205.3","E205.4","E205.4.1"],"content-public-yes":["E205.2"],"content-public-no":["E205.3"],"comm-yes":["E205.3"],"soft-no-user-interface":["E501.1","E207.1","E207.2"],"soft-assistive":["E501.1","E502.1","E207.1","E207.2"],"soft-idk":["E207.1"],"software-web-app":["E207.1","E207.2","E207.3","E503.1","E503.2","E503.3","E503.4"],"software-auth-tool":["E207.1","E207.2","E207.3","E503.1","E502.4","E503.2","E503.3","E503.4","E504.1","E504.2","E504.3","E504.4"],"software-infra":["E502.4","E207.1","E207.2","E207.3","E503.1","E503.2","E503.3","E503.4"],"software-other":["E503.1"],"soft-serv-saas":["E207.1","E503.1"],"soft-serv-paas":["E207.1","E503.1"],"soft-serv-other":["E207.1","E503.1"],"soft-serv-idk":["E207.1","E503.1"],"soft-web-yes":["E207.2","E503.1"],"soft-web-no":["E207.3"],"soft-create-yes":["E504.2","E504.3","E504.4"],"hardware-computer":["E206.1","E401.1","E402.1","E402.2","E402.3","E402.4","E402.5","E403.1","E404.1","E405.1","E406.1","E407.1","E407.2","E407.3","E407.4","E407.5","E407.6","E407.7","E407.8","E408.1","E408.2","E408.3","E409.1","E410.1","E411.1","E412.1","E412.2","E412.3","E412.4","E412.5","E412.6","E412.7","E413.1","E414.1","E415.1"],"hardware-other":["E206.1"],"hardware-none":["E206.1"],"server-iaas-yes":["E206.1"],"server-iaas-no":["E206.1"],"server-iaas-idk":["E206.1"],"support-tech":["E603.1","E603.2","E603.3"],"support-call":["E603.1","E603.2","E603.3"],"support-doc":["E602.1","E602.2","E602.3","E602.4"],"support-train":["E603.1","E603.2","E603.3"]}');

/***/ }),

/***/ 4209:
/*!*************************************************!*\
  !*** ./src/assets/data/sample-procurement.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":"<div id=\'target\' style=\'background-color: #f5f9fc; padding:10px 20px 20px 20px\'> <h2> <strong>Sample Procurement Language in 3 Steps</strong> </h2> <p> Have a standard procurement and want to help potential vendors understand the government\'s requirements and the process on how to deliver accessible products and services? Find the sample you need from the 40+ samples listed below, then cut and paste the sample language into your procurement documentation. The sample language covers such factors as: Program Need, Deliverable Requirements, and Evaluation and Acceptance Factors. </p> <ol style=\'font-weight: bold;\'> <li> <p> <strong>Download</strong> the <a target=\'_blank\' href=\'https://assets.section508.gov/files/ART%20Contract%20Language%20Template.pdf\' style=\'font-weight: normal;\'> ART Contract Language Template </a> </p> </li> <li> <p> <strong>Select and download</strong> <span style=\'font-weight: normal;\'> the sample procurement language from the list below: </span> </p> </li> </ol> <div class=\'grid-row grid-gap\'> <div class=\'desktop:grid-col-4\'> <ul class=\'list_1\'> <li> <a href=\'https://www.section508.gov/sample-procurement/call-contacthelp-desk-center-services\'>Call (Contact/Help Desk) Center Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/cloud-computing\'>Cloud Computing</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/computer-based-training\'>Computer-based Training</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/computer-monitor\'>Computer Monitor</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/computer-printer\'>Computer Printer</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/computer-printer-maintenance \'>Computer Printer Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/content-management-systems\'>Content Management Systems</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/data-services-or-information-retrieval-systems\'>Data Services or Information Retrieval Systems</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/desktop-or-portable-computer\'>Desktop or Portable Computer</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/desktop-or-portable-computer-maintenance\'>Desktop or Portable Computer Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/digital-camera\'>Digital Camera</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/ebooks\'>eBooks</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/ebooks-reader\'>eBooks Reader</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/electronic-documents\'>Electronic Documents</a> </li> </ul> </div> <div class=\'desktop:grid-col-4\'> <ul class=\'list_1\'> <li> <a href=\'https://www.section508.gov/sample-procurement/fax-machine \'>Fax Only</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/gps-navigation-device\'>GPS Navigation Device</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/information-content-services\'>Information Content Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/information-kioskstransaction-machines\'>Information Kiosk Transaction Machines</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/internet-and-intranet-websites-and-web-based-content\'>Internet and Intranet websites and web based content</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/intranet-or-internet-services\'>Internet or Intranet Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/ip-telephones\'>IP Telephones</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/keyboard-or-keypad\'>Keyboard or Keypad</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/management-information-system-services\'>Management Information System Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/mobile-application\'>Mobile Application</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/multifunction-machine\'>Multifunction Machines</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/multifunction-machines-maintenance \'>Multifunction Machines Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/servers\'>Servers</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/smartphone\'>Smartphone</a> </li> </ul> </div> <div class=\'desktop:grid-col-4\'> <ul class=\'list_1\'> <li> <a href=\'https://www.section508.gov/sample-procurement/smartphone-maintenance \'>Smartphone Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/electronic-software \'>Software</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/software-development-services\'>Software Development Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/software-maintenance-services \'>Software Maintenance Services</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/voip-services\'>VoIP Service</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/video-and-imaging-input-devices\'>Video and Imaging Input Devices</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/video-teleconferencing\'>Video Teleconferencing</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/video-teleconference-maintenance \'>Video Teleconferencing Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/web-application\'>Web Application</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/web-application-maintenance\'>Web Application Maintenance</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/web-based-collaboration-tools\'>Web-based Collaboration Tools</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/web-based-information-documentation-and-support \'>Web-based Information, Documentation and Support</a> </li> <li> <a href=\'https://www.section508.gov/sample-procurement/web-based-training\'>Web-based Training</a> </li> </ul> </div> </div> <ol start=\'3\' style=\'font-weight: bold; margin-top: 10px;\'> <li> <p> <strong>Follow the instructions to copy/paste </strong> <span style=\'font-weight: normal;\'>the standard language from the two documents into your procurement document </span> </p> </li> </ol> </div>"}');

/***/ }),

/***/ 6077:
/*!******************************************!*\
  !*** ./src/assets/data/update-date.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":"<strong>Reviewed/Updated: </strong>April 2023"}');

/***/ }),

/***/ 7126:
/*!*************************************************!*\
  !*** ./src/assets/form-config/form.config.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"formElements":[{"elementType":"radioButtonGroup","controlName":"sol-type","formSection":"Solicitation Phase","title":"","label":"Select one of the options below","description":"","placeholder":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","hidden":false,"value":"","options":[{"elementType":"radioButton","controlName":"proj-plan","label":"Project Planning","description":"I want to identify the applicable Section 508 standards I need to address during project planning","value":"red","validations":[],"next":"ict-group","formSection":""},{"elementType":"radioButton","controlName":"mark-research","label":"Market Research","description":"I want to obtain product documentation and/or capability statements to determine the availability of accessible products and services using a Request for information (RFI).","value":"green","validations":[],"next":"ict-mark-research-group","formSection":""},{"elementType":"radioButton","controlName":"solic-dev","label":"Solicitation Development","description":"I want to obtain Section 508 requirements to include in my statement of work","value":"blue","validations":[],"next":"ict-group","formSection":""}]},{"elementType":"checkboxGroup","controlName":"ict-group","label":"What type of ICT do you have? Please select all that apply.","title":"","hidden":true,"placeholder":"For example, 123 45 6789","description":"","errorMessages":{"maxlength":"Select at leas one option"},"validations":["required"],"next":"","formSection":"ICT Type","value":"","options":[{"elementType":"checkbox","controlName":"it-prod","formSection":"What is the name of your procurement?","title":"Project Planning","label":"ICT Products","placeholder":"","description":"I am purchasing ICT Products (example: web and non-web-based electronic content, software, licenses, hardware)","errorMessages":{},"validations":[],"next":"exemptions-group","value":false,"options":[]},{"elementType":"checkbox","controlName":"it-serv","label":"ICT Services","title":"Market research","placeholder":"","description":"I am purchasing ICT Services (example: cloud services; contractor services to develop, modify, install, configure, integrate, maintain, or host ICT)","errorMessages":{},"validations":[],"next":"exemptions-group","formSection":"What is the name of your procurement?","value":false,"options":[]},{"elementType":"checkbox","label":"None of the above","title":"None of the above","placeholder":"","description":"","errorMessages":{},"controlName":"it-none","validations":[],"next":"exemptions-group","formSection":"What is the name of your procurement?","value":false,"options":[],"onlyOption":true}]},{"elementType":"checkboxGroup","controlName":"ict-mark-research-group","label":"What type of ICT do you have? Please select all that apply.","title":"","hidden":true,"placeholder":"For example, 123 45 6789","description":"","errorMessages":{"maxlength":"Select at leas one option"},"validations":["required"],"next":"","formSection":"ICT Type","value":"","options":[{"elementType":"checkbox","controlName":"it-prod-mr","formSection":"What is the name of your procurement?","title":"Project Planning","label":"ICT Products","placeholder":"","description":"I am purchasing ICT Products (example: web and non-web-based electronic content, software, licenses, hardware)","errorMessages":{},"validations":[],"next":"done","value":false,"options":[]},{"elementType":"checkbox","controlName":"it-serv-mr","label":"ICT Services","title":"Market research","placeholder":"","description":"I am purchasing ICT Services (example: cloud services; contractor services to develop, modify, install, configure, integrate, maintain, or host ICT)","errorMessages":{},"validations":[],"next":"done","formSection":"What is the name of your procurement?","value":false,"options":[]},{"elementType":"checkbox","label":"None of the above","title":"None of the above","placeholder":"","description":"","errorMessages":{},"controlName":"it-none-mr","validations":[],"next":"done","formSection":"What is the name of your procurement?","value":false,"options":[],"onlyOption":true}]},{"elementType":"checkboxGroup","controlName":"exemptions-group","formSection":"Exemptions & Exceptions","title":"","hidden":true,"label":"","description":"","placeholder":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"checkbox","label":"No exemptions apply","description":"","value":false,"controlName":"excep-none","validations":[],"next":"elec-group","formSection":"","onlyOption":true},{"elementType":"checkbox","label":"I don’t have one / I don’t know","description":"","value":false,"controlName":"excep-idk","validations":[],"next":"elec-group","formSection":"","onlyOption":true},{"elementType":"checkbox","label":"National Security Exemption","description":"Check if your system qualifies as a <a href=\'https://www.govinfo.gov/content/pkg/USCODE-2014-title40/pdf/USCODE-2014-title40-subtitleIII-chap111-sec11103.pdf\' target=\'_blank\' >national security system</a>","value":false,"controlName":"excep-nat-sec","validations":[],"next":"elec-group","additionalNext":["excep-nbr"],"formSection":""},{"elementType":"checkbox","label":"ICT Functions Located in Maintenance and Monitoring Spaces Exception","description":"","value":false,"controlName":"excep-mon-spa","validations":[],"next":"elec-group","additionalNext":["excep-nbr"],"formSection":""},{"elementType":"checkbox","label":"Fundamental Alteration Exception","description":"","value":false,"controlName":"excep-alter","validations":[],"next":"elec-group","additionalNext":["excep-nbr"],"formSection":""},{"elementType":"checkbox","label":"Federal Contracts Exception","description":"This is not a common exception applied to procurements","value":false,"controlName":"excep-fed-con","validations":[],"next":"elec-group","additionalNext":["excep-nbr"],"formSection":""},{"elementType":"checkbox","label":"Undue Burden Exception","description":"","value":false,"controlName":"excep-und-bur","validations":[],"next":"elec-group","additionalNext":["excep-nbr"],"formSection":""}]},{"elementType":"text","controlName":"excep-nbr","label":"Exemptions Authorization Number","title":"Please provide an Exemption Authorization Number, if any:","placeholder":"--- -- ----","hidden":true,"description":"For example, 123 45 6789","errorMessages":{"maxlength":"The maximum length has exceeded 9"},"validations":[],"next":"","formSection":"","value":"","options":[]},{"elementType":"radioButtonGroup","formSection":"Does your solicitation include electronic content?","menuItem":"Electronic Content","label":"I.e. Electronic forms, surveys, web, multimedia, document templates, etc.","title":"","hidden":true,"placeholder":"","description":"","errorMessages":{"required":"Select one option."},"controlName":"elec-group","validations":["required"],"next":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"elec-yes","controlName":"elec-yes","validations":[],"next":"elec-web-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"elec-no","controlName":"elec-no","validations":[],"next":"soft-criteria-group","formSection":""}]},{"elementType":"radioButtonGroup","label":"","title":"Will this electronic content be made available through a website?","placeholder":"","hidden":true,"description":"","errorMessages":{"required":"Select one option."},"controlName":"elec-web-group","validations":["required"],"next":"","formSection":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"content-website-yes","controlName":"content-website-yes","validations":[],"next":"soft-criteria-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"content-website-no","controlName":"content-website-no","validations":[],"next":"content-group","formSection":""}]},{"elementType":"radioButtonGroup","label":"I.e. Electronic forms, surveys, web, multimedia, document templates, etc.","title":"Is your product public facing?","placeholder":"","hidden":true,"description":"","errorMessages":{"required":"Select one option."},"controlName":"content-group","validations":["required"],"next":"","formSection":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"content-public-yes","controlName":"content-public-yes","validations":[],"next":"soft-criteria-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"content-public-no","controlName":"content-public-yes","validations":[],"next":"agency-comm","formSection":""}]},{"elementType":"radioButtonGroup","title":"Is your product agency official communication?","label":"i.e. emergency notification, educational or training material, program or policy announcement, a survey questionnaire, etc.","placeholder":"","hidden":true,"description":"","errorMessages":{"required":"Select one option."},"controlName":"agency-comm","validations":["required"],"next":"","formSection":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"comm-yes","controlName":"comm-yes","validations":[],"next":"soft-criteria-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"comm-no","controlName":"comm-no","validations":[],"next":"soft-criteria-group","formSection":"","info":"Electronic content that is not public facing shall conform to the accessibility requirements specified in E205.4."}]},{"elementType":"checkboxGroup","controlName":"soft-criteria-group","formSection":"Does the software meet any of the following criteria?","menuItem":"Software","title":"","label":"","hidden":true,"placeholder":"","description":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"checkbox","label":"Does not have an end-user interface (i.e. user screens)","description":"","value":false,"controlName":"soft-no-user-interface","validations":[],"next":"hardware-group","formSection":""},{"elementType":"checkbox","label":"Principal function is assistive technology","description":"","value":false,"controlName":"soft-assistive","validations":[],"next":"hardware-group","formSection":""},{"elementType":"checkbox","label":"I don’t know","description":"","value":false,"controlName":"soft-idk","validations":[],"onlyOption":true,"next":"software-group","formSection":""},{"elementType":"checkbox","label":"None of the above","description":"","value":false,"controlName":"soft-none","validations":[],"next":"software-group","formSection":"","onlyOption":true}]},{"elementType":"checkboxGroup","controlName":"software-group","formSection":"","title":"Are you purchasing any software items, deliverables, or licenses?","hidden":true,"label":"<i>Programs, procedures, rules, and related data and documentation that direct the use and operation of ICT and instruct it to perform a given task or function. Software includes, but is not limited to, applications, non-Web software, and platform software.</i><br><br>(Check all that apply)","placeholder":"","description":"","errorMessages":{"maxlength":"Select at leas one option"},"validations":["required"],"next":"","value":"","options":[{"elementType":"checkbox","label":"Web, desktop, server, mobile client applications","title":"","placeholder":"","description":"Time and attendance software<br>DHS productivity applications<br>Web forms/applications<br>Call Center Support applications<br>Workflow applications<br>Content management systems<br>Learning management systems<br>","errorMessages":{},"controlName":"software-web-app","validations":[],"next":"soft-serv-group","formSection":"","value":false,"options":[]},{"elementType":"checkbox","label":"Software authoring tools and platforms","title":"","placeholder":"","description":"Microsoft Office<br>Adobe Acrobat Professional<br>Adobe InDesign<br>PDF Generators and Converters<br>Graphing and Charting Programs<br>","errorMessages":{},"controlName":"software-auth-tool","validations":[],"next":"soft-serv-group","formSection":"","value":false,"options":[]},{"elementType":"checkbox","label":"Software Infrastructure","title":"","placeholder":"","description":"Operating Systems<br>Browsers<br>Systems/network administration software<br>Remote access software<br>User authentication software<br>Virtual meeting tools<br>","errorMessages":{},"controlName":"software-infra","validations":[],"next":"soft-serv-group","formSection":"","value":false,"options":[]},{"elementType":"checkbox","label":"Other","title":"","placeholder":"","description":"","errorMessages":{},"controlName":"software-other","validations":[],"next":"soft-serv-group","formSection":"","value":false,"options":[]},{"elementType":"checkbox","label":"None of the above","title":"","placeholder":"","description":"","errorMessages":{},"controlName":"software-none","validations":[],"next":"hardware-group","formSection":"","value":false,"options":[],"onlyOption":true}]},{"elementType":"checkboxGroup","controlName":"soft-serv-group","formSection":"","title":"Will the software be provided through any of the following types of cloud services agreements? (Check all that apply)","label":"","hidden":true,"placeholder":"","description":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"checkbox","label":"Software as a Service (SaaS)","description":"","value":false,"controlName":"soft-serv-saas","validations":[],"next":"soft-web-group","formSection":""},{"elementType":"checkbox","label":"Platform as a Service (PaaS)","description":"","value":false,"controlName":"soft-serv-paas","validations":[],"next":"soft-web-group","formSection":""},{"elementType":"checkbox","label":"Other Cloud Services arrangement","description":"","value":false,"controlName":"soft-serv-other","validations":[],"next":"soft-web-group","formSection":""},{"elementType":"checkbox","label":"I don’t know","description":"","value":false,"controlName":"soft-serv-idk","validations":[],"next":"soft-web-group","formSection":"","onlyOption":true},{"elementType":"checkbox","label":"None of the above","description":"","value":false,"controlName":"soft-serv-none","validations":[],"next":"hardware-group","formSection":"","onlyOption":true}]},{"elementType":"radioButtonGroup","controlName":"soft-web-group","formSection":"","title":"Will this software be accessible through a web browser?","label":"","hidden":true,"placeholder":"","description":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"soft-web-yes","controlName":"soft-web-yes","validations":[],"next":"soft-create-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"soft-web-no","controlName":"soft-web-no","validations":[],"next":"soft-create-group","formSection":""}]},{"elementType":"radioButtonGroup","controlName":"soft-create-group","formSection":"","title":"Will this software be used to create electronic content (e.g. an authoring tool that is used to create HTML pages, reports, surveys, charts, dashboards, etc.)?","label":"","hidden":true,"placeholder":"","description":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"soft-create-yes","controlName":"soft-create-yes","validations":[],"next":"hardware-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"soft-create-no","controlName":"soft-create-no","validations":[],"next":"hardware-group","formSection":""}]},{"elementType":"checkboxGroup","menuItem":"Hardware","title":"","hidden":true,"label":"Where components of ICT are hardware and transmit information or have a user interface, such components shall conform to the requirements in Chapter 4. Hardware is considered a tangible device, equipment, or physical component of ICT, such as telephones, computers, multifunction copy machines, and keyboards.<br><br> Please select all that apply.","placeholder":"","description":"","errorMessages":{"required":"Select one option."},"controlName":"hardware-group","validations":["required"],"next":"","formSection":"Are you purchasing any hardware items, deliverables, or licenses?","value":"","options":[{"elementType":"checkbox","label":"Computers and laptops","description":"","value":false,"controlName":"hardware-computer","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Tablet","description":"","value":false,"controlName":"hardware-tablet","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Printers, Scanners, or Copiers","description":"","value":false,"controlName":"hardware-printer","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Multi-function office machines","description":"","value":false,"controlName":"hardware-multi-func","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Peripheral Equipment (i.e. keyboard, mouse)","description":"","value":false,"controlName":"hardware-peripheral","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Information kiosks and transaction machines","description":"","value":false,"controlName":"hardware-kiosk","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Mobile phones","description":"","value":false,"controlName":"hardware-mobile","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Video Teleconference Equipment","description":"","value":false,"controlName":"hardware-video-telecon","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Video Displays or Monitors","description":"","value":false,"controlName":"hardware-video-monitor","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"Servers","description":"","value":false,"controlName":"hardware-server","validations":[],"next":"server-iaas-group","formSection":""},{"elementType":"checkbox","label":"Other","description":"","value":false,"controlName":"hardware-other","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"checkbox","label":"None of the above","description":"","value":false,"controlName":"hardware-none","onlyOption":true,"validations":[],"next":"support-doc-group","formSection":""}]},{"elementType":"radioButtonGroup","controlName":"server-iaas-group","formSection":"","title":"","hidden":true,"label":"Will the server require physical installation or is provided through an Infrastructure as a Service (IaaS) agreement?","placeholder":"","description":"","errorMessages":{"required":"Select one option."},"validations":["required"],"next":"","value":"","options":[{"elementType":"radioButton","label":"Yes","description":"","value":"server-iaas-yes","controlName":"server-iaas-yes","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"radioButton","label":"No","description":"","value":"server-iaas-no","controlName":"server-iaas-no","validations":[],"next":"support-doc-group","formSection":""},{"elementType":"radioButton","label":"I don\'t know","description":"","value":"server-iaas-idk","controlName":"server-iaas-idk","validations":[],"next":"support-doc-group","formSection":""}]},{"elementType":"checkboxGroup","title":"","menuItem":"Support Documentation & Services","hidden":true,"label":"What ICT support documentation or service are your procuring?","placeholder":"","description":"","errorMessages":{"required":"Select one option."},"controlName":"support-doc-group","validations":["required"],"next":"","formSection":"Support Documentation & Services","value":"","options":[{"elementType":"checkbox","label":"Automated self-service & Technical support","description":"","value":false,"controlName":"support-tech","validations":[],"next":"done","formSection":""},{"elementType":"checkbox","label":"Help Desk or Call service center","description":"","value":false,"controlName":"support-call","validations":[],"next":"done","formSection":""},{"elementType":"checkbox","label":"Product documentation","description":"","value":false,"controlName":"support-doc","validations":[],"next":"done","formSection":""},{"elementType":"checkbox","label":"Training Service","description":"","value":false,"controlName":"support-train","validations":[],"next":"done","formSection":""},{"elementType":"checkbox","label":"None of the above","description":"","value":false,"controlName":"support-none","validations":[],"next":"done","formSection":"","onlyOption":true}]}],"formButtons":{"submit":"Get 508 Results"},"clearForm":true,"disable":false}]');

/***/ }),

/***/ 5893:
/*!***************************************************!*\
  !*** ./src/assets/form-config/ict-lp.config.json ***!
  \***************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"formElements":[{"elementType":"text","label":"","title":"","placeholder":"Please enter an ICT Item","description":"Do not exceed 25 characters and 8 ICTs","errorMessages":{"maxlength":"The maximum length has exceeded 25"},"controlName":"ictItemTextfield1","validations":["required","maxLength(25)"],"next":"","formSection":"","value":"","hidden":false,"options":[]}],"formButtons":{"add":"Add "},"clearForm":true,"disable":false}]');

/***/ }),

/***/ 1599:
/*!*************************************************!*\
  !*** ./src/assets/form-config/test.config.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"formElements":[{"elementType":"text","label":"First: Please list Items or deliverables that contain ICT. You may add more than one ICT item. You may also use one name for multiple ICT Items providing an overall solution (for example: Security Equipment).","title":"","placeholder":"Please enter an ICT Item","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemTextfield1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]},{"elementType":"checkboxGroup","label":"Select any of the options below","title":"Select any of the options below","placeholder":"","description":"","errorMessages":{"maxlength":"Select at leas one option"},"controlName":"ictItemcheckboxGroup1","validations":["required"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[{"elementType":"checkbox","label":"Project Planning","title":"Project Planning","placeholder":"","description":"Project Planning description here","errorMessages":{},"controlName":"checkbox1","validations":[],"next":"","formSection":"What is the name of your procurement?","value":true,"options":[]},{"elementType":"checkbox","label":"Market research","title":"Market research","placeholder":"","description":"Market research description here","errorMessages":{},"controlName":"checkbox2","validations":[],"next":"","formSection":"What is the name of your procurement?","value":false,"options":[]},{"elementType":"checkbox","label":"None of the above","title":"None of the above","placeholder":"","description":"","errorMessages":{},"controlName":"checkbox3","validations":[],"next":"","formSection":"What is the name of your procurement?","value":false,"options":[],"onlyOption":true}]},{"elementType":"checkboxGroup","label":"One more group","title":"Select any of the options below","placeholder":"","description":"","errorMessages":{"maxlength":"Select at leas one option"},"controlName":"ictItemcheckboxGroup2","validations":["required"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[{"elementType":"checkbox","label":"Project Planning","title":"Project Planning","placeholder":"","description":"Project Planning description here","errorMessages":{},"controlName":"checkbox4","validations":[],"next":"","formSection":"What is the name of your procurement?","value":true,"options":[]},{"elementType":"checkbox","label":"Market research","title":"Market research","placeholder":"","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis tortor, tempor vel turpis eu, scelerisque tincidunt quam. Integer ac molestie urna, vel tempor dui. Vestibulum interdum at dolor vitae luctus. Pellentesque nec leo a neque eleifend mollis. Cras mattis elit quis erat finibus, a laoreet magna placerat. Sed et tincidunt risus.","errorMessages":{},"controlName":"checkbox5","validations":[],"next":"","formSection":"What is the name of your procurement?","value":false,"options":[]},{"elementType":"checkbox","label":"None of the above","title":"None of the above","placeholder":"","description":"","errorMessages":{},"controlName":"checkbox6","validations":[],"next":"","formSection":"What is the name of your procurement?","value":false,"options":[],"onlyOption":true}]},{"elementType":"checkboxGroup","label":"","title":"","placeholder":"","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemcheckboxGroup1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]},{"elementType":"radioButtonGroup","label":"","title":"What is the color of your component?","placeholder":"","description":"","errorMessages":{"required":"Select one option."},"controlName":"ictItemRadioButtonGroup1","validations":["required"],"next":"","formSection":"","value":"blue","options":[{"elementType":"radioButton","label":"Red","value":"red","controlName":"optColor","validations":[],"next":"","formSection":""},{"elementType":"radioButton","label":"Green","description":"This is the description of Green","value":"green","controlName":"optColor","validations":[],"next":"","formSection":""},{"elementType":"radioButton","label":"Blue","value":"blue","controlName":"optColor","validations":[],"next":"","formSection":""}]}],"formButtons":{"add":"Add "},"clearForm":true,"disable":false}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map