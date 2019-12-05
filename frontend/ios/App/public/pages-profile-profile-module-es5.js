(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n</ion-header>\n<ion-grid>\n    <ion-row>\n        <ion-col size=\"12\">\n            <app-profile-informations *ngIf=\"user\" [profileItem]=\"user\" [changeable]=\"true\"\n                                      [valuesToHide]=\"valuesToHide\" [additionalValues]=\"additionalValues\"\n                                      [type]=\"'user'\" [hideDelete]=\"true\"></app-profile-informations>\n            <ion-item>\n                *Note: If you want to become a seller, you need to specify your name, address and country\n            </ion-item>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");





var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, authService, progressIndicatorService) {
        this.userService = userService;
        this.authService = authService;
        this.progressIndicatorService = progressIndicatorService;
        this.keys = ['_id', 'email', 'address', 'name', 'website', 'country', 'phone', 'sex', ''];
        this.valuesToHide = ['password', 'openDetail', 'admin', '_id', 'verifiedEmail', 'image', 'productsSold'];
        this.additionalValues = ['verifiedEmail', 'productsSold'];
        this.notifications = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getUserInformation();
    };
    ProfilePage.prototype.getUserInformation = function () {
        var _this = this;
        this.progressIndicatorService.presentLoading('Loading...');
        this.userId = this.authService.getId();
        this.userService.getSingleUser(this.userId).subscribe(function (data) {
            _this.user = data;
            _this.populateUser();
            _this.progressIndicatorService.dismissLoadingIndicator();
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('User could not be updated', 'danger', 3000);
        });
    };
    ProfilePage.prototype.populateUser = function () {
        var _this = this;
        this.keys.forEach(function (key) {
            if (!_this.user.hasOwnProperty(key)) {
                _this.user[key] = '';
            }
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map