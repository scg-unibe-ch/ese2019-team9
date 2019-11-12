(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~fc85c18a"],{

/***/ "./node_modules/ngx-captcha/fesm2015/ngx-captcha.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-captcha/fesm2015/ngx-captcha.js ***!
  \**********************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseReCaptchaComponent {
    /**
     * @protected
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
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
    ngAfterViewInit() {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]).control;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.setupCaptcha) {
            this.setupCaptcha = false;
            this.setupComponent();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    getResponse() {
        return this.reCaptchaApi.getResponse(this.captchaId);
    }
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    getCaptchaId() {
        return this.captchaId;
    }
    /**
     * Resets captcha
     * @return {?}
     */
    resetCaptcha() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            // reset captcha using Google js api
            this.reCaptchaApi.reset();
            // required due to forms
            this.onChange(undefined);
            this.onTouched(undefined);
            // trigger reset event
            this.reset.next();
        }));
    }
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    getCurrentResponse() {
        return this.currentResponse;
    }
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    reloadCaptcha() {
        this.setupComponent();
    }
    /**
     * @protected
     * @param {?} captchaElemId
     * @return {?}
     */
    ensureCaptchaElem(captchaElemId) {
        /** @type {?} */
        const captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error(`Captcha element with id '${captchaElemId}' was not found`);
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    }
    /**
     * Responsible for instantiating captcha element
     * @protected
     * @return {?}
     */
    renderReCaptcha() {
        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
            this.ready.next();
        }));
    }
    /**
     * Called when captcha receives response
     * @protected
     * @param {?} callback Callback
     * @return {?}
     */
    handleCallback(callback) {
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(callback);
            this.onTouched(callback);
        }));
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getPseudoUniqueNumber() {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    }
    /**
     * @private
     * @return {?}
     */
    setupComponent() {
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        (grecaptcha) => {
            this.onloadCallback(grecaptcha);
        }), this.hl);
    }
    /**
     * Called when google's recaptcha script is ready
     * @private
     * @param {?} grecapcha
     * @return {?}
     */
    onloadCallback(grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
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
    }
    /**
     * @private
     * @return {?}
     */
    generateNewElemId() {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    }
    /**
     * @private
     * @return {?}
     */
    createAndSetCaptchaElem() {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error(`Captcha elem Id is not set`);
        }
        if (!this.captchaWrapperElem) {
            throw Error(`Captcha DOM element is not initialized`);
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        /** @type {?} */
        const newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    }
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) { }
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Handles error callback
     * @protected
     * @return {?}
     */
    handleErrorCallback() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(undefined);
            this.onTouched(undefined);
        }));
        this.error.next();
    }
    /**
     * Handles expired callback
     * @protected
     * @return {?}
     */
    handleExpireCallback() {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ReCaptchaType = {
    InvisibleReCaptcha: 0,
    ReCaptcha2: 1,
};
ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
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
    registerCaptchaScript(useGlobalDomain, render, onLoad, language) {
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onLoad(window[this.windowGrecaptcha]);
            }));
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = (/** @type {?} */ (((/**
         * @return {?}
         */
        () => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha]))))));
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @return {?}
     */
    cleanup() {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    }
    /**
     * Indicates if google recaptcha script is available and ready to be used
     * @private
     * @return {?}
     */
    grecaptchaScriptLoaded() {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    }
    /**
     * Gets language param used in script url
     * @private
     * @param {?=} hl
     * @return {?}
     */
    getLanguageParam(hl) {
        if (!hl) {
            return '';
        }
        return `&hl=${hl}`;
    }
    /**
     * Url to google api script
     * @private
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?=} language
     * @return {?}
     */
    getCaptchaScriptUrl(useGlobalDomain, render, language) {
        /** @type {?} */
        const domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
        // tslint:disable-next-line:max-line-length
        return `https://www.${domain}/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${render}${this.getLanguageParam(language)}`;
    }
}
ScriptService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InvisibleReCaptchaComponent extends BaseReCaptchaComponent {
    /**
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        super(renderer, zone, injector, scriptService);
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * This size representing invisible captcha
         */
        this.size = 'invisible';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Badge
         */
        this.badge = 'bottomright';
        this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    execute() {
        // execute captcha
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.reCaptchaApi.execute(this.captchaId)));
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
    }
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    getCaptchaProperties() {
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            (response) => this.zone.run((/**
             * @return {?}
             */
            () => this.handleCallback(response)))),
            'expired-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleExpireCallback()))),
            'error-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleErrorCallback()))),
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size,
            'theme': this.theme
        };
    }
}
InvisibleReCaptchaComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-invisible-recaptcha',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => InvisibleReCaptchaComponent)),
                        multi: true,
                    }
                ]
            }] }
];
/** @nocollapse */
InvisibleReCaptchaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: ScriptService }
];
InvisibleReCaptchaComponent.propDecorators = {
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem', { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReCaptcha2Component extends BaseReCaptchaComponent {
    /**
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        super(renderer, zone, injector, scriptService);
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Name of the global expire callback
         */
        this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Size
         */
        this.size = 'normal';
        this.recaptchaType = ReCaptchaType.ReCaptcha2;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
        this.registerCallbacks();
    }
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    getCaptchaProperties() {
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            (response) => this.zone.run((/**
             * @return {?}
             */
            () => this.handleCallback(response)))),
            'expired-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleExpireCallback()))),
            'error-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleErrorCallback()))),
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    }
    /**
     * Registers global callbacks
     * @private
     * @return {?}
     */
    registerCallbacks() {
        window[this.windowOnErrorCallbackProperty] = super.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = super.handleExpireCallback.bind(this);
    }
}
ReCaptcha2Component.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-recaptcha2',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => ReCaptcha2Component)),
                        multi: true,
                    }
                ]
            }] }
];
/** @nocollapse */
ReCaptcha2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: ScriptService }
];
ReCaptcha2Component.propDecorators = {
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem', { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReCaptchaV3Service {
    /**
     * @param {?} scriptService
     * @param {?} zone
     */
    constructor(scriptService, zone) {
        this.scriptService = scriptService;
        this.zone = zone;
    }
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
    execute(siteKey, action, callback, config) {
        /** @type {?} */
        const useGlobalDomain = config && config.useGlobalDomain ? true : false;
        this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        (grecaptcha) => {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                grecaptcha.execute(siteKey, {
                    action: action
                }).then((/**
                 * @param {?} token
                 * @return {?}
                 */
                (token) => {
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => callback(token)));
                }));
            }));
        }));
    }
}
ReCaptchaV3Service.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ReCaptchaV3Service.ctorParameters = () => [
    { type: ScriptService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCaptchaModule {
}
NgxCaptchaModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
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

module.exports = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class=\"popoverTitle\">\n        Forgot Password\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"10\" offset=\"1\">\n      <ion-text class=\"feedback\" >\n        Have you forgotten your password?\n        <br>\n        Enter your email address to get a new one!\n      </ion-text>\n      <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmitGetPassword()\">\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"forgotPasswordForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                  [type]=\"'email'\" [inputMode]=\"'email'\">\n          </app-input-form>\n        </ion-card>\n        <ion-item *ngIf=\"messageReceived\" class=\"invalid-feedback\"> {{ message }}</ion-item>\n        <ion-item class=\"feedback\" *ngIf=\"forgotEmailSent\">\n          Check your email for further instructions.\n        </ion-item>\n        <ion-button class=\"formButton\" expand=\"block\" type=\"submit\"> Submit </ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/authentication/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/authentication/login/login.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-header>\n    <ion-toolbar color=\"medium\">\n      <ion-title class=\"popoverTitle\">\n        Log In\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"10\" offset=\"1\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmitLogin()\">\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"loginForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                  [type]=\"'email'\" [inputMode]=\"'email'\">\n          </app-input-form>\n        </ion-card>\n        <ion-card class=\"formElement\" >\n          <app-input-form\n                  [inputForm]=\"loginForm\" [givenName]=\"'password'\" [text]=\"'Password*'\" [validationMessages]=\"validationMessages.password\"\n                  [type]= \"'password'\" [inputMode]=\"'password'\">\n          </app-input-form>\n        </ion-card>\n        <ion-item *ngIf=\"messageReceived\" class=\"invalid-feedback\"> {{ message }}\n          <ion-button *ngIf=\"showResendButton\" class=\"greyButton\" fill=\"empty\" slot=\"end\" (click)=\"resendEmail()\">Resend</ion-button>\n          <ion-icon *ngIf=\"showResentMessage\" class=\"checkmark-circle\" slot=\"end\" name=\"checkmark-circle\"></ion-icon>\n          <ion-icon *ngIf=\"showNotResentMessage\" class=\"close-circle\" slot=\"end\" name=\"close-circle\"></ion-icon>\n        </ion-item>\n        <ion-button class=\"formButton\" expand=\"block\" type=\"submit\"> Log In </ion-button>\n        <div class=\"feedback\" >\n          <a href=\"\" (click)=\"presentForgotPopover($event)\" slot=\"end\" > Forgot your password? </a>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n  <ion-header class=\"removeScrollbarForPopover\">\n    <ion-toolbar color=\"medium\">\n      <ion-title class=\"popoverFooter\">\n        Not a member yet?\n        <a href=\"\" (click)=\"presentRegistrationPopover()\"> Join now! </a>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/authentication/registration/registration.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/authentication/registration/registration.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-header>\n        <ion-toolbar color=\"light\">\n            <ion-title class=\"popoverTitle\" >\n                Join now!\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmitRegistration()\">\n                <ion-card class=\"formElement\" >\n                    <app-input-form\n                            [inputForm]=\"registrationForm\" [givenName]=\"'email'\" [text]=\"'Email*'\" [validationMessages]=\"validationMessages.email\"\n                            [type]=\"'email'\" [inputMode]=\"'email'\">\n                    </app-input-form>\n                </ion-card>\n                <ion-card class=\"formElement\" >\n                    <app-input-form\n                            [inputForm]=\"registrationForm\" [givenName]=\"'password'\" [text]=\"'Password*'\" [validationMessages]=\"validationMessages.password\"\n                            [type]= \"'password'\" [inputMode]=\"'password'\">\n                    </app-input-form>\n                </ion-card>\n                <div *ngIf=\"messageReceived\" class=\"invalid-feedback\"> {{ message }} </div>\n                <ion-button class=\"formButton\" expand=\"block\" type=\"submit\">Join now</ion-button>\n            </form>\n        </ion-col>\n    </ion-row>\n    <ion-header class=\"removeScrollbarForPopover\">\n        <ion-toolbar color=\"medium\">\n            <ion-title class=\"popoverFooter\">\n                Already a member?\n                <a href=\"\" (click)=\"presentLoginPopover($event)\"> Log in </a>\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-content>\n"

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

module.exports = "<ion-list *ngFor=\"let subcategory of subcategories\">\n  <ion-item [routerLink]=\"['/subcategory/', subcategory.slug]\" > {{ subcategory.name }} </ion-item>\n</ion-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/navigation-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/navigation-bar/navigation-bar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar (mouseleave)=\"dismissMenu()\">\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"ion-justify-content-center\">\n                <ion-segment (ionChange)=\"segmentChanged($event)\">\n                    <ion-segment-button *ngFor=\"let category of categories\" value=\"{{ category.slug }}\" fill=\"clear\" >\n                        <ion-label> {{ category.name }}</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <app-category-menu [subcategories]=\"currentMenuSubcategories\" *ngIf=\"menuVisible\"></app-category-menu>\n</ion-toolbar>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header-end/top-header-end.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/top-header-end/top-header-end.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ion-float-right\">\n  <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\" (click)=\"presentLoginPopover()\">Login</ion-button>\n  <ion-button *ngIf=\"!authService.isLoggedIn()\" size=\"small\" class=\"blueButton\" fill=\"empty\" (click)=\"presentRegistrationPopover()\" >Join</ion-button>\n  <ion-button *ngIf=\"authService.isLoggedIn() && authService.isAdmin()\" size=\"small\" class=\"greyButton\" fill=\"empty\" (click)=\"router.navigateByUrl('/admin')\">Admin</ion-button>\n  <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\" (click)=\"authService.logout()\"> Logout </ion-button>\n  <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"greyButton\" fill=\"empty\" routerLink=\"/add-products\" [routerDirection]=\"'root'\"><ion-icon name=\"add\"></ion-icon>Add</ion-button>\n  <ion-button *ngIf=\"authService.isLoggedIn()\" size=\"small\" class=\"blueButton\" fill=\"empty\"><ion-icon name=\"person\"></ion-icon></ion-button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/top-header/top-header.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <ion-grid>\n                <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"1\">\n                                <div class=\"ion-hide-lg-up\" position=\"relative\">\n                                        <ion-buttons slot=\"start\">\n                                                <ion-menu-button menu=\"m1\">\n                                                </ion-menu-button>\n                                        </ion-buttons>\n                                </div>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                                <div class=\"navigateHome\" (click)=\"navigateHome()\">\n                                        <img padding=\"20px\" src=\"assets/images/logoFont6.png\" >\n                                </div>\n                        </ion-col>\n                        <ion-col>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                                <app-top-header-end></app-top-header-end>\n                        </ion-col>\n                </ion-row>\n        </ion-grid>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home-banner/home-banner.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"logo\">\n  <ion-grid class=\"backgroundGradient\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col offset=\"1\" size=\"3\">\n        <app-logo></app-logo>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-title class=\"ion-no-padding\" >Welcome to Moln!</ion-title>\n        <ion-text>This is the 2.71828th best event planning platform</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\" offset=\"2\">\n        <ion-searchbar class=\"ion-no-padding\" type=\"search\" placeholder=\"Search\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm2015/ngx-captcha.js");
/* harmony import */ var _shared_input_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/input-form.module */ "./src/app/shared/input-form.module.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/forgot-password/forgot-password.component */ "./src/app/core/authentication/forgot-password/forgot-password.component.ts");











let AuthModule = class AuthModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Not a valid address' }
            ]
        };
        this.forgotEmailSent = false;
        this.messageReceived = false;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    onSubmitGetPassword() {
        // stop here if form is invalid
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        const val = this.forgotPasswordForm.value;
        this.authService.forgotPassword(val.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            if (data.status === 200) {
                this.forgotPasswordForm.reset();
                this.forgotEmailSent = true;
            }
        }, error => {
            if (error.status === 500) {
                this.messageReceived = true;
                this.forgotPasswordForm.reset();
                this.message = 'Have you entered the correct address?';
            }
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/core/authentication/forgot-password/forgot-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/core/authentication/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/authentication/login/login.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "./src/app/core/authentication/forgot-password/forgot-password.component.ts");









let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, popoverService, popoverController, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.popoverController = popoverController;
        this.router = router;
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Not a valid address' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
            ]
        };
        this.showResendButton = false;
        this.showResentMessage = false;
        this.showNotResentMessage = false;
        this.messageReceived = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    resendEmail() {
        this.authService.resendEmail()
            .subscribe(data => {
            this.showResentMessage = true;
        }, error => {
            this.showNotResentMessage = true;
        });
    }
    onSubmitLogin() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const val = this.loginForm.value;
        this.authService.login(val.email, val.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.popoverService.dismissPopover();
            this.loginForm.reset();
        }, error => {
            this.messageReceived = true;
            if (error.status === 401 && error.error.message === 'Authentication failed') {
                this.message = error.error.message;
            }
            else if (error.status === 401 && error.error.message === 'Email not verified') {
                this.showResendButton = true;
                this.message = error.error.message;
            }
            else {
                this.message = 'Login failed';
            }
        });
    }
    presentForgotPopover(evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            evt.preventDefault();
            this.popoverService.dismissPopover();
            const popover = yield this.popoverController.create({
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
                translucent: true,
                backdropDismiss: true,
                cssClass: 'popover-style'
            });
            return yield popover.present();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_7__["PopoverService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/authentication/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_7__["PopoverService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/core/authentication/registration/registration.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/authentication/registration/registration.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");







let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, authService, popoverService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.popoverService = popoverService;
        this.router = router;
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
        this.messageReceived = false;
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    onSubmitRegistration() {
        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            return;
        }
        const val = this.registrationForm.value;
        this.authService.register(val.email, val.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            this.messageReceived = true;
            this.registrationForm.reset();
            this.popoverService.dismissPopover();
            this.router.navigate(['/registered']);
        }, error => {
            this.messageReceived = true;
            this.registrationForm.reset();
            if (error.status === 409) {
                this.message = error.error.message;
            }
            else {
                this.message = 'Registration failed';
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/authentication/registration/registration.component.html"),
        styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/core/authentication/registration/registration.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegistrationComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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


















let HeaderModule = class HeaderModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/logo/logo.component.html"),
        styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/core/header/logo/logo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoComponent);



/***/ }),

/***/ "./src/app/core/header/navigation-bar/category-menu/category-menu.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/core/header/navigation-bar/category-menu/category-menu.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL25hdmlnYXRpb24tYmFyL2NhdGVnb3J5LW1lbnUvY2F0ZWdvcnktbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");



