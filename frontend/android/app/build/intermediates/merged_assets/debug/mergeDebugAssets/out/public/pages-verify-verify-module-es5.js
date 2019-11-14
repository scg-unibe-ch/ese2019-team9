(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verify-verify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/verify/verify.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/verify/verify.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title class=\"pageTitle ion-no-padding ion-margin-bottom \" >\n          Verification\n        </ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"pageText\">\n        <ion-text >\n          Status of your email validation:\n          <br>\n          <div *ngIf=\"messageReceived\">\n            {{ message }}\n          </div>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/verify/verify.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/verify/verify.module.ts ***!
  \***********************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "./src/app/pages/verify/verify.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _core_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/auth.module */ "./src/app/core/auth.module.ts");









var routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]
    }
];
var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _core_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"]
            ],
            declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/verify/verify.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/verify/verify.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/verify/verify.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/verify/verify.page.ts ***!
  \*********************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");




var VerifyPage = /** @class */ (function () {
    function VerifyPage(activatedRoute, authService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.messageReceived = false;
    }
    VerifyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (queryParams) {
            _this.authService.verifyUser(queryParams.get('token'))
                .subscribe(function (response) {
                if (response.status === 200) {
                    _this.messageReceived = true;
                    _this.message = 'Your email was successfully verified';
                }
            }, function (error) {
                _this.messageReceived = true;
                if (error.status === 500) {
                    _this.message = 'Verification not successful!';
                }
            });
        });
    };
    VerifyPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! raw-loader!./verify.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/verify/verify.page.html"),
            styles: [__webpack_require__(/*! ./verify.page.scss */ "./src/app/pages/verify/verify.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], VerifyPage);
    return VerifyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-verify-verify-module-es5.js.map