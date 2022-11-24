(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_ion-alert_service_ts-node_modules_web3_dist_web3_min_js-src_app_thew-5126f0"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'mintear',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_ion-alert_service_ts-node_modules_web3_dist_web3_min_js-src_app_thew-5126f0"), __webpack_require__.e("src_app_mintear_mintear_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mintear/mintear.module */ 79665)).then(m => m.MintearPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _componentes_modal_mint_modal_mint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/modal-mint/modal-mint.component */ 38933);
/* harmony import */ var _componentes_modaldonacion_modaldonacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/modaldonacion/modaldonacion.component */ 12350);
/* harmony import */ var _componentes_modalsms_modalsms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/modalsms/modalsms.component */ 54304);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _componentes_modal_mint_modal_mint_component__WEBPACK_IMPORTED_MODULE_2__.ModalMintComponent, _componentes_modaldonacion_modaldonacion_component__WEBPACK_IMPORTED_MODULE_3__.ModaldonacionComponent, _componentes_modalsms_modalsms_component__WEBPACK_IMPORTED_MODULE_4__.ModalsmsComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 38933:
/*!****************************************************************!*\
  !*** ./src/app/componentes/modal-mint/modal-mint.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMintComponent": () => (/* binding */ ModalMintComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_mint_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-mint.component.html?ngResource */ 36347);
/* harmony import */ var _modal_mint_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-mint.component.scss?ngResource */ 60081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ModalMintComponent = class ModalMintComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.imgCanvasAux = this.imgCanvas.nativeElement;
        var origenCtx = this.canvas.getContext('2d');
        this.imgCanvasAux.src = this.canvas.toDataURL("image/jpg");
    }
    salir() {
        this.modalCtrl.dismiss({
            orden: 'cancelar'
        });
    }
    confirmar() {
        this.modalCtrl.dismiss({
            orden: 'confirmar'
        });
    }
};
ModalMintComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalMintComponent.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    descripcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    imgCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['imgCanvas',] }]
};
ModalMintComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-mint',
        template: _modal_mint_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_mint_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalMintComponent);



/***/ }),

/***/ 12350:
/*!**********************************************************************!*\
  !*** ./src/app/componentes/modaldonacion/modaldonacion.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModaldonacionComponent": () => (/* binding */ ModaldonacionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modaldonacion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modaldonacion.component.html?ngResource */ 4477);
/* harmony import */ var _modaldonacion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modaldonacion.component.scss?ngResource */ 62250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ModaldonacionComponent = class ModaldonacionComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.importe = 0;
        this.texto = "";
        this.error = false;
        this.textoError = "";
    }
    ngOnInit() {
    }
    cambiaCantidad(event) {
        this.importe = event.target.value;
    }
    cambiaTexto(event) {
        this.texto = event.target.value;
    }
    salir() {
        this.modalCtrl.dismiss({
            orden: 'cancelar'
        });
    }
    confirmar() {
        if (this.importe <= 0) {
            this.error = true;
            this.textoError = "¿La donación debe ser superior 0 no crees? ;)";
            return;
        }
        if (this.importe > this.saldo) {
            this.error = true;
            this.textoError = "Se agredece el entusiasmo, pero no tienes suficiente saldo en tu Wallet";
            return;
        }
        this.modalCtrl.dismiss({
            orden: 'confirmar',
            importe: this.importe,
            texto: this.texto
        });
    }
};
ModaldonacionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModaldonacionComponent.propDecorators = {
    tokenID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    saldo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ModaldonacionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modaldonacion',
        template: _modaldonacion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_modaldonacion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModaldonacionComponent);



/***/ }),

/***/ 54304:
/*!************************************************************!*\
  !*** ./src/app/componentes/modalsms/modalsms.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsmsComponent": () => (/* binding */ ModalsmsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modalsms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalsms.component.html?ngResource */ 87154);
