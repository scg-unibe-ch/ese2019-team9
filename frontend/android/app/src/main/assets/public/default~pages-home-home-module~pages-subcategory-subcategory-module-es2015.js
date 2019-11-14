(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/carousel/carousel-item/carousel-item.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/carousel/carousel-item/carousel-item.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"carouselItemBody ion-text-center \" [routerLink]=\"[completeLink]\" >\n  <ion-text>\n    {{ name }}\n  </ion-text>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/carousel/carousel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/carousel/carousel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <ion-toolbar color=\"medium\" >\n    <ion-title class=\"carouselTitle\">\n      {{ carouselName }}\n    </ion-title>\n  </ion-toolbar>\n  <ion-card-content class=\"carouselBody ion-justify-content-center ion-align-items-center\" >\n      <ion-button size=\"large\" fill=\"empty\" slot=\"start\" (click)=\"selectPreviousItem()\" >\n          <ion-icon name=\"arrow-dropleft\" slot=\"end\" ></ion-icon>\n      </ion-button>\n      <span *ngFor=\"let item of itemsToDisplay\">\n        <app-carousel-item [name]=\"item.name\" [slug]=\"item.slug\" [id]=\"item._id\" [link]=\"routerLink\" ></app-carousel-item>\n      </span>\n      <ion-button size=\"large\" fill=\"empty\" slot=\"end\" (click)=\"selectNextItem()\">\n          <ion-icon name=\"arrow-dropright\" slot=\"start\" ></ion-icon>\n      </ion-button>\n  </ion-card-content>\n</ion-card>\n\n"

/***/ }),

/***/ "./src/app/shared/carousel.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/carousel.module.ts ***!
  \*******************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/shared/components/carousel/carousel.component.ts");
/* harmony import */ var _components_carousel_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carousel/carousel-item/carousel-item.component */ "./src/app/shared/components/carousel/carousel-item/carousel-item.component.ts");







let CarouselModule = class CarouselModule {
};
CarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _components_carousel_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__["CarouselItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _components_carousel_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__["CarouselItemComponent"]]
    })
], CarouselModule);



/***/ }),

/***/ "./src/app/shared/components/carousel/carousel-item/carousel-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel-item/carousel-item.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carouselItemBody {\n  min-height: 75px;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .carouselItemBody {\n    width: 18vw;\n    margin-left: 1.5vw;\n    margin-right: 1.5vw;\n  }\n}\n@media (min-width: 768px) {\n  .carouselItemBody {\n    width: 11vw;\n    margin-left: 1vw;\n    margin-right: 1vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFXQSxlQUFBO0FDVEY7QURERTtFQUZGO0lBR0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNJRjtBQUNGO0FESEU7RUFQRjtJQVFJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDTUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbEl0ZW1Cb2R5IHtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xuICAgIG1hcmdpbi1yaWdodDogMS41dnc7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDExdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgfVxuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmNhcm91c2VsSXRlbUJvZHkge1xuICBtaW4taGVpZ2h0OiA3NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcm91c2VsSXRlbUJvZHkge1xuICAgIHdpZHRoOiAxOHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNhcm91c2VsSXRlbUJvZHkge1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAxdnc7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/carousel/carousel-item/carousel-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel-item/carousel-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CarouselItemComponent = class CarouselItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.slug) {
            this.completeLink = this.link.concat(this.slug);
        }
        else if (this.id) {
            this.completeLink = this.link.concat(this.id.toString());
        }
    }
};
CarouselItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselItemComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselItemComponent.prototype, "slug", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CarouselItemComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselItemComponent.prototype, "link", void 0);
CarouselItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel-item',
        template: __webpack_require__(/*! raw-loader!./carousel-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/carousel/carousel-item/carousel-item.component.html"),
        styles: [__webpack_require__(/*! ./carousel-item.component.scss */ "./src/app/shared/components/carousel/carousel-item/carousel-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CarouselItemComponent);



/***/ }),

