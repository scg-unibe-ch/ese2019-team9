(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/add-category/add-category.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/add-category/add-category.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"grid\" *ngIf=\"currentCategories\">\n\t<ion-row>\n\t\t<ion-col size=\"12\" offset=\"0\" offset-md=\"2\" size-md=\"8\" offset-lg=\"3\" size-lg=\"6\" *ngFor=\"let category of currentCategories\">\n\t\t\t<ion-card class=\"ion-padding\">\n\t\t\t\t<ion-card-title>{{ category.name }}  <ion-icon name=\"create\" size=\"small\" (click)=\"editCategory(category)\"></ion-icon><ion-icon name=\"trash\" size=\"small\" (click)=\"onDeleteCategory(category)\"></ion-icon></ion-card-title>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ng-container *ngFor=\"let subcategory of category.subcategories\">\n\t\t\t\t\t\t<ion-item size=\"11\">{{subcategory.name}}<ion-icon slot=\"end\" name=\"create\" size=\"small\" (click)=\"editCategory(subcategory, category)\"></ion-icon><ion-icon name=\"trash\" slot=\"end\" size=\"small\" (click)=\"onDeleteCategory(subcategory)\"></ion-icon></ion-item>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ion-button (click)=\"createNewSubcategoryOn(category)\" fill=\"empty\" class=\"greenButton\">\n\t\t\t\t\t\t<ion-icon name=\"add\"></ion-icon> Subcategory\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>\n<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\" offset=\"0\" offset-md=\"2\" size-md=\"8\" offset-lg=\"3\" size-lg=\"6\">\n\t\t\t\t<form id=\"form\" [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmitForm()\">\n\t\t\t\t\t<ion-title class=\"ion-padding-top\">{{ (updateNotCreate) ? 'Update a' : 'Create a new'}} {{ (categoryForm.value.subcategoryToggle) ? 'Subcategory' : 'Category' }}</ion-title>\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<app-image-picker #imagePicker class=\"imagePicker\" (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n\t\t\t\t\t\t\t\t\t<ion-text *ngIf=\"updateNotCreate\">New Icon</ion-text>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"updateNotCreate\" [src]=\"selectedCategory.image\" class=\"image\">\n\t\t\t\t\t\t\t\t\t<ion-text *ngIf=\"updateNotCreate\">Previous Icon</ion-text>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-label>Add a Subcategory</ion-label>\n\t\t\t\t\t\t\t<ion-toggle id=\"subcategoryToggle\" [formGroup]=\"categoryForm\" formControlName=\"subcategoryToggle\">\n\t\t\t\t\t\t\t</ion-toggle>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-card *ngIf=\"categoryForm.value.subcategoryToggle\">\n\t\t\t\t\t\t<ion-select formControlName=\"parentSlug\" placeholder=\"Select the parent Category\" okText=\"Okay\" cancelText=\"Dismiss\">\n\t\t\t\t\t\t\t<ion-select-option [value]=\"category.slug\" *ngFor=\"let category of currentCategories\">\n\t\t\t\t\t\t\t\t<ion-label> {{ category.name }}</ion-label>\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-card (ionChange)=\"onCategoryNameChange($event)\">\n\t\t\t\t\t\t<app-input-form [inputForm]=\"categoryForm\" [givenName]=\"'name'\" [text]=\"'Category Name'\"\n\t\t\t\t\t\t\t\t\t\t[validationMessages]=\"validationMessages.name\" [type]=\"'text'\" [inputMode]=\"'text'\"></app-input-form>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t<app-input-form [inputForm]=\"categoryForm\" [givenName]=\"'slug'\" [text]=\"'Category Slug'\"\n\t\t\t\t\t\t\t\t\t\t[validationMessages]=\"validationMessages.slug\" [type]=\"'text'\" [inputMode]=\"'text'\" [async]=\"slugAsyncTexts\"></app-input-form>\n\t\t\t\t\t\t<ion-button fill=\"outline\" *ngIf=\"categoryForm.get('slug').hasError('unique') && !updateNotCreate\" (click)=\"changeMode('update')\">Update Category instead?</ion-button>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-button fill=\"outline\" class=\"blueButton ion-margin-start\" type=\"submit\">{{(updateNotCreate) ? 'Update' : 'Create'}} Category</ion-button>\n\t\t\t\t\t<ion-button fill=\"outline\" class=\"blueButton\" (click)=\"changeMode('create')\" *ngIf=\"updateNotCreate\">Create new Category</ion-button>\n\t\t\t\t</form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n</ion-grid>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <app-header></app-header><ion-segment (ionChange)=\"onTabSwitch($event)\">\n        <ion-segment-button value=\"0\" checked>\n            <ion-label>Offers</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\">\n            <ion-label>Users</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\">\n            <ion-label>Categories</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-manage-offers *ngIf=\"selectedTab === 0\"></app-manage-offers>\n    <app-manage-users *ngIf=\"selectedTab === 1\"></app-manage-users>\n    <app-add-category *ngIf=\"selectedTab === 2\"></app-add-category>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/manage-offers/manage-offers.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/manage-offers/manage-offers.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-grid #grid class=\"ion-padding-start\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Show verified</ion-label>\n              <ion-checkbox\n                (ionChange)=\"onToggleShowVerified($event)\"\n                checked\n                slot=\"start\"\n              ></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Show in Revise</ion-label>\n              <ion-checkbox\n                (ionChange)=\"onToggleShowRevise($event)\"\n                checked\n                slot=\"start\"\n              ></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" offset-md=\"4\" offset-lg=\"6\">\n        <ion-select #sortSelection placeholder=\"Sort by\" okText=\"Sort\" cancelText=\"Cancel\" (ionChange)=\"onSortChange($event)\">\n            <ion-select-option value=\"+date\">Date ascending</ion-select-option>\n            <ion-select-option value=\"-date\">Date descending</ion-select-option>\n            <ion-select-option value=\"+name\">Product Name ascending</ion-select-option>\n            <ion-select-option value=\"-name\">Product Name descending</ion-select-option>\n            <ion-select-option value=\"+seller.name\">Seller Name ascending</ion-select-option>\n            <ion-select-option value=\"-seller.name\">Seller descending</ion-select-option>\n            <ion-select-option value=\"-status\">Status ascending</ion-select-option>\n            <ion-select-option value=\"+status\">Status descending</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"list-header\">\n      <ion-col size=\"9\" size-sm=\"4\" class=\"bold\">Name<ng-container *ngIf=\"sorting.name != 0\"></ng-container></ion-col>\n      <ion-col class=\"hide-sm\" size=\"9\" size-sm=\"4\" class=\"bold\">Seller</ion-col>\n      <ion-col size=\"3\" size-sm=\"4\" class=\"bold\">Status</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let offer of listOfOffers; let first = first\">\n      <ion-item-sliding>\n        <ion-item\n          class=\"ion-no-padding cursor-pointer\"\n          (click)=\"offer.openDetail = !offer.openDetail\"\n        >\n          <ion-col size=\"9\" size-sm=\"4\">\n            {{ offer.name }}\n          </ion-col>\n          <ion-col class=\"hide-sm\" size=\"4\">\n            {{ offer.seller.name }}\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon\n              size=\"large\"\n              [class]=\"\n                offer.verified\n                  ? 'verified'\n                  : offer.toRevise\n                  ? 'revise'\n                  : 'nonverified'\n              \"\n              [name]=\"\n                offer.verified\n                  ? 'checkmark-circle'\n                  : offer.toRevise\n                  ? 'alert'\n                  : 'close-circle'\n              \"\n              [title]=\"\n                offer.verified\n                  ? 'Verified'\n                  : offer.toRevise\n                  ? 'Revising'\n                  : 'Not verified'\n              \"\n            >\n            </ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" offset-sm=\"1\">\n            <ion-icon\n              [name]=\"offer.openDetail ? 'ios-arrow-up' : 'ios-arrow-down'\"\n            ></ion-icon>\n          </ion-col>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option\n            color=\"warning\"\n            (click)=\"reviseOffer(offer._id, offer.name, offer.seller._id)\"\n          >\n            Revise\n          </ion-item-option>\n          <ion-item-option\n            color=\"danger\"\n            (click)=\"deleteOffer(offer._id, offer.name, offer.seller._id)\"\n          >\n            Delete\n          </ion-item-option>\n        </ion-item-options>\n        <ion-item-options side=\"start\">\n          <ion-item-option\n            color=\"success\"\n            (click)=\"verifyOffer(offer._id, offer.name, offer.seller._id)\"\n            >Accept</ion-item-option\n          >\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-col *ngIf=\"offer.openDetail\" size=\"12\" size-sm=\"6\">\n        <ion-card scrollX=\"true\">\n          <ion-card-title class=\"ion-padding-horizontal\">\n            {{ offer.name }}\n          </ion-card-title>\n          <ion-card-content>\n            <ion-list>\n              <ion-item title=\"Price\">\n                <ion-label><ion-icon name=\"pricetags\"></ion-icon></ion-label>\n                <div class=\"scroll\">{{ offer.price }}</div>\n              </ion-item>\n              <ion-item title=\"Product Location\">\n                <ion-label><ion-icon name=\"pin\"></ion-icon></ion-label\n                >{{ offer.location }}\n              </ion-item>\n              <ion-item title=\"Category\">\n                <ion-label><ion-icon name=\"folder\"></ion-icon></ion-label\n                >{{ offer.category.name }}\n              </ion-item>\n              <ion-item title=\"Seller Name\">\n                <ion-label><ion-icon name=\"person\"></ion-icon></ion-label\n                >{{ offer.seller.name }}\n              </ion-item>\n              <ion-item title=\"Seller Email\">\n                <ion-label><ion-icon name=\"at\"></ion-icon></ion-label>\n                <div class=\"scroll\">{{ offer.seller.email }}</div>\n              </ion-item>\n              <ion-item title=\"Created at\">\n                    <ion-label><ion-icon name=\"calendar\"></ion-icon></ion-label>\n                    <div class=\"scroll\">{{ getDateString(offer.date) }}</div>\n                  </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngIf=\"offer.openDetail\" size=\"12\" size-sm=\"6\">\n        <ion-card class=\"ion-padding\">\n          <div class=\"scroll\">{{ offer.description }}</div>\n        </ion-card>\n      </ion-col>\n      <ion-col\n        *ngIf=\"offer.openDetail\"\n        offset=\"0\"\n        size=\"12\"\n        offset-sm=\"6\"\n        size-sm=\"12\"\n      >\n        <ion-button\n          color=\"danger\"\n          (click)=\"deleteOffer(offer._id, offer.name, offer.seller._id)\"\n          >Delete</ion-button\n        >\n        <ion-button\n          color=\"warning\"\n          (click)=\"reviseOffer(offer._id, offer.name, offer.seller._id)\"\n          >Revise</ion-button\n        >\n        <ion-button\n          color=\"success\"\n          (click)=\"verifyOffer(offer._id, offer.name, offer.seller._id)\"\n          >Accept</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/manage-users/manage-users.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/manage-users/manage-users.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n    <ion-grid class=\"ion-padding-start\">\n        <ion-row *ngFor=\"let user of userList\">\n            <ion-col size=\"12\" offset=\"0\" offset-md=\"2\" size-md=\"8\" offset-lg=\"3\" size-lg=\"6\">\n            <ion-item-sliding>\n                <ion-item class=\"ion-no-padding cursor-pointer {{ user.admin ? 'admin-user' : '' }}\"\n                          (click)=\"user.openDetail = !user.openDetail\">\n                    <ion-col size-md=\"2\">\n                        <img class=\"adminBadge\" *ngIf=\"user.admin\" src=\"../../../../assets/images/admin.png\">\n                        <ion-avatar class=\"hide-sm\">\n                            <img *ngIf=\"!isUndefined(user.image)\" src=\"{{ user.image }}\">\n                        </ion-avatar>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        {{ user.email }}\n                    </ion-col>\n                    <ion-col size=\"1\">\n                        <ion-icon [name]=\"\n\t\t\t\t\t\t\tuser.openDetail\n\t\t\t\t\t\t\t  ? 'ios-arrow-up'\n\t\t\t\t\t\t\t  : 'ios-arrow-down'\n\t\t\t\t\t\t  \"></ion-icon>\n                    </ion-col>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"deleteUser(user._id)\">\n                        Delete\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n            <ion-col *ngIf=\"user.openDetail\">\n                <app-profile-informations\n                        [profileItem]=\"user\" [changeable]=\"!user.admin\"\n                        [valuesToHide]=\"valuesToHide\" [type]=\"'user'\"\n                        (deleteEvent) = \"deleteUser(user._id)\"\n                        (updateEvent)=\"getAllUsers()\"></app-profile-informations>\n            </ion-col>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(name, slug, image, id, parentId, parentSlug) {
        this.name = name;
        this.slug = slug;
        this.image = image;
        if (id)
            this.id = id;
        if (parentId)
            this.parentId = parentId;
        if (parentSlug)
            this._parentSlug = parentSlug;
    }
    Object.defineProperty(Category.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "parentId", {
        get: function () {
            return this._parentId;
        },
        set: function (value) {
            this._parentId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "slug", {
        get: function () {
            return this._slug;
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._parentSlug = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "parentSlug", {
        get: function () {
            return this._parentSlug;
        },
        set: function (value) {
            this._parentSlug = value;
        },
        enumerable: true,
        configurable: true
    });
    Category.prototype.toJSON = function () {
        return JSON.parse("{\"name\":\"" + this.name + "\", \"slug\":\"" + this.slug + "\" " + ((this.id) ? ",\"id\":\"" + this.id + "\"" : "") + " " + ((this.parentSlug) ? ",\"parentSlug\":\"" + this.parentSlug + "\"" : "") + "}");
    };
    Category.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Category;
}());



/***/ }),

