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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ict-listing-page/ict-listing-page.component */ 7327);
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ 3048);
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/test/test.component */ 9492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent },
    { path: 'ict-listing-page', component: _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_0__.IctListingPageComponent },
    { path: 'test', component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_2__.TestComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/art-content-data/art-content-data.service */ 3604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ 3228);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/section508-header/section508-header.component */ 1592);
/* harmony import */ var _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/section508-banner/section508-banner.component */ 6452);
/* harmony import */ var _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/section508-footer/section508-footer.component */ 1137);










function AppComponent_art_banner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "art-banner", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r0.artContentDataService.getBannerData().title)("header", ctx_r0.artContentDataService.getBannerData().header);
} }
function AppComponent_art_generic_text_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "art-generic-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.artContentDataService.getHeader(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "art-generic-text", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r2.artContentDataService.getFooter().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r2.artContentDataService.getFooter().data, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
class AppComponent {
    /**
    * @description Using service for all shared content
    * @params artContentDataService
    */
    constructor(artContentDataService, router) {
        this.artContentDataService = artContentDataService;
        this.router = router;
        this.url = "/preview/gsa/section508.gov/test-art/art-v2";
        this.title = 'ART';
    }
    //url="";
    ngOnInit() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlPath;
        console.log(this.url);
        // update the on local, federalist or prod
        //this.url = this.router.url.includes('preview/gsa/section508.gov')? "/preview/gsa/section508.gov/feature/ECASOGP-dev-art-header-footer/art-v2":"/art-v2"; 
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__.ArtContentDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 7, consts: [["aria-label", "Official Government Site Banner", 1, "page-landing-page", "layout-demo", "art-default-font"], ["href", "#main-content", 1, "usa-skipnav"], [3, "url"], ["id", "backtotop", "title", "Go to top", 2, "display", "none"], [1, "usa-overlay"], ["id", "main-content", 3, "title", "header", 4, "ngIf"], [1, "usa-graphic-list", "usa-section", "art-banner"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "tablet:", "grid-col"], [1, "margin-bottom-2"], [4, "ngIf"], ["art-generic-text-layout", "border", 1, "margin-top-5"], ["class", "padding-x-2 padding-bottom-2 margin-top-2", 4, "ngIf"], [1, "margin-y-2", 3, "innerHTML"], ["id", "main-content", 3, "title", "header"], [3, "innerHTML"], [1, "padding-x-2", "padding-bottom-2", "margin-top-2"], [3, "title"], [1, "margin-top-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Skip to main content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "art-section508-banner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u02C4 Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "art-section508-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AppComponent_art_banner_8_Template, 1, 2, "art-banner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "section", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AppComponent_art_generic_text_14_Template, 2, 1, "art-generic-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AppComponent_div_17_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "art-section508-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getBannerData());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getFooter());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx.artContentDataService.getUpdatedDate(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", ctx.url);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__.ArtGenericTextComponent, _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_4__.Section508HeaderComponent, _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_5__.Section508BannerComponent, _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_6__.Section508FooterComponent], styles: [".art-banner[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n#backtotop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: rgba(17, 47, 78, 0.93);\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydC1iYW5uZXJ7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNiYWNrdG90b3B7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNyw0Nyw3OCwwLjkzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
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
/* harmony import */ var _shared_components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/art-text-field/art-text-field.component */ 3150);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/templates/art-form-template/art-form-template.component */ 1589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/art-ict-item/art-ict-item.component */ 5478);
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/test/test.component */ 9492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__.HashLocationStrategy }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent,
        _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__.ArtButtonComponent,
        _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingPageComponent,
        _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent,
        _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_6__.IctListingPageComponent,
        _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_7__.ArtGenericTextComponent,
        _shared_components_section508_header_section508_header_component__WEBPACK_IMPORTED_MODULE_8__.Section508HeaderComponent,
        _shared_components_section508_banner_section508_banner_component__WEBPACK_IMPORTED_MODULE_9__.Section508BannerComponent,
        _shared_components_section508_footer_section508_footer_component__WEBPACK_IMPORTED_MODULE_10__.Section508FooterComponent,
        _shared_components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_11__.ArtTextFieldComponent,
        _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_12__.ArtFormTemplateComponent,
        _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_13__.ICTItemComponent,
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_14__.TestComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_art_ict_lp_art_ict_lp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/art-ict-lp/art-ict-lp.service */ 5767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/templates/art-form-template/art-form-template.component */ 1589);
/* harmony import */ var _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/art-ict-item/art-ict-item.component */ 5478);









