(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb"],{

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

module.exports = "<ion-toolbar (mouseleave)=\"dismissMenu()\">\n        <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button *ngFor=\"let category of categories\" value=\"{{ category.slug }}\" fill=\"clear\" >\n                <ion-label> {{ category.name }}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    <app-category-menu [subcategories]=\"currentMenuSubcategories\" *ngIf=\"menuVisible\"></app-category-menu>\n</ion-toolbar>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/header-buttons.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/header-buttons/header-buttons.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"ion-no-margin ion-no-padding\" *ngIf=\"authService.isLoggedIn()\" style=\"text-align:right; overflow:hidden; justify-content: flex-end;\">\n    <ion-row style=\"justify-content: flex-end;\">\n          \n        <button *ngIf=\"authService.isLoggedIn()\"  (click)=\"showNotificationsPopover($event)\"\n            (deleteEvent)=\"checkForNewNotifications()\" class=\"roundButton\">\n            <ion-icon name=\"notifications\"></ion-icon>\n        </button>\n        <ion-badge class=\"notificationsBadge\" *ngIf=\"unreadCount != 0\" color=\"danger\" slot=\"end\">\n            {{ unreadCount }}</ion-badge>\n     \n      \n            <button *ngIf=\"authService.isLoggedIn()\" style=\"margin-left:5%\" (click)=\"showProfilePopover($event)\" size=\"small\"\n                class=\"roundButton\" id=\"profile\">\n                <ion-icon name=\"person\"></ion-icon>\n            </button>\n      \n    </ion-row>\n</ion-grid>\n\n\n<div>\n    <!-- Buttons to be displayed when the user is not logged in -->\n    <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\"\n        (click)=\"presentLoginPopover()\">Login\n    </ion-button>\n    <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"blueButton\" fill=\"empty\"\n        (click)=\"presentRegistrationPopover()\">Join\n    </ion-button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/top-header.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"1\" class=\"ion-hide-md-up\">\n                <div class=\"ion-hide-lg-up\" style=\"display:flex; justify-content: center; align-content: center; padding:0;\">\n                    <ion-buttons slot=\"start\">\n                        <ion-menu-button menu=\"m1\">\n                        </ion-menu-button>\n                    </ion-buttons>\n                </div>\n            </ion-col>\n            <ion-col size=\"8\" size-md=\"10\" style=\"display:flex; justify-content: center; align-content: center; padding:0;\" [routerLink]=\"['/home']\">\n                    <img class=\"headerImg\" style=\"cursor:pointer; margin:auto; text-align:center\" src=\"assets/images/logoFont7.png\" >\n            </ion-col>\n            <ion-col size=\"3\" size-md=\"2\" class=\"last-col\" style=\"text-align: right; align-content:center; justify-content: flex-end;\" >\n                <app-header-buttons></app-header-buttons>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home-banner/home-banner.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"logo\">\n    <img src=\"../../../../assets/images/header3.png\">\n    <ion-searchbar id=\"searchbar\" mode=\"md\" class=\"ion-no-padding\" type=\"search\" placeholder=\"Search\" debounce=\"500\" (ionBlur)=\"closeSearchResultPopover()\" (ionFocus)=\"openSearchResultPopover()\" (ionChange)=\"onSearchbarChange($event)\"></ion-searchbar>\n</ion-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/search-result/search-result.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home-banner/search-result/search-result.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<ion-list class=\"list ion-no-margin\">\n\t\t<ion-item *ngFor=\"let result of searchResults\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>{{ result.obj.name }}</ion-col><ion-col> {{ getAppOfResult(result.app) }} </ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n\t<div>Found {{ amountOfResults }} Elements</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-form/input-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/input-form/input-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item *ngIf=\"inputForm\" [formGroup]= \"inputForm\">\n  <ion-label position=\"floating\"> {{ text }} </ion-label>\n  <ion-input [type]= \"type\" [formControlName] = \"givenName\"  [inputmode] = \"inputMode\" ></ion-input>\n  <ng-container *ngIf=\"isPassword\">\n    <ion-icon *ngIf=\"!showingPassword\" name=\"eye\" slot=\"end\" (click)=\"showPassword(true)\"></ion-icon>\n    <ion-icon *ngIf=\"showingPassword\" name=\"eye-off\" slot=\"end\" (click)=\"showPassword(false)\"></ion-icon>\n  </ng-container>\n  <div>\n    <div class=\"pending feedback\" *ngIf=\"async && inputForm.get(givenName).pending\"><ion-icon class=\"icon\" name=\"sync\"></ion-icon> {{ async.pendingText }}</div>\n    <div class=\"valid feedback\" *ngIf=\"async && inputForm.get(givenName).valid\"> {{ async.validText }} </div>\n    <div *ngFor=\"let validation of validationMessages\">\n      <div class=\"invalid-feedback\" *ngIf=\"inputForm.get(givenName).hasError(validation.type) && (inputForm.get(givenName).dirty || inputForm.get(givenName).touched)\">\n        {{ validation.message + \"\\n\"}}\n      </div>\n    </div>\n  </div>\n</ion-item>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





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
    function ForgotPasswordComponent(formBuilder, authService, popoverController) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverController = popoverController;
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
                _this.dismissPopover();
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
    ForgotPasswordComponent.prototype.dismissPopover = function () {
        var _this = this;
        setTimeout(function () {
            _this.popoverController.dismiss();
        }, 10000);
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/core/authentication/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








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
    function LoginComponent(formBuilder, authService, popoverService, popoverController, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.popoverController = popoverController;
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
            _this.router.navigate(['/home']);
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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
/* harmony import */ var _header_top_header_header_buttons_header_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/top-header/header-buttons/header-buttons.component */ "./src/app/core/header/top-header/header-buttons/header-buttons.component.ts");
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
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_9__["TopHeaderComponent"], _header_top_header_header_buttons_header_buttons_component__WEBPACK_IMPORTED_MODULE_10__["HeaderButtonsComponent"],
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
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _header_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_9__["TopHeaderComponent"], _header_top_header_header_buttons_header_buttons_component__WEBPACK_IMPORTED_MODULE_10__["HeaderButtonsComponent"], _pages_home_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_13__["HomeBannerComponent"], _header_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"], _header_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__["LogoComponent"]]
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

/***/ "./src/app/core/header/top-header/header-buttons/header-buttons.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/header-buttons.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold;\n}\n\n.profile-popover {\n  background: none !important;\n}\n\n.popover-backdrop.active {\n  background: none !important;\n}\n\n.notificationsBadge {\n  margin-left: -19px;\n  margin-bottom: 3px;\n}\n\n.responsiveButton {\n  width: auto;\n  min-width: 1px !important;\n  min-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 0.5em;\n}\n\n.roundButton {\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  vertical-align: middle;\n  display: -webkit-box;\n  display: flex;\n  width: 1.4em;\n  height: 1.4em;\n  color: var(--ion-color-primary);\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-primary);\n  font-size: 1.4em;\n}\n\n.roundButton:focus {\n  background-color: white;\n  box-shadow: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  vertical-align: middle;\n  display: -webkit-box;\n  display: flex;\n  width: 1.4em;\n  height: 1.4em;\n  color: var(--ion-color-primary);\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-primary);\n  font-size: 1.4em;\n  text-decoration: none;\n}\n\n.roundButton:visited {\n  box-shadow: none;\n  text-decoration: none;\n  background-color: white;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  vertical-align: middle;\n  display: -webkit-box;\n  display: flex;\n  width: 1.4em;\n  height: 1.4em;\n  color: var(--ion-color-primary);\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-primary);\n  font-size: 1.4em;\n}\n\n.normalButton {\n  text-transform: uppercase;\n  background-color: white;\n  padding: 0.3em 1em;\n  text-decoration: none;\n  color: var(--ion-color-primary);\n  border: solid 1.2px var(--ion-color-primary);\n  border-radius: 3px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  font-size: 0.4em;\n  min-width: 10px !important;\n  min-height: 10px;\n}\n\n.normalButton:hover {\n  background: var(--ion-color-primary);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2ZpbGUtcG9wb3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvcG92ZXItYmFja2Ryb3AuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uc0JhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5yZXNwb25zaXZlQnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6MC41ZW07XG59XG5cbi5yb3VuZEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOjEuNGVtO1xuICBoZWlnaHQ6MS40ZW07XG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6MS40ZW07XG59XG5cbi5yb3VuZEJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJveC1zaGFkb3c6bm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6MS40ZW07XG4gIGhlaWdodDoxLjRlbTtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZToxLjRlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm91bmRCdXR0b246dmlzaXRlZCB7XG4gIGJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDoxLjRlbTtcbiAgaGVpZ2h0OjEuNGVtO1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOjEuNGVtO1xufVxuXG4ubm9ybWFsQnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzogMC4zZW0gMWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlcjogc29saWQgMS4ycHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IC40cztcbiAgZm9udC1zaXplOjAuNGVtO1xuICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTBweDtcbn1cblxuLm5vcm1hbEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufSIsIi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZS1wb3BvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9wb3Zlci1iYWNrZHJvcC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpZmljYXRpb25zQmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLnJlc3BvbnNpdmVCdXR0b24ge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi5yb3VuZEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMS40ZW07XG4gIGhlaWdodDogMS40ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG4ucm91bmRCdXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEuNGVtO1xuICBoZWlnaHQ6IDEuNGVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm91bmRCdXR0b246dmlzaXRlZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxLjRlbTtcbiAgaGVpZ2h0OiAxLjRlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5ub3JtYWxCdXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4zZW0gMWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlcjogc29saWQgMS4ycHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGZvbnQtc2l6ZTogMC40ZW07XG4gIG1pbi13aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xufVxuXG4ubm9ybWFsQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/header/top-header/header-buttons/header-buttons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/header/top-header/header-buttons/header-buttons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HeaderButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButtonsComponent", function() { return HeaderButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-popover/profile-popover.component */ "./src/app/core/header/top-header/header-buttons/profile-popover/profile-popover.component.ts");
/* harmony import */ var src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/notificationService/notification.service */ "./src/app/core/services/notificationService/notification.service.ts");
/* harmony import */ var src_app_core_header_top_header_header_buttons_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/header/top-header/header-buttons/notifications/notifications.component */ "./src/app/core/header/top-header/header-buttons/notifications/notifications.component.ts");









