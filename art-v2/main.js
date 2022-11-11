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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ict-listing-page/ict-listing-page.component */ 7327);
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ 3048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent },
    { path: 'ict-listing-page', component: _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_0__.IctListingPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/art-content-data/art-content-data.service */ 3604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ 3228);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/art-generic-text/art-generic-text.component */ 4471);







function AppComponent_art_banner_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "art-banner", 110);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r0.artContentDataService.getBannerData().title)("header", ctx_r0.artContentDataService.getBannerData().header);
} }
function AppComponent_art_generic_text_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "art-generic-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.artContentDataService.getHeader(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function AppComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 112)(1, "art-generic-text", 113)(2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.artContentDataService.getFooter().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.artContentDataService.getFooter().data, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class AppComponent {
    /**
    * @description Using service for all shared content
    * @params artContentDataService
    */
    constructor(artContentDataService, router) {
        this.artContentDataService = artContentDataService;
        this.router = router;
        this.url = "/preview/gsa/section508.gov/feature/ECASOGP-dev-art-header-footer/art-v2";
        this.title = 'ART';
    }
    //url="";
    ngOnInit() {
        //this.url = environment.urlPath;
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlPath);
        // update the on local, federalist or prod
        //this.url = this.router.url.includes('preview/gsa/section508.gov')? "/preview/gsa/section508.gov/feature/ECASOGP-dev-art-header-footer/art-v2":"/art-v2"; 
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_art_content_data_art_content_data_service__WEBPACK_IMPORTED_MODULE_1__.ArtContentDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 220, vars: 12, consts: [["aria-label", "Official Government Site Banner", 1, "page-landing-page", "layout-demo", "art-default-font"], [1, "usa-skipnav", 3, "routerLink"], [1, "usa-banner"], [1, "usa-accordion"], [1, "usa-banner__header"], [1, "usa-banner__inner"], [1, "grid-col-auto"], ["aria-hidden", "true", 1, "usa-banner__header-flag", 3, "src"], [1, "grid-col-fill", "tablet:grid-col-auto"], [1, "usa-banner__header-text"], ["aria-hidden", "true", 1, "usa-banner__header-action"], ["aria-expanded", "false", "aria-controls", "gov-banner", 1, "usa-accordion__button", "usa-banner__button"], [1, "usa-banner__button-text"], ["id", "gov-banner", "hidden", "", 1, "usa-banner__content", "usa-accordion__content"], [1, "grid-row", "grid-gap-lg"], [1, "usa-banner__guidance", "tablet:grid-col-6"], ["alt", "Dot gov", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"], [1, "usa-media-block__body"], ["alt", "Https", 1, "usa-banner__icon", "usa-media-block__img", 3, "src"], ["id", "backtotop", "title", "Go to top", 2, "display", "none"], [1, "usa-overlay"], ["role", "banner", 1, "usa-header", "usa-header--extended"], [1, "usa-navbar"], ["id", "extended-logo", 1, "usa-logo"], ["href", "https://www.section508.gov/"], ["alt", "Section508.gov Home; GSA logo with text: Section508.gov Buy. Build. Be Accessible.", "integrity", "sha512-S2YGUVu8KqAmjqtxiMVq5MXieFg+L8T4y7Uv3eHZE3ePWZbUSJnehCZbsNEDiG/ZcFGxms61gqe9YViO6H/KZQ==", "crossorigin", "anonymous", 1, "logo", 3, "src"], [1, "usa-menu-btn"], ["role", "navigation", "aria-label", "Primary Site Navigation", 1, "usa-nav"], [1, "usa-nav__inner"], [1, "usa-nav__close"], ["alt", "close", "integrity", "sha512-XLawNnedFKdaFdJhoad/TAQHLO1XHwSyvZVlVpXieNmk80S974//1mU5khr0OXVTGH4H3k6mTs9tVP/J6fPoFw==", "crossorigin", "anonymous", 3, "src"], [1, "usa-nav__primary", "usa-accordion"], [1, "usa-nav__primary-item"], ["aria-label", "Policy & Management primary navigation", "href", "https://www.section508.gov/manage/", 1, "usa-nav__link"], ["aria-label", "Acquisition primary navigation", "href", "https://www.section508.gov/buy-sell/", 1, "usa-nav__link"], ["aria-label", "Content Creation primary navigation", "href", "https://www.section508.gov/create/", 1, "usa-nav__link"], ["aria-label", "Design & Develop primary navigation", "href", "https://www.section508.gov/develop/", 1, "usa-nav__link"], ["aria-label", "Testing primary navigation", "href", "https://www.section508.gov/test/", 1, "usa-nav__link"], ["aria-label", "Training, Tools & Events primary navigation", "href", "https://www.section508.gov/training/", 1, "usa-nav__link"], [1, "usa-nav__secondary"], [1, "usa-nav__secondary-links"], [1, "usa-nav__secondary-item"], ["href", "https://www.section508.gov/blog/"], ["href", "https://www.section508.gov/tools/coordinator-listing/"], ["href", "https://www.section508.gov/about-us/"], ["id", "search_form", "action", "https://search.usa.gov/search", "accept-charset", "UTF-8", "method", "get", 1, "usa-search", "usa-search--small"], ["name", "utf8", "type", "hidden", "value", "\u2713"], ["name", "affiliate", "type", "hidden", "value", "gsa-section508-accessibility"], ["role", "search"], ["for", "extended-search-field-small", 1, "usa-sr-only"], ["id", "extended-search-field-small", "type", "search", "name", "query", "autocomplete", "off", 1, "usa-input", "usagov-search-autocomplete"], ["type", "submit", 1, "usa-button", "primary-background-color"], ["alt", "Search", 1, "usa-search__submit-icon", 3, "src"], ["id", "main-content", 3, "title", "header", 4, "ngIf"], [1, "usa-graphic-list", "usa-section", "art-banner"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "tablet:", "grid-col"], [1, "margin-bottom-2"], [4, "ngIf"], ["art-generic-text-layout", "border", 1, "margin-top-5"], ["class", "padding-x-2 padding-bottom-2 margin-top-2", 4, "ngIf"], [1, "margin-y-2", 3, "innerHTML"], [1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-row", "grid-gap", "padding-bottom-4"], [1, "desktop:grid-col-4"], [1, "text-bold"], [1, "add-list-reset", "line-height-sans-6"], ["href", "https://www.gsa.gov/technology/government-it-initiatives/digital-strategy", "target", "_blank"], ["href", "https://www.plainlanguage.gov/", "target", "_blank"], ["href", "https://designsystem.digital.gov/", "target", "_blank"], ["href", "https://www.cio.gov/about/members-and-leadership/accessibility-cop/", "target", "_blank"], [1, "desktop:grid-col-2"], ["href", "https://www.section508.gov/about-us/", "aria-label", "About Us in Organization"], ["aria-label", "Contact Us details", "href", "https://www.section508.gov/contact-us/"], ["href", "https://www.section508.gov/contributors/", "aria-label", "Section508.gov site Contributors"], [1, "desktop:grid-col-3"], ["href", "https://www.section508.gov/art/", "aria-label", "Accessibility Requirements Tool"], ["href", "https://www.section508.gov/buy/solicitation-review-tool", "aria-label", "Solicitation Review Tool"], ["href", "https://www.section508.gov/content/guide-accessible-web-design-development"], ["href", "https://digitaldashboard.gov/", "target", "_blank"], ["href", "https://analytics.usa.gov/", "target", "_blank"], ["href", "https://www.section508.gov/content/glossary"], ["href", "https://www.section508.gov/website-policies"], ["href", "https://www.section508.gov/tools/coordinator-listing"], ["href", "https://www.section508.gov/manage/join-the-508-community/"], [1, "usa-identifier"], ["aria-label", "Agency identifier,", 1, "usa-identifier__section", "usa-identifier__section--masthead"], [1, "usa-identifier__container"], [1, "usa-identifier__logos"], ["href", "https://gsa.gov", 1, "usa-identifier__logo"], ["alt", "General Services Administration Logo", "integrity", "sha512-5ciC+l/ipR9VSnpK/i6PqrSHd0/pMTEBs6nArXajxdJ2S+59+E/itSW10iB2emnqYwwo1lYSTAXMiRp7TMGStg==", "crossorigin", "anonymous", 1, "usa-identifier__logo-img", 3, "src"], ["aria-label", "Agency description", 1, "usa-identifier__identity"], [1, "usa-identifier__identity-domain"], [1, "usa-identifier__identity-disclaimer"], ["href", "https://www.gsa.gov/"], ["aria-label", "Important links,,", 1, "usa-identifier__section", "usa-identifier__section--required-links"], [1, "usa-identifier__required-links-list"], [1, "usa-identifier__required-links-item"], ["href", "https://www.gsa.gov/about-us", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/accessibility-aids", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/freedom-of-information-act-foia", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsaig.gov/", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/reference/reports/budget-performance", 1, "usa-identifier__required-link", "usa-link"], ["href", "https://www.gsa.gov/website-information/website-policies", 1, "usa-identifier__required-link", "usa-link"], ["aria-label", "U.S. government information and services,,", 1, "usa-identifier__section", "usa-identifier__section--usagov"], [1, "usa-identifier__usagov-description"], ["href", "https://www.usa.gov/", 1, "usa-link"], ["id", "main-content", 3, "title", "header"], [3, "innerHTML"], [1, "padding-x-2", "padding-bottom-2", "margin-top-2"], [3, "title"], [1, "margin-top-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Skip to main content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "An official website of the United States government");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Here\u2019s how you know");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Here's how you know");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 17)(22, "p")(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "The .gov means it\u2019s official.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you\u2019re on a federal government site. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17)(30, "p")(31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "The site is secure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "https://");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u02C4 Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "header", 21)(42, "div", 22)(43, "div", 23)(44, "span")(45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "nav", 27)(50, "div", 28)(51, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ul", 31)(54, "li", 32)(55, "a", 33)(56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Policy & Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 32)(59, "a", 34)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Acquisition");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li", 32)(63, "a", 35)(64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Content Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li", 32)(67, "a", 36)(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Design & Develop");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "li", 32)(71, "a", 37)(72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "li", 32)(75, "a", 38)(76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Training, Tools & Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 39)(79, "ul", 40)(80, "li", 41)(81, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Blogs & Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "li", 41)(84, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "My Agency\u2019s 508 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "li", 41)(87, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "form", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 46)(91, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 48)(93, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Search small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, AppComponent_art_banner_98_Template, 1, 2, "art-banner", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "section", 54)(100, "div", 55)(101, "div", 56)(102, "div", 57)(103, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, AppComponent_art_generic_text_104_Template, 2, 1, "art-generic-text", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, AppComponent_div_107_Template, 4, 2, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "footer", 63)(110, "div", 64)(111, "div", 55)(112, "div", 65)(113, "div", 66)(114, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Government-wide Initiatives");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "ul", 68)(117, "li")(118, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Digital Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "li")(121, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Plain Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "li")(124, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, " US Web Design System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "li")(127, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, " CIO Council Accessibility Community of Practice (ACOP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 73)(130, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "ul", 68)(133, "li")(134, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "li")(137, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "li")(140, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, " Contributors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 77)(143, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "ul", 68)(146, "li")(147, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, " ART");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "li")(150, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, " SRT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "li")(153, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Developer Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "li")(156, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, " DigitalDashboard.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "li")(159, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, " Analytics.usa.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 77)(162, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "ul", 68)(165, "li")(166, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, " Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "li")(169, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, " Website Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "li")(172, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, " Find Your Section 508 Program Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "li")(175, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "Join the Community(Listserv)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "div", 87)(178, "section", 88)(179, "div", 89)(180, "div", 90)(181, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](182, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "div", 93)(184, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, "Section508.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, " An official website of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "General Services Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "nav", 97)(191, "div", 89)(192, "ul", 98)(193, "li", 99)(194, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "About GSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "li", 99)(197, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "Accessibility support");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "li", 99)(200, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "FOIA requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "li", 99)(203, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "No FEAR Act data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "li", 99)(206, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "Office of the Inspector General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "li", 99)(209, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "Performance reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "li", 99)(212, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "section", 107)(215, "div", 89)(216, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, " Looking for U.S. government information and services? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "Visit USA.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "#main-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/us_flag_small.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/icon-dot-gov.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/icon-https.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/images/508-logo-cropped-web-altgreen.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/uswds/img/usa-icons/close.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/icons/search-white.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getBannerData());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.artContentDataService && ctx.artContentDataService.getFooter());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.artContentDataService.getUpdatedDate(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx.url, "/assets/images/gsa-logo-md.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_3__.ArtGenericTextComponent], styles: [".art-banner[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.usa-nav__secondary-item[_ngcontent-%COMP%]::before {\n  color: #ffffff !important;\n  content: \"--\" !important;\n}\n\n.primary-background-color[_ngcontent-%COMP%] {\n  background-color: #2672de !important;\n}\n\n@media screen and (max-width: 1023px) {\n  .usa-navbar[_ngcontent-%COMP%], .usa-menu-btn[_ngcontent-%COMP%] {\n    height: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnQtYmFubmVye1xuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4udXNhLW5hdl9fc2Vjb25kYXJ5LWl0ZW0ge1xuICAmOjpiZWZvcmV7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb250ZW50OiBcIi0tXCIgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY3MmRlICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpICB7XG4gIC51c2EtbmF2YmFyLCAudXNhLW1lbnUtYnRue1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ 3048);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/banner/banner.component */ 3228);
/* harmony import */ var _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ict-listing-page/ict-listing-page.component */ 7327);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/art-generic-text/art-generic-text.component */ 4471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent,
        _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__.ArtButtonComponent,
        _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingPageComponent,
        _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent,
        _pages_ict_listing_page_ict_listing_page_component__WEBPACK_IMPORTED_MODULE_6__.IctListingPageComponent,
        _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_7__.ArtGenericTextComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);