function IctListingPageComponent_art_generic_text_8_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.artIctLpService.getErrorMsg());
} }
function IctListingPageComponent_art_generic_text_8_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "art-ict-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("delete", function IctListingPageComponent_art_generic_text_8_span_11_Template_art_ict_item_delete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.onItemDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const eachIctItem_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", index_r5 + 1)("ictItem", eachIctItem_r4);
} }
function IctListingPageComponent_art_generic_text_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "art-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonData", ctx_r3.artIctLpService.getContBtl())("disabled", ctx_r3.ictItems.length <= 0);
} }
function IctListingPageComponent_art_generic_text_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 7)(2, "div", 8)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 9)(6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "art-form-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formData", function IctListingPageComponent_art_generic_text_8_Template_art_form_template_formData_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onFormSubmitted($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, IctListingPageComponent_art_generic_text_8_i_9_Template, 2, 1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, IctListingPageComponent_art_generic_text_8_span_11_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, IctListingPageComponent_art_generic_text_8_div_12_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.formConfig[0].formElements[0].formSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.inputFieldDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formConfig", ctx_r0.formConfig)("scanChange", ctx_r0.scanChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.ictItems.length >= ctx_r0.maxItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.ictItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.ictItems);
} }
class IctListingPageComponent {
    /**
     * @description using the ictItemService component and artIctLpService service
     * @param ictItemService artIctLpService
     */
    constructor(ictItemService, artIctLpService) {
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
         * @description The description for the input field
         * @type:string
         */
        this.inputFieldDesc = "";
        /**
         * @description to store all the ICT Items created or uploaded
         * @type: ICTInterface[]
         */
        this.ictItems = [];
        /**
         * @description Used to check if the data has been upload component is displayed
         * @type boolean
         */
        this.uploadDisplayed = false;
    }
    ngOnInit() {
        this.maxItems = this.artIctLpService.getMaxItems();
        console.log("in ICT", this.ictItemService.get());
        this.formConfig = this.artIctLpService.getConfigurations();
        this.inputFieldDesc = this.formConfig[0].formElements[0].label.concat("");
        this.formConfig[0].formElements[0].label = "";
        this.tempPlaceHolder = this.formConfig[0].formElements[0].placeholder;
        // To Test 2 forms TOBE REMOVED
        //this.formConfig.push(this.artIctLpService.getConfigurations2());
    }
    /**
     * @return void
     * @description When the user submit an project or ICT name, it will call the addIctItem function
     * @param data
     */
    onFormSubmitted(data) {
        const key = Object.keys(data)[0];
        const val = data[key];
        const tempIctItem = { name: val, langKeyWords: [data], timeStamp: (Date.now()).toString() };
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
            // If the form  is disabled and an iem is being removed 
            if (this.ictItems.length <= this.maxItems && this.formConfig[0].disable) {
                this.formConfig[0].disable = false;
                this.formConfig[0].formElements[0].placeholder = this.tempPlaceHolder;
                this.scanChange = "false";
                this.ictItems.splice(index, 1);
            }
            else {
                this.ictItems.splice(index, 1);
            }
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
        this.ictItemService.set(event);
        event.forEach(eachIctItem => this.addIctItem(eachIctItem));
    }
}
IctListingPageComponent.ɵfac = function IctListingPageComponent_Factory(t) { return new (t || IctListingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_art_ict_lp_art_ict_lp_service__WEBPACK_IMPORTED_MODULE_1__.ArtIctLpService)); };
IctListingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: IctListingPageComponent, selectors: [["app-ict-listing-page"]], decls: 9, vars: 5, consts: [[1, "margin-bottom-3"], [1, "art-margin-bottom-03"], ["type", "button", 1, "usa-button", "usa-button--outline", 3, "click"], ["id", "art-upload-button-container", 1, "margin-left-1", "margin-bottom-3", 3, "hidden"], [3, "maxFilesNbr", "getFileData"], ["art-generic-text-layout", "top-border"], [4, "ngIf"], [1, "margin-3"], [1, "font-serif-lg", "margin-bottom-1"], [1, "margin-left-2"], [1, "margin-bottom-0"], [3, "formConfig", "scanChange", "formData"], ["class", "usa-error-message font-sans-2xs", 4, "ngIf"], [1, "margin-left-2", "margin-top-1"], [4, "ngFor", "ngForOf"], ["class", "margin-top-5", 4, "ngIf"], [1, "usa-error-message", "font-sans-2xs"], [3, "index", "ictItem", "delete"], [1, "margin-top-5"], [3, "buttonData", "disabled"]], template: function IctListingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IctListingPageComponent_Template_button_click_3_listener() { return ctx.uploadDisplayed = !ctx.uploadDisplayed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "art-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("getFileData", function IctListingPageComponent_Template_art_file_upload_getFileData_6_listener($event) { return ctx.onFileReceive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, IctListingPageComponent_art_generic_text_8_Template, 13, 7, "art-generic-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.artIctLpService.getUploadBtn().description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.artIctLpService.getUploadBtn().label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.uploadDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxFilesNbr", ctx.maxItems - ctx.ictItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formConfig[0].formElements[0].formSection);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__.ArtButtonComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_4__.ArtGenericTextComponent, _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_5__.ArtFormTemplateComponent, _shared_components_art_ict_item_art_ict_item_component__WEBPACK_IMPORTED_MODULE_6__.ICTItemComponent], styles: [".art-margin-bottom-03[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljdC1saXN0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImljdC1saXN0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0LW1hcmdpbi1ib3R0b20tMDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/landing-page/landing-page.service */ 3330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/art-generic-text/art-generic-text.component */ 4471);






function LandingPageComponent_art_generic_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 4)(2, "div", 5)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "art-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.lpButtonHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttonData", ctx_r0.buttonData);
} }
function LandingPageComponent_art_generic_text_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 8);
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
         * @description Initializing the button data for the get started button to the ict listing page
         * @type IButtonInterface
         */
        this.buttonData = { label: "" };
        /**
         * @description Used to check if the data has been upload component is displayed
         * @type boolean
         */
        this.uploadDisplayed = false;
    }
    ngOnInit() {
        //Initialization
        this.lpButtonHeader = this.landingPageService.getLpButtonData().buttonHeader;
        this.buttonData = this.landingPageService.getLpActionButton();
    }
    /**
     * @description when the file has been uploaded successfully, this function is called
     * @param event
     * @type ICTInterface
     * @return void
     */
    onFileReceive(event) {
        this.ictItemService.set(event);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_1__.LandingPageService)); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["art-landing-page"]], decls: 5, vars: 2, consts: [["aria-label", "Landing Banner"], ["art-generic-text-layout", "top-border"], [4, "ngIf"], ["art-generic-text-layout", "background-color"], [1, "margin-2"], [1, "font-serif-lg", "margin-bottom-1"], [3, "buttonData"], [1, "padding-x-3", "padding-y-1", "margin-top-5"], [3, "innerHTML"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingPageComponent_art_generic_text_2_Template, 6, 2, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LandingPageComponent_art_generic_text_4_Template, 3, 1, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lpButtonHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.landingPageService && ctx.landingPageService.getSampleProLang);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_2__.ArtButtonComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__.ArtGenericTextComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_art_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/art-test.service */ 6674);