/**
 * Component containing the Buttons in the upper right corner.
 * Contains:
 *  - `Login` Button
 *  - `Join` Button to register
 *  - `Admin` Button to get to the admin realm
 *  - `Logout` Button
 *  - `Profile` Button to get to the profile page
 */
var HeaderButtonsComponent = /** @class */ (function () {
    /**
     * Assign new private variables `popoverController` and `authService`
     * @param popoverController Auto injected Popovercontroller
     * @param authService Auto injected AuthService
     */
    function HeaderButtonsComponent(popoverController, authService, notificationService) {
        this.popoverController = popoverController;
        this.authService = authService;
        this.notificationService = notificationService;
        this.unreadCount = 0;
        this.notifications = [];
    }
    HeaderButtonsComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn())
            this.checkForNewNotifications();
    };
    HeaderButtonsComponent.prototype.checkForNewNotifications = function () {
        var _this = this;
        this.notificationService.getSingleUsersNotifications().subscribe(function (data) {
            _this.unreadCount = data.unread;
            _this.notifications = data.notifications;
        });
    };
    /**
     * Creates and displays a Popover via the `PopoverController`
     * with the {@link LoginComponent} as the component.
     * When dismissed with the {@link LoginComponent.html#presentRegistrationPopover presentRegistrationPopover method} dismisses the
     * current {@link LoginComponent} popover and opens the `registration Popover` via {@link #presentRegistrationPopover}
     */
    HeaderButtonsComponent.prototype.presentLoginPopover = function () {
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
    HeaderButtonsComponent.prototype.presentRegistrationPopover = function () {
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
    HeaderButtonsComponent.prototype.showProfilePopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePopoverComponent"],
                            event: ev,
                            backdropDismiss: true,
                            cssClass: 'profile-popover'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderButtonsComponent.prototype.showNotificationsPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_core_header_top_header_header_buttons_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
                            componentProps: { notifications: this.notifications },
                            event: ev,
                            cssClass: 'notifications-popover'
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function () {
                            console.log('test');
                            _this.checkForNewNotifications();
                            console.log(_this.notifications);
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderButtonsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    HeaderButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-buttons',
            template: __webpack_require__(/*! raw-loader!./header-buttons.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/header-buttons/header-buttons.component.html"),
            styles: [__webpack_require__(/*! ./header-buttons.component.scss */ "./src/app/core/header/top-header/header-buttons/header-buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_app_core_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_notificationService_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], HeaderButtonsComponent);
    return HeaderButtonsComponent;
}());



/***/ }),