class IctListingPageComponent {
    /**
     * @description using the ictItemService component
     * @param ictItemService
     */
    constructor(ictItemService) {
        this.ictItemService = ictItemService;
        /**
         * @description Initializing the button data for the back button to redirect to the landing page
         * @type IButtonInterface
         */
        // add the content to the ICT service and load it from a json file
        this.buttonData = { label: "Back", description: "Get Started Description", destination: "/", action: () => { } };
    }
    ngOnInit() {
        console.log("in ICT", this.ictItemService.get());
    }
}
IctListingPageComponent.ɵfac = function IctListingPageComponent_Factory(t) { return new (t || IctListingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService)); };
IctListingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IctListingPageComponent, selectors: [["app-ict-listing-page"]], decls: 1, vars: 1, consts: [[3, "buttonData"]], template: function IctListingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "art-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("buttonData", ctx.buttonData);
    } }, dependencies: [_shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_1__.ArtButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY3QtbGlzdGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/ict-item/ict-item.service */ 7719);
/* harmony import */ var src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/landing-page/landing-page.service */ 3330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/art-button/art-button.component */ 6703);
/* harmony import */ var _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/art-generic-text/art-generic-text.component */ 4471);







function LandingPageComponent_art_generic_text_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 4)(2, "div", 5)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "art-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LandingPageComponent_art_generic_text_2_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.uploadDisplayed = !ctx_r2.uploadDisplayed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " click here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "art-file-upload", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("getFileData", function LandingPageComponent_art_generic_text_2_Template_art_file_upload_getFileData_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.onFileReceive($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.lpButtonHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonData", ctx_r0.buttonData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.lpUploadButtonDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx_r0.uploadDisplayed);
} }
function LandingPageComponent_art_generic_text_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "art-generic-text")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r1.landingPageService.getSampleProLang(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
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
         * @description data for the description for the upload
         *  @type string
         */
        this.lpUploadButtonDesc = "";
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
        this.lpUploadButtonDesc = this.landingPageService.getLpButtonData().uploadDesc;
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
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_ict_item_ict_item_service__WEBPACK_IMPORTED_MODULE_0__.IctItemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_landing_page_landing_page_service__WEBPACK_IMPORTED_MODULE_1__.LandingPageService)); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["art-landing-page"]], decls: 5, vars: 2, consts: [["aria-label", "Landing Banner"], ["art-generic-text-layout", "top-border"], [4, "ngIf"], ["art-generic-text-layout", "background-color"], [1, "margin-2"], [1, "font-serif-lg", "margin-bottom-1"], [3, "buttonData"], [1, "margin-top-2"], ["id", "art-click-here", "href", "javascript:void(0)", "aria-label", "Click here to upload the JSON file", 3, "click"], ["id", "art-upload-button-container", 1, "margin-left-1", 3, "hidden"], [3, "getFileData"], [1, "padding-x-3", "padding-y-1", "margin-top-5"], [3, "innerHTML"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LandingPageComponent_art_generic_text_2_Template, 12, 4, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LandingPageComponent_art_generic_text_4_Template, 3, 1, "art-generic-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lpButtonHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.landingPageService && ctx.landingPageService.getSampleProLang);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _shared_components_art_button_art_button_component__WEBPACK_IMPORTED_MODULE_3__.ArtButtonComponent, _shared_components_art_generic_text_art_generic_text_component__WEBPACK_IMPORTED_MODULE_4__.ArtGenericTextComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


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
ArtButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtButtonComponent, selectors: [["art-button"]], inputs: { buttonData: "buttonData" }, decls: 2, vars: 2, consts: [["type", "button", 1, "usa-button", "usa-button--accent-warm", 3, "title", "click"]], template: function ArtButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtButtonComponent_Template_button_click_0_listener() { return ctx.buttonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.buttonData == null ? null : ctx.buttonData.description);
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
        //Max # of files that can be uploaded
        this.maxFileCount = 10;
        //Max size allowed for a file (in Bytes)
        this.maxFileSize = 10485760;
        /**
         * @description Used to display successful message when the files has been upload successfully
         * @type string
         */
        this.successMessage = '';
        this.getFileData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
        //checking if more than 10 files are selected
        if (event.target.files.length > 10) {
            this.selectErrors.push('Maximum Upload is 10.');
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
            this.successMessage = "File uploaded";
        });
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_0__.FileUploadService)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["art-file-upload"]], outputs: { getFileData: "getFileData" }, decls: 15, vars: 7, consts: [["aria-label", "File upload", 1, "usa-graphic-list"], [1, "usa-form-group"], ["for", "file-input-specific", 1, "usa-label"], ["class", "usa-hint", "id", "file-input-specific-hint", 4, "ngIf"], [1, "usa-file-input"], [1, "art-file-input__target"], ["class", "margin-bottom-3", 4, "ngIf"], ["class", "usa-file-input__instructions", 4, "ngIf"], [1, "usa-file-input__box"], ["id", "file-input-specific", "type", "file", "name", "file-input-specific", "aria-describedby", "file-input-specific-hint", "accept", ".json", "multiple", "multiple", "aria-live", "polite", "aria-label", "No files selected", "data-default-aria-label", "No files selected", 1, "usa-file-input__input", 3, "change"], ["class", "input-error-alert error", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], ["class", "usa-button usa-button--outline", 3, "click", 4, "ngIf"], ["id", "file-input-specific-hint", 1, "usa-hint"], [1, "margin-bottom-3"], [1, "usa-file-input__preview-heading"], [1, "usa-file-input__choose"], ["class", "usa-file-input__preview", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "usa-file-input__preview"], [1, "usa-file-input__instructions"], [1, "usa-file-input__drag-text"], [1, "input-error-alert", "error"], ["class", "margin-x-2", 4, "ngFor", "ngForOf"], [1, "margin-x-2"], [1, "error"], [4, "ngFor", "ngForOf"], [1, "success"], [1, "usa-button", "usa-button--outline", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".upload-message[_ngcontent-%COMP%] {\n  background: rgb(235, 187, 187);\n  margin-top: 5px;\n  pointer-events: none;\n  position: absolute;\n  align-items: center;\n  padding-top: 5px;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: rgb(3, 58, 3);\n  background-color: rgb(226, 230, 226);\n  border: solid 1px;\n  border-radius: 5px;\n  margin: 0 0 5px;\n  padding: 0 5px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  background-color: rgb(238, 197, 197);\n  border: solid 1px;\n  border-radius: 5px;\n  margin: 0 0 5px;\n}\n\n.usa-file-input[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.art-file-input__target[_ngcontent-%COMP%] {\n  border: 1px dashed #a9aeb1;\n  display: block;\n  font-size: 0.93rem;\n  margin-top: 0.5rem;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLW1lc3NhZ2V7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMTg3LCAxODcpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc3VjY2Vzc3tcbiAgICBjb2xvcjogcmdiKDMsIDU4LCAzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzAsIDIyNik7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5NywgMTk3KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xufVxuXG4udXNhLWZpbGUtaW5wdXR7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmFydC1maWxlLWlucHV0X190YXJnZXR7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhOWFlYjE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAuOTNyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


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
     * @returns {buttonHeader:string, uploadDesc:string}
     */
    getLpButtonData() {
        return _assets_data_lp_button_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * @description Getting the label, the description and destination text for the get stated button on the landing page
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
    urlPath: "/preview/gsa/section508.gov/feature/development-art/art-v2"
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

module.exports = JSON.parse('{"getStarted":{"label":"Get Started","description":"Get Started Description","destination":"/ict-listing-page"}}');

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

/***/ 8296:
/*!****************************************!*\
  !*** ./src/assets/data/lp-button.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"buttonHeader":"Click the button below to get 508 Language for your procurement.","uploadDesc":"To modify/upload a previous acquisition file, "}');

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map