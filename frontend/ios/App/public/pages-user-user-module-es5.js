(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"user && products\">\n  <ion-grid>\n\n    <!-- Mobile version -->\n    <ion-row class=\"ion-hide-md-up\">\n      <ion-col>\n        <!-- Profile details -->\n        <ion-row>\n          <ion-col class=\"container\" size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-avatar><img src=\"{{ user.image }}\"></ion-avatar>\n            </ion-row>\n            <ion-row style=\"margin-top:1rem\">\n              <ion-col class=\"ion-text-center\" style=\"font-size:22px\">\n                <b>{{ user.name ? user.name : 'user' + user._id }}</b>\n              </ion-col>\n            </ion-row>\n            <ion-item-divider style=\"margin-bottom:1rem; margin-top:-1rem;\">\n            </ion-item-divider>\n            <ion-row *ngIf=\"user.country\">\n              <ion-icon name=\"pin\"></ion-icon>&nbsp;From &nbsp; <b>{{ user.country }}</b>\n            </ion-row>\n            <ion-row style=\"margin-top:1rem\">\n              <ion-icon name=\"cash\"></ion-icon>&nbsp;Products sold &nbsp; <b>{{ user.productsSold }}</b>\n            </ion-row>\n            <ion-row *ngIf=\"user.sex\" style=\"margin-top:1rem\">\n              <ion-icon name=\"person\"></ion-icon>&nbsp;Sex &nbsp; <b>{{ user.sex }}</b>\n            </ion-row>\n\n            <ion-row *ngIf=\"user.phone\" style=\"margin-top:1rem\">\n              <ion-icon name=\"call\"></ion-icon>&nbsp;Phone &nbsp; <b>{{ user.phone }}</b>\n            </ion-row>\n\n            <ion-row *ngIf=\"user.website\" style=\"margin-top:1rem\">\n              <ion-icon name=\"globe\"></ion-icon>&nbsp;Website &nbsp; <b>{{ user.website }}</b>\n            </ion-row>\n            <ion-row *ngIf=\"user.description\" style=\"margin-top:1rem\">\n              {{ user.description }}\n            </ion-row>\n            <ion-row *ngIf=\"!user.description && !user.country && !user.address && !user.sex && !user.phone && !user.phone\">\n              <i>This user shares no information.</i>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <!-- Profile details end-->\n        <ion-row>\n          <ion-col class=\"container\" size=\"12\">\n            <ion-row style=\"margin-bottom:2rem\">\n              <ion-col class=\"ion-text-center ion-justify-content-center\" style=\"font-size:22px\">\n                <b>{{ user.name ? user.name : 'user' + user._id }}'s Products</b>\n              </ion-col>\n            </ion-row>\n            <ion-item-divider style=\"margin-bottom:1rem; margin-top:-3rem;\">\n            </ion-item-divider>\n            <ion-grid>\n              <ion-row>\n                <ion-col *ngFor=\"let product of products\" size=\"12\" size-md=\"6\" size-xl=\"4\">\n                  <app-subcategory-item class=\"item\" [verified]=\"product.verified\" [rating]=\"product.rating\"\n                    [id]=\"product._id\" [name]=\"product.name\" [price]=\"product.price\" [location]=\"product.location\"\n                    [imageSrc]=\"product.image\">\n                  </app-subcategory-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Desktop version -->\n    <ion-row class=\"ion-hide-sm-down\">\n      <!-- Profile details -->\n      <ion-col size=\"3\" offset-md=\"1\">\n        <ion-row>\n          <ion-col class=\"container\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-avatar><img src=\"{{ user.image }}\"></ion-avatar>\n            </ion-row>\n            <ion-row style=\"margin-top:1rem\">\n              <ion-col class=\"ion-text-center\" style=\"font-size:22px\">\n                <b>{{ user.name ? user.name : 'user' + user._id }}</b>\n              </ion-col>\n            </ion-row>\n            <ion-item-divider style=\"margin-bottom:1rem; margin-top:-1rem;\">\n            </ion-item-divider>\n            <ion-row *ngIf=\"user.country\">\n              <ion-col>\n                  <ion-icon name=\"pin\"></ion-icon>&nbsp;From\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b>{{ user.country }}</b>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top:1rem\">\n              <ion-col>\n                  <ion-icon name=\"cash\"></ion-icon>&nbsp;Products sold\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b>{{ user.productsSold }}</b>\n              </ion-col>\n               &nbsp; \n            </ion-row>\n\n            <ion-row *ngIf=\"user.sex\" style=\"margin-top:1rem\">\n              <ion-col>\n                  <ion-icon name=\"person\"></ion-icon>&nbsp;Sex &nbsp;\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b>{{ user.sex }}</b>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"user.phone\" style=\"margin-top:1rem\">\n              <ion-col> \n                  <ion-icon name=\"call\"></ion-icon>&nbsp;Phone &nbsp; \n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b>{{ user.phone }}</b>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"user.website\" style=\"margin-top:1rem\">\n              <ion-col>\n                  <ion-icon name=\"globe\"></ion-icon>&nbsp;Website &nbsp;\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b>{{ user.website }}</b>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"user.description\" style=\"margin-top:1rem\">\n              {{ user.description }}\n            </ion-row>\n            <ion-row\n              *ngIf=\"!user.description && !user.country && !user.address && !user.sex && !user.website && !user.phone\">\n              <i>This user shares no information.</i>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- Profile details end-->\n\n      <ion-col class=\"container\" size=\"6\" offset-md=\"1\">\n        <ion-row style=\"margin-bottom:2rem\">\n          <ion-col class=\"ion-text-center ion-justify-content-center\" style=\"font-size:22px\">\n            <b>{{ user.name ? user.name : 'user' + user._id }}'s Products</b>\n          </ion-col>\n        </ion-row>\n        <ion-item-divider style=\"margin-bottom:1rem; margin-top:-3rem;\">\n        </ion-item-divider>\n        <ion-grid>\n          <ion-row>\n            <ion-col *ngFor=\"let product of products\" size=\"12\" size-md=\"6\" size-xl=\"4\">\n              <app-subcategory-item class=\"item\" [verified]=\"product.verified\" [rating]=\"product.rating\"\n                [id]=\"product._id\" [name]=\"product.name\" [price]=\"product.price\" [location]=\"product.location\"\n                [imageSrc]=\"product.image\">\n              </app-subcategory-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");
/* harmony import */ var src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_pages_subcategory_subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/subcategory/subcategory-item/subcategory-item.component */ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.ts");










var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"], src_app_pages_subcategory_subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_9__["SubcategoryItemComponent"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 7px;\n  margin-top: 3rem;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL3VzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgbWFyZ2luLXRvcDozcmVtO1xuICAgIHBhZGRpbmc6MXJlbTtcbn0iLCIuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");






var UserPage = /** @class */ (function () {
    function UserPage(route, router, navController, userService, productService) {
        this.route = route;
        this.router = router;
        this.navController = navController;
        this.userService = userService;
        this.productService = productService;
    }
    UserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.get('userId') === null) {
                _this.navController.pop();
            }
            else {
                _this.userId = params.get('userId');
                _this.displayUserInformation();
            }
        });
    };
    UserPage.prototype.displayUserInformation = function () {
        var _this = this;
        this.userService.getSingleUser(this.userId).subscribe(function (data) {
            _this.user = data;
        });
        this.productService.getProductsByUserId(this.userId).subscribe(function (data) {
            _this.products = data;
        });
    };
    UserPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ]; };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es5.js.map