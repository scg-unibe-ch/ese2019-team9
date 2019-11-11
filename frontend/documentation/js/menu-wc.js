'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminPageModule.html" data-type="entity-link">AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPageModule-49c7da1671ebb94b999de6641604f28c"' : 'data-target="#xs-components-links-module-AdminPageModule-49c7da1671ebb94b999de6641604f28c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-49c7da1671ebb94b999de6641604f28c"' :
                                            'id="xs-components-links-module-AdminPageModule-49c7da1671ebb94b999de6641604f28c"' }>
                                            <li class="link">
                                                <a href="components/AdminPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteOffersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteOffersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-575e48b7d77fedb413548a0efffb94cd"' : 'data-target="#xs-components-links-module-AppModule-575e48b7d77fedb413548a0efffb94cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-575e48b7d77fedb413548a0efffb94cd"' :
                                            'id="xs-components-links-module-AppModule-575e48b7d77fedb413548a0efffb94cd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-13d2252240d2bfe8b25f7a50b7f8fc4b"' : 'data-target="#xs-components-links-module-AuthModule-13d2252240d2bfe8b25f7a50b7f8fc4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-13d2252240d2bfe8b25f7a50b7f8fc4b"' :
                                            'id="xs-components-links-module-AuthModule-13d2252240d2bfe8b25f7a50b7f8fc4b"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselModule.html" data-type="entity-link">CarouselModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarouselModule-0f884922614b9ab0242df03d772f2478"' : 'data-target="#xs-components-links-module-CarouselModule-0f884922614b9ab0242df03d772f2478"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselModule-0f884922614b9ab0242df03d772f2478"' :
                                            'id="xs-components-links-module-CarouselModule-0f884922614b9ab0242df03d772f2478"' }>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-e7603aea9f348c311583359abd4aa024"' : 'data-target="#xs-components-links-module-HeaderModule-e7603aea9f348c311583359abd4aa024"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-e7603aea9f348c311583359abd4aa024"' :
                                            'id="xs-components-links-module-HeaderModule-e7603aea9f348c311583359abd4aa024"' }>
                                            <li class="link">
                                                <a href="components/CategoryMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeBannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopHeaderEndComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopHeaderEndComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-582b235a230e0a8459cad5896d0bca14"' : 'data-target="#xs-components-links-module-HomePageModule-582b235a230e0a8459cad5896d0bca14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-582b235a230e0a8459cad5896d0bca14"' :
                                            'id="xs-components-links-module-HomePageModule-582b235a230e0a8459cad5896d0bca14"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputFormModule.html" data-type="entity-link">InputFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputFormModule-175ab722c7e26573457ee1264a2d519e"' : 'data-target="#xs-components-links-module-InputFormModule-175ab722c7e26573457ee1264a2d519e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputFormModule-175ab722c7e26573457ee1264a2d519e"' :
                                            'id="xs-components-links-module-InputFormModule-175ab722c7e26573457ee1264a2d519e"' }>
                                            <li class="link">
                                                <a href="components/InputFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverModule.html" data-type="entity-link">PopoverModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductDetailsPageModule.html" data-type="entity-link">ProductDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductDetailsPageModule-f1d8b930ed1b36bdcf86beb0e8a999a6"' : 'data-target="#xs-components-links-module-ProductDetailsPageModule-f1d8b930ed1b36bdcf86beb0e8a999a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductDetailsPageModule-f1d8b930ed1b36bdcf86beb0e8a999a6"' :
                                            'id="xs-components-links-module-ProductDetailsPageModule-f1d8b930ed1b36bdcf86beb0e8a999a6"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisteredPageModule.html" data-type="entity-link">RegisteredPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisteredPageModule-95ec47ef298b158f6e33a0e343abd744"' : 'data-target="#xs-components-links-module-RegisteredPageModule-95ec47ef298b158f6e33a0e343abd744"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisteredPageModule-95ec47ef298b158f6e33a0e343abd744"' :
                                            'id="xs-components-links-module-RegisteredPageModule-95ec47ef298b158f6e33a0e343abd744"' }>
                                            <li class="link">
                                                <a href="components/RegisteredPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisteredPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResetPageModule.html" data-type="entity-link">ResetPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResetPageModule-7bd2dbd9359d278ef730691a712f9b74"' : 'data-target="#xs-components-links-module-ResetPageModule-7bd2dbd9359d278ef730691a712f9b74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResetPageModule-7bd2dbd9359d278ef730691a712f9b74"' :
                                            'id="xs-components-links-module-ResetPageModule-7bd2dbd9359d278ef730691a712f9b74"' }>
                                            <li class="link">
                                                <a href="components/ResetPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-e3072b246f8ca91ec620e2e5e994e365"' : 'data-target="#xs-components-links-module-SharedModule-e3072b246f8ca91ec620e2e5e994e365"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-e3072b246f8ca91ec620e2e5e994e365"' :
                                            'id="xs-components-links-module-SharedModule-e3072b246f8ca91ec620e2e5e994e365"' }>
                                            <li class="link">
                                                <a href="components/RatingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RatingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubcategoryPageModule.html" data-type="entity-link">SubcategoryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubcategoryPageModule-a4c9b5a1698b853edf97966cc55f67e2"' : 'data-target="#xs-components-links-module-SubcategoryPageModule-a4c9b5a1698b853edf97966cc55f67e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubcategoryPageModule-a4c9b5a1698b853edf97966cc55f67e2"' :
                                            'id="xs-components-links-module-SubcategoryPageModule-a4c9b5a1698b853edf97966cc55f67e2"' }>
                                            <li class="link">
                                                <a href="components/SubcategoryItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcategoryItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubcategoryPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcategoryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyPageModule.html" data-type="entity-link">VerifyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyPageModule-f85a7bb6a19fd6f85a95beb235d94e1f"' : 'data-target="#xs-components-links-module-VerifyPageModule-f85a7bb6a19fd6f85a95beb235d94e1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyPageModule-f85a7bb6a19fd6f85a95beb235d94e1f"' :
                                            'id="xs-components-links-module-VerifyPageModule-f85a7bb6a19fd6f85a95beb235d94e1f"' }>
                                            <li class="link">
                                                <a href="components/VerifyPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ManageUsersComponent.html" data-type="entity-link">ManageUsersComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link">CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopoverService.html" data-type="entity-link">PopoverService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link">ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProgressIndicatorService.html" data-type="entity-link">ProgressIndicatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RoleguardService.html" data-type="entity-link">RoleguardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});