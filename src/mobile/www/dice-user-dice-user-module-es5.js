(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dice-user-dice-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-user/dice-user.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-user/dice-user.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDiceUserDiceUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title><strong>Insira seus Dados</strong></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form>\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"school-outline\"></ion-icon> Curso</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"chatbubbles-outline\"></ion-icon> Turma</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"book-outline\"></ion-icon> Disciplina</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"bookmark-outline\"></ion-icon> Sala</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n                <ion-icon name=\"time-outline\"></ion-icon> Horário de Saída do Local</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-row>\n            <ion-col>\n                <ion-button [routerLink]=\"['/location-user']\" type=\"submit\" color=\"success\" expand=\"block\"><strong>Confirmar</strong></ion-button>\n            </ion-col>\n        </ion-row>\n\n\n    </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dice-user/dice-user.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dice-user/dice-user.module.ts ***!
    \***********************************************/

  /*! exports provided: DiceUserPageModule */

  /***/
  function srcAppDiceUserDiceUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceUserPageModule", function () {
      return DiceUserPageModule;
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


    var _dice_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dice-user.page */
    "./src/app/dice-user/dice-user.page.ts");

    let DiceUserPageModule = class DiceUserPageModule {};
    DiceUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _dice_user_page__WEBPACK_IMPORTED_MODULE_6__["DiceUser"]
      }])],
      declarations: [_dice_user_page__WEBPACK_IMPORTED_MODULE_6__["DiceUser"]]
    })], DiceUserPageModule);
    /***/
  },

  /***/
  "./src/app/dice-user/dice-user.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dice-user/dice-user.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDiceUserDiceUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divider {\n  display: -webkit-box;\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.line {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvaG5ueXJ0L215cHJvamVjdHMvc21hcnQtaWNlLXByb2plY3Qvc3JjL21vYmlsZS9zcmMvYXBwL2RpY2UtdXNlci9kaWNlLXVzZXIucGFnZS5zY3NzIiwic3JjL2FwcC9kaWNlLXVzZXIvZGljZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FEQUk7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQ1I7QURHQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjtBRENJO0VBRUksV0FBQTtFQUNBLGFBQUE7QUNBUjtBREtJO0VBRUksbUJBQUE7QUNIUjtBRE9BOztFQUVJLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9kaWNlLXVzZXIvZGljZS11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLmxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxufVxuXG4ub25lLWxpbmUge1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIH1cbn1cblxuLmF1dGgtZm9ybSBpb24tZ3JpZCxcbi5hdXRoLWZvcm0gaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSIsIi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXZpZGVyOmJlZm9yZSwgLmRpdmlkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxO1xufVxuXG4ubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtIC0xZW07XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuLmxpbmU6YmVmb3JlLCAubGluZTphZnRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDAgMWVtO1xufVxuXG4ub25lLWxpbmU6YmVmb3JlLCAub25lLWxpbmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxuLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFscmVhZHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dice-user/dice-user.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dice-user/dice-user.page.ts ***!
    \*********************************************/

  /*! exports provided: DiceUser */

  /***/
  function srcAppDiceUserDiceUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceUser", function () {
      return DiceUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DiceUser = class DiceUser {
      constructor() {}

    };
    DiceUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dice-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dice-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-user/dice-user.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dice-user.page.scss */
      "./src/app/dice-user/dice-user.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DiceUser);
    /***/
  }
}]);
//# sourceMappingURL=dice-user-dice-user-module-es5.js.map