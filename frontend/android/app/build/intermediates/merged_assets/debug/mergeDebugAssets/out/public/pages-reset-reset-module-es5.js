(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-reset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reset/reset.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reset/reset.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title class=\"pageTitle ion-no-padding\" >\n          Reset your password!\n        </ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n     <ion-col offset=\"4\" size=\"4\">\n       <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmitReset()\">\n         <ion-card class=\"formElement\" >\n           <app-input-form\n                   [inputForm]=\"resetForm\" [givenName]=\"'password'\" [text]=\"'Enter new password'\" [validationMessages]=\"validationMessages.password\"\n                   [type]=\"'password'\" [inputMode]=\"'password'\">\n           </app-input-form>\n         </ion-card>\n         <ion-item *ngIf=\"messageReceived && isErrorMessage\" class=\"invalid-feedback\"> {{ message }}</ion-item>\n         <ion-item *ngIf=\"messageReceived && !isErrorMessage\" class=\"feedback\" > {{ message }}</ion-item>\n         <ion-button class=\"formButton\" expand=\"block\" type=\"submit\"> Reset Password </ion-button>\n       </form>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/reset/reset.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.module.ts ***!
  \*********************************************/
/*! exports provided: ResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset.page */ "./src/app/pages/reset/reset.page.ts");









var routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_8__["ResetPage"]
    }
];
var ResetPageModule = /** @class */ (function () {
    function ResetPageModule() {
    }
    ResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _shared_input_form_module__WEBPACK_IMPORTED_MODULE_7__["InputFormModule"]
            ],
            declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_8__["ResetPage"]]
        })
    ], ResetPageModule);
    return ResetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reset/reset.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/reset/reset.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/reset/reset.page.ts ***!
  \*******************************************/
/*! exports provided: ResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPage", function() { return ResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");





var ResetPage = /** @class */ (function () {
    function ResetPage(formBuilder, authService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.validationMessages = {
            password: [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must contain 6 characters' }
            ]
        };
        this.messageReceived = false;
        this.isErrorMessage = false;
    }
    ResetPage.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    ResetPage.prototype.onSubmitReset = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
        var val = this.resetForm.value;
        this.activatedRoute.queryParamMap.subscribe(function (queryParams) {
            _this.authService.resetPassword(queryParams.get('token'), val.password)
                .subscribe(function (data) {
                _this.messageReceived = true;
                if (data.status === 200) {
                    _this.message = 'Your password was reset';
                }
            }, function (error) {
                _this.isErrorMessage = true;
                _this.messageReceived = true;
                if (error.status === 500 && error.error.message === 'token invalid') {
                    _this.message = 'Invalid request';
                }
                else {
                    _this.message = error.error.message;
                }
            });
        });
    };
    ResetPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! raw-loader!./reset.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reset/reset.page.html"),
            styles: [__webpack_require__(/*! ./reset.page.scss */ "./src/app/pages/reset/reset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPage);
    return ResetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reset-reset-module-es5.js.map