(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-to-dos/list-to-dos.component */ "./src/app/list-to-dos/list-to-dos.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'welcome/:name', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'todos', component: _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_3__["ListToDosComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: 'todos/:id', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}! \n    {{ message }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<app-welcome></app-welcome>-->\n\n<!-- <app-login></app-login> -->\n\n <!-- <div>Component Content</div> -->\n\n<app-menu></app-menu>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
        this.message = 'welcome back';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL, TOKEN, AUTHENTICATED_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
var API_URL = "http://localhost:8080";
var TOKEN = "token";
var AUTHENTICATED_USER = "authenticaterUser";


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-to-dos/list-to-dos.component */ "./src/app/list-to-dos/list-to-dos.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/http/http-intercepter-basic-auth.service */ "./src/app/service/http/http-intercepter-basic-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
                _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_8__["ListToDosComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_14__["HttpIntercepterBasicAuthService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  error works!\n</p> -->\n<!-- \nSome Error Happened -->\n\n{{errorMessage}}"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'An Error Occured! Contact Support at ***-***';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: #222222;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjs7Q0FFN0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  footer works!\n</p>\n\n<BR><BR>\n\n FOOTER  -->\n\n <footer class = \"footer\">\n   <div class= \"container\"> \n      <span class = \"text-white\">ALL Rights reserved 2021@AmorCorporation</span>\n   </div>\n </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/list-to-dos/list-to-dos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-to-dos/list-to-dos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdG8tZG9zL2xpc3QtdG8tZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-to-dos/list-to-dos.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-to-dos/list-to-dos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  list-to-dos works!\n</p> -->\n<h1>My Todo's</h1>\n\n<div class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\n\n\n<div class=\"container\">\n  <table class=\"table\">\n    <!-- <caption> My Todo's </caption> -->\n    <thead>\n      <tr>\n        <th>Description</th>\n        <th>Target Date</th>\n        <th>Is Completed?</th>\n        <th>Update</th>\n        <th>Delete</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <!-- for (todo todo: todos) { -->\n      <tr *ngFor=\"let todo of todos\">\n        <td>{{todo.description}}</td>\n        <td>{{todo.targetDate | date |uppercase}}</td>\n        <td>{{todo.done}}</td>\n        <td> <button (click)=\"updateTodo(todo.id)\" class=\"btn btn-success\">Update</button></td>\n        <td> <button (click)=\"deleteTodo(todo.id)\" class=\"btn btn-warning\">Delete</button></td>\n      </tr>\n      <!-- }-->\n    </tbody>\n  </table>\n  <button (click)=\"addNewToDo()\" class=\"btn btn-success\">Add New toDo</button>\n</div>"

/***/ }),

/***/ "./src/app/list-to-dos/list-to-dos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-to-dos/list-to-dos.component.ts ***!
  \******************************************************/
/*! exports provided: Todo, ListToDosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListToDosComponent", function() { return ListToDosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = /** @class */ (function () {
    function Todo(id, description, done, targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }
    return Todo;
}());

var ListToDosComponent = /** @class */ (function () {
    // todos=[
    //   new Todo(1 , 'Learn to dance', false, new Date()),
    //   new Todo(2 , 'Became an Expert at Angular', false, new Date()),
    //   new Todo(3 , 'Visit India', false, new Date()),
    //   new Todo(4 , 'Visit USA', false, new Date()),
    //   new Todo(5 , 'Visit Marroco', false, new Date())
    //   // {id: 1 , description: 'Learn to dance'},
    //   // {id: 2 , description: 'Became an Expert at Angular'},
    //   // {id: 3 , description: 'Visit India'},
    //   // {id: 4 , description: 'Visit USA '},
    //   // {id: 5 , description: 'Visit Marroco '}
    // ]
    // todo = {
    //   id : 1 ,
    //   description : 'learn to Dance' 
    // }
    function ListToDosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ListToDosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.retrieveAllTodos('Amor').subscribe(
        // response => this.handleSeccessfulResponse(response),
        // error => this.handleErrorResponse(error)
        function (response) {
            console.log(response);
            _this.todos = response;
        });
    };
    ListToDosComponent.prototype.refrechTodods = function () {
        var _this = this;
        this.todoService.retrieveAllTodos('Amor').subscribe(
        // response => this.handleSeccessfulResponse(response),
        // error => this.handleErrorResponse(error)
        function (response) {
            console.log(response);
            _this.todos = response;
        });
    };
    ListToDosComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        console.log("delete todo " + id);
        this.todoService.deleteTodo('Amor', id).subscribe(function (response) {
            console.log(response);
            _this.message = "Delete of Todo " + id + " Successful!";
            _this.refrechTodods();
        });
    };
    ListToDosComponent.prototype.updateTodo = function (id) {
        console.log("Update todo " + id);
        this.router.navigate(['todos', id]);
        // this.todoService.updateTodo('Amor', id).subscribe(
        //   response => {
        //     console.log(response);
        //     this.message = `Update of Todo ${id} Successful!`;
        //     this.refrechTodods();
        //   }
        // );
    };
    ListToDosComponent.prototype.addNewToDo = function () {
        this.router.navigate(['todos', -1]);
    };
    ListToDosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-to-dos',
            template: __webpack_require__(/*! ./list-to-dos.component.html */ "./src/app/list-to-dos/list-to-dos.component.html"),
            styles: [__webpack_require__(/*! ./list-to-dos.component.css */ "./src/app/list-to-dos/list-to-dos.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_2__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListToDosComponent);
    return ListToDosComponent;
}());