/* harmony import */ var _shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/templates/art-form-template/art-form-template.component */ 1589);




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
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_art_test_service__WEBPACK_IMPORTED_MODULE_1__.ArtTestService)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 1, vars: 2, consts: [[3, "formConfig", "scanChange", "formData"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "art-form-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formData", function TestComponent_Template_art_form_template_formData_0_listener($event) { return ctx.onFormSubmitted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formConfig", ctx.formConfig)("scanChange", ctx.scanChange);
    } }, dependencies: [_shared_templates_art_form_template_art_form_template_component__WEBPACK_IMPORTED_MODULE_2__.ArtFormTemplateComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


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


class ArtButtonComponent {
    constructor(router) {
        this.router = router;
        /**
         * @description to disabled the button
         * @type boolean
         */
        this.disabled = false;
    }
    ngOnInit() {
    }
    /**
     * @return void
     * @description this function is trigger when the button is and will redirect the user to the destination
     */
    buttonClicked() {
        if (this.buttonData?.destination) {
            this.router.navigateByUrl(this.buttonData?.destination);
        }
    }
}
ArtButtonComponent.ɵfac = function ArtButtonComponent_Factory(t) { return new (t || ArtButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ArtButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtButtonComponent, selectors: [["art-button"]], inputs: { buttonData: "buttonData", disabled: "disabled" }, decls: 2, vars: 3, consts: [["type", "button", 1, "usa-button", "usa-button--accent-warm", 3, "disabled", "title", "click"]], template: function ArtButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtButtonComponent_Template_button_click_0_listener() { return ctx.buttonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.buttonData == null ? null : ctx.buttonData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonData == null ? null : ctx.buttonData.label, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
    }
    ngOnInit() {
    }
}
ArtGenericTextComponent.ɵfac = function ArtGenericTextComponent_Factory(t) { return new (t || ArtGenericTextComponent)(); };
ArtGenericTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtGenericTextComponent, selectors: [["art-generic-text"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["id", "art-agt-title"]], template: function ArtGenericTextComponent_Template(rf, ctx) { if (rf & 1) {
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
ICTItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ICTItemComponent, selectors: [["art-ict-item"]], inputs: { index: "index", ictItem: "ictItem" }, outputs: { delete: "delete" }, decls: 6, vars: 3, consts: [[3, "title"], [1, "usa-button", "usa-button--secondary", 3, "click"]], template: function ICTItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span")(2, "abbr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ICTItemComponent_Template_button_click_4_listener() { return ctx.deleteClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.ictItem == null ? null : ctx.ictItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ictItem == null ? null : ctx.ictItem.name);
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1em;\n  border: 2px solid blue;\n  border-radius: 4px;\n  padding: 0.5em;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 7em;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: attr(data-index);\n  background-color: white;\n  top: -0.7em;\n  left: 0.8em;\n  padding: 0 0.5em;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1pY3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFBTTtFQUNFLHFCQUFBO0FBRVIiLCJmaWxlIjoiYXJ0LWljdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDdlbTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogYXR0cihkYXRhLWluZGV4KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdG9wOiAtLjdlbTtcbiAgICAgIGxlZnQ6IC44ZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgYWJiciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });


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





function ArtTextFieldComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.displayError());
} }
const _c0 = function (a0) { return { "usa-form-group--error": a0 }; };
const _c1 = function (a0) { return { "usa-input--error": a0 }; };
class ArtTextFieldComponent {
    constructor() {
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
ArtTextFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArtTextFieldComponent, selectors: [["art-text-field"]], inputs: { formData: "formData", control: "control" }, decls: 5, vars: 10, consts: [[1, "usa-form-group", 3, "ngClass"], ["for", "input", 1, "usa-label"], ["class", "usa-error-message", "role", "alert", "for", "input-error", 4, "ngIf"], ["id", "input", "name", "input", 1, "usa-input", 3, "ngClass", "placeholder", "formControl"], ["role", "alert", "for", "input-error", 1, "usa-error-message"]], template: function ArtTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ArtTextFieldComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.displayError()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formData == null ? null : ctx.formData.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayError());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.displayError()))("placeholder", ctx.formData == null ? null : ctx.formData.placeholder)("formControl", ctx.fromControl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["input[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n.usa-form-group[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImFydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgd2lkdGg6IDE1cmVtO1xufVxuXG4udXNhLWZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuIl19 */"] });
var ErrorText;
(function (ErrorText) {
    ErrorText["maxlength"] = "maxlength";
})(ErrorText || (ErrorText = {}));


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select JSON files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FileUploadComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachFile_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", eachFile_r8.name, " ");
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Change files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileUploadComponent_div_7_div_5_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.files.length, " file", ctx_r1.files.length == 1 ? "" : "s", " selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.files);
} }
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag file here or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "choose from folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function FileUploadComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r10, " ");
} }
function FileUploadComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_11_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.selectErrors);
} }
function FileUploadComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r12, " ");
} }
function FileUploadComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_12_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.result.errors);
} }
function FileUploadComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.successMessage, " ");
} }
function FileUploadComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onUpload()); });
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
         * @description the maximum number of files to be uploaded
         */
        this.maxFilesNbr = 8;
    }
    ngOnInit() {
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
            this.selectErrors.push('Maximum Upload is ' + this.maxFilesNbr.toString() + '.');
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
        console.log("=====", event.target.files);
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
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["art-file-upload"]], inputs: { maxFilesNbr: "maxFilesNbr" }, outputs: { getFileData: "getFileData" }, decls: 15, vars: 7, consts: [["aria-label", "File upload", 1, "usa-graphic-list"], [1, "usa-form-group"], ["for", "file-input-specific", 1, "usa-label"], ["class", "usa-hint", "id", "file-input-specific-hint", 4, "ngIf"], [1, "usa-file-input"], [1, "art-file-input__target"], ["class", "margin-bottom-3", 4, "ngIf"], ["class", "usa-file-input__instructions", 4, "ngIf"], [1, "usa-file-input__box"], ["id", "file-input-specific", "type", "file", "name", "file-input-specific", "aria-describedby", "file-input-specific-hint", "accept", ".json", "multiple", "multiple", "aria-live", "polite", "aria-label", "No files selected", "data-default-aria-label", "No files selected", 1, "usa-file-input__input", 3, "change"], ["class", "input-error-alert error", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], ["class", "usa-button usa-button--outline", 3, "click", 4, "ngIf"], ["id", "file-input-specific-hint", 1, "usa-hint"], [1, "margin-bottom-3"], [1, "usa-file-input__preview-heading"], [1, "usa-file-input__choose"], ["class", "usa-file-input__preview", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "usa-file-input__preview"], [1, "usa-file-input__instructions"], [1, "usa-file-input__drag-text"], [1, "input-error-alert", "error"], ["class", "margin-x-2", 4, "ngFor", "ngForOf"], [1, "margin-x-2"], [1, "error"], [4, "ngFor", "ngForOf"], [1, "success"], [1, "usa-button", "usa-button--outline", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Input accepts only specific file types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileUploadComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FileUploadComponent_div_7_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FileUploadComponent_div_8_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_10_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FileUploadComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FileUploadComponent_div_12_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FileUploadComponent_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FileUploadComponent_button_14_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileInputRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReadyToUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isReadyToUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.errors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
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
Section508BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section508BannerComponent, selectors: [["art-section508-banner"]], inputs: { url: "url" }, decls: 35, vars: 3, consts: [[1, "usa-banner"], [1, "usa-accordion"], [1, "usa-banner__header"], [1, "usa-banner__inner"], [1, "grid-col-auto"], ["aria-hidden", "true", 1, "usa-banner__header-flag", 3, "src"], [1, "grid-col-fill", "tablet:grid-col-auto"], [1, "usa-banner__header-text"], ["aria-hidden", "true", 1, "usa-banner__header-action"], ["aria-expanded", "false", "aria-controls", "gov-banner", 1, "usa-accordion__button", "usa-banner__button"], [1, "usa-banner__button-text"], ["id", "gov-banner", "hidden", "", 1, "usa-banner__content", "usa-accordion__content"], [1, "grid-row", "grid-gap-lg"], [1, "usa-banner__guidance", "tablet:grid-col-6"], ["alt", "Dot gov", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"], [1, "usa-media-block__body"], ["alt", "Https", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"]], template: function Section508BannerComponent_Template(rf, ctx) { if (rf & 1) {
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
Section508FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section508FooterComponent, selectors: [["art-section508-footer"]], inputs: { url: "url" }, decls: 111, vars: 2, consts: [[1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-container"], [1, "grid-row", "grid-gap", "padding-bottom-4"], [1, "desktop:grid-col-4"], [1, "text-bold"], [1, "add-list-reset", "line-height-sans-6"], ["href", "https://www.gsa.gov/technology/government-it-initiatives/digital-strategy", "target", "_blank"], ["href", "https://www.plainlanguage.gov/", "target", "_blank"], ["href", "https://designsystem.digital.gov/", "target", "_blank"], ["href", "https://www.cio.gov/about/members-and-leadership/accessibility-cop/", "target", "_blank"], [1, "desktop:grid-col-2"], ["href", "https://www.section508.gov/about-us/", "aria-label", "About Us in Organization"], ["aria-label", "Contact Us details", "href", "https://www.section508.gov/contact-us/"], ["href", "https://www.section508.gov/contributors/", "aria-label", "Section508.gov site Contributors"], [1, "desktop:grid-col-3"], ["aria-label", "Accessibility Requirements Tool", 3, "href"], ["href", "https://www.section508.gov/buy/solicitation-review-tool", "aria-label", "Solicitation Review Tool"], ["href", "https://www.section508.gov/content/guide-accessible-web-design-development"], ["href", "https://digitaldashboard.gov/", "target", "_blank"], ["href", "https://analytics.usa.gov/", "target", "_blank"], ["href", "https://www.section508.gov/content/glossary"], ["href", "https://www.section508.gov/website-policies"], ["href", "https://www.section508.gov/tools/coordinator-listing"], ["href", "https://www.section508.gov/manage/join-the-508-community/"], [1, "usa-identifier"], ["aria-label", "Agency identifier,", 1, "usa-identifier__section", "usa-identifier__section--masthead"], [1, "usa-identifier__container"], [1, "usa-identifier__logos"], ["href", "https://gsa.gov", 1, "usa-identifier__logo"], ["alt", "General Services Administration Logo", "integrity", "sha512-5ciC+l/ipR9VSnpK/i6PqrSHd0/pMTEBs6nArXajxdJ2S+59+E/itSW10iB2emnqYwwo1lYSTAXMiRp7TMGStg==", "crossorigin", "anonymous", 1, "usa-identifier__logo-img", 3, "src"], ["aria-label", "Agency description", 1, "usa-identifier__identity"], [1, "usa-identifier__identity-domain"], [1, "usa-identifier__identity-disclaimer"], ["href", "https://www.gsa.gov/"], ["aria-label", "Important links,,", 1, "usa-identifier__section", "usa-identifier__section--required-links"], [1, "usa-identifier__required-links-list"], [1, "usa-identifier__required-links-item"], ["href", "https://www.gsa.gov/about-us", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/accessibility-aids", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/freedom-of-information-act-foia", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsaig.gov/", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/reports/budget-performance", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/website-policies", 1, "usa-identifier__required-link", "usa-link"], ["aria-label", "U.S. government information and services,,", 1, "usa-identifier__section", "usa-identifier__section--usagov"], [1, "usa-identifier__usagov-description"], ["href", "https://www.usa.gov/", 1, "usa-link"]], template: function Section508FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
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
})(ElementType || (ElementType = {}));


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FileUploadService {
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
                            else {
                                fileData.timeStamp = new Date().toString();
                                resolve({ data: fileData });
                            }
                        }
                        catch (error) {
                            resolve({ data: 'Can\'t parse JSON: ' + fileName, error: true });
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
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


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
        return this.ictItem;
    }
    /**
     * @description function to assign a value to an ICT item
     * @param items
     */
    set(items) {
        this.ictItem.push(...items);
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
/* harmony export */   "LandingPageService": () => (/* binding */ LandingPageService)
/* harmony export */ });
/* harmony import */ var _assets_data_lp_button_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/lp-button.json */ 8296);
/* harmony import */ var _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/data/buttons.json */ 3373);
/* harmony import */ var _assets_data_sample_procurement_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/data/sample-procurement.json */ 4209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class LandingPageService {
    constructor() { }
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
    getLpActionButton() {
        return _assets_data_buttons_json__WEBPACK_IMPORTED_MODULE_1__.getStarted;
    }
    /**
     * @description Getting the data for the Sample Procurement Language in 3 Steps in the json file
     * @returns string
     */
    getSampleProLang() {
        return _assets_data_sample_procurement_json__WEBPACK_IMPORTED_MODULE_2__.data;
    }
}
LandingPageService.ɵfac = function LandingPageService_Factory(t) { return new (t || LandingPageService)(); };
LandingPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LandingPageService, factory: LandingPageService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/form-element.interface */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/art-text-field/art-text-field.component */ 3150);







