(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title><strong>Cadastrar</strong></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"text-align: center;\">\n            <ion-col size-md=\"12\" push-md=\"0\" class=\"user-image\">\n                <img \n                    [ngClass]=\"image ? 'user-photo' : 'no-photo'\"\n                    [src]=\"image ? image : '/assets/icon/login.png'\"\n                \n                >\n                <ion-fab-button (click)=\"takePhoto()\" style=\"text-align: center;\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                </ion-fab-button>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    <form>\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"finger-print-outline\"></ion-icon> Matrícula</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"person-outline\"></ion-icon> Nome Completo</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail-unread-outline\"></ion-icon> E-mail</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"lock-open-outline\"></ion-icon> Senha</ion-label>\n            <ion-input type=\"password\" required></ion-input>\n        </ion-item>\n\n        <ion-row>\n            <ion-col>\n                <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"registration()\"><strong>Cadastrar</strong></ion-button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registration/registration-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/registration/registration-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.component */
    "./src/app/registration/registration.component.ts");

    const routes = [{
      path: '',
      component: _registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }];
    let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {};
    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registration/registration.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/registration/registration.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationRegistrationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-image {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.user-image .user-photo {\n  height: 230px;\n  width: 280px;\n  margin-bottom: 10px;\n}\n.user-image .no-photo {\n  height: 120px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvaG5ueXJ0L215cHJvamVjdHMvc21hcnQtaWNlLXByb2plY3Qvc3JjL21vYmlsZS9zcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pbWFnZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAudXNlci1waG90byB7XG4gICAgICAgIGhlaWdodDogMjMwcHg7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubm8tcGhvdG8ge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxufSIsIi51c2VyLWltYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51c2VyLWltYWdlIC51c2VyLXBob3RvIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnVzZXItaW1hZ2UgLm5vLXBob3RvIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");

    let RegistrationComponent = class RegistrationComponent {
      constructor(route, camera) {
        this.route = route;
        this.camera = camera;
      }

      ngOnInit() {}

      registration() {
        this.route.navigateByUrl('/dice-user');
      }

      takePhoto() {
        this.camera.takePhoto().then(() => {
          this.image = this.camera.currentPhoto;
        });
      }

    };

    RegistrationComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
    }];

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.scss */
      "./src/app/registration/registration.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]])], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/registration/registration.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registration/registration.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.component */
    "./src/app/registration/registration.component.ts");

    let RegistrationPageModule = class RegistrationPageModule {};
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
      declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");

    let PhotoService = class PhotoService {
      constructor(camera) {
        this.camera = camera;
      }

      takePhoto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
          };
          yield this.camera.getPicture(options).then(imageData => {
            this.currentPhoto = 'data:image/jpeg;base64,' + imageData;
          }, err => {});
        });
      }

    };

    PhotoService.ctorParameters = () => [{
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
    }];

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]])], PhotoService);
    /***/
  }
}]);
//# sourceMappingURL=registration-registration-module-es5.js.map