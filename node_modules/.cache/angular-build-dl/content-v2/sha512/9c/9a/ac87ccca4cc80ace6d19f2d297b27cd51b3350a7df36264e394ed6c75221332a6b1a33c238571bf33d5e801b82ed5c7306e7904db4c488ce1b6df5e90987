(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-herstories-herstories-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/herstories/herstories.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/herstories/herstories.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHerstoriesHerstoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" color=\"dark\" menu=\"first\"><ion-icon size=\"large\" color=\"light\" name=\"menu-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title>GLMPI HERstories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <span class=\"ion-text-center\" *ngIf=\"loggedin\">\n  <h2>Please log into your account to see HERstories</h2>\n</span>\n    <ion-card class=\"ion-text-center\">\n      <ion-card-header>\n        Checkout the most recent HERstories available!\n      </ion-card-header>\n    </ion-card>\n  <ion-list class=\"post-list ion-no-padding\">\n    <ion-item *ngFor=\"let item of items\" (click)=\"itemTapped($event, item)\" class=\"red\">\n      <ion-avatar slot=\"start\" *ngIf=\"item.featured_image_urls\">\n        <img *ngIf=\"item.featured_image_urls && item.featured_image_urls.thumbnail\" src=\"{{item.featured_image_urls.thumbnail}}\">\n        <img *ngIf=\"!item.featured_image_urls || !item.featured_image_urls.thumbnail\" src=\"assets/default.png\">\n      </ion-avatar>\n<ion-label>\n  <h2 *ngIf=\"item.title && item.title.rendered\" [innerHTML]=\"item.title.rendered\"></h2>\n  <p *ngIf=\"item.excerpt && item.excerpt.rendered\" [innerHTML]=\"item.excerpt.rendered\"></p>\n</ion-label>\n    </ion-item>\n  </ion-list>\n\n <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/herstories/herstories-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/herstories/herstories-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: HERstoriesPageRoutingModule */

    /***/
    function srcAppPagesHerstoriesHerstoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HERstoriesPageRoutingModule", function () {
        return HERstoriesPageRoutingModule;
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


      var _herstories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./herstories.page */
      "./src/app/pages/herstories/herstories.page.ts");

      var routes = [{
        path: '',
        component: _herstories_page__WEBPACK_IMPORTED_MODULE_3__["HERstoriesPage"]
      }];

      var HERstoriesPageRoutingModule = function HERstoriesPageRoutingModule() {
        _classCallCheck(this, HERstoriesPageRoutingModule);
      };

      HERstoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HERstoriesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/herstories/herstories.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/herstories/herstories.module.ts ***!
      \*******************************************************/

    /*! exports provided: HERstoriesPageModule */

    /***/
    function srcAppPagesHerstoriesHerstoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HERstoriesPageModule", function () {
        return HERstoriesPageModule;
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


      var _herstories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./herstories-routing.module */
      "./src/app/pages/herstories/herstories-routing.module.ts");
      /* harmony import */


      var _herstories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./herstories.page */
      "./src/app/pages/herstories/herstories.page.ts");

      var HERstoriesPageModule = function HERstoriesPageModule() {
        _classCallCheck(this, HERstoriesPageModule);
      };

      HERstoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _herstories_routing_module__WEBPACK_IMPORTED_MODULE_5__["HERstoriesPageRoutingModule"]],
        declarations: [_herstories_page__WEBPACK_IMPORTED_MODULE_6__["HERstoriesPage"]]
      })], HERstoriesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/herstories/herstories.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/herstories/herstories.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHerstoriesHerstoriesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  --background: #f5f1e9;\n}\n\n.red {\n  --background: #f5f1e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVyc3Rvcmllcy9oZXJzdG9yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVyc3Rvcmllcy9oZXJzdG9yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmMWU5O1xyXG59XHJcbi5yZWR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWYxZTk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/herstories/herstories.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/herstories/herstories.page.ts ***!
      \*****************************************************/

    /*! exports provided: HERstoriesPage */

    /***/
    function srcAppPagesHerstoriesHerstoriesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HERstoriesPage", function () {
        return HERstoriesPage;
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


      var src_app_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/posts/posts.service */
      "./src/app/services/posts/posts.service.ts");
      /* harmony import */


      var src_app_services_configure_configure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/configure/configure.service */
      "./src/app/services/configure/configure.service.ts");

      var HERstoriesPage = /*#__PURE__*/function () {
        function HERstoriesPage(navCtrl, postService, loadingCtrl, toastCtrl, configure) {
          _classCallCheck(this, HERstoriesPage);

          this.navCtrl = navCtrl;
          this.postService = postService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.configure = configure;
          this.page = 1;
          var url = configure.getUrl(); // put your desired WP-API route here. URL params, CPTs, and custom routes all OK

          this.route = url + 'wp-json/wp/v2/posts';
        }

        _createClass(HERstoriesPage, [{
          key: "loadPosts",
          value: function loadPosts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        showBackdrop: false
                      });

                    case 2:
                      this.loading = _context.sent;
                      this.loading.present();
                      this.page = 1; // any menu imported from WP has to use same component. Other pages can be added manually with different components

                      this.postService.load(this.route, this.page).then(function (items) {
                        // Loads posts from WordPress API
                        _this.items = items;
                        console.log('postdata', _this.items); // load more right away

                        _this.loadMore(null);

                        _this.loading.dismiss();
                      })["catch"](function (err) {
                        _this.loading.dismiss();

                        console.error('Error getting posts', err);
                      }); // make sure spinner never gets stuck on

                      setTimeout(function () {
                        _this.loading.dismiss();
                      }, 8000);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "itemTapped",
          value: function itemTapped(event, item) {
            var opt = {};
            var navigationExtras = {
              state: {
                item: item
              }
            };
            this.navCtrl.navigateForward('post-details', navigationExtras);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadMore",
          value: function loadMore(infiniteScroll) {
            var _this2 = this;

            this.page++;
            this.postService.load(this.route, this.page).then(function (items) {
              // Loads posts from WordPress API
              var length = items["length"];

              if (length === 0) {
                if (infiniteScroll) infiniteScroll.target.complete();
                return;
              }

              for (var i = 0; i < length; ++i) {
                _this2.items.push(items[i]);
              }

              if (infiniteScroll) infiniteScroll.target.complete();
            })["catch"](function (e) {
              // promise was rejected, usually a 404 or error response from API
              if (infiniteScroll) infiniteScroll.target.complete(); // this is how you need to call in v4

              console.warn(e);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'normal-toast'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadPosts();
          }
        }]);

        return HERstoriesPage;
      }();

      HERstoriesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: src_app_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_services_configure_configure_service__WEBPACK_IMPORTED_MODULE_4__["ConfigureService"]
        }];
      };

      HERstoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-herstories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./herstories.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/herstories/herstories.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./herstories.page.scss */
        "./src/app/pages/herstories/herstories.page.scss"))["default"]]
      })], HERstoriesPage);
      /***/
    },

    /***/
    "./src/app/services/posts/posts.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/posts/posts.service.ts ***!
      \*************************************************/

    /*! exports provided: PostsService */

    /***/
    function srcAppServicesPostsPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsService", function () {
        return PostsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var PostsService = /*#__PURE__*/function () {
        function PostsService(http) {
          _classCallCheck(this, PostsService);

          this.http = http;
          this.data = null;
        }

        _createClass(PostsService, [{
          key: "load",
          value: function load(url, page) {
            var _this3 = this;

            // set pagination
            if (!page) {
              page = '1';
            }

            return new Promise(function (resolve, reject) {
              var concat; // check if url already has a query param

              if (url.indexOf('?') > 0) {
                concat = '&';
              } else {
                concat = '?';
              }

              _this3.http.get(url + concat + 'page=' + page).subscribe(function (data) {
                _this3.data = data;
                resolve(_this3.data);
              }, function (error) {
                // probably a bad url or 404
                reject(error);
              });
            });
          }
        }]);

        return PostsService;
      }();

      PostsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-herstories-herstories-module-es5.js.map