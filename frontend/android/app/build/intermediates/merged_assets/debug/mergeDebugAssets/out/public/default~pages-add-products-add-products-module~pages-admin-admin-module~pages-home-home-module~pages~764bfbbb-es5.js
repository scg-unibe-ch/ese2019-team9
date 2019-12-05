(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~764bfbbb"],{

/***/ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-captcha/fesm5/ngx-captcha.js ***!
  \*******************************************************/
/*! exports provided: BaseReCaptchaComponent, InvisibleReCaptchaComponent, NgxCaptchaModule, ReCaptcha2Component, ReCaptchaType, ReCaptchaV3Service, ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return BaseReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return InvisibleReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return NgxCaptchaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return ReCaptcha2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return ReCaptchaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return ReCaptchaV3Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var BaseReCaptchaComponent = /** @class */ (function () {
    function BaseReCaptchaComponent(renderer, zone, injector, scriptService) {
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Prefix of the captcha element
         */
        this.captchaElemPrefix = 'ngx_captcha_id_';
        this.setupCaptcha = true;
        /**
         * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
         */
        this.useGlobalDomain = false;
        /**
         * Type
         */
        this.type = 'image';
        /**
         * Tab index
         */
        this.tabIndex = 0;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is reset.
         */
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Error callback
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Expired callback
         */
        this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Indicates if captcha should be set on load
         */
        this.setupAfterLoad = false;
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         */
        this.resetCaptchaAfterSuccess = false;
        /**
         * Indicates if captcha is loaded
         */
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]).control;
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.setupCaptcha) {
            this.setupCaptcha = false;
            this.setupComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // cleanup scripts if language changed because they need to be reloaded
        if (changes && changes.hl) {
            // cleanup scripts when language changes
            if (!changes.hl.firstChange && (changes.hl.currentValue !== changes.hl.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        if (changes && changes.useGlobalDomain) {
            // cleanup scripts when domain changes
            if (!changes.useGlobalDomain.firstChange && (changes.useGlobalDomain.currentValue !== changes.useGlobalDomain.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        this.setupCaptcha = true;
    };
    /**
    * Gets captcha response as per reCaptcha docs
    */
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getResponse = /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    function () {
        return this.reCaptchaApi.getResponse(this.captchaId);
    };
    /**
    * Gets Id of captcha widget
    */
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCaptchaId = /**
     * Gets Id of captcha widget
     * @return {?}
     */
    function () {
        return this.captchaId;
    };
    /**
    * Resets captcha
    */
    /**
     * Resets captcha
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.resetCaptcha = /**
     * Resets captcha
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run((/**
         * @return {?}
         */
        function () {
            // reset captcha using Google js api
            _this.reCaptchaApi.reset();
            // required due to forms
            _this.onChange(undefined);
            _this.onTouched(undefined);
            // trigger reset event
            _this.reset.next();
        }));
    };
    /**
    * Gets last submitted captcha response
    */
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCurrentResponse = /**
     * Gets last submitted captcha response
     * @return {?}
     */
    function () {
        return this.currentResponse;
    };
    /**
    * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.reloadCaptcha = /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    function () {
        this.setupComponent();
    };
    /**
     * @protected
     * @param {?} captchaElemId
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ensureCaptchaElem = /**
     * @protected
     * @param {?} captchaElemId
     * @return {?}
     */
    function (captchaElemId) {
        /** @type {?} */
        var captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error("Captcha element with id '" + captchaElemId + "' was not found");
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    };
    /**
    * Responsible for instantiating captcha element
    */
    /**
     * Responsible for instantiating captcha element
     * @protected
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.renderReCaptcha = /**
     * Responsible for instantiating captcha element
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.captchaId = _this.reCaptchaApi.render(_this.captchaElemId, _this.getCaptchaProperties());
            _this.ready.next();
        }));
    };
    /**
    * Called when captcha receives response
    * @param callback Callback
    */
    /**
     * Called when captcha receives response
     * @protected
     * @param {?} callback Callback
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.handleCallback = /**
     * Called when captcha receives response
     * @protected
     * @param {?} callback Callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run((/**
         * @return {?}
         */
        function () {
            _this.onChange(callback);
            _this.onTouched(callback);
        }));
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = /**
     * @private
     * @return {?}
     */
    function () {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    };
    /**
     * @private
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.setupComponent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        function (grecaptcha) {
            _this.onloadCallback(grecaptcha);
        }), this.hl);
    };
    /**
    * Called when google's recaptcha script is ready
    */
    /**
     * Called when google's recaptcha script is ready
     * @private
     * @param {?} grecapcha
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.onloadCallback = /**
     * Called when google's recaptcha script is ready
     * @private
     * @param {?} grecapcha
     * @return {?}
     */
    function (grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error("ReCaptcha Api was not initialized correctly");
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
        // setup component if it was flagged as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.generateNewElemId = /**
     * @private
     * @return {?}
     */
    function () {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    };
    /**
     * @private
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = /**
     * @private
     * @return {?}
     */
    function () {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error("Captcha elem Id is not set");
        }
        if (!this.captchaWrapperElem) {
            throw Error("Captcha DOM element is not initialized");
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        /** @type {?} */
        var newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    };
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     */
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.writeValue = /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    function (obj) { };
    /**
     * This method helps us tie together recaptcha and our formControl values
     */
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnChange = /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
    * At some point we might be interested whether the user has touched our component
    */
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnTouched = /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
    * Handles error callback
    */
    /**
     * Handles error callback
     * @protected
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.handleErrorCallback = /**
     * Handles error callback
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run((/**
         * @return {?}
         */
        function () {
            _this.onChange(undefined);
            _this.onTouched(undefined);
        }));
        this.error.next();
    };
    /**
    * Handles expired callback
    */
    /**
     * Handles expired callback
     * @protected
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.handleExpireCallback = /**
     * Handles expired callback
     * @protected
     * @return {?}
     */
    function () {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    };
    BaseReCaptchaComponent.propDecorators = {
        siteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useGlobalDomain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        expire: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BaseReCaptchaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReCaptchaType = {
    InvisibleReCaptcha: 0,
    ReCaptcha2: 1,
};
ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScriptService = /** @class */ (function () {
    function ScriptService(zone) {
        this.zone = zone;
        /**
         * Name of the global google recaptcha script
         */
        this.windowGrecaptcha = 'grecaptcha';
        /**
         * Name of the global callback
         */
        this.windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';
        this.globalDomain = 'recaptcha.net';
        this.defaultDomain = 'google.com';
    }
    /**
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?} onLoad
     * @param {?=} language
     * @return {?}
     */
    ScriptService.prototype.registerCaptchaScript = /**
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?} onLoad
     * @param {?=} language
     * @return {?}
     */
    function (useGlobalDomain, render, onLoad, language) {
        var _this = this;
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run((/**
             * @return {?}
             */
            function () {
                onLoad(window[_this.windowGrecaptcha]);
            }));
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = (/** @type {?} */ (((/**
         * @return {?}
         */
        function () { return _this.zone.run(onLoad.bind(_this, window[_this.windowGrecaptcha])); }))));
        // prepare script elem
        /** @type {?} */
        var scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    };
    /**
     * @return {?}
     */
    ScriptService.prototype.cleanup = /**
     * @return {?}
     */
    function () {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    };
    /**
     * Indicates if google recaptcha script is available and ready to be used
     */
    /**
     * Indicates if google recaptcha script is available and ready to be used
     * @private
     * @return {?}
     */
    ScriptService.prototype.grecaptchaScriptLoaded = /**
     * Indicates if google recaptcha script is available and ready to be used
     * @private
     * @return {?}
     */
    function () {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    };
    /**
     * Gets language param used in script url
     */
    /**
     * Gets language param used in script url
     * @private
     * @param {?=} hl
     * @return {?}
     */
    ScriptService.prototype.getLanguageParam = /**
     * Gets language param used in script url
     * @private
     * @param {?=} hl
     * @return {?}
     */
    function (hl) {
        if (!hl) {
            return '';
        }
        return "&hl=" + hl;
    };
    /**
    * Url to google api script
    */
    /**
     * Url to google api script
     * @private
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?=} language
     * @return {?}
     */
    ScriptService.prototype.getCaptchaScriptUrl = /**
     * Url to google api script
     * @private
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?=} language
     * @return {?}
     */
    function (useGlobalDomain, render, language) {
        /** @type {?} */
        var domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
        // tslint:disable-next-line:max-line-length
        return "https://www." + domain + "/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=" + render + this.getLanguageParam(language);
    };
    ScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return ScriptService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvisibleReCaptchaComponent, _super);
    function InvisibleReCaptchaComponent(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
         * This size representing invisible captcha
         */
        _this.size = 'invisible';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
         * Badge
         */
        _this.badge = 'bottomright';
        _this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.execute = /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    function () {
        var _this = this;
        // execute captcha
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.reCaptchaApi.execute(_this.captchaId); }));
    };
    /**
     * @protected
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = /**
     * @protected
     * @return {?}
     */
    function () {
    };
    /**
    * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleCallback(response); })); }),
            'expired-callback': (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleExpireCallback(); })); }),
            'error-callback': (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleErrorCallback(); })); }),
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size,
            'theme': this.theme
        };
    };
    InvisibleReCaptchaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-invisible-recaptcha',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return InvisibleReCaptchaComponent; })),
                            multi: true,
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    InvisibleReCaptchaComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: ScriptService }
    ]; };
    InvisibleReCaptchaComponent.propDecorators = {
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem', { static: false },] }]
    };
    return InvisibleReCaptchaComponent;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReCaptcha2Component = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ReCaptcha2Component, _super);
    function ReCaptcha2Component(renderer, zone, injector, scriptService) {
        var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.scriptService = scriptService;
        /**
         * Name of the global expire callback
         */
        _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
         * Size
         */
        _this.size = 'normal';
        _this.recaptchaType = ReCaptchaType.ReCaptcha2;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    };
    /**
     * @protected
     * @return {?}
     */
    ReCaptcha2Component.prototype.captchaSpecificSetup = /**
     * @protected
     * @return {?}
     */
    function () {
        this.registerCallbacks();
    };
    /**
     * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    ReCaptcha2Component.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleCallback(response); })); }),
            'expired-callback': (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleExpireCallback(); })); }),
            'error-callback': (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return _this.handleErrorCallback(); })); }),
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    };
    /**
     * Registers global callbacks
    */
    /**
     * Registers global callbacks
     * @private
     * @return {?}
     */
    ReCaptcha2Component.prototype.registerCallbacks = /**
     * Registers global callbacks
     * @private
     * @return {?}
     */
    function () {
        window[this.windowOnErrorCallbackProperty] = _super.prototype.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = _super.prototype.handleExpireCallback.bind(this);
    };
    ReCaptcha2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-recaptcha2',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return ReCaptcha2Component; })),
                            multi: true,
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    ReCaptcha2Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: ScriptService }
    ]; };
    ReCaptcha2Component.propDecorators = {
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem', { static: false },] }]
    };
    return ReCaptcha2Component;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReCaptchaV3Service = /** @class */ (function () {
    function ReCaptchaV3Service(scriptService, zone) {
        this.scriptService = scriptService;
        this.zone = zone;
    }
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?} callback
     * @param {?=} config
     * @return {?}
     */
    ReCaptchaV3Service.prototype.execute = /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?} callback
     * @param {?=} config
     * @return {?}
     */
    function (siteKey, action, callback, config) {
        var _this = this;
        /** @type {?} */
        var useGlobalDomain = config && config.useGlobalDomain ? true : false;
        this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        function (grecaptcha) {
            _this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                grecaptcha.execute(siteKey, {
                    action: action
                }).then((/**
                 * @param {?} token
                 * @return {?}
                 */
                function (token) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return callback(token); }));
                }));
            }));
        }));
    };
    ReCaptchaV3Service.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ReCaptchaV3Service.ctorParameters = function () { return [
        { type: ScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return ReCaptchaV3Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxCaptchaModule = /** @class */ (function () {
    function NgxCaptchaModule() {
    }
    NgxCaptchaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ],
                    providers: [
                        ScriptService,
                        ReCaptchaV3Service
                    ],
                    exports: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ]
                },] }
    ];
    return NgxCaptchaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-captcha.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/authentication/forgot-password/forgot-password.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/authentication/forgot-password/forgot-password.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class=\"popoverTitle\">\n        Forgot Password\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"10\" offset=\"1\">\n      <ion-text class=\"feedback\" >\n        Have you forgotten your password?\n        <br>\n        Enter your email address to get a new one!\n      </ion-text>\n      <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmitGetPassword()\">\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"forgotPasswordForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                  [type]=\"'email'\" [inputMode]=\"'email'\">\n          </app-input-form>\n        </ion-card>\n        <ion-item *ngIf=\"messageReceived\" class=\"invalid-feedback\"> {{ errorMessage }}</ion-item>\n        <ion-item class=\"feedback\" *ngIf=\"forgotEmailSent\">\n          Check your email for further instructions.\n        </ion-item>\n        <ion-button class=\"formButton\" expand=\"block\" type=\"submit\"> Submit </ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/authentication/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/authentication/login/login.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-header>\n    <ion-toolbar color=\"medium\">\n      <ion-title class=\"popoverTitle\">\n        Log In\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"10\" offset=\"1\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmitLogin()\">\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"loginForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                  [type]=\"'email'\" [inputMode]=\"'email'\">\n          </app-input-form>\n        </ion-card>\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"loginForm\" [givenName]=\"'password'\" [text]=\"'Password*'\" [validationMessages]=\"validationMessages.password\"\n                  [type]= \"'password'\" [inputMode]=\"'password'\">\n          </app-input-form>\n        </ion-card>\n        <ion-item *ngIf=\"errorMessage\" class=\"invalid-feedback\"> {{ errorMessage }}\n          <ion-button *ngIf=\"showResendButton\" class=\"greyButton\" fill=\"empty\" slot=\"end\" (click)=\"resendEmail()\">Resend</ion-button>\n          <ion-icon *ngIf=\"showResentMessage\" class=\"checkmark-circle\" slot=\"end\" name=\"checkmark-circle\"></ion-icon>\n          <ion-icon *ngIf=\"!showResentMessage\" class=\"close-circle\" slot=\"end\" name=\"close-circle\"></ion-icon>\n        </ion-item>\n        <ion-button class=\"formButton\" expand=\"block\" type=\"submit\"> Log In </ion-button>\n        <div class=\"feedback\" >\n          <a class=\"cursor-pointer\" (click)=\"presentForgotPopover()\" slot=\"end\" > Forgot your password? </a>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n  <ion-header class=\"removeScrollbarForPopover\">\n    <ion-toolbar color=\"medium\">\n      <ion-title class=\"popoverFooter\">\n        Not a member yet?\n        <a class=\"cursor-pointer\" (click)=\"presentRegistrationPopover()\"> Join now! </a>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/authentication/registration/registration.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/authentication/registration/registration.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-header>\n        <ion-toolbar color=\"light\">\n            <ion-title class=\"popoverTitle\" >\n                Join now!\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmitRegistration()\">\n                <ion-card class=\"formElement\" >\n                    <app-input-form\n                            [inputForm]=\"registrationForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                            [type]=\"'email'\" [inputMode]=\"'email'\">\n                    </app-input-form>\n                </ion-card>\n                <ion-card class=\"formElement\" >\n                    <app-input-form\n                            [inputForm]=\"registrationForm\" [givenName]=\"'password'\" [text]=\"'Password*'\" [validationMessages]=\"validationMessages.password\"\n                            [type]= \"'password'\" [inputMode]=\"'password'\">\n                    </app-input-form>\n                </ion-card>\n                <div *ngIf=\"errorMessage\" class=\"invalid-feedback\"> {{ errorMessage }} </div>\n                <ion-button class=\"formButton\" expand=\"block\" type=\"submit\">Join now</ion-button>\n            </form>\n        </ion-col>\n    </ion-row>\n    <ion-header class=\"removeScrollbarForPopover\">\n        <ion-toolbar color=\"medium\">\n            <ion-title class=\"popoverFooter\">\n                Already a member?\n                <a class=\"cursor-pointer\" (click)=\"presentLoginPopover()\"> Log in </a>\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div margin-horizontal=\"50px\">\n    <app-top-header></app-top-header>\n    <app-navigation-bar class=\"ion-hide-md-down\" ></app-navigation-bar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/logo/logo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/logo/logo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/images/logo.png\">\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/category-menu/category-menu.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/navigation-bar/category-menu/category-menu.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list class=\"subcategoryList\" *ngFor=\"let subcategory of subcategories\">\n  <ion-item class=\"subcategoryListItem\" lines=\"none\" [routerLink]=\"['/subcategory/', subcategory.slug]\" > {{ subcategory.name }} </ion-item>\n</ion-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/navigation-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/navigation-bar/navigation-bar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar (mouseleave)=\"dismissMenu()\">\n        <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button *ngFor=\"let category of categories\" value=\"{{ category.slug }}\" fill=\"clear\" >\n                <ion-label> {{ category.name }}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    <app-category-menu mode=\"md\" [subcategories]=\"currentMenuSubcategories\" *ngIf=\"menuVisible\"></app-category-menu>\n</ion-toolbar>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header-end/top-header-end.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/top-header-end/top-header-end.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ion-float-right\">\n    <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\"\n                (click)=\"presentLoginPopover()\">Login\n    </ion-button>\n    <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"blueButton\" fill=\"empty\"\n                (click)=\"presentRegistrationPopover()\">Join\n    </ion-button>\n    <ion-button *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" size=\"small\"\n                class=\"greyButton ion-hide-md-down\" fill=\"empty\"\n                [routerLink]=\"['/admin']\">Admin\n    </ion-button>\n    <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"greyButton ion-hide-md-down\" fill=\"empty\"\n                [routerLink]=\"['/add-products']\" [routerDirection]=\"'root'\">\n        <ion-icon name=\"add\"></ion-icon>\n        Add\n    </ion-button>\n    <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\"\n                (click)=\"authService.logout()\"> Logout\n    </ion-button>\n    <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"blueButton\" fill=\"empty\"\n                [routerLink]=\"['/profile']\">\n        <ion-icon name=\"person\"></ion-icon>\n    </ion-button>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/top-header.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"1\">\n                <div class=\"ion-hide-lg-up\" position=\"relative\">\n                    <ion-buttons slot=\"start\">\n                        <ion-menu-button menu=\"m1\">\n                        </ion-menu-button>\n                    </ion-buttons>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\" size-sm=\"3\">\n                <span class=\"navigateHome ion-align-items-center\" [routerLink]=\"['/home']\">\n                    <img class=\"headerImg\" src=\"assets/images/logoFont7.png\" >\n                </span>\n            </ion-col>\n            <ion-col class=\"ion-hide-md-down\" size=\"0\" size-md=\"1\" size-lg=\"3\">\n            </ion-col>\n            <ion-col>\n                <app-top-header-end></app-top-header-end>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home-banner/home-banner.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"logo\">\n  <ion-grid class=\"backgroundGradient\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col offset=\"1\" size=\"3\">\n        <app-logo></app-logo>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-text>This is the 2.71828th best event planning platform</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\" offset=\"2\">\n        <ion-searchbar mode=\"md\" class=\"ion-no-padding\" type=\"search\" placeholder=\"Search\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-form/input-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/input-form/input-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [formGroup]= \"inputForm\">\n  <ion-label position=\"floating\"> {{ text }} </ion-label>\n  <ion-input [type]= \"type\" [formControlName] = \"givenName\"  [inputmode] = \"inputMode\" ></ion-input>\n  <ng-container *ngIf=\"isPassword\">\n    <ion-icon *ngIf=\"!showingPassword\" name=\"eye\" slot=\"end\" (click)=\"showPassword(true)\"></ion-icon>\n    <ion-icon *ngIf=\"showingPassword\" name=\"eye-off\" slot=\"end\" (click)=\"showPassword(false)\"></ion-icon>\n  </ng-container>\n  <div>\n    <div *ngFor=\"let validation of validationMessages\">\n      <div class=\"invalid-feedback\" *ngIf=\"inputForm.get(givenName).hasError(validation.type) && (inputForm.get(givenName).dirty || inputForm.get(givenName).touched)\">\n        {{ validation.message + \"\\n\"}}\n      </div>\n    </div>\n  </div>\n</ion-item>"