/***/ "./src/app/shared/components/carousel/carousel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carouselTitle {\n  text-align: center;\n  background: var(--ion-color-medium);\n}\n\n.carouselBody {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWxUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5jYXJvdXNlbEJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufSIsIi5jYXJvdXNlbFRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmNhcm91c2VsQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/carousel/carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let CarouselComponent = class CarouselComponent {
    constructor(categoryService, platform) {
        this.categoryService = categoryService;
        this.platform = platform;
        this.carouselItems = [];
        this.carouselStartingIndex = 0;
        this.itemsToDisplay = [];
    }
    /*
        Select the size of the categoryCarousel based on screen size
     */
    selectCarouselSize() {
        if (window.innerWidth >= 768) {
            this.carouselSize = this.startingCarouselSize;
        }
        else {
            this.carouselSize = 3;
        }
    }
    /*
        Prepares the size and content of carousel
     */
    prepareCarousel() {
        this.carouselItems = [];
        // checks if the carousel should be a category carousel and prepares it
        if (this.categoryCarousel && this.categoryCarousel.length >= 0) {
            this.selectCarouselSize();
            this.routerLink = '/subcategory/';
            for (let i = 0; i < this.categoryCarousel.length; i++) {
                for (let j = 0; j < this.categoryCarousel[i].length; j++) {
                    this.carouselItems.push(this.categoryCarousel[i][j]);
                }
            }
        }
        /*  Checks if the carousel should be a product carousel and prepares it.
            Note: the function selectCarouselSize() is not called since the product carousel has only size 1
         */
        if (this.productCarousel && this.productCarousel.length >= 0) {
            // Set the carouselSize directly since this will not change relative to screen size
            this.carouselSize = this.startingCarouselSize;
            this.routerLink = '/product-details/';
            for (let i = 0; i < this.productCarousel.length; i++) {
                this.carouselItems.push(this.productCarousel[i]);
            }
        }
        this.selectCarouselItems(this.carouselSize, 0);
    }
    ngOnInit() {
        this.prepareCarousel();
        this.platform.resize.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.prepareCarousel();
        }));
    }
    /*
        Selects the next carouselItem to be displayed
     */
    selectNextItem() {
        this.carouselStartingIndex++;
        this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
    }
    /*
        Selects the previous carouselItem to be displayed
     */
    selectPreviousItem() {
        // Reset carouselStartingIndex once carousel reaches end of subCategories
        if ((this.carouselStartingIndex % this.carouselItems.length) === 0) {
            this.carouselStartingIndex = 0;
        }
        // Assures this.carouselStartingIndex >= 0
        if (this.carouselStartingIndex === 0) {
            this.carouselStartingIndex = this.carouselItems.length;
        }
        this.carouselStartingIndex--;
        this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
    }
    /*
        Selects carouselItems to be currently displayed from all carouselItems
     */
    selectCarouselItems(carouselSize, startingIndex) {
        this.itemsToDisplay = [];
        /* checks for amount of carousel categories,
            if true: all categories are displayed,
            if false: 3 categories get chosen to be displayed
         */
        if (this.carouselItems.length < carouselSize) {
            this.itemsToDisplay = this.carouselItems;
        }
        else {
            for (let i = startingIndex; i < (carouselSize + startingIndex); i++) {
                this.itemsToDisplay.push(this.carouselItems[i % (this.carouselItems.length)]);
            }
        }
    }
};
CarouselComponent.ctorParameters = () => [
    { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselComponent.prototype, "carouselName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CarouselComponent.prototype, "categoryCarousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CarouselComponent.prototype, "productCarousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselComponent.prototype, "carouselSlug", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CarouselComponent.prototype, "startingCarouselSize", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/shared/components/carousel/carousel.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], CarouselComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-home-home-module~pages-subcategory-subcategory-module-es2015.js.map