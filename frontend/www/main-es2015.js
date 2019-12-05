(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/add-products/add-products.module": [
		"./src/app/pages/add-products/add-products.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"pages-add-products-add-products-module"
	],
	"./pages/admin/admin.module": [
		"./src/app/pages/admin/admin.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"pages-admin-admin-module"
	],
	"./pages/my-orders/my-orders.module": [
		"./src/app/pages/my-orders/my-orders.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-my-orders-my-orders-module"
	],
	"./pages/my-products/my-products.module": [
		"./src/app/pages/my-products/my-products.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-my-products-my-products-module"
	],
	"./pages/order-details/order-details.module": [
		"./src/app/pages/order-details/order-details.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-order-details-order-details-module"
	],
	"./pages/payment/payment.module": [
		"./src/app/pages/payment/payment.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-payment-payment-module"
	],
	"./pages/product-details/product-details.module": [
		"./src/app/pages/product-details/product-details.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-product-details-product-details-module"
	],
	"./pages/profile/profile.module": [
		"./src/app/pages/profile/profile.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"pages-profile-profile-module"
	],
	"./pages/registered/registered.module": [
		"./src/app/pages/registered/registered.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"pages-registered-registered-module"
	],
	"./pages/reset/reset.module": [
		"./src/app/pages/reset/reset.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"pages-reset-reset-module"
	],
	"./pages/subcategory/subcategory.module": [
		"./src/app/pages/subcategory/subcategory.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"default~pages-home-home-module~pages-subcategory-subcategory-module",
		"common",
		"pages-subcategory-subcategory-module"
	],
	"./pages/user/user.module": [
		"./src/app/pages/user/user.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-my-orders-my-orders-mo~cbac2fd6",
		"common",
		"pages-user-user-module"
	],
	"./pages/verify/verify.module": [
		"./src/app/pages/verify/verify.module.ts",
		"default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb",
		"pages-verify-verify-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-camera-modal-instance.entry.js": [
		"./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js",
		78
	],
	"./pwa-camera-modal.entry.js": [
		"./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js",
		79
	],
	"./pwa-camera.entry.js": [
		"./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js",
		80
	],
	"./pwa-toast.entry.js": [
		"./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js",
		81
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-menu side=\"start\" #menu menuId=\"m1\">\n        <ion-header>\n            <ion-toolbar color=\"primary\">\n                <ion-title>\n                    Menu\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list>\n                <span *ngFor=\"let category of categories\">\n                    <ion-item (click)=\"showSubMenu(category)\">\n                        <ion-label> {{ category.name }}</ion-label>\n                        <ion-icon *ngIf=\"!category.showMenu\" name=\"arrow-dropdown\"></ion-icon>\n                        <ion-icon *ngIf=\"category.showMenu\" name=\"arrow-dropleft\"></ion-icon>\n                    </ion-item>\n                    <div *ngIf=\"category.showMenu\">\n                        <ion-list class=\"subcategoryList\" *ngFor=\"let subcategory of currentMenuSubcategories\">\n                            <ion-item class=\"subcategoryListItem\" (click)=\"subMenuItemClicked(category)\"\n                              [routerLink]=\"['/subcategory/', subcategory.slug]\" lines=\"none\">\n                                <ion-label> {{ subcategory.name }}</ion-label>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                </span>\n            </ion-list>\n            <ion-toolbar class=\"burgerMenuToolbar\">\n                <ion-item class=\"burgerMenuAdmin\" *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" (click)=\"dismissMenu()\"\n                          routerLink=\"/admin\" [routerDirection]=\"'root'\">\n                    <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\n                    <ion-label>Admin</ion-label>\n                </ion-item>\n                <ion-item color=\"success\" *ngIf=\"authService.isLoggedIn()\" (click)=\"dismissMenu()\" routerLink=\"/add-products\"\n                          [routerDirection]=\"'root'\">\n                    <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n                    <ion-label>Add product</ion-label>\n                </ion-item>\n\n            </ion-toolbar>\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/notifications/notifications.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/header-buttons/notifications/notifications.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid (mouseleave)=\"dismissPopover()\">\n    <ion-row>\n        <ion-col style=\"text-align:center\" class=\"message\">\n                <b>Notifications</b>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row *ngFor=\"let notification of notifications\">\n        <ion-col [routerLink]=\"[notification.link]\" item-text-wrap [ngStyle]=\"{'background-color': !notification.read ? '#E5EAF2' : ''}\" class=\"message item-text-wrap\">\n                {{ notification.text }} \n        </ion-col>\n    </ion-row>\n    <ion-item *ngIf=\"notifications.length === 0\" class=\"message\">You have no nofitications.</ion-item>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list (mouseleave) =\"dismissPopover()\">\n    <ion-item button [routerLink]=\"['/profile']\" (click)=\"dismissPopover()\">My Profile</ion-item>\n    <ion-item button [routerLink]=\"['/my-products']\" (click)=\"dismissPopover()\">Selling</ion-item>\n    <ion-item button [routerLink]=\"['/my-orders']\" (click)=\"dismissPopover()\">Buying</ion-item>\n    <ion-item button *ngIf=\"isAdmin\" (click)=\"dismissPopover()\" [routerLink]=\"['/admin']\">Admin</ion-item>\n    <ion-item button (click)=\"authService.logout(); dismissPopover()\">Logout</ion-item>\n</ion-list>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_roleguardService_roleguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/roleguardService/roleguard.service */ "./src/app/core/services/roleguardService/roleguard.service.ts");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb"), __webpack_require__.e("default~pages-home-home-module~pages-subcategory-subcategory-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule) },
    { path: 'verify', loadChildren: './pages/verify/verify.module#VerifyPageModule' },
    { path: 'registered', loadChildren: './pages/registered/registered.module#RegisteredPageModule' },
    { path: 'subcategory', loadChildren: './pages/subcategory/subcategory.module#SubcategoryPageModule' },
    { path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
    { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule', canActivate: [_core_services_roleguardService_roleguard_service__WEBPACK_IMPORTED_MODULE_3__["RoleguardService"]],
        data: { expectedRole: 'admin' } },
    { path: 'product-details', loadChildren: './pages/product-details/product-details.module#ProductDetailsPageModule' },
    { path: 'add-products', loadChildren: './pages/add-products/add-products.module#AddProductsPageModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'my-products', loadChildren: './pages/my-products/my-products.module#MyProductsPageModule' },
    { path: 'my-orders', loadChildren: './pages/my-orders/my-orders.module#MyOrdersPageModule' },
    { path: 'order-details', loadChildren: './pages/order-details/order-details.module#OrderDetailsPageModule' },
    { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
    { path: 'user/:userId', loadChildren: './pages/user/user.module#UserPageModule' },
    { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' },
    { path: 'payment/:token', loadChildren: './pages/payment/payment.module#PaymentPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".burgerMenuToolbar {\n  position: absolute;\n  bottom: 0;\n}\n\n.burgerMenuAdmin {\n  --background-hover: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1cmdlck1lbnVUb29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5idXJnZXJNZW51QWRtaW4ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSIsIi5idXJnZXJNZW51VG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uYnVyZ2VyTWVudUFkbWluIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, categoryService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.categoryService = categoryService;
        this.categories = [];
        this.currentMenuSubcategories = [];
        this.subMenuOpen = false;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe(data => {
            // @ts-ignore
            this.categories = data;
        });
    }
    showSubMenu(category) {
        if (this.subMenuOpen && !category.showMenu) {
            for (let category of this.categories) {
                category.showMenu = false;
            }
            this.subMenuOpen = false;
        }
        const slug = category.slug;
        if (category.showMenu) {
            category.showMenu = false;
            this.currentMenuSubcategories = [];
        }
        else if (!category.showMenu) {
            this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === slug)[0].subcategories
                .sort((a, b) => a.name.localeCompare(b.name));
            category.showMenu = true;
            this.subMenuOpen = true;
        }
    }
    subMenuItemClicked(category) {
        this.currentMenuSubcategories = [];
        category.showMenu = false;
        this.dismissMenu();
    }
    dismissMenu() {
        this.menu.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menu', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppComponent.prototype, "menu", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_core_header_top_header_header_buttons_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/core/header/top-header/header-buttons/profile-popover/profile-popover.component */ "./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.ts");
/* harmony import */ var _core_header_top_header_header_buttons_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/header/top-header/header-buttons/notifications/notifications.component */ "./src/app/core/header/top-header/header-buttons/notifications/notifications.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _app_core_header_top_header_header_buttons_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_10__["ProfilePopoverComponent"], _core_header_top_header_header_buttons_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"]],
        entryComponents: [_app_core_header_top_header_header_buttons_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_10__["ProfilePopoverComponent"], _core_header_top_header_header_buttons_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/header/top-header/header-buttons/notifications/notifications.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/notifications/notifications.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 0.9rem;\n  cursor: pointer;\n  border-bottom: 1px solid var(--ion-color-secondary);\n  padding: 5%;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci90b3AtaGVhZGVyL2hlYWRlci1idXR0b25zL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci9oZWFkZXItYnV0dG9ucy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gICAgZm9udC1zaXplOjAuOXJlbTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBwYWRkaW5nOjUlO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/header/top-header/header-buttons/notifications/notifications.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/notifications/notifications.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/notificationService/notification.service */ "./src/app/core/services/notificationService/notification.service.ts");
/* harmony import */ var _services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/filterAndSearchService/filter-and-search.service */ "./src/app/core/services/filterAndSearchService/filter-and-search.service.ts");






let NotificationsComponent = class NotificationsComponent {
    constructor(notificationService, progressIndicatorService, sortService, popoverController, navParams) {
        this.notificationService = notificationService;
        this.progressIndicatorService = progressIndicatorService;
        this.sortService = sortService;
        this.popoverController = popoverController;
        this.navParams = navParams;
        this.notifications = this.navParams.get('notifications');
    }
    ngOnInit() {
        this.notifications = this.sortService.sort(this.navParams.get('notifications'), '+read', '+date').slice(0, 10);
        console.log(this.notifications);
    }
    ngOnDestroy() {
        this.setNotificationsToRead();
    }
    getNotifications() {
        this.notificationService.getSingleUsersNotifications().subscribe(data => {
            // @ts-ignore
            this.notifications = this.sortService.sort(data.notifications, '+read', '+date');
        }, err => {
            console.log(err);
        });
    }
    deleteNotification(notificationId) {
        this.notificationService.deleteNotification(notificationId).subscribe(data => {
            this.getNotifications();
        }, err => {
            this.progressIndicatorService.presentToast('Notification not deleted', 'danger');
            console.log(err);
        });
    }
    setNotificationsToRead() {
        this.notificationService.setAllNotificationsToRead().subscribe(err => {
            console.log(err);
        });
    }
    dismissPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: _services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"] },
    { type: _services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/notifications/notifications.component.html"),
        styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/core/header/top-header/header-buttons/notifications/notifications.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
        _services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_3__["ProgressIndicatorService"],
        _services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popover-backdrop.active {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvcHJvZmlsZS1wb3BvdmVyL3Byb2ZpbGUtcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci9oZWFkZXItYnV0dG9ucy9wcm9maWxlLXBvcG92ZXIvcHJvZmlsZS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvcHJvZmlsZS1wb3BvdmVyL3Byb2ZpbGUtcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3BvdmVyLWJhY2tkcm9wLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcbiAgfSIsIi5wb3BvdmVyLWJhY2tkcm9wLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProfilePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePopoverComponent", function() { return ProfilePopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ProfilePopoverComponent = class ProfilePopoverComponent {
    constructor(formBuilder, authService, popoverService, popoverController, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.popoverController = popoverController;
        this.router = router;
        this.show = false;
        this.isAdmin = false;
    }
    ngOnInit() {
        this.show = true;
        this.isAdmin = this.authService.isAdmin();
    }
    dismissPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
};
ProfilePopoverComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ProfilePopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-popover',
        template: __webpack_require__(/*! raw-loader!./profile-popover.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.html"),
        styles: [__webpack_require__(/*! ./profile-popover.component.scss */ "./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ProfilePopoverComponent);



/***/ }),

/***/ "./src/app/core/services/authService/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/authService/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Authentication Service handling
 *  - `login`,
 *  - `registration`,
 *  - `verification`,
 *  - `verification email resend`,
 *  - `forgot password`,
 *  - `reset password`
 * communication with backend
 *
 * Sets sessionToken in `localStorage` and reads them to check the login and role of the logged in user
 */
let AuthService = class AuthService {
    /**
     * Assigns two new private variables `httpClient` and `router`
     * @param httpClient Auto injected `HttpClient` used for the commuication with the backend
     * @param router Auto injected `Router` used to redirect user after logout
     */
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        /**
         * The base Url of the backend server
         */
        this.apiBaseUrl = 'https://moln-api.herokuapp.com/user';
    }
    /**
     * Makes a backend request to the register endpoint.
     * ## Example
     * To register a user
     * <code>register('admin@admin.ch', '123456').subscribe(data-cb, err-cb);</code>
     *
     * @param email the email of the user
     * @param password the password of the user in plaintext
     * @return an Observable with data as {@link User}
     */
    register(email, password) {
        return this.httpClient.post(this.apiBaseUrl + '/signup', { email, password }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            this.setUser(res);
            return res;
        }));
    }
    /**
     *
     * @param email
     * @param password
     */
    login(email, password) {
        return this.httpClient.post(this.apiBaseUrl + '/login', { email, password }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            this.setSession(res);
            return res;
        }));
    }
    verifyUser(token) {
        return this.httpClient.patch(this.apiBaseUrl + '/verify', { token }, { observe: 'response' });
    }
    resendEmail() {
        const id = localStorage.getItem('id');
        const email = localStorage.getItem('email');
        return this.httpClient.post(this.apiBaseUrl + '/resend', { id, email }, { observe: 'response' });
    }
    forgotPassword(email) {
        return this.httpClient.post(this.apiBaseUrl + '/forgot', { email }, { observe: 'response' });
    }
    resetPassword(token, password) {
        return this.httpClient.patch(this.apiBaseUrl + '/reset', { token, password }, { observe: 'response' });
    }
    setSession(authResult) {
        localStorage.setItem('token', authResult.token);
    }
    setUser(registrationResult) {
        localStorage.setItem('id', registrationResult.createdUser._id);
        localStorage.setItem('email', registrationResult.createdUser.email);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
    }
    isLoggedIn() {
        try {
            if (!Boolean(this.getToken())) {
                return false;
            }
            const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(this.getToken());
            const expiration = payload.exp;
            const dateNow = Math.floor(Date.now() / 1000);
            const expired = expiration - dateNow < 0;
            if (expired) {
                localStorage.removeItem('token');
            }
            return !expired;
        }
        catch (err) {
            return false;
        }
    }
    isAdmin() {
        if (!Boolean(this.getToken())) {
            return false;
        }
        try {
            const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(this.getToken());
            return payload.admin;
        }
        catch (err) {
            return false;
        }
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getId() {
        if (!Boolean(this.getToken())) {
            return null;
        }
        const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(this.getToken());
        return payload.userId;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/services/categoryService/category.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/categoryService/category.service.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");





let CategoryService = class CategoryService {
    constructor(httpClient, router, authService) {
        this.httpClient = httpClient;
        this.router = router;
        this.authService = authService;
        this.categoriesEndpoint = 'https://moln-api.herokuapp.com/category';
    }
    /*
    Fetch all categories from the backend
    @Return: Array of all categories and their details
     */
    getCategories() {
        return this.httpClient.get(this.categoriesEndpoint);
    }
    /*
    Fetch a single category or subcategory from backend
    @Input: slug of the requested category
    @Return: Array of requested category or subcategory and their details
     */
    getSingleCategoryFromSlug(categorySlug) {
        return this.httpClient.get(this.categoriesEndpoint + `/${categorySlug}`);
    }
    /**
     * Create a new category
     * @param category a category of type {@link Category}
     */
    addCategory(category, image) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        const formData = new FormData();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        const categoryAsJSON = category.toJSON();
        Object.keys(categoryAsJSON).forEach(key => {
            formData.append(key, categoryAsJSON[key]);
        });
        formData.append('image', image);
        return this.httpClient.post(this.categoriesEndpoint + `/add`, formData, { headers });
    }
    /**
     * Update a category
     * @param id the id of the category
     * @param body the body to be sent
     * @return an Observable of the server response
     */
    updateCategory(id, body, image) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        const formData = new FormData();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        const jsonBody = JSON.parse(body);
        Object.keys(jsonBody).forEach(key => {
            formData.append(key, jsonBody[key]);
        });
        if (image)
            formData.append('image', image);
        return this.httpClient.patch(this.categoriesEndpoint + `/${id}`, formData, { headers });
    }
    deleteCategory(categoryId) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.categoriesEndpoint + `/${categoryId}`, { headers });
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], CategoryService);