/***/ }),

/***/ "./src/app/core/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/forgot-password/forgot-password.component */ "./src/app/core/authentication/forgot-password/forgot-password.component.ts");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_6__["NgxCaptchaModule"],
                _shared_input_form_module__WEBPACK_IMPORTED_MODULE_7__["InputFormModule"]
            ],
            exports: [_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/core/authentication/forgot-password/forgot-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/core/authentication/forgot-password/forgot-password.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/authentication/forgot-password/forgot-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/authentication/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");




/**
 * Forgot Password Component. Used by users to reset the password.
 * Component contains a form with an input field for the email and a button.
 * Uses {@link AuthService} to send the reset-request to the backend
 */
var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Assigns two new private variables `formBuilder` and `authService`
     * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
     * @param authService auto injected `AuthService` to handle the backend communication
     */
    function ForgotPasswordComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        /**
         * Message object with strings that appear when the input isn't of the correct form.
         */
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Not a valid address' }
            ]
        };
        /**
         * Variable that is set to `true` when the backend return the reset email was sent to the user
         */
        this.forgotEmailSent = false;
        /**
         * Variable that is set to `true` when the backend request was returned with the error code `500`. Variable is set to show an unsuccessful reset request of the backend.
         */
        this.messageReceived = false;
    }
    /**
     *  Groups the Form and assigns it to {@link #forgotPasswordForm}
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    /**
     * Checks if the form is valid. If it's a valid form makes a backend request with {@link AuthService} and then resets the form.
     *
     * If status from backend request is ok (`200`) the variable `forgotEmailSent`is set to `true`.
     * If the returned status is `500` a message is displayed.
     */
    ForgotPasswordComponent.prototype.onSubmitGetPassword = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        var val = this.forgotPasswordForm.value;
        this.authService.forgotPassword(val.email)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.forgotPasswordForm.reset();
                _this.forgotEmailSent = true;
            }
        }, function (error) {
            if (error.status === 500) {
                _this.messageReceived = true;
                _this.forgotPasswordForm.reset();
                _this.errorMessage = 'Have you entered the correct address?';
            }
            else {
                _this.messageReceived = true;
                _this.forgotPasswordForm.reset();
                _this.errorMessage = error;
            }
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/core/authentication/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/authentication/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/authentication/login/login.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/authentication/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/authentication/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "./src/app/core/authentication/forgot-password/forgot-password.component.ts");







