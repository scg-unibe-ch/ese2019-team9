(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment (ionChange)=\"onTabSwitch($event)\">\n    <ion-segment-button value=\"0\" checked>\n      <ion-label> User information </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-label> Your products </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Tab 0: User information -->\n  <app-user-information *ngIf=\"selectedTab === 0\" ></app-user-information>\n  <!-- End of: Tab 0: User information -->\n\n  <!-- Tab 1: User products -->\n  <app-user-products *ngIf=\"selectedTab === 1\"></app-user-products>\n  <!-- End of: Tab 1: User products -->\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-information/user-information.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/user-information/user-information.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-informations *ngIf=\"user\" [user]=\"user\" [changeable]=\"true\"\n                          [valuesToHide]=\"valuesToHide\"></app-profile-informations>\n<ion-item> *Note: If you want to become a seller, you need to specify your name, address and country</ion-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-products/user-products-information/user-products-information.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/user-products/user-products-information/user-products-information.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n    <ion-card-header>\n        <ion-card-title> {{ product.name }}\n            <ion-button class=\"greyButton ion-float-end\" color=\"danger\" (click)=\"onClickDeleteProduct(product._id)\">\n                <ion-icon name=\"close\"></ion-icon>\n                Delete\n            </ion-button>\n        </ion-card-title>\n    </ion-card-header>\n    <ion-grid>\n        <ion-row class=\"row\" *ngFor=\"let key of productKeys\">\n            <ion-col> {{ getKeyString(key)}} </ion-col>\n            <ion-col *ngIf=\"!(getKeyString(key) === 'Category')\"> {{getValueString(key)}} </ion-col>\n            <ion-col *ngIf=\"getKeyString(key) === 'Category'\"> {{getCategoryValue(key)}} </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-products/user-products.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/user-products/user-products.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let product of products\">\n  <app-user-products-information [product]=\"product\" (reloadEvent)=\"reloadProducts($event)\" ></app-user-products-information>\n</span>"

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
/* harmony import */ var _user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-information/user-information.component */ "./src/app/pages/profile/user-information/user-information.component.ts");
/* harmony import */ var _user_products_user_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-products/user-products.component */ "./src/app/pages/profile/user-products/user-products.component.ts");
/* harmony import */ var _user_products_user_products_information_user_products_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-products/user-products-information/user-products-information.component */ "./src/app/pages/profile/user-products/user-products-information/user-products-information.component.ts");












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
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__["UserInformationComponent"], _user_products_user_products_component__WEBPACK_IMPORTED_MODULE_10__["UserProductsComponent"], _user_products_user_products_information_user_products_information_component__WEBPACK_IMPORTED_MODULE_11__["UserProductsInformationComponent"]]
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.selectedTab = 0;
    };
    ProfilePage.prototype.onTabSwitch = function (evt) {
        var id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/pages/profile/user-information/user-information.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/user-information/user-information.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1pbmZvcm1hdGlvbi91c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/user-information/user-information.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/user-information/user-information.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");





var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent(userService, authService, progressIndicatorService) {
        this.userService = userService;
        this.authService = authService;
        this.progressIndicatorService = progressIndicatorService;
        this.keys = ['_id', 'email', 'address', 'name', 'website', 'country', 'phone', 'sex'];
        this.valuesToHide = ['password', 'openDetail', 'admin', '_id', 'verifiedEmail'];
    }
    UserInformationComponent.prototype.ngOnInit = function () {
        this.getUserInformation();
    };
    UserInformationComponent.prototype.getUserInformation = function () {
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
            _this.progressIndicatorService.presentToast('User could not be updated', 2000, 'danger');
        });
    };
    UserInformationComponent.prototype.populateUser = function () {
        var _this = this;
        this.keys.forEach(function (key) {
            if (!_this.user.hasOwnProperty(key)) {
                _this.user[key] = '';
            }
        });
    };
    UserInformationComponent.ctorParameters = function () { return [
        { type: _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] }
    ]; };
    UserInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-information',
            template: __webpack_require__(/*! raw-loader!./user-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-information/user-information.component.html"),
            styles: [__webpack_require__(/*! ./user-information.component.scss */ "./src/app/pages/profile/user-information/user-information.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"]])
    ], UserInformationComponent);
    return UserInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/user-products/user-products-information/user-products-information.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/profile/user-products/user-products-information/user-products-information.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  border-bottom: 1px solid var(--ion-color-medium-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1wcm9kdWN0cy91c2VyLXByb2R1Y3RzLWluZm9ybWF0aW9uL3VzZXItcHJvZHVjdHMtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1wcm9kdWN0cy91c2VyLXByb2R1Y3RzLWluZm9ybWF0aW9uL3VzZXItcHJvZHVjdHMtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS91c2VyLXByb2R1Y3RzL3VzZXItcHJvZHVjdHMtaW5mb3JtYXRpb24vdXNlci1wcm9kdWN0cy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59IiwiLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/user-products/user-products-information/user-products-information.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/user-products/user-products-information/user-products-information.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: UserProductsInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductsInformationComponent", function() { return UserProductsInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");




