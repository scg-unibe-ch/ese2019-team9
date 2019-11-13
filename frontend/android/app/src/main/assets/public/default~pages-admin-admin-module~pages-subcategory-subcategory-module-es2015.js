(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-admin-admin-module~pages-subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/profile-informations/profile-informations.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/profile-informations/profile-informations.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n\t<ion-card-header>\n\t\t\t<ion-avatar>\n\t\t\t\t\t<img [src]=\"user.image || 'https://api.adorable.io/avatars/128/'+ user._id\">\n\t\t\t\t</ion-avatar>\n\t\t<ion-card-title>{{ user.email }}</ion-card-title>\n\t</ion-card-header>\n\t<ion-card-content>\n\t\t<ion-grid #grid>\n\t\t\t<ion-row class=\"row\" *ngFor=\"let key of userData\">\n\t\t\t\t<ion-col>{{ getKeyString(key) }}</ion-col>\n\t\t\t\t<ion-col>{{ getValueString(key) }} </ion-col>\n\t\t\t\t<ion-col *ngIf=\"changeable\" size=\"1\">\n\t\t\t\t\t<ion-icon class=\"cursor-pointer\" name=\"create\" (click)=onClickEdit()></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col *ngIf=\"changeable\" class=\"hidden\">\n\t\t\t\t\t<ion-input [value]=\"user[key]\" (ionChange)=\"onChangedInput()\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col *ngIf=\"changeable\" class=\"hidden\" size=\"1\">\n\t\t\t\t\t\t<ion-icon class=\"cursor-pointer\" name=\"save\" (click)=onClickSave()></ion-icon>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"hidden\"size=\"0\">{{key}}</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t\t<ion-button #updateButton color=\"warning\" class=\"hidden ion-float-right\" (click)=\"onClickSave()\">Update</ion-button>\n\t\t\n\t</ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/rating/rating.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/rating/rating.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let rating of ' '.repeat(rating).split(''), let x = index\">\n  <ion-icon class=\"rating\" name=\"star\"></ion-icon>\n</span>\n<span *ngFor=\"let rating of ' '.repeat(5 - rating).split(''), let x = index\">\n  <ion-icon class=\"rating\" name=\"star-outline\"></ion-icon>\n</span>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");





let ProductService = class ProductService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.productsEndpoint = 'https://moln-api.herokuapp.com/product';
    }
    getAllProducts() {
        return this.httpClient.get(this.productsEndpoint);
    }
    getProductsById(id) {
        let products = [];
        return new Promise((resolve, reject) => {
            this.getAllProducts().subscribe(data => {
                // filter allProducts so only the verified products of the respective category are presented
                // @ts-ignore
                products = data.filter(prod => prod.category._id === id).filter(prod => prod.verified);
                resolve(products);
            }, error => {
                reject(error);
            });
        });
    }
    addNewProduct(name, category, price) {
        return this.httpClient.post(this.productsEndpoint + '/add', { name, category, price })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
    deleteProduct(productId) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.productsEndpoint + `/${productId}`, { headers: headers });
    }
    verifyProduct(productId) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.productsEndpoint + `/${productId}`, { verified: true }, { headers: headers });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ProductService);



/***/ }),

/***/ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/services/progressIndicatorService/progress-indicator.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ProgressIndicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorService", function() { return ProgressIndicatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ProgressIndicatorService = class ProgressIndicatorService {
    constructor(toastController, loadingController) {
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    presentToast(message, duration, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toastColor = (color) ? color : "primary";
            const toast = yield this.toastController.create({
                message: message,
                duration: duration,
                color: toastColor,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
        });
    }
    presentLoading(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: message,
                backdropDismiss: true
            });
            yield loading.present();
        });
    }
    dismissLoadingIndicator() {
        this.loadingController.dismiss();
    }
};
ProgressIndicatorService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ProgressIndicatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ProgressIndicatorService);



/***/ }),

/***/ "./src/app/core/services/userService/user.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/userService/user.service.ts ***!
  \***********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");