/* harmony import */ var _modalsms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalsms.component.scss?ngResource */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ModalsmsComponent = class ModalsmsComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    salir() {
        this.modalCtrl.dismiss({
            orden: 'cancelar'
        });
    }
};
ModalsmsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalsmsComponent.propDecorators = {
    tokenArraySMS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    tokenID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ModalsmsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modalsms',
        template: _modalsms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modalsms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalsmsComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 60081:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/modal-mint/modal-mint.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1taW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62250:
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/modaldonacion/modaldonacion.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#headerToken {\n  font-size: 1.3rem;\n  width: 100%;\n}\n\n#contentToken {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 1rem;\n  height: 100%;\n}\n\n.error {\n  padding: 10px;\n  font-weight: bold;\n  color: red;\n}\n\n#textArea {\n  text-align: left;\n  padding: 10px;\n}\n\n.divformtoken {\n  width: 80%;\n}\n\n.divformsaldo {\n  padding: 0.8rem;\n}\n\n#footerToken {\n  font-size: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsZG9uYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBRUksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFBZ0IsYUFBQTtBQUpwQjs7QUFPQTtFQUVJLFVBQUE7QUFMSjs7QUFRQTtFQUVDLGVBQUE7QUFORDs7QUFTQTtFQUVJLGlCQUFBO0FBUEoiLCJmaWxlIjoibW9kYWxkb25hY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI2hlYWRlclRva2VuXHJcbntcclxuICAgIGZvbnQtc2l6ZToxLjNyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiNjb250ZW50VG9rZW5cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZXJyb3Jcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4jdGV4dEFyZWF7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZzoxMHB4XHJcbn1cclxuXHJcbi5kaXZmb3JtdG9rZW5cclxue1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmRpdmZvcm1zYWxkb1xyXG57XHJcbiBwYWRkaW5nOiAwLjhyZW07XHJcbn1cclxuXHJcbiNmb290ZXJUb2tlblxyXG57XHJcbiAgICBmb250LXNpemU6MC41cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 930:
/*!*************************************************************************!*\
  !*** ./src/app/componentes/modalsms/modalsms.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#headerToken {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  font-size: 1.3rem;\n}\n\n.divformSMS {\n  padding: 1rem;\n  padding-right: 2rem;\n}\n\n.SMSnumber {\n  color: #187043;\n  font-weight: bold;\n}\n\n.textArea {\n  padding: 1rem;\n  margin: 1rem;\n}\n\n.HToken {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 2;\n  align-items: center;\n}\n\n.iDonado {\n  font-weight: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.contenCerrar {\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-end;\n}\n\n.botonCerrar {\n  align-self: flex-end;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsc21zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFFQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFORDs7QUFTQTtFQUVDLG1CQUFBO0VBQ0EsbUJBQUE7QUFQRDs7QUFTQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFQQTs7QUFVQTtFQUVDLG9CQUFBO0VBQ0EsaUJBQUE7QUFSRCIsImZpbGUiOiJtb2RhbHNtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaGVhZGVyVG9rZW5cclxue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZm9udC1zaXplOjEuM3JlbTtcclxufVxyXG5cclxuLmRpdmZvcm1TTVNcclxue1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5TTVNudW1iZXJcclxue1xyXG4gICAgY29sb3I6IzE4NzA0MztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxufVxyXG5cclxuLnRleHRBcmVhXHJcbntcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLkhUb2tlblxyXG57XHJcbiBkaXNwbGF5OmZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gZmxleC1ncm93OiAyO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlEb25hZG9cclxue1xyXG4gZm9udC13ZWlnaHQ6IDIuNXJlbTtcclxuIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmNvbnRlbkNlcnJhclxyXG57XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1ncm93OiAxO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYm90b25DZXJyYXJcclxue1xyXG4gYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiBmb250LXNpemU6MS41cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  \n    <ion-router-outlet id=\"principal\"></ion-router-outlet>\n</ion-app>\n\n\n";

/***/ }),

