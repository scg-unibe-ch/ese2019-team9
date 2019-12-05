(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer>\n  <ion-toolbar color=\"medium\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n          <img class=\"maxHeight\" src=\"../assets/images/molnUni.png\">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n          <ion-text>This is a software engineering project, conducted by five computer science stundents of the Univeristy of Bern</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n          <ion-text>Email: <a href=\"mailto:themolnplatform@gmail.com\">themolnplatform@gmail.com</a></ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n          <ion-text>© MOLN - 2019</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-top-header></app-top-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-navigation-bar class=\"ion-hide-md-down\"></app-navigation-bar>\n    <app-home-banner></app-home-banner>\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let cat of categories\" offset=\"0\" size=\"12\" offset-md=\"1\" size-md=\"10\">\n                <app-carousel\n                        [carouselName]=\"cat.name\"\n                        [categoryCarousel]=\"[cat.subcategories]\"\n                        [carouselSlug]=\"cat.slug\"\n                        [startingCarouselSize]=\"5\">\n                </app-carousel>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"1\" size=\"10\" offset-md=\"3\" size-md=\"6\">\n                    <img class=\"imageSize\"  src=\"assets/images/howitworks.png\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-title>How it works</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n                        ut aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n                        dolor sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                        erat. At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"1\" size=\"10\" offset-md=\"3\" size-md=\"6\">\n                    <img class=\"imageSize\" src=\"assets/images/becomesellerMobile.png\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-title>How to become a seller</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n                        ut aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n                        dolor sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                        erat. At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card color=\"medium\">\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"2\" size-md=\"4\">\n                    <img src=\"assets/images/foodbeverage1.jpeg\">\n                </ion-col>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"0\" size-md=\"4\">\n                    <img src=\"assets/images/foodbeverage2.jpeg\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-subtitle>You can't buy happiness but you can buy good food</ion-card-subtitle>\n                        <ion-card-title>Catering</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Food service (US English) or catering industry (British English) defines those businesses, institutions, and\n                        companies responsible for any meal prepared outside the home. This industry includes restaurants, school and\n                        hospital cafeterias, catering operations, and many other formats.\n                        The companies that supply foodservice operators are called foodservice distributors. Foodservice distributors sell\n                        goods like small wares (kitchen utensils) and foods. Some companies manufacture products in both consumer and\n                        foodservice versions. The consumer version usually comes in individual-sized packages with elaborate label design\n                        for retail sale. The foodservice version is packaged in a much larger industrial size and often lacks the colorful\n                        label designs of the consumer version.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"2\" size-md=\"4\">\n                    <img src=\"assets/images/equipment1.jpeg\">\n                </ion-col>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"0\" size-md=\"4\">\n                    <img src=\"assets/images/equipment2.jpeg\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Services</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n                        ut aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n                        dolor sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                        erat. At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card color=\"medium\">\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"2\" size-md=\"4\">\n                    <img src=\"assets/images/realestate1.jpeg\">\n                </ion-col>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"0\" size-md=\"4\">\n                    <img src=\"assets/images/realestate2.jpeg\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Location</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n                        ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n                        dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                        erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-card>\n        <ion-grid>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"2\" size-md=\"4\">\n                    <img src=\"assets/images/services1.jpeg\">\n                </ion-col>\n                <ion-col offset=\"0\" size=\"6\" offset-md=\"0\" size-md=\"4\">\n                    <img src=\"assets/images/services2.jpeg\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col offset=\"0\" size=\"12\" offset-md=\"2\" size-md=\"8\">\n                    <ion-card-header>\n                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                        <ion-card-title>Entertainment</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n                        ut\n                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n                        dolor\n                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                        erat.\n                        At vero eos et accusam et justo duo dolores et ea rebum.\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <app-footer></app-footer>\n</ion-content>\n"

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


/**
 * Footer Component
 */
var FooterComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function FooterComponent() {
    }
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
/* harmony import */ var _home_banner_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-banner/search-result/search-result.component */ "./src/app/pages/home/home-banner/search-result/search-result.component.ts");












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
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _home_banner_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultComponent"]],
            entryComponents: [_home_banner_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultComponent"]]
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

module.exports = "ion-card {\n  margin: 0px;\n  box-shadow: none;\n  border-bottom: solid grey 0.5px;\n}\n\n@media (max-width: 768px) {\n  .imageSize {\n    width: 80vw;\n  }\n}\n\n@media (min-width: 768px) {\n  .imageSize {\n    width: 50vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdFO0VBREY7SUFFSSxXQUFBO0VDQ0Y7QUFDRjs7QURBRTtFQUpGO0lBS0ksV0FBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDAuNXB4O1xufVxuXG4uaW1hZ2VTaXple1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogNTB2dztcbiAgfVxufVxuXG4iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDAuNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltYWdlU2l6ZSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW1hZ2VTaXplIHtcbiAgICB3aWR0aDogNTB2dztcbiAgfVxufSJdfQ== */"

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