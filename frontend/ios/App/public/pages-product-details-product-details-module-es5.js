(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-details/product-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<app-header></app-header>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-title *ngIf=\"!product\">\n\t\t... Loading ...\n\t</ion-title>\n\t<ion-grid *ngIf=\"product\">\n\t\t<ion-row>\n\t\t\t<ion-title>{{ product.name }}</ion-title>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col class=\"product-image-container\" size=\"12\" size-md=\"6\">\n\t\t\t\t<ion-thumbnail class=\"product-image\"><ion-img [src]=\"product.src || 'https://lorempixel.com/300/300/cats/'\"></ion-img></ion-thumbnail>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\" size-md=\"6\">\n\t\t\t\t<ion-list lines=\"none\">\n\t\t\t\t\t<ion-item class=\"ion-text-capitalize product-title\">{{ product.name }}</ion-item>\n\t\t\t\t\t<ion-item>Price: <span slot=\"end\">{{ product.price || 'not specified'}}</span></ion-item>\n\t\t\t\t\t<ion-item>Verified: <span slot=\"end\">{{ product.verified }}</span></ion-item>\n\t\t\t\t\t<ion-item>Category: <span slot=\"end\">{{ product.category }}</span></ion-item>\n\t\t\t\t\t<ion-item>Seller: <span slot=\"end\">{{ product.seller.name }}</span></ion-item>\n\t\t\t\t\t<ion-item>Location: <span slot=\"end\">{{ product.location || 'nowhere'}}</span></ion-item>\n\t\t\t\t\t<ion-button [href]=\"createMailLink()\">Contact</ion-button>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<span class=\"product-title\">Description</span><br/>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ng-container *ngIf=\"product.description\"> {{ product.description }} </ng-container>\n\t\t\t\t<ng-container *ngIf=\"!product.description\"> {{ loremIpsum }} </ng-container>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/core/services/productService/product.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/productService/product.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");





var ProductService = /** @class */ (function () {
    function ProductService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.productsEndpoint = 'https://moln-api.herokuapp.com/product';
    }
    ProductService.prototype.getAllProducts = function () {
        return this.httpClient.get(this.productsEndpoint);
    };
    ProductService.prototype.getProductsById = function (id) {
        var _this = this;
        var products = [];
        return new Promise(function (resolve, reject) {
            _this.getAllProducts().subscribe(function (data) {
                // filter allProducts so only the verified products of the respective category are presented
                // @ts-ignore
                products = data.filter(function (prod) { return prod.category._id === id; }).filter(function (prod) { return prod.verified; });
                resolve(products);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.addNewProduct = function (name, category, price) {
        return this.httpClient.post(this.productsEndpoint + '/add', { name: name, category: category, price: price })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ProductService.prototype.deleteProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.productsEndpoint + ("/" + productId), { headers: headers });
    };
    ProductService.prototype.verifyProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.productsEndpoint + ("/" + productId), { verified: true }, { headers: headers });
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProductService);
    return ProductService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/product-details/product-details.page.ts");
/* harmony import */ var src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/header.module */ "./src/app/core/header.module.ts");








var routes = [
    { path: '', component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"] },
    { path: ':productId', component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"] }
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-details/product-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-title {\n  font-weight: bold;\n}\n\n:host ion-thumbnail {\n  --size: 300px;\n}\n\n:host ion-item {\n  --padding-bottom: 20px;\n  --min-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOmhvc3QgaW9uLXRodW1ibmFpbCB7XG4gICAgLS1zaXplOiAzMDBweDtcbn1cblxuOmhvc3QgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1taW4taGVpZ2h0OiAwcHg7XG59IiwiLnByb2R1Y3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOmhvc3QgaW9uLXRodW1ibmFpbCB7XG4gIC0tc2l6ZTogMzAwcHg7XG59XG5cbjpob3N0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");






var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(route, router, productService, categoryService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.categoryService = categoryService;
        this.loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\nlabore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet\n\tclita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur\n\tsadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At\n\tvero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum\n\tdolor sit amet.";
    }
    Object.defineProperty(ProductDetailsPage.prototype, "product", {
        get: function () {
            return this.productInformation;
        },
        enumerable: true,
        configurable: true
    });
    ProductDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.get('productId') === null) {
                _this.router.navigate(['/subcategory']);
            }
            else {
                _this.productId = params.get('productId');
                _this.displayProductInformation(_this.productId);
            }
        });
    };
    ProductDetailsPage.prototype.displayProductInformation = function (productId) {
        var _this = this;
        this.getProductFromBackend(productId).then(function (data) {
            _this.productInformation = data;
        }, function (err) {
            console.log(err);
        });
    };
    ProductDetailsPage.prototype.getProductFromBackend = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.productService
                .getAllProducts()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                var result = data.filter(function (product) { return product._id === productId; });
                if (result.length === 1) {
                    resolve(result[0]);
                }
                else {
                    reject('No such product found');
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    ProductDetailsPage.prototype.createMailLink = function () {
        return "mailto:" + (this.productInformation.mail || 'mail@adresse.ch') + "?subject=Request%20for%20product%20" + this.productInformation.name;
    };
    ProductDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
    ]; };
    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html"),
            styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/product-details/product-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-details-product-details-module-es5.js.map