(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer>\n  <ion-toolbar color=\"medium\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\" offset=\"1\">\n          <app-logo></app-logo>\n        </ion-col>\n        <ion-col size=\"4\" class=\"title\">\n          <ion-title  class=\"ion-no-padding\">MOLN</ion-title>\n        </ion-col>\n        <ion-col size=\"2\">\n          <img class=\"maxHeight\" src=\"../assets/images/unibern.png\">\n        </ion-col>\n        <ion-col size=\"3\" class=\"title\">\n          <ion-title  class=\"ion-no-padding\">UniBe</ion-title>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n          <ion-text>Any Questions? We are happy to help!</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n          <ion-text>Email: info@moln.com</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"5\" offset=\"1\">\n          <ion-text>© MOLN - 2019</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-top-header></app-top-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-navigation-bar class=\"ion-hide-md-down\"></app-navigation-bar>\n    <app-home-banner></app-home-banner>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let cat of categories\" offset=\"0\" size=\"12\" offset-md=\"1\" size-md=\"10\" >\n                <app-carousel\n                        [carouselName]=\"cat.name\"\n                        [categoryCarousel]= \"[cat.subcategories]\"\n                        [carouselSlug] =\"cat.slug\"\n                        [startingCarouselSize]=\"5\">\n                </app-carousel>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <img src=\"assets/images/homeSection1.jpeg\" >\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-card-header>\n                        <ion-card-subtitle>You can't buy happiness but you can buy good food</ion-card-subtitle>\n                        <ion-card-title>Food</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <img src=\"assets/images/homeSection2.png\" >\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Music</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <img src=\"assets/images/homeSection3.jpeg\" >\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Celebrations</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col >\n                    <img src=\"assets/images/homeSection4.png\" >\n                </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col >\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Parties</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maxHeight {\n  max-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXhIZWlnaHR7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG4iLCIubWF4SGVpZ2h0IHtcbiAgbWF4LWhlaWdodDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _core_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/auth.module */ "./src/app/core/auth.module.ts");
/* harmony import */ var _shared_carousel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/carousel.module */ "./src/app/shared/carousel.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"] }
                ]),
                _core_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _core_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _shared_carousel_module__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"]
            ],
            exports: [],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xufVxuIiwiaW9uLWNhcmQge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");



var HomePage = /** @class */ (function () {
    function HomePage(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    HomePage.prototype.loadCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            // @ts-ignore
            _this.categories = data;
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map