/***/ "./src/app/pages/admin/add-category/add-category.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/add-category/add-category.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  border-bottom: 1px solid var(--ion-color-dark);\n}\n\n:host ion-button {\n  max-width: 100%;\n}\n\n.image {\n  border: 1px solid var(--ion-color-primary);\n}\n\n@media (max-width: 768px) {\n  .image {\n    width: 25vw;\n    height: 25vw;\n  }\n}\n\n@media (min-width: 768px) {\n  .image {\n    width: 20vw;\n    height: 20vw;\n  }\n}\n\n.imagePicker {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n@media (max-width: 768px) {\n  .imagePicker {\n    width: 25vw;\n    height: 25vw;\n  }\n}\n\n@media (min-width: 768px) {\n  .imagePicker {\n    width: 20vw;\n    height: 20vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkbWluL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURBSTtFQUZKO0lBR00sV0FBQTtJQUNBLFlBQUE7RUNHSjtBQUNGOztBREZJO0VBTko7SUFPTSxXQUFBO0lBQ0EsWUFBQTtFQ0tKO0FBQ0Y7O0FERkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNLSjs7QURKSTtFQUxKO0lBTU0sV0FBQTtJQUNBLFlBQUE7RUNPSjtBQUNGOztBRE5JO0VBVEo7SUFVTSxXQUFBO0lBQ0EsWUFBQTtFQ1NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbjpob3N0IGlvbi1idXR0b24ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMjV2dztcbiAgICAgIGhlaWdodDogMjV2dztcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMjB2dztcbiAgICAgIGhlaWdodDogMjB2dztcbiAgICB9XG59XG5cbi5pbWFnZVBpY2tlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICBoZWlnaHQ6IDIwdnc7XG4gICAgfVxufVxuIiwiLmdyaWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG46aG9zdCBpb24tYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDI1dnc7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbiAgfVxufVxuXG4uaW1hZ2VQaWNrZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltYWdlUGlja2VyIHtcbiAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDI1dnc7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW1hZ2VQaWNrZXIge1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/add-category/add-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/add-category/add-category.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uniqueValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uniqueValidator */ "./src/app/pages/admin/add-category/uniqueValidator.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/image-picker/image-picker.component */ "./src/app/shared/components/image-picker/image-picker.component.ts");