/***/ }),

/***/ "./src/app/core/services/filterAndSearchService/filter-and-search.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/services/filterAndSearchService/filter-and-search.service.ts ***!
  \***********************************************************************************/
/*! exports provided: FilterAndSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAndSearchService", function() { return FilterAndSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



let FilterAndSearchService = class FilterAndSearchService {
    constructor() { }
    /**
     * Searches the given term in all given fieldnames of the array
     * @param array the array of objects in which to search for
     * @param searchTerm the string to search for
     * @param fieldnames optional parameter of all fieldnames as strings, if not all fields should be searched
     * @param caseSensitive optional boolean parameter if the search should be caseSensitive
     * @param skipFieldNames optional string Array of fieldnames to skip
     */
    search(array, searchTerm, fieldnames, caseSensitive = false, skipFieldNames) {
        if (searchTerm.length < 1)
            return new Set();
        searchTerm = caseSensitive ? searchTerm : searchTerm.toUpperCase();
        if (!fieldnames) {
            fieldnames = this.getAllKeys(array);
        }
        if (skipFieldNames) {
            fieldnames = fieldnames.filter(element => skipFieldNames.indexOf(element) === -1);
        }
        if (fieldnames.length < 1)
            return new Set();
        const result = new Set();
        fieldnames.forEach(key => {
            array.forEach(obj => {
                if (obj.hasOwnProperty(key)) {
                    const objValue = caseSensitive
                        ? obj[key].toString()
                        : obj[key].toString().toUpperCase();
                    const firstIndex = objValue.indexOf(searchTerm);
                    if (firstIndex !== -1) {
                        const indices = [firstIndex];
                        for (let i = firstIndex + 1; i < objValue.length;) {
                            const newIndex = objValue.indexOf(searchTerm, i);
                            if (newIndex !== -1) {
                                indices.push(newIndex);
                                i = newIndex + 1;
                            }
                            else {
                                break;
                            }
                        }
                        result.add({ obj, key, indices });
                    }
                }
            });
        });
        return result;
    }
    /**
     * Searches the given term in all given fieldnames of the array
     * @param array the array of objects in which to search for
     * @param searchTerm the string to search for
     * @param fieldnames optional parameter of all fieldnames as strings, if not all fields should be searched
     * @param caseSensitive optional boolean parameter if the search should be caseSensitive
     * @param skipFieldNames optional string Array of fieldnames to skip
     * @return a Set of Objects containing a key with the object that was found and a key with a map for all fieldnames and their corresponding indices
     * return example: ``` Set<{obj: Object, app: Map<fieldname: string, indices: number[]>}> ```
     */
    searchUnique(array, searchTerm, fieldnames, caseSensitive = false, skipFieldNames) {
        const resultWithMultipleEntries = this.search(array, searchTerm, fieldnames, caseSensitive, skipFieldNames);
        const result = new Set();
        const objToMap = new Map();
        resultWithMultipleEntries.forEach(entry => {
            if (!objToMap.has(entry.obj)) {
                const map = new Map();
                map.set(entry.key, entry.indices);
                result.add({ obj: entry.obj, app: map });
                objToMap.set(entry.obj, map);
            }
            else {
                objToMap.get(entry.obj).set(entry.key, entry.indices);
            }
        });
        return result;
    }
    /**
     *
     * @param array an Array of object which has to be sorted
     * @param args the arguments for the sorting of the type ```"+fieldname"``` or ```"-fieldname"``` where ```+``` and ```-``` is the sort direction
     * @return the sorted array
     */
    sort(array, ...args) {
        return array.sort((a, b) => {
            let result = 0;
            for (let i = 0; i < args.length && result === 0; i++) {
                const currentArgument = args[i];
                const sortOrder = currentArgument.slice(0, 1) === '+' ? true : false;
                const argument = args[i].substring(1);
                const fieldA = this.getField(a, argument);
                const fieldB = this.getField(b, argument);
                if (typeof fieldA === 'string' || typeof fieldB === 'string') {
                    result = sortOrder
                        ? ('' + fieldA)
                            .toLocaleLowerCase()
                            .localeCompare('' + fieldB.toLocaleLowerCase())
                        : ('' + fieldB)
                            .toLocaleLowerCase()
                            .localeCompare('' + fieldA.toLocaleLowerCase());
                }
                else {
                    result = sortOrder
                        ? fieldA - fieldB
                        : fieldB - fieldA;
                }
            }
            return result;
        });
    }
    getField(array, argument) {
        let currentObj = array;
        let split = argument.split('.');
        for (let i = 0; i < split.length; i++) {
            currentObj = currentObj[split[i]];
        }
        return currentObj;
    }
    /**
     * Filters the array with the given parameter. Returns a copy of the original array.
     * @param array
     * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
     * ```>, <, =, !=, >=, <=, ^, $, inc, isNull, isNotNull``` ^ means starts with, $ means ends with, inc means includes
     */
    filter(array, args) {
        const opMap = new Map([
            ['>', (a, b) => a > b],
            ['<', (a, b) => a < b],
            ['=', (a, b) => a == b],
            ['!=', (a, b) => a != b],
            ['>=', (a, b) => a >= b],
            ['<=', (a, b) => a <= b],
            ['^', (a, b) => a.startsWith(b)],
            ['$', (a, b) => a.endsWith(b)],
            ['inc', (a, b) => a.includes(b)],
            ['isNull', (a, b) => Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(a)],
            ['isNotNull', (a, b) => !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(a)]
        ]);
        const split = args.split(';');
        if (split.length < 3)
            return [];
        const op = split[0];
        const fieldname = split[1];
        const value = split[2];
        return array.filter(obj => {
            return opMap.get(op)(obj[fieldname], value);
        });
    }
    /**
     * Filters the array with the given parameters where it filters with an AND connection. Returns a copy of the original array.
     * @param array the array which gets filtered
     * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
     * ```>, <, =, !=, >=, <=, ^, $, inc``` ^ means starts with, $ means ends with, inc means includes
     */
    filterComplex(array, args) {
        const allObjects = [];
        args.forEach(arg => {
            allObjects.push(this.filter(array, arg));
        });
        allObjects.forEach(currArray => {
            allObjects[0] = allObjects[0].filter(element => {
                return currArray.includes(element);
            });
        });
        return allObjects[0];
    }
    getAllKeys(array) {
        const keys = new Set();
        array.forEach(obj => {
            Object.keys(obj).forEach(key => {
                keys.add(key);
            });
        });
        return Array.from(keys);
    }
    filterToObject(arg) {
        const split = arg.split(';');
        return { name: split[1], operator: split[0], value: split[2] };
    }
};
FilterAndSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FilterAndSearchService);



