"use strict";
(self["webpackChunkapp_breaking_bad"] = self["webpackChunkapp_breaking_bad"] || []).push([["src_app_cpanel_cpanel_module_ts"],{

/***/ 7028:
/*!****************************!*\
  !*** ./src/app/api/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* binding */ URL)
/* harmony export */ });
const URL = 'https://www.breakingbadapi.com/api';


/***/ }),

/***/ 9750:
/*!*********************************************!*\
  !*** ./src/app/api/breaking-bad.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakingBadService": () => (/* binding */ BreakingBadService)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 7028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class BreakingBadService {
    constructor(HTTP) {
        this.HTTP = HTTP;
    }
    getAllCharacters() {
        return this.HTTP.get(`${_api__WEBPACK_IMPORTED_MODULE_0__.URL}/characters`);
    }
    getAllCharactersOne(id) {
        return this.HTTP.get(`${_api__WEBPACK_IMPORTED_MODULE_0__.URL}/characters/${id}`);
    }
}
BreakingBadService.ɵfac = function BreakingBadService_Factory(t) { return new (t || BreakingBadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BreakingBadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BreakingBadService, factory: BreakingBadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7402:
/*!*************************************************!*\
  !*** ./src/app/cpanel/cpanel-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CpanelRoutingModule": () => (/* binding */ CpanelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cpanel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpanel.component */ 4310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cpanel_component__WEBPACK_IMPORTED_MODULE_0__.CpanelComponent,
        children: []
    }
];
class CpanelRoutingModule {
}
CpanelRoutingModule.ɵfac = function CpanelRoutingModule_Factory(t) { return new (t || CpanelRoutingModule)(); };
CpanelRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CpanelRoutingModule });
CpanelRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CpanelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4310:
/*!********************************************!*\
  !*** ./src/app/cpanel/cpanel.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CpanelComponent": () => (/* binding */ CpanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_breaking_bad_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/breaking-bad.service */ 9750);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _share_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/loading/loading.component */ 5980);




function CpanelComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", "Cargando, espere un momento porfavor");
} }
function CpanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Card title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Go somewhere");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ch_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class CpanelComponent {
    constructor(API) {
        this.API = API;
        this.charactersList = [];
        this.load = true;
    }
    ngOnInit() {
        this.get();
        this.getOne();
    }
    get() {
        this.load = true;
        this.API.getAllCharacters().subscribe((d) => {
            this.load = false;
            console.log(d);
            this.charactersList = d;
        });
    }
    getOne() {
        this.API.getAllCharactersOne(3).subscribe((d) => {
            console.log('Uno: ', d[0]);
        });
    }
}
CpanelComponent.ɵfac = function CpanelComponent_Factory(t) { return new (t || CpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_breaking_bad_service__WEBPACK_IMPORTED_MODULE_0__.BreakingBadService)); };
CpanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CpanelComponent, selectors: [["app-cpanel"]], decls: 4, vars: 2, consts: [[3, "message", 4, "ngIf"], [1, "container"], [1, "row"], ["class", "card container", "style", "width: 350px", 4, "ngFor", "ngForOf"], [3, "message"], [1, "card", "container", 2, "width", "350px"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"]], template: function CpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CpanelComponent_app_loading_0_Template, 1, 1, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CpanelComponent_div_3_Template, 9, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.load);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.charactersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _share_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7909:
/*!*****************************************!*\
  !*** ./src/app/cpanel/cpanel.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CpanelModule": () => (/* binding */ CpanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _cpanel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpanel-routing.module */ 7402);
/* harmony import */ var _cpanel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpanel.component */ 4310);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CpanelModule {
}
CpanelModule.ɵfac = function CpanelModule_Factory(t) { return new (t || CpanelModule)(); };
CpanelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CpanelModule });
CpanelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _cpanel_routing_module__WEBPACK_IMPORTED_MODULE_0__.CpanelRoutingModule,
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CpanelModule, { declarations: [_cpanel_component__WEBPACK_IMPORTED_MODULE_1__.CpanelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _cpanel_routing_module__WEBPACK_IMPORTED_MODULE_0__.CpanelRoutingModule,
        _share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule] }); })();


/***/ }),

/***/ 5980:
/*!****************************************************!*\
  !*** ./src/app/share/loading/loading.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoadingComponent {
    constructor() {
        this.message = 'Loading';
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], inputs: { message: "message" }, decls: 5, vars: 1, consts: [[1, "loading"], ["role", "status", 1, "spinner-border", "text-success", "wh"], [1, "sr-only"], [1, "message"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".loading[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 99;\n}\n\n.wh[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogOTk7XG59XG5cbi53aCB7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xufVxuXG4ubWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7841:
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModule": () => (/* binding */ ShareModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading/loading.component */ 5980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ShareModule {
}
ShareModule.ɵfac = function ShareModule_Factory(t) { return new (t || ShareModule)(); };
ShareModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShareModule });
ShareModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareModule, { declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cpanel_cpanel_module_ts.js.map