var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(categoryService, formBuilder, progressIndicatorService, alertController) {
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.progressIndicatorService = progressIndicatorService;
        this.alertController = alertController;
        this.currentCategories = [];
        this.updateNotCreate = false;
        this.slugAsyncTexts = { pendingText: 'Checking if slug is unique', validText: 'Slug is available' };
        this.validationMessages = {
            name: [
                { type: 'required', message: 'Name is required' },
                { type: 'text', message: 'Not a valid Name' },
                { type: 'minlength', message: 'Name must be longer than 5 characters' },
                { type: 'maxlength', message: 'Name must be less than 30 characters' }
            ],
            slug: [
                { type: 'required', message: 'Slug is required' },
                { type: 'text', message: 'Not a valid Slug' },
                { type: 'minlength', message: 'Slug must be longer than 5 characters' },
                { type: 'maxlength', message: 'Slug must be less than 30 characters' },
                { type: 'pattern', message: 'Slug can only contain lowercase, alphabetic characters' },
                { type: 'unique', message: 'A (Sub)Category with this slug already exists' }
            ]
        };
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.currentCategories = data;
            if (!_this.updateNotCreate)
                _this.setUniqueValidator();
        }, function (err) {
            console.log(err);
        });
        this.categoryForm = this.formBuilder.group({
            subcategoryToggle: [],
            parentSlug: [],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
            slug: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-z]+$/)]]
        });
    };
    AddCategoryComponent.prototype.editCategory = function (category, parentCategory) {
        this.changeMode('update');
        var hasParentCategory = Boolean(parentCategory);
        this.categoryForm.controls['subcategoryToggle'].setValue(hasParentCategory);
        if (hasParentCategory)
            this.categoryForm.controls['parentSlug'].setValue(parentCategory.slug);
        this.selectedCategory = category;
        this.categoryForm.controls['name'].setValue(category.name);
        this.categoryForm.controls['slug'].setValue(category.slug);
        this.categoryForm.markAsUntouched();
        this.categoryForm.markAsPristine();
        document.querySelector('#form').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    AddCategoryComponent.prototype.createNewSubcategoryOn = function (category) {
        this.changeMode('create');
        this.categoryForm.controls['subcategoryToggle'].setValue(true);
        this.categoryForm.controls['parentSlug'].setValue(category.slug);
        document.querySelector('#form').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    AddCategoryComponent.prototype.onCategoryNameChange = function (event) {
        var name = event.target.value;
        name = name.toLowerCase();
        name = name.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/[^a-z]/g, '');
        this.categoryForm.controls['slug'].setValue(name);
        this.categoryForm.controls['slug'].updateValueAndValidity();
        this.categoryForm.controls['slug'].markAsDirty();
    };
    AddCategoryComponent.prototype.onSubmitForm = function () {
        var _this = this;
        var promise;
        this.progressIndicatorService.presentLoading((this.updateNotCreate ? 'Updating ' : 'Creating ') + " the category");
        if (this.updateNotCreate) {
            promise = this.updateCategory(this.categoryForm);
        }
        else {
            promise = this.createCategory(this.categoryForm.value);
        }
        promise.then(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Category updated');
            _this.categoryForm.reset();
            //this.imagePicker.resetImage();
        }, function (reason) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Category not updated', 'danger');
            console.log(reason);
        }).then(function () {
            _this.categoryService.getCategories().subscribe(function (data) {
                _this.currentCategories = data;
                if (!_this.updateNotCreate)
                    _this.setUniqueValidator();
            }, function (err) {
                console.log(err);
            });
        });
    };
    AddCategoryComponent.prototype.setUniqueValidator = function () {
        this.categoryForm.controls['slug'].setAsyncValidators(Object(_uniqueValidator__WEBPACK_IMPORTED_MODULE_5__["UniqueValidator"])(this.currentCategories, 'slug'));
        this.categoryForm.controls['slug'].updateValueAndValidity();
    };
    AddCategoryComponent.prototype.onImagePicked = function (imageData) {
        if (typeof imageData === 'string') {
            try {
                this.imageFile = this.base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
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
    AddCategoryComponent.prototype.base64toBlob = function (base64Data, contentType) {
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
    };
    AddCategoryComponent.prototype.changeMode = function (mode) {
        this.categoryForm.reset();
        this.updateNotCreate = mode === 'update';
        if (this.updateNotCreate) {
            this.categoryForm.controls['slug'].clearAsyncValidators();
            this.slugAsyncTexts = undefined;
        }
        else {
            this.setUniqueValidator();
            this.slugAsyncTexts = { pendingText: 'Checking if slug is unique', validText: 'Slug is available' };
        }
    };
    AddCategoryComponent.prototype.updateCategory = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = "{";
            var controlKeys = Object.keys(form.controls);
            var firstLine = true;
            controlKeys.forEach(function (key) {
                if (form.controls[key].dirty) {
                    body += ((firstLine) ? '' : ',') + "\"" + key + "\":\"" + form.controls[key].value + "\"";
                    firstLine = false;
                }
            });
            if (form.controls['subcategoryToggle'].dirty && !form.controls['subcategoryToggle'].value) {
                body += ((firstLine) ? '' : ',') + "\"parentId\":null";
            }
            body += "}";
            if (firstLine) {
                _this.progressIndicatorService.presentToast('Nothing has been changed', "warning");
                return;
            }
            ;
            _this.categoryService.updateCategory(_this.selectedCategory._id, body, _this.imageFile).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AddCategoryComponent.prototype.createCategory = function (values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.imageFile)
                reject('Specify an image');
            var category = new src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"](values.name, values.slug, '');
            if (values.subcategoryToggle) {
                category.parentSlug = values.parentSlug;
            }
            _this.categoryService.addCategory(category, _this.imageFile).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AddCategoryComponent.prototype.onDeleteCategory = function (category) {
        var _this = this;
        var promise = this.presentAlertConfirm(category);
        promise.then(function (shouldDelete) {
            if (!shouldDelete) {
                return;
            }
            _this.progressIndicatorService.presentLoading('Deleting Category');
            _this.categoryService.deleteCategory(category._id).subscribe(function (data) {
                _this.progressIndicatorService.dismissLoadingIndicator();
                _this.progressIndicatorService.presentToast('Sucessfully deleted Category', 'success');
                _this.categoryService.getCategories().subscribe(function (data) {
                    _this.currentCategories = data;
                    if (!_this.updateNotCreate)
                        _this.setUniqueValidator();
                }, function (err) {
                    console.log(err);
                });
            }, function (error) {
                _this.progressIndicatorService.dismissLoadingIndicator();
                _this.progressIndicatorService.presentToast('Could not delete Category', 'danger');
                console.log(error);
            });
        });
    };
    AddCategoryComponent.prototype.presentAlertConfirm = function (category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var alert;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertController.create({
                                        header: 'Confirm!',
                                        message: "Are you sure you want to delete the category <strong>" + category.name + "</strong>",
                                        buttons: [
                                            {
                                                text: 'Cancel',
                                                role: 'cancel',
                                                cssClass: 'cancel-button',
                                                handler: function () {
                                                    resolve(false);
                                                }
                                            }, {
                                                text: 'Delete',
                                                cssClass: 'delete-button',
                                                handler: function () {
                                                    resolve(true);
                                                }
                                            }
                                        ]
                                    })];
                                case 1:
                                    alert = _a.sent();
                                    alert.onWillDismiss().then(function () {
                                        resolve(false);
                                    });
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    AddCategoryComponent.ctorParameters = function () { return [
        { type: src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__["ImagePickerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_8__["ImagePickerComponent"])
    ], AddCategoryComponent.prototype, "imagePicker", void 0);
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/pages/admin/add-category/add-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/add-category/uniqueValidator.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/add-category/uniqueValidator.ts ***!
  \*************************************************************/
/*! exports provided: UniqueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueValidator", function() { return UniqueValidator; });
var UniqueValidator = function (objArr, fieldname) {
    return function (control) {
        return new Promise(function (resolve) {
            var workingArray = objArr.slice();
            while (workingArray.length > 0) {
                if (workingArray[0][fieldname] === control.value) {
                    resolve({ unique: true });
                }
                if (workingArray[0].subcategories) {
                    for (var i = 0; i < workingArray[0].subcategories.length; i++) {
                        workingArray.push(workingArray[0].subcategories[i]);
                    }
                }
                workingArray.splice(0, 1);
            }
            resolve(null);
        });
    };
};


/***/ }),

/***/ "./src/app/pages/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.page */ "./src/app/pages/admin/admin.page.ts");
/* harmony import */ var _manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-offers/manage-offers.component */ "./src/app/pages/admin/manage-offers/manage-offers.component.ts");
/* harmony import */ var _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-users/manage-users.component */ "./src/app/pages/admin/manage-users/manage-users.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/pages/admin/add-category/add-category.component.ts");
/* harmony import */ var src_app_shared_input_form_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/input-form.module */ "./src/app/shared/input-form.module.ts");














var routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"]
    }
];
var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _core_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                src_app_shared_input_form_module__WEBPACK_IMPORTED_MODULE_12__["InputFormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"], _manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_8__["ManageOffersComponent"], _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_9__["ManageUsersComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__["AddCategoryComponent"]]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/admin.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/admin/admin.page.ts ***!
  \*******************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-offers/manage-offers.component */ "./src/app/pages/admin/manage-offers/manage-offers.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




var AdminPage = /** @class */ (function () {
    function AdminPage() {
        this.selectedTab = -1;
    }
    AdminPage.prototype.ngOnInit = function () { };
    AdminPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.selectedTab = 0;
        this.deleteOffersComponentQueryList.changes.subscribe(function (components) {
            _this.deleteOffersComponent = components.first;
            _this.updateProducts();
        });
    };
    AdminPage.prototype.onTabSwitch = function (evt) {
        var id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
        if (id === 0) {
            this.updateProducts();
        }
        else if (id === 1) {
            this.selectTabManageUsers();
        }
    };
    AdminPage.prototype.updateProducts = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.deleteOffersComponent))
            return;
        this.deleteOffersComponent.updateProducts();
    };
    AdminPage.prototype.selectTabManageUsers = function () {
        // (Re-)load all Users from Backend
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_2__["ManageOffersComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AdminPage.prototype, "deleteOffersComponentQueryList", void 0);
    AdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin.page.html"),
            styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/pages/admin/admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminPage);
    return AdminPage;
}());