/***/ }),

/***/ "./src/app/core/services/notificationService/notification.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/services/notificationService/notification.service.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let NotificationService = class NotificationService {
    constructor(httpClient, router, authService) {
        this.httpClient = httpClient;
        this.router = router;
        this.authService = authService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.notificationEndpoint = 'https://moln-api.herokuapp.com/notification';
    }
    getSingleUsersNotifications() {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.notificationEndpoint + '/user', { headers });
    }
    notifySingleUser(userId, body) {
        body = JSON.parse(body);
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.post(this.notificationEndpoint + `/${userId}`, body, { headers });
    }
    deleteNotification(notificationId) {
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.notificationEndpoint + `/${notificationId}`, { headers });
    }
    setAllNotificationsToRead() {
        const body = '';
        const token = this.authService.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.notificationEndpoint + '/user', body, { headers });
    }
    checkForNewNotifications() {
        if (!this.source) {
            this.source = setInterval(() => {
                this.getSingleUsersNotifications().subscribe(data => {
                    this.subject.next(data);
                }, err => {
                    console.log(err);
                });
            }, 3000);
        }
        return this.subject;
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], NotificationService);



/***/ }),

/***/ "./src/app/core/services/popoverService/popover.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/popoverService/popover.service.ts ***!
  \*****************************************************************/