var UserProductsInformationComponent = /** @class */ (function () {
    function UserProductsInformationComponent(productService, progressIndicatorService) {
        this.productService = productService;
        this.progressIndicatorService = progressIndicatorService;
        this.reloadEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productKeys = [];
        this.valuesToHide = ['seller', '_id', 'image'];
    }
    UserProductsInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productKeys = Object.keys(this.product).filter(function (value) { return _this.valuesToHide.indexOf(value) === -1; });
    };
    UserProductsInformationComponent.prototype.getKeyString = function (key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    };
    UserProductsInformationComponent.prototype.getValueString = function (key) {
        return this.product[key.toString()];
    };
    UserProductsInformationComponent.prototype.getCategoryValue = function (key) {
        return this.product[key].name;
    };
    UserProductsInformationComponent.prototype.onClickDeleteProduct = function (productId) {
        var _this = this;
        this.productService.deleteProduct(productId).subscribe(function (data) {
            _this.progressIndicatorService.presentToast('Product successfully deleted', 2000, 'success');
            _this.reloadEvent.next('reload');
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Product could not be deleted', 2000, 'danger');
        });
    };
    UserProductsInformationComponent.ctorParameters = function () { return [
        { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserProductsInformationComponent.prototype, "reloadEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserProductsInformationComponent.prototype, "product", void 0);
    UserProductsInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-products-information',
            template: __webpack_require__(/*! raw-loader!./user-products-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-products/user-products-information/user-products-information.component.html"),
            styles: [__webpack_require__(/*! ./user-products-information.component.scss */ "./src/app/pages/profile/user-products/user-products-information/user-products-information.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"]])
    ], UserProductsInformationComponent);
    return UserProductsInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/user-products/user-products.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/user-products/user-products.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1wcm9kdWN0cy91c2VyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/user-products/user-products.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/user-products/user-products.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductsComponent", function() { return UserProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");





var UserProductsComponent = /** @class */ (function () {
    function UserProductsComponent(authService, productService, progressIndicatorService) {
        this.authService = authService;
        this.productService = productService;
        this.progressIndicatorService = progressIndicatorService;
        this.products = [];
    }
    UserProductsComponent.prototype.ngOnInit = function () {
        this.getUserProducts();
    };
    UserProductsComponent.prototype.getUserProducts = function () {
        var _this = this;
        this.userId = this.authService.getId();
        this.productService.getProductsByUserId(this.userId).subscribe(function (data) {
            _this.products = data;
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Products could not be updated', 2000, 'danger');
        });
    };
    UserProductsComponent.prototype.reloadProducts = function (ev) {
        if (ev === 'reload') {
            this.getUserProducts();
        }
    };
    UserProductsComponent.ctorParameters = function () { return [
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] }
    ]; };
    UserProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-products',
            template: __webpack_require__(/*! raw-loader!./user-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/user-products/user-products.component.html"),
            styles: [__webpack_require__(/*! ./user-products.component.scss */ "./src/app/pages/profile/user-products/user-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"]])
    ], UserProductsComponent);
    return UserProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map