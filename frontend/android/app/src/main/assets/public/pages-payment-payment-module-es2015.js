(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <app-header></app-header>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-top:5%\">\n    <ion-col offset-md=\"3\" size=\"12\" size-md=\"6\" *ngIf=\"status == 'wait'\">\n        Your payment is being processed... Please wait\n    </ion-col>\n\n    <ion-col offset-md=\"3\" size=\"12\" size-md=\"6\" *ngIf=\"status == 'error'\">\n        Payment error\n    </ion-col>\n\n    <ion-col offset-md=\"3\" size=\"12\" size-md=\"6\" *ngIf=\"status == 'fail'\">\n        Your payment failed\n    </ion-col>\n\n    <ion-col offset-md=\"3\" size=\"12\" size-md=\"6\" *ngIf=\"status == 'ok'\">\n        Your payment was successful! \n        <ion-button [routerLink]=\"['/order-details', orderId]\">Back to order</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");









const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _core_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/paymentService/payment.service */ "./src/app/core/services/paymentService/payment.service.ts");





let PaymentPage = class PaymentPage {
    constructor(route, navController, paymentService) {
        this.route = route;
        this.navController = navController;
        this.paymentService = paymentService;
    }
    ngOnInit() {
        this.status = 'wait';
        this.route.paramMap.subscribe(params => {
            if (params.get('token') === null) {
                this.status = 'error';
            }
            else {
                this.token = params.get('token');
                this.route.queryParams.subscribe(params => {
                    if (!params || !params.paymentId || !params.PayerID) {
                        this.status = 'error';
                        return;
                    }
                    this.paymentService.executePayment(params.paymentId, params.PayerID, this.token)
                        .subscribe(res => {
                        console.log(res);
                        if (res.orderId) {
                            this.orderId = res.orderId;
                            localStorage.setItem('token', res.loginToken);
                            this.status = 'ok';
                        }
                        else {
                            this.status = 'fail';
                        }
                    });
                });
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html"),
        styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map