/***/ 36347:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/modal-mint/modal-mint.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-header>\n  <ion-item><ion-label style=\"text-align:center; font-size:1.2rem\">Por favor confirma los datos de tu obra</ion-label></ion-item>\n</ion-header>\n\n<ion-content style=\"font-size:1.5rem\">\n  <div style=\"margin-top:2%;margin-bottom:2%\">\n    <div id=\"container\">\n      <img #imgCanvas style=\"width:50%;height:50%;margin-left:auto;margin-right:auto; display:block\" />\n      </div>\n  </div>\n\n  <div style=\"margin:3%\">\n  <ion-item color=\"primary\">Nombre</ion-item>\n  <ion-item>{{nombre}}</ion-item>\n  <ion-item color=\"primary\">Descripción</ion-item>\n  <ion-item>{{descripcion}}</ion-item>\n</div>\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col style=\"text-align: right\"><ion-button ion-button (click)=\"salir()\">Cancelar</ion-button></ion-col>\n  \n    <ion-col style=\"text-align: left\"><ion-button ion-button (click)=\"confirmar()\">Confirmar</ion-button></ion-col>\n    <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n";

/***/ }),

/***/ 4477:
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/modaldonacion/modaldonacion.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header >\n  <ion-item>\n    \n  <div  id=\"headerToken\">\n   <div>Donación para TOKEN #{{tokenID}}</div>\n  </div>\n</ion-item>\n</ion-header>\n\n<ion-content >\n  <div id=\"contentToken\">\n  \n      <div class=\"divformsaldo\">\n        <span>Saldo: {{saldo| slice:0:5}} ETH</span>\n      </div>\n      <div class=\"divformtoken\">\n        <ion-input type=\"number\" placeholder=\"Cantidad (ETH)\" (change)=\"cambiaCantidad($event)\"></ion-input>\n      </div>\n      <div class=\"error\" *ngIf=\"error\">\n        {{textoError}}\n      </div>\n      <div class=\"divformtoken\">\n        <ion-textarea id=\"textArea\" maxlength=\"280\" rows=\"10\" (change)=\"cambiaTexto($event)\" placeholder=\"Puedes dejar un comentario opcional de hasta 140 caracteres.Ten en cuenta que el coste de la transacción será superior.\"></ion-textarea>\n      </div>\n\n</div>\n\n</ion-content>\n<ion-footer   >\n  <div id=\"footerToken\">\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col style=\"text-align: right\"><ion-button ion-button (click)=\"salir()\">Cancelar</ion-button></ion-col>\n  \n    <ion-col style=\"text-align: left\"><ion-button ion-button (click)=\"confirmar()\">Confirmar</ion-button></ion-col>\n    <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-footer>";

/***/ }),

/***/ 87154:
/*!*************************************************************************!*\
  !*** ./src/app/componentes/modalsms/modalsms.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header >\n  <ion-item>\n    \n  <div  id=\"headerToken\">\n   <div class=\"HToken\">Comentarios TOKEN #{{tokenID}}</div>\n   <div class=\"contenCerrar\"><ion-button class=\"botonCerrar\" (click)=\"salir()\">X</ion-button></div>\n  </div>\n</ion-item>\n</ion-header>\n\n<ion-content >\n\n      <div class=\"divformSMS\">\n      <div class=\"filaPixel\" *ngFor=\"let sms of tokenArraySMS ;index as i\">\n        <div class=\"SMSnumber\">SMS # {{i+1}}</div>\n       <span class=\"iDonado\">Importe donado: {{sms[1]/1000000000000000000}} ETH</span>\n        <ion-textarea class=\"textArea\" [disabled]=\"true\">{{sms[0]}}</ion-textarea>\n        </div>\n      </div>\n\n</ion-content>\n<ion-footer   >\n  <div id=\"footerToken\">\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col style=\"text-align: right\"></ion-col>\n  \n    <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-footer>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map