(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-products-add-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/add-products.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-products/add-products.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmitAddProduct()\">\n            <ion-row>\n                <ion-col size=\"12\" size-md=\"6\"  offset-md=\"3\">\n                    <ion-title>Add a product</ion-title>\n                    <ion-card>\n                        <ion-card class=\"formElement\">\n                            <app-input-form [inputForm]=\"productForm\" [givenName]=\"'name'\" [text]=\"'Title*'\"\n                                [validationMessages]=\"validationMessages.name\" [type]=\"'text'\" [inputMode]=\"'text'\">\n                            </app-input-form>\n                        </ion-card>\n                        <ion-item>\n                            <app-image-picker #imagePicker class=\"picker\" (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n                        </ion-item>\n                        <ion-card class=\"formElement\">\n                            <app-input-form [inputForm]=\"productForm\" [givenName]=\"'price'\" [text]=\"'Price (in CHF)*'\"\n                                [validationMessages]=\"validationMessages.price\" [type]=\"'number'\"\n                                [inputMode]=\"'number'\">\n                            </app-input-form>\n                        </ion-card>\n                        <ion-item>\n                            <app-map-picker #mapPicker class=\"picker\" (locationPick)=\"onLocationPicked($event)\"></app-map-picker>\n                        </ion-item>\n                        <ion-card class=\"formElement\">\n                            <app-input-form id=\"locationInput\"\n                                    [inputForm]=\"productForm\" [givenName]=\"'location'\" [text]=\"'Location: State, City*'\"\n                                    [validationMessages]=\"validationMessages.location\"\n                                    [type]=\"'text'\" [inputMode]=\"'text'\">\n                            </app-input-form>\n                        </ion-card>\n                        <ion-card>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label>Category*</ion-label>\n                                    <ion-select formControlName=\"category\"\n                                        (ionChange)=\"displayChosenSubcategories($event)\" placeholder=\"Select One\"\n                                        okText=\"Okay\" cancelText=\"Dismiss\">\n                                        <ion-select-option [value]=\"category.slug\" *ngFor=\"let category of categories\">\n                                            <ion-label> {{ category.name }}</ion-label>\n                                        </ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-list>\n                        </ion-card>\n                        <ion-card>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label>Subcategory*</ion-label>\n                                    <ion-select formControlName=\"categorySlug\" placeholder=\"Select One\" okText=\"Okay\"\n                                        cancelText=\"Dismiss\">\n                                        <ion-select-option [value]=\"subcategory.slug\"\n                                            *ngFor=\"let subcategory of chosenSubcategories\">\n                                            <ion-label> {{ subcategory.name }}</ion-label>\n                                        </ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-list>\n                        </ion-card>\n                        <ion-card>\n                            <ion-item>\n                                <ion-label position=\"floating\">Description*</ion-label>\n                                <ion-textarea formControlName=\"description\"></ion-textarea>\n                            </ion-item>\n                        </ion-card>\n                        <ion-text>*mandatory fields</ion-text>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" offset=\"0\" offset-md=\"2\" size-md=\"8\" offset-lg=\"3\" size-lg=\"6\">\n                    <ion-button type=\"submit\"> Upload product</ion-button>\n                </ion-col>\n            </ion-row>\n        </form>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/map-modal/map-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-products/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    Pick Location\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-button (click)=\"onCancel()\">Cancel</ion-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/map-picker/map-picker.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-products/map-picker/map-picker.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-spinner *ngIf=\"isLoading\" color=\"primary\"></ion-spinner>\n  <ion-img (click)=\"onPickLocation()\" role=\"button\" class=\"locationImage\" [src]=\"selectedLocationImage\" *ngIf=\"selectedLocationImage && !isLoading\"></ion-img>\n  <ion-button fill=\"empty\" class=\"blueButton\" (click)=\"onPickLocation()\" *ngIf=\"!selectedLocationImage && !isLoading\"><ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n    <ion-label>Select</ion-label></ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/add-products/add-products.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-products/add-products.module.ts ***!
  \***********************************************************/
/*! exports provided: AddProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPageModule", function() { return AddProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-products.page */ "./src/app/pages/add-products/add-products.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-picker/map-picker.component */ "./src/app/pages/add-products/map-picker/map-picker.component.ts");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/pages/add-products/map-modal/map-modal.component.ts");












