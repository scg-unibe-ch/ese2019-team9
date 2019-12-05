(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-products-my-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/my-products.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-products/my-products.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngIf=\"!isLoading && isSeller\">\n                <ion-segment (ionChange)=\"onTabSwitch($event)\">\n                    <ion-segment-button value=\"0\" checked>\n                        <ion-label> My Products</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"1\">\n                        <ion-label> Orders\n                            <ion-badge color=\"danger\">{{ newOrders }}</ion-badge>\n                        </ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n\n                <!-- Tab 0: User products -->\n                <app-user-products *ngIf=\"selectedTab === 0\"></app-user-products>\n                <!-- End of: Tab 0: User products -->\n\n                <!-- Tab 1: Offers -->\n                <app-orders *ngIf=\"selectedTab === 1\"></app-orders>\n                <!-- End of: Tab 1: Offers -->\n            </ion-col>\n\n            <!-- If user isn't seller yet display form -->\n            <ion-col size=\"12\" size-md=\"6\" offset-md=\"3\" style=\"margin-top:2em\" *ngIf=\"!isSeller\">\n                <ion-row>\n                    <ion-col>\n                        In order for you to be able to sell products, you first have to share some information about\n                        yourself.\n                    </ion-col>\n                </ion-row>\n                <form [formGroup]=\"sellerForm\" (ngSubmit)=\"onPressSubmit()\">\n                    <app-input-form\n                            [inputForm]=\"sellerForm\" [givenName]=\"'name'\" [text]=\"'Name'\"\n                            [type]=\"'text'\" [inputMode]=\"'text'\">\n                    </app-input-form>\n                    <app-input-form\n                            [inputForm]=\"sellerForm\" [givenName]=\"'address'\" [text]=\"'Address'\"\n                            [type]=\"'text'\" [inputMode]=\"'text'\">\n                    </app-input-form>\n                    <app-input-form\n                            [inputForm]=\"sellerForm\" [givenName]=\"'country'\" [text]=\"'Country'\"\n                            [type]=\"'text'\" [inputMode]=\"'text'\">\n                    </app-input-form>\n\n                    <ion-button class=\"blueButton\" fill=\"empty\" type=\"submit\"> Submit</ion-button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/orders/orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-products/orders/orders.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n    <ion-grid>\n        <ion-row class = \"ordersTitleBar\">\n            <ion-col class=\"ordersTitle\" offset=\"1\">\n                Product\n            </ion-col>\n            <ion-col class=\"ordersTitle\">\n                Customer\n            </ion-col>\n            <ion-col class=\"ordersTitle\">\n                Ordered on\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"isLoading\">\n            Loading orders...\n        </ion-row>\n        <ion-row *ngFor=\"let order of orders\">\n            <ion-item-sliding [routerLink]=\"['../order-details', order._id]\">\n                <ion-item class=\"profileProductsItem ion-no-padding \">\n                    <ion-col size=\"1\">\n                        <ion-avatar style=\"width:auto; height:auto;\">\n                            <img style=\"width:auto; height:auto;\" *ngIf=\"order.product.image\" src=\"{{ order.product.image }}\">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col>\n                        {{ order.product.name }}\n                    </ion-col>\n                    <ion-col  >\n                        {{ order.buyer.name }}\n                    </ion-col>\n                    <ion-col >\n                        {{ order.orderDate | date : \"dd.MM.y hh:mm\" }}\n                    </ion-col> \n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"success\" (click)=\"acceptOrder(order._id)\">\n                        Accept\n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"rejectOrder(order._id)\">\n                        Reject\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-row>\n    </ion-grid>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/user-products/user-products.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-products/user-products/user-products.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n    <ion-grid>\n        <ion-row class=\"ion-padding-top\">\n            <ion-button size=\"large\" class=\"blueButton\" fill=\"empty\"\n                        [routerLink]=\"['/add-products']\" [routerDirection]=\"'root'\">\n                <ion-icon name=\"add\"></ion-icon>\n                Add a product\n            </ion-button>\n        </ion-row>\n        <ion-row *ngIf=\"products.length != 0\">\n            <ion-col class=\"profileProductsTitle\" size=\"6\" offset=\"1\">\n                Name\n            </ion-col>\n            <ion-col class=\"profileProductsTitle\" >\n                Verified\n            </ion-col>\n            <ion-col class=\"profileProductsTitle\" >\n                Revise\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"isLoading\" style=\"font-size:0.8em; padding-top:1em;\">\n            Loading products...\n        </ion-row>\n        <ion-row *ngFor=\"let product of products\">\n            <ion-item-sliding>\n                <ion-item class=\"profileProductsItem ion-no-padding \" (click)=\"product.openDetail = !product.openDetail\">\n                    <ion-col size=\"1\">\n                        <ion-avatar style=\"width:100%; height:100%; object-fit: cover;\">\n                            <img *ngIf=\"product.image\" src=\"{{ product.image }}\" style=\"object-fit: cover; width:100%; height:100%;\">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col size=\"6\" >\n                        {{ product.name }}\n                    </ion-col>\n                    <ion-col class=\"ion-padding-start\" size=\"2\" >\n                        <ion-icon size=\"large\" [class]=\"product.verified ? 'verified' : 'notVerified'\"\n                                  [name]=\"product.verified ? 'checkmark-circle' : 'close-circle'\">\n                        </ion-icon>\n                    </ion-col>\n                    <ion-col class=\"ion-padding-start\" size=\"2\" >\n                        <ion-icon size=\"large\" [class]=\"product.toRevise ? 'toRevise' : 'verified'\"\n                                  [name]=\"product.toRevise ? 'warning' : 'checkmark-circle'\">\n                        </ion-icon>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                        <ion-icon [name]=\"product.openDetail ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n                    </ion-col>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"deleteProduct(product._id)\">\n                        Delete\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n            \n            <ion-col *ngIf=\"product.openDetail\">\n                <app-profile-informations (deleteEvent)=\"deleteProduct(product._id)\"\n                                          (updateEvent)=\"reloadProducts()\"\n                                          [profileItem]=\"product\"\n                                          [changeable]=\"true\" [type]=\"'product'\"\n                                          [valuesToHide]=\"valuesToHide\"\n                                          [additionalValues]=\"additionalValues\">\n                </app-profile-informations>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/pages/my-products/my-products.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-products/my-products.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsPageModule", function() { return MyProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-products.page */ "./src/app/pages/my-products/my-products.page.ts");
/* harmony import */ var _user_products_user_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-products/user-products.component */ "./src/app/pages/my-products/user-products/user-products.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/pages/my-products/orders/orders.component.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/input-form.module */ "./src/app/shared/input-form.module.ts");












var routes = [
    {
        path: '',
        component: _my_products_page__WEBPACK_IMPORTED_MODULE_6__["MyProductsPage"]
    }
];
var MyProductsPageModule = /** @class */ (function () {
    function MyProductsPageModule() {
    }
    MyProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _core_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
                _shared_input_form_module__WEBPACK_IMPORTED_MODULE_11__["InputFormModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_products_page__WEBPACK_IMPORTED_MODULE_6__["MyProductsPage"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"], _user_products_user_products_component__WEBPACK_IMPORTED_MODULE_7__["UserProductsComponent"]]
        })
    ], MyProductsPageModule);
    return MyProductsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-products/my-products.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-products/my-products.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXByb2R1Y3RzL215LXByb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/my-products/my-products.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-products/my-products.page.ts ***!
  \*******************************************************/
