(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/@ionic-native/in-app-browser/ngx/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic-native/in-app-browser/ngx/index.js ***!
  \****************************************************************/
/*! exports provided: InAppBrowserObject, InAppBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowserObject", function() { return InAppBrowserObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppBrowser", function() { return InAppBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());

var InAppBrowser = /** @class */ (function (_super) {
    __extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.pluginName = "InAppBrowser";
    InAppBrowser.plugin = "cordova-plugin-inappbrowser";
    InAppBrowser.pluginRef = "cordova.InAppBrowser";
    InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
    InAppBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InAppBrowser);
    return InAppBrowser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUF5STFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaUNBQUk7SUFNSixrQ0FBSztJQU9MLGlDQUFJO0lBUUosMENBQWEsYUFBQyxNQUF3QztJQVV0RCxzQ0FBUyxhQUFDLEdBQXFDO0lBVS9DLCtCQUFFLGFBQUMsS0FBNEI7OztzREFBaUM7Z0JBQzlELE9BQU8sSUFBSSxVQUFVLENBQ25CLFVBQUMsUUFBcUM7b0JBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUNGLENBQUM7YUFDSDs7OzZCQWhQSDs7OztJQTBSa0MsZ0NBQWlCOzs7O0lBQ2pEOzs7Ozs7OztPQVFHO0lBQ0gsNkJBQU0sR0FBTixVQUNFLEdBQVcsRUFDWCxNQUFlLEVBQ2YsT0FBc0M7UUFFdEMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBaEJVLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkExUnpCO0VBMFJrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnO1xuICAvKiogIHNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgYnJvd3NlcidzIGVudGlyZSBsb2NhbCBzdG9yYWdlIGNsZWFyZWQgKGNvb2tpZXMsIEhUTUw1IGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiwgZXRjLikgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCAqL1xuICBjbGVhcmRhdGE/OiAneWVzJztcbiAgLyoqXG4gICAqIFNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgc2Vzc2lvbiBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLlxuICAgKiBGb3IgV0tXZWJWaWV3LCByZXF1aXJlcyBpT1MgMTErIG9uIHRhcmdldCBkZXZpY2UuXG4gICAqL1xuICBjbGVhcnNlc3Npb25jYWNoZT86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQgJiBXaW5kb3dzIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqL1xuICBoYXJkd2FyZWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LlxuICAgKi9cbiAgaGlkZGVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgbmF2aWdhdGlvbiBidXR0b25zIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uXG4gICAqIChpT1MpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gb3Igb2ZmIChkZWZhdWx0cyB0byBubykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBoaWRlIHRoZSB1cmwgYmFyIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uICovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgbmF2aWdhdGlvbiBidXR0b25zIGdvIHRvIHRoZSBsZWZ0IGFuZCBjbG9zZSBidXR0b24gdG8gdGhlIHJpZ2h0LlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgY2xvc2UgYnV0dG9uIGdvZXMgdG8gdGhlIHJpZ2h0IGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBsZWZ0dG9yaWdodD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgSW5BcHBCcm93c2VyJ3MgbG9jYXRpb24gYmFyIG9uIG9yIG9mZi4gKi9cbiAgbG9jYXRpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgU2V0IHRvIHllcyB0byBwcmV2ZW50IEhUTUw1IGF1ZGlvIG9yIHZpZGVvIGZyb20gYXV0b3BsYXlpbmcgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY29sb3Igb2YgYm90aCBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBkZWZhdWx0LiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcyBhbmQgbm90IGhpZGVuYXZpZ2F0aW9uYnV0dG9ucyBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuXG4gICAqL1xuICBuYXZpZ2F0aW9uYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBtYWtlIEluQXBwQnJvd3NlciBXZWJWaWV3IHRvIHBhdXNlL3Jlc3VtZSB3aXRoIHRoZSBhcHAgdG8gc3RvcCBiYWNrZ3JvdW5kIGF1ZGlvICh0aGlzIG1heSBiZSByZXF1aXJlZCB0byBhdm9pZCBHb29nbGUgUGxheSBpc3N1ZXMpICovXG4gIHNob3VsZFBhdXNlT25TdXNwZW5kPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIHdhaXQgdW50aWwgYWxsIG5ldyB2aWV3IGNvbnRlbnQgaXMgcmVjZWl2ZWQgYmVmb3JlIGJlaW5nIHJlbmRlcmVkIChkZWZhdWx0cyB0byBubykuICovXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBjb2xvciBvZiB0aGUgdG9vbGJhci4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLlxuICAgKi9cbiAgdG9vbGJhcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBtYWtlIHRoZSB0b29sYmFyIHRyYW5zbHVjZW50KHNlbWktdHJhbnNwYXJlbnQpIChkZWZhdWx0cyB0byB5ZXMpLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuICovXG4gIHRvb2xiYXJ0cmFuc2x1Y2VudD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIGZsaXBob3Jpem9udGFsLCBjcm9zc2Rpc3NvbHZlIG9yIGNvdmVydmVydGljYWwgdG8gc2V0IHRoZSB0cmFuc2l0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBjb3ZlcnZlcnRpY2FsKS4gKi9cbiAgdHJhbnNpdGlvbnN0eWxlPzogJ2ZsaXBob3Jpem9udGFsJyB8ICdjcm9zc2Rpc3NvbHZlJyB8ICdjb3ZlcnZlcnRpY2FsJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldHMgd2hldGhlciB0aGUgV2ViVmlldyBzaG91bGQgZW5hYmxlIHN1cHBvcnQgZm9yIHRoZSBcInZpZXdwb3J0XCIgSFRNTCBtZXRhIHRhZyBvciBzaG91bGQgdXNlIGEgd2lkZSB2aWV3cG9ydC4gV2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNldHRpbmcgaXMgbm8sIHRoZSBsYXlvdXQgd2lkdGggaXMgYWx3YXlzIHNldCB0byB0aGUgd2lkdGggb2YgdGhlIFdlYlZpZXcgY29udHJvbCBpbiBkZXZpY2UtaW5kZXBlbmRlbnQgKENTUykgcGl4ZWxzLiBXaGVuIHRoZSB2YWx1ZSBpcyB5ZXMgYW5kIHRoZSBwYWdlIGNvbnRhaW5zIHRoZSB2aWV3cG9ydCBtZXRhIHRhZywgdGhlIHZhbHVlIG9mIHRoZSB3aWR0aCBzcGVjaWZpZWQgaW4gdGhlIHRhZyBpcyB1c2VkLiBJZiB0aGUgcGFnZSBkb2VzIG5vdCBjb250YWluIHRoZSB0YWcgb3IgZG9lcyBub3QgcHJvdmlkZSBhIHdpZHRoLCB0aGVuIGEgd2lkZSB2aWV3cG9ydCB3aWxsIGJlIHVzZWQuIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICB1c2VXaWRlVmlld1BvcnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIFdLV2ViVmlldyBlbmdpbmUgZm9yIHRoZSBJbmFwcEJyb3dzZXIuIE9taXQgb3Igc2V0IHRvIG5vIChkZWZhdWx0KSB0byB1c2UgVUlXZWJWaWV3LiAqL1xuICB1c2V3a3dlYnZpZXc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgQW5kcm9pZCBicm93c2VyJ3Mgem9vbSBjb250cm9scywgc2V0IHRvIG5vIHRvIGhpZGUgdGhlbS4gRGVmYXVsdCB2YWx1ZSBpcyB5ZXMuICovXG4gIHpvb20/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEluQXBwQnJvd3NlckV2ZW50VHlwZSA9ICdsb2Fkc3RhcnQnIHwgJ2xvYWRzdG9wJyB8ICdsb2FkZXJyb3InIHwgJ2V4aXQnIHwgJ2JlZm9yZWxvYWQnIHwgJ21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3NlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKiogdGhlIGV2ZW50IG5hbWUgKi9cbiAgdHlwZTogSW5BcHBCcm93c2VyRXZlbnRUeXBlO1xuICAvKiogdGhlIFVSTCB0aGF0IHdhcyBsb2FkZWQuICovXG4gIHVybDogc3RyaW5nO1xuICAvKiogdGhlIGVycm9yIGNvZGUsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiB0aGUgZXJyb3IgbWVzc2FnZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldD1cInNlbGZcIl0gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogICAgICAgICAgICAgICAgIF9zZWxmOiBPcGVucyBpbiB0aGUgV2ViVmlldyBpZiB0aGUgVVJMIGlzIGluIHRoZSB3aGl0ZSBsaXN0LCBvdGhlcndpc2UgaXQgb3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9ibGFuazogT3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9zeXN0ZW06IE9wZW5zIGluIHRoZSBzeXN0ZW0ncyB3ZWIgYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHVybCB7c3RyaW5nfSAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0gIHRhcmdldCB7c3RyaW5nfSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiBAcGFyYW0gIG9wdGlvbnMge3N0cmluZ30gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEByZXR1cm5zIHtJbkFwcEJyb3dzZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-title *ngIf=\"!order && isLoading\" class=\"status\">\n    ... Loading ...\n  </ion-title>\n  <ion-title *ngIf=\"!order && !isLoading\" class=\"status\">\n    Invalid Order ID!\n  </ion-title>\n  <ion-grid *ngIf=\"order\">\n\n    <!-- Product information -->\n    <ion-row>\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"container ion-hide-sm-down\">\n        <ion-row>\n          <ion-col size-md=\"2\" size=\"1\">\n            <ion-avatar style=\"width:auto; height:auto;\"><img style=\"width:auto; height:auto;\"\n                src=\"{{ order.product.image }}\" /> </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <ion-row class=\"productName actionLink\" [routerLink]=\"['/product-details/', order.product._id]\">\n              {{ order.product.name }}</ion-row>\n            <ion-row class=\"productInfo\" *ngIf=\"!isSeller\">Seller:&nbsp;<b class=\"actionLink blueLink\"\n                [routerLink]=\"['/user', order.seller._id]\">{{ order.seller.name }}</b>&nbsp; | Order placed:&nbsp;\n              <b>{{ order.orderDate }}</b>&nbsp; | Status:&nbsp;<b>{{ order.status }}</b></ion-row>\n            <ion-row class=\"productInfo\" *ngIf=\"isSeller\">Buyer:&nbsp;<b class=\"actionLink blueLink\"\n                [routerLink]=\"['/user', order.buyer._id]\">{{ order.buyer.name ? order.buyer.name : 'user' + order.buyer._id }}</b>&nbsp;\n              | Order placed:&nbsp;\n              <b>{{ order.orderDate }}</b>&nbsp; | Status:&nbsp;<b>{{ order.status }}</b></ion-row>\n          </ion-col>\n          <ion-col class=\"productPrice\" size=\"2\">{{ order.product.price }}CHF</ion-col>\n        </ion-row>\n        <ion-row></ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Product information (mobile) -->\n    <ion-row>\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"container ion-hide-md-up\">\n        <ion-row style=\"display:flex; justify-content: center; align-items: center;\">\n          <ion-col size=\"3\" style=\"display:flex; justify-content: center; align-items: center;\">\n            <ion-img style=\"text-align:center\" src=\"{{ order.product.image }}\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row class=\"productName actionLink\" style=\"display:flex; justify-content: center; align-items: center;\" [routerLink]=\"['/product-details/', order.product._id]\">\n              {{ order.product.name }}</ion-row>\n            <ion-row class=\"productInfo\" *ngIf=\"!isSeller\">\n              <ion-col>\n                Seller:\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                <b class=\"actionLink blueLink\" [routerLink]=\"['/user', order.seller._id]\">{{ order.seller.name }}</b>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"productInfo\" *ngIf=\"isSeller\">\n              <ion-col>\n                Buyer:\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                  <b class=\"actionLink blueLink\"\n                  [routerLink]=\"['/user', order.buyer._id]\">{{ order.buyer.name ? order.buyer.name : 'user' + order.buyer._id }}</b>\n              </ion-col>\n            </ion-row>\n\n            <ion-row class=\"productInfo\">\n              <ion-col>\n                Order placed:\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                <b>{{ order.orderDate }}</b>\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class=\"productInfo\">\n              <ion-col>\n                Status:\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                <b>{{ order.status }}</b>\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row class=\"productInfo\">\n              <ion-col>\n                Price:\n              </ion-col>\n              <ion-col style=\"text-align:right\">\n                <b>{{ order.product.price }} CHF </b>\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row></ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Accept/Reject (for seller only) -->\n    <ion-row *ngIf=\"order.status=='pending' && isSeller\">\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"container\">\n        <ion-row class=\"actionBar\">\n          <ion-col size=\"7\" style=\"vertical-align: middle;\"><span style=\"vertical-align:5%\">What do you want to do with\n              this request? </span></ion-col>\n          <ion-col size=\"2\" class=\"\">\n            <ion-button no-margin color=\"success\" size=\"small\" (click)=\"acceptOrder()\">Accept</ion-button>\n          </ion-col>\n          <ion-col size=\"1\">|</ion-col>\n          <ion-col size=\"2\" class=\"\">\n            <ion-button no-margin color=\"danger\" size=\"small\" (click)=\"rejectOrder()\">Reject</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Pay (for customer only) -->\n    <ion-row *ngIf=\"order.status=='accepted' && !isSeller\">\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"container\">\n        <ion-row class=\"actionBar\">\n          <ion-col size=\"9\" style=\"vertical-align: middle;\"><span style=\"vertical-align:5%\">Your order is ready. Please\n              pay now your invoice</span></ion-col>\n          <ion-col size=\"2\" class=\"\">\n            <ion-button no-margin color=\"success\" size=\"small\"\n              class=\"greyButton ion-justify-content-center ion-no-margin ion-no-padding ion-text-center\"\n              style=\"margin-top:-1rem;\" (click)=\"payOrder()\">Pay</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Review (for customer only) -->\n    <ion-row *ngIf=\"order.status=='paid' && !isSeller && !order.reviewed\">\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"container\">\n        <ion-row class=\"actionBar\">\n          <ion-col style=\"vertical-align: middle;\"><span style=\"vertical-align:5%\">Thanks for using MOLN!\n              Please give this product a review to help other users out!</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title class=\"ion-text-center\">Write a review</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"reviewForm\" (ngSubmit)=\"onSubmitReview()\">\n                  <ion-row class=\"messageForm\" class=\"ion-no-margin\">\n                    <ion-col class=\"ion-text-center\">\n                      <ion-icon *ngFor=\"let i of array(5)\" class=\"rating\" style=\"font-size:25px\"\n                        [name]=\"i>filledStars ? 'star-outline' : 'star'\" (mouseenter)=\"fillTo(i)\"\n                        (click)=\"onRatingChanged(i)\"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"messageForm\" class=\"ion-no-margin\">\n                    <ion-col>\n                      <ion-textarea placeholder=\"Comment...\" class=\"formElement ion-no-margin\" formControlName=\"comment\"\n                        style=\"margin-top:-3px; border:1px solid grey; border-radius:5px;\"></ion-textarea>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"ion-no-margin\">\n                    <ion-col>\n                      <div text-center>\n                        <ion-button style=\"width:auto;\" class=\"greyButton ion-no-margin ion-no-padding ion-text-center\"\n                          fill=\"empty\" type=\"submit\"> Submit </ion-button>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </form>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <!-- Chat -->\n    <ion-row>\n      <ion-col offset-md=\"2\" size-md=\"8\" class=\"chatContainer\">\n        <ion-row *ngFor=\"let message of order.chat\"\n          [className]=\"message.statusMessage ? 'messageContainer statusMessage' : 'messageContainer'\">\n          <ion-col size=\"2\">\n            <ion-avatar style=\"width:auto; height:auto;\"><img style=\"width:auto; height:auto;\"\n                src=\"{{ message.sender.image }}\" /> </ion-avatar>\n          </ion-col>\n          <ion-col size=\"10\">\n            <ion-row size=\"1\" style=\"margin-bottom:3px;\" *ngIf=\"message.sender._id.localeCompare(userId)\"\n              class=\"actionLink blueLink\" [routerLink]=\"['/user', message.sender._id]\">\n              <b>{{ message.sender.name ? message.sender.name : 'user' + message.sender._id }}</b> </ion-row>\n            <ion-row size=\"1\" style=\"margin-bottom:3px\" *ngIf=\"!message.sender._id.localeCompare(userId)\">\n              <b>{{ message.sender.name ? message.sender.name : 'user' + message.sender._id }}</b> </ion-row>\n            <ion-row size=\"10\" *ngIf=\"!message.statusMessage\" style=\"white-space: pre-wrap\"> {{message.message }}\n            </ion-row>\n            <ion-row size=\"10\" *ngIf=\"message.statusMessage\">\n              <div style=\"white-space: pre-wrap\" [innerHTML]=\"returnStatusMessage(message, order)\"></div>\n            </ion-row>\n            <ion-row size=\"1\" style=\"margin-top:15px\" class=\"smallDate\"> {{ message.date | date : \"dd.MM.y hh:mm\"}}\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"!order.chat\" class=\"messageContainer\">\n          <ion-col size=\"4\" offset=\"4\" style=\"text-align:center; font-size:13px\">There are no messages yet.</ion-col>\n        </ion-row>\n        <form [formGroup]=\"chatForm\" (ngSubmit)=\"onSubmitMessage()\">\n          <ion-row class=\"messageForm\">\n            <ion-col size=\"9\">\n              <ion-input placeholder=\"Message...\" class=\"formElement ion-no-margin\" [type]=\"text\"\n                formControlName=\"message\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\" style=\"display: flex; align-items: center; justify-content: center;\">\n              <ion-button class=\"greyButton ion-no-margin ion-no-padding ion-text-center\"\n                style=\"width:auto; min-width:50px; margin-left:auto; margin-right:auto;\" fill=\"empty\" type=\"submit\">\n                Submit </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");
/* harmony import */ var _core_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/header.module */ "./src/app/core/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");











