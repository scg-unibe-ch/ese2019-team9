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
                                <a href="modules/AddProductsPageModule.html" data-type="entity-link">AddProductsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddProductsPageModule-5f10799e1c56519acb816ef82d6a4e5c"' : 'data-target="#xs-components-links-module-AddProductsPageModule-5f10799e1c56519acb816ef82d6a4e5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddProductsPageModule-5f10799e1c56519acb816ef82d6a4e5c"' :
                                            'id="xs-components-links-module-AddProductsPageModule-5f10799e1c56519acb816ef82d6a4e5c"' }>
                                            <li class="link">
                                                <a href="components/AddProductsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddProductsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapPickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapPickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageModule.html" data-type="entity-link">AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPageModule-5ad8453210a2d1d5680607baef6fdaa3"' : 'data-target="#xs-components-links-module-AdminPageModule-5ad8453210a2d1d5680607baef6fdaa3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-5ad8453210a2d1d5680607baef6fdaa3"' :
                                            'id="xs-components-links-module-AdminPageModule-5ad8453210a2d1d5680607baef6fdaa3"' }>
                                            <li class="link">
                                                <a href="components/AddCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageOffersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageOffersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6cc37cb8530888ed797d2be6edec4054"' : 'data-target="#xs-components-links-module-AppModule-6cc37cb8530888ed797d2be6edec4054"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cc37cb8530888ed797d2be6edec4054"' :
                                            'id="xs-components-links-module-AppModule-6cc37cb8530888ed797d2be6edec4054"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePopoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePopoverComponent</a>
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
                                            'data-target="#components-links-module-AuthModule-4e0eaeba7eef437cdf8ac2aae35c7bb7"' : 'data-target="#xs-components-links-module-AuthModule-4e0eaeba7eef437cdf8ac2aae35c7bb7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-4e0eaeba7eef437cdf8ac2aae35c7bb7"' :
                                            'id="xs-components-links-module-AuthModule-4e0eaeba7eef437cdf8ac2aae35c7bb7"' }>
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
                                            'data-target="#components-links-module-CarouselModule-58856124571dd30d5e04b48317e6fcde"' : 'data-target="#xs-components-links-module-CarouselModule-58856124571dd30d5e04b48317e6fcde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselModule-58856124571dd30d5e04b48317e6fcde"' :
                                            'id="xs-components-links-module-CarouselModule-58856124571dd30d5e04b48317e6fcde"' }>
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
                                            'data-target="#components-links-module-HeaderModule-76ef9490d0179d3bf88ba46960560326"' : 'data-target="#xs-components-links-module-HeaderModule-76ef9490d0179d3bf88ba46960560326"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-76ef9490d0179d3bf88ba46960560326"' :
                                            'id="xs-components-links-module-HeaderModule-76ef9490d0179d3bf88ba46960560326"' }>
                                            <li class="link">
                                                <a href="components/CategoryMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderButtonsComponent</a>
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
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-8b32e30fcfcfabf8284452929f13c4cd"' : 'data-target="#xs-components-links-module-HomePageModule-8b32e30fcfcfabf8284452929f13c4cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-8b32e30fcfcfabf8284452929f13c4cd"' :
                                            'id="xs-components-links-module-HomePageModule-8b32e30fcfcfabf8284452929f13c4cd"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchResultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputFormModule.html" data-type="entity-link">InputFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputFormModule-00ed8310b78e0d6c470c06eae8adfb94"' : 'data-target="#xs-components-links-module-InputFormModule-00ed8310b78e0d6c470c06eae8adfb94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputFormModule-00ed8310b78e0d6c470c06eae8adfb94"' :
                                            'id="xs-components-links-module-InputFormModule-00ed8310b78e0d6c470c06eae8adfb94"' }>
                                            <li class="link">
                                                <a href="components/InputFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyOrdersPageModule.html" data-type="entity-link">MyOrdersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyOrdersPageModule-033c9cb2152bb9de371736c5a703be20"' : 'data-target="#xs-components-links-module-MyOrdersPageModule-033c9cb2152bb9de371736c5a703be20"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyOrdersPageModule-033c9cb2152bb9de371736c5a703be20"' :
                                            'id="xs-components-links-module-MyOrdersPageModule-033c9cb2152bb9de371736c5a703be20"' }>
                                            <li class="link">
                                                <a href="components/MyOrdersPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyOrdersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyProductsPageModule.html" data-type="entity-link">MyProductsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyProductsPageModule-df67e76ba0b392002f54a62dc9289fef"' : 'data-target="#xs-components-links-module-MyProductsPageModule-df67e76ba0b392002f54a62dc9289fef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyProductsPageModule-df67e76ba0b392002f54a62dc9289fef"' :
                                            'id="xs-components-links-module-MyProductsPageModule-df67e76ba0b392002f54a62dc9289fef"' }>
                                            <li class="link">
                                                <a href="components/MyProductsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyProductsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProductsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderDetailsPageModule.html" data-type="entity-link">OrderDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderDetailsPageModule-9e22645412f31e1681c772254bf71af1"' : 'data-target="#xs-components-links-module-OrderDetailsPageModule-9e22645412f31e1681c772254bf71af1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderDetailsPageModule-9e22645412f31e1681c772254bf71af1"' :
                                            'id="xs-components-links-module-OrderDetailsPageModule-9e22645412f31e1681c772254bf71af1"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentPageModule.html" data-type="entity-link">PaymentPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentPageModule-26d94e4b382159b62f31d063e9081a46"' : 'data-target="#xs-components-links-module-PaymentPageModule-26d94e4b382159b62f31d063e9081a46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentPageModule-26d94e4b382159b62f31d063e9081a46"' :
                                            'id="xs-components-links-module-PaymentPageModule-26d94e4b382159b62f31d063e9081a46"' }>
                                            <li class="link">
                                                <a href="components/PaymentPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentPage</a>
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
                                            'data-target="#components-links-module-ProductDetailsPageModule-9bdc33c426817192b846e395437bbd92"' : 'data-target="#xs-components-links-module-ProductDetailsPageModule-9bdc33c426817192b846e395437bbd92"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductDetailsPageModule-9bdc33c426817192b846e395437bbd92"' :
                                            'id="xs-components-links-module-ProductDetailsPageModule-9bdc33c426817192b846e395437bbd92"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductDetailsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductReviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductReviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-9efd094e66c5725e474593b22c231a50"' : 'data-target="#xs-components-links-module-ProfilePageModule-9efd094e66c5725e474593b22c231a50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-9efd094e66c5725e474593b22c231a50"' :
                                            'id="xs-components-links-module-ProfilePageModule-9efd094e66c5725e474593b22c231a50"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisteredPageModule.html" data-type="entity-link">RegisteredPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisteredPageModule-1794fdfc4d3cceb23b6f9bcc22e0b6fb"' : 'data-target="#xs-components-links-module-RegisteredPageModule-1794fdfc4d3cceb23b6f9bcc22e0b6fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisteredPageModule-1794fdfc4d3cceb23b6f9bcc22e0b6fb"' :
                                            'id="xs-components-links-module-RegisteredPageModule-1794fdfc4d3cceb23b6f9bcc22e0b6fb"' }>
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
                                            'data-target="#components-links-module-ResetPageModule-a8505758242b85ade8ad55f5fdc560a5"' : 'data-target="#xs-components-links-module-ResetPageModule-a8505758242b85ade8ad55f5fdc560a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResetPageModule-a8505758242b85ade8ad55f5fdc560a5"' :
                                            'id="xs-components-links-module-ResetPageModule-a8505758242b85ade8ad55f5fdc560a5"' }>
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
                                            'data-target="#components-links-module-SharedModule-1af44476ebb0f646c04b93498b1df249"' : 'data-target="#xs-components-links-module-SharedModule-1af44476ebb0f646c04b93498b1df249"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-1af44476ebb0f646c04b93498b1df249"' :
                                            'id="xs-components-links-module-SharedModule-1af44476ebb0f646c04b93498b1df249"' }>
                                            <li class="link">
                                                <a href="components/ImagePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileInformationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileInformationsComponent</a>
                                            </li>
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
                                            'data-target="#components-links-module-SubcategoryPageModule-6c76cd6ce2c645cf0736878db7164169"' : 'data-target="#xs-components-links-module-SubcategoryPageModule-6c76cd6ce2c645cf0736878db7164169"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubcategoryPageModule-6c76cd6ce2c645cf0736878db7164169"' :
                                            'id="xs-components-links-module-SubcategoryPageModule-6c76cd6ce2c645cf0736878db7164169"' }>
                                            <li class="link">
                                                <a href="components/FilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterComponent</a>
                                            </li>
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
                                <a href="modules/UserPageModule.html" data-type="entity-link">UserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserPageModule-67cc1b600126c8fe64b24da981fded4b"' : 'data-target="#xs-components-links-module-UserPageModule-67cc1b600126c8fe64b24da981fded4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserPageModule-67cc1b600126c8fe64b24da981fded4b"' :
                                            'id="xs-components-links-module-UserPageModule-67cc1b600126c8fe64b24da981fded4b"' }>
                                            <li class="link">
                                                <a href="components/SubcategoryItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcategoryItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyPageModule.html" data-type="entity-link">VerifyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyPageModule-e8f83175323c9ff09de6856cd3476f56"' : 'data-target="#xs-components-links-module-VerifyPageModule-e8f83175323c9ff09de6856cd3476f56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyPageModule-e8f83175323c9ff09de6856cd3476f56"' :
                                            'id="xs-components-links-module-VerifyPageModule-e8f83175323c9ff09de6856cd3476f56"' }>
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
                                <a href="components/HeaderButtonsComponent.html" data-type="entity-link">HeaderButtonsComponent</a>
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
                                <a href="classes/Category.html" data-type="entity-link">Category</a>
                            </li>
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
                                    <a href="injectables/FilterAndSearchService.html" data-type="entity-link">FilterAndSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link">PaymentService</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Coordinates.html" data-type="entity-link">Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaceMap.html" data-type="entity-link">PlaceMap</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
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