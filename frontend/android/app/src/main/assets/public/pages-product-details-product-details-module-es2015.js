(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-details/product-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<app-header></app-header>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-title *ngIf=\"!product && isLoading\" class=\"statusMessage\">\n\t\t... Loading ...\n\t</ion-title>\n\t<ion-title *ngIf=\"!product && !isLoading\" class=\"statusMessage\">\n\t\tSorry, this product doesn't exist!\n\t</ion-title>\n\t<ion-grid *ngIf=\"product\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"product-image-container\" size=\"12\" size-md=\"6\">\n\t\t\t\t<ion-thumbnail class=\"product-image\"><ion-img [src]=\"product.image || 'https://lorempixel.com/300/300/cats/'\"></ion-img></ion-thumbnail>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\" size-md=\"6\">\n\t\t\t\t<ion-list lines=\"none\">\n\t\t\t\t\t<ion-item class=\"ion-text-capitalize product-title\">{{ product.name }}</ion-item>\n\t\t\t\t\t<ion-item>Price: <span slot=\"end\">{{ product.price || 'not specified'}}</span></ion-item>\n\t\t\t\t\t<ion-item>Category: <span slot=\"end\">{{ product.category.name }}</span></ion-item>\n\t\t\t\t\t<ion-item>Seller: <span slot=\"end\">{{ product.seller.name }}</span></ion-item>\n\t\t\t\t\t<ion-item>Location: <span slot=\"end\">{{ product.location || 'nowhere'}}</span></ion-item>\n\t\t\t\t\t<ion-button fill=\"empty\" class=\"blueButton\" (click) = \"onClickBuy();\" *ngIf=\"!orderingDetails && loggedIn && product.seller._id != authService.getId()\">Order now</ion-button>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-card *ngIf=\"orderingDetails\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>Order this product</ion-card-title>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t<form [formGroup]=\"orderForm\" (ngSubmit)=\"onOrder()\">\n\t\t\t\t\t\t\t\t\t\t<app-input-form\n\t\t\t\t\t\t\t\t\t\t[inputForm]=\"orderForm\" [givenName]=\"'startDate'\" [text]=\"'From*'\"\n\t\t\t\t\t\t\t\t\t\t[validationMessages]=\"validationMessages.fromDate\"\n\t\t\t\t\t\t\t\t\t\t[type]=\"'text'\" [inputMode]=\"'text'\">\n\t\t\t\t\t\t\t\t\t\t</app-input-form>\n\t\t\t\t\t\t\t\t\t\t<app-input-form\n\t\t\t\t\t\t\t\t\t\t[inputForm]=\"orderForm\" [givenName]=\"'endDate'\" [text]=\"'To*'\"\n\t\t\t\t\t\t\t\t\t\t[validationMessages]=\"validationMessages.toDate\"\n\t\t\t\t\t\t\t\t\t\t[type]=\"'text'\" [inputMode]=\"'text'\">\n\t\t\t\t\t\t\t\t\t\t</app-input-form>\n\t\t\t\t\t\t\t\t\t\t<app-input-form\n\t\t\t\t\t\t\t\t\t\t[inputForm]=\"orderForm\" [givenName]=\"'description'\" [text]=\"'Description*'\"\n\t\t\t\t\t\t\t\t\t\t[validationMessages]=\"validationMessages.description\"\n\t\t\t\t\t\t\t\t\t\t[type]=\"'text'\" [inputMode]=\"'text'\">\n\t\t\t\t\t\t\t\t\t\t</app-input-form>\n\t\n\t\t\t\t\t\t\t\t\t\t<ion-button class=\"blueButton\" fill=\"empty\" type=\"submit\"> Submit </ion-button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<ion-button class=\"greyButton\" fill=\"empty\" color=\"danger\" (click) = \"onClickBuy();\" *ngIf=\"orderingDetails\">Cancel</ion-button>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\" size-md=\"6\" >\n\t\t\t\t<span class=\"product-title\">Description</span><br/>\n\t\t\t\t<ng-container *ngIf=\"product.description\"> {{ product.description }} </ng-container>\n\t\t\t\t<ng-container *ngIf=\"!product.description\"> This product does not have a description</ng-container>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\" size-md=\"6\">\n\t\t\t\t<span class=\"product-title\">Reviews</span>\n\n\t\t\t\t\n\t\t\t\t<p *ngIf=\"product.reviews.length == 0\"> This product has no reviews yet. </p>\n\t\t\t\t<span *ngFor=\"let review of product.reviews\">\n\t\t\t\t\t<app-product-review [review]=\"review\"></app-product-review>\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-review/product-review.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-details/product-review/product-review.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"user\" >\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n       Name: {{ user.name }}\n      </ion-col>\n      <ion-col>\n        <app-rating class=\"ion-float-end\" [rating]=\"review.rating\"></app-rating>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"review.comment\">\n        <ng-container *ngIf=\"review.comment\"> {{ review.comment }}</ng-container>\n        <ng-container *ngIf=\"!(review.comment)\"> The review does not have a comment.</ng-container>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>"

/***/ }),

/***/ "./src/app/pages/product-details/product-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/product-details/product-details.page.ts");
/* harmony import */ var src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/pages/product-details/product-review/product-review.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/input-form.module */ "./src/app/shared/input-form.module.ts");











