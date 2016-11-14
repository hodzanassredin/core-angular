(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var angular2_jwt_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(9);
	var navmenu_component_1 = __webpack_require__(14);
	var home_component_1 = __webpack_require__(21);
	var books_component_1 = __webpack_require__(23);
	var userbooks_component_1 = __webpack_require__(28);
	var login_1 = __webpack_require__(30);
	var signup_1 = __webpack_require__(35);
	var auth_guard_1 = __webpack_require__(40);
	var auth_service_1 = __webpack_require__(15);
	var books_service_1 = __webpack_require__(24);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            bootstrap: [app_component_1.AppComponent],
	            declarations: [
	                app_component_1.AppComponent,
	                navmenu_component_1.NavMenuComponent,
	                userbooks_component_1.UserBooksComponent,
	                books_component_1.BooksComponent,
	                home_component_1.HomeComponent,
	                login_1.Login,
	                signup_1.Signup
	            ],
	            imports: [
	                angular2_universal_1.UniversalModule,
	                forms_1.FormsModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'home', pathMatch: 'full' },
	                    { path: 'home', component: home_component_1.HomeComponent },
	                    { path: 'login', component: login_1.Login },
	                    { path: 'signup', component: signup_1.Signup },
	                    { path: 'books-my', component: userbooks_component_1.UserBooksComponent },
	                    { path: 'books-data', component: books_component_1.BooksComponent, canActivate: [auth_guard_1.AuthGuard] },
	                    { path: '**', redirectTo: 'home' }
	                ])
	            ],
	            providers: [
	                auth_guard_1.AuthGuard,
	                auth_service_1.AuthService,
	                books_service_1.BooksService
	            ].concat(angular2_jwt_1.AUTH_PROVIDERS)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("angular2-jwt");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(10),
	            styles: [__webpack_require__(11)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(12);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var auth_service_1 = __webpack_require__(15);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(auth) {
	        this.auth = auth;
	    }
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-menu',
	            template: __webpack_require__(18),
	            styles: [__webpack_require__(19)]
	        }), 
	        __metadata('design:paramtypes', [auth_service_1.AuthService])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var angular2_jwt_1 = __webpack_require__(8);
	var router_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(16);
	var headers_1 = __webpack_require__(17);
	var AuthService = (function () {
	    function AuthService(router, http) {
	        this.router = router;
	        this.http = http;
	        this.userLoggedIn$ = new core_1.EventEmitter();
	        this.userLoggedOut$ = new core_1.EventEmitter();
	    }
	    AuthService.prototype.loggedIn = function () {
	        try {
	            return angular2_jwt_1.tokenNotExpired();
	        }
	        catch (e) {
	            return false;
	        }
	    };
	    AuthService.prototype.logOut = function () {
	        localStorage.clear();
	        this.userLoggedOut$.emit("");
	        this.router.navigate(['/home']);
	    };
	    AuthService.prototype.userName = function () {
	        return this.loggedIn() ? localStorage["username"] : "Unauthorized";
	    };
	    AuthService.prototype.signUp = function (username, password) {
	        this.send(username, password, '/api/users/register');
	    };
	    AuthService.prototype.logIn = function (username, password) {
	        this.send(username, password, '/api/users/login');
	    };
	    AuthService.prototype.send = function (username, password, url) {
	        var _this = this;
	        var body = JSON.stringify({ username: username, password: password });
	        this.http.post(url, body, { headers: headers_1.contentHeaders })
	            .subscribe(function (response) {
	            localStorage.setItem('id_token', response.json().id_token);
	            localStorage.setItem('username', username);
	            _this.router.navigate(['home']);
	            _this.userLoggedIn$.emit(username);
	        }, function (error) {
	            alert(error.text());
	            console.log(error.text());
	        });
	    };
	    AuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
	    ], AuthService);
	    return AuthService;
	}());
	exports.AuthService = AuthService;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(16);
	exports.contentHeaders = new http_1.Headers();
	exports.contentHeaders.append('Accept', 'application/json');
	exports.contentHeaders.append('Content-Type', 'application/json');


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Books(<span class='glyphicon glyphicon-user'></span> {{auth.userName()}})</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li  *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/books-data']\">\n                        <span class='glyphicon glyphicon-search'></span> Search\n                    </a>\n                </li>\n                <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/books-my']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> My Books\r\n                    </a>\r\n                </li>\n                <li *ngIf=\"auth.loggedIn()\">\r\n                    <a (click)=\"auth.logOut()\">\r\n                        <span class='glyphicon glyphicon-log-out'></span> LogOut\r\n                    </a>\r\n                </li>\n                <li *ngIf=\"!auth.loggedIn()\" [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['/login']\">\r\n                    <span class='glyphicon glyphicon-log-in'></span> Login\r\n                </a>\r\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(20);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(22)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h1>Demo app for Crossover test!</h1>\n\n\n<p>You have to login.</p>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var books_service_1 = __webpack_require__(24);
	var BooksComponent = (function () {
	    function BooksComponent(booksService) {
	        this.booksService = booksService;
	        this.currentFilter = new books_service_1.Filter("", "", "", "", 0, 10);
	        this.pageNumbers = [];
	        this.reloadData();
	    }
	    BooksComponent.prototype.loadPage = function (i) {
	        if (i != this.pagedBoooks.currentPage && i >= 0 && i < this.pagedBoooks.totalPages) {
	            this.currentFilter.page = i;
	            this.requestServer();
	        }
	    };
	    BooksComponent.prototype.reloadData = function () {
	        this.currentFilter.page = 0;
	        this.requestServer();
	    };
	    BooksComponent.prototype.requestServer = function () {
	        //this.pagedBoooks = null;
	        var _this = this;
	        this.booksService.search(this.currentFilter).then(function (result) {
	            _this.pagedBoooks = result;
	            var startPage = Math.max(1, _this.pagedBoooks.currentPage - 4);
	            var endPage = Math.min(_this.pagedBoooks.totalPages, startPage + 9);
	            _this.pageNumbers = [];
	            for (var i = startPage; i <= endPage; i++) {
	                _this.pageNumbers.push(i);
	            }
	        });
	    };
	    BooksComponent = __decorate([
	        core_1.Component({
	            selector: 'books',
	            template: __webpack_require__(27)
	        }), 
	        __metadata('design:paramtypes', [books_service_1.BooksService])
	    ], BooksComponent);
	    return BooksComponent;
	}());
	exports.BooksComponent = BooksComponent;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(16);
	var auth_service_1 = __webpack_require__(15);
	var headers_1 = __webpack_require__(17);
	var angular2_jwt_1 = __webpack_require__(8);
	__webpack_require__(25);
	__webpack_require__(26);
	var BooksService = (function () {
	    function BooksService(authHttp, http, auth) {
	        this.authHttp = authHttp;
	        this.http = http;
	        this.auth = auth;
	        this.userBooksLoaded = this.loadUserBooks();
	    }
	    BooksService.prototype.loadUserBooks = function () {
	        var _this = this;
	        var o = this.authHttp.get('/api/users/books').map(this.extractData);
	        return new Promise(function (resolve, reject) {
	            o.subscribe(function (books) {
	                _this.ids = [];
	                for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
	                    var b = books_1[_i];
	                    _this.ids.push(b.id);
	                }
	                resolve(books);
	            });
	        });
	    };
	    BooksService.prototype.search = function (filter) {
	        var _this = this;
	        var params = {
	            search: filter.toParams()
	        };
	        return new Promise(function (resolve, reject) {
	            _this.http.get('/api/books/search', params)
	                .map(_this.extractData)
	                .subscribe(function (data) {
	                _this.userBooksLoaded.then(function (x) {
	                    resolve(data);
	                });
	            });
	        });
	    };
	    BooksService.prototype.extractData = function (res) {
	        return res.json();
	    };
	    BooksService.prototype.isRequested = function (bookId) {
	        var demands = this.userDemandsIds();
	        return demands.indexOf(bookId) > -1;
	    };
	    BooksService.prototype.addUserDemand = function (id) {
	        var _this = this;
	        if (this.isRequested(id)) {
	            return;
	        }
	        var body = JSON.stringify({ id: id });
	        return this.authHttp.post('/api/users/books', body, { headers: headers_1.contentHeaders })
	            .subscribe(function (ok) {
	            var d = _this.userDemandsIds();
	            d.push(id);
	        });
	    };
	    BooksService.prototype.removeUserDemand = function (bookId) {
	        var _this = this;
	        if (!this.isRequested(bookId)) {
	            return;
	        }
	        var url = "/api/users/books/" + bookId;
	        var o = this.authHttp.delete(url, { headers: headers_1.contentHeaders });
	        o.subscribe(function (ok) {
	            var arr = _this.userDemandsIds();
	            var index = arr.indexOf(bookId);
	            if (index >= 0) {
	                arr.splice(index, 1);
	            }
	        });
	        return o;
	    };
	    BooksService.prototype.userDemandsIds = function () {
	        return this.ids;
	    };
	    BooksService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, http_1.Http, auth_service_1.AuthService])
	    ], BooksService);
	    return BooksService;
	}());
	exports.BooksService = BooksService;
	var Filter = (function () {
	    function Filter(title, description, author, publisher, page, pageSize) {
	        this.title = title;
	        this.description = description;
	        this.author = author;
	        this.publisher = publisher;
	        this.page = page;
	        this.pageSize = pageSize;
	    }
	    Filter.prototype.toParams = function () {
	        var params = new http_1.URLSearchParams();
	        params.set("title", this.title);
	        params.set("description", this.description);
	        params.set("author", this.author);
	        params.set("publisher", this.publisher);
	        params.set("page", this.page.toString());
	        params.set("pageSize", this.pageSize.toString());
	        return params;
	    };
	    return Filter;
	}());
	exports.Filter = Filter;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/operator/map");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<h1>Books search</h1>\n\n<p>There you could search publisher books.</p>\n\n<form class=\"row\">\r\n    <div class=\"form-group col-lg-6\" >\r\n        <input class=\"form-control\" name=\"author\" [(ngModel)]=\"currentFilter.author\" placeholder=\"Author\" />\r\n    </div>\r\n    <div class=\"form-group col-lg-6\">\r\n        <input class=\"form-control\" name=\"title\" [(ngModel)]=\"currentFilter.title\" placeholder=\"Title\" />\r\n    </div>\r\n    <div class=\"form-group col-lg-6\">\r\n        <input class=\"form-control\" name=\"description\" [(ngModel)]=\"currentFilter.description\" placeholder=\"Description\" />\r\n    </div>\r\n    <div class=\"form-group col-lg-6\">\r\n        <input class=\"form-control\" name=\"publisher\" [(ngModel)]=\"currentFilter.publisher\" placeholder=\"Publisher\" />\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"reloadData()\">Search</button>\r\n</form>\n\n<p *ngIf=\"!pagedBoooks\"><em>Loading...</em></p>\n\n<div *ngIf=\"pagedBoooks\">\n    <h2>Total Items found {{pagedBoooks.totalItems}}</h2>\r\n    <nav aria-label=\"Page navigation\">\r\n        <ul class=\"pagination\">\r\n            <li class=\"previous {{pagedBoooks.currentPage == 0 ? 'disabled' : ''}}\"><a (click)=\"loadPage(pagedBoooks.currentPage - 1)\">Previous</a></li>\r\n            <li *ngFor=\"let page of this.pageNumbers\" class=\"{{page == (pagedBoooks.currentPage + 1) ? 'disabled' : ''}}\">\r\n                <a (click)=\"loadPage(page- 1)\">{{page}}</a>\r\n            </li>\r\n            <li class=\"next  {{pagedBoooks.currentPage >= (pagedBoooks.totalPages-1) ? 'disabled' : ''}}\"><a  class=\"cursor-pointer\" (click)=\"loadPage(pagedBoooks.currentPage + 1)\">Next</a></li>\r\n        </ul>\r\n    </nav>\r\n    <table class='table  table-striped'>\r\n        <thead>\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Publisher</th>\r\n                <th>Authors</th>\r\n                <th>Description</th>\r\n                <th>Demand</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of pagedBoooks.items\">\r\n                <td>{{ item.title }}</td>\r\n                <td>{{ item.publisher }}</td>\r\n                <td>\r\n                    <ul>\r\n                        <li *ngFor=\"let author of item.authors\" >\r\n                            {{ author }}\r\n                        </li>\r\n                    </ul>\r\n                </td>\r\n                <td>{{ item.description }}</td>\r\n                <td>\r\n                    <a *ngIf=\"!booksService.isRequested(item.id)\" (click)=\"booksService.addUserDemand(item.id)\">Request</a>\r\n                    <a *ngIf=\"booksService.isRequested(item.id)\" (click)=\"booksService.removeUserDemand(item.id)\">Cancel</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\n\n\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var books_service_1 = __webpack_require__(24);
	var UserBooksComponent = (function () {
	    function UserBooksComponent(booksService) {
	        this.booksService = booksService;
	        this.load();
	    }
	    UserBooksComponent.prototype.remove = function (bookId) {
	        var _this = this;
	        this.booksService.removeUserDemand(bookId).subscribe(function (res) {
	            for (var i in _this.books) {
	                var i_number = +i;
	                if (_this.books[i_number].id == bookId) {
	                    _this.books.splice(i_number, 1);
	                    break;
	                }
	            }
	        });
	    };
	    UserBooksComponent.prototype.load = function () {
	        var _this = this;
	        this.booksService.loadUserBooks().then(function (result) {
	            _this.books = result;
	        });
	    };
	    UserBooksComponent = __decorate([
	        core_1.Component({
	            selector: 'userbooks',
	            template: __webpack_require__(29)
	        }), 
	        __metadata('design:paramtypes', [books_service_1.BooksService])
	    ], UserBooksComponent);
	    return UserBooksComponent;
	}());
	exports.UserBooksComponent = UserBooksComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<h1>Requested books</h1>\r\n\r\n<p *ngIf=\"!books\"><em>Loading...</em></p>\r\n<div *ngIf=\"books\">\r\n    <h2>Total Items found {{books.length}}</h2>\r\n\r\n    <table class='table  table-striped'>\r\n        <thead>\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Publisher</th>\r\n                <th>Authors</th>\r\n                <th>Description</th>\r\n                <th>Demand</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of books\">\r\n                <td>{{ item.title }}</td>\r\n                <td>{{ item.publisher }}</td>\r\n                <td>\r\n                    <ul>\r\n                        <li *ngFor=\"let author of item.authors\">\r\n                            {{ author }}\r\n                        </li>\r\n                    </ul>\r\n                </td>\r\n                <td>{{ item.description }}</td>\r\n                <td><a (click)=\"remove(item.id)\">Cancel</a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(31));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(7);
	var auth_service_1 = __webpack_require__(15);
	var styles = __webpack_require__(32);
	var template = __webpack_require__(34);
	var Login = (function () {
	    function Login(router, auth) {
	        this.router = router;
	        this.auth = auth;
	    }
	    Login.prototype.login = function (event, username, password) {
	        event.preventDefault();
	        this.auth.logIn(username, password);
	    };
	    Login.prototype.signup = function (event) {
	        event.preventDefault();
	        this.router.navigate(['signup']);
	    };
	    Login = __decorate([
	        core_1.Component({
	            selector: 'login',
	            template: template,
	            styles: [styles]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], Login);
	    return Login;
	}());
	exports.Login = Login;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(33);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".login {\n  width: 40%;\n}\n", ""]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login jumbotron center-block\">\n  <h1>Login</h1>\n  <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    <a [routerLink]=\"['/signup']\">Click here to Signup</a>\n</form>\n</div>\n"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(36));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(7);
	var auth_service_1 = __webpack_require__(15);
	var styles = __webpack_require__(37);
	var template = __webpack_require__(39);
	var Signup = (function () {
	    function Signup(router, auth) {
	        this.router = router;
	        this.auth = auth;
	    }
	    Signup.prototype.signup = function (event, username, password) {
	        event.preventDefault();
	        this.auth.signUp(username, password);
	    };
	    Signup.prototype.login = function (event) {
	        event.preventDefault();
	        this.router.navigate(['login']);
	    };
	    Signup = __decorate([
	        core_1.Component({
	            selector: 'signup',
	            template: template,
	            styles: [styles]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], Signup);
	    return Signup;
	}());
	exports.Signup = Signup;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(38);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".signup {\n  width: 40%;\n}\n", ""]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"signup center-block jumbotron\">\n  <h1>Signup</h1>\n  <form role=\"form\" (submit)=\"signup($event, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      <a [routerLink]=\"['/login']\">Click here to Login</a>\n</form>\n</div>\n"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(7);
	var angular2_jwt_1 = __webpack_require__(8);
	var AuthGuard = (function () {
	    function AuthGuard(router) {
	        this.router = router;
	    }
	    AuthGuard.prototype.canActivate = function () {
	        if (angular2_jwt_1.tokenNotExpired()) {
	            return true;
	        }
	        this.router.navigate(['/login']);
	        return false;
	    };
	    AuthGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AuthGuard);
	    return AuthGuard;
	}());
	exports.AuthGuard = AuthGuard;


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDFmYzY1NmMyOTZhMjcwZjY3MmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWp3dFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tb24vYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tb24vYm9va3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXJib29rcy91c2VyYm9va3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyYm9va3MvdXNlcmJvb2tzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcz8wYmJlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZ251cC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jc3M/ZTdiOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbW9uL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHFCQUFPLENBQThCLENBQUM7QUFDdEMscUJBQU8sQ0FBUyxDQUFDO0FBQ2pCLGtDQUErQixDQUFlLENBQUM7QUFDL0MsZ0RBQW9DLENBQW9CLENBQUM7QUFDekQsd0NBQTBCLENBQWtCLENBQUM7QUFFN0Msc0JB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QUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDLENBQUM7S0FFRCxzQkFBSyxHQUFMLFVBQU0sS0FBSztTQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEMsQ0FBQztLQWpCSDtTQUFDLGdCQUFTLENBQUM7YUFDVCxRQUFRLEVBQUUsUUFBUTthQUNsQixRQUFRLEVBQUUsUUFBUTthQUNsQixNQUFNLEVBQUUsQ0FBRSxNQUFNLENBQUU7VUFDbkIsQ0FBQzs7ZUFBQTtLQWVGLGFBQUM7QUFBRCxFQUFDO0FBZFksZUFBTSxTQWNsQjs7Ozs7Ozs7QUN6QkQ7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMsZUFBZSxHQUFHOztBQUVyRDs7Ozs7OztBQ1BBLHdyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGtDQUEyQixDQUFlLENBQUM7QUFDM0Msb0NBQW9DLENBQWlCLENBQUM7QUFDdEQsMENBQWdDLENBQWMsQ0FBQztBQUkvQztLQUNFLG1CQUFvQixNQUFjO1NBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtLQUFHLENBQUM7S0FFdEMsK0JBQVcsR0FBWDtTQUNFLEVBQUUsQ0FBQyxDQUFDLDhCQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNkLENBQUM7U0FFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNmLENBQUM7S0FYSDtTQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0tBWWIsZ0JBQUM7QUFBRCxFQUFDO0FBWFksa0JBQVMsWUFXckIiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MWZjNjU2YzI5NmEyNzBmNjcyYSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQVVUSF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29rc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckJvb2tzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJib29rcy91c2VyYm9va3MuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWdudXAnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoLmd1YXJkJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9va3NTZXJ2aWNlLCBQYWdlZEJvb2tzLCBGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL2Jvb2tzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBVc2VyQm9va3NDb21wb25lbnQsXG4gICAgICAgIEJvb2tzQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpbixcbiAgICAgICAgU2lnbnVwXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW4gfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdib29rcy1teScsIGNvbXBvbmVudDogVXNlckJvb2tzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdib29rcy1kYXRhJywgY29tcG9uZW50OiBCb29rc0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG4gICAgICAgIF0pXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoR3VhcmQsIEF1dGhTZXJ2aWNlLCBCb29rc1NlcnZpY2UsIC4uLkFVVEhfUFJPVklERVJTXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWp3dFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWp3dFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b2tlbk5vdEV4cGlyZWQgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYXV0aC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkgeyB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRva2VuTm90RXhwaXJlZCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBjb250ZW50SGVhZGVycyB9IGZyb20gJy4uL2NvbW1vbi9oZWFkZXJzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB1c2VyTG9nZ2VkSW4kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHB1YmxpYyB1c2VyTG9nZ2VkT3V0JDogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLnVzZXJMb2dnZWRJbiQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgICAgICB0aGlzLnVzZXJMb2dnZWRPdXQkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICB9XHJcbiAgICBsb2dnZWRJbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMudXNlckxvZ2dlZE91dCQuZW1pdChcIlwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluKCkgPyBsb2NhbFN0b3JhZ2VbXCJ1c2VybmFtZVwiXSA6IFwiVW5hdXRob3JpemVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKHVzZXJuYW1lLCBwYXNzd29yZCl7XHJcbiAgICAgICAgdGhpcy5zZW5kKHVzZXJuYW1lLHBhc3N3b3JkLCAnL2FwaS91c2Vycy9yZWdpc3RlcicpO1xyXG4gICAgfVxyXG4gICAgbG9nSW4odXNlcm5hbWUsIHBhc3N3b3JkKXtcclxuICAgICAgICB0aGlzLnNlbmQodXNlcm5hbWUscGFzc3dvcmQsICcvYXBpL3VzZXJzL2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kKHVzZXJuYW1lLCBwYXNzd29yZCwgdXJsKXtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgeyBoZWFkZXJzOiBjb250ZW50SGVhZGVycyB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIHJlc3BvbnNlLmpzb24oKS5pZF90b2tlbik7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dnZWRJbiQuZW1pdCh1c2VybmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbW9uL2F1dGguc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnRIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbmNvbnRlbnRIZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbmNvbnRlbnRIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlcnMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5Cb29rcyg8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyJz48L3NwYW4+IHt7YXV0aC51c2VyTmFtZSgpfX0pPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgICpuZ0lmPVxcXCJhdXRoLmxvZ2dlZEluKClcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYm9va3MtZGF0YSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2gnPjwvc3Bhbj4gU2VhcmNoXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiYXV0aC5sb2dnZWRJbigpXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2Jvb2tzLW15J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gTXkgQm9va3NcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCJhdXRoLmxvZ2dlZEluKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYXV0aC5sb2dPdXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dCc+PC9zcGFuPiBMb2dPdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVxcXCIhYXV0aC5sb2dnZWRJbigpXFxcIiBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW4nPjwvc3Bhbj4gTG9naW5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIFxyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+RGVtbyBhcHAgZm9yIENyb3Nzb3ZlciB0ZXN0ITwvaDE+XFxuXFxuXFxuPHA+WW91IGhhdmUgdG8gbG9naW4uPC9wPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2tzU2VydmljZSwgUGFnZWRCb29rcywgRmlsdGVyIH0gZnJvbSAnLi4vY29tbW9uL2Jvb2tzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jvb2tzJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ib29rcy5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tzQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcGFnZWRCb29va3M6IFBhZ2VkQm9va3M7XG5cbiAgICBwdWJsaWMgY3VycmVudEZpbHRlciA9IG5ldyBGaWx0ZXIoXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgMCwgMTApO1xuICAgIHB1YmxpYyBwYWdlTnVtYmVycyA9IFtdXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBib29rc1NlcnZpY2U6IEJvb2tzU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlbG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFBhZ2UoaSkge1xuICAgICAgICBpZiAoaSAhPSB0aGlzLnBhZ2VkQm9vb2tzLmN1cnJlbnRQYWdlICYmIGkgPj0gMCAmJiBpIDwgdGhpcy5wYWdlZEJvb29rcy50b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIucGFnZSA9IGk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RTZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLnBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnJlcXVlc3RTZXJ2ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWVzdFNlcnZlcigpIHtcbiAgICAgICAgLy90aGlzLnBhZ2VkQm9vb2tzID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJvb2tzU2VydmljZS5zZWFyY2godGhpcy5jdXJyZW50RmlsdGVyKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkQm9vb2tzID0gcmVzdWx0O1xuICAgICAgICAgICAgbGV0IHN0YXJ0UGFnZSA9IE1hdGgubWF4KDEsIHRoaXMucGFnZWRCb29va3MuY3VycmVudFBhZ2UgLSA0KTtcbiAgICAgICAgICAgIGxldCBlbmRQYWdlID0gTWF0aC5taW4odGhpcy5wYWdlZEJvb29rcy50b3RhbFBhZ2VzLCBzdGFydFBhZ2UgKyA5KTtcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcnMgPSBbXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcnMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcclxuICAgIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFVSTFNlYXJjaFBhcmFtcywgUmVzcG9uc2UgIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgY29udGVudEhlYWRlcnMgfSBmcm9tICcuLi9jb21tb24vaGVhZGVycyc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQgJ3J4anMvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9SeCc7XG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQm9va3NTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaWRzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyB1c2VyQm9va3NMb2FkZWQ6IFByb21pc2U8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzZXJCb29rc0xvYWRlZCA9IHRoaXMubG9hZFVzZXJCb29rcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbG9hZFVzZXJCb29rcygpOiBQcm9taXNlPEJvb2tbXT57XHJcbiAgICAgICAgbGV0IG8gPSB0aGlzLmF1dGhIdHRwLmdldCgnL2FwaS91c2Vycy9ib29rcycpLm1hcCh0aGlzLmV4dHJhY3REYXRhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uc3Vic2NyaWJlKGJvb2tzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGIgb2YgYm9va3MpIC8vIGZvciBhY3RzIGFzIGEgZm9yZWFjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRzLnB1c2goYi5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYm9va3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWFyY2goZmlsdGVyOiBGaWx0ZXIpOiBQcm9taXNlPFBhZ2VkQm9va3M+e1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgc2VhcmNoOiBmaWx0ZXIudG9QYXJhbXMoKVxyXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoJy9hcGkvYm9va3Mvc2VhcmNoJywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJCb29rc0xvYWRlZC50aGVuKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUmVxdWVzdGVkKGJvb2tJZCl7XHJcbiAgICAgICAgbGV0IGRlbWFuZHMgPSB0aGlzLnVzZXJEZW1hbmRzSWRzKCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbWFuZHMuaW5kZXhPZihib29rSWQpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFVzZXJEZW1hbmQoaWQgOiBudW1iZXIpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdGVkKGlkKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGlkIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvdXNlcnMvYm9va3MnLCBib2R5LCB7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUob2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGQgPSB0aGlzLnVzZXJEZW1hbmRzSWRzKCk7XHJcbiAgICAgICAgICAgICAgICBkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVXNlckRlbWFuZChib29rSWQpe1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlcXVlc3RlZChib29rSWQpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS91c2Vycy9ib29rcy8ke2Jvb2tJZH1gO1xyXG4gICAgICAgIGxldCBvID0gdGhpcy5hdXRoSHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pO1xyXG4gICAgICAgIG8uc3Vic2NyaWJlKG9rID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy51c2VyRGVtYW5kc0lkcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoYm9va0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXNlckRlbWFuZHNJZHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGF1dGhvcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBwdWJsaXNoZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcGFnZTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyB0b1BhcmFtcygpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuc2V0KFwidGl0bGVcIiwgdGhpcy50aXRsZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoXCJkZXNjcmlwdGlvblwiLCB0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcGFyYW1zLnNldChcImF1dGhvclwiLCB0aGlzLmF1dGhvcik7XG4gICAgICAgIHBhcmFtcy5zZXQoXCJwdWJsaXNoZXJcIiwgdGhpcy5wdWJsaXNoZXIpO1xuICAgICAgICBwYXJhbXMuc2V0KFwicGFnZVwiLCB0aGlzLnBhZ2UudG9TdHJpbmcoKSk7XG4gICAgICAgIHBhcmFtcy5zZXQoXCJwYWdlU2l6ZVwiLCB0aGlzLnBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2sge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaXNoZXI6IHN0cmluZztcbiAgICBhdXRob3JzOiBzdHJpbmdbXTtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VkQm9va3Mge1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgdG90YWxQYWdlczogbnVtYmVyO1xuICAgIGl0ZW1zOiBCb29rW107XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1vbi9ib29rcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkJvb2tzIHNlYXJjaDwvaDE+XFxuXFxuPHA+VGhlcmUgeW91IGNvdWxkIHNlYXJjaCBwdWJsaXNoZXIgYm9va3MuPC9wPlxcblxcbjxmb3JtIGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1sZy02XFxcIiA+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYXV0aG9yXFxcIiBbKG5nTW9kZWwpXT1cXFwiY3VycmVudEZpbHRlci5hdXRob3JcXFwiIHBsYWNlaG9sZGVyPVxcXCJBdXRob3JcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgWyhuZ01vZGVsKV09XFxcImN1cnJlbnRGaWx0ZXIudGl0bGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJUaXRsZVxcXCIgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY29sLWxnLTZcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiY3VycmVudEZpbHRlci5kZXNjcmlwdGlvblxcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXB0aW9uXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicHVibGlzaGVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY3VycmVudEZpbHRlci5wdWJsaXNoZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJQdWJsaXNoZXJcXFwiIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwicmVsb2FkRGF0YSgpXFxcIj5TZWFyY2g8L2J1dHRvbj5cXHJcXG48L2Zvcm0+XFxuXFxuPHAgKm5nSWY9XFxcIiFwYWdlZEJvb29rc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXG5cXG48ZGl2ICpuZ0lmPVxcXCJwYWdlZEJvb29rc1xcXCI+XFxuICAgIDxoMj5Ub3RhbCBJdGVtcyBmb3VuZCB7e3BhZ2VkQm9vb2tzLnRvdGFsSXRlbXN9fTwvaDI+XFxyXFxuICAgIDxuYXYgYXJpYS1sYWJlbD1cXFwiUGFnZSBuYXZpZ2F0aW9uXFxcIj5cXHJcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwcmV2aW91cyB7e3BhZ2VkQm9vb2tzLmN1cnJlbnRQYWdlID09IDAgPyAnZGlzYWJsZWQnIDogJyd9fVxcXCI+PGEgKGNsaWNrKT1cXFwibG9hZFBhZ2UocGFnZWRCb29va3MuY3VycmVudFBhZ2UgLSAxKVxcXCI+UHJldmlvdXM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiB0aGlzLnBhZ2VOdW1iZXJzXFxcIiBjbGFzcz1cXFwie3twYWdlID09IChwYWdlZEJvb29rcy5jdXJyZW50UGFnZSArIDEpID8gJ2Rpc2FibGVkJyA6ICcnfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJsb2FkUGFnZShwYWdlLSAxKVxcXCI+e3twYWdlfX08L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5leHQgIHt7cGFnZWRCb29va3MuY3VycmVudFBhZ2UgPj0gKHBhZ2VkQm9vb2tzLnRvdGFsUGFnZXMtMSkgPyAnZGlzYWJsZWQnIDogJyd9fVxcXCI+PGEgIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlclxcXCIgKGNsaWNrKT1cXFwibG9hZFBhZ2UocGFnZWRCb29va3MuY3VycmVudFBhZ2UgKyAxKVxcXCI+TmV4dDwvYT48L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9uYXY+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgIHRhYmxlLXN0cmlwZWQnPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPlB1Ymxpc2hlcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aD5BdXRob3JzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkRlbWFuZDwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgcGFnZWRCb29va3MuaXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgaXRlbS50aXRsZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtLnB1Ymxpc2hlciB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgYXV0aG9yIG9mIGl0ZW0uYXV0aG9yc1xcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhdXRob3IgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGl0ZW0uZGVzY3JpcHRpb24gfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIWJvb2tzU2VydmljZS5pc1JlcXVlc3RlZChpdGVtLmlkKVxcXCIgKGNsaWNrKT1cXFwiYm9va3NTZXJ2aWNlLmFkZFVzZXJEZW1hbmQoaXRlbS5pZClcXFwiPlJlcXVlc3Q8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiYm9va3NTZXJ2aWNlLmlzUmVxdWVzdGVkKGl0ZW0uaWQpXFxcIiAoY2xpY2spPVxcXCJib29rc1NlcnZpY2UucmVtb3ZlVXNlckRlbWFuZChpdGVtLmlkKVxcXCI+Q2FuY2VsPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbjwvZGl2PlxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2tzU2VydmljZSwgQm9vayB9IGZyb20gJy4uL2NvbW1vbi9ib29rcy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VzZXJib29rcycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdXNlcmJvb2tzLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgVXNlckJvb2tzQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgYm9va3M6IEJvb2tbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYm9va3NTZXJ2aWNlOiBCb29rc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZShib29rSWQpIHtcbiAgICAgICAgdGhpcy5ib29rc1NlcnZpY2UucmVtb3ZlVXNlckRlbWFuZChib29rSWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmJvb2tzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlfbnVtYmVyID0gK2k7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9va3NbaV9udW1iZXJdLmlkID09IGJvb2tJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tzLnNwbGljZShpX251bWJlciwxKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKCkge1xuICAgICAgICB0aGlzLmJvb2tzU2VydmljZS5sb2FkVXNlckJvb2tzKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib29rcyA9IHJlc3VsdDtcbiAgICAgICAgfSk7XHJcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlcmJvb2tzL3VzZXJib29rcy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPlJlcXVlc3RlZCBib29rczwvaDE+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFib29rc1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJib29rc1xcXCI+XFxyXFxuICAgIDxoMj5Ub3RhbCBJdGVtcyBmb3VuZCB7e2Jvb2tzLmxlbmd0aH19PC9oMj5cXHJcXG5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPSd0YWJsZSAgdGFibGUtc3RyaXBlZCc+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+UHVibGlzaGVyPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkF1dGhvcnM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+RGVtYW5kPC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBib29rc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtLnRpdGxlIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGl0ZW0ucHVibGlzaGVyIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBhdXRob3Igb2YgaXRlbS5hdXRob3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXV0aG9yIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtLmRlc2NyaXB0aW9uIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPjxhIChjbGljayk9XFxcInJlbW92ZShpdGVtLmlkKVxcXCI+Q2FuY2VsPC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyYm9va3MvdXNlcmJvb2tzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2xvZ2luJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2F1dGguc2VydmljZSc7XG5cblxuY29uc3Qgc3R5bGVzICAgPSByZXF1aXJlKCcuL2xvZ2luLmNzcycpO1xuY29uc3QgdGVtcGxhdGUgPSByZXF1aXJlKCcuL2xvZ2luLmh0bWwnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4nLFxuICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gIHN0eWxlczogWyBzdHlsZXMgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xuICB9XG5cbiAgbG9naW4oZXZlbnQsIHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLmxvZ0luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gIH1cblxuICBzaWdudXAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2lnbnVwJ10pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4udHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9sb2dpbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9naW4ge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibG9naW4ganVtYm90cm9uIGNlbnRlci1ibG9ja1xcXCI+XFxuICA8aDE+TG9naW48L2gxPlxcbiAgPGZvcm0gcm9sZT1cXFwiZm9ybVxcXCIgKHN1Ym1pdCk9XFxcImxvZ2luKCRldmVudCwgdXNlcm5hbWUudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiICN1c2VybmFtZSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCI+XFxuICA8L2Rpdj5cXG4gIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG4gICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zaWdudXAnXVxcXCI+Q2xpY2sgaGVyZSB0byBTaWdudXA8L2E+XFxuPC9mb3JtPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9zaWdudXAnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZ251cC9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2F1dGguc2VydmljZSc7XG5cbmNvbnN0IHN0eWxlcyAgID0gcmVxdWlyZSgnLi9zaWdudXAuY3NzJyk7XG5jb25zdCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vc2lnbnVwLmh0bWwnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICBzdHlsZXM6IFsgc3R5bGVzIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gIH1cblxuICBzaWdudXAoZXZlbnQsIHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLnNpZ25VcCh1c2VybmFtZSwgcGFzc3dvcmQpO1xuICB9XG5cbiAgbG9naW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaWdudXAuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2lnbnVwIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic2lnbnVwIGNlbnRlci1ibG9jayBqdW1ib3Ryb25cXFwiPlxcbiAgPGgxPlNpZ251cDwvaDE+XFxuICA8Zm9ybSByb2xlPVxcXCJmb3JtXFxcIiAoc3VibWl0KT1cXFwic2lnbnVwKCRldmVudCwgdXNlcm5hbWUudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiICN1c2VybmFtZSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCI+XFxuICA8L2Rpdj5cXG4gIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG4gICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPkNsaWNrIGhlcmUgdG8gTG9naW48L2E+XFxuPC9mb3JtPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2tlbk5vdEV4cGlyZWQgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0b2tlbk5vdEV4cGlyZWQoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1vbi9hdXRoLmd1YXJkLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==