/*! exports provided: PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopoverService = class PopoverService {
    constructor(popoverController, componentFactoryResolver) {
        this.popoverController = popoverController;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    createPopover(comp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: comp,
                translucent: true,
                backdropDismiss: true,
                cssClass: 'popover-style'
            });
            this.currentPopover = popover;
            return popover;
        });
    }
    dismissPopover(data) {
        if (data)
            return this.popoverController.dismiss(data);
        this.popoverController.dismiss();
    }
};
PopoverService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], PopoverService);



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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__);






let ProgressIndicatorService = class ProgressIndicatorService {
    constructor(toastController, loadingController) {
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    /**
     * presents a toast
     * @param message the message in the toast
     * @param color the color of the toast background. If not specified it is 'success'
     * @param duration the duration of the toast. Default is 4500 for 'success' toasts 10'000 for others.
     * (Numbers specified in environment variables). Duration 0 for toasts that should stay forever
     * @param closeBtn True if a close Button should be shown. Defaults to true.
     * @param position The position of the toast on the screen.
     * @returns a promise that resolves true as soon as the toast is closed
     */
    presentToast(message, color, duration, closeBtn, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const isSuccess = this.isSuccessToast(color);
                const toastDuration = (Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(duration)) ? (this.getDurationFromVariable(duration)) :
                    (isSuccess) ? src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notificationsLength.success : src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notificationsLength.other;
                const toastColor = (Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(color)) ? color : 'success';
                const showCloseButton = (Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(closeBtn)) ? closeBtn : true;
                const closeButtonText = 'Ok';
                const toast = yield this.toastController.create({
                    message,
                    duration: toastDuration,
                    color: toastColor,
                    showCloseButton,
                    closeButtonText,
                    position
                });
                toast.onDidDismiss().then(() => {
                    resolve(true);
                });
                toast.present();
            }));
        });
    }
    getDurationFromVariable(duration) {
        if (typeof duration === 'number') {
            return duration;
        }
        else if (duration === 'success') {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notificationsLength.success;
        }
        else {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notificationsLength.other;
        }
    }
    presentLoading(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: '<img class="custom-spinner" src="../../../assets/images/logo.png">' + message,
                backdropDismiss: true,
                spinner: null,
                duration: 5000,
                cssClass: 'loadingSpinner'
            });
            yield loading.present();
        });
    }
    dismissLoadingIndicator() {
        this.loadingController.dismiss();
    }
    isSuccessToast(color) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(color) || color === 'success') {
            return true;
        }
        else {
            return false;
        }
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

/***/ "./src/app/core/services/roleguardService/roleguard.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/services/roleguardService/roleguard.service.ts ***!
  \*********************************************************************/
/*! exports provided: RoleguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleguardService", function() { return RoleguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");




let RoleguardService = class RoleguardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route) {
        const expectedRole = route.data.expectedRole;
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        if (expectedRole === 'admin') {
            if (!this.auth.isAdmin()) {
                this.router.navigate(['/home']);
                return false;
            }
            return true;
        }
        else
            return true;
    }
};
RoleguardService.ctorParameters = () => [
    { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RoleguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RoleguardService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * Exports a `environment` object with a variable `production` set to `false`. To get `production` to `true` run
 * `ng build --prod`
 */
const environment = {
    production: false,
    googleMapsAPIKey: 'AIzaSyBzlGuLyMWhDpB8xc6_rO05evEBM7cumtE',
    notificationsLength: { success: 3500, other: 10000 }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/olivierstaehli/Documents/UniBern/Semester3/Informatik/ESE/ese2019-team9/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map