function ArtFormTemplateComponent_div_0_div_3_art_text_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "art-text-field", 7);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const index_r7 = ctx_r11.index;
    const eachControl_r6 = ctx_r11.$implicit;
    const eachFormConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", eachFormConfig_r1.formElements[index_r7])("control", eachControl_r6);
} }
function ArtFormTemplateComponent_div_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ArtFormTemplateComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArtFormTemplateComponent_div_0_div_3_art_text_field_1_Template, 1, 2, "art-text-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArtFormTemplateComponent_div_0_div_3_div_2_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r7 = ctx.index;
    const eachFormConfig_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", eachFormConfig_r1.formElements[index_r7].elementType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", eachFormConfig_r1.formElements[index_r7].elementType === "checkboxGroup");
} }
function ArtFormTemplateComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const outerIndex_r2 = ctx_r13.index;
    const eachFormConfig_r1 = ctx_r13.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r4.formList[outerIndex_r2].valid || ctx_r4.formList[outerIndex_r2].value === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", eachFormConfig_r1.formButtons.add, " ");
} }
function ArtFormTemplateComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const outerIndex_r2 = ctx_r14.index;
    const eachFormConfig_r1 = ctx_r14.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r5.formList[outerIndex_r2].valid || ctx_r5.formList[outerIndex_r2].value === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", eachFormConfig_r1.formButtons.submit, " ");
} }
const _c0 = function (a0, a1, a2) { return { "flex-row": a0, "flex-align-end": a1, "flex-column": a2 }; };
function ArtFormTemplateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ArtFormTemplateComponent_div_0_Template_form_ngSubmit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const outerIndex_r2 = restoredCtx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onFormSubmit(outerIndex_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArtFormTemplateComponent_div_0_div_3_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ArtFormTemplateComponent_div_0_button_4_Template, 2, 2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ArtFormTemplateComponent_div_0_div_5_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const eachFormConfig_r1 = ctx.$implicit;
    const outerIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formList[outerIndex_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c0, eachFormConfig_r1.formButtons.add, eachFormConfig_r1.formButtons.add, !eachFormConfig_r1.formButtons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.controlList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", eachFormConfig_r1.formButtons.add);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", eachFormConfig_r1.formButtons.submit);
} }
class ArtFormTemplateComponent {
    constructor(fb) {
        this.fb = fb;
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
         * @description This input from the parent will provide all the configuration for the forms and elements which will be created
         * @type FormTemplateInterface
         */
        this.formConfig = [];
        /**
         * @description Will return the data to the parent for only 1 form after form submission
         * @type FormData[]
         */
        this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
    }
    /**
     * @description Form Initialization
     * @returns void
     */
    ngOnInit() {
        // Setting each Form
        this.formConfig.forEach((eachConfig, outerIndex) => {
            //Init  each form
            this.formList.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({}));
            //Only for debugging TOBE REMOVED
            this.formList[outerIndex].valueChanges.subscribe((data) => {
                console.log("Form-> ", 1 + outerIndex);
                console.log(data);
            });
            //create controls elements for each form
            eachConfig.formElements.forEach((eachFormElement, index) => {
                if (eachFormElement.elementType === src_app_shared_models_form_element_interface__WEBPACK_IMPORTED_MODULE_0__.ElementType.text) {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(eachFormElement.value, eachFormElement.validations));
                }
                else {
                    this.formList[outerIndex].addControl(eachFormElement.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({}));
                }
            });
            // Check if a form needs to be disabled based on its config or parent request. It should be if the ICT lp has 10 ICT items 
            if (this.formConfig[outerIndex].disable)
                this.formList[outerIndex].disable();
        });
    }
    /**
     * @description Will be called on a form submission button being clicked. And will emit the data to its parent
     * @param index
     * @rerun void
     */
    onFormSubmit(index) {
        //TO BE REMOVED
        console.log("Result--> ", this.formList[index].value);
        this.formData.emit(this.formList[index].value);
        //Will reset the form based on the its configuration
        if (this.formConfig[index].clearForm)
            this.formList[index].reset();
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
}
ArtFormTemplateComponent.ɵfac = function ArtFormTemplateComponent_Factory(t) { return new (t || ArtFormTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
ArtFormTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArtFormTemplateComponent, selectors: [["art-form-template"]], inputs: { formConfig: "formConfig", scanChange: "scanChange" }, outputs: { formData: "formData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "grid-row", 3, "ngClass"], ["id", "art-add-btn", "class", "usa-button usa-button--accent-warm", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "margin-top-3", 4, "ngIf"], [3, "formData", "control", 4, "ngIf"], [4, "ngIf"], [3, "formData", "control"], ["id", "art-add-btn", "type", "submit", 1, "usa-button", "usa-button--accent-warm", 3, "disabled"], [1, "margin-top-3"], ["type", "submit", 1, "usa-button", "usa-button--accent-warm", 3, "disabled"]], template: function ArtFormTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ArtFormTemplateComponent_div_0_Template, 6, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formConfig);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _components_art_text_field_art_text_field_component__WEBPACK_IMPORTED_MODULE_1__.ArtTextFieldComponent], styles: ["#art-add-btn[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFDSiIsImZpbGUiOiJhcnQtZm9ybS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcnQtYWRkLWJ0bntcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufSJdfQ== */"] });


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
    urlPath: "/preview/gsa/section508.gov/development-art/art-v2"
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

module.exports = JSON.parse('{"getStarted":{"label":"Get Started","description":"Get Started Description","destination":"/ict-listing-page"},"uploadICT":{"label":"Upload ICT Item(s)","description":"Click the button below to modify/upload a previous acquisition file.","destination":""},"continue":{"label":"Continue","description":"Get Started Description","destination":"/ict-form-page"}}');

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

module.exports = JSON.parse('{"data":"<p class=\'first-par\'>The <a href=\'https://www.section508.gov/art\'>Accessibility Requirements Tool (ART)</a> is a step-by-step guide to help you easily identify relevant accessibility requirements from the <a href=\'https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines\'>Revised 508 Standards</a>, and incorporate them into your procurement and contracting documentation, as well as in-house IT development. GSA’s IT Accessibility Program developed ART as part of its mission to provide technical assistance to federal agencies, to improve compliance with <a href=\'https://www.section508.gov/manage/laws-and-policies/\'>Section 508 of the Rehabilitation Act</a>. Use ART to buy and build technology that’s accessible to all.</p>"}');

/***/ }),

/***/ 5284:
/*!*************************************!*\
  !*** ./src/assets/data/ict-lp.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"errorMessage":"You have reached the maximum number of ICT Items","maxItems":8}');

/***/ }),