let CategoryMenuComponent = class CategoryMenuComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() { }
};
CategoryMenuComponent.ctorParameters = () => [
    { type: _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
], CategoryMenuComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categoryService/category.service */ "./src/app/core/services/categoryService/category.service.ts");



let NavigationBarComponent = class NavigationBarComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
        this.menuVisible = false;
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe(data => {
            // @ts-ignore
            this.categories = data;
        });
    }
    segmentChanged(ev) {
        if (ev.target.value === '') {
            return;
        }
        this.currentEvent = ev;
        this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === ev.detail.value)[0].subcategories
            .sort((a, b) => a.name.localeCompare(b.name));
        this.menuVisible = true;
    }
    dismissMenu() {
        if (this.menuVisible === false) {
            return;
        }
        this.currentEvent.target.value = '';
        this.menuVisible = false;
        this.currentMenuSubcategories = [];
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation-bar',
        template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/navigation-bar/navigation-bar.component.html"),
        styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/core/header/navigation-bar/navigation-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
], NavigationBarComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authService/auth.service */ "./src/app/core/services/authService/auth.service.ts");
/* harmony import */ var _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popoverService/popover.service */ "./src/app/core/services/popoverService/popover.service.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../authentication/login/login.component */ "./src/app/core/authentication/login/login.component.ts");
/* harmony import */ var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/registration/registration.component */ "./src/app/core/authentication/registration/registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let TopHeaderEndComponent = class TopHeaderEndComponent {
    constructor(popoverController, authService, popoverService, router) {
        this.popoverController = popoverController;
        this.authService = authService;
        this.popoverService = popoverService;
        this.router = router;
    }
    ngOnInit() { }
    presentLoginPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                translucent: true,
                backdropDismiss: true,
                cssClass: 'popover-style'
            });
            return yield popover.present();
        });
    }
    presentRegistrationPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                translucent: true,
                backdropDismiss: true,
                cssClass: 'popover-style'
            });
            return yield popover.present();
        });
    }
};
TopHeaderEndComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_4__["PopoverService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
TopHeaderEndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-header-end',
        template: __webpack_require__(/*! raw-loader!./top-header-end.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header-end/top-header-end.component.html"),
        styles: [__webpack_require__(/*! ./top-header-end.component.scss */ "./src/app/core/header/top-header/top-header-end/top-header-end.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_popoverService_popover_service__WEBPACK_IMPORTED_MODULE_4__["PopoverService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], TopHeaderEndComponent);



