(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-orders/my-orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-orders/my-orders.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <ion-list>\n                      <ion-grid>\n                        <ion-row>\n                          <ion-col style=\"display:justify; align-content: center; margin:2%; justify-content: center; font-size:1.5rem; border-bottom:1px solid grey;\">\n                            <b>My orders</b>\n                          </ion-col>\n                        </ion-row>\n                        <!--\n                          <ion-row class = \"ordersTitleBar\">\n                              <ion-col class=\"ordersTitle\" size=\"2\" size-md=\"2\" offset-md=\"1\" size-lg=\"2\">\n                                  Product Name\n                              </ion-col>\n                              <ion-col class=\"ordersTitle\" size=\"2\" size-md=\"2\" size-lg=\"2\">\n                                  Seller Name\n                              </ion-col>\n                              <ion-col class=\"ordersTitle\" size=\"2\" size-md=\"2\" size-lg=\"2\">\n                                  From\n                              </ion-col>\n                              <ion-col class=\"ordersTitle\" size=\"2\" size-md=\"2\" size-lg=\"2\">\n                                  To\n                              </ion-col>\n                              <ion-col class=\"ordersTitle\" size=\"2\" size-md=\"2\" size-lg=\"2\">\n                                  Status\n                              </ion-col>\n                          </ion-row>-->\n                          <ion-row *ngIf=\"isLoading\">\n                              Loading orders...\n                          </ion-row>\n                          <ion-row *ngFor=\"let order of orders\" class=\"orderContainer\" class=\"ion-hide-sm-down\">\n                              <ion-item-sliding button [routerLink]=\"['/order-details', order._id]\">\n                                  <ion-item class=\"profileProductsItem ion-no-padding \" (click)=\"order.openDetails = !order.openDetails\">\n                                      <ion-col size=\"1\" class=\"ion-hide-sm-down\">\n                                          <ion-avatar>\n                                              <img *ngIf=\"order.product.image\" src=\"{{ order.product.image }}\">\n                                          </ion-avatar>\n                                      </ion-col>\n                                      <ion-col size=\"11\">\n                                          <ion-row>\n                                              <ion-col size=\"2\" style=\"font-size:20px;\" >\n                                                  <b>{{ order.product.name }}</b>\n                                              </ion-col>\n                                              \n                                          </ion-row>\n                                          <ion-row>\n                                              <ion-col size=\"2\" size-md=\"2\" size-lg=\"2\" >\n                                                  by {{ order.seller.name }} | <b>{{ order.status }}</b>\n                                                </ion-col> \n                                          </ion-row> \n                                      </ion-col>\n                                  </ion-item>\n                                  <ion-item-options side=\"end\" *ngIf=\"order.status != 'accepted'\">\n                                      <ion-item-option color=\"success\" (click)=\"acceptOrder(order._id)\">\n                                          Delete\n                                      </ion-item-option>\n                                  </ion-item-options>\n                              </ion-item-sliding>\n                          </ion-row>\n\n                          <!-- Mobile version -->\n                          <ion-row *ngFor=\"let order of orders\" class=\"orderContainer\" class=\"ion-hide-md-up\">\n                              <ion-item-sliding button [routerLink]=\"['/order-details', order._id]\">\n                                  <ion-item class=\"profileProductsItem ion-no-padding \" (click)=\"order.openDetails = !order.openDetails\">\n                                      <ion-col size=\"1\" >\n                                          <ion-avatar style=\"width:auto; height:auto;\">\n                                              <img *ngIf=\"order.product.image\" style=\"width:auto; height:auto;\" src=\"{{ order.product.image }}\">\n                                          </ion-avatar>\n                                      </ion-col>\n                                      <ion-col size=\"11\">\n                                          <ion-row>\n                                              <ion-col style=\"font-size:20px;\" >\n                                                  <b>{{ order.product.name }}</b>\n                                              </ion-col>\n                                              \n                                          </ion-row>\n                                          <ion-row>\n                                              <ion-col>\n                                                  Seller: <b>{{ order.seller.name }}</b>\n                                                </ion-col> \n                                          </ion-row> \n                                          <ion-row>\n                                            <ion-col>\n                                              Status: <b>{{ order.status }}</b>\n                                            </ion-col>\n                                          </ion-row>\n                                          <ion-row>\n                                              <ion-col>\n                                                Placed on: <b>{{ order.orderDate | date : \"dd.MM.y hh:mm\" }}</b>\n                                              </ion-col>\n                                            </ion-row>\n                                      </ion-col>\n                                  </ion-item>\n                                  <ion-item-options side=\"end\" *ngIf=\"order.status != 'accepted'\">\n                                      <ion-item-option color=\"success\" (click)=\"acceptOrder(order._id)\">\n                                          Delete\n                                      </ion-item-option>\n                                  </ion-item-options>\n                              </ion-item-sliding>\n                          </ion-row>\n                      </ion-grid>\n                  </ion-list>\n\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/my-orders/my-orders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.module.ts ***!
  \*****************************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/pages/my-orders/my-orders.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]
    }
];
let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
    })
], MyOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/my-orders/my-orders.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderContainer:hover {\n  background-color: var(--ion-color-secondary);\n}\n\n.ordersTitleBar {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1vcmRlcnMvbXktb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJDb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5vcmRlcnNUaXRsZUJhciB7XG4gICAgbWFyZ2luLXRvcDo1cmVtO1xufSIsIi5vcmRlckNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ub3JkZXJzVGl0bGVCYXIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/my-orders/my-orders.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-orders/my-orders.page.ts ***!
  \***************************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/orderService/order.service */ "./src/app/core/services/orderService/order.service.ts");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");





let MyOrdersPage = class MyOrdersPage {
    constructor(orderService, progressIndicatorService, authService) {
        this.orderService = orderService;
        this.progressIndicatorService = progressIndicatorService;
        this.authService = authService;
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.getOrders();
    }
    acceptOrder(orderId) {
        this.orderService.accept(orderId).subscribe(data => {
            this.progressIndicatorService.presentToast('Product successfully deleted');
            this.reloadProducts();
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
        });
    }
    rejectOrder(orderId) {
        this.orderService.reject(orderId).subscribe(data => {
            this.progressIndicatorService.presentToast('Orders successfully deleted');
            this.reloadProducts();
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
        });
    }
    ngOnDestroy() {
        this.getOrders();
    }
    getOrders() {
        this.userId = this.authService.getId();
        this.orderService.getBuyerOrders(this.userId).subscribe(data => {
            this.orders = data.map(doc => {
                return Object.assign(doc, {
                    openDetails: false
                });
            });
            this.loading = false;
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Orders could not be updated', 'danger');
        });
    }
    reloadProducts() {
        this.loading = true;
        this.getOrders();
    }
    get isLoading() {
        return this.loading;
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] },
    { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
MyOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: __webpack_require__(/*! raw-loader!./my-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-orders/my-orders.page.html"),
        styles: [__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/pages/my-orders/my-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
        _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"],
        _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], MyOrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-orders-my-orders-module-es2015.js.map