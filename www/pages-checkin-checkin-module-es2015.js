(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkin-checkin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" color=\"dark\" menu=\"first\"><ion-icon size=\"large\" color=\"light\" name=\"menu-outline\"></ion-icon></ion-menu-button>\n      </ion-buttons>\n      <ion-title>checkin</ion-title>\n    </ion-toolbar>\n  </ion-header> \n\n<ion-content class=\"content\">\n\n<ion-card>\n  <ion-card-header>\n  </ion-card-header>\n  <ion-card-title class=\"big-title ion-padding dd ion-text-center\">\n    The Daily Checkin \n  </ion-card-title>\n  <ion-card-content class=\"ion-text-center\">\n   How are you feeling today?  \n  </ion-card-content>\n  <ion-grid class=\"ion-text-center\">\n    <ion-row>\n      <ion-col>\n        <div class=\"rr\"> \n          <img class=\"img\" (click)=\"happymood()\" src=\"assets/imgs/beaming.png\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"rr\">\n          <img class=\"img\"  (click)=\"inocentmood()\" src=\"assets/imgs/upside-down.png\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"rr\">\n          <img class=\"img\" (click)=\"silentmood()\" src=\"assets/imgs/neutral.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"rr\">\n          <img class=\"img\" (click)=\"randommood()\" src=\"assets/imgs/woozy.png\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"rr\">\n          <img class=\"img\" (click)=\"saddmood()\" src=\"assets/imgs/disappointed.png\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"rr\">\n          <img class=\"img\" (click)=\"angrymood()\" src=\"assets/imgs/angry.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/checkin/checkin-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/checkin/checkin-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CheckinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageRoutingModule", function() { return CheckinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin.page */ "./src/app/pages/checkin/checkin.page.ts");




const routes = [
    {
        path: '',
        component: _checkin_page__WEBPACK_IMPORTED_MODULE_3__["CheckinPage"]
    }
];
let CheckinPageRoutingModule = class CheckinPageRoutingModule {
};
CheckinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckinPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/checkin/checkin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkin/checkin.module.ts ***!
  \*************************************************/
/*! exports provided: CheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-routing.module */ "./src/app/pages/checkin/checkin-routing.module.ts");
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin.page */ "./src/app/pages/checkin/checkin.page.ts");







let CheckinPageModule = class CheckinPageModule {
};
CheckinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkin_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinPageRoutingModule"]
        ],
        declarations: [_checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"]]
    })
], CheckinPageModule);



/***/ }),

/***/ "./src/app/pages/checkin/checkin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/checkin/checkin.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  --background: #f5f1e9;\n}\n\n.big-title {\n  font-size: 21px;\n  color: #E047AB;\n  font-weight: bold;\n}\n\n.btn2 {\n  height: 47px;\n  /* height: 2.8em; */\n  /* font-size: 1.6rem; */\n  color: #fff;\n  /* background-color: #2d5292; */\n  --background: #2d5292;\n}\n\n.dd {\n  padding-top: 0px;\n  padding-bottom: 7px;\n}\n\n.big-title1 {\n  font-size: 19px;\n  color: #E047AB;\n  font-weight: bold;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.rr {\n  background: #eee;\n}\n\n.img {\n  width: 73%;\n  height: 100%;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  -o-object-position: inherit;\n     object-position: inherit;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tpbi9jaGVja2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmMWU5O1xyXG59XHJcbi5iaWctdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogI0UwNDdBQjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuMntcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIC8qIGhlaWdodDogMi44ZW07ICovXHJcbiAgICAvKiBmb250LXNpemU6IDEuNnJlbTsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzJkNTI5MjsgKi9cclxuICAgIC0tYmFja2dyb3VuZDogIzJkNTI5MjtcclxufVxyXG4uZGR7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4uYmlnLXRpdGxlMXtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjRTA0N0FCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4ucnJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogNzMlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdDtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/checkin/checkin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/checkin/checkin.page.ts ***!
  \***********************************************/
/*! exports provided: CheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPage", function() { return CheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CheckinPage = class CheckinPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    happymood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>That is awesome that you are feeling great today! keep it up!!!</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    inocentmood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>Sarcasm,Irony,Humor, and Silliness, we all get that way sometimes, Take breathers and remember to not give up today</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    silentmood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>Whew, Girls. We have all been there. Stay strong</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    randommood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>Ugh. This too shall pass. Get some tea. Read a nice book. And get yourself together</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    saddmood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>Sometimes we need to take a moment before doing anything we might regret</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    angrymood() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Checkbox',
                message: '<strong>If you or someone you know is struggling emotionally or having a hard time, a hard time, a phone call or text can be the difference in getting the help you need.it is important to take care of yourself when you are going through a difficult time, as this may stir up difficult emotions. if it does, please reach out for support yourself. Call 1-800-273-TALK (8255) so that you can find out what resources are available in your area.</strong>',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CheckinPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CheckinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkin/checkin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkin.page.scss */ "./src/app/pages/checkin/checkin.page.scss")).default]
    })
], CheckinPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkin-checkin-module-es2015.js.map