/*! exports provided: MyProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsPage", function() { return MyProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/orderService/order.service */ "./src/app/core/services/orderService/order.service.ts");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var MyProductsPage = /** @class */ (function () {
    function MyProductsPage(progressIndicatorService, orderService, authService, userService, formBuilder) {
        this.progressIndicatorService = progressIndicatorService;
        this.orderService = orderService;
        this.authService = authService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.isLoading = true;
    }
    MyProductsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sellerForm = this.formBuilder.group({
            name: ['', []],
            address: ['', []],
            country: ['', []]
        });
        this.isSeller = this.userService.isSeller();
        this.selectedTab = 0;
        this.userId = this.authService.getId();
        this.userService.getSingleUser(this.userId).subscribe(function (result) {
            _this.user = result;
            _this.isSeller = _this.user.name.length > 0 &&
                _this.user.country.length > 0 &&
                _this.user.address.length > 0 ? true : false;
            _this.isLoading = false;
            /*  this.sellerForm.setValue([ {name:this.user.name ? this.user.name : ''},
                {country:this.user.country ? this.user.country : ''},
                {address:this.user.address ? this.user.address : ''}]);*/
        });
    };
    MyProductsPage.prototype.onTabSwitch = function (evt) {
        var id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
    };
    MyProductsPage.prototype.onPressSubmit = function () {
        var _this = this;
        if (this.sellerForm.value.name.length == 0 &&
            this.sellerForm.value.country.length == 0 &&
            this.sellerForm.value.address.length == 0) {
            return;
        }
        var val = {
            name: this.sellerForm.value.name,
            country: this.sellerForm.value.country,
            address: this.sellerForm.value.address
        };
        var body = JSON.stringify(val);
        this.userService.updateUser(this.userId, body, null).subscribe(function (data) {
            _this.progressIndicatorService.presentToast('Information successfully updated', 'success');
            _this.isLoading = true;
        }, function (error) {
            console.log(error.error);
            _this.progressIndicatorService.presentToast(error.error.message, 'danger');
        });
        this.userService.isSeller().then(function (result) {
            _this.isSeller = result;
            _this.isLoading = false;
        }).catch(function (err) {
            _this.isLoading = false;
        });
    };
    MyProductsPage.ctorParameters = function () { return [
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] },
        { type: _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    MyProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-products',
            template: __webpack_require__(/*! raw-loader!./my-products.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/my-products.page.html"),
            styles: [__webpack_require__(/*! ./my-products.page.scss */ "./src/app/pages/my-products/my-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"],
            _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], MyProductsPage);
    return MyProductsPage;
}());