var routes = [
    {
        path: '',
        component: _add_products_page__WEBPACK_IMPORTED_MODULE_6__["AddProductsPage"]
    }
];
var AddProductsPageModule = /** @class */ (function () {
    function AddProductsPageModule() {
    }
    AddProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_products_page__WEBPACK_IMPORTED_MODULE_6__["AddProductsPage"], _map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_10__["MapPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__["MapModalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _shared_input_form_module__WEBPACK_IMPORTED_MODULE_8__["InputFormModule"],
            ],
            exports: [_map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_10__["MapPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__["MapModalComponent"]],
            entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__["MapModalComponent"]]
        })
    ], AddProductsPageModule);
    return AddProductsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-products/add-products.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-products/add-products.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 100%;\n  height: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkZC1wcm9kdWN0cy9hZGQtcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtcHJvZHVjdHMvYWRkLXByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtcHJvZHVjdHMvYWRkLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG59XG4iLCIucGlja2VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/add-products/add-products.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-products/add-products.page.ts ***!
  \*********************************************************/
/*! exports provided: AddProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPage", function() { return AddProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/image-picker/image-picker.component */ "./src/app/shared/components/image-picker/image-picker.component.ts");
/* harmony import */ var _map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-picker/map-picker.component */ "./src/app/pages/add-products/map-picker/map-picker.component.ts");










function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);
        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
var AddProductsPage = /** @class */ (function () {
    function AddProductsPage(categoryService, productService, progressIndicatorService, formBuilder, userService, router) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.progressIndicatorService = progressIndicatorService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.validationMessages = {
            name: [
                { type: 'required', message: 'Title is required' },
                { type: 'text', message: 'Not a valid address' },
                { type: 'minlength', message: 'Title must be longer than 5 characters' },
                { type: 'maxlength', message: 'Title must be less than 30 characters' }
            ],
            price: [
                { type: 'required', message: 'Price is required' },
                { type: 'number', message: 'Not a valid number' },
                { type: 'min', message: 'Price must be more than 10 CHF' },
                { type: 'max', message: 'Price must be lower than 1\'000\'000 CHF' }
            ],
            description: [
                { type: 'required', message: 'Description is required' },
                { type: 'maxlength', message: 'Description must me shorter than 10000 characters' }
            ],
            location: [
                { type: 'required', message: 'Location is required' },
                { type: 'text', message: 'Not a valid location' },
                { type: 'maxlength', message: 'Location must be less than 30 characters' }
            ]
        };
        this.categories = [];
        this.chosenSubcategories = [];
    }
    AddProductsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var promise = this.userService.isSeller();
        promise.then(function (isSeller) {
            if (!isSeller) {
                _this.progressIndicatorService.presentToast('You\'re missing profile information to add products', 'danger', 'other', true, 'middle')
                    .then(function () { return _this.router.navigate(['/profile']); });
            }
        });
    };
    AddProductsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
        this.productForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000000)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            categorySlug: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10000)]],
            map: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    AddProductsPage.prototype.displayChosenSubcategories = function (event) {
        var slug = event.target.value;
        this.chosenSubcategories = this.categories.filter(function (cat) { return cat.slug === slug; })[0].subcategories
            .sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    AddProductsPage.prototype.onSubmitAddProduct = function () {
        var _this = this;
        if (this.productForm.invalid) {
            this.progressIndicatorService.presentToast('Form incomplete: Please enter all required information', 'danger');
            return;
        }
        var val = this.productForm.value;
        this.progressIndicatorService.presentLoading('Adding product...');
        this.productService.addProduct(val, this.imageFile).subscribe(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.productForm.reset();
            _this.progressIndicatorService.presentToast('Product successfully created');
            // this.imagePicker.resetImage();
            // this.mapPicker.resetLocation();
        }, function (error) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            console.log(error);
        });
    };
    AddProductsPage.prototype.onImagePicked = function (imageData) {
        if (typeof imageData === 'string') {
            try {
                this.imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            }
            catch (error) {
                console.log(error);
                return;
            }
        }
        else {
            this.imageFile = imageData;
        }
    };
    AddProductsPage.prototype.onLocationPicked = function (location) {
        this.productForm.patchValue({ map: location });
        console.log(document.getElementById('locationInput'));
        document.getElementById('locationInput').firstElementChild.children[1].value = location.address;
    };
    AddProductsPage.ctorParameters = function () { return [
        { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__["ProgressIndicatorService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__["ImagePickerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__["ImagePickerComponent"])
    ], AddProductsPage.prototype, "imagePicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_9__["MapPickerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _map_picker_map_picker_component__WEBPACK_IMPORTED_MODULE_9__["MapPickerComponent"])
    ], AddProductsPage.prototype, "mapPicker", void 0);
    AddProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-products',
            template: __webpack_require__(/*! raw-loader!./add-products.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/add-products.page.html"),
            styles: [__webpack_require__(/*! ./add-products.page.scss */ "./src/app/pages/add-products/add-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_5__["ProgressIndicatorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddProductsPage);
    return AddProductsPage;
}());



/***/ }),

