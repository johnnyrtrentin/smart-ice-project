(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <strong>Smart Ice</strong>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"auth-form\">\n    <ion-grid>\n        <ion-row>\n            <ion-col align-self-center>\n                <ion-button [routerLink]=\"['/registration']\" expand=\"block\" color=\"primary\"><strong>Cadastrar</strong></ion-button>\n\n                <span class=\"divider line one-line\">Ou</span>\n\n                <span class=\"already\">Possui cadastrado ?</span>\n\n                <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\"><strong> Entrar</strong></ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divider {\n  display: -webkit-box;\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.line {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvaG5ueXJ0L215cHJvamVjdHMvc21hcnQtaWNlLXByb2plY3Qvc3JjL21vYmlsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNBSjtBREVJO0VBRUUsV0FBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0ROO0FES0E7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRko7QURJSTtFQUVFLFdBQUE7RUFDQSxhQUFBO0FDSE47QURRSTtFQUVHLG1CQUFBO0FDTlA7QURVQTs7RUFFSSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1BKO0FEVUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZmxleDogMTtcbiAgICB9XG59XG4gIFxuLmxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgICB9XG59IFxuXG4ub25lLWxpbmUge1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgfVxufVxuXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxuLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbHJlYWR5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59IiwiLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdmlkZXI6YmVmb3JlLCAuZGl2aWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDE7XG59XG5cbi5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG4ubGluZTpiZWZvcmUsIC5saW5lOmFmdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbi5vbmUtbGluZTpiZWZvcmUsIC5vbmUtbGluZTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG5cbi5hdXRoLWZvcm0gaW9uLWdyaWQsXG4uYXV0aC1mb3JtIGlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HomePage = class HomePage {
      constructor() {}

    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map