/***/ 8296:
/*!****************************************!*\
  !*** ./src/assets/data/lp-button.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"buttonHeader":"Click the button below to get 508 Language for your procurement."}');

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

module.exports = JSON.parse('{"data":"<strong>Reviewed/Updated: </strong>April 2022"}');

/***/ }),

/***/ 5893:
/*!***************************************************!*\
  !*** ./src/assets/form-config/ict-lp.config.json ***!
  \***************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"formElements":[{"elementType":"text","label":"First: Please list Items or deliverables that contain ICT. You may add more than one ICT item. You may also use one name for multiple ICT Items providing an overall solution (for example: Security Equipment).","title":"","placeholder":"Please enter an ICT Item","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemTextfield1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]},{"elementType":"checkboxGroup","label":"","title":"","placeholder":"","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemcheckboxGroup1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]}],"formButtons":{"add":"Add "},"clearForm":true,"disable":false}]');

/***/ }),

/***/ 1599:
/*!*************************************************!*\
  !*** ./src/assets/form-config/test.config.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"formElements":[{"elementType":"text","label":"","title":"","placeholder":"Please enter an ICT Item","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemTextfield1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]},{"elementType":"checkboxGroup","label":"","title":"","placeholder":"","description":"","errorMessages":{"maxlength":"Maximum characters are 25"},"controlName":"ictItemcheckboxGroup1","validations":["required","maxLength(25)"],"next":"","formSection":"What is the name of your procurement?","value":"","options":[]}],"formButtons":{"submit":"Submit "},"clearForm":true,"disable":false}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map