// handleSeccessfulResponse(response){
//   this.welcomeMessageFromService = response.message;
// }
// handleErrorResponse(error){
//   this.welcomeMessageFromService = error.error.message;
// }


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login!</h1>\n<div class=\"container\">\n    <div class= \"alert alert-warning\" *ngIf=\"invalidLogin\">{{errorMessage}}</div>\n\n    <div>\n\n        User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\n        Password : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n\n\n        <!-- <button (click)=handlelogin() class=\"btn btn-success\">Login</button> -->\n        <!-- <button (click)=handleBasicAuthLogin() class=\"btn btn-success\">Login</button> -->\n        <button (click)=handleJWTAuthLogin() class=\"btn btn-success\">Login</button>\n \n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    // router 
    //Angular giveMeRouter()
    //Dependency Injection
    function LoginComponent(router, hardcodedAuthenticationService, basicAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.basicAuthenticationService = basicAuthenticationService;
        this.username = "amor";
        this.password = "";
        this.errorMessage = "Invalid Credentials";
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handlelogin = function () {
        console.log(this.username);
        console.log(this.password);
        // if(this.username ==="amor" && this.password === "maycem"){
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            //redirect to welcome page
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.handleJWTAuthLogin = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.password);
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.handleBasicAuthLogin = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.password);
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"],
            _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__["BasicAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1> You are logged out </H1>\n<div class=\"container\">\n  Thank You For Using Our Application.\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthenticationService.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  menu works!\n</p> -->\n<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div><a href=\"htpps.//www.amor-corporation.com\" class=\"navbar-brand\"> AMOR Corporation</a></div>\n\n    <ul class=\"navbar-nav\">\n      <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/welcome/amor\" class=\"nav-link\">Home</a></li>\n      <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/todos\" class=\"nav-link\">Todos</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-collapse justify-content-end \">\n      <li><a *ngIf= \"!hardcodedAuthenticationService.isUserLoggedIn()\"routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n      <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">Logout</a></li>\n    </ul>\n\n\n  </nav>\n\n</header>\n<!-- TOP MENU ELEMENTS <BR><BR> -->"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    //isUserLoggedIn: boolean = false;
    function MenuComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/basic-authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/basic-authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationBean, BasicAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function() { return AuthenticationBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationBean = /** @class */ (function () {
    function AuthenticationBean(message) {
        this.message = message;
    }
    return AuthenticationBean;
}());

var BasicAuthenticationService = /** @class */ (function () {
    function BasicAuthenticationService(http) {
        this.http = http;
    }
    // executeAuthenticationService(username, password) {
    //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    //   let headers = new HttpHeaders({
    //       Authorization: basicAuthHeaderString
    //     })
    //   return this.http.get<AuthenticationBean>(
    //     `${API_URL}/basicauth`,
    //     {headers}).pipe(
    //       map(
    //         data => {
    //           sessionStorage.setItem(AUTHENTICATED_USER, username);
    //           sessionStorage.setItem(TOKEN, basicAuthHeaderString);
    //           return data;
    //         }
    //       )
    //     );
    //   //console.log("Execute Hello World Bean Service")
    // }
    BasicAuthenticationService.prototype.executeJWTAuthenticationService = function (username, password) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/authenticate", { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            sessionStorage.setItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED_USER"], username);
            sessionStorage.setItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN"], "Bearer " + data.token);
            return data;
        }));
    };
    BasicAuthenticationService.prototype.executeAuthenticationService = function (username, password) {
        var basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/basicauth", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            sessionStorage.setItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED_USER"], username);
            sessionStorage.setItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN"], basicAuthHeaderString);
            return data;
        }));
    };
    BasicAuthenticationService.prototype.getAuthenticatedUser = function () {
        return sessionStorage.getItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED_USER"]);
    };
    BasicAuthenticationService.prototype.getAuthenticatedToken = function () {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);
    };
    BasicAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED_USER"]);
        return !(user === null);
    };
    BasicAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED_USER"]);
        sessionStorage.removeItem(_app_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);
    };
    BasicAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BasicAuthenticationService);
    return BasicAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username + "/todos");
    };
    TodoDataService.prototype.deleteTodo = function (username, id) {
        return this.http.delete(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.retrieveTodo = function (username, id) {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.updateTodo = function (username, id, todo) {
        return this.http.put(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username + "/todos/" + id, todo);
    };
    TodoDataService.prototype.createTodo = function (username, todo) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username + "/todos", todo);
    };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: helloworldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helloworldBean", function() { return helloworldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var helloworldBean = /** @class */ (function () {
    function helloworldBean(message) {
        this.message = message;
    }
    return helloworldBean;
}());

