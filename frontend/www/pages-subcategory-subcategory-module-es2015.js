(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/filter/filter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/filter/filter.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"grid\">\n  <ion-row>\n    <ion-text class=\"ion-no-padding\">\n      <ng-content select=\"[title]\"></ng-content>\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ng-content class=\"input\" select=\"[input]\"></ng-content>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subcategory/subcategory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n    <ion-card *ngIf=\"subcategory\" class=\"backgroundGradient cardMargin\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"8\">\n                    <ion-title class=\"ion-no-padding bigTitle\">{{ subcategory.name }}</ion-title>\n                </ion-col><!--\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                    <app-carousel *ngIf=\"carouselIsReady\" [carouselName]=\"'Featured products'\"\n                        [carouselSlug]=\"'featured'\" [productCarousel]=\"this.featuredProducts\"\n                        [startingCarouselSize]=\"1\">\n                    </app-carousel>\n                </ion-col>-->\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    <ion-grid class=\"ion-padding-none\">\n        <ion-row class=\"filter-list\">\n            <ion-col size=\"0\" size-sm=\"2\"></ion-col>\n            <ion-col>\n            <ng-container *ngFor=\"let filter of filterargsToDisplay\">\n                <ion-button *ngIf=\"filter.name=='rating'\" class=\"button\" size=\"small\" fill=\"outline\" (click)=\"removeFilter(filter)\">\n                    <ion-icon *ngFor=\"let i of array(5)\" class=\"rating\" [name]=\"i>filter.value ? 'star-outline' : 'star'\"></ion-icon>\n                    <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n                <ion-button *ngIf=\"filter.name=='price'\" class=\"button\" size=\"small\" fill=\"outline\" (click)=\"removeFilter({name: 'minPrice', operator: '<=', value: '0'}); removeFilter({name: 'maxPrice', operator: '>=', value: '0'})\">\n                    <ion-icon name=\"pricetag\"></ion-icon>{{ selectedPrice.lower }}CHF - {{ selectedPrice.upper }}CHF\n                    <ion-icon name=\"close\"></ion-icon></ion-button>\n            </ng-container>\n            </ion-col>\n         </ion-row>\n         <ion-row class=\"ion-justify-content-end\">\n             <ion-col size=\"12\" size-md=\"3\" class=\"ion-justify-content-end\">\n                    <ion-select placeholder=\"Sort by\" okText=\"Sort\" cancelText=\"Cancel\" (ionChange)=\"onSortChange($event)\">\n                            <ion-select-option value=\"+price\">Price ascending</ion-select-option>\n                            <ion-select-option value=\"-price\">Price descending</ion-select-option>\n                            <ion-select-option value=\"+date\">Date ascending</ion-select-option>\n                            <ion-select-option value=\"-date\">Date descending</ion-select-option>\n                            <ion-select-option value=\"+rating\">Rating ascending</ion-select-option>\n                            <ion-select-option value=\"-rating\">Rating descending</ion-select-option>\n                        </ion-select>\n             </ion-col>\n         </ion-row>\n        <ion-row>\n            <ion-col size=\"12\" size-md=\"3\" class=\"filter-col ion-margin-top\">\n                <app-filter>\n                    <div class=\"filter-title\" title>Select your Rating:</div>\n                    <div class=\"filter-input\" input>\n                        <ion-icon *ngFor=\"let i of array(5)\" class=\"rating\"\n                            [name]=\"i>filledStars ? 'star-outline' : 'star'\" (mouseenter)=\"fillTo(i)\"\n                            (click)=\"onRatingFilterChanged(i)\"></ion-icon> and more\n                    </div>\n                </app-filter>\n                <app-filter>\n                    <div class=\"filter-title\" title>Select your Price range:</div>\n                    <div class=\"filter-input\" input>\n                        <ion-range id=\"priceRangeInput\" [min]=\"priceSpan.lower\" [max]=\"priceSpan.upper\"  dualKnobs=\"true\" pin=\"true\" step=\"1\" [value]=\"priceSpan\" (ionChange)=\"onPriceSliderChange($event)\">\n                        </ion-range>\n                        From: <ion-input id=\"minPriceInput\" type=\"number\" debounce=\"500\" [value]=\"priceSpan.lower\" (ionInput)=\"onMinPriceChange(undefined)\"></ion-input> to <ion-input id=\"maxPriceInput\" type=\"number\" [value]=\"priceSpan.upper\" (ionInput)=\"onMaxPriceChange(undefined)\"></ion-input>\n                    </div>\n                </app-filter>\n\n            </ion-col>\n            <ion-col size=\"12\" size-md=\"9\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col *ngFor=\"let product of products\" size=\"12\" size-md=\"6\" size-xl=\"4\">\n                            <app-subcategory-item class=\"item\" [verified]=\"product.verified\" [rating]=\"product.rating\"\n                                [id]=\"product._id\" [name]=\"product.name\" [price]=\"product.price\"\n                                [location]=\"product.location\" [imageSrc]=\"product.image\">\n                            </app-subcategory-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/subcategory/filter/filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/subcategory/filter/filter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-row {\n  padding: 5px 0px;\n}\n:host ion-title {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWJjYXRlZ29yeS9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIH1cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICB9XG59XG4iLCI6aG9zdCBpb24tcm93IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/subcategory/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/subcategory/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterComponent = class FilterComponent {
};
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/filter/filter.component.html"),
        styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/pages/subcategory/filter/filter.component.scss")]
    })
], FilterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/pages/subcategory/subcategory.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcategory-item/subcategory-item.component */ "./src/app/pages/subcategory/subcategory-item/subcategory-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_carousel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/carousel.module */ "./src/app/shared/carousel.module.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/pages/subcategory/filter/filter.component.ts");