/**
 * Login Component.
 *
 * Displays a login form containing an input field for the email and an input field for the password.
 * When submitted, tries to log in with the {@link AuthService} and if successful dismisses the popover. If it wasn't successful displays an error message.
 */
var LoginComponent = /** @class */ (function () {
    /**
     * Assigns four new variables `formBuilder`, `authService`, `popoverService` and `popoverController`
     * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
     * @param authService auto injected `authService` to handle the backend login communication
     * @param popoverService auto injected `popoverService` to handle the dismission of popovers
     * @param popoverController auto injected `popoverController` to handle the creation of a new popover with the `ForgotPasswordComponent`
     */
    function LoginComponent(formBuilder, authService, popoverService, popoverController) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.popoverController = popoverController;
        /**
         * Message object with strings that appear when the input isn't of the correct form.
         */
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Not a valid address' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
            ]
        };
        /**
         * Set to `true` to display the button `resend email` for the email verification
         */
        this.showResendButton = false;
        /**
         * `showResentMessage` only has an impact if {@link #errorMessage} has a value.
         *
         * Set to `true` to display the message that the verification email was resent.
         *
         * Set to `false` to display the message that there was an error resending the verification email
         */
        this.showResentMessage = false;
    }
    /**
     * Groups the email and password input fields with their Validators and assigns it to {@link #loginForm}
     */
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    /**
     * Calls the {@link AuthService} to resend the verification email. If successul sets the {@link #showResentMessage} to `true` to display the message, that the email was sent.
     * If it wasn't succesful sets the {@link #showResentMessage} to `false` to display the message that the email wasn't sent.
     */
    LoginComponent.prototype.resendEmail = function () {
        var _this = this;
        this.authService.resendEmail()
            .subscribe(function (data) {
            _this.showResentMessage = true;
        }, function (error) {
            _this.showResentMessage = false;
        });
    };
    /**
     * If the form is valid, sends a login request to the backend via the {@link AuthService}.
     * If the login was successful dismisses the popover containing this component.
     * Else sets the {@link #errorMessage} to the returned error (for http status code 401) or to `Login failed!` for other error status codes.
     */
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var val = this.loginForm.value;
        this.authService.login(val.email, val.password)
            .subscribe(function (data) {
            _this.popoverService.dismissPopover();
            _this.loginForm.reset();
        }, function (error) {
            if (error.status === 401 && error.error.message === 'Authentication failed') {
                _this.errorMessage = error.error.message;
            }
            else if (error.status === 401 && error.error.message === 'Email not verified') {
                _this.showResendButton = true;
                _this.errorMessage = error.error.message;
            }
            else {
                _this.errorMessage = 'Login failed';
            }
        });
    };
    /**
     * Creates and presents a popover containing the {@link ForgotPasswordComponent}
     * @param evt the event with which the method was called
     */
    LoginComponent.prototype.presentForgotPopover = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        this.popoverService.dismissPopover();
                        return [4 /*yield*/, this.popoverController.create({
                                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                                translucent: true,
                                backdropDismiss: true,
                                cssClass: 'popover-style'
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Dismisses the popover with data set to `openRegistration`
     */
    LoginComponent.prototype.presentRegistrationPopover = function () {
        this.popoverController.dismiss('openRegistration');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/authentication/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/authentication/registration/registration.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/authentication/registration/registration.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hdXRoZW50aWNhdGlvbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hdXRoZW50aWNhdGlvbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/authentication/registration/registration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/authentication/registration/registration.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");






/**
 * Registration Component.
 * Has a form with two required fields and a button to make a registration request.
 */
var RegistrationComponent = /** @class */ (function () {
    /**
     * Assigns four new variables `formBuilder`, `authService`, `popoverService` and `popoverController`
     * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
     * @param authService auto injected `authService` to handle the backend login communication
     * @param popoverService auto injected `popoverService` to handle the dismission of popovers
     * @param router auto injected `Router` to handle the redirecting to the `registered` page
     */
    function RegistrationComponent(formBuilder, authService, popoverService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.router = router;
        /**
         * Message object with strings that appear when the input isn't of the correct form.
         */
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Not a valid address' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must contain 6 characters' }
            ]
        };
    }
    /**
    * Groups the email and password input fields with their Validators and assigns it to {@link #registrationForm}
    */
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    /**
   * If the form is valid, sends a registration request to the backend via the {@link AuthService}.
   * If the registration was successful dismisses the popover containing this component.
   * Else sets the {@link #errorMessage} to the returned error (for http status code 409) or to `Registration failed!` for other error status codes.
   */
    RegistrationComponent.prototype.onSubmitRegistration = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            return;
        }
        var val = this.registrationForm.value;
        this.authService.register(val.email, val.password)
            .subscribe(function (data) {
            _this.registrationForm.reset();
            _this.popoverService.dismissPopover();
            _this.router.navigate(['/registered']);
        }, function (error) {
            _this.registrationForm.reset();
            if (error.status === 409) {
                _this.errorMessage = error.error.message;
            }
            else {
                _this.errorMessage = 'Registration failed';
            }
        });
    };
    /**
    * Dismisses the popover with data set to `openLogin`
    */
    RegistrationComponent.prototype.presentLoginPopover = function () {
        this.popoverService.dismissPopover('openLogin');
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/core/authentication/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/header.module.ts":
/*!***************************************!*\
  !*** ./src/app/core/header.module.ts ***!
  \***************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.module */ "./src/app/core/auth.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/top-header/top-header.component */ "./src/app/core/header/top-header/top-header.component.ts");
/* harmony import */ var _header_top_header_top_header_end_top_header_end_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/top-header/top-header-end/top-header-end.component */ "./src/app/core/header/top-header/top-header-end/top-header-end.component.ts");
/* harmony import */ var _header_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/navigation-bar/navigation-bar.component */ "./src/app/core/header/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _header_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/logo/logo.component */ "./src/app/core/header/logo/logo.component.ts");
/* harmony import */ var _pages_home_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/home/home-banner/home-banner.component */ "./src/app/pages/home/home-banner/home-banner.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authentication/forgot-password/forgot-password.component */ "./src/app/core/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _header_navigation_bar_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/navigation-bar/category-menu/category-menu.component */ "./src/app/core/header/navigation-bar/category-menu/category-menu.component.ts");


