/***/ }),

/***/ "./src/app/pages/my-products/orders/orders.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-products/orders/orders.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ordersTitle {\n  font-weight: bold;\n  font-size: 0.8em;\n}\n\n.ordersTitleBar {\n  margin-top: 2rem;\n}\n\n.profileProductsItem {\n  font-size: 0.8em;\n}\n\n.profileProductsItem:hover {\n  cursor: pointer;\n  background-color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL215LXByb2R1Y3RzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LXByb2R1Y3RzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSx5Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktcHJvZHVjdHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcnNUaXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjAuOGVtO1xufVxuXG4ub3JkZXJzVGl0bGVCYXIge1xuICAgIG1hcmdpbi10b3A6MnJlbTtcbn1cblxuLnByb2ZpbGVQcm9kdWN0c0l0ZW0ge1xuICAgIGZvbnQtc2l6ZTowLjhlbTtcbn1cblxuLnByb2ZpbGVQcm9kdWN0c0l0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iLCIub3JkZXJzVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLm9yZGVyc1RpdGxlQmFyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnByb2ZpbGVQcm9kdWN0c0l0ZW0ge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucHJvZmlsZVByb2R1Y3RzSXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/my-products/orders/orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/my-products/orders/orders.component.ts ***!
  \**************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/orderService/order.service */ "./src/app/core/services/orderService/order.service.ts");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService, progressIndicatorService, authService) {
        this.orderService = orderService;
        this.progressIndicatorService = progressIndicatorService;
        this.authService = authService;
        this.loading = true;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getOrders();
    };
    OrdersComponent.prototype.acceptOrder = function (orderId) {
        var _this = this;
        this.orderService.accept(orderId).subscribe(function (data) {
            _this.progressIndicatorService.presentToast('Order accepted', 'success');
            _this.reloadProducts();
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Order could not be accepted', 'danger');
        });
    };
    OrdersComponent.prototype.rejectOrder = function (orderId) {
        var _this = this;
        this.orderService.reject(orderId).subscribe(function (data) {
            _this.progressIndicatorService.presentToast('Order rejected', 'success');
            _this.reloadProducts();
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Order could not be rejected', 'danger');
        });
    };
    OrdersComponent.prototype.ngOnDestroy = function () {
        this.getOrders();
    };
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.userId = this.authService.getId();
        this.orderService.getSellerOrders(this.userId).subscribe(function (data) {
            _this.orders = data.map(function (doc) {
                return Object.assign(doc, {
                    openDetails: false
                });
            });
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Orders could not be updated', 'danger');
        });
    };
    OrdersComponent.prototype.reloadProducts = function () {
        this.loading = true;
        this.getOrders();
    };
    Object.defineProperty(OrdersComponent.prototype, "isLoading", {
        get: function () {
            return this.loading;
        },
        enumerable: true,
        configurable: true
    });
    OrdersComponent.ctorParameters = function () { return [
        { type: _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] },
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/my-products/orders/orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"],
            _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-products/user-products/user-products.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/my-products/user-products/user-products.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileProductsItem {\n  width: 100%;\n  cursor: pointer;\n  font-size: 0.8em;\n}\n\n.verified {\n  color: var(--ion-color-success);\n}\n\n.notVerified {\n  color: var(--ion-color-danger);\n}\n\n.toRevise {\n  color: var(--ion-color-warning);\n}\n\n.profileProductsTitle {\n  font-weight: bold;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL215LXByb2R1Y3RzL3VzZXItcHJvZHVjdHMvdXNlci1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktcHJvZHVjdHMvdXNlci1wcm9kdWN0cy91c2VyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktcHJvZHVjdHMvdXNlci1wcm9kdWN0cy91c2VyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVQcm9kdWN0c0l0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6MC44ZW07XG59XG5cbi52ZXJpZmllZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5ub3RWZXJpZmllZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnRvUmV2aXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLnByb2ZpbGVQcm9kdWN0c1RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTowLjhlbTtcbn0iLCIucHJvZmlsZVByb2R1Y3RzSXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi52ZXJpZmllZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5ub3RWZXJpZmllZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnRvUmV2aXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLnByb2ZpbGVQcm9kdWN0c1RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/my-products/user-products/user-products.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/my-products/user-products/user-products.component.ts ***!
  \****************************************************************************/
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
        this.valuesToHide = ['_id', 'id', 'category', 'seller', 'reviews', 'verified', 'image', 'toRevise', 'rating', 'openDetail', 'date'];
        this.additionalValues = ['category', 'verified', 'rating', 'toRevise', 'date'];
        this.loading = true;
    }
    UserProductsComponent.prototype.ngOnInit = function () {
        this.getUserProducts();
    };
    UserProductsComponent.prototype.ngOnDestroy = function () {
        this.getUserProducts();
    };
    UserProductsComponent.prototype.deleteProduct = function (productId) {
        var _this = this;
        this.productService.deleteProduct(productId).subscribe(function (data) {
            _this.progressIndicatorService.presentToast('Product successfully deleted');
            _this.reloadProducts();
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Product could not be deleted', 'danger');
        });
    };
    UserProductsComponent.prototype.getUserProducts = function () {
        var _this = this;
        this.userId = this.authService.getId();
        this.productService.getProductsByUserId(this.userId).subscribe(function (data) {
            _this.products = data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast('Products could not be updated', 'danger');
        });
    };
    Object.defineProperty(UserProductsComponent.prototype, "isLoading", {
        get: function () {
            return this.loading;
        },
        enumerable: true,
        configurable: true
    });
    UserProductsComponent.prototype.reloadProducts = function () {
        this.loading = true;
        this.getUserProducts();
    };
    UserProductsComponent.ctorParameters = function () { return [
        { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] }
    ]; };
    UserProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-products',
            template: __webpack_require__(/*! raw-loader!./user-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-products/user-products/user-products.component.html"),
            styles: [__webpack_require__(/*! ./user-products.component.scss */ "./src/app/pages/my-products/user-products/user-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"]])
    ], UserProductsComponent);
    return UserProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-my-products-my-products-module-es5.js.map