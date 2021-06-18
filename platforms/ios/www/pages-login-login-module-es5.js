(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n\t<ion-toolbar color=\"tertiary\">\n\t\t<ion-title>Login</ion-title>\n\t<ion-buttons slot=\"end\" (click)=\"dismiss()\">\n\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding content\">\n\t<form (ngSubmit)=\"doLogin()\" padding *ngIf=\"!loggedin\">\n    <ion-list class=\"ion-margin colo\">\n    <ion-item class=\"colo\">\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"login.user\" name=\"user\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></ion-input>\n    </ion-item>\n    <ion-item class=\"colo\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"login.pass\" name=\"pass\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"></ion-input>\n    </ion-item>\n    <ion-button mode=\"md\" expand=\"block\" type=\"submit\" class=\"ion-margin btn2\">Submit</ion-button>\n  </ion-list>\n  </form>\n\t<p class=\"pp\">Don't have a login? Please create an account on <a href=\"https://glmpiapp.com/register\">our app website</a></p>\n\t<div *ngIf=\"loggedin\">\n\t\tWelcome back!\n\t\t<p>&nbsp;</p>\n\t\t<ion-button (click)=\"doLogout()\">Logout</ion-button>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pp {\n  text-align: center;\n  margin-top: 43px;\n}\n\n.content {\n  --background: #f5f1e9;\n}\n\n.colo {\n  background: #f5f1e9;\n  --background: #f5f1e9;\n}\n\n.btn2 {\n  height: 47px;\n  /* height: 2.8em; */\n  /* font-size: 1.6rem; */\n  color: #fff;\n  /* background-color: #2d5292; */\n  --background: #2d5292;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQyxnQkFBQTtBQUNMOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW4tdG9wOiA0M3B4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmMWU5O1xyXG59XHJcbi5jb2xve1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjFlOTtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjFlOTtcclxufVxyXG4uYnRuMntcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIC8qIGhlaWdodDogMi44ZW07ICovXHJcbiAgICAvKiBmb250LXNpemU6IDEuNnJlbTsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzJkNTI5MjsgKi9cclxuICAgIC0tYmFja2dyb3VuZDogIzJkNTI5MjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/login/login.service */
      "./src/app/services/login/login.service.ts");
      /* harmony import */


      var _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/Storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/events/events.service */
      "./src/app/services/events/events.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(navCtrl, toastCtrl, loginProvider, loadingCtrl, viewCtrl, storage, events, loadingController) {
          _classCallCheck(this, LoginPage);

          this.navCtrl = navCtrl;
          this.toastCtrl = toastCtrl;
          this.loginProvider = loginProvider;
          this.loadingCtrl = loadingCtrl;
          this.viewCtrl = viewCtrl;
          this.storage = storage;
          this.events = events;
          this.loadingController = loadingController;
          this.login = {};
          this.loggedin = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.start();
          }
        }, {
          key: "start",
          value: function start() {
            var _this = this;

            this.storage.get('user_login').then(function (data) {
              if (data) {
                // do checks here
                _this.loggedin = true;
              } else {
                _this.loggedin = false;
              }
            });
          }
        }, {
          key: "doLogin",
          value: function doLogin() {
            var _this2 = this;

            if (!this.login) this.presentToast('Please enter a valid login.');
            this.showSpinner();
            this.loginProvider.login(this.login).then(function (response) {
              if (!response || response.success === false) {
                _this2.loginErr(response);

                return;
              }

              var login_data = response.data;
              console.log('login_data ', login_data);

              if (login_data.success == true) {
                localStorage.setItem('isLogin', login_data.success);
              }

              _this2.presentToast(login_data.message);

              _this2.events.publish('user:login', login_data);

              _this2.storage.set('user_login', login_data);

              _this2.dismiss();

              _this2.hideSpinner();
            }, function (err) {
              _this2.hideSpinner();

              _this2.loginErr(err);
            })["catch"](function (e) {
              console.warn(e);

              _this2.hideSpinner();

              _this2.presentToast('There was a problem connecting to the server.');
            }); // make sure spinner disappears even if there's a problem

            setTimeout(function () {
              _this2.hideSpinner();
            }, 5000);
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            var _this3 = this;

            this.showSpinner();
            this.loginProvider.login({}, true).then(function (response) {
              if (!response || response.success === false) {
                _this3.loginErr(response);

                return;
              }

              var login_data = response.data;
              console.log(login_data);

              _this3.presentToast(login_data.message);

              _this3.events.publish('user:login', login_data);

              _this3.storage.remove('user_login');

              _this3.dismiss();

              _this3.hideSpinner();
            }, function (err) {
              _this3.hideSpinner();

              _this3.loginErr(err);
            })["catch"](function (e) {
              console.warn(e);

              _this3.hideSpinner();

              _this3.presentToast('There was a problem connecting to the server.');
            }); // make sure spinner disappears even if there's a problem

            setTimeout(function () {
              _this3.hideSpinner();
            }, 5000);
          }
        }, {
          key: "loginErr",
          value: function loginErr(err) {
            console.log(err);
            this.hideSpinner();
            this.presentToast(err.data.message);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            // this.viewCtrl.dismiss();
            this.navCtrl.navigateBack('tabs/home');
          }
        }, {
          key: "showSpinner",
          value: function showSpinner() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({});

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return this.navCtrl.navigateForward(['tabs/home']);

                    case 7:
                      _context.next = 9;
                      return loading.dismiss();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({});

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return this.navCtrl.navigateForward(['tabs/home']);

                    case 7:
                      _context2.next = 9;
                      return loading.dismiss();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(msg);
                      _context3.next = 3;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 5000,
                        position: 'bottom'
                      });

                    case 3:
                      toast = _context3.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map