const routes = [
    { path: '', component: _subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"] },
    { path: ':subcategorySlug', component: _subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"] },
];
let SubcategoryPageModule = class SubcategoryPageModule {
};
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
        declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoryPage"], _subcategory_item_subcategory_item_component__WEBPACK_IMPORTED_MODULE_8__["SubcategoryItemComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"]]
    })
], SubcategoryPageModule);



/***/ }),

/***/ "./src/app/pages/subcategory/subcategory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/subcategory/subcategory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line {\n  border-bottom: 1px solid grey;\n}\n\n.bigTitle {\n  font-size: 50px;\n}\n\n.mediumTitle {\n  text-align: center;\n}\n\nimg.pic-square {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 200px;\n}\n\n.backgroundGradient {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(var(--ion-color-secondary)), to(var(--ion-color-light)));\n  background-image: linear-gradient(var(--ion-color-secondary), var(--ion-color-light));\n}\n\n.cardMargin {\n  margin: 0px;\n  padding: 10px;\n}\n\n.filterPopover {\n  width: auto;\n  height: auto;\n  overflow: visible;\n}\n\n.rating {\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n:host ion-grid {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\n:host ion-range {\n  --bar-height: 4px;\n  --knob-size: 25px;\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\n.item {\n  margin-top: 0;\n}\n\n.filter-col {\n  border-right: 1px solid var(--ion-color-medium);\n  box-shadow: 1px 1px 2px 0px var(--ion-color-medium);\n}\n\n.filter-list {\n  min-height: 2rem;\n  padding-top: 0.5rem;\n  box-sizing: border-box;\n}\n\n.filter-list .button {\n  --border-color: var(--ion-color-secondary-shade);\n  --color: var(--ion-color-secondary-shade);\n}\n\napp-filter {\n  max-width: 100%;\n}\n\napp-filter .filter-title {\n  font-size: 1.2em;\n  width: 100%;\n}\n\napp-filter .filter-input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3ViY2F0ZWdvcnkvc3ViY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLCtIQUFBO0VBQUEscUZBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsK0NBQUE7RUFDQSxtREFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FESUU7RUFDRSxnREFBQTtFQUNBLHlDQUFBO0FDRko7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FES0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNRTtFQUNFLFdBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5iaWdUaXRsZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLm1lZGl1bVRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcucGljLXNxdWFyZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5iYWNrZ3JvdW5kR3JhZGllbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xufVxuXG4uY2FyZE1hcmdpbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVyUG9wb3ZlciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ucmF0aW5nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuOmhvc3Qge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICBpb24tcmFuZ2Uge1xuICAgIC0tYmFyLWhlaWdodDogNHB4O1xuICAgIC0ta25vYi1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG5cbiAgXG4uaXRlbSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5maWx0ZXItY29sIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmZpbHRlci1saXN0IHtcbiAgbWluLWhlaWdodDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLmJ1dHRvbiB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICB9XG59XG5cbmFwcC1maWx0ZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgLmZpbHRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5maWx0ZXItaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xufVxuXG4uYmlnVGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5tZWRpdW1UaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnBpYy1zcXVhcmUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYmFja2dyb3VuZEdyYWRpZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlclBvcG92ZXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJhdGluZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbjpob3N0IGlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuOmhvc3QgaW9uLXJhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0ta25vYi1zaXplOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmZpbHRlci1jb2wge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uZmlsdGVyLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZpbHRlci1saXN0IC5idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xufVxuXG5hcHAtZmlsdGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuYXBwLWZpbHRlciAuZmlsdGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5hcHAtZmlsdGVyIC5maWx0ZXItaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");
/* harmony import */ var src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/filterAndSearchService/filter-and-search.service */ "./src/app/core/services/filterAndSearchService/filter-and-search.service.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let SubcategoryPage = class SubcategoryPage {
    constructor(route, productService, categoryService, filterAndSearchService, progressIndicatorService) {
        this.route = route;
        this.productService = productService;
        this.categoryService = categoryService;
        this.filterAndSearchService = filterAndSearchService;
        this.progressIndicatorService = progressIndicatorService;
        this.allProducts = [];
        this.products = [];
        this.featuredProducts = [];
        this.filledStars = 0;
        this.priceSpan = { lower: 0, upper: 1000 };
        this.filterSettings = { rating: '', location: '', minPrice: '', maxPrice: '' };
        this.filterargs = [];
        this.lastfilterargs = [];
        this.carouselIsReady = false;
    }
    /*
    The url-slug is saved and used for a request. The request fetches details of the subcategory and the
    products of this subcategory from the backend.
     */
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('subcategorySlug');
        this.categoryService.getSingleCategoryFromSlug(slug).subscribe(data => {
            this.subcategory = data[0];
            this.updateProducts();
        });
    }
    // Select featured products for product-carousel
    selectFeaturedProducts() {
        this.featuredProducts = this.allProducts.slice(0, 2);
        this.carouselIsReady = true;
    }
    updateProducts() {
        return this.productService.getProductsById(this.subcategory._id).then(products => {
            // @ts-ignore
            this.allProducts = products;
            this.products = this.applyFilters(this.allProducts);
            this.getPriceSpan();
            this.selectFeaturedProducts();
        });
    }
    applyFilters(products) {
        this.filterargs = [];
        Object.keys(this.filterSettings).forEach((key) => {
            if (this.filterSettings[key] !== '') {
                this.filterargs.push(this.filterSettings[key]);
            }
        });
        if (this.filterargs.length > 0) {
            this.lastfilterargs = this.filterargs;
            return this.filterAndSearchService.filterComplex(products, this.filterargs);
        }
        this.lastfilterargs = this.filterargs;
        return products;
    }
    filterDidNotChange(arr1, arr2) {
        if (arr1 === arr2) {
            return true;
        }
        if (arr1 === null || arr2 === null) {
            return false;
        }
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    get filterargsToDisplay() {
        const detailNames = new Map([
            ['price', new Map([
                    ['>=', 'minPrice'],
                    ['<=', 'maxPrice']
                ])]
        ]);
        const filterObjArray = [];
        this.filterargs.forEach((el) => {
            const filterObj = this.filterAndSearchService.filterToObject(el);
            const name = filterObj.name;
            const operator = filterObj.operator;
            const map = (detailNames.has(name)) ? detailNames.get(name) : undefined;
            const detailName = (map && map.get(operator)) ? map.get(operator) : filterObj.name;
            if (name == 'price') {
                // Remove duplicate price
                for (let i = 0; i < filterObjArray.length; i++) {
                    if (filterObjArray[i].name === 'price') {
                        return;
                    }
                }
            }
            filterObjArray.push({ name: filterObj.name, operator: filterObj.operator, value: filterObj.value, detailName });
        });
        return filterObjArray;
    }
    get selectedPrice() {
        return document.querySelector('#priceRangeInput').value;
    }
    removeFilter(filter) {
        const resetFilterInput = new Map([
            ['rating', () => { this.filledStars = 0; }],
            ['maxPrice', () => {
                    document.querySelector('#maxPriceInput').value = this.priceSpan.upper.toString();
                    const element = document.querySelector('#priceRangeInput');
                    this.setRangeValueTo(element.value.lower, this.priceSpan.upper);
                }],
            ['minPrice', () => {
                    document.querySelector('#minPriceInput').value = this.priceSpan.lower.toString();
                    const element = document.querySelector('#priceRangeInput');
                    this.setRangeValueTo(this.priceSpan.lower, element.value.upper);
                }]
        ]);
        if (!filter.detailName) {
            filter.detailName = filter.name;
        }
        if (this.filterSettings[filter.detailName]) {
            this.filterSettings[filter.detailName] = '';
            this.products = this.applyFilters(this.allProducts);
            if (resetFilterInput.has(filter.detailName)) {
                resetFilterInput.get(filter.detailName)();
            }
        }
    }
    setRangeValueTo(lower, upper) {
        const element = document.querySelector('#priceRangeInput');
        element.value = { lower, upper };
    }
    onRatingFilterChanged(n) {
        this.filterSettings.rating = `>=;rating;${n}`;
        this.products = this.applyFilters(this.allProducts);
    }
    onPriceSliderChange(evt) {
        const newPrice = evt.target.value;
        this.onMinPriceChange(newPrice.lower);
        this.onMaxPriceChange(newPrice.upper);
    }
    onMinPriceChange(n) {
        const input = document.querySelector('#minPriceInput');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(n)) {
            if (input.value !== n.toString()) {
                input.value = n.toString();
            }
        }
        else {
            const newValue = Number(input.value);
            if (isNaN(newValue)) {
                return;
            }
            n = newValue;
            const element = document.querySelector('#priceRangeInput');
            this.setRangeValueTo(n, element.value.upper);
        }
        if (n === 0) {
            this.removeFilter({ name: 'minPrice', operator: '>=', value: '' });
        }
        else {
            this.filterSettings.minPrice = `>=;price;${n}`;
        }
        this.products = this.applyFilters(this.allProducts);
    }
    onMaxPriceChange(n) {
        const input = document.querySelector('#maxPriceInput');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(n)) {
            if (input.value !== n.toString()) {
                input.value = n.toString();
            }
        }
        else {
            const newValue = Number(input.value);
            if (isNaN(newValue)) {
                return;
            }
            n = newValue;
            const element = document.querySelector('#priceRangeInput');
            this.setRangeValueTo(element.value.lower, n);
        }
        if (n === this.priceSpan.upper) {
            this.removeFilter({ name: 'maxPrice', operator: '<=', value: '' });
        }
        else {
            this.filterSettings.maxPrice = `<=;price;${n}`;
        }
        this.products = this.applyFilters(this.allProducts);
    }
    array(n) {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
    }
    fillTo(n) {
        this.filledStars = n;
    }
    getPriceSpan() {
        const sorted = this.filterAndSearchService.sort([...this.products], '+price');
        if (sorted.length === 0) {
            return { lower: 0, upper: 1000 };
        }
        this.priceSpan = { lower: sorted[0]['price'], upper: sorted[sorted.length - 1]['price'] };
    }
    onSortChange(evt) {
        this.filterAndSearchService.sort(this.products, evt.target.value, '-date');
    }
};
SubcategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"] },
    { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorService"] }
];
SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory',
        template: __webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subcategory/subcategory.page.html"),
        styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/pages/subcategory/subcategory.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
        src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"],
        src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorService"]])
], SubcategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-subcategory-subcategory-module-es2015.js.map