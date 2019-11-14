(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registered-registered-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registered/registered.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registered/registered.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title class=\"pageTitle ion-no-padding\" >\n          You are now registered!\n        </ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"pageText\">\n        <ion-text>\n          We have sent a validation email to your email-address.\n          <br>\n          Please verify your email before you can log in.\n          <br>\n          If you have not received an email press the button below to resend.\n        </ion-text>\n        <div>\n          <ion-button class=\"blueButton\" fill=\"empty\" (click)=\"resendEmail()\">Resend</ion-button>\n          <ion-icon *ngIf=\"showResentMessage\" class=\"checkmark-circle\" name=\"checkmark-circle\"></ion-icon>\n          <ion-icon *ngIf=\"showNotResentMessage\" class=\"close-circle\" name=\"close-circle\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/registered/registered.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/registered/registered.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisteredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredPageModule", function() { return RegisteredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _core_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/auth.module */ "./src/app/core/auth.module.ts");
/* harmony import */ var _registered_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registered.page */ "./src/app/pages/registered/registered.page.ts");









var routes = [
    {
        path: '',
        component: _registered_page__WEBPACK_IMPORTED_MODULE_8__["RegisteredPage"]
    }
];
var RegisteredPageModule = /** @class */ (function () {
    function RegisteredPageModule() {
    }
    RegisteredPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _core_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]
            ],
            declarations: [_registered_page__WEBPACK_IMPORTED_MODULE_8__["RegisteredPage"]]
        })
    ], RegisteredPageModule);
    return RegisteredPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registered/registered.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/registered/registered.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyZWQvcmVnaXN0ZXJlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/registered/registered.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/registered/registered.page.ts ***!
  \*****************************************************/
/*! exports provided: RegisteredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredPage", function() { return RegisteredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");



var RegisteredPage = /** @class */ (function () {
    function RegisteredPage(authService) {
        this.authService = authService;
        this.showResentMessage = false;
        this.showNotResentMessage = false;
    }
    RegisteredPage.prototype.ngOnInit = function () {
    };
    RegisteredPage.prototype.resendEmail = function () {
        var _this = this;
        this.authService.resendEmail()
            .subscribe(function (data) {
            _this.showResentMessage = true;
        }, function (error) {
            _this.showNotResentMessage = true;
        });
    };
    RegisteredPage.ctorParameters = function () { return [
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    RegisteredPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registered',
            template: __webpack_require__(/*! raw-loader!./registered.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/registered/registered.page.html"),
            styles: [__webpack_require__(/*! ./registered.page.scss */ "./src/app/pages/registered/registered.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisteredPage);
    return RegisteredPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registered-registered-module-es5.js.map