let UserService = class UserService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.productsEndpoint = 'https://moln-api.herokuapp.com/user';
    }
    getAllUsers() {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint, { headers: headers });
    }
    deleteUser(id) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.productsEndpoint + `/${id}`, { headers: headers });
    }
    updateUser(id, body) {
        body = JSON.parse(body);
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.productsEndpoint + `/${id}`, body, { headers: headers });
    }
    getSingleUser(id) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint + `/${id}`, { headers: headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UserService);



/***/ }),

/***/ "./src/app/shared/components/profile-informations/profile-informations.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/profile-informations/profile-informations.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  border-bottom: 1px solid var(--ion-color-medium-shade);\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\nion-input {\n  --padding-top:0;\n  --padding-bottom:0;\n  border: 1px solid black;\n}\n\n.warning {\n  border: 4px solid var(--ion-color-warning);\n}\n\n.success {\n  border: 4px solid var(--ion-color-success);\n}\n\n.error {\n  border: 4px solid var(--ion-color-danger);\n}\n\n:host ion-input {\n  --padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUtaW5mb3JtYXRpb25zL3Byb2ZpbGUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWluZm9ybWF0aW9ucy9wcm9maWxlLWluZm9ybWF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNEQUFBO0FDQ0Q7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtBQ0NKOztBREdJO0VBQ0ksZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUtaW5mb3JtYXRpb25zL3Byb2ZpbGUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgLS1wYWRkaW5nLXRvcDowO1xuICAgIC0tcGFkZGluZy1ib3R0b206MDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLndhcm5pbmcge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmVycm9yIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuOmhvc3Qge1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgfVxufSIsIi5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6MDtcbiAgLS1wYWRkaW5nLWJvdHRvbTowO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLndhcm5pbmcge1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5cbi5zdWNjZXNzIHtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uZXJyb3Ige1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuOmhvc3QgaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/profile-informations/profile-informations.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/profile-informations/profile-informations.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfileInformationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationsComponent", function() { return ProfileInformationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");




let ProfileInformationsComponent = class ProfileInformationsComponent {
    constructor(userService, progressIndicatorService) {
        this.userService = userService;
        this.progressIndicatorService = progressIndicatorService;
        this.changeable = false;
        this.hasChanged = false;
        this.KEYSTRINGS_COLUMN = 0;
        this.VALUES_COLUMN = 1;
        this.EDIT_ICON_COLUMN = 2;
        this.INPUT_COLUMN = 3;
        this.SAVE_ICON_COLUMN = 4;
        this.KEYS_COLUMN = 5;
        this.keysToName = new Map([
            ['_id', 'Id'],
            ['email', 'E-Mail Adresse'],
            ['verifiedEmail', 'E-Mail verified']
        ]);
        this.valuesToName = new Map([
            [true, 'Yes'],
            [false, 'No']
        ]);
        this.valuesToHide = ["password", "openDetail"];
        this.userData = [];
    }
    ngOnInit() {
        this.userData = Object.keys(this.user).filter(value => this.valuesToHide.indexOf(value) === -1);
        this.userData.sort();
    }
    getKeyString(key) {
        return (this.keysToName.has(key)) ? this.keysToName.get(key) : key.charAt(0) + key.slice(1);
    }
    getValueString(key) {
        const value = this.user[key.toString()];
        return (typeof value === "boolean") ? this.valuesToName.get(value) : value;
    }
    onClickEdit() {
        const allRows = this.grid.el.children;
        for (let i = 0; i < allRows.length; i++) {
            allRows[i].children[this.VALUES_COLUMN].classList.add('hidden');
            allRows[i].children[this.EDIT_ICON_COLUMN].classList.add('hidden');
            allRows[i].children[this.INPUT_COLUMN].classList.remove('hidden');
            allRows[i].children[this.SAVE_ICON_COLUMN].classList.remove('hidden');
        }
    }
    onChangedInput() {
        if (!this.hasChanged) {
            this.grid.el.classList.add('warning');
            this.updateButton.el.classList.remove('hidden');
        }
        this.hasChanged = true;
    }
    onClickSave() {
        const body = this.getAllChangedRows();
        this.progressIndicatorService.presentLoading("Updating...");
        this.userService.updateUser(this.user._id, body).subscribe((data) => {
            this.displaySuccessSignifiers();
            this.updateComponent();
        }, (err) => {
            this.displayFailureSignifiers();
            console.log(err);
        });
    }
    getAllChangedRows() {
        const allRows = this.grid.el.children;
        let body = `{"userId":"${this.user._id}"`;
        for (let i = 0; i < allRows.length; i++) {
            let columns = allRows[i].children;
            let key = columns[this.KEYS_COLUMN].innerText.trim();
            let oldValue = this.user[key];
            let newValue = columns[this.INPUT_COLUMN].firstElementChild.value.trim();
            if (oldValue !== newValue) {
                body += `,"${key}":"${newValue}"`;
            }
        }
        body += '}';
        return body;
    }
    displaySuccessSignifiers() {
        this.progressIndicatorService.dismissLoadingIndicator();
        this.progressIndicatorService.presentToast("User was updated", 2000);
        this.grid.el.classList.remove('warning');
        this.grid.el.classList.add('success');
        this.updateButton.el.classList.add('hidden');
        setTimeout(() => {
            this.grid.el.classList.remove('success');
        }, 1500);
    }
    displayFailureSignifiers() {
        this.progressIndicatorService.dismissLoadingIndicator();
        this.progressIndicatorService.presentToast("User could not be updated :(", 2000, "danger");
        this.grid.el.classList.remove('warning');
        this.grid.el.classList.add('error');
        setTimeout(() => {
            this.grid.el.classList.remove('error');
        }, 1500);
    }
    updateComponent() {
        this.retrieveNewUserInformation();
        const allRows = this.grid.el.children;
        for (let i = 0; i < allRows.length; i++) {
            allRows[i].children[this.VALUES_COLUMN].classList.remove('hidden');
            allRows[i].children[this.EDIT_ICON_COLUMN].classList.remove('hidden');
            allRows[i].children[this.INPUT_COLUMN].classList.add('hidden');
            allRows[i].children[this.SAVE_ICON_COLUMN].classList.add('hidden');
        }
    }
    retrieveNewUserInformation() {
        this.userService.getSingleUser(this.user._id).subscribe((data) => {
            this.user = data;
            this.userData = Object.keys(this.user).filter(value => this.valuesToHide.indexOf(value) === -1);
            this.userData.sort();
        }, (err) => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        console.log('test');
    }
};
ProfileInformationsComponent.ctorParameters = () => [
    { type: src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProfileInformationsComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateButton', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProfileInformationsComponent.prototype, "updateButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProfileInformationsComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ProfileInformationsComponent.prototype, "changeable", void 0);
ProfileInformationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-informations',
        template: __webpack_require__(/*! raw-loader!./profile-informations.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/profile-informations/profile-informations.component.html"),
        styles: [__webpack_require__(/*! ./profile-informations.component.scss */ "./src/app/shared/components/profile-informations/profile-informations.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"]])
], ProfileInformationsComponent);



/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rating {\n  font-size: 16px;\n  color: var(--ion-color-tertiary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn0iLCIucmF0aW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RatingComponent.prototype, "rating", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/rating/rating.component.html"),
        styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/shared/components/rating/rating.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/shared/components/rating/rating.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_profile_informations_profile_informations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile-informations/profile-informations.component */ "./src/app/shared/components/profile-informations/profile-informations.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"], _components_profile_informations_profile_informations_component__WEBPACK_IMPORTED_MODULE_5__["ProfileInformationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"], _components_profile_informations_profile_informations_component__WEBPACK_IMPORTED_MODULE_5__["ProfileInformationsComponent"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~pages-admin-admin-module~pages-subcategory-subcategory-module-es2015.js.map