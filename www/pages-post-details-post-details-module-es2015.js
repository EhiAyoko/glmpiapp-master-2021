(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-details-post-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-details/post-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-details/post-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" color=\"dark\" menu=\"first\"><ion-icon size=\"large\" color=\"light\" name=\"menu-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title><span [innerHTML]=\"selectedItem.title.rendered\"></span></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n <div *ngIf=\"selectedItem\" class=\"selection\">\n\n    <h2 [innerHTML]=\"selectedItem.title.rendered\"></h2>\n    <div *ngIf=\"content\" [innerHTML]=\"content\"></div>\n </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/post-details/post-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/post-details/post-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PostDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageRoutingModule", function() { return PostDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-details.page */ "./src/app/pages/post-details/post-details.page.ts");




const routes = [
    {
        path: '',
        component: _post_details_page__WEBPACK_IMPORTED_MODULE_3__["PostDetailsPage"]
    }
];
let PostDetailsPageRoutingModule = class PostDetailsPageRoutingModule {
};
PostDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/post-details/post-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-details/post-details.module.ts ***!
  \***********************************************************/
/*! exports provided: PostDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _post_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-details-routing.module */ "./src/app/pages/post-details/post-details-routing.module.ts");
/* harmony import */ var _post_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-details.page */ "./src/app/pages/post-details/post-details.page.ts");







let PostDetailsPageModule = class PostDetailsPageModule {
};
PostDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostDetailsPageRoutingModule"]
        ],
        declarations: [_post_details_page__WEBPACK_IMPORTED_MODULE_6__["PostDetailsPage"]]
    })
], PostDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/post-details/post-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-details/post-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  --background: #f5f1e9;\n}\n\n:host ::ng-deep img {\n  height: 261px;\n}\n\n.selection {\n  padding-left: 14px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjFlOTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgaW1ne1xyXG4gICAgaGVpZ2h0OiAyNjFweDtcclxufVxyXG4uc2VsZWN0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/post-details/post-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/post-details/post-details.page.ts ***!
  \*********************************************************/
/*! exports provided: PostDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPage", function() { return PostDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let PostDetailsPage = class PostDetailsPage {
    constructor(navCtrl, sanitizer, router) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            this.selectedItem = state.item;
            console.log(this.selectedItem);
            if (this.selectedItem.content.rendered) {
                this.content = this.sanitizer.bypassSecurityTrustHtml(this.selectedItem.content.rendered);
            }
        }
    }
    ngOnInit() {
    }
};
PostDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PostDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-details/post-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-details.page.scss */ "./src/app/pages/post-details/post-details.page.scss")).default]
    })
], PostDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-post-details-post-details-module-es2015.js.map