var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_9__["TopHeaderComponent"], _header_top_header_top_header_end_top_header_end_component__WEBPACK_IMPORTED_MODULE_10__["TopHeaderEndComponent"],
                _header_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"], _header_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__["LogoComponent"], _pages_home_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_13__["HomeBannerComponent"], _header_navigation_bar_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_17__["CategoryMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_input_form_module__WEBPACK_IMPORTED_MODULE_6__["InputFormModule"],
                _auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
                    { path: 'registration', component: _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"] },
                    { path: 'forgotPassword', component: _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"] }
                ])
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_9__["TopHeaderComponent"], _pages_home_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_13__["HomeBannerComponent"], _header_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"], _header_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__["LogoComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Header Component with navigation bar and logo
 */
var HeaderComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/header/logo/logo.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/header/logo/logo.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/header/logo/logo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/header/logo/logo.component.ts ***!
  \****************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * The moln logo
 */
var LogoComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function LogoComponent() {
    }
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/core/header/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/core/header/navigation-bar/category-menu/category-menu.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/core/header/navigation-bar/category-menu/category-menu.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subcategoryListItem {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL25hdmlnYXRpb24tYmFyL2NhdGVnb3J5LW1lbnUvY2F0ZWdvcnktbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvbmF2aWdhdGlvbi1iYXIvY2F0ZWdvcnktbWVudS9jYXRlZ29yeS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvbmF2aWdhdGlvbi1iYXIvY2F0ZWdvcnktbWVudS9jYXRlZ29yeS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmNhdGVnb3J5TGlzdEl0ZW0ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufSIsIi5zdWJjYXRlZ29yeUxpc3RJdGVtIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/header/navigation-bar/category-menu/category-menu.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/header/navigation-bar/category-menu/category-menu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoryMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMenuComponent", function() { return CategoryMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * The dropdown menu of the {@link NavigationBarComponent}
 */
var CategoryMenuComponent = /** @class */ (function () {
    /**
     * Auto injected Service
     * @param categoryService auto injected `CategoryService`
     */
    function CategoryMenuComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CategoryMenuComponent.prototype, "subcategories", void 0);
    CategoryMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-menu',
            template: __webpack_require__(/*! raw-loader!./category-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/category-menu/category-menu.component.html"),
            styles: [__webpack_require__(/*! ./category-menu.component.scss */ "./src/app/core/header/navigation-bar/category-menu/category-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryMenuComponent);
    return CategoryMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/header/navigation-bar/navigation-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/header/navigation-bar/navigation-bar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/navigation-bar/navigation-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/header/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");



/**
 * The navigation bar with the categories to select from. Opens a dropdown when clicked on with
 * the respective {@link CategoryMenuComponent subcategories as a dropdown list}
 */
var NavigationBarComponent = /** @class */ (function () {
    /**
     * Assign a new private variable with the injected service
     * @param categoryService auto injected `CategoryService` to get all categories from the backend
     */
    function NavigationBarComponent(categoryService) {
        this.categoryService = categoryService;
        /**
         * An array to store all categories
         */
        this.categories = [];
        /**
         * Boolean handling if the dropdown menu should be visible.
         * Set it to `true` to show the dropdown menu
         */
        this.menuVisible = false;
    }
    /**
     * Fetch all categories from the backend via the {@link CategoryService}.
     * Store the returned categories in the {@link #categories} variable.
     */
    NavigationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            // @ts-ignore
            _this.categories = data;
        }, function (error) {
            console.log(error);
        });
    };
    /**
     * Method that gets called when the selected category changed.
     * If a new category is selected then:
     *  - Updates the {@link #currentMenuSubcategories subcategories array} with the respective subcategoryies of the new category
     *  - Sets the {@link #menuVisible} to `true` to show the dropdown menu
     * @param ev The `ionChange` event Object
     */
    NavigationBarComponent.prototype.segmentChanged = function (ev) {
        if (ev.target.value === '') {
            return;
        }
        this.currentEvent = ev;
        this.currentMenuSubcategories = this.categories.filter(function (cat) { return cat.slug === ev.detail.value; })[0].subcategories
            .sort(function (a, b) { return a.name.localeCompare(b.name); });
        this.menuVisible = true;
    };
    /**
     * Dismisses the dropdown menu by setting {@link #menuVisible} to `false`.
     *
     * Resets the selected segment item so that none is selected.
     *
     * Empties the {@link #currentMenuSubcategories subcategories array}
     */
    NavigationBarComponent.prototype.dismissMenu = function () {
        if (this.menuVisible === false) {
            return;
        }
        this.currentEvent.target.value = '';
        this.menuVisible = false;
        this.currentMenuSubcategories = [];
    };
    NavigationBarComponent.ctorParameters = function () { return [
        { type: _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/core/header/navigation-bar/navigation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/core/header/top-header/top-header-end/top-header-end.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header-end/top-header-end.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvdG9wLWhlYWRlci1lbmQvdG9wLWhlYWRlci1lbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/header/top-header/top-header-end/top-header-end.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header-end/top-header-end.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TopHeaderEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderEndComponent", function() { return TopHeaderEndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");






/**
 * Component containing the Buttons in the upper right corner.
 * Contains:
 *  - `Login` Button
 *  - `Join` Button to register
 *  - `Admin` Button to get to the admin realm
 *  - `Logout` Button
 *  - `Profile` Button to get to the profile page
 */
var TopHeaderEndComponent = /** @class */ (function () {
    /**
     * Assign new private variables `popoverController` and `authService`
     * @param popoverController Auto injected Popovercontroller
     * @param authService Auto injected AuthService
     */
    function TopHeaderEndComponent(popoverController, authService) {
        this.popoverController = popoverController;
        this.authService = authService;
    }
    /**
     * Creates and displays a Popover via the `PopoverController`
     * with the {@link LoginComponent} as the component.
     * When dismissed with the {@link LoginComponent.html#presentRegistrationPopover presentRegistrationPopover method} dismisses the
     * current {@link LoginComponent} popover and opens the `registration Popover` via {@link #presentRegistrationPopover}
     */
    TopHeaderEndComponent.prototype.presentLoginPopover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                            translucent: true,
                            backdropDismiss: true,
                            cssClass: 'popover-style'
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            if (data.data === 'openRegistration') {
                                _this.presentRegistrationPopover();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Creates and displays a Popover via the `PopoverController`
    * with the {@link RegistrationComponent} as the component.
    * When dismissed with the {@link RegistrationComponent.html#presentLoginPopover presentLoginPopover method} dismisses the
    * current {@link RegistrationComponent} popover and opens the `Login Popover` via {@link #presentLoginPopover}
    */
    TopHeaderEndComponent.prototype.presentRegistrationPopover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                            translucent: true,
                            backdropDismiss: true,
                            cssClass: 'popover-style'
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            if (data.data === 'openLogin') {
                                _this.presentLoginPopover();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TopHeaderEndComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    TopHeaderEndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-header-end',
            template: __webpack_require__(/*! raw-loader!./top-header-end.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header-end/top-header-end.component.html"),
            styles: [__webpack_require__(/*! ./top-header-end.component.scss */ "./src/app/core/header/top-header/top-header-end/top-header-end.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], TopHeaderEndComponent);
    return TopHeaderEndComponent;
}());



/***/ }),

/***/ "./src/app/core/header/top-header/top-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divTopHeader {\n  height: 52px;\n  padding-top: 3px;\n}\n\n.imgSize {\n  min-width: 10px;\n}\n\n.headerImg {\n  padding: 0px 20px;\n}\n\n.navigateHome {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvdG9wLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdlRvcEhlYWRlciB7XG4gIGhlaWdodDogNTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmltZ1NpemV7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cblxuLmhlYWRlckltZyB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ubmF2aWdhdGVIb21lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmRpdlRvcEhlYWRlciB7XG4gIGhlaWdodDogNTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmltZ1NpemUge1xuICBtaW4td2lkdGg6IDEwcHg7XG59XG5cbi5oZWFkZXJJbWcge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLm5hdmlnYXRlSG9tZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/header/top-header/top-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header.component.ts ***!
  \****************************************************************/
/*! exports provided: TopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderComponent", function() { return TopHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Header Component.
 */
var TopHeaderComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function TopHeaderComponent() {
    }
    TopHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-header',
            template: __webpack_require__(/*! raw-loader!./top-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header.component.html"),
            styles: [__webpack_require__(/*! ./top-header.component.scss */ "./src/app/core/header/top-header/top-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PopoverService = /** @class */ (function () {
    function PopoverService(popoverController, componentFactoryResolver) {
        this.popoverController = popoverController;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    PopoverService.prototype.createPopover = function (comp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: comp,
                            translucent: true,
                            backdropDismiss: true,
                            cssClass: 'popover-style'
                        })];
                    case 1:
                        popover = _a.sent();
                        this.currentPopover = popover;
                        return [2 /*return*/, popover];
                }
            });
        });
    };
    PopoverService.prototype.dismissPopover = function (data) {
        if (data)
            return this.popoverController.dismiss(data);
        this.popoverController.dismiss();
    };
    PopoverService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], PopoverService);
    return PopoverService;
}());



