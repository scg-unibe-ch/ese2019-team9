(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory-item/subcategory-item.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/subcategory-item/subcategory-item.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card [routerLink]=\"['/product-details/', id]\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-title class=\"ion-no-padding\">{{ name }}</ion-title>\n            </ion-col>\n            <ion-col>\n                <ion-text float-right>\n                    <ion-icon name=\"pricetags\"></ion-icon> {{ price }}.-</ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div class=\"line\"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <app-rating [rating]=\"rating\"></app-rating>\n            </ion-col>\n            <ion-col>\n                <ion-text float-right>\n                    <ion-icon name=\"pin\"></ion-icon> {{ location }}</ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/subcategory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\" >\n    <ion-card *ngIf=\"subcategory\" class=\"backgroundGradient cardMargin\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"8\">\n                    <ion-title class=\"ion-no-padding bigTitle\">{{ subcategory.name }}</ion-title>\n                    <ion-text> {{ subcategory.parent }}</ion-text>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" >\n                    <app-carousel *ngIf=\"carouselIsReady\"\n                                  [carouselName]=\"'Featured products'\"\n                                  [carouselSlug]=\"'featured'\"\n                                  [productCarousel]=\"this.featuredProducts\"\n                                  [startingCarouselSize]=\"1\">\n                    </app-carousel>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card class=\"cardMargin\">\n        <ion-title class=\"ion-no-padding\">Filter by:</ion-title>\n        <ion-button size=\"small\" fill=\"empty\">Rating\n            <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"empty\">Location\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"empty\">Price\n            <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n        </ion-button>\n    </ion-card>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let product of products\" size=\"12\" size-md=\"6\" size-xl=\"4\">\n                <app-subcategory-item\n                        [verified]=\"product.verified\"\n                        [rating]=\"product.rating\"\n                        [id]=\"product._id\"\n                        [name]=\"product.name\"\n                        [price]=\"product.price\"\n                        [location]=\"product.location\" >\n                </app-subcategory-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory-item/subcategory-item.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LWl0ZW0vc3ViY2F0ZWdvcnktaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory-item/subcategory-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SubcategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryItemComponent", function() { return SubcategoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubcategoryItemComponent = /** @class */ (function () {
    function SubcategoryItemComponent() {
    }
    SubcategoryItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SubcategoryItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SubcategoryItemComponent.prototype, "verified", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SubcategoryItemComponent.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SubcategoryItemComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SubcategoryItemComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SubcategoryItemComponent.prototype, "price", void 0);
    SubcategoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcategory-item',
            template: __webpack_require__(/*! raw-loader!./subcategory-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory-item/subcategory-item.component.html"),
            styles: [__webpack_require__(/*! ./subcategory-item.component.scss */ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubcategoryItemComponent);
    return SubcategoryItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.module.ts ***!
  \*********************************************************/
/*! exports provided: SubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageModule", function() { return SubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcategory-item/subcategory-item.component */ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_carousel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/carousel.module */ "./src/app/shared/carousel.module.ts");











var routes = [
    { path: '', component: _subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"] },
    { path: ':subcategorySlug', component: _subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"] },
];
var SubcategoryPageModule = /** @class */ (function () {
    function SubcategoryPageModule() {
    }
    SubcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _shared_carousel_module__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"]
            ],
            declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"], _subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_8__["SubcategoryItemComponent"]]
        })
    ], SubcategoryPageModule);
    return SubcategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line {\n  border-bottom: 1px solid grey;\n}\n\n.bigTitle {\n  font-size: 50px;\n}\n\n.mediumTitle {\n  text-align: center;\n}\n\nimg.pic-square {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 200px;\n}\n\n.backgroundGradient {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(var(--ion-color-secondary)), to(var(--ion-color-light)));\n  background-image: linear-gradient(var(--ion-color-secondary), var(--ion-color-light));\n}\n\n.cardMargin {\n  margin: 0px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3ViY2F0ZWdvcnkvc3ViY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLCtIQUFBO0VBQUEscUZBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5iaWdUaXRsZXtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ubWVkaXVtVGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnBpYy1zcXVhcmUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmFja2dyb3VuZEdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xufVxuXG4uY2FyZE1hcmdpbntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iLCIubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xufVxuXG4uYmlnVGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5tZWRpdW1UaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnBpYy1zcXVhcmUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmFja2dyb3VuZEdyYWRpZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.page.ts ***!
  \*******************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");





var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(route, productService, categoryService) {
        this.route = route;
        this.productService = productService;
        this.categoryService = categoryService;
        this.products = [];
        this.featuredProducts = [];
        this.carouselIsReady = false;
    }
    /*
    The url-slug is saved and used for a request. The request fetches details of the subcategory and the
    products of this subcategory from the backend.
     */
    SubcategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).subscribe(function (data) {
            _this.subcategory = data[0];
            // fetch products of the selected subcategory from backend
            _this.productService.getProductsById(data[0]._id).then(function (products) {
                // @ts-ignore
                _this.products = products;
                _this.selectFeaturedProducts();
            });
        });
    };
    // Select featured products for product-carousel
    SubcategoryPage.prototype.selectFeaturedProducts = function () {
        this.featuredProducts = this.products.slice(0, 2);
        this.carouselIsReady = true;
    };
    SubcategoryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
    ]; };
    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcategory',
            template: __webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html"),
            styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/pages/subcategory/subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]])
    ], SubcategoryPage);
    return SubcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subcategory-subcategory-module-es5.js.map