/***/ }),

/***/ "./src/app/pages/admin/manage-offers/manage-offers.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/manage-offers/manage-offers.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verified {\n  color: var(--ion-color-success);\n}\n\n.nonverified {\n  color: var(--ion-color-danger);\n}\n\n.revise {\n  color: var(--ion-color-warning);\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-wrap: normal;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n@media (max-width: 576px) {\n  .hide-sm {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkbWluL21hbmFnZS1vZmZlcnMvbWFuYWdlLW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vbWFuYWdlLW9mZmVycy9tYW5hZ2Utb2ZmZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsK0JBQUE7QUNDRDs7QURFQTtFQUNDLDhCQUFBO0FDQ0Q7O0FERUE7RUFDQywrQkFBQTtBQ0NEOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0M7SUFDQyx3QkFBQTtFQ0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9tYW5hZ2Utb2ZmZXJzL21hbmFnZS1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpZWQge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4ubm9udmVyaWZpZWQge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5yZXZpc2Uge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHQuaGlkZS1zbSB7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG59XG4iLCIudmVyaWZpZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4ubm9udmVyaWZpZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5yZXZpc2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY3JvbGwge1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhpZGUtc20ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/manage-offers/manage-offers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/manage-offers/manage-offers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOffersComponent", function() { return ManageOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _core_services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/notificationService/notification.service */ "./src/app/core/services/notificationService/notification.service.ts");
/* harmony import */ var src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/filterAndSearchService/filter-and-search.service */ "./src/app/core/services/filterAndSearchService/filter-and-search.service.ts");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__);