const routes = [
    { path: '', component: _order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"] },
    { path: ':orderId', component: _order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"] }
];
let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _core_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _shared_input_form_module__WEBPACK_IMPORTED_MODULE_9__["InputFormModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 7px;\n  margin-top: 2rem;\n  padding: 1rem;\n}\n\n.chatContainer {\n  margin-top: 2rem;\n  padding: 0;\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 7px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n\n.messageContainer {\n  border-bottom: 1px solid var(--ion-color-secondary);\n  padding: 1rem;\n}\n\n.messageForm {\n  padding: 1rem;\n}\n\n.productName {\n  font-weight: bold;\n  color: var(--ion-color-dark-tint);\n  font-size: 22px;\n}\n\n.actionBar {\n  font-size: 22px;\n  font-weight: lighter;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.smallDate {\n  font-size: 10px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.actionLink:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.blueLink {\n  color: var(--ion-color-primary-shade);\n}\n\n.productPrice {\n  font-weight: bold;\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: var(--ion-color-dark-tint);\n}\n\n.productInfo {\n  font-size: 0.7em;\n  font-weight: lighter;\n  padding-top: 0.5rem;\n}\n\n.body {\n  background-color: var(--ion-color-medium);\n}\n\n.statusMessage {\n  background-color: var(--ion-color-medium);\n}\n\nion-input {\n  border: solid 1px var(--ion-color-secondary);\n  border-radius: 5px;\n}\n\n.status {\n  text-align: center;\n  margin-top: 10%;\n}\n\n.center-content > * {\n  -webkit-box-ordinal-group: 1;\n  order: 0;\n  -webkit-box-flex: 1;\n  flex: 1 1 auto;\n  -webkit-align-self: auto;\n  align-self: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbURBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdDO0VBQ0csNEJBQUE7RUFJQSxRQUFBO0VBQ0EsbUJBQUE7RUFJQSxjQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi10b3A6MnJlbTtcbiAgICBwYWRkaW5nOjFyZW07XG59XG5cbi5jaGF0Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOjJyZW07XG4gICAgcGFkZGluZzowO1xuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbToycmVtO1xufVxuXG4ubWVzc2FnZUNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzoxcmVtO1xufVxuXG4ubWVzc2FnZUZvcm0ge1xuICAgIHBhZGRpbmc6MXJlbTtcbn1cblxuLnByb2R1Y3ROYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBmb250LXNpemU6MjJweDtcbn1cblxuLmFjdGlvbkJhciB7XG4gICAgZm9udC1zaXplOjIycHg7XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNtYWxsRGF0ZSB7XG4gICAgZm9udC1zaXplOjEwcHg7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uTGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmx1ZUxpbmsge1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cblxuLnByb2R1Y3RQcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MS4yZW07XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuXG4ucHJvZHVjdEluZm8ge1xuICAgIGZvbnQtc2l6ZTowLjdlbTtcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbn1cblxuLmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uc3RhdHVzTWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbmlvbi1pbnB1dHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiB9XG5cbiAuc3RhdHVzIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjEwJTtcbn1cblxuXG4gLmNlbnRlci1jb250ZW50ID4gKiB7XG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTtcbiAgICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xuICAgIC13ZWJraXQtb3JkZXI6IDA7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gICAgb3JkZXI6IDA7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbW96LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgfSIsIi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2hhdENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tZXNzYWdlQ29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubWVzc2FnZUZvcm0ge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucHJvZHVjdE5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5hY3Rpb25CYXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zbWFsbERhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbkxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmx1ZUxpbmsge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xufVxuXG4ucHJvZHVjdFByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG5cbi5wcm9kdWN0SW5mbyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uc3RhdHVzTWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5jZW50ZXItY29udGVudCA+ICoge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xuICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xuICAtd2Via2l0LW9yZGVyOiAwO1xuICAtbXMtZmxleC1vcmRlcjogMDtcbiAgb3JkZXI6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tb3otYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcbiAgYWxpZ24tc2VsZjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/paymentService/payment.service */ "./src/app/core/services/paymentService/payment.service.ts");
/* harmony import */ var src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/orderService/order.service */ "./src/app/core/services/orderService/order.service.ts");
/* harmony import */ var _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











let OrderDetailsPage = class OrderDetailsPage {
    constructor(formBuilder, progressIndicatorService, authService, route, router, navController, orderService, productService, paymentService, iab) {
        this.formBuilder = formBuilder;
        this.progressIndicatorService = progressIndicatorService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.navController = navController;
        this.orderService = orderService;
        this.productService = productService;
        this.paymentService = paymentService;
        this.iab = iab;
        this.isLoggedIn = false;
        this.isLoading = true;
        this.isSeller = false;
        this.rating = 5;
        this.filledStars = 5;
        this.validationMessages = {
            message: [{
                    type: 'required',
                    message: 'Message is required'
                },
                {
                    type: 'maxlength',
                    message: 'Message has to be shorter than 10000 characters'
                }
            ]
        };
        this.isLoggedIn = authService.isLoggedIn();
        this.userId = authService.getId();
    }
    ngOnInit() {
        this.isSeller = false;
        this.route.paramMap.subscribe(params => {
            if (params.get('orderId') === null) {
                this.navController.pop();
            }
            else {
                this.orderId = params.get('orderId');
                this.displayOrderInformation();
            }
        });
        this.chatForm = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(400)]]
        });
        this.reviewForm = this.formBuilder.group({
            comment: [''],
            rating: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    array(n) {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
    }
    onRatingChanged(n) {
        this.rating = n;
    }
    fillTo(n) {
        this.filledStars = n;
    }
    acceptOrder() {
        this.orderService.accept(this.orderId).subscribe(data => {
            this.displayOrderInformation();
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Order could not be rejected. Please try again.', 'danger');
        });
    }
    onSubmitReview() {
        if (this.reviewForm.invalid) {
            return;
        }
        const val = {
            comment: this.reviewForm.value.comment,
            rating: this.rating,
            productId: this.order.product._id
        };
        this.productService.addReview(val).subscribe(data => {
            this.reviewForm.reset();
            this.progressIndicatorService.presentToast('Review successfully added');
            this.displayOrderInformation();
        }, error => {
            console.log(error.error);
            this.progressIndicatorService.presentToast(error.error.message, 'danger');
        });
    }
    rejectOrder() {
        this.orderService.reject(this.orderId).subscribe(data => {
            this.displayOrderInformation();
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Order could not be rejected. Please try again.', 'danger');
        });
    }
    payOrder() {
        try {
            this.paymentService.createPayment(this.orderId).subscribe(data => {
                let link = data.payment.links[1].href;
                this.paymentToken = data.token;
                localStorage.setItem('paymentToken', this.paymentToken);
                if (!document.URL.startsWith('http')) {
                    const browser = this.iab.create(link);
                    browser.show();
                }
                else {
                    window.open(link, "_self");
                }
            });
        }
        catch (err) {
            this.progressIndicatorService.presentToast('Order could not be paid. Please try again.', 'danger');
        }
        /*
        this.orderService.pay(this.orderId).subscribe(data => {
          this.displayOrderInformation();
        }, err => {
          console.log(err);
          this.progressIndicatorService.presentToast('Order could not be paid. Please try again.', 3500, 'danger');
        });*/
    }
    ngOnDestroy() { }
    displayOrderInformation() {
        this.orderService.getOrderById(this.orderId)
            .subscribe(data => {
            this.order = data;
            if (this.order.seller._id != this.authService.getId() && this.order.buyer._id != this.authService.getId() && !this.authService.isAdmin())
                this.navController.pop();
            let sellerId = this.order.seller._id;
            let userId = this.authService.getId();
            this.isSeller = sellerId == userId ? true : false;
            this.isLoading = false;
        }, err => {
            console.log(err);
            this.isLoading = false;
        });
    }
    onSubmitMessage() {
        if (this.chatForm.invalid) {
            return;
        }
        const body = {
            message: this.chatForm.value.message,
            orderId: this.orderId
        };
        this.orderService.sendMessage(body).subscribe(data => {
            this.chatForm.reset();
            this.displayOrderInformation();
        }, error => {
            console.log(error.error.error);
            this.progressIndicatorService.presentToast(error.error.error, 'danger');
        });
    }
    returnStatusMessage(message, order) {
        if (!message.message)
            return "Error";
        const text = message.message;
        const args = message.args;
        const sellerArticle = this.isSeller ? "your" : "the";
        const buyerArticle = !this.isSeller ? "your" : "the";
        if (!text.localeCompare("[INITIAL REQUEST]"))
            return "<i>Requested " + sellerArticle + " product <br><br>Start of event: <b>" + order.startDate + "</b> <br>End of event: <b>" + order.endDate + "</b>";
        if (!text.localeCompare("[ACCEPT]"))
            return "<i>Accepted " + buyerArticle + " request</i>";
        if (!text.localeCompare("[REJECT]"))
            return "<i>Rejected " + buyerArticle + " request</i>";
        if (!text.localeCompare("[PAY]"))
            return "<i>Paid the invoice of <b>" + order.product.price + "CHF </b></i>";
        if (!text.localeCompare("[REVIEW]") && message.args)
            return "<i>Rated the product <b>" + message.args.rating + " stars </b></i><br>" + (message.args.comment ? "<br>Comment: <br>" + message.args.comment : "") + "";
        return "<i>Unknown status message</i>";
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorService"] },
    { type: src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] }
];
OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: __webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html"),
        styles: [__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorService"],
        src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _core_services_orderService_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
        _core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
        _core_services_paymentService_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map