/***/ "./src/app/core/header/top-header/top-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divTopHeader {\n  height: 52px;\n  padding-top: 3px;\n}\n\n.imgSize {\n  min-width: 10px;\n}\n\n.headerImg {\n  padding: 0px 20px;\n}\n\n.navigateHome {\n  cursor: pointer;\n}\n\n.last-col {\n  width: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvdG9wLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdlRvcEhlYWRlciB7XG4gIGhlaWdodDogNTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmltZ1NpemUge1xuICBtaW4td2lkdGg6IDEwcHg7XG59XG5cbi5oZWFkZXJJbWcge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLm5hdmlnYXRlSG9tZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhc3QtY29sIHtcbiAgd2lkdGg6IDElO1xufVxuXG4iLCIuZGl2VG9wSGVhZGVyIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4uaW1nU2l6ZSB7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cblxuLmhlYWRlckltZyB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ubmF2aWdhdGVIb21lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFzdC1jb2wge1xuICB3aWR0aDogMSU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");




var ProductService = /** @class */ (function () {
    function ProductService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.productsEndpoint = 'https://moln-api.herokuapp.com/product';
        this.reviewEndpoint = 'https://moln-api.herokuapp.com/review';
    }
    ProductService.prototype.getAllProducts = function () {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint, { headers: headers });
    };
    ProductService.prototype.getProductsById = function (id) {
        var _this = this;
        var products = [];
        return new Promise(function (resolve, reject) {
            _this.getAllProducts().subscribe(function (data) {
                // filter allProducts so only the verified products of the respective category are presented
                // @ts-ignore
                products = data.filter(function (prod) { return prod.category._id === id; }).filter(function (prod) { return prod.verified; });
                resolve(products);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.getSingleProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint + ("/" + productId), { headers: headers });
    };
    ProductService.prototype.addNewProduct = function (name, category, price) {
        return this.httpClient.post(this.productsEndpoint + '/add', {
            name: name,
            category: category,
            price: price
        });
    };
    ProductService.prototype.deleteProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.productsEndpoint + ("/" + productId), { headers: headers });
    };
    ProductService.prototype.updateProduct = function (productId, body, img) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        var formData = this.createFormData(body, img);
        return this.httpClient.patch(this.productsEndpoint + ("/" + productId), formData, { headers: headers });
    };
    ProductService.prototype.verifyProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.productsEndpoint + ("/" + productId), {
            verified: true
        }, {
            headers: headers
        });
    };
    ProductService.prototype.reviseProduct = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.patch(this.productsEndpoint + ("/" + productId), {
            toRevise: true
        }, {
            headers: headers
        });
    };
    ProductService.prototype.addProduct = function (val, img) {
        var formData = this.createFormData(val, img);
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        return this.httpClient.post(this.productsEndpoint, formData, { headers: headers });
    };
    ProductService.prototype.getProductsByUserId = function (userId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint + ("/user/" + userId), {
            headers: headers
        });
    };
    ProductService.prototype.addReview = function (body) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.post(this.reviewEndpoint + '/add', body, {
            headers: headers
        });
    };
    ProductService.prototype.hasBought = function (productId) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.productsEndpoint + '/hasBought/' + ("" + productId), { headers: headers });
    };
    // helper functions to create formData and header
    ProductService.prototype.createFormData = function (body, img) {
        var formData = new FormData();
        Object.keys(body).forEach(function (key) {
            formData.append(key, body[key]);
        });
        formData.append('image', img);
        return formData;
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/pages/home/home-banner/home-banner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/home-banner/home-banner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  padding: 0px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 80%;\n}\n@media (max-width: 768px) {\n  ion-searchbar {\n    top: 60%;\n  }\n}\n@media (min-width: 768px) {\n  ion-searchbar {\n    top: 70%;\n  }\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1iYW5uZXIvaG9tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1iYW5uZXIvaG9tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxVQUFBO0FDQ0Y7QURBRTtFQVJGO0lBU0ksUUFBQTtFQ0dGO0FBQ0Y7QURGRTtFQVhGO0lBWUksUUFBQTtFQ0tGO0FBQ0Y7QURGQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtYmFubmVyL2hvbWUtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhcntcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHRvcDogNjAlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHRvcDogNzAlO1xuICB9XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4iLCJpb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgdG9wOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICB0b3A6IDcwJTtcbiAgfVxufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

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
/* harmony import */ var src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");
/* harmony import */ var src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/productService/product.service */ "./src/app/core/services/productService/product.service.ts");
/* harmony import */ var src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/progressIndicatorService/progress-indicator.service */ "./src/app/core/services/progressIndicatorService/progress-indicator.service.ts");
/* harmony import */ var src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/filterAndSearchService/filter-and-search.service */ "./src/app/core/services/filterAndSearchService/filter-and-search.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/pages/home/home-banner/search-result/search-result.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var HomeBannerComponent = /** @class */ (function () {
    function HomeBannerComponent(categoryService, productService, progressIndicatorService, filterAndSearchService, popoverController) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.progressIndicatorService = progressIndicatorService;
        this.filterAndSearchService = filterAndSearchService;
        this.popoverController = popoverController;
        this.searchResults = { popover: undefined, resultsSubject: new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](new Set()) };
        this.categories = [];
        this.products = [];
        this.lastPulled = new Map();
        this.popoverLock = false;
    }
    HomeBannerComponent.prototype.ngOnInit = function () {
        this.updateCategoriesAndProducts();
    };
    HomeBannerComponent.prototype.onSearchbarChange = function (evt) {
        var value = evt.target.value;
        var allSubcategories = [];
        if (this.categories) {
            this.categories.forEach(function (cat) {
                if (cat.subcategories && cat.subcategories.length) {
                    allSubcategories = allSubcategories.concat(cat.subcategories);
                }
            });
        }
        var searchableArray = allSubcategories.slice();
        if (this.products) {
            searchableArray.push.apply(searchableArray, this.products);
        }
        if (searchableArray.length > 0) {
            var searchResults = this.filterAndSearchService.searchUnique(searchableArray, value, undefined, false, ['id', '_id', 'toRevise', 'verified', 'image']);
            this.searchResults.resultsSubject.next(searchResults);
        }
    };
    HomeBannerComponent.prototype.updateCategoriesAndProducts = function () {
        if (this.categories.length === 0 || (new Date().getTime() - this.lastPulled.get(this.categories).getTime()) > 45000) {
            this.updateCategories();
        }
        if (this.products.length === 0 || (new Date().getTime() - this.lastPulled.get(this.products).getTime()) > 45000) {
            this.updateProducts();
        }
    };
    HomeBannerComponent.prototype.updateCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
            _this.lastPulled.set(_this.categories, new Date());
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast(err.error.message, 'danger');
        });
    };
    HomeBannerComponent.prototype.updateProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (data) {
            _this.products = data;
            _this.lastPulled.set(_this.products, new Date());
        }, function (err) {
            console.log(err);
            _this.progressIndicatorService.presentToast(err.error.message, 'danger');
        });
    };
    HomeBannerComponent.prototype.openSearchResultPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var evt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /*const popoverElement = await this.popoverController.create({
                            component: SearchResultComponent,
                            translucent: true,
                            cssClass: 'results',
                            event: ev,
                            componentProps: {
                                searchResults: this.searchResults
                            }
                        });
                
                        this.searchResults.popover = popoverElement;
                        return await popoverElement.present();*/
                        if (this.searchResults.popover) {
                            return [2 /*return*/];
                        }
                        this.popoverLock = true;
                        return [4 /*yield*/, this.presentPopover(ev)];
                    case 1:
                        _a.sent();
                        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').addEventListener('scroll', function () {
                            _this.modifyMargin();
                        });
                        document.getElementsByClassName('popover-content')[0].style = 'top: 5px; left: 0px; width: 100%, height: 100%';
                        evt = { target: { value: undefined } };
                        evt.target.value = document.getElementById('searchbar').value;
                        this.onSearchbarChange(evt);
                        document.getElementById('searchbar').setFocus();
                        this.popoverLock = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeBannerComponent.prototype.closeSearchResultPopover = function () {
        var _this = this;
        if (this.popoverLock) {
            return;
        }
        document.querySelectorAll('ion-content')[1].shadowRoot.querySelector('main').removeEventListener('scroll', function () {
            _this.modifyMargin();
        });
        this.popoverController.dismiss(this.searchResults.popover.id);
        this.searchResults.popover = undefined;
    };
    HomeBannerComponent.prototype.modifyMargin = function () {
        if (!this.searchResults.popover) {
            return;
        }
        var searchbar = document.getElementById('searchbar');
        this.searchResults.popover.style.marginTop = searchbar.getBoundingClientRect().bottom + 'px';
    };
    HomeBannerComponent.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popoverElement, searchbar;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"],
                            translucent: true,
                            cssClass: 'results',
                            event: ev,
                            backdropDismiss: false,
                            componentProps: {
                                searchResults: this.searchResults
                            }
                        })];
                    case 1:
                        popoverElement = _a.sent();
                        searchbar = document.getElementById('searchbar');
                        popoverElement.style.marginTop = searchbar.getBoundingClientRect().bottom + 'px';
                        this.searchResults.popover = popoverElement;
                        return [4 /*yield*/, popoverElement.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeBannerComponent.ctorParameters = function () { return [
        { type: src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"] },
        { type: src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
    ]; };
    HomeBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-banner',
            template: __webpack_require__(/*! raw-loader!./home-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html"),
            styles: [__webpack_require__(/*! ./home-banner.component.scss */ "./src/app/pages/home/home-banner/home-banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], src_app_core_services_productService_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_core_services_progressIndicatorService_progress_indicator_service__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorService"], src_app_core_services_filterAndSearchService_filter_and_search_service__WEBPACK_IMPORTED_MODULE_5__["FilterAndSearchService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]])
    ], HomeBannerComponent);
    return HomeBannerComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-banner/search-result/search-result.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/home-banner/search-result/search-result.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  border-bottom: 1px solid black;\n  max-height: 90%;\n  overflow: auto;\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: end;\n          justify-content: end;\n  max-height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1iYW5uZXIvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtYmFubmVyL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtYmFubmVyL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home-banner/search-result/search-result.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/home-banner/search-result/search-result.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(navParams) {
        this.navParams = navParams;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subject = this.navParams.data.searchResults.resultsSubject;
        this.subscription = this.subject.subscribe(function (data) {
            _this.searchResults = data;
        });
    };
    SearchResultComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(SearchResultComponent.prototype, "amountOfResults", {
        get: function () {
            return this.searchResults.size.toString();
        },
        enumerable: true,
        configurable: true
    });
    SearchResultComponent.prototype.getAppOfResult = function (resultAppereance) {
        var res = '';
        Array.from(resultAppereance.keys()).forEach(function (el) {
            res += el + ', ';
        });
        return res.substring(0, res.lastIndexOf(','));
    };
    SearchResultComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.scss */ "./src/app/pages/home/home-banner/search-result/search-result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input-form/input-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/input-form/input-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pending {\n  color: var(--ion-color-warning);\n}\n.pending .icon {\n  animation: spin 2s infinite reverse linear;\n}\n.valid {\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWZvcm0vaW5wdXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjtBREFJO0VBQ0ksMENBQUE7QUNFUjtBRElBO0VBQ0ksK0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWZvcm0vaW5wdXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZW5kaW5nIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIC5pY29uIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIHJldmVyc2UgbGluZWFyO1xuICAgIH1cblxuXG59XG5cbi52YWxpZCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iLCIucGVuZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG4ucGVuZGluZyAuaWNvbiB7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSByZXZlcnNlIGxpbmVhcjtcbn1cblxuLnZhbGlkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iXX0= */"

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFormComponent.prototype, "async", void 0);
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
//# sourceMappingURL=default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~c8f7aabb-es5.js.map