const routes = [
    { path: '', component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"] },
    { path: ':productId', component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"] }
];
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _shared_input_form_module__WEBPACK_IMPORTED_MODULE_10__["InputFormModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"], _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_8__["ProductReviewComponent"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/product-details/product-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-title {\n  font-weight: bold;\n}\n\n:host ion-thumbnail {\n  --size: 300px;\n}\n\n:host ion-item {\n  --padding-bottom: 20px;\n  --min-height: 0px;\n}\n\n.rating {\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.statusMessage {\n  text-align: center;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IGlvbi10aHVtYm5haWwge1xuICAgIC0tc2l6ZTogMzAwcHg7XG59XG5cbjpob3N0IGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC0tbWluLWhlaWdodDogMHB4O1xufVxuXG4ucmF0aW5nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAuc3RhdHVzTWVzc2FnZSB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6MTAlO1xuICB9IiwiLnByb2R1Y3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOmhvc3QgaW9uLXRodW1ibmFpbCB7XG4gIC0tc2l6ZTogMzAwcHg7XG59XG5cbjpob3N0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG59XG5cbi5yYXRpbmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RhdHVzTWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-details/product-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var src_app_core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/orderService/order.service */ "./src/app/core/services/orderService/order.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");








let ProductDetailsPage = class ProductDetailsPage {
    constructor(route, router, productService, orderService, formBuilder, progressIndicatorService, authService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.progressIndicatorService = progressIndicatorService;
        this.authService = authService;
        this.showOrderingDetails = false;
        this.isLoggedIn = false;
        this.filledStars = 5;
        this.rating = 5;
        this.isLoading = true;
        this._hasBought = false;
        this.validationMessages = {
            startDate: [{
                    type: 'required',
                    message: 'Start date is required'
                },
                {
                    type: 'text',
                    message: 'Not a valid address'
                },
                {
                    type: 'minlength',
                    message: 'Title must be longer than 5 characters'
                },
                {
                    type: 'maxlength',
                    message: 'Title must be less than 30 characters'
                }
            ],
            endDate: [{
                    type: 'required',
                    message: 'End date is required'
                },
                {
                    type: 'number',
                    message: 'Not a valid number'
                },
                {
                    type: 'minlength',
                    message: 'Price must be more than 10 CHF'
                },
                {
                    type: 'maxlength',
                    message: 'Price must be lower than 1000000 CHF'
                }
            ],
            description: [{
                    type: 'required',
                    message: 'Description is required'
                },
                {
                    type: 'maxlength',
                    message: 'Description must me shorter than 10000 characters'
                }
            ],
            comment: [{
                    type: 'maxlength',
                    message: 'Comment must me shorter than 10000 characters'
                }]
        };
        this.isLoggedIn = authService.isLoggedIn();
        console.log(this.loggedIn);
    }
    get product() {
        return this.productInformation;
    }
    get orderingDetails() {
        return this.showOrderingDetails;
    }
    get loggedIn() {
        return this.isLoggedIn;
    }
    onOrder() {
        if (this.orderForm.invalid) {
            return;
        }
        const val = this.orderForm.value;
        this.orderService.place(val, this.productId).subscribe(data => {
            this.orderForm.reset();
            this.progressIndicatorService.presentToast('Order successfully placed');
        }, error => {
            console.log(error.error.error);
            this.progressIndicatorService.presentToast(error.error.error, 'danger');
        });
    }
    array(n) {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
    }
    onSubmitReview() {
        if (this.reviewForm.invalid) {
            return;
        }
        const val = {
            comment: this.reviewForm.value.comment,
            rating: this.rating,
            productId: this.productId
        };
        this.productService.addReview(val).subscribe(data => {
            this.orderForm.reset();
            this.progressIndicatorService.presentToast('Review successfully added');
        }, error => {
            console.log(error.error.error);
            this.progressIndicatorService.presentToast(error.error.error, 'danger');
        });
    }
    fillTo(n) {
        this.filledStars = n;
    }
    get hasBought() {
        return this._hasBought;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params.get('productId') === null) {
                this.router.navigate(['/subcategory']);
            }
            else {
                this.productId = params.get('productId');
                this.displayProductInformation(this.productId);
            }
        });
        this.productService.hasBought(this.productId).subscribe(data => {
            this._hasBought = data.hasBought;
        });
        this.orderForm = this.formBuilder.group({
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(400)]]
        });
        this.reviewForm = this.formBuilder.group({
            comment: [''],
            rating: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    }
    onClickBuy() {
        this.showOrderingDetails = !this.showOrderingDetails;
    }
    onRatingChanged(n) {
        this.rating = n;
    }
    displayProductInformation(productId) {
        this.productService
            .getSingleProduct(productId)
            .subscribe(data => {
            this.productInformation = data;
            this.isLoading = false;
        }, err => {
            console.log(err);
            this.isLoading = false;
        });
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: src_app_core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__["ProgressIndicatorService"] },
    { type: src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html"),
        styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/product-details/product-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        src_app_core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__["ProgressIndicatorService"],
        src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], ProductDetailsPage);



/***/ }),

/***/ "./src/app/pages/product-details/product-review/product-review.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/product-details/product-review/product-review.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LXJldmlldy9wcm9kdWN0LXJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product-details/product-review/product-review.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product-details/product-review/product-review.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");



let ProductReviewComponent = class ProductReviewComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.user = this.review.user;
    }
};
ProductReviewComponent.ctorParameters = () => [
    { type: _core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductReviewComponent.prototype, "review", void 0);
ProductReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-review',
        template: __webpack_require__(/*! raw-loader!./product-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-review/product-review.component.html"),
        styles: [__webpack_require__(/*! ./product-review.component.scss */ "./src/app/pages/product-details/product-review/product-review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ProductReviewComponent);



/***/ })

}]);
//# sourceMappingURL=pages-product-details-product-details-module-es2015.js.map