/***/ }),

/***/ "./src/app/pages/home/home-banner/home-banner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/home-banner/home-banner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 30px;\n  color: white;\n}\n\nion-text {\n  color: white;\n}\n\n.backgroundGradient {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(var(--ion-color-secondary)), to(var(--ion-color-primary)));\n  background-image: linear-gradient(var(--ion-color-secondary), var(--ion-color-primary));\n}\n\nion-searchbar {\n  box-shadow: 1px 1px 5px 2px #61f2ff;\n  padding: 0px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1iYW5uZXIvaG9tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1iYW5uZXIvaG9tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUlBQUE7RUFBQSx1RkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWJhbm5lci9ob21lLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10ZXh0e1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrZ3JvdW5kR3JhZGllbnR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMnB4ICM2MWYyZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiIsImlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tncm91bmRHcmFkaWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCAjNjFmMmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home-banner/home-banner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/home-banner/home-banner.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerComponent", function() { return HomeBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeBannerComponent = /** @class */ (function () {
    function HomeBannerComponent() {
    }
    HomeBannerComponent.prototype.ngOnInit = function () { };
    HomeBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-banner',
            template: __webpack_require__(/*! raw-loader!./home-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html"),
            styles: [__webpack_require__(/*! ./home-banner.component.scss */ "./src/app/pages/home/home-banner/home-banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeBannerComponent);
    return HomeBannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input-form/input-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/input-form/input-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWZvcm0vaW5wdXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/input-form/input-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/input-form/input-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormComponent", function() { return InputFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputFormComponent = /** @class */ (function () {
    function InputFormComponent() {
        this.type = 'text';
        this.inputMode = 'text';
        this.isPassword = false;
        this.showingPassword = false;
    }
    InputFormComponent.prototype.ngOnInit = function () {
        this.isPassword = this.type === 'password';
    };
    InputFormComponent.prototype.showPassword = function (bool) {
        this.showingPassword = bool;
        this.type = this.showingPassword ? 'text' : 'password';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('validationMessages'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFormComponent.prototype, "validationMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], InputFormComponent.prototype, "inputForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFormComponent.prototype, "givenName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFormComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFormComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFormComponent.prototype, "inputMode", void 0);
    InputFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-form',
            template: __webpack_require__(/*! raw-loader!./input-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-form/input-form.component.html"),
            styles: [__webpack_require__(/*! ./input-form.component.scss */ "./src/app/shared/components/input-form/input-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputFormComponent);
    return InputFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/input-form.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/input-form.module.ts ***!
  \*********************************************/
/*! exports provided: InputFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormModule", function() { return InputFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/input-form/input-form.component */ "./src/app/shared/components/input-form/input-form.component.ts");







var InputFormModule = /** @class */ (function () {
    function InputFormModule() {
    }
    InputFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_shared_components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__["InputFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_shared_components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__["InputFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        })
    ], InputFormModule);
    return InputFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~764bfbbb-es5.js.map