var ManageOffersComponent = /** @class */ (function () {
    function ManageOffersComponent(productService, progressIndicatorService, notificationService, filterService) {
        this.productService = productService;
        this.progressIndicatorService = progressIndicatorService;
        this.notificationService = notificationService;
        this.filterService = filterService;
        this.sorting = { name: 0, seller: 0, status: 0 };
        this.showVerified = true;
        this.filterOptions = { showVerified: true, showRevising: true };
    }
    ManageOffersComponent.prototype.ngOnInit = function () {
        this.listOfAllOffers = this.getAllProducts();
    };
    ManageOffersComponent.prototype.getAllProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.productService.getAllProducts().subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.progressIndicatorService.presentToast('Products could not be loaded', 'danger');
                reject(err);
            });
        });
    };
    ManageOffersComponent.prototype.deleteOffer = function (productId, productName, sellerId) {
        var _this = this;
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.deleteProduct(productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Product deleted');
            _this.notifySeller(productId, productName, sellerId, 'delete');
            _this.updateProducts();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Product could not be deleted', 'danger');
            console.log(err);
        });
    };
    ManageOffersComponent.prototype.verifyOffer = function (productId, productName, sellerId) {
        var _this = this;
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.verifyProduct(productId).subscribe(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Product verified');
            _this.updateProducts();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Product could not be verified', 'danger');
            console.log(err);
        });
    };
    ManageOffersComponent.prototype.reviseOffer = function (productId, productName, sellerId) {
        var _this = this;
        this.progressIndicatorService.presentLoading('Loading...');
        this.productService.reviseProduct(productId).subscribe(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Revision initialized');
            _this.updateProducts();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('Revision could not be initialized', 'danger');
            console.log(err);
        });
    };
    ManageOffersComponent.prototype.updateProducts = function () {
        var _this = this;
        this.progressIndicatorService.presentLoading('Updating Products...');
        this.getAllProducts().then(function (data) {
            _this.listOfAllOffers = data;
            _this.filterProducts();
            _this.progressIndicatorService.dismissLoadingIndicator();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            console.log(err);
        });
    };
    ManageOffersComponent.prototype.onToggleShowVerified = function (event) {
        this.filterOptions.showVerified = event.target.checked;
        this.filterProducts();
    };
    ManageOffersComponent.prototype.onToggleShowRevise = function (event) {
        this.filterOptions.showRevising = event.target.checked;
        this.filterProducts();
    };
    ManageOffersComponent.prototype.filterProducts = function () {
        var productsToShow = this.listOfAllOffers;
        if (this.filterOptions.showRevising === false) {
            productsToShow = this.filterService.filter(productsToShow, '=;toRevise;0');
        }
        if (this.filterOptions.showVerified === false) {
            productsToShow = this.filterService.filter(productsToShow, '=;verified;0');
        }
        this.listOfOffers = productsToShow;
    };
    ManageOffersComponent.prototype.notifySeller = function (productId, productName, sellerId, notificationType) {
        var _this = this;
        var link = '/home';
        var message = '';
        if (notificationType === 'delete') {
            message = "Your product " + productName + " has been deleted";
            link = '/my-products';
        }
        // remove this once backend removed text or message
        var text = message;
        // create the body for the backend request
        var body = "{\"text\":\"" + text + "\", \"message\":\"" + message + "\", \"userId\":\"" + sellerId + "\", \"link\":\"" + link + "\"}";
        setTimeout(function () {
            _this.notificationService.notifySingleUser(sellerId, body).subscribe(function (data) {
            }, function (err) {
                _this.progressIndicatorService.presentToast('Error while trying to notify seller', 'danger');
                console.log(err);
            });
        }, 3750);
    };
    ManageOffersComponent.prototype.onSortChange = function (evt) {
        var fieldNameMap = new Map([
            ['name', 'name'],
            ['seller.name', 'seller'],
            ['status', 'status']
        ]);
        this.sorting = { name: 0, seller: 0, status: 0 };
        var sortString = evt.target.value;
        var key = fieldNameMap.get(sortString.substring(1));
        if (Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(key)) {
            this.sorting[key] = sortString.charAt(0);
        }
        if (sortString.endsWith('status')) {
            var sortDirection = this.sorting.status;
            this.filterService.sort(this.listOfOffers, sortDirection + "verified", sortDirection + "toRevise", '-date');
        }
        else {
            this.filterService.sort(this.listOfOffers, evt.target.value, '-date');
        }
    };
    ManageOffersComponent.prototype.getDateString = function (stringRepresentation) {
        return new Date(stringRepresentation).toUTCString();
    };
    ManageOffersComponent.ctorParameters = function () { return [
        { type: src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] },
        { type: _core_services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_6__["FilterAndSearchService"] }
    ]; };
    ManageOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-offers',
            template: __webpack_require__(/*! raw-loader!./manage-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/manage-offers/manage-offers.component.html"),
            styles: [__webpack_require__(/*! ./manage-offers.component.scss */ "./src/app/pages/admin/manage-offers/manage-offers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"],
            _core_services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_6__["FilterAndSearchService"]])
    ], ManageOffersComponent);
    return ManageOffersComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/manage-users/manage-users.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/manage-users/manage-users.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-user {\n  --background: var(--ion-color-light);\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n@media (max-width: 576px) {\n  .hide-sm {\n    display: none !important;\n  }\n}\n\n.adminBadge {\n  weight: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2FkbWluL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0M7SUFDQyx3QkFBQTtFQ0NBO0FBQ0Y7O0FERUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi11c2VyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcblx0LmhpZGUtc20ge1xuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblx0fVxufVxuXG4uYWRtaW5CYWRnZSB7XG5cdHdlaWdodDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuIiwiLmFkbWluLXVzZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oaWRlLXNtIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hZG1pbkJhZGdlIHtcbiAgd2VpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/manage-users/manage-users.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/manage-users/manage-users.component.ts ***!
  \********************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/userService/user.service */ "./src/app/core/services/userService/user.service.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(userService, progressIndicatorService) {
        this.userService = userService;
        this.progressIndicatorService = progressIndicatorService;
        this.userList = [];
        this.valuesToHide = ['password', 'openDetail'];
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    ManageUsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.progressIndicatorService.presentLoading('Loading...');
        this.userService.getAllUsers().subscribe(function (data) {
            data.sort(function (a, b) {
                return b.admin - a.admin;
            });
            _this.userList = data;
            _this.progressIndicatorService.dismissLoadingIndicator();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast('User could not be updated', 'danger');
            console.log(err);
        });
    };
    ManageUsersComponent.prototype.isUndefined = function (obj) {
        return Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(obj);
    };
    ManageUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.progressIndicatorService.presentLoading("Deleting User!");
        this.userService.deleteUser(id).subscribe(function (data) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast("Deleted User");
            _this.getAllUsers();
        }, function (err) {
            _this.progressIndicatorService.dismissLoadingIndicator();
            _this.progressIndicatorService.presentToast("Deleting failed", 'danger');
            console.log(err);
        });
    };
    ManageUsersComponent.ctorParameters = function () { return [
        { type: src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"] }
    ]; };
    ManageUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__(/*! raw-loader!./manage-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.scss */ "./src/app/pages/admin/manage-users/manage-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_userService_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-module-es5.js.map