/***/ "./src/app/pages/add-products/map-modal/map-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-products/map-modal/map-modal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkZC1wcm9kdWN0cy9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtcHJvZHVjdHMvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLXByb2R1Y3RzL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4ubWFwLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5tYXAudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/add-products/map-modal/map-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-products/map-modal/map-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    MapModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps().then(function (googleMaps) {
            _this.googleMaps = googleMaps;
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: { lat: 46.9505, lng: 7.4381 },
                zoom: 16
            });
            _this.googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            _this.clickListener = map.addListener('click', function (event) {
                var selectedCoords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
                _this.modalCtrl.dismiss(selectedCoords);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    MapModalComponent.prototype.ngOnDestroy = function () {
        this.googleMaps.event.removeListener(this.clickListener);
    };
    MapModalComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available');
                }
            };
        });
    };
    MapModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapModalComponent.prototype, "mapElementRef", void 0);
    MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-modal',
            template: __webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/map-modal/map-modal.component.html"),
            styles: [__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/pages/add-products/map-modal/map-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MapModalComponent);
    return MapModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-products/map-picker/map-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/add-products/map-picker/map-picker.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".locationImage {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.picker {\n  width: 100%;\n  height: 40vh;\n  border: 1px solid var(--ion-color-primary);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkZC1wcm9kdWN0cy9tYXAtcGlja2VyL21hcC1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1wcm9kdWN0cy9tYXAtcGlja2VyL21hcC1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLXByb2R1Y3RzL21hcC1waWNrZXIvbWFwLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbkltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLmxvY2F0aW9uSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBpY2tlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/add-products/map-picker/map-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-products/map-picker/map-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: MapPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPickerComponent", function() { return MapPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/pages/add-products/map-modal/map-modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









var MapPickerComponent = /** @class */ (function () {
    function MapPickerComponent(modalCtrl, http, actionSheetCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MapPickerComponent.prototype.ngOnInit = function () { };
    MapPickerComponent.prototype.resetLocation = function () {
        this.selectedLocationImage = undefined;
    };
    MapPickerComponent.prototype.onPickLocation = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            header: 'Please choose', buttons: [
                {
                    text: 'Auto-Locate', icon: 'locate', handler: function () {
                        _this.locateUser();
                    }
                },
                {
                    text: 'Pick on map', icon: 'pin', handler: function () {
                        _this.openMap();
                    }
                },
                { text: 'Cancel', role: 'cancel', icon: 'close' }
            ]
        }).then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    MapPickerComponent.prototype.locateUser = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Capacitor"].isPluginAvailable('Geolocation')) {
            this.showErrorAlert();
            return;
        }
        this.isLoading = true;
        _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Geolocation.getCurrentPosition().then(function (geoPosition) {
            var coordinates = { lat: geoPosition.coords.latitude, lng: geoPosition.coords.longitude };
            _this.createPlace(coordinates.lat, coordinates.lng);
            _this.isLoading = false;
        }).catch(function (err) {
            _this.isLoading = false;
            _this.showErrorAlert();
        });
    };
    MapPickerComponent.prototype.showErrorAlert = function () {
        this.alertCtrl.create({
            header: 'Could not fetch location',
            message: 'Please use map to pick location',
            buttons: ['Okay']
        }).then(function (alertEl) { return alertEl.present(); });
    };
    MapPickerComponent.prototype.openMap = function () {
        var _this = this;
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData.data) {
                    return;
                }
                var coordinates = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                };
                _this.createPlace(coordinates.lat, coordinates.lng);
            });
            modalEl.present();
        });
    };
    MapPickerComponent.prototype.createPlace = function (lat, lng) {
        var _this = this;
        var pickedLocation = {
            lat: lat,
            lng: lng,
            address: null,
            staticMapImageUrl: null
        };
        this.isLoading = true;
        this.getAddress(lat, lng).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (address) {
            pickedLocation.address = address;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
        })).subscribe(function (staticMapImageUrl) {
            pickedLocation.staticMapImageUrl = staticMapImageUrl;
            _this.selectedLocationImage = staticMapImageUrl;
            _this.isLoading = false;
            _this.locationPick.emit(pickedLocation);
        });
    };
    MapPickerComponent.prototype.getAddress = function (lat, lng) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].googleMapsAPIKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    MapPickerComponent.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "\n    &size=600x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].googleMapsAPIKey;
    };
    MapPickerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapPickerComponent.prototype, "locationPick", void 0);
    MapPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-picker',
            template: __webpack_require__(/*! raw-loader!./map-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-products/map-picker/map-picker.component.html"),
            styles: [__webpack_require__(/*! ./map-picker.component.scss */ "./src/app/pages/add-products/map-picker/map-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MapPickerComponent);
    return MapPickerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-products-add-products-module-es5.js.map