/***/ }),

/***/ "./src/app/core/header/top-header/top-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/header/top-header/top-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divTopHeader {\n  height: 52px;\n  padding-top: 3px;\n}\n\n.imgSize {\n  min-width: 10px;\n}\n\n.navigateHome {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyc3RhZWhsaS9Eb2N1bWVudHMvVW5pQmVybi9TZW1lc3RlcjMvSW5mb3JtYXRpay9FU0UvZXNlMjAxOS10ZWFtOS9mcm9udGVuZC9zcmMvYXBwL2NvcmUvaGVhZGVyL3RvcC1oZWFkZXIvdG9wLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci90b3AtaGVhZGVyL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2VG9wSGVhZGVyIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4uaW1nU2l6ZXtcbiAgbWluLXdpZHRoOiAxMHB4O1xufVxuXG4ubmF2aWdhdGVIb21lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmRpdlRvcEhlYWRlciB7XG4gIGhlaWdodDogNTJweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmltZ1NpemUge1xuICBtaW4td2lkdGg6IDEwcHg7XG59XG5cbi5uYXZpZ2F0ZUhvbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TopHeaderComponent = class TopHeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateHome() {
        this.router.navigate(['/home']);
    }
};
TopHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TopHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-header',
        template: __webpack_require__(/*! raw-loader!./top-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/top-header/top-header.component.html"),
        styles: [__webpack_require__(/*! ./top-header.component.scss */ "./src/app/core/header/top-header/top-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TopHeaderComponent);



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
    dismissPopover() {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeBannerComponent = class HomeBannerComponent {
    constructor() { }
    ngOnInit() { }
};
HomeBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-banner',
        template: __webpack_require__(/*! raw-loader!./home-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home-banner/home-banner.component.html"),
        styles: [__webpack_require__(/*! ./home-banner.component.scss */ "./src/app/pages/home/home-banner/home-banner.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeBannerComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let InputFormComponent = class InputFormComponent {
    constructor() {
        this.type = 'text';
        this.inputMode = 'text';
        this.isPassword = false;
        this.showingPassword = false;
    }
    ngOnInit() {
        this.isPassword = this.type === 'password';
    }
    showPassword(bool) {
        this.showingPassword = bool;
        this.type = this.showingPassword ? 'text' : 'password';
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/input-form/input-form.component */ "./src/app/shared/components/input-form/input-form.component.ts");







let InputFormModule = class InputFormModule {
};
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



/***/ })

}]);
//# sourceMappingURL=default~pages-add-products-add-products-module~pages-admin-admin-module~pages-home-home-module~pages~fc85c18a-es2015.js.map