var WelcomeDataService = /** @class */ (function () {
    function WelcomeDataService(http) {
        this.http = http;
    }
    WelcomeDataService.prototype.executeHelloWorldBeanService = function () {
        // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        // let headers = new HttpHeaders({
        //   Authorization: basicAuthHeaderString
        // })
        return this.http.get('http://localhost:8080/hello-world-bean'
        // ,{ headers }
        );
        //console.log("Execute Hello World Bean Service")
    };
    // http://localhost:8080/hello-world/path-variable/amor
    WelcomeDataService.prototype.executeHelloWorldServiceWithPathVariable = function (name) {
        // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        // let headers = new HttpHeaders({
        //   Authorization: basicAuthHeaderString
        // })
        return this.http.get("http://localhost:8080/hello-world/path-variable/" + name
        // , { headers }
        );
    };
    WelcomeDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WelcomeDataService);
    return WelcomeDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HardcodedAuthenticationService = /** @class */ (function () {
    function HardcodedAuthenticationService() {
    }
    HardcodedAuthenticationService.prototype.authenticate = function (username, password) {
        console.log('before ' + this.isUserLoggedIn());
        if (username === "amor" && password === "maycem") {
            sessionStorage.setItem('authenticaterUser', username);
            console.log('after ' + this.isUserLoggedIn());
            return true;
        }
        return false;
    };
    HardcodedAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticaterUser');
        return !(user === null);
    };
    HardcodedAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticaterUser');
    };
    HardcodedAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HardcodedAuthenticationService);
    return HardcodedAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/http/http-intercepter-basic-auth.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/http/http-intercepter-basic-auth.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpIntercepterBasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function() { return HttpIntercepterBasicAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpIntercepterBasicAuthService = /** @class */ (function () {
    function HttpIntercepterBasicAuthService(basicAuthenticationService) {
        this.basicAuthenticationService = basicAuthenticationService;
    }
    HttpIntercepterBasicAuthService.prototype.intercept = function (request, next) {
        // let username = 'amor';
        // let password = 'maycem';
        // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
        var username = this.basicAuthenticationService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    };
    HttpIntercepterBasicAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__["BasicAuthenticationService"]])
    ], HttpIntercepterBasicAuthService);
    return HttpIntercepterBasicAuthService;
}());



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, hardcodedAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form){\r\n    border-left: 5px solid red ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKXtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkIDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  todo works!\n</p> -->\n<H1>Todo</H1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && todoForm.invalid\">Enter valid values</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && targetDate.invalid \">Enter valid Target Date</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && description.invalid \">Enter atleast 5 characters in Description</div>\n\n  <form (ngSubmit)=\"!todoForm.invalid && saveTodo()\" #todoForm=\"ngForm\">\n\n    <fieldset class=\"form-group\">\n      <label>Description</label>\n      <input #description=\"ngModel\" type=\"text\" [(ngModel)]=\"todo.description\" class=\"form-control\" name=\"description\" required=\"required\" minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>Target Date</label>\n      <input type=\"date\" #targetDate = \"ngModel\"[ngModel]=\"todo.targetDate | date : 'yyyy-MM-dd'\" (ngModelChange)=\"todo.targetDate = $event\"\n        class=\"form-control\" name=\"targetDate\" required=\"required\">\n    </fieldset>\n    <!-- <button (click)=\"updateTodo(todo.id)\" class=\"btn btn-success\">Update</button> -->\n    <button  type= \"submit\" class=\"btn btn-success\">Save</button>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-to-dos/list-to-dos.component */ "./src/app/list-to-dos/list-to-dos.component.ts");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.todo = new _list_to_dos_list_to_dos_component__WEBPACK_IMPORTED_MODULE_2__["Todo"](this.id, '', false, new Date());
        if (this.id != -1) {
            this.todoService.retrieveTodo('Amor', this.id).subscribe(function (data) {
                _this.todo = data;
                //   console.log("data description : "+data.description );
                //   console.log("data id : "+ data.id);
                //   console.log("data done : "+ data.done );
                //   console.log("data targetDate : "+ data.targetDate );
                // console.log("todo description after call : "+this.todo.description );
                // console.log("todo id after call : "+this.todo.id);
                // console.log("todo done after call : "+this.todo.done );
                // console.log("todo targetDate after call : "+this.todo.targetDate );
            });
        }
    };
    TodoComponent.prototype.saveTodo = function () {
        // console.log("todo description : " + this.todo.description);
        // console.log("todo id : " + this.todo.id);
        // console.log("todo done : " + this.todo.done);
        // console.log("todo targetDate : " + this.todo.targetDate);
        var _this = this;
        if (this.id === -1) {
            // call the create todo  WS
            this.todoService.createTodo('Amor', this.todo).subscribe(function (data) {
                console.log(data);
                // retur to the list todo page 
                _this.router.navigate(['todos']);
            });
        }
        else {
            this.todoService.updateTodo('Amor', this.id, this.todo).subscribe(function (data) {
                console.log(data);
                // retur to the list todo page 
                _this.router.navigate(['todos']);
            });
        }
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_3__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  welcome !\n</p> -->\n\n<!-- <div>Welcome {{name}}.\n  Welcome to our awesome App.\n\n</div> -->\n\n<div class=\"container\">\n  Welcome {{name}}.\n  Welcome to our awesome App. You can manage your todos<a routerLink=\"/todos\">here </a>\n\n</div>\n\n<div class=\"container\">\n  Click here to get a customized welcome message\n  <button (click)=\"getWelcomeMessagewhithParameter()\" class=\"btn btn-success\"> Get Welcome Message </button>\n</div>\n\n<div class=\"container\" *ngIf='welcomeMessageFromService'>\n  <H2> Your Customized Welcome Messsage</H2>\n{{welcomeMessageFromService}}\n</div>\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {AppComponent } from '../app.component';
var WelcomeComponent = /** @class */ (function () {
    //activatedRouter
    function WelcomeComponent(route, service) {
        this.route = route;
        this.service = service;
        this.message = 'some welcome Message';
        this.name = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        // console.log(this.message);
        // console.log(this.route.snapshot.params['name']);
        this.name = this.route.snapshot.params['name'];
    };
    WelcomeComponent.prototype.getWelcomeMessage = function () {
        var _this = this;
        // console.log(this.service.executeHelloWorldBeanService());
        this.service.executeHelloWorldBeanService().subscribe(function (response) { return _this.handleSeccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        // console.log('last line of getWelcomeMessage');
        //console.log("get welcome message");
    };
    WelcomeComponent.prototype.getWelcomeMessagewhithParameter = function () {
        var _this = this;
        // console.log(this.service.executeHelloWorldBeanService());
        this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(function (response) { return _this.handleSeccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        // console.log('last line of getWelcomeMessage');
        //console.log("get welcome message");
    };
    WelcomeComponent.prototype.handleSeccessfulResponse = function (response) {
        this.welcomeMessageFromService = response.message;
        //console.log(response.message);
    };
    WelcomeComponent.prototype.handleErrorResponse = function (error) {
        // console.log(error);
        // console.log(error.error);
        // console.log(error.error.message);
        this.welcomeMessageFromService = error.error.message;
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeDataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\angular\fontend\todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map