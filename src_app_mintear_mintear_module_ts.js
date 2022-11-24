(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mintear_mintear_module_ts"],{

/***/ 29381:
/*!***************************************************!*\
  !*** ./src/app/mintear/mintear-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MintearPageRoutingModule": () => (/* binding */ MintearPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mintear_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mintear.page */ 39687);




const routes = [
    {
        path: '',
        component: _mintear_page__WEBPACK_IMPORTED_MODULE_0__.MintearPage
    }
];
let MintearPageRoutingModule = class MintearPageRoutingModule {
};
MintearPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MintearPageRoutingModule);



/***/ }),

/***/ 79665:
/*!*******************************************!*\
  !*** ./src/app/mintear/mintear.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MintearPageModule": () => (/* binding */ MintearPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mintear_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mintear-routing.module */ 29381);
/* harmony import */ var _mintear_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mintear.page */ 39687);







let MintearPageModule = class MintearPageModule {
};
MintearPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mintear_routing_module__WEBPACK_IMPORTED_MODULE_0__.MintearPageRoutingModule,
        ],
        declarations: [_mintear_page__WEBPACK_IMPORTED_MODULE_1__.MintearPage]
    })
], MintearPageModule);



/***/ }),

/***/ 39687:
/*!*****************************************!*\
  !*** ./src/app/mintear/mintear.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MintearPage": () => (/* binding */ MintearPage)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mintear_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mintear.page.html?ngResource */ 36319);
/* harmony import */ var _mintear_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mintear.page.scss?ngResource */ 64108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_ion_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ion-alert.service */ 10469);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _componentes_modal_mint_modal_mint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/modal-mint/modal-mint.component */ 38933);
/* harmony import */ var _thewall_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../thewall.json */ 59869);
/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nft.storage */ 86336);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3 */ 30143);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_7__);













 // web3 librerias


let MintearPage = class MintearPage {
  constructor(modalCtrl, document, loadingCtrl, renderer2, FormBuilder, ionicAlertService) {
    this.modalCtrl = modalCtrl;
    this.document = document;
    this.loadingCtrl = loadingCtrl;
    this.renderer2 = renderer2;
    this.FormBuilder = FormBuilder;
    this.ionicAlertService = ionicAlertService; //colores predefinidos iniciales

    this.colores = ["#451d35", "#c82f43", "#fea24b", "#fffeef", "#979e98"]; //color elegido

    this.colorElegido = [{
      "id": 0,
      "color": this.colores[0]
    }]; // atributos cambas 

    this.widthP = 0; //pixels

    this.heightP = 0; //pixels

    this.sizeCanvas = [this.widthP, this.heightP]; // formato para el SC

    this.widthArray = []; //necesario para que el NGfor actualice el DOM

    this.heightArray = []; //necesario para que el NGfor actualice el DOM

    this.contadorDOMngFor = 1; //necesario para que el NGfor actualice el DOM

    this.pixelSize = 16; // para la imagen bitmap

    this.idpixel = "divP"; // parte inicial del ID para los DIV generados dinámicamente

    this.idpixelTarget = "divPT"; // parte inicial del ID pixel target

    this.CanvasPixelsArray = [0]; // esencial para introducir los datos de la imagen 

    this.contractAddress = localStorage.getItem("contratoTheWall");
    const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhkOGI1ZTFmNjFhRTI5ZWYzQTZFOTgzQ2Y2RWEzNDQyNjk4NWFjNTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjY5NDY4ODM4MywibmFtZSI6InRoZXdhbGwifQ.YMQpCds-p48GeLhBaJzQOhWpjheVZUFdL7c0bOvcDIQ';
    this.clienteIPFS = new nft_storage__WEBPACK_IMPORTED_MODULE_6__.NFTStorage({
      token: NFT_STORAGE_TOKEN
    });
    this.FormMint = this.FormBuilder.group({
      nombre: '',
      descripcion: ''
    });
    this.web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())();
    this.web3.setProvider(new this.web3.providers.HttpProvider('https://goerli.infura.io/v3/cdb31d0cd0aa40d894216d4e272f6bb4'));
    this.contract = new this.web3.eth.Contract(_thewall_json__WEBPACK_IMPORTED_MODULE_5__.abi, this.contractAddress);
  }

  ngAfterViewInit() {
    this.canvasFly = this.canvasFl.nativeElement;
    this.color1Div = this.color1.nativeElement;
    this.color2Div = this.color2.nativeElement;
    this.color3Div = this.color3.nativeElement;
    this.color4Div = this.color4.nativeElement;
    this.color5Div = this.color5.nativeElement;
    this.colorSelectDiv = this.colorSelect.nativeElement;
    this.renderer2.setStyle(this.color1Div, 'background-color', this.colores[0]);
    this.renderer2.setStyle(this.color2Div, 'background-color', this.colores[1]);
    this.renderer2.setStyle(this.color3Div, 'background-color', this.colores[2]);
    this.renderer2.setStyle(this.color4Div, 'background-color', this.colores[3]);
    this.renderer2.setStyle(this.color5Div, 'background-color', this.colores[4]);
    this.renderer2.setStyle(this.colorSelectDiv, 'background-color', this.colores[0]);
  }

  ngOnInit() {
    this.CambiaResolucion(16, 16); // inicializamos el canvas DOM.

    this.CreacionCanvasArray();
    var canvas = document.getElementById('contenCanvas'); // evita el arrastre de pixels

    canvas.addEventListener('selectstart', function (e) {
      e.preventDefault();
      return false;
    }, false);
    this.address = sessionStorage.getItem("address");
    this.chainID = sessionStorage.getItem("chainid");
    this.window = document.defaultView;
    this.provider = this.window.ethereum; // METAMASK
  }

  CreacionCanvasArray() {
    // creacion del array de datos del canvas para enviar a la blockchain
    this.CanvasPixelsArray = [0];
    var cantidadPixel = this.widthP * this.heightP;

    for (let i = 0; i < cantidadPixel - 1; i++) this.CanvasPixelsArray.push(0); // el color 0 es el primero, el de fondo.

  }

  cambiaResCheck(value) {
    if (value.target.value == "16") this.CambiaResolucion(16, 16);
    if (value.target.value == "32") this.CambiaResolucion(32, 32);
    this.CreacionCanvasArray(); //actualizamos el array 
  }

  CambiaResolucion(x, y) {
    this.widthP = x;
    this.heightP = y;
    this.sizeCanvas = [this.widthP, this.heightP];
    this.widthArray = [];
    this.heightArray = [];

    for (let x = 0; x < this.widthP; x += 1) this.widthArray.push(this.contadorDOMngFor + 1);

    for (let y = 0; y < this.heightP; y += 1) this.heightArray.push(this.contadorDOMngFor + 1);

    this.contadorDOMngFor++;
  }

  CambiaColor(idcolor) {
    this.colorElegido[0].id = idcolor;
    this.colorElegido[0].color = this.colores[idcolor];
    this.renderer2.setStyle(this.colorSelectDiv, 'background-color', this.colores[idcolor]);
  }

  MuestraPixelTarget(idpixel, e) {
    var id = this.generaIDTarget(idpixel);
    var id2 = document.getElementById(id);
    id2.style.backgroundColor = this.colorElegido[0].color;
    id2.style.display = 'block';
  }

  OcultaPixelTarget(idpixel, e) {
    var id = this.generaIDTarget(idpixel);
    var id2 = document.getElementById(id);
    id2.style.display = 'none';
  }

  PintaPixelArrastra(idpixel, e) {
    var id = e.target.id; // otra manera de obtener el id

    var id2 = document.getElementById(id);

    if (e.buttons == 1) // solo si está presionado el boton
      {
        id2.style.backgroundColor = this.colorElegido[0].color;
        this.PintaArray(idpixel);
      }
  }

  PintaPixelClick(idpixel, e) {
    var id = this.generaIDPixel(idpixel);
    var id2 = document.getElementById(id);
    id2.style.backgroundColor = this.colorElegido[0].color;
    this.PintaArray(idpixel);
  }

  generaIDTarget(id) {
    var idpix = this.idpixelTarget + id.toString();
    return idpix;
  }

  generaIDPixel(id) {
    var idpix = this.idpixel + id.toString();
    return idpix;
  }

  PintaArray(id) {
    this.CanvasPixelsArray[id - 1] = this.colorElegido[0].id; // modificamos el valor en el array por el ID color
  }

  RellenaCanvasPixels(idcolor) {
    var cantidadPixel = this.widthP * this.heightP;
    var IdPixel;

    for (let i = 0; i < cantidadPixel; i++) {
      IdPixel = this.idpixel + (i + 1).toString();
      var id = document.getElementById(IdPixel);
      id.style.backgroundColor = this.colores[idcolor];
      this.CanvasPixelsArray[i] = idcolor; // el color 0 es el color de fondo
    }
  }

  sendMint(formData) {
    if (formData.nombre == '') {
      this.ionicAlertService.showAlert("¡Falta nombre!", "¿No querrás que tu obra quede anónima verdad?");
      return;
    }

    if (formData.descripcion == '') {
      this.ionicAlertService.showAlert("¡Falta descripción!", "Cuéntanos algo sobre tu obra...");
      return;
    }

    this.NFTnombre = formData.nombre;
    this.NFTdescripcion = formData.descripcion;
    this.Confirmar(formData.nombre, formData.descripcion);
  }

  Confirmar(nombreNFT, descripcionNFT) {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // FASE 1: Subir imagen generada al vuelo
      // Generacion imagen png al vuelo, necesaria para opensea y demás marketplaces
      // Paso 1: Transformarmos los colores HEX en formato RGB para pintar el canvas.
      let coloresRGB = new Array(_this.colores.length);

      for (let i = 0; i < coloresRGB.length; i++) {
        coloresRGB[i] = new Array(3);
      }

      for (let x = 0; x < _this.colores.length; x += 1) {
        coloresRGB[x][0] = _this.hexToRgb(_this.colores[x]).r;
        coloresRGB[x][1] = _this.hexToRgb(_this.colores[x]).g;
        coloresRGB[x][2] = _this.hexToRgb(_this.colores[x]).b;
      } // Paso 2: generacion de canvas con ayuda de canvasaux


      _this.canvasFly.width = _this.widthP * _this.pixelSize;
      _this.canvasFly.height = _this.heightP * _this.pixelSize;

      const ctx = _this.canvasFly.getContext('2d');

      let imageData = ctx.createImageData(_this.pixelSize, _this.pixelSize); // para el png los pixels son más grandes.
      // Por cada pixel de nuestro canvas pintamos pixels de mayor tamaño en el canvas

      let fila = 0;
      let columna = 0;

      for (let p = 0; p < _this.CanvasPixelsArray.length; p += 1) {
        let crgb = 0;

        for (let l = 0; l < _this.pixelSize * _this.pixelSize; l += 1) {
          let idColor = _this.CanvasPixelsArray[p];
          imageData.data[crgb + 0] = coloresRGB[idColor][0]; // R value

          imageData.data[crgb + 1] = coloresRGB[idColor][1]; // G value

          imageData.data[crgb + 2] = coloresRGB[idColor][2]; // B value

          imageData.data[crgb + 3] = 255; // Alpha: siempre 100% visible.

          crgb += 4;
        }

        if (p > 0) {
          if (p % _this.widthP == 0) // cambio de fila y reset de columna
            {
              fila++;
              columna = 0;
            }
        }

        let coordenadaX = columna * _this.pixelSize;
        let coordenadaY = fila * _this.pixelSize;
        ctx.putImageData(imageData, coordenadaX, coordenadaY);
        columna++;
      }

      const modal = yield _this.modalCtrl.create({
        component: _componentes_modal_mint_modal_mint_component__WEBPACK_IMPORTED_MODULE_4__.ModalMintComponent,
        componentProps: {
          nombre: nombreNFT,
          descripcion: descripcionNFT,
          canvas: _this.canvasFly
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss(); // se detiene el hilo principal hasta que el modal no sea descartado

      if (data.orden == "confirmar") {
        yield _this.canvasFly.toBlob(blob => {
          _this.showLoading();

          _this.subirBlobIPFS(blob, 1); // 1 significa paso 1. despues de subir la imagen subira el JSON

        });
      }
    })();
  }

  subirBlobIPFS(datosBlob, paso) {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.clienteIPFS.storeBlob(datosBlob).then(result => {
        _this2.loading.dismiss();

        var urlIPFS = "https://" + result + ".ipfs.nftstorage.link/";
        if (paso == 1) // tipo 1 ha terminado de subir imagen, asi que ahora toca JSON
          _this2.subirIpfsJson(urlIPFS);
        if (paso == 2) // tipo 2 ha terminado de subir JSON, ahora toca subir SC
          _this2.publicarContrato(urlIPFS);
      }).catch(err => {
        _this2.loading.dismiss();

        _this2.ionicAlertService.showAlert("¡NFT Storage ERROR!", "Los metadatos no han podido ser introducidos en el servidor IPFS");
      });
    })();
  }

  subirIpfsJson(urlImagen) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // JSON para OpenSea y demás NFT Marketplaces
      var jsonText = "{\"description\":\"" + _this3.NFTdescripcion + "\",";
      jsonText = jsonText + "\"image\":\"" + urlImagen + "\",";
      jsonText = jsonText + "\"name\":\"" + _this3.NFTnombre + "\"";
      jsonText = jsonText + "}";
      let blob = new Blob([jsonText], {
        type: '.json'
      });

      _this3.showLoading();

      _this3.subirBlobIPFS(blob, 2); // 1 imagen, 2 json

    })();
  }

  publicarContrato(TokenURI) {
    var _this4 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const transactionParameters = {
        nonce: '0x00',
        // gasPrice: this.web3.utils.toHex(10000000000000), // customizable by user during MetaMask confirmation.
        // gas: this.web3.utils.toHex(1000000), // customizable by user during MetaMask confirmation. GAS LIMIT
        to: _this4.contractAddress,
        from: _this4.address,
        value: '0',
        data: _this4.contract.methods.mint(_this4.address, TokenURI, _this4.NFTnombre, _this4.CanvasPixelsArray, _this4.sizeCanvas, _this4.colores).encodeABI(),
        chainId: _this4.chainID // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.

      };
      const txHash = yield _this4.provider.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
      }).then(result => {
        _this4.ionicAlertService.showAlert("MetaMask está procesando la solicitud", "Cuando haya terminado recibirás una confirmacíon en Metamask");
      }).catch(err => {
        if (err.code == 4001) _this4.ionicAlertService.showAlert("MetaMask", "La transacción ha sido cancelada");
      });
    })();
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  showLoading() {
    var _this5 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.loading = yield _this5.loadingCtrl.create({
        message: 'Creando NFT...'
      });

      _this5.loading.present();
    })();
  }

};

MintearPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: Document,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
  }]
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
}, {
  type: _services_ion_alert_service__WEBPACK_IMPORTED_MODULE_3__.IonAlertService
}];

MintearPage.propDecorators = {
  color1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['color1']
  }],
  color2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['color2']
  }],
  color3: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['color3']
  }],
  color4: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['color4']
  }],
  color5: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['color5']
  }],
  colorSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['colorSelect']
  }],
  canvasFl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['canvasFly']
  }]
};
MintearPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-mintear',
  template: _mintear_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mintear_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MintearPage);


/***/ }),

/***/ 51883:
/*!**************************************************************!*\
  !*** ./node_modules/@ipld/car/node_modules/varint/decode.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = read;
var MSB = 0x80,
    REST = 0x7F;

function read(buf, offset) {
  var res = 0,
      offset = offset || 0,
      shift = 0,
      counter = offset,
      b,
      l = buf.length;

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }

    b = buf[counter++];
    res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB);

  read.bytes = counter - offset;
  return res;
}

/***/ }),

/***/ 57115:
/*!**************************************************************!*\
  !*** ./node_modules/@ipld/car/node_modules/varint/encode.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = encode;
var MSB = 0x80,
    REST = 0x7F,
    MSBALL = ~REST,
    INT = Math.pow(2, 31);

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0;
    throw new RangeError('Could not encode varint');
  }

  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;

  while (num >= INT) {
    out[offset++] = num & 0xFF | MSB;
    num /= 128;
  }

  while (num & MSBALL) {
    out[offset++] = num & 0xFF | MSB;
    num >>>= 7;
  }

  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}

/***/ }),

/***/ 10977:
/*!*************************************************************!*\
  !*** ./node_modules/@ipld/car/node_modules/varint/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  encode: __webpack_require__(/*! ./encode.js */ 57115),
  decode: __webpack_require__(/*! ./decode.js */ 51883),
  encodingLength: __webpack_require__(/*! ./length.js */ 5498)
};

/***/ }),

/***/ 5498:
/*!**************************************************************!*\
  !*** ./node_modules/@ipld/car/node_modules/varint/length.js ***!
  \**************************************************************/
/***/ ((module) => {

var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);

module.exports = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};

/***/ }),

/***/ 18791:
/*!*****************************************************!*\
  !*** ./node_modules/@protobufjs/aspromise/index.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = asPromise;
/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */

function asPromise(fn, ctx
/*, varargs */
) {
  var params = new Array(arguments.length - 1),
      offset = 0,
      index = 2,
      pending = true;

  while (index < arguments.length) params[offset++] = arguments[index++];

  return new Promise(function executor(resolve, reject) {
    params[offset] = function callback(err
    /*, varargs */
    ) {
      if (pending) {
        pending = false;
        if (err) reject(err);else {
          var params = new Array(arguments.length - 1),
              offset = 0;

          while (offset < params.length) params[offset++] = arguments[offset];

          resolve.apply(null, params);
        }
      }
    };

    try {
      fn.apply(ctx || null, params);
    } catch (err) {
      if (pending) {
        pending = false;
        reject(err);
      }
    }
  });
}

/***/ }),

/***/ 5985:
/*!**************************************************!*\
  !*** ./node_modules/@protobufjs/base64/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */

var base64 = exports;
/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */

base64.length = function length(string) {
  var p = string.length;
  if (!p) return 0;
  var n = 0;

  while (--p % 4 > 1 && string.charAt(p) === "=") ++n;

  return Math.ceil(string.length * 3) / 4 - n;
}; // Base64 encoding table


var b64 = new Array(64); // Base64 decoding table

var s64 = new Array(123); // 65..90, 97..122, 48..57, 43, 47

for (var i = 0; i < 64;) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */


base64.encode = function encode(buffer, start, end) {
  var parts = null,
      chunk = [];
  var i = 0,
      // output index
  j = 0,
      // goto index
  t; // temporary

  while (start < end) {
    var b = buffer[start++];

    switch (j) {
      case 0:
        chunk[i++] = b64[b >> 2];
        t = (b & 3) << 4;
        j = 1;
        break;

      case 1:
        chunk[i++] = b64[t | b >> 4];
        t = (b & 15) << 2;
        j = 2;
        break;

      case 2:
        chunk[i++] = b64[t | b >> 6];
        chunk[i++] = b64[b & 63];
        j = 0;
        break;
    }

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (j) {
    chunk[i++] = b64[t];
    chunk[i++] = 61;
    if (j === 1) chunk[i++] = 61;
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";
/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */

base64.decode = function decode(string, buffer, offset) {
  var start = offset;
  var j = 0,
      // goto index
  t; // temporary

  for (var i = 0; i < string.length;) {
    var c = string.charCodeAt(i++);
    if (c === 61 && j > 1) break;
    if ((c = s64[c]) === undefined) throw Error(invalidEncoding);

    switch (j) {
      case 0:
        t = c;
        j = 1;
        break;

      case 1:
        buffer[offset++] = t << 2 | (c & 48) >> 4;
        t = c;
        j = 2;
        break;

      case 2:
        buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
        t = c;
        j = 3;
        break;

      case 3:
        buffer[offset++] = (t & 3) << 6 | c;
        j = 0;
        break;
    }
  }

  if (j === 1) throw Error(invalidEncoding);
  return offset - start;
};
/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */


base64.test = function test(string) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

/***/ }),

/***/ 68074:
/*!********************************************************!*\
  !*** ./node_modules/@protobufjs/eventemitter/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = EventEmitter;
/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */

function EventEmitter() {
  /**
   * Registered listeners.
   * @type {Object.<string,*>}
   * @private
   */
  this._listeners = {};
}
/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.on = function on(evt, fn, ctx) {
  (this._listeners[evt] || (this._listeners[evt] = [])).push({
    fn: fn,
    ctx: ctx || this
  });
  return this;
};
/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.off = function off(evt, fn) {
  if (evt === undefined) this._listeners = {};else {
    if (fn === undefined) this._listeners[evt] = [];else {
      var listeners = this._listeners[evt];

      for (var i = 0; i < listeners.length;) if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
    }
  }
  return this;
};
/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.emit = function emit(evt) {
  var listeners = this._listeners[evt];

  if (listeners) {
    var args = [],
        i = 1;

    for (; i < arguments.length;) args.push(arguments[i++]);

    for (i = 0; i < listeners.length;) listeners[i].fn.apply(listeners[i++].ctx, args);
  }

  return this;
};

/***/ }),

/***/ 48170:
/*!*************************************************!*\
  !*** ./node_modules/@protobufjs/float/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = factory(factory);
/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */
// Factory function for the purpose of node-based testing in modified global environments

function factory(exports) {
  // float: typed array
  if (typeof Float32Array !== "undefined") (function () {
    var f32 = new Float32Array([-0]),
        f8b = new Uint8Array(f32.buffer),
        le = f8b[3] === 128;

    function writeFloat_f32_cpy(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
    }

    function writeFloat_f32_rev(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[3];
      buf[pos + 1] = f8b[2];
      buf[pos + 2] = f8b[1];
      buf[pos + 3] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
    /* istanbul ignore next */

    exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

    function readFloat_f32_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      return f32[0];
    }

    function readFloat_f32_rev(buf, pos) {
      f8b[3] = buf[pos];
      f8b[2] = buf[pos + 1];
      f8b[1] = buf[pos + 2];
      f8b[0] = buf[pos + 3];
      return f32[0];
    }
    /* istanbul ignore next */


    exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
    /* istanbul ignore next */

    exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy; // float: ieee754
  })();else (function () {
    function writeFloat_ieee754(writeUint, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;
      if (val === 0) writeUint(1 / val > 0 ?
      /* positive */
      0 :
      /* negative 0 */
      2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38) // +-Infinity
        writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38) // denormal
        writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
        var exponent = Math.floor(Math.log(val) / Math.LN2),
            mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
        writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
      }
    }

    exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
    exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

    function readFloat_ieee754(readUint, buf, pos) {
      var uint = readUint(buf, pos),
          sign = (uint >> 31) * 2 + 1,
          exponent = uint >>> 23 & 255,
          mantissa = uint & 8388607;
      return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
    }

    exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
    exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
  })(); // double: typed array

  if (typeof Float64Array !== "undefined") (function () {
    var f64 = new Float64Array([-0]),
        f8b = new Uint8Array(f64.buffer),
        le = f8b[7] === 128;

    function writeDouble_f64_cpy(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
      buf[pos + 4] = f8b[4];
      buf[pos + 5] = f8b[5];
      buf[pos + 6] = f8b[6];
      buf[pos + 7] = f8b[7];
    }

    function writeDouble_f64_rev(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[7];
      buf[pos + 1] = f8b[6];
      buf[pos + 2] = f8b[5];
      buf[pos + 3] = f8b[4];
      buf[pos + 4] = f8b[3];
      buf[pos + 5] = f8b[2];
      buf[pos + 6] = f8b[1];
      buf[pos + 7] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
    /* istanbul ignore next */

    exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

    function readDouble_f64_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      f8b[4] = buf[pos + 4];
      f8b[5] = buf[pos + 5];
      f8b[6] = buf[pos + 6];
      f8b[7] = buf[pos + 7];
      return f64[0];
    }

    function readDouble_f64_rev(buf, pos) {
      f8b[7] = buf[pos];
      f8b[6] = buf[pos + 1];
      f8b[5] = buf[pos + 2];
      f8b[4] = buf[pos + 3];
      f8b[3] = buf[pos + 4];
      f8b[2] = buf[pos + 5];
      f8b[1] = buf[pos + 6];
      f8b[0] = buf[pos + 7];
      return f64[0];
    }
    /* istanbul ignore next */


    exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
    /* istanbul ignore next */

    exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy; // double: ieee754
  })();else (function () {
    function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;

      if (val === 0) {
        writeUint(0, buf, pos + off0);
        writeUint(1 / val > 0 ?
        /* positive */
        0 :
        /* negative 0 */
        2147483648, buf, pos + off1);
      } else if (isNaN(val)) {
        writeUint(0, buf, pos + off0);
        writeUint(2146959360, buf, pos + off1);
      } else if (val > 1.7976931348623157e+308) {
        // +-Infinity
        writeUint(0, buf, pos + off0);
        writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
      } else {
        var mantissa;

        if (val < 2.2250738585072014e-308) {
          // denormal
          mantissa = val / 5e-324;
          writeUint(mantissa >>> 0, buf, pos + off0);
          writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
        } else {
          var exponent = Math.floor(Math.log(val) / Math.LN2);
          if (exponent === 1024) exponent = 1023;
          mantissa = val * Math.pow(2, -exponent);
          writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
          writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
        }
      }
    }

    exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
    exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

    function readDouble_ieee754(readUint, off0, off1, buf, pos) {
      var lo = readUint(buf, pos + off0),
          hi = readUint(buf, pos + off1);
      var sign = (hi >> 31) * 2 + 1,
          exponent = hi >>> 20 & 2047,
          mantissa = 4294967296 * (hi & 1048575) + lo;
      return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
    }

    exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
    exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
  })();
  return exports;
} // uint helpers


function writeUintLE(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}

function writeUintBE(val, buf, pos) {
  buf[pos] = val >>> 24;
  buf[pos + 1] = val >>> 16 & 255;
  buf[pos + 2] = val >>> 8 & 255;
  buf[pos + 3] = val & 255;
}

function readUintLE(buf, pos) {
  return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
  return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}

/***/ }),

/***/ 91248:
/*!***************************************************!*\
  !*** ./node_modules/@protobufjs/inquire/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = inquire;
/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */

function inquire(moduleName) {
  try {
    var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval

    if (mod && (mod.length || Object.keys(mod).length)) return mod;
  } catch (e) {} // eslint-disable-line no-empty


  return null;
}

/***/ }),

/***/ 15759:
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/pool/index.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = pool;
/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */

function pool(alloc, slice, size) {
  var SIZE = size || 8192;
  var MAX = SIZE >>> 1;
  var slab = null;
  var offset = SIZE;
  return function pool_alloc(size) {
    if (size < 1 || size > MAX) return alloc(size);

    if (offset + size > SIZE) {
      slab = alloc(SIZE);
      offset = 0;
    }

    var buf = slice.call(slab, offset, offset += size);
    if (offset & 7) // align to 32 bit
      offset = (offset | 7) + 1;
    return buf;
  };
}

/***/ }),

/***/ 88178:
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/utf8/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */

var utf8 = exports;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */

utf8.length = function utf8_length(string) {
  var len = 0,
      c = 0;

  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      ++i;
      len += 4;
    } else len += 3;
  }

  return len;
};
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */


utf8.read = function utf8_read(buffer, start, end) {
  var len = end - start;
  if (len < 1) return "";
  var parts = null,
      chunk = [],
      i = 0,
      // char offset
  t; // temporary

  while (start < end) {
    t = buffer[start++];
    if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
      chunk[i++] = 0xD800 + (t >> 10);
      chunk[i++] = 0xDC00 + (t & 1023);
    } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */


utf8.write = function utf8_write(string, buffer, offset) {
  var start = offset,
      c1,
      // character 1
  c2; // character 2

  for (var i = 0; i < string.length; ++i) {
    c1 = string.charCodeAt(i);

    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
      c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }

  return offset - start;
};

/***/ }),

/***/ 82173:
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ 9392:
/*!******************************************!*\
  !*** ./node_modules/blob-to-it/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-env browser */


const browserReadableStreamToIt = __webpack_require__(/*! browser-readablestream-to-it */ 66636);
/**
 * @param {Blob} blob
 * @returns {AsyncIterable<Uint8Array>}
 */


function blobToIt(blob) {
  if (typeof blob.stream === 'function') {
    // @ts-ignore missing some properties
    return browserReadableStreamToIt(blob.stream());
  } // firefox < 69 does not support blob.stream()
  // @ts-ignore - response.body is optional, but in practice it's a stream.


  return browserReadableStreamToIt(new Response(blob).body);
}

module.exports = blobToIt;

/***/ }),

/***/ 68263:
/*!*********************************************************************!*\
  !*** ./node_modules/blockstore-core/node_modules/err-code/index.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";

/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */

function assign(obj, props) {
  for (const key in props) {
    Object.defineProperty(obj, key, {
      value: props[key],
      enumerable: true,
      configurable: true
    });
  }

  return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */


function createError(err, code, props) {
  if (!err || typeof err === 'string') {
    throw new TypeError('Please pass an Error to err-code');
  }

  if (!props) {
    props = {};
  }

  if (typeof code === 'object') {
    props = code;
    code = '';
  }

  if (code) {
    props.code = code;
  }

  try {
    return assign(err, props);
  } catch (_) {
    props.message = err.message;
    props.stack = err.stack;

    const ErrClass = function () {};

    ErrClass.prototype = Object.create(Object.getPrototypeOf(err)); // @ts-ignore

    const output = assign(new ErrClass(), props);
    return output;
  }
}

module.exports = createError;

/***/ }),

/***/ 66636:
/*!************************************************************!*\
  !*** ./node_modules/browser-readablestream-to-it/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 * @template T
 * @param {ReadableStream<T>} stream
 * @param {Object} [options]
 * @param {boolean} [options.preventCancel=boolean]
 * @returns {AsyncIterable<T>}
 */

var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

function browserReadableStreamToIt(_x) {
  return _browserReadableStreamToIt.apply(this, arguments);
}

function _browserReadableStreamToIt() {
  _browserReadableStreamToIt = _wrapAsyncGenerator(function* (stream, options = {}) {
    const reader = stream.getReader();

    try {
      while (true) {
        const result = yield _awaitAsyncGenerator(reader.read());

        if (result.done) {
          return;
        }

        yield result.value;
      }
    } finally {
      if (options.preventCancel !== true) {
        reader.cancel();
      }

      reader.releaseLock();
    }
  });
  return _browserReadableStreamToIt.apply(this, arguments);
}

module.exports = browserReadableStreamToIt;

/***/ }),

/***/ 74423:
/*!**************************************************!*\
  !*** ./node_modules/hamt-sharding/src/bucket.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // @ts-ignore

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const SparseArray = __webpack_require__(/*! sparse-array */ 20007);

const {
  fromString: uint8ArrayFromString
} = __webpack_require__(/*! uint8arrays/from-string */ 43807);
/**
 * @typedef {import('./consumable-hash').InfiniteHash} InfiniteHash
 * @typedef {import('../').UserBucketOptions} UserBucketOptions
 */

/**
 * @template V
 * @typedef {object} BucketChild<V>
 * @property {string} key
 * @property {V} value
 * @property {InfiniteHash} hash
 */

/**
 * @template B
 *
 * @typedef {object} SA<B>
 * @property {number} length
 * @property {() => B[]} compactArray
 * @property {(i: number) => B} get
 * @property {(i: number, value: B) => void} set
 * @property {<A> (fn: (acc: A, curr: B, index: number) => A, initial: A) => B} reduce
 * @property {(fn: (item: B) => boolean) => B | undefined} find
 * @property {() => number[]} bitField
 * @property {(i: number) => void} unset
 */

/**
 * @template T
 *
 * @typedef {object} BucketPosition<T>
 * @property {Bucket<T>} bucket
 * @property {number} pos
 * @property {InfiniteHash} hash
 * @property {BucketChild<T>} [existingChild]
 */

/**
 * @typedef {object} BucketOptions
 * @property {number} bits
 * @property {(value: Uint8Array | InfiniteHash) => InfiniteHash} hash
 */

/**
 * @template T
 */


class Bucket {
  /**
   * @param {BucketOptions} options
   * @param {Bucket<T>} [parent]
   * @param {number} [posAtParent=0]
   */
  constructor(options, parent, posAtParent = 0) {
    this._options = options;
    this._popCount = 0;
    this._parent = parent;
    this._posAtParent = posAtParent;
    /** @type {SA<Bucket<T> | BucketChild<T>>} */

    this._children = new SparseArray();
    /** @type {string | null} */

    this.key = null;
  }
  /**
   * @param {string} key
   * @param {T} value
   */


  put(key, value) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const place = yield _this._findNewBucketAndPos(key);
      yield place.bucket._putAt(place, key, value);
    })();
  }
  /**
   * @param {string} key
   */


  get(key) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const child = yield _this2._findChild(key);

      if (child) {
        return child.value;
      }
    })();
  }
  /**
   * @param {string} key
   */


  del(key) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const place = yield _this3._findPlace(key);

      const child = place.bucket._at(place.pos);

      if (child && child.key === key) {
        place.bucket._delAt(place.pos);
      }
    })();
  }
  /**
   * @returns {number}
   */


  leafCount() {
    const children = this._children.compactArray();

    return children.reduce((acc, child) => {
      if (child instanceof Bucket) {
        return acc + child.leafCount();
      }

      return acc + 1;
    }, 0);
  }

  childrenCount() {
    return this._children.length;
  }

  onlyChild() {
    return this._children.get(0);
  }
  /**
   * @returns {Iterable<BucketChild<T>>}
   */


  *eachLeafSeries() {
    const children = this._children.compactArray();

    for (const child of children) {
      if (child instanceof Bucket) {
        yield* child.eachLeafSeries();
      } else {
        yield child;
      }
    } // this is necessary because tsc requires a @return annotation as it
    // can't derive a return type due to the recursion, and eslint requires
    // a return statement when there is a @return annotation


    return [];
  }
  /**
   * @param {(value: BucketChild<T>, index: number) => T} map
   * @param {(reduced: any) => any} reduce
   */


  serialize(map, reduce) {
    /** @type {T[]} */
    const acc = []; // serialize to a custom non-sparse representation

    return reduce(this._children.reduce((acc, child, index) => {
      if (child) {
        if (child instanceof Bucket) {
          acc.push(child.serialize(map, reduce));
        } else {
          acc.push(map(child, index));
        }
      }

      return acc;
    }, acc));
  }
  /**
   * @param {(value: BucketChild<T>) => Promise<T[]>} asyncMap
   * @param {(reduced: any) => Promise<any>} asyncReduce
   */


  asyncTransform(asyncMap, asyncReduce) {
    return asyncTransformBucket(this, asyncMap, asyncReduce);
  }

  toJSON() {
    return this.serialize(mapNode, reduceNodes);
  }

  prettyPrint() {
    return JSON.stringify(this.toJSON(), null, '  ');
  }

  tableSize() {
    return Math.pow(2, this._options.bits);
  }
  /**
   * @param {string} key
   * @returns {Promise<BucketChild<T> | undefined>}
   */


  _findChild(key) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      const result = yield _this4._findPlace(key);

      const child = result.bucket._at(result.pos);

      if (child instanceof Bucket) {
        // should not be possible, this._findPlace should always
        // return a location for a child, not a bucket
        return undefined;
      }

      if (child && child.key === key) {
        return child;
      }
    })();
  }
  /**
   * @param {string | InfiniteHash} key
   * @returns {Promise<BucketPosition<T>>}
   */


  _findPlace(key) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      const hashValue = _this5._options.hash(typeof key === 'string' ? uint8ArrayFromString(key) : key);

      const index = yield hashValue.take(_this5._options.bits);

      const child = _this5._children.get(index);

      if (child instanceof Bucket) {
        return child._findPlace(hashValue);
      }

      return {
        bucket: _this5,
        pos: index,
        hash: hashValue,
        existingChild: child
      };
    })();
  }
  /**
   * @param {string | InfiniteHash} key
   * @returns {Promise<BucketPosition<T>>}
   */


  _findNewBucketAndPos(key) {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      const place = yield _this6._findPlace(key);

      if (place.existingChild && place.existingChild.key !== key) {
        // conflict
        const bucket = new Bucket(_this6._options, place.bucket, place.pos);

        place.bucket._putObjectAt(place.pos, bucket); // put the previous value


        const newPlace = yield bucket._findPlace(place.existingChild.hash);

        newPlace.bucket._putAt(newPlace, place.existingChild.key, place.existingChild.value);

        return bucket._findNewBucketAndPos(place.hash);
      } // no conflict, we found the place


      return place;
    })();
  }
  /**
   * @param {BucketPosition<T>} place
   * @param {string} key
   * @param {T} value
   */


  _putAt(place, key, value) {
    this._putObjectAt(place.pos, {
      key: key,
      value: value,
      hash: place.hash
    });
  }
  /**
   * @param {number} pos
   * @param {Bucket<T> | BucketChild<T>} object
   */


  _putObjectAt(pos, object) {
    if (!this._children.get(pos)) {
      this._popCount++;
    }

    this._children.set(pos, object);
  }
  /**
   * @param {number} pos
   */


  _delAt(pos) {
    if (pos === -1) {
      throw new Error('Invalid position');
    }

    if (this._children.get(pos)) {
      this._popCount--;
    }

    this._children.unset(pos);

    this._level();
  }

  _level() {
    if (this._parent && this._popCount <= 1) {
      if (this._popCount === 1) {
        // remove myself from parent, replacing me with my only child
        const onlyChild = this._children.find(exists);

        if (onlyChild && !(onlyChild instanceof Bucket)) {
          const hash = onlyChild.hash;
          hash.untake(this._options.bits);
          const place = {
            pos: this._posAtParent,
            hash: hash,
            bucket: this._parent
          };

          this._parent._putAt(place, onlyChild.key, onlyChild.value);
        }
      } else {
        this._parent._delAt(this._posAtParent);
      }
    }
  }
  /**
   * @param {number} index
   * @returns {BucketChild<T> | Bucket<T> | undefined}
   */


  _at(index) {
    return this._children.get(index);
  }

}
/**
 * @param {any} o
 */


function exists(o) {
  return Boolean(o);
}
/**
 *
 * @param {*} node
 * @param {number} index
 */


function mapNode(node, index) {
  return node.key;
}
/**
 * @param {*} nodes
 */


function reduceNodes(nodes) {
  return nodes;
}
/**
 * @template T
 *
 * @param {Bucket<T>} bucket
 * @param {(value: BucketChild<T>) => Promise<T[]>} asyncMap
 * @param {(reduced: any) => Promise<any>} asyncReduce
 */


function asyncTransformBucket(_x, _x2, _x3) {
  return _asyncTransformBucket.apply(this, arguments);
}

function _asyncTransformBucket() {
  _asyncTransformBucket = _asyncToGenerator(function* (bucket, asyncMap, asyncReduce) {
    const output = [];

    for (const child of bucket._children.compactArray()) {
      if (child instanceof Bucket) {
        yield asyncTransformBucket(child, asyncMap, asyncReduce);
      } else {
        const mappedChildren = yield asyncMap(child);
        output.push({
          bitField: bucket._children.bitField(),
          children: mappedChildren
        });
      }
    }

    return asyncReduce(output);
  });
  return _asyncTransformBucket.apply(this, arguments);
}

module.exports = Bucket;

/***/ }),

/***/ 72449:
/*!*************************************************************!*\
  !*** ./node_modules/hamt-sharding/src/consumable-buffer.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


const START_MASKS = [0b11111111, 0b11111110, 0b11111100, 0b11111000, 0b11110000, 0b11100000, 0b11000000, 0b10000000];
const STOP_MASKS = [0b00000001, 0b00000011, 0b00000111, 0b00001111, 0b00011111, 0b00111111, 0b01111111, 0b11111111];
module.exports = class ConsumableBuffer {
  /**
   * @param {Uint8Array} value
   */
  constructor(value) {
    this._value = value;
    this._currentBytePos = value.length - 1;
    this._currentBitPos = 7;
  }

  availableBits() {
    return this._currentBitPos + 1 + this._currentBytePos * 8;
  }

  totalBits() {
    return this._value.length * 8;
  }
  /**
   * @param {number} bits
   */


  take(bits) {
    let pendingBits = bits;
    let result = 0;

    while (pendingBits && this._haveBits()) {
      const byte = this._value[this._currentBytePos];
      const availableBits = this._currentBitPos + 1;
      const taking = Math.min(availableBits, pendingBits);
      const value = byteBitsToInt(byte, availableBits - taking, taking);
      result = (result << taking) + value;
      pendingBits -= taking;
      this._currentBitPos -= taking;

      if (this._currentBitPos < 0) {
        this._currentBitPos = 7;
        this._currentBytePos--;
      }
    }

    return result;
  }
  /**
   * @param {number} bits
   */


  untake(bits) {
    this._currentBitPos += bits;

    while (this._currentBitPos > 7) {
      this._currentBitPos -= 8;
      this._currentBytePos += 1;
    }
  }

  _haveBits() {
    return this._currentBytePos >= 0;
  }

};
/**
 * @param {number} byte
 * @param {number} start
 * @param {number} length
 */

function byteBitsToInt(byte, start, length) {
  const mask = maskFor(start, length);
  return (byte & mask) >>> start;
}
/**
 * @param {number} start
 * @param {number} length
 */


function maskFor(start, length) {
  return START_MASKS[start] & STOP_MASKS[Math.min(length + start - 1, 7)];
}

/***/ }),

/***/ 43184:
/*!***********************************************************!*\
  !*** ./node_modules/hamt-sharding/src/consumable-hash.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const ConsumableBuffer = __webpack_require__(/*! ./consumable-buffer */ 72449);

const {
  concat: uint8ArrayConcat
} = __webpack_require__(/*! uint8arrays/concat */ 49330);
/**
 * @param {(value: Uint8Array) => Promise<Uint8Array>} hashFn
 */


function wrapHash(hashFn) {
  /**
   * @param {InfiniteHash | Uint8Array} value
   */
  function hashing(value) {
    if (value instanceof InfiniteHash) {
      // already a hash. return it
      return value;
    } else {
      return new InfiniteHash(value, hashFn);
    }
  }

  return hashing;
}

class InfiniteHash {
  /**
   *
   * @param {Uint8Array} value
   * @param {(value: Uint8Array) => Promise<Uint8Array>} hashFn
   */
  constructor(value, hashFn) {
    if (!(value instanceof Uint8Array)) {
      throw new Error('can only hash Uint8Arrays');
    }

    this._value = value;
    this._hashFn = hashFn;
    this._depth = -1;
    this._availableBits = 0;
    this._currentBufferIndex = 0;
    /** @type {ConsumableBuffer[]} */

    this._buffers = [];
  }
  /**
   * @param {number} bits
   */


  take(bits) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let pendingBits = bits;

      while (_this._availableBits < pendingBits) {
        yield _this._produceMoreBits();
      }

      let result = 0;

      while (pendingBits > 0) {
        const hash = _this._buffers[_this._currentBufferIndex];
        const available = Math.min(hash.availableBits(), pendingBits);
        const took = hash.take(available);
        result = (result << available) + took;
        pendingBits -= available;
        _this._availableBits -= available;

        if (hash.availableBits() === 0) {
          _this._currentBufferIndex++;
        }
      }

      return result;
    })();
  }
  /**
   * @param {number} bits
   */


  untake(bits) {
    let pendingBits = bits;

    while (pendingBits > 0) {
      const hash = this._buffers[this._currentBufferIndex];
      const availableForUntake = Math.min(hash.totalBits() - hash.availableBits(), pendingBits);
      hash.untake(availableForUntake);
      pendingBits -= availableForUntake;
      this._availableBits += availableForUntake;

      if (this._currentBufferIndex > 0 && hash.totalBits() === hash.availableBits()) {
        this._depth--;
        this._currentBufferIndex--;
      }
    }
  }

  _produceMoreBits() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2._depth++;
      const value = _this2._depth ? uint8ArrayConcat([_this2._value, Uint8Array.from([_this2._depth])]) : _this2._value;
      const hashValue = yield _this2._hashFn(value);
      const buffer = new ConsumableBuffer(hashValue);

      _this2._buffers.push(buffer);

      _this2._availableBits += buffer.availableBits();
    })();
  }

}

module.exports = wrapHash;
module.exports.InfiniteHash = InfiniteHash;

/***/ }),

/***/ 2454:
/*!*************************************************!*\
  !*** ./node_modules/hamt-sharding/src/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Bucket = __webpack_require__(/*! ./bucket */ 74423);

const wrapHash = __webpack_require__(/*! ./consumable-hash */ 43184);
/**
 * @typedef {object} UserBucketOptions
 * @property {(value: Uint8Array) => Promise<Uint8Array>} hashFn
 * @property {number} [bits=8]
 */

/**
 * @param {UserBucketOptions} options
 */


function createHAMT(options) {
  if (!options || !options.hashFn) {
    throw new Error('please define an options.hashFn');
  }

  const bucketOptions = {
    bits: options.bits || 8,
    hash: wrapHash(options.hashFn)
  };
  return new Bucket(bucketOptions);
}

module.exports = {
  createHAMT,
  Bucket
};

/***/ }),

/***/ 54920:
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ 37940:
/*!****************!*\
  !*** err-code ***!
  \****************/
/***/ ((module) => {

"use strict";

/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */

function assign(obj, props) {
  for (const key in props) {
    Object.defineProperty(obj, key, {
      value: props[key],
      enumerable: true,
      configurable: true
    });
  }

  return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */


function createError(err, code, props) {
  if (!err || typeof err === 'string') {
    throw new TypeError('Please pass an Error to err-code');
  }

  if (!props) {
    props = {};
  }

  if (typeof code === 'object') {
    props = code;
    code = '';
  }

  if (code) {
    props.code = code;
  }

  try {
    return assign(err, props);
  } catch (_) {
    props.message = err.message;
    props.stack = err.stack;

    const ErrClass = function () {};

    ErrClass.prototype = Object.create(Object.getPrototypeOf(err)); // @ts-ignore

    const output = assign(new ErrClass(), props);
    return output;
  }
}

module.exports = createError;

/***/ }),

/***/ 12369:
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/minimal.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ 60095);

/***/ }),

/***/ 60095:
/*!****************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/index-minimal.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var protobuf = exports;
/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */

protobuf.build = "minimal"; // Serialization

protobuf.Writer = __webpack_require__(/*! ./writer */ 73903);
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ 68482);
protobuf.Reader = __webpack_require__(/*! ./reader */ 34250);
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ 92232); // Utility

protobuf.util = __webpack_require__(/*! ./util/minimal */ 56421);
protobuf.rpc = __webpack_require__(/*! ./rpc */ 71210);
protobuf.roots = __webpack_require__(/*! ./roots */ 56126);
protobuf.configure = configure;
/* istanbul ignore next */

/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */

function configure() {
  protobuf.util._configure();

  protobuf.Writer._configure(protobuf.BufferWriter);

  protobuf.Reader._configure(protobuf.BufferReader);
} // Set up buffer utility according to the environment


configure();

/***/ }),

/***/ 34250:
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/reader.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Reader;

var util = __webpack_require__(/*! ./util/minimal */ 56421);

var BufferReader; // cyclic

var LongBits = util.LongBits,
    utf8 = util.utf8;
/* istanbul ignore next */

function indexOutOfRange(reader, writeLength) {
  return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}
/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */


function Reader(buffer) {
  /**
   * Read buffer.
   * @type {Uint8Array}
   */
  this.buf = buffer;
  /**
   * Read buffer position.
   * @type {number}
   */

  this.pos = 0;
  /**
   * Read buffer length.
   * @type {number}
   */

  this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
  if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
}
/* istanbul ignore next */
: function create_array(buffer) {
  if (Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
};

var create = function create() {
  return util.Buffer ? function create_buffer_setup(buffer) {
    return (Reader.create = function create_buffer(buffer) {
      return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
      /* istanbul ignore next */
      : create_array(buffer);
    })(buffer);
  }
  /* istanbul ignore next */
  : create_array;
};
/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */


Reader.create = create();
Reader.prototype._slice = util.Array.prototype.subarray ||
/* istanbul ignore next */
util.Array.prototype.slice;
/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */

Reader.prototype.uint32 = function read_uint32_setup() {
  var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)

  return function read_uint32() {
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    /* istanbul ignore if */

    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }

    return value;
  };
}();
/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.sint32 = function read_sint32() {
  var value = this.uint32();
  return value >>> 1 ^ -(value & 1) | 0;
};
/* eslint-disable no-invalid-this */


function readLongVarint() {
  // tends to deopt with local vars for octet etc.
  var bits = new LongBits(0, 0);
  var i = 0;

  if (this.len - this.pos > 4) {
    // fast route (lo)
    for (; i < 4; ++i) {
      // 1st..4th
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 5th


    bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
    if (this.buf[this.pos++] < 128) return bits;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 4th


    bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
    return bits;
  }

  if (this.len - this.pos > 4) {
    // fast route (hi)
    for (; i < 5; ++i) {
      // 6th..10th
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  } else {
    for (; i < 5; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  }
  /* istanbul ignore next */


  throw Error("invalid varint encoding");
}
/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */


Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};

function readFixed32_end(buf, end) {
  // note that this uses `end`, not `pos`
  return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}
/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.fixed32 = function read_fixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4);
};
/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.sfixed32 = function read_sfixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
/* eslint-disable no-invalid-this */


function
  /* this: Reader */
readFixed64() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.float = function read_float() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return value;
};
/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.double = function read_double() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return value;
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */


Reader.prototype.bytes = function read_bytes() {
  var length = this.uint32(),
      start = this.pos,
      end = this.pos + length;
  /* istanbul ignore if */

  if (end > this.len) throw indexOutOfRange(this, length);
  this.pos += length;
  if (Array.isArray(this.buf)) // plain array
    return this.buf.slice(start, end);
  return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
  ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
};
/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */


Reader.prototype.string = function read_string() {
  var bytes = this.bytes();
  return utf8.read(bytes, 0, bytes.length);
};
/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */


Reader.prototype.skip = function skip(length) {
  if (typeof length === "number") {
    /* istanbul ignore if */
    if (this.pos + length > this.len) throw indexOutOfRange(this, length);
    this.pos += length;
  } else {
    do {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (this.buf[this.pos++] & 128);
  }

  return this;
};
/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */


Reader.prototype.skipType = function (wireType) {
  switch (wireType) {
    case 0:
      this.skip();
      break;

    case 1:
      this.skip(8);
      break;

    case 2:
      this.skip(this.uint32());
      break;

    case 3:
      while ((wireType = this.uint32() & 7) !== 4) {
        this.skipType(wireType);
      }

      break;

    case 5:
      this.skip(4);
      break;

    /* istanbul ignore next */

    default:
      throw Error("invalid wire type " + wireType + " at offset " + this.pos);
  }

  return this;
};

Reader._configure = function (BufferReader_) {
  BufferReader = BufferReader_;
  Reader.create = create();

  BufferReader._configure();

  var fn = util.Long ? "toLong" :
  /* istanbul ignore next */
  "toNumber";
  util.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[fn](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[fn](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[fn](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[fn](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[fn](false);
    }
  });
};

/***/ }),

/***/ 92232:
/*!****************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/reader_buffer.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = BufferReader; // extends Reader

var Reader = __webpack_require__(/*! ./reader */ 34250);

(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ 56421);
/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */


function BufferReader(buffer) {
  Reader.call(this, buffer);
  /**
   * Read buffer.
   * @name BufferReader#buf
   * @type {Buffer}
   */
}

BufferReader._configure = function () {
  /* istanbul ignore else */
  if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
};
/**
 * @override
 */


BufferReader.prototype.string = function read_string_buffer() {
  var len = this.uint32(); // modifies pos

  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


BufferReader._configure();

/***/ }),

/***/ 56126:
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/roots.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {};
/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */

/***/ }),

/***/ 71210:
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/rpc.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Streaming RPC helpers.
 * @namespace
 */

var rpc = exports;
/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ 39193);

/***/ }),

/***/ 39193:
/*!**************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/rpc/service.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ 56421); // Extends EventEmitter


(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */

function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
  util.EventEmitter.call(this);
  /**
   * RPC implementation. Becomes `null` once the service is ended.
   * @type {RPCImpl|null}
   */

  this.rpcImpl = rpcImpl;
  /**
   * Whether requests are length-delimited.
   * @type {boolean}
   */

  this.requestDelimited = Boolean(requestDelimited);
  /**
   * Whether responses are length-delimited.
   * @type {boolean}
   */

  this.responseDelimited = Boolean(responseDelimited);
}
/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */


Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
  if (!request) throw TypeError("request must be specified");
  var self = this;
  if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

  if (!self.rpcImpl) {
    setTimeout(function () {
      callback(Error("already ended"));
    }, 0);
    return undefined;
  }

  try {
    return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
      if (err) {
        self.emit("error", err, method);
        return callback(err);
      }

      if (response === null) {
        self.end(
        /* endedByRPC */
        true);
        return undefined;
      }

      if (!(response instanceof responseCtor)) {
        try {
          response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        } catch (err) {
          self.emit("error", err, method);
          return callback(err);
        }
      }

      self.emit("data", response, method);
      return callback(null, response);
    });
  } catch (err) {
    self.emit("error", err, method);
    setTimeout(function () {
      callback(err);
    }, 0);
    return undefined;
  }
};
/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */


Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC) // signal end to rpcImpl
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit("end").off();
  }

  return this;
};

/***/ }),

/***/ 3935:
/*!******************!*\
  !*** ./longbits ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ 56421);
/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */


function LongBits(lo, hi) {
  // note that the casts below are theoretically unnecessary as of today, but older statically
  // generated converter code might still call the ctor with signed 32bits. kept for compat.

  /**
   * Low bits.
   * @type {number}
   */
  this.lo = lo >>> 0;
  /**
   * High bits.
   * @type {number}
   */

  this.hi = hi >>> 0;
}
/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */


var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function () {
  return 0;
};

zero.zzEncode = zero.zzDecode = function () {
  return this;
};

zero.length = function () {
  return 1;
};
/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */


var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */

LongBits.fromNumber = function fromNumber(value) {
  if (value === 0) return zero;
  var sign = value < 0;
  if (sign) value = -value;
  var lo = value >>> 0,
      hi = (value - lo) / 4294967296 >>> 0;

  if (sign) {
    hi = ~hi >>> 0;
    lo = ~lo >>> 0;

    if (++lo > 4294967295) {
      lo = 0;
      if (++hi > 4294967295) hi = 0;
    }
  }

  return new LongBits(lo, hi);
};
/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */


LongBits.from = function from(value) {
  if (typeof value === "number") return LongBits.fromNumber(value);

  if (util.isString(value)) {
    /* istanbul ignore else */
    if (util.Long) value = util.Long.fromString(value);else return LongBits.fromNumber(parseInt(value, 10));
  }

  return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};
/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */


LongBits.prototype.toNumber = function toNumber(unsigned) {
  if (!unsigned && this.hi >>> 31) {
    var lo = ~this.lo + 1 >>> 0,
        hi = ~this.hi >>> 0;
    if (!lo) hi = hi + 1 >>> 0;
    return -(lo + hi * 4294967296);
  }

  return this.lo + this.hi * 4294967296;
};
/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */


LongBits.prototype.toLong = function toLong(unsigned) {
  return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
  /* istanbul ignore next */
  : {
    low: this.lo | 0,
    high: this.hi | 0,
    unsigned: Boolean(unsigned)
  };
};

var charCodeAt = String.prototype.charCodeAt;
/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */

LongBits.fromHash = function fromHash(hash) {
  if (hash === zeroHash) return zero;
  return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};
/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */


LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzEncode = function zzEncode() {
  var mask = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  this.lo = (this.lo << 1 ^ mask) >>> 0;
  return this;
};
/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzDecode = function zzDecode() {
  var mask = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  this.hi = (this.hi >>> 1 ^ mask) >>> 0;
  return this;
};
/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */


LongBits.prototype.length = function length() {
  var part0 = this.lo,
      part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
      part2 = this.hi >>> 24;
  return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};

/***/ }),

/***/ 56421:
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/util/minimal.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var util = exports; // used to return a Promise where callback is omitted

util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ 18791); // converts to / from base64 encoded strings

util.base64 = __webpack_require__(/*! @protobufjs/base64 */ 5985); // base class of rpc.Service

util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ 68074); // float handling accross browsers

util.float = __webpack_require__(/*! @protobufjs/float */ 48170); // requires modules optionally and hides the call from bundlers

util.inquire = __webpack_require__(/*! @protobufjs/inquire */ 91248); // converts to / from utf8 encoded strings

util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ 88178); // provides a node-like buffer pool in the browser

util.pool = __webpack_require__(/*! @protobufjs/pool */ 15759); // utility to work with the low and high bits of a 64 bit value

util.LongBits = __webpack_require__(/*! ./longbits */ 3935);
/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */

util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */

util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */

util.emptyArray = Object.freeze ? Object.freeze([]) :
/* istanbul ignore next */
[]; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */

util.emptyObject = Object.freeze ? Object.freeze({}) :
/* istanbul ignore next */
{}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */

util.isInteger = Number.isInteger ||
/* istanbul ignore next */
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */


util.isString = function isString(value) {
  return typeof value === "string" || value instanceof String;
};
/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */


util.isObject = function isObject(value) {
  return value && typeof value === "object";
};
/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */


util.isset =
/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
  var value = obj[prop];
  if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
    return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
  return false;
};
/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */


util.Buffer = function () {
  try {
    var Buffer = util.inquire("buffer").Buffer; // refuse to use non-node buffers if not explicitly assigned (perf reasons):

    return Buffer.prototype.utf8Write ? Buffer :
    /* istanbul ignore next */
    null;
  } catch (e) {
    /* istanbul ignore next */
    return null;
  }
}(); // Internal alias of or polyfull for Buffer.from.


util._Buffer_from = null; // Internal alias of or polyfill for Buffer.allocUnsafe.

util._Buffer_allocUnsafe = null;
/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */

util.newBuffer = function newBuffer(sizeOrArray) {
  /* istanbul ignore next */
  return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
};
/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */


util.Array = typeof Uint8Array !== "undefined" ? Uint8Array
/* istanbul ignore next */
: Array;
/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */

util.Long =
/* istanbul ignore next */
util.global.dcodeIO &&
/* istanbul ignore next */
util.global.dcodeIO.Long ||
/* istanbul ignore next */
util.global.Long || util.inquire("long");
/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */

util.key2Re = /^true|false|0|1$/;
/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */

util.longToHash = function longToHash(value) {
  return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
};
/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */


util.longFromHash = function longFromHash(hash, unsigned) {
  var bits = util.LongBits.fromHash(hash);
  if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
  return bits.toNumber(Boolean(unsigned));
};
/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */


function merge(dst, src, ifNotSet) {
  // used by converters
  for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];

  return dst;
}

util.merge = merge;
/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */

util.lcFirst = function lcFirst(str) {
  return str.charAt(0).toLowerCase() + str.substring(1);
};
/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */


function newError(name) {
  function CustomError(message, properties) {
    if (!(this instanceof CustomError)) return new CustomError(message, properties); // Error.call(this, message);
    // ^ just returns a new error instance because the ctor can be called as a function

    Object.defineProperty(this, "message", {
      get: function () {
        return message;
      }
    });
    /* istanbul ignore next */

    if (Error.captureStackTrace) // node
      Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
      value: new Error().stack || ""
    });
    if (properties) merge(this, properties);
  }

  (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
  Object.defineProperty(CustomError.prototype, "name", {
    get: function () {
      return name;
    }
  });

  CustomError.prototype.toString = function toString() {
    return this.name + ": " + this.message;
  };

  return CustomError;
}

util.newError = newError;
/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */

util.ProtocolError = newError("ProtocolError");
/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */

util.oneOfGetter = function getOneOf(fieldNames) {
  var fieldMap = {};

  for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
  /**
   * @returns {string|undefined} Set field name, if any
   * @this Object
   * @ignore
   */


  return function () {
    // eslint-disable-line consistent-return
    for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
  };
};
/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */


util.oneOfSetter = function setOneOf(fieldNames) {
  /**
   * @param {string} name Field name
   * @returns {undefined}
   * @this Object
   * @ignore
   */
  return function (name) {
    for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[fieldNames[i]];
  };
};
/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */


util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
}; // Sets up buffer utility according to the environment (called in index-minimal)

util._configure = function () {
  var Buffer = util.Buffer;
  /* istanbul ignore if */

  if (!Buffer) {
    util._Buffer_from = util._Buffer_allocUnsafe = null;
    return;
  } // because node 4.x buffers are incompatible & immutable
  // see: https://github.com/dcodeIO/protobuf.js/pull/665


  util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
  /* istanbul ignore next */
  function Buffer_from(value, encoding) {
    return new Buffer(value, encoding);
  };

  util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
  /* istanbul ignore next */
  function Buffer_allocUnsafe(size) {
    return new Buffer(size);
  };
};

/***/ }),

/***/ 73903:
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/writer.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Writer;

var util = __webpack_require__(/*! ./util/minimal */ 56421);

var BufferWriter; // cyclic

var LongBits = util.LongBits,
    base64 = util.base64,
    utf8 = util.utf8;
/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */

function Op(fn, len, val) {
  /**
   * Function to call.
   * @type {function(Uint8Array, number, *)}
   */
  this.fn = fn;
  /**
   * Value byte length.
   * @type {number}
   */

  this.len = len;
  /**
   * Next operation.
   * @type {Writer.Op|undefined}
   */

  this.next = undefined;
  /**
   * Value to write.
   * @type {*}
   */

  this.val = val; // type varies
}
/* istanbul ignore next */


function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */


function State(writer) {
  /**
   * Current head.
   * @type {Writer.Op}
   */
  this.head = writer.head;
  /**
   * Current tail.
   * @type {Writer.Op}
   */

  this.tail = writer.tail;
  /**
   * Current buffer length.
   * @type {number}
   */

  this.len = writer.len;
  /**
   * Next state.
   * @type {State|null}
   */

  this.next = writer.states;
}
/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */


function Writer() {
  /**
   * Current length.
   * @type {number}
   */
  this.len = 0;
  /**
   * Operations head.
   * @type {Object}
   */

  this.head = new Op(noop, 0, 0);
  /**
   * Operations tail
   * @type {Object}
   */

  this.tail = this.head;
  /**
   * Linked forked states.
   * @type {Object|null}
   */

  this.states = null; // When a value is written, the writer calculates its byte length and puts it into a linked
  // list of operations to perform when finish() is called. This both allows us to allocate
  // buffers of the exact required size and reduces the amount of work we have to do compared
  // to first calculating over objects and then encoding over objects. In our case, the encoding
  // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
  return util.Buffer ? function create_buffer_setup() {
    return (Writer.create = function create_buffer() {
      return new BufferWriter();
    })();
  }
  /* istanbul ignore next */
  : function create_array() {
    return new Writer();
  };
};
/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */


Writer.create = create();
/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

Writer.alloc = function alloc(size) {
  return new util.Array(size);
}; // Use Uint8Array buffer pool in the browser, just like node does with buffers

/* istanbul ignore else */


if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */

Writer.prototype._push = function push(fn, len, val) {
  this.tail = this.tail.next = new Op(fn, len, val);
  this.len += len;
  return this;
};

function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }

  buf[pos] = val;
}
/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */


function VarintOp(len, val) {
  this.len = len;
  this.next = undefined;
  this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.uint32 = function write_uint32(value) {
  // here, the call to this.push has been inlined and a varint specific Op subclass is used.
  // uint32 is by far the most frequently used operation and benefits significantly from this.
  this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
  return this;
};
/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.int32 = function write_int32(value) {
  return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
  : this.uint32(value);
};
/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sint32 = function write_sint32(value) {
  return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
  while (val.hi) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }

  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }

  buf[pos++] = val.lo;
}
/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.uint64 = function write_uint64(value) {
  var bits = LongBits.from(value);
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.int64 = Writer.prototype.uint64;
/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.sint64 = function write_sint64(value) {
  var bits = LongBits.from(value).zzEncode();
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.bool = function write_bool(value) {
  return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.fixed32 = function write_fixed32(value) {
  return this._push(writeFixed32, 4, value >>> 0);
};
/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sfixed32 = Writer.prototype.fixed32;
/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.fixed64 = function write_fixed64(value) {
  var bits = LongBits.from(value);
  return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.sfixed64 = Writer.prototype.fixed64;
/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.float = function write_float(value) {
  return this._push(util.float.writeFloatLE, 4, value);
};
/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.double = function write_double(value) {
  return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
  buf.set(val, pos); // also works for plain array values
}
/* istanbul ignore next */
: function writeBytes_for(val, buf, pos) {
  for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
};
/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */

Writer.prototype.bytes = function write_bytes(value) {
  var len = value.length >>> 0;
  if (!len) return this._push(writeByte, 1, 0);

  if (util.isString(value)) {
    var buf = Writer.alloc(len = base64.length(value));
    base64.decode(value, buf, 0);
    value = buf;
  }

  return this.uint32(len)._push(writeBytes, len, value);
};
/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.string = function write_string(value) {
  var len = utf8.length(value);
  return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
};
/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */


Writer.prototype.fork = function fork() {
  this.states = new State(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */


Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }

  return this;
};
/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */


Writer.prototype.ldelim = function ldelim() {
  var head = this.head,
      tail = this.tail,
      len = this.len;
  this.reset().uint32(len);

  if (len) {
    this.tail.next = head.next; // skip noop

    this.tail = tail;
    this.len += len;
  }

  return this;
};
/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */


Writer.prototype.finish = function finish() {
  var head = this.head.next,
      // skip noop
  buf = this.constructor.alloc(this.len),
      pos = 0;

  while (head) {
    head.fn(head.val, buf, pos);
    pos += head.len;
    head = head.next;
  } // this.head = this.tail = null;


  return buf;
};

Writer._configure = function (BufferWriter_) {
  BufferWriter = BufferWriter_;
  Writer.create = create();

  BufferWriter._configure();
};

/***/ }),

/***/ 68482:
/*!****************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/protobufjs/src/writer_buffer.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = BufferWriter; // extends Writer

var Writer = __webpack_require__(/*! ./writer */ 73903);

(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ 56421);
/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */


function BufferWriter() {
  Writer.call(this);
}

BufferWriter._configure = function () {
  /**
   * Allocates a buffer of the specified size.
   * @function
   * @param {number} size Buffer size
   * @returns {Buffer} Buffer
   */
  BufferWriter.alloc = util._Buffer_allocUnsafe;
  BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
    buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
    // also works for plain array values
  }
  /* istanbul ignore next */
  : function writeBytesBuffer_copy(val, buf, pos) {
    if (val.copy) // Buffer values
      val.copy(buf, pos, 0, val.length);else for (var i = 0; i < val.length;) // plain array values
    buf[pos++] = val[i++];
  };
};
/**
 * @override
 */


BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
  if (util.isString(value)) value = util._Buffer_from(value, "base64");
  var len = value.length >>> 0;
  this.uint32(len);
  if (len) this._push(BufferWriter.writeBytesBuffer, len, value);
  return this;
};

function writeStringBuffer(val, buf, pos) {
  if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
    util.utf8.write(val, buf, pos);else if (buf.utf8Write) buf.utf8Write(val, pos);else buf.write(val, pos);
}
/**
 * @override
 */


BufferWriter.prototype.string = function write_string_buffer(value) {
  var len = util.Buffer.byteLength(value);
  this.uint32(len);
  if (len) this._push(writeStringBuffer, len, value);
  return this;
};
/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


BufferWriter._configure();

/***/ }),

/***/ 73282:
/*!*************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/node_modules/bl/BufferList.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  Buffer
} = __webpack_require__(/*! buffer */ 28628);

const symbol = Symbol.for('BufferList');

function BufferList(buf) {
  if (!(this instanceof BufferList)) {
    return new BufferList(buf);
  }

  BufferList._init.call(this, buf);
}

BufferList._init = function _init(buf) {
  Object.defineProperty(this, symbol, {
    value: true
  });
  this._bufs = [];
  this.length = 0;

  if (buf) {
    this.append(buf);
  }
};

BufferList.prototype._new = function _new(buf) {
  return new BufferList(buf);
};

BufferList.prototype._offset = function _offset(offset) {
  if (offset === 0) {
    return [0, 0];
  }

  let tot = 0;

  for (let i = 0; i < this._bufs.length; i++) {
    const _t = tot + this._bufs[i].length;

    if (offset < _t || i === this._bufs.length - 1) {
      return [i, offset - tot];
    }

    tot = _t;
  }
};

BufferList.prototype._reverseOffset = function (blOffset) {
  const bufferId = blOffset[0];
  let offset = blOffset[1];

  for (let i = 0; i < bufferId; i++) {
    offset += this._bufs[i].length;
  }

  return offset;
};

BufferList.prototype.get = function get(index) {
  if (index > this.length || index < 0) {
    return undefined;
  }

  const offset = this._offset(index);

  return this._bufs[offset[0]][offset[1]];
};

BufferList.prototype.slice = function slice(start, end) {
  if (typeof start === 'number' && start < 0) {
    start += this.length;
  }

  if (typeof end === 'number' && end < 0) {
    end += this.length;
  }

  return this.copy(null, 0, start, end);
};

BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart !== 'number' || srcStart < 0) {
    srcStart = 0;
  }

  if (typeof srcEnd !== 'number' || srcEnd > this.length) {
    srcEnd = this.length;
  }

  if (srcStart >= this.length) {
    return dst || Buffer.alloc(0);
  }

  if (srcEnd <= 0) {
    return dst || Buffer.alloc(0);
  }

  const copy = !!dst;

  const off = this._offset(srcStart);

  const len = srcEnd - srcStart;
  let bytes = len;
  let bufoff = copy && dstStart || 0;
  let start = off[1]; // copy/slice everything

  if (srcStart === 0 && srcEnd === this.length) {
    if (!copy) {
      // slice, but full concat if multiple buffers
      return this._bufs.length === 1 ? this._bufs[0] : Buffer.concat(this._bufs, this.length);
    } // copy, need to copy individual buffers


    for (let i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff);

      bufoff += this._bufs[i].length;
    }

    return dst;
  } // easy, cheap case where it's a subset of one of the buffers


  if (bytes <= this._bufs[off[0]].length - start) {
    return copy ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
  }

  if (!copy) {
    // a slice, we need something to copy in to
    dst = Buffer.allocUnsafe(len);
  }

  for (let i = off[0]; i < this._bufs.length; i++) {
    const l = this._bufs[i].length - start;

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start);

      bufoff += l;
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes);

      bufoff += l;
      break;
    }

    bytes -= l;

    if (start) {
      start = 0;
    }
  } // safeguard so that we don't return uninitialized memory


  if (dst.length > bufoff) return dst.slice(0, bufoff);
  return dst;
};

BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
  start = start || 0;
  end = typeof end !== 'number' ? this.length : end;

  if (start < 0) {
    start += this.length;
  }

  if (end < 0) {
    end += this.length;
  }

  if (start === end) {
    return this._new();
  }

  const startOffset = this._offset(start);

  const endOffset = this._offset(end);

  const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);

  if (endOffset[1] === 0) {
    buffers.pop();
  } else {
    buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
  }

  if (startOffset[1] !== 0) {
    buffers[0] = buffers[0].slice(startOffset[1]);
  }

  return this._new(buffers);
};

BufferList.prototype.toString = function toString(encoding, start, end) {
  return this.slice(start, end).toString(encoding);
};

BufferList.prototype.consume = function consume(bytes) {
  // first, normalize the argument, in accordance with how Buffer does it
  bytes = Math.trunc(bytes); // do nothing if not a positive number

  if (Number.isNaN(bytes) || bytes <= 0) return this;

  while (this._bufs.length) {
    if (bytes >= this._bufs[0].length) {
      bytes -= this._bufs[0].length;
      this.length -= this._bufs[0].length;

      this._bufs.shift();
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes);
      this.length -= bytes;
      break;
    }
  }

  return this;
};

BufferList.prototype.duplicate = function duplicate() {
  const copy = this._new();

  for (let i = 0; i < this._bufs.length; i++) {
    copy.append(this._bufs[i]);
  }

  return copy;
};

BufferList.prototype.append = function append(buf) {
  if (buf == null) {
    return this;
  }

  if (buf.buffer) {
    // append a view of the underlying ArrayBuffer
    this._appendBuffer(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
  } else if (Array.isArray(buf)) {
    for (let i = 0; i < buf.length; i++) {
      this.append(buf[i]);
    }
  } else if (this._isBufferList(buf)) {
    // unwrap argument into individual BufferLists
    for (let i = 0; i < buf._bufs.length; i++) {
      this.append(buf._bufs[i]);
    }
  } else {
    // coerce number arguments to strings, since Buffer(number) does
    // uninitialized memory allocation
    if (typeof buf === 'number') {
      buf = buf.toString();
    }

    this._appendBuffer(Buffer.from(buf));
  }

  return this;
};

BufferList.prototype._appendBuffer = function appendBuffer(buf) {
  this._bufs.push(buf);

  this.length += buf.length;
};

BufferList.prototype.indexOf = function (search, offset, encoding) {
  if (encoding === undefined && typeof offset === 'string') {
    encoding = offset;
    offset = undefined;
  }

  if (typeof search === 'function' || Array.isArray(search)) {
    throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
  } else if (typeof search === 'number') {
    search = Buffer.from([search]);
  } else if (typeof search === 'string') {
    search = Buffer.from(search, encoding);
  } else if (this._isBufferList(search)) {
    search = search.slice();
  } else if (Array.isArray(search.buffer)) {
    search = Buffer.from(search.buffer, search.byteOffset, search.byteLength);
  } else if (!Buffer.isBuffer(search)) {
    search = Buffer.from(search);
  }

  offset = Number(offset || 0);

  if (isNaN(offset)) {
    offset = 0;
  }

  if (offset < 0) {
    offset = this.length + offset;
  }

  if (offset < 0) {
    offset = 0;
  }

  if (search.length === 0) {
    return offset > this.length ? this.length : offset;
  }

  const blOffset = this._offset(offset);

  let blIndex = blOffset[0]; // index of which internal buffer we're working on

  let buffOffset = blOffset[1]; // offset of the internal buffer we're working on
  // scan over each buffer

  for (; blIndex < this._bufs.length; blIndex++) {
    const buff = this._bufs[blIndex];

    while (buffOffset < buff.length) {
      const availableWindow = buff.length - buffOffset;

      if (availableWindow >= search.length) {
        const nativeSearchResult = buff.indexOf(search, buffOffset);

        if (nativeSearchResult !== -1) {
          return this._reverseOffset([blIndex, nativeSearchResult]);
        }

        buffOffset = buff.length - search.length + 1; // end of native search window
      } else {
        const revOffset = this._reverseOffset([blIndex, buffOffset]);

        if (this._match(revOffset, search)) {
          return revOffset;
        }

        buffOffset++;
      }
    }

    buffOffset = 0;
  }

  return -1;
};

BufferList.prototype._match = function (offset, search) {
  if (this.length - offset < search.length) {
    return false;
  }

  for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
    if (this.get(offset + searchOffset) !== search[searchOffset]) {
      return false;
    }
  }

  return true;
};

(function () {
  const methods = {
    readDoubleBE: 8,
    readDoubleLE: 8,
    readFloatBE: 4,
    readFloatLE: 4,
    readInt32BE: 4,
    readInt32LE: 4,
    readUInt32BE: 4,
    readUInt32LE: 4,
    readInt16BE: 2,
    readInt16LE: 2,
    readUInt16BE: 2,
    readUInt16LE: 2,
    readInt8: 1,
    readUInt8: 1,
    readIntBE: null,
    readIntLE: null,
    readUIntBE: null,
    readUIntLE: null
  };

  for (const m in methods) {
    (function (m) {
      if (methods[m] === null) {
        BufferList.prototype[m] = function (offset, byteLength) {
          return this.slice(offset, offset + byteLength)[m](0, byteLength);
        };
      } else {
        BufferList.prototype[m] = function (offset = 0) {
          return this.slice(offset, offset + methods[m])[m](0);
        };
      }
    })(m);
  }
})(); // Used internally by the class and also as an indicator of this object being
// a `BufferList`. It's not possible to use `instanceof BufferList` in a browser
// environment because there could be multiple different copies of the
// BufferList class and some `BufferList`s might be `BufferList`s.


BufferList.prototype._isBufferList = function _isBufferList(b) {
  return b instanceof BufferList || BufferList.isBufferList(b);
};

BufferList.isBufferList = function isBufferList(b) {
  return b != null && b[symbol];
};

module.exports = BufferList;

/***/ }),

/***/ 28628:
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/node_modules/buffer/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


const base64 = __webpack_require__(/*! base64-js */ 82173);

const ieee754 = __webpack_require__(/*! ieee754 */ 54920);

const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
: null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}

function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1);
    const proto = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});

function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  } // Return an augmented `Uint8Array` instance


  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }

    return allocUnsafe(arg);
  }

  return from(arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }

  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }

  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }

  const valueOf = value.valueOf && value.valueOf();

  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  const b = fromObject(value);
  if (b) return b;

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }

  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
}; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148


Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }

  return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }

  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);
  const actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);

  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  }

  return fromArrayLike(arrayView);
}

function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }

  let buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  } // Return an augmented `Uint8Array` instance


  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }

    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }

  if (a === b) return 0;
  let x = a.length;
  let y = b.length;

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  let i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  const buffer = Buffer.allocUnsafe(length);
  let pos = 0;

  for (i = 0; i < list.length; ++i) {
    let buf = list[i];

    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
        buf.copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(buffer, buf, pos);
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    } else {
      buf.copy(buffer, pos);
    }

    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  }

  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

  let loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  let loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coercion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  const len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  const len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  const len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.toLocaleString = Buffer.prototype.toString;

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  let str = '';
  const max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};

if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }

  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  let x = thisEnd - thisStart;
  let y = end - start;
  const len = Math.min(x, y);
  const thisCopy = this.slice(thisStart, thisEnd);
  const targetCopy = target.slice(start, end);

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  let i;

  if (dir) {
    let foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      let found = true;

      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  const strLen = string.length;

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  let i;

  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;

    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  const remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  let loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;

  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


const MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  let res = '';
  let i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  let out = '';

  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = ''; // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)

  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  const newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  let val = this[offset + --byteLength];
  let mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
  const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
  return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
  return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let i = byteLength;
  let mul = 1;
  let val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24); // Overflow

  return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = (first << 24) + // Overflow
  this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let mul = 1;
  let i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let i = byteLength - 1;
  let mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}

function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = 0;
  let mul = 1;
  let sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = byteLength - 1;
  let mul = 1;
  let sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  const len = end - start;

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }

    if (val.length === 1) {
      const code = val.charCodeAt(0);

      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  let i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    const len = bytes.length;

    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage


const errors = {};

function E(sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor() {
      super();
      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      }); // Add the error code to the name to include it in the stack trace.

      this.name = `${this.name} [${sym}]`; // Access the stack to generate the error message including the error code
      // from the name.

      this.stack; // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.

      delete this.name;
    }

    get code() {
      return sym;
    }

    set code(value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }

    toString() {
      return `${this.name} [${sym}]: ${this.message}`;
    }

  };
}

E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
  if (name) {
    return `${name} is outside of buffer bounds`;
  }

  return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function (name, actual) {
  return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function (str, range, input) {
  let msg = `The value of "${str}" is out of range.`;
  let received = input;

  if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
    received = addNumericalSeparator(String(input));
  } else if (typeof input === 'bigint') {
    received = String(input);

    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
      received = addNumericalSeparator(received);
    }

    received += 'n';
  }

  msg += ` It must be ${range}. Received ${received}`;
  return msg;
}, RangeError);

function addNumericalSeparator(val) {
  let res = '';
  let i = val.length;
  const start = val[0] === '-' ? 1 : 0;

  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }

  return `${val.slice(0, i)}${res}`;
} // CHECK FUNCTIONS
// ===============


function checkBounds(buf, offset, byteLength) {
  validateNumber(offset, 'offset');

  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1));
  }
}

function checkIntBI(value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : '';
    let range;

    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }

    throw new errors.ERR_OUT_OF_RANGE('value', range, value);
  }

  checkBounds(buf, offset, byteLength);
}

function validateNumber(value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
  }
}

function boundsError(value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
} // HELPER FUNCTIONS
// ================


const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

  str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  const byteArray = [];

  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray = [];

  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  let i;

  for (i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
} // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166


function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}

function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
} // Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219


const hexSliceLookupTable = function () {
  const alphabet = '0123456789abcdef';
  const table = new Array(256);

  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16;

    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }

  return table;
}(); // Return not function with Error if BigInt not supported


function defineBigIntMethod(fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}

function BufferBigIntNotDefined() {
  throw new Error('BigInt not supported');
}

/***/ }),

/***/ 47847:
/*!****************!*\
  !*** err-code ***!
  \****************/
/***/ ((module) => {

"use strict";

/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */

function assign(obj, props) {
  for (const key in props) {
    Object.defineProperty(obj, key, {
      value: props[key],
      enumerable: true,
      configurable: true
    });
  }

  return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */


function createError(err, code, props) {
  if (!err || typeof err === 'string') {
    throw new TypeError('Please pass an Error to err-code');
  }

  if (!props) {
    props = {};
  }

  if (typeof code === 'object') {
    props = code;
    code = '';
  }

  if (code) {
    props.code = code;
  }

  try {
    return assign(err, props);
  } catch (_) {
    props.message = err.message;
    props.stack = err.stack;

    const ErrClass = function () {};

    ErrClass.prototype = Object.create(Object.getPrototypeOf(err)); // @ts-ignore

    const output = assign(new ErrClass(), props);
    return output;
  }
}

module.exports = createError;

/***/ }),

/***/ 30375:
/*!*****************************!*\
  !*** protobufjs/minimal.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ 44268);

/***/ }),

/***/ 44268:
/*!***************************!*\
  !*** ./src/index-minimal ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var protobuf = exports;
/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */

protobuf.build = "minimal"; // Serialization

protobuf.Writer = __webpack_require__(/*! ./writer */ 54150);
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ 20076);
protobuf.Reader = __webpack_require__(/*! ./reader */ 39971);
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ 6910); // Utility

protobuf.util = __webpack_require__(/*! ./util/minimal */ 62322);
protobuf.rpc = __webpack_require__(/*! ./rpc */ 64433);
protobuf.roots = __webpack_require__(/*! ./roots */ 65362);
protobuf.configure = configure;
/* istanbul ignore next */

/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */

function configure() {
  protobuf.util._configure();

  protobuf.Writer._configure(protobuf.BufferWriter);

  protobuf.Reader._configure(protobuf.BufferReader);
} // Set up buffer utility according to the environment


configure();

/***/ }),

/***/ 39971:
/*!****************!*\
  !*** ./reader ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Reader;

var util = __webpack_require__(/*! ./util/minimal */ 62322);

var BufferReader; // cyclic

var LongBits = util.LongBits,
    utf8 = util.utf8;
/* istanbul ignore next */

function indexOutOfRange(reader, writeLength) {
  return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}
/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */


function Reader(buffer) {
  /**
   * Read buffer.
   * @type {Uint8Array}
   */
  this.buf = buffer;
  /**
   * Read buffer position.
   * @type {number}
   */

  this.pos = 0;
  /**
   * Read buffer length.
   * @type {number}
   */

  this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
  if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
}
/* istanbul ignore next */
: function create_array(buffer) {
  if (Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
};

var create = function create() {
  return util.Buffer ? function create_buffer_setup(buffer) {
    return (Reader.create = function create_buffer(buffer) {
      return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
      /* istanbul ignore next */
      : create_array(buffer);
    })(buffer);
  }
  /* istanbul ignore next */
  : create_array;
};
/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */


Reader.create = create();
Reader.prototype._slice = util.Array.prototype.subarray ||
/* istanbul ignore next */
util.Array.prototype.slice;
/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */

Reader.prototype.uint32 = function read_uint32_setup() {
  var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)

  return function read_uint32() {
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    /* istanbul ignore if */

    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }

    return value;
  };
}();
/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.sint32 = function read_sint32() {
  var value = this.uint32();
  return value >>> 1 ^ -(value & 1) | 0;
};
/* eslint-disable no-invalid-this */


function readLongVarint() {
  // tends to deopt with local vars for octet etc.
  var bits = new LongBits(0, 0);
  var i = 0;

  if (this.len - this.pos > 4) {
    // fast route (lo)
    for (; i < 4; ++i) {
      // 1st..4th
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 5th


    bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
    if (this.buf[this.pos++] < 128) return bits;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 4th


    bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
    return bits;
  }

  if (this.len - this.pos > 4) {
    // fast route (hi)
    for (; i < 5; ++i) {
      // 6th..10th
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  } else {
    for (; i < 5; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  }
  /* istanbul ignore next */


  throw Error("invalid varint encoding");
}
/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */


Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};

function readFixed32_end(buf, end) {
  // note that this uses `end`, not `pos`
  return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}
/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.fixed32 = function read_fixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4);
};
/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.sfixed32 = function read_sfixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
/* eslint-disable no-invalid-this */


function
  /* this: Reader */
readFixed64() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.float = function read_float() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return value;
};
/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.double = function read_double() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return value;
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */


Reader.prototype.bytes = function read_bytes() {
  var length = this.uint32(),
      start = this.pos,
      end = this.pos + length;
  /* istanbul ignore if */

  if (end > this.len) throw indexOutOfRange(this, length);
  this.pos += length;
  if (Array.isArray(this.buf)) // plain array
    return this.buf.slice(start, end);
  return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
  ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
};
/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */


Reader.prototype.string = function read_string() {
  var bytes = this.bytes();
  return utf8.read(bytes, 0, bytes.length);
};
/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */


Reader.prototype.skip = function skip(length) {
  if (typeof length === "number") {
    /* istanbul ignore if */
    if (this.pos + length > this.len) throw indexOutOfRange(this, length);
    this.pos += length;
  } else {
    do {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (this.buf[this.pos++] & 128);
  }

  return this;
};
/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */


Reader.prototype.skipType = function (wireType) {
  switch (wireType) {
    case 0:
      this.skip();
      break;

    case 1:
      this.skip(8);
      break;

    case 2:
      this.skip(this.uint32());
      break;

    case 3:
      while ((wireType = this.uint32() & 7) !== 4) {
        this.skipType(wireType);
      }

      break;

    case 5:
      this.skip(4);
      break;

    /* istanbul ignore next */

    default:
      throw Error("invalid wire type " + wireType + " at offset " + this.pos);
  }

  return this;
};

Reader._configure = function (BufferReader_) {
  BufferReader = BufferReader_;
  Reader.create = create();

  BufferReader._configure();

  var fn = util.Long ? "toLong" :
  /* istanbul ignore next */
  "toNumber";
  util.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[fn](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[fn](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[fn](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[fn](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[fn](false);
    }
  });
};

/***/ }),

/***/ 6910:
/*!***********************!*\
  !*** ./reader_buffer ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = BufferReader; // extends Reader

var Reader = __webpack_require__(/*! ./reader */ 39971);

(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ 62322);
/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */


function BufferReader(buffer) {
  Reader.call(this, buffer);
  /**
   * Read buffer.
   * @name BufferReader#buf
   * @type {Buffer}
   */
}

BufferReader._configure = function () {
  /* istanbul ignore else */
  if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
};
/**
 * @override
 */


BufferReader.prototype.string = function read_string_buffer() {
  var len = this.uint32(); // modifies pos

  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


BufferReader._configure();

/***/ }),

/***/ 65362:
/*!***************!*\
  !*** ./roots ***!
  \***************/
/***/ ((module) => {

"use strict";


module.exports = {};
/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */

/***/ }),

/***/ 64433:
/*!*************!*\
  !*** ./rpc ***!
  \*************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Streaming RPC helpers.
 * @namespace
 */

var rpc = exports;
/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ 2120);

/***/ }),

/***/ 2120:
/*!*********************!*\
  !*** ./rpc/service ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ 62322); // Extends EventEmitter


(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */

function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
  util.EventEmitter.call(this);
  /**
   * RPC implementation. Becomes `null` once the service is ended.
   * @type {RPCImpl|null}
   */

  this.rpcImpl = rpcImpl;
  /**
   * Whether requests are length-delimited.
   * @type {boolean}
   */

  this.requestDelimited = Boolean(requestDelimited);
  /**
   * Whether responses are length-delimited.
   * @type {boolean}
   */

  this.responseDelimited = Boolean(responseDelimited);
}
/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */


Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
  if (!request) throw TypeError("request must be specified");
  var self = this;
  if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

  if (!self.rpcImpl) {
    setTimeout(function () {
      callback(Error("already ended"));
    }, 0);
    return undefined;
  }

  try {
    return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
      if (err) {
        self.emit("error", err, method);
        return callback(err);
      }

      if (response === null) {
        self.end(
        /* endedByRPC */
        true);
        return undefined;
      }

      if (!(response instanceof responseCtor)) {
        try {
          response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        } catch (err) {
          self.emit("error", err, method);
          return callback(err);
        }
      }

      self.emit("data", response, method);
      return callback(null, response);
    });
  } catch (err) {
    self.emit("error", err, method);
    setTimeout(function () {
      callback(err);
    }, 0);
    return undefined;
  }
};
/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */


Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC) // signal end to rpcImpl
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit("end").off();
  }

  return this;
};

/***/ }),

/***/ 69323:
/*!****************************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/node_modules/protobufjs/src/util/longbits.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ 62322);
/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */


function LongBits(lo, hi) {
  // note that the casts below are theoretically unnecessary as of today, but older statically
  // generated converter code might still call the ctor with signed 32bits. kept for compat.

  /**
   * Low bits.
   * @type {number}
   */
  this.lo = lo >>> 0;
  /**
   * High bits.
   * @type {number}
   */

  this.hi = hi >>> 0;
}
/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */


var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function () {
  return 0;
};

zero.zzEncode = zero.zzDecode = function () {
  return this;
};

zero.length = function () {
  return 1;
};
/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */


var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */

LongBits.fromNumber = function fromNumber(value) {
  if (value === 0) return zero;
  var sign = value < 0;
  if (sign) value = -value;
  var lo = value >>> 0,
      hi = (value - lo) / 4294967296 >>> 0;

  if (sign) {
    hi = ~hi >>> 0;
    lo = ~lo >>> 0;

    if (++lo > 4294967295) {
      lo = 0;
      if (++hi > 4294967295) hi = 0;
    }
  }

  return new LongBits(lo, hi);
};
/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */


LongBits.from = function from(value) {
  if (typeof value === "number") return LongBits.fromNumber(value);

  if (util.isString(value)) {
    /* istanbul ignore else */
    if (util.Long) value = util.Long.fromString(value);else return LongBits.fromNumber(parseInt(value, 10));
  }

  return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};
/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */


LongBits.prototype.toNumber = function toNumber(unsigned) {
  if (!unsigned && this.hi >>> 31) {
    var lo = ~this.lo + 1 >>> 0,
        hi = ~this.hi >>> 0;
    if (!lo) hi = hi + 1 >>> 0;
    return -(lo + hi * 4294967296);
  }

  return this.lo + this.hi * 4294967296;
};
/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */


LongBits.prototype.toLong = function toLong(unsigned) {
  return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
  /* istanbul ignore next */
  : {
    low: this.lo | 0,
    high: this.hi | 0,
    unsigned: Boolean(unsigned)
  };
};

var charCodeAt = String.prototype.charCodeAt;
/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */

LongBits.fromHash = function fromHash(hash) {
  if (hash === zeroHash) return zero;
  return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};
/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */


LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzEncode = function zzEncode() {
  var mask = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  this.lo = (this.lo << 1 ^ mask) >>> 0;
  return this;
};
/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzDecode = function zzDecode() {
  var mask = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  this.hi = (this.hi >>> 1 ^ mask) >>> 0;
  return this;
};
/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */


LongBits.prototype.length = function length() {
  var part0 = this.lo,
      part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
      part2 = this.hi >>> 24;
  return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};

/***/ }),

/***/ 62322:
/*!**********************!*\
  !*** ./util/minimal ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var util = exports; // used to return a Promise where callback is omitted

util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ 18791); // converts to / from base64 encoded strings

util.base64 = __webpack_require__(/*! @protobufjs/base64 */ 5985); // base class of rpc.Service

util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ 68074); // float handling accross browsers

util.float = __webpack_require__(/*! @protobufjs/float */ 48170); // requires modules optionally and hides the call from bundlers

util.inquire = __webpack_require__(/*! @protobufjs/inquire */ 91248); // converts to / from utf8 encoded strings

util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ 88178); // provides a node-like buffer pool in the browser

util.pool = __webpack_require__(/*! @protobufjs/pool */ 15759); // utility to work with the low and high bits of a 64 bit value

util.LongBits = __webpack_require__(/*! ./longbits */ 69323);
/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */

util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */

util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */

util.emptyArray = Object.freeze ? Object.freeze([]) :
/* istanbul ignore next */
[]; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */

util.emptyObject = Object.freeze ? Object.freeze({}) :
/* istanbul ignore next */
{}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */

util.isInteger = Number.isInteger ||
/* istanbul ignore next */
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */


util.isString = function isString(value) {
  return typeof value === "string" || value instanceof String;
};
/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */


util.isObject = function isObject(value) {
  return value && typeof value === "object";
};
/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */


util.isset =
/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
  var value = obj[prop];
  if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
    return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
  return false;
};
/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */


util.Buffer = function () {
  try {
    var Buffer = util.inquire("buffer").Buffer; // refuse to use non-node buffers if not explicitly assigned (perf reasons):

    return Buffer.prototype.utf8Write ? Buffer :
    /* istanbul ignore next */
    null;
  } catch (e) {
    /* istanbul ignore next */
    return null;
  }
}(); // Internal alias of or polyfull for Buffer.from.


util._Buffer_from = null; // Internal alias of or polyfill for Buffer.allocUnsafe.

util._Buffer_allocUnsafe = null;
/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */

util.newBuffer = function newBuffer(sizeOrArray) {
  /* istanbul ignore next */
  return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
};
/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */


util.Array = typeof Uint8Array !== "undefined" ? Uint8Array
/* istanbul ignore next */
: Array;
/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */

util.Long =
/* istanbul ignore next */
util.global.dcodeIO &&
/* istanbul ignore next */
util.global.dcodeIO.Long ||
/* istanbul ignore next */
util.global.Long || util.inquire("long");
/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */

util.key2Re = /^true|false|0|1$/;
/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */

util.longToHash = function longToHash(value) {
  return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
};
/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */


util.longFromHash = function longFromHash(hash, unsigned) {
  var bits = util.LongBits.fromHash(hash);
  if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
  return bits.toNumber(Boolean(unsigned));
};
/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */


function merge(dst, src, ifNotSet) {
  // used by converters
  for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];

  return dst;
}

util.merge = merge;
/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */

util.lcFirst = function lcFirst(str) {
  return str.charAt(0).toLowerCase() + str.substring(1);
};
/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */


function newError(name) {
  function CustomError(message, properties) {
    if (!(this instanceof CustomError)) return new CustomError(message, properties); // Error.call(this, message);
    // ^ just returns a new error instance because the ctor can be called as a function

    Object.defineProperty(this, "message", {
      get: function () {
        return message;
      }
    });
    /* istanbul ignore next */

    if (Error.captureStackTrace) // node
      Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
      value: new Error().stack || ""
    });
    if (properties) merge(this, properties);
  }

  (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
  Object.defineProperty(CustomError.prototype, "name", {
    get: function () {
      return name;
    }
  });

  CustomError.prototype.toString = function toString() {
    return this.name + ": " + this.message;
  };

  return CustomError;
}

util.newError = newError;
/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */

util.ProtocolError = newError("ProtocolError");
/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */

util.oneOfGetter = function getOneOf(fieldNames) {
  var fieldMap = {};

  for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
  /**
   * @returns {string|undefined} Set field name, if any
   * @this Object
   * @ignore
   */


  return function () {
    // eslint-disable-line consistent-return
    for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
  };
};
/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */


util.oneOfSetter = function setOneOf(fieldNames) {
  /**
   * @param {string} name Field name
   * @returns {undefined}
   * @this Object
   * @ignore
   */
  return function (name) {
    for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[fieldNames[i]];
  };
};
/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */


util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
}; // Sets up buffer utility according to the environment (called in index-minimal)

util._configure = function () {
  var Buffer = util.Buffer;
  /* istanbul ignore if */

  if (!Buffer) {
    util._Buffer_from = util._Buffer_allocUnsafe = null;
    return;
  } // because node 4.x buffers are incompatible & immutable
  // see: https://github.com/dcodeIO/protobuf.js/pull/665


  util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
  /* istanbul ignore next */
  function Buffer_from(value, encoding) {
    return new Buffer(value, encoding);
  };

  util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
  /* istanbul ignore next */
  function Buffer_allocUnsafe(size) {
    return new Buffer(size);
  };
};

/***/ }),

/***/ 54150:
/*!****************!*\
  !*** ./writer ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Writer;

var util = __webpack_require__(/*! ./util/minimal */ 62322);

var BufferWriter; // cyclic

var LongBits = util.LongBits,
    base64 = util.base64,
    utf8 = util.utf8;
/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */

function Op(fn, len, val) {
  /**
   * Function to call.
   * @type {function(Uint8Array, number, *)}
   */
  this.fn = fn;
  /**
   * Value byte length.
   * @type {number}
   */

  this.len = len;
  /**
   * Next operation.
   * @type {Writer.Op|undefined}
   */

  this.next = undefined;
  /**
   * Value to write.
   * @type {*}
   */

  this.val = val; // type varies
}
/* istanbul ignore next */


function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */


function State(writer) {
  /**
   * Current head.
   * @type {Writer.Op}
   */
  this.head = writer.head;
  /**
   * Current tail.
   * @type {Writer.Op}
   */

  this.tail = writer.tail;
  /**
   * Current buffer length.
   * @type {number}
   */

  this.len = writer.len;
  /**
   * Next state.
   * @type {State|null}
   */

  this.next = writer.states;
}
/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */


function Writer() {
  /**
   * Current length.
   * @type {number}
   */
  this.len = 0;
  /**
   * Operations head.
   * @type {Object}
   */

  this.head = new Op(noop, 0, 0);
  /**
   * Operations tail
   * @type {Object}
   */

  this.tail = this.head;
  /**
   * Linked forked states.
   * @type {Object|null}
   */

  this.states = null; // When a value is written, the writer calculates its byte length and puts it into a linked
  // list of operations to perform when finish() is called. This both allows us to allocate
  // buffers of the exact required size and reduces the amount of work we have to do compared
  // to first calculating over objects and then encoding over objects. In our case, the encoding
  // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
  return util.Buffer ? function create_buffer_setup() {
    return (Writer.create = function create_buffer() {
      return new BufferWriter();
    })();
  }
  /* istanbul ignore next */
  : function create_array() {
    return new Writer();
  };
};
/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */


Writer.create = create();
/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

Writer.alloc = function alloc(size) {
  return new util.Array(size);
}; // Use Uint8Array buffer pool in the browser, just like node does with buffers

/* istanbul ignore else */


if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */

Writer.prototype._push = function push(fn, len, val) {
  this.tail = this.tail.next = new Op(fn, len, val);
  this.len += len;
  return this;
};

function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }

  buf[pos] = val;
}
/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */


function VarintOp(len, val) {
  this.len = len;
  this.next = undefined;
  this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.uint32 = function write_uint32(value) {
  // here, the call to this.push has been inlined and a varint specific Op subclass is used.
  // uint32 is by far the most frequently used operation and benefits significantly from this.
  this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
  return this;
};
/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.int32 = function write_int32(value) {
  return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
  : this.uint32(value);
};
/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sint32 = function write_sint32(value) {
  return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
  while (val.hi) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }

  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }

  buf[pos++] = val.lo;
}
/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.uint64 = function write_uint64(value) {
  var bits = LongBits.from(value);
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.int64 = Writer.prototype.uint64;
/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.sint64 = function write_sint64(value) {
  var bits = LongBits.from(value).zzEncode();
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.bool = function write_bool(value) {
  return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.fixed32 = function write_fixed32(value) {
  return this._push(writeFixed32, 4, value >>> 0);
};
/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sfixed32 = Writer.prototype.fixed32;
/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.fixed64 = function write_fixed64(value) {
  var bits = LongBits.from(value);
  return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.sfixed64 = Writer.prototype.fixed64;
/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.float = function write_float(value) {
  return this._push(util.float.writeFloatLE, 4, value);
};
/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.double = function write_double(value) {
  return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
  buf.set(val, pos); // also works for plain array values
}
/* istanbul ignore next */
: function writeBytes_for(val, buf, pos) {
  for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
};
/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */

Writer.prototype.bytes = function write_bytes(value) {
  var len = value.length >>> 0;
  if (!len) return this._push(writeByte, 1, 0);

  if (util.isString(value)) {
    var buf = Writer.alloc(len = base64.length(value));
    base64.decode(value, buf, 0);
    value = buf;
  }

  return this.uint32(len)._push(writeBytes, len, value);
};
/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.string = function write_string(value) {
  var len = utf8.length(value);
  return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
};
/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */


Writer.prototype.fork = function fork() {
  this.states = new State(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */


Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }

  return this;
};
/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */


Writer.prototype.ldelim = function ldelim() {
  var head = this.head,
      tail = this.tail,
      len = this.len;
  this.reset().uint32(len);

  if (len) {
    this.tail.next = head.next; // skip noop

    this.tail = tail;
    this.len += len;
  }

  return this;
};
/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */


Writer.prototype.finish = function finish() {
  var head = this.head.next,
      // skip noop
  buf = this.constructor.alloc(this.len),
      pos = 0;

  while (head) {
    head.fn(head.val, buf, pos);
    pos += head.len;
    head = head.next;
  } // this.head = this.tail = null;


  return buf;
};

Writer._configure = function (BufferWriter_) {
  BufferWriter = BufferWriter_;
  Writer.create = create();

  BufferWriter._configure();
};

/***/ }),

/***/ 20076:
/*!***********************!*\
  !*** ./writer_buffer ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = BufferWriter; // extends Writer

var Writer = __webpack_require__(/*! ./writer */ 54150);

(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ 62322);
/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */


function BufferWriter() {
  Writer.call(this);
}

BufferWriter._configure = function () {
  /**
   * Allocates a buffer of the specified size.
   * @function
   * @param {number} size Buffer size
   * @returns {Buffer} Buffer
   */
  BufferWriter.alloc = util._Buffer_allocUnsafe;
  BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
    buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
    // also works for plain array values
  }
  /* istanbul ignore next */
  : function writeBytesBuffer_copy(val, buf, pos) {
    if (val.copy) // Buffer values
      val.copy(buf, pos, 0, val.length);else for (var i = 0; i < val.length;) // plain array values
    buf[pos++] = val[i++];
  };
};
/**
 * @override
 */


BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
  if (util.isString(value)) value = util._Buffer_from(value, "base64");
  var len = value.length >>> 0;
  this.uint32(len);
  if (len) this._push(BufferWriter.writeBytesBuffer, len, value);
  return this;
};

function writeStringBuffer(val, buf, pos) {
  if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
    util.utf8.write(val, buf, pos);else if (buf.utf8Write) buf.utf8Write(val, pos);else buf.write(val, pos);
}
/**
 * @override
 */


BufferWriter.prototype.string = function write_string_buffer(value) {
  var len = util.Buffer.byteLength(value);
  this.uint32(len);
  if (len) this._push(writeStringBuffer, len, value);
  return this;
};
/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


BufferWriter._configure();

/***/ }),

/***/ 54264:
/*!**************************************!*\
  !*** ./node_modules/it-all/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Collects all values from an (async) iterable into an array and returns it.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const all = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (source) {
    const arr = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;
        arr.push(entry);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return arr;
  });

  return function all(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = all;

/***/ }),

/***/ 36584:
/*!****************************************!*\
  !*** ./node_modules/it-batch/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Takes an (async) iterable that emits things and returns an async iterable that
 * emits those things in fixed-sized batches.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 * @param {number} [size=1]
 * @returns {AsyncIterable<T[]>}
 */

var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

function batch(_x) {
  return _batch.apply(this, arguments);
}

function _batch() {
  _batch = _wrapAsyncGenerator(function* (source, size = 1) {
    /** @type {T[]} */
    let things = [];

    if (size < 1) {
      size = 1;
    }

    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const thing = _step.value;
        things.push(thing);

        while (things.length >= size) {
          yield things.slice(0, size);
          things = things.slice(size);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    while (things.length) {
      yield things.slice(0, size);
      things = things.slice(size);
    }
  });
  return _batch.apply(this, arguments);
}

module.exports = batch;

/***/ }),

/***/ 97591:
/*!****************************************!*\
  !*** ./node_modules/it-drain/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Drains an (async) iterable discarding its' content and does not return
 * anything.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 * @returns {Promise<void>}
 */

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const drain = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (source) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const _ = _step.value;
      } // eslint-disable-line no-unused-vars,no-empty

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function drain(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = drain;

/***/ }),

/***/ 84223:
/*!*****************************************!*\
  !*** ./node_modules/it-filter/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Filters the passed (async) iterable by using the filter function
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 * @param {function(T):boolean|Promise<boolean>} fn
 */

var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const filter = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator(function* (source, fn) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;

        if (yield _awaitAsyncGenerator(fn(entry))) {
          yield entry;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function filter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = filter;

/***/ }),

/***/ 75761:
/*!***************************************!*\
  !*** ./node_modules/it-last/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Returns the last item of an (async) iterable, unless empty, in which case
 * return `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const last = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (source) {
    let res;
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;
        res = entry;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return res;
  });

  return function last(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = last;

/***/ }),

/***/ 51275:
/*!**************************************!*\
  !*** ./node_modules/it-map/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Takes an (async) iterable and returns one with each item mapped by the passed
 * function.
 *
 * @template I,O
 * @param {AsyncIterable<I>|Iterable<I>} source
 * @param {function(I):O|Promise<O>} func
 * @returns {AsyncIterable<O>}
 */

var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const map = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator(function* (source, func) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const val = _step.value;
        yield func(val);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function map(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = map;

/***/ }),

/***/ 60885:
/*!*************************************************!*\
  !*** ./node_modules/it-parallel-batch/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const batch = __webpack_require__(/*! it-batch */ 36584);
/**
 * @template T
 * @typedef {{ok:true, value:T}} Success
 */

/**
 * @typedef {{ok:false, err:Error}} Failure
 */

/**
 * Takes an (async) iterator that emits promise-returning functions,
 * invokes them in parallel and emits the results as they become available but
 * in the same order as the input
 *
 * @template T
 * @param {AsyncIterable<() => Promise<T>>|Iterable<() => Promise<T>>} source
 * @param {number} [size=1]
 * @returns {AsyncIterable<T>}
 */


function parallelBatch(_x) {
  return _parallelBatch.apply(this, arguments);
}

function _parallelBatch() {
  _parallelBatch = _wrapAsyncGenerator(function* (source, size = 1) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(batch(source, size)), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const tasks = _step.value;

        /** @type {Promise<Success<T>|Failure>[]} */
        const things = tasks.map(
        /**
         * @param {() => Promise<T>} p
         */
        p => {
          return p().then(value => ({
            ok: true,
            value
          }), err => ({
            ok: false,
            err
          }));
        });

        for (let i = 0; i < things.length; i++) {
          const result = yield _awaitAsyncGenerator(things[i]);

          if (result.ok) {
            yield result.value;
          } else {
            throw result.err;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _parallelBatch.apply(this, arguments);
}

module.exports = parallelBatch;

/***/ }),

/***/ 62129:
/*!*******************************************!*\
  !*** ./node_modules/it-peekable/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";

/**
 * @template T
 * @typedef {Object} Peek
 * @property {() => IteratorResult<T, void>} peek
 */

/**
 * @template T
 * @typedef {Object} AsyncPeek
 * @property {() => Promise<IteratorResult<T, void>>} peek
 */

/**
 * @template T
 * @typedef {Object} Push
 * @property {(value:T) => void} push
 */

/**
 * @template T
 * @typedef {Iterable<T> & Peek<T> & Push<T> & Iterator<T>} Peekable<T>
 */

/**
 * @template T
 * @typedef {AsyncIterable<T> & AsyncPeek<T> & Push<T> & AsyncIterator<T>} AsyncPeekable<T>
 */

/**
 * @template {Iterable<any> | AsyncIterable<any>} I
 * @param {I} iterable
 * @returns {I extends Iterable<infer T>
 *  ? Peekable<T>
 *  : I extends AsyncIterable<infer T>
 *  ? AsyncPeekable<T>
 *  : never
 * }
 */

function peekableIterator(iterable) {
  // @ts-ignore
  const [iterator, symbol] = iterable[Symbol.asyncIterator] // @ts-ignore
  ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator] // @ts-ignore
  : [iterable[Symbol.iterator](), Symbol.iterator];
  /** @type {any[]} */

  const queue = []; // @ts-ignore

  return {
    peek: () => {
      return iterator.next();
    },
    push: value => {
      queue.push(value);
    },
    next: () => {
      if (queue.length) {
        return {
          done: false,
          value: queue.shift()
        };
      }

      return iterator.next();
    },

    [symbol]() {
      return this;
    }

  };
}

module.exports = peekableIterator;

/***/ }),

/***/ 83943:
/*!***************************************!*\
  !*** ./node_modules/it-pipe/index.js ***!
  \***************************************/
/***/ ((module) => {

const rawPipe = (...fns) => {
  let res;

  while (fns.length) {
    res = fns.shift()(res);
  }

  return res;
};

const isIterable = obj => obj && (typeof obj[Symbol.asyncIterator] === 'function' || typeof obj[Symbol.iterator] === 'function' || typeof obj.next === 'function' // Probably, right?
);

const isDuplex = obj => obj && typeof obj.sink === 'function' && isIterable(obj.source);

const duplexPipelineFn = duplex => source => {
  duplex.sink(source); // TODO: error on sink side is unhandled rejection - this is the same as pull streams

  return duplex.source;
};

const pipe = (...fns) => {
  // Duplex at start: wrap in function and return duplex source
  if (isDuplex(fns[0])) {
    const duplex = fns[0];

    fns[0] = () => duplex.source; // Iterable at start: wrap in function

  } else if (isIterable(fns[0])) {
    const source = fns[0];

    fns[0] = () => source;
  }

  if (fns.length > 1) {
    // Duplex at end: use duplex sink
    if (isDuplex(fns[fns.length - 1])) {
      fns[fns.length - 1] = fns[fns.length - 1].sink;
    }
  }

  if (fns.length > 2) {
    // Duplex in the middle, consume source with duplex sink and return duplex source
    for (let i = 1; i < fns.length - 1; i++) {
      if (isDuplex(fns[i])) {
        fns[i] = duplexPipelineFn(fns[i]);
      }
    }
  }

  return rawPipe(...fns);
};

module.exports = pipe;
module.exports.pipe = pipe;
module.exports.rawPipe = rawPipe;
module.exports.isIterable = isIterable;
module.exports.isDuplex = isDuplex;

/***/ }),

/***/ 95709:
/*!***************************************!*\
  !*** ./node_modules/it-take/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Stop iteration after n items have been received.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 * @param {number} limit
 * @returns {AsyncIterable<T>}
 */

var _awaitAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js */ 14997)["default"]);

var _wrapAsyncGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js */ 73671)["default"]);

var _asyncIterator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncIterator.js */ 40226)["default"]);

const take = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator(function* (source, limit) {
    let items = 0;

    if (limit < 1) {
      return;
    }

    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(source), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;
        yield entry;
        items++;

        if (items === limit) {
          return;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function take(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = take;

/***/ }),

/***/ 30954:
/*!*********************************************!*\
  !*** ./node_modules/merge-options/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


const isOptionObject = __webpack_require__(/*! is-plain-obj */ 76489);

const {
  hasOwnProperty
} = Object.prototype;
const {
  propertyIsEnumerable
} = Object;

const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
  value,
  writable: true,
  enumerable: true,
  configurable: true
});

const globalThis = this;
const defaultMergeOptions = {
  concatArrays: false,
  ignoreUndefined: false
};

const getEnumerableOwnPropertyKeys = value => {
  const keys = [];

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      keys.push(key);
    }
  }
  /* istanbul ignore else  */


  if (Object.getOwnPropertySymbols) {
    const symbols = Object.getOwnPropertySymbols(value);

    for (const symbol of symbols) {
      if (propertyIsEnumerable.call(value, symbol)) {
        keys.push(symbol);
      }
    }
  }

  return keys;
};

function clone(value) {
  if (Array.isArray(value)) {
    return cloneArray(value);
  }

  if (isOptionObject(value)) {
    return cloneOptionObject(value);
  }

  return value;
}

function cloneArray(array) {
  const result = array.slice(0, 0);
  getEnumerableOwnPropertyKeys(array).forEach(key => {
    defineProperty(result, key, clone(array[key]));
  });
  return result;
}

function cloneOptionObject(object) {
  const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};
  getEnumerableOwnPropertyKeys(object).forEach(key => {
    defineProperty(result, key, clone(object[key]));
  });
  return result;
}
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */


const mergeKeys = (merged, source, keys, config) => {
  keys.forEach(key => {
    if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
      return;
    } // Do not recurse into prototype chain of merged


    if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
      defineProperty(merged, key, merge(merged[key], source[key], config));
    } else {
      defineProperty(merged, key, clone(source[key]));
    }
  });
  return merged;
};
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */


const concatArrays = (merged, source, config) => {
  let result = merged.slice(0, 0);
  let resultIndex = 0;
  [merged, source].forEach(array => {
    const indices = []; // `result.concat(array)` with cloning

    for (let k = 0; k < array.length; k++) {
      if (!hasOwnProperty.call(array, k)) {
        continue;
      }

      indices.push(String(k));

      if (array === merged) {
        // Already cloned
        defineProperty(result, resultIndex++, array[k]);
      } else {
        defineProperty(result, resultIndex++, clone(array[k]));
      }
    } // Merge non-index keys


    result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
  });
  return result;
};
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */


function merge(merged, source, config) {
  if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
    return concatArrays(merged, source, config);
  }

  if (!isOptionObject(source) || !isOptionObject(merged)) {
    return clone(source);
  }

  return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}

module.exports = function (...options) {
  const config = merge(clone(defaultMergeOptions), this !== globalThis && this || {}, defaultMergeOptions);
  let merged = {
    _: {}
  };

  for (const option of options) {
    if (option === undefined) {
      continue;
    }

    if (!isOptionObject(option)) {
      throw new TypeError('`' + option + '` is not an Option Object');
    }

    merged = merge(merged, {
      _: option
    }, config);
  }

  return merged._;
};

/***/ }),

/***/ 76489:
/*!***********************************************************************!*\
  !*** ./node_modules/merge-options/node_modules/is-plain-obj/index.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = value => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
};

/***/ }),

/***/ 48019:
/*!*******************************************************!*\
  !*** ./node_modules/murmurhash3js-revisited/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/murmurHash3js */ 42702);

/***/ }),

/***/ 42702:
/*!*******************************************************************!*\
  !*** ./node_modules/murmurhash3js-revisited/lib/murmurHash3js.js ***!
  \*******************************************************************/
/***/ (function(module, exports) {

/* jshint -W086: true */
// +----------------------------------------------------------------------+
// | murmurHash3js.js v3.0.1 // https://github.com/pid/murmurHash3js
// | A javascript implementation of MurmurHash3's x86 hashing algorithms. |
// |----------------------------------------------------------------------|
// | Copyright (c) 2012-2015 Karan Lyons                                       |
// | https://github.com/karanlyons/murmurHash3.js/blob/c1778f75792abef7bdd74bc85d2d4e1a3d25cfe9/murmurHash3.js |
// | Freely distributable under the MIT license.                          |
// +----------------------------------------------------------------------+
;

(function (root, undefined) {
  'use strict'; // Create a local object that'll be exported or referenced globally.

  var library = {
    'version': '3.0.0',
    'x86': {},
    'x64': {},
    'inputValidation': true
  }; // PRIVATE FUNCTIONS
  // -----------------

  function _validBytes(bytes) {
    // check the input is an array or a typed array
    if (!Array.isArray(bytes) && !ArrayBuffer.isView(bytes)) {
      return false;
    } // check all bytes are actually bytes


    for (var i = 0; i < bytes.length; i++) {
      if (!Number.isInteger(bytes[i]) || bytes[i] < 0 || bytes[i] > 255) {
        return false;
      }
    }

    return true;
  }

  function _x86Multiply(m, n) {
    //
    // Given two 32bit ints, returns the two multiplied together as a
    // 32bit int.
    //
    return (m & 0xffff) * n + (((m >>> 16) * n & 0xffff) << 16);
  }

  function _x86Rotl(m, n) {
    //
    // Given a 32bit int and an int representing a number of bit positions,
    // returns the 32bit int rotated left by that number of positions.
    //
    return m << n | m >>> 32 - n;
  }

  function _x86Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x86 mix of that block.
    //
    h ^= h >>> 16;
    h = _x86Multiply(h, 0x85ebca6b);
    h ^= h >>> 13;
    h = _x86Multiply(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return h;
  }

  function _x64Add(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  }

  function _x64Multiply(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  }

  function _x64Rotl(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    n %= 64;

    if (n === 32) {
      return [m[1], m[0]];
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];
    } else {
      n -= 32;
      return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];
    }
  }

  function _x64LeftShift(m, n) {
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    n %= 64;

    if (n === 0) {
      return m;
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n];
    } else {
      return [m[1] << n - 32, 0];
    }
  }

  function _x64Xor(m, n) {
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    return [m[0] ^ n[0], m[1] ^ n[1]];
  }

  function _x64Fmix(h) {
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    h = _x64Xor(h, [0, h[0] >>> 1]);
    h = _x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = _x64Xor(h, [0, h[0] >>> 1]);
    h = _x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = _x64Xor(h, [0, h[0] >>> 1]);
    return h;
  } // PUBLIC FUNCTIONS
  // ----------------


  library.x86.hash32 = function (bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 32 bit hash
    // using the x86 flavor of MurmurHash3, as an unsigned int.
    //
    if (library.inputValidation && !_validBytes(bytes)) {
      return undefined;
    }

    seed = seed || 0;
    var remainder = bytes.length % 4;
    var blocks = bytes.length - remainder;
    var h1 = seed;
    var k1 = 0;
    var c1 = 0xcc9e2d51;
    var c2 = 0x1b873593;

    for (var i = 0; i < blocks; i = i + 4) {
      k1 = bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24;
      k1 = _x86Multiply(k1, c1);
      k1 = _x86Rotl(k1, 15);
      k1 = _x86Multiply(k1, c2);
      h1 ^= k1;
      h1 = _x86Rotl(h1, 13);
      h1 = _x86Multiply(h1, 5) + 0xe6546b64;
    }

    k1 = 0;

    switch (remainder) {
      case 3:
        k1 ^= bytes[i + 2] << 16;

      case 2:
        k1 ^= bytes[i + 1] << 8;

      case 1:
        k1 ^= bytes[i];
        k1 = _x86Multiply(k1, c1);
        k1 = _x86Rotl(k1, 15);
        k1 = _x86Multiply(k1, c2);
        h1 ^= k1;
    }

    h1 ^= bytes.length;
    h1 = _x86Fmix(h1);
    return h1 >>> 0;
  };

  library.x86.hash128 = function (bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x86 flavor of MurmurHash3, as an unsigned hex.
    //
    if (library.inputValidation && !_validBytes(bytes)) {
      return undefined;
    }

    seed = seed || 0;
    var remainder = bytes.length % 16;
    var blocks = bytes.length - remainder;
    var h1 = seed;
    var h2 = seed;
    var h3 = seed;
    var h4 = seed;
    var k1 = 0;
    var k2 = 0;
    var k3 = 0;
    var k4 = 0;
    var c1 = 0x239b961b;
    var c2 = 0xab0e9789;
    var c3 = 0x38b34ae5;
    var c4 = 0xa1e38b93;

    for (var i = 0; i < blocks; i = i + 16) {
      k1 = bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24;
      k2 = bytes[i + 4] | bytes[i + 5] << 8 | bytes[i + 6] << 16 | bytes[i + 7] << 24;
      k3 = bytes[i + 8] | bytes[i + 9] << 8 | bytes[i + 10] << 16 | bytes[i + 11] << 24;
      k4 = bytes[i + 12] | bytes[i + 13] << 8 | bytes[i + 14] << 16 | bytes[i + 15] << 24;
      k1 = _x86Multiply(k1, c1);
      k1 = _x86Rotl(k1, 15);
      k1 = _x86Multiply(k1, c2);
      h1 ^= k1;
      h1 = _x86Rotl(h1, 19);
      h1 += h2;
      h1 = _x86Multiply(h1, 5) + 0x561ccd1b;
      k2 = _x86Multiply(k2, c2);
      k2 = _x86Rotl(k2, 16);
      k2 = _x86Multiply(k2, c3);
      h2 ^= k2;
      h2 = _x86Rotl(h2, 17);
      h2 += h3;
      h2 = _x86Multiply(h2, 5) + 0x0bcaa747;
      k3 = _x86Multiply(k3, c3);
      k3 = _x86Rotl(k3, 17);
      k3 = _x86Multiply(k3, c4);
      h3 ^= k3;
      h3 = _x86Rotl(h3, 15);
      h3 += h4;
      h3 = _x86Multiply(h3, 5) + 0x96cd1c35;
      k4 = _x86Multiply(k4, c4);
      k4 = _x86Rotl(k4, 18);
      k4 = _x86Multiply(k4, c1);
      h4 ^= k4;
      h4 = _x86Rotl(h4, 13);
      h4 += h1;
      h4 = _x86Multiply(h4, 5) + 0x32ac3b17;
    }

    k1 = 0;
    k2 = 0;
    k3 = 0;
    k4 = 0;

    switch (remainder) {
      case 15:
        k4 ^= bytes[i + 14] << 16;

      case 14:
        k4 ^= bytes[i + 13] << 8;

      case 13:
        k4 ^= bytes[i + 12];
        k4 = _x86Multiply(k4, c4);
        k4 = _x86Rotl(k4, 18);
        k4 = _x86Multiply(k4, c1);
        h4 ^= k4;

      case 12:
        k3 ^= bytes[i + 11] << 24;

      case 11:
        k3 ^= bytes[i + 10] << 16;

      case 10:
        k3 ^= bytes[i + 9] << 8;

      case 9:
        k3 ^= bytes[i + 8];
        k3 = _x86Multiply(k3, c3);
        k3 = _x86Rotl(k3, 17);
        k3 = _x86Multiply(k3, c4);
        h3 ^= k3;

      case 8:
        k2 ^= bytes[i + 7] << 24;

      case 7:
        k2 ^= bytes[i + 6] << 16;

      case 6:
        k2 ^= bytes[i + 5] << 8;

      case 5:
        k2 ^= bytes[i + 4];
        k2 = _x86Multiply(k2, c2);
        k2 = _x86Rotl(k2, 16);
        k2 = _x86Multiply(k2, c3);
        h2 ^= k2;

      case 4:
        k1 ^= bytes[i + 3] << 24;

      case 3:
        k1 ^= bytes[i + 2] << 16;

      case 2:
        k1 ^= bytes[i + 1] << 8;

      case 1:
        k1 ^= bytes[i];
        k1 = _x86Multiply(k1, c1);
        k1 = _x86Rotl(k1, 15);
        k1 = _x86Multiply(k1, c2);
        h1 ^= k1;
    }

    h1 ^= bytes.length;
    h2 ^= bytes.length;
    h3 ^= bytes.length;
    h4 ^= bytes.length;
    h1 += h2;
    h1 += h3;
    h1 += h4;
    h2 += h1;
    h3 += h1;
    h4 += h1;
    h1 = _x86Fmix(h1);
    h2 = _x86Fmix(h2);
    h3 = _x86Fmix(h3);
    h4 = _x86Fmix(h4);
    h1 += h2;
    h1 += h3;
    h1 += h4;
    h2 += h1;
    h3 += h1;
    h4 += h1;
    return ("00000000" + (h1 >>> 0).toString(16)).slice(-8) + ("00000000" + (h2 >>> 0).toString(16)).slice(-8) + ("00000000" + (h3 >>> 0).toString(16)).slice(-8) + ("00000000" + (h4 >>> 0).toString(16)).slice(-8);
  };

  library.x64.hash128 = function (bytes, seed) {
    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    if (library.inputValidation && !_validBytes(bytes)) {
      return undefined;
    }

    seed = seed || 0;
    var remainder = bytes.length % 16;
    var blocks = bytes.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];

    for (var i = 0; i < blocks; i = i + 16) {
      k1 = [bytes[i + 4] | bytes[i + 5] << 8 | bytes[i + 6] << 16 | bytes[i + 7] << 24, bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24];
      k2 = [bytes[i + 12] | bytes[i + 13] << 8 | bytes[i + 14] << 16 | bytes[i + 15] << 24, bytes[i + 8] | bytes[i + 9] << 8 | bytes[i + 10] << 16 | bytes[i + 11] << 24];
      k1 = _x64Multiply(k1, c1);
      k1 = _x64Rotl(k1, 31);
      k1 = _x64Multiply(k1, c2);
      h1 = _x64Xor(h1, k1);
      h1 = _x64Rotl(h1, 27);
      h1 = _x64Add(h1, h2);
      h1 = _x64Add(_x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
      k2 = _x64Multiply(k2, c2);
      k2 = _x64Rotl(k2, 33);
      k2 = _x64Multiply(k2, c1);
      h2 = _x64Xor(h2, k2);
      h2 = _x64Rotl(h2, 31);
      h2 = _x64Add(h2, h1);
      h2 = _x64Add(_x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }

    k1 = [0, 0];
    k2 = [0, 0];

    switch (remainder) {
      case 15:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 14]], 48));

      case 14:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 13]], 40));

      case 13:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 12]], 32));

      case 12:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 11]], 24));

      case 11:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 10]], 16));

      case 10:
        k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 9]], 8));

      case 9:
        k2 = _x64Xor(k2, [0, bytes[i + 8]]);
        k2 = _x64Multiply(k2, c2);
        k2 = _x64Rotl(k2, 33);
        k2 = _x64Multiply(k2, c1);
        h2 = _x64Xor(h2, k2);

      case 8:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 7]], 56));

      case 7:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 6]], 48));

      case 6:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 5]], 40));

      case 5:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 4]], 32));

      case 4:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 3]], 24));

      case 3:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 2]], 16));

      case 2:
        k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 1]], 8));

      case 1:
        k1 = _x64Xor(k1, [0, bytes[i]]);
        k1 = _x64Multiply(k1, c1);
        k1 = _x64Rotl(k1, 31);
        k1 = _x64Multiply(k1, c2);
        h1 = _x64Xor(h1, k1);
    }

    h1 = _x64Xor(h1, [0, bytes.length]);
    h2 = _x64Xor(h2, [0, bytes.length]);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    h1 = _x64Fmix(h1);
    h2 = _x64Fmix(h2);
    h1 = _x64Add(h1, h2);
    h2 = _x64Add(h2, h1);
    return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
  }; // INITIALIZATION
  // --------------
  // Export murmurHash3 for CommonJS, either as an AMD module or just as part
  // of the global object.


  if (true) {
    if ( true && module.exports) {
      exports = module.exports = library;
    }

    exports.murmurHash3 = library;
  } else {}
})(this);

/***/ }),

/***/ 25375:
/*!***************************************!*\
  !*** ./node_modules/p-retry/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const retry = __webpack_require__(/*! retry */ 78593);

const networkErrorMsgs = ['Failed to fetch', // Chrome
'NetworkError when attempting to fetch resource.', // Firefox
'The Internet connection appears to be offline.', // Safari
'Network request failed' // `cross-fetch`
];

class AbortError extends Error {
  constructor(message) {
    super();

    if (message instanceof Error) {
      this.originalError = message;
      ({
        message
      } = message);
    } else {
      this.originalError = new Error(message);
      this.originalError.stack = this.stack;
    }

    this.name = 'AbortError';
    this.message = message;
  }

}

const decorateErrorWithCounts = (error, attemptNumber, options) => {
  // Minus 1 from attemptNumber because the first attempt does not count as a retry
  const retriesLeft = options.retries - (attemptNumber - 1);
  error.attemptNumber = attemptNumber;
  error.retriesLeft = retriesLeft;
  return error;
};

const isNetworkError = errorMessage => networkErrorMsgs.includes(errorMessage);

const pRetry = (input, options) => new Promise((resolve, reject) => {
  options = {
    onFailedAttempt: () => {},
    retries: 10,
    ...options
  };
  const operation = retry.operation(options);
  operation.attempt( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (attemptNumber) {
      try {
        resolve(yield input(attemptNumber));
      } catch (error) {
        if (!(error instanceof Error)) {
          reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
          return;
        }

        if (error instanceof AbortError) {
          operation.stop();
          reject(error.originalError);
        } else if (error instanceof TypeError && !isNetworkError(error.message)) {
          operation.stop();
          reject(error);
        } else {
          decorateErrorWithCounts(error, attemptNumber, options);

          try {
            yield options.onFailedAttempt(error);
          } catch (error) {
            reject(error);
            return;
          }

          if (!operation.retry(error)) {
            reject(operation.mainError());
          }
        }
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

module.exports = pRetry; // TODO: remove this in the next major version

module.exports["default"] = pRetry;
module.exports.AbortError = AbortError;

/***/ }),

/***/ 78593:
/*!**********************************************************!*\
  !*** ./node_modules/p-retry/node_modules/retry/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/retry */ 99502);

/***/ }),

/***/ 99502:
/*!**************************************************************!*\
  !*** ./node_modules/p-retry/node_modules/retry/lib/retry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var RetryOperation = __webpack_require__(/*! ./retry_operation */ 17800);

exports.operation = function (options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
    forever: options && (options.forever || options.retries === Infinity),
    unref: options && options.unref,
    maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function (options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };

  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];

  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  } // sort the array numerically ascending


  timeouts.sort(function (a, b) {
    return a - b;
  });
  return timeouts;
};

exports.createTimeout = function (attempt, opts) {
  var random = opts.randomize ? Math.random() + 1 : 1;
  var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);
  return timeout;
};

exports.wrap = function (obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];

    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op = exports.operation(options);
      var args = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();
      args.push(function (err) {
        if (op.retry(err)) {
          return;
        }

        if (err) {
          arguments[0] = op.mainError();
        }

        callback.apply(this, arguments);
      });
      op.attempt(function () {
        original.apply(obj, args);
      });
    }.bind(obj, original);

    obj[method].options = options;
  }
};

/***/ }),

/***/ 17800:
/*!************************************************************************!*\
  !*** ./node_modules/p-retry/node_modules/retry/lib/retry_operation.js ***!
  \************************************************************************/
/***/ ((module) => {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = {
      forever: options
    };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}

module.exports = RetryOperation;

RetryOperation.prototype.reset = function () {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
};

RetryOperation.prototype.stop = function () {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (this._timer) {
    clearTimeout(this._timer);
  }

  this._timeouts = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function (err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }

  var currentTime = new Date().getTime();

  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.push(err);

    this._errors.unshift(new Error('RetryOperation timeout occurred'));

    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();

  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(0, this._errors.length - 1);

      timeout = this._cachedTimeouts.slice(-1);
    } else {
      return false;
    }
  }

  var self = this;
  this._timer = setTimeout(function () {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function () {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
        self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
    this._timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function (fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }

    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;

  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function () {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function (fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function (fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function () {
  return this._errors;
};

RetryOperation.prototype.attempts = function () {
  return this._attempts;
};

RetryOperation.prototype.mainError = function () {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;
    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};

/***/ }),

/***/ 28633:
/*!****************************************************!*\
  !*** ./node_modules/rabin-wasm/dist/rabin-wasm.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  instantiate
} = __webpack_require__(/*! @assemblyscript/loader */ 66917);

loadWebAssembly.supported = typeof WebAssembly !== 'undefined';

function loadWebAssembly(imp = {}) {
  if (!loadWebAssembly.supported) return null;
  var wasm = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 78, 14, 96, 2, 127, 126, 0, 96, 1, 127, 1, 126, 96, 2, 127, 127, 0, 96, 1, 127, 1, 127, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 96, 3, 127, 127, 127, 1, 127, 96, 0, 0, 96, 3, 127, 127, 127, 0, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 0, 96, 5, 127, 127, 127, 127, 127, 1, 127, 96, 1, 126, 1, 127, 96, 2, 126, 126, 1, 126, 2, 13, 1, 3, 101, 110, 118, 5, 97, 98, 111, 114, 116, 0, 10, 3, 54, 53, 2, 2, 8, 9, 3, 5, 2, 8, 6, 5, 3, 4, 2, 6, 9, 12, 13, 2, 5, 11, 3, 2, 3, 2, 3, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 6, 7, 7, 4, 4, 5, 3, 1, 0, 1, 6, 47, 9, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 3, 11, 127, 0, 65, 4, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 1, 65, 0, 11, 127, 0, 65, 240, 2, 11, 127, 0, 65, 6, 11, 7, 240, 5, 41, 6, 109, 101, 109, 111, 114, 121, 2, 0, 7, 95, 95, 97, 108, 108, 111, 99, 0, 10, 8, 95, 95, 114, 101, 116, 97, 105, 110, 0, 11, 9, 95, 95, 114, 101, 108, 101, 97, 115, 101, 0, 12, 9, 95, 95, 99, 111, 108, 108, 101, 99, 116, 0, 51, 11, 95, 95, 114, 116, 116, 105, 95, 98, 97, 115, 101, 3, 7, 13, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 95, 73, 68, 3, 2, 13, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 95, 73, 68, 3, 3, 6, 100, 101, 103, 114, 101, 101, 0, 16, 3, 109, 111, 100, 0, 17, 5, 82, 97, 98, 105, 110, 3, 8, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 21, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 0, 22, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 23, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 105, 110, 100, 111, 119, 95, 115, 105, 122, 101, 0, 24, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 119, 112, 111, 115, 0, 25, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 119, 112, 111, 115, 0, 26, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 111, 117, 110, 116, 0, 27, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 111, 117, 110, 116, 0, 28, 13, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 115, 0, 29, 13, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 115, 0, 30, 15, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 115, 116, 97, 114, 116, 0, 31, 15, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 115, 116, 97, 114, 116, 0, 32, 16, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 33, 16, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 100, 105, 103, 101, 115, 116, 0, 34, 21, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 35, 21, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 115, 116, 97, 114, 116, 0, 36, 22, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 37, 22, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 108, 101, 110, 103, 116, 104, 0, 38, 31, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 39, 31, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 99, 104, 117, 110, 107, 95, 99, 117, 116, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 40, 20, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 41, 20, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 112, 111, 108, 121, 110, 111, 109, 105, 97, 108, 0, 42, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 43, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 105, 110, 115, 105, 122, 101, 0, 44, 17, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 45, 17, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 120, 115, 105, 122, 101, 0, 46, 14, 82, 97, 98, 105, 110, 35, 103, 101, 116, 58, 109, 97, 115, 107, 0, 47, 14, 82, 97, 98, 105, 110, 35, 115, 101, 116, 58, 109, 97, 115, 107, 0, 48, 17, 82, 97, 98, 105, 110, 35, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 0, 20, 17, 82, 97, 98, 105, 110, 35, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 0, 49, 8, 1, 50, 10, 165, 31, 53, 199, 1, 1, 4, 127, 32, 1, 40, 2, 0, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 3, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 3, 65, 7, 107, 11, 33, 3, 32, 1, 40, 2, 20, 33, 2, 32, 1, 40, 2, 16, 34, 5, 4, 64, 32, 5, 32, 2, 54, 2, 20, 11, 32, 2, 4, 64, 32, 2, 32, 5, 54, 2, 16, 11, 32, 1, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 70, 4, 64, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 2, 54, 2, 96, 32, 2, 69, 4, 64, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 65, 127, 115, 113, 34, 1, 54, 2, 4, 32, 1, 69, 4, 64, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 65, 127, 115, 113, 54, 2, 0, 11, 11, 11, 11, 226, 2, 1, 6, 127, 32, 1, 40, 2, 0, 33, 3, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 34, 5, 65, 1, 113, 4, 64, 32, 3, 65, 124, 113, 65, 16, 106, 32, 5, 65, 124, 113, 106, 34, 2, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 4, 16, 1, 32, 1, 32, 2, 32, 3, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 34, 4, 40, 2, 0, 33, 5, 11, 11, 32, 3, 65, 2, 113, 4, 64, 32, 1, 65, 4, 107, 40, 2, 0, 34, 2, 40, 2, 0, 34, 6, 65, 124, 113, 65, 16, 106, 32, 3, 65, 124, 113, 106, 34, 7, 65, 240, 255, 255, 255, 3, 73, 4, 64, 32, 0, 32, 2, 16, 1, 32, 2, 32, 7, 32, 6, 65, 3, 113, 114, 34, 3, 54, 2, 0, 32, 2, 33, 1, 11, 11, 32, 4, 32, 5, 65, 2, 114, 54, 2, 0, 32, 4, 65, 4, 107, 32, 1, 54, 2, 0, 32, 0, 32, 3, 65, 124, 113, 34, 2, 65, 128, 2, 73, 4, 127, 32, 2, 65, 4, 118, 33, 4, 65, 0, 5, 32, 2, 65, 31, 32, 2, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 4, 32, 2, 65, 7, 107, 11, 34, 3, 65, 4, 116, 32, 4, 106, 65, 2, 116, 106, 40, 2, 96, 33, 2, 32, 1, 65, 0, 54, 2, 16, 32, 1, 32, 2, 54, 2, 20, 32, 2, 4, 64, 32, 2, 32, 1, 54, 2, 16, 11, 32, 0, 32, 4, 32, 3, 65, 4, 116, 106, 65, 2, 116, 106, 32, 1, 54, 2, 96, 32, 0, 32, 0, 40, 2, 0, 65, 1, 32, 3, 116, 114, 54, 2, 0, 32, 0, 32, 3, 65, 2, 116, 106, 32, 0, 32, 3, 65, 2, 116, 106, 40, 2, 4, 65, 1, 32, 4, 116, 114, 54, 2, 4, 11, 119, 1, 1, 127, 32, 2, 2, 127, 32, 0, 40, 2, 160, 12, 34, 2, 4, 64, 32, 2, 32, 1, 65, 16, 107, 70, 4, 64, 32, 2, 40, 2, 0, 33, 3, 32, 1, 65, 16, 107, 33, 1, 11, 11, 32, 1, 11, 107, 34, 2, 65, 48, 73, 4, 64, 15, 11, 32, 1, 32, 3, 65, 2, 113, 32, 2, 65, 32, 107, 65, 1, 114, 114, 54, 2, 0, 32, 1, 65, 0, 54, 2, 16, 32, 1, 65, 0, 54, 2, 20, 32, 1, 32, 2, 106, 65, 16, 107, 34, 2, 65, 2, 54, 2, 0, 32, 0, 32, 2, 54, 2, 160, 12, 32, 0, 32, 1, 16, 2, 11, 155, 1, 1, 3, 127, 35, 0, 34, 0, 69, 4, 64, 65, 1, 63, 0, 34, 0, 74, 4, 127, 65, 1, 32, 0, 107, 64, 0, 65, 0, 72, 5, 65, 0, 11, 4, 64, 0, 11, 65, 176, 3, 34, 0, 65, 0, 54, 2, 0, 65, 208, 15, 65, 0, 54, 2, 0, 3, 64, 32, 1, 65, 23, 73, 4, 64, 32, 1, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 4, 65, 0, 33, 2, 3, 64, 32, 2, 65, 16, 73, 4, 64, 32, 1, 65, 4, 116, 32, 2, 106, 65, 2, 116, 65, 176, 3, 106, 65, 0, 54, 2, 96, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 65, 176, 3, 65, 224, 15, 63, 0, 65, 16, 116, 16, 3, 65, 176, 3, 36, 0, 11, 32, 0, 11, 45, 0, 32, 0, 65, 240, 255, 255, 255, 3, 79, 4, 64, 65, 32, 65, 224, 0, 65, 201, 3, 65, 29, 16, 0, 0, 11, 32, 0, 65, 15, 106, 65, 112, 113, 34, 0, 65, 16, 32, 0, 65, 16, 75, 27, 11, 169, 1, 1, 1, 127, 32, 0, 32, 1, 65, 128, 2, 73, 4, 127, 32, 1, 65, 4, 118, 33, 1, 65, 0, 5, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 64, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 106, 65, 1, 107, 33, 1, 11, 32, 1, 65, 31, 32, 1, 103, 107, 34, 2, 65, 4, 107, 118, 65, 16, 115, 33, 1, 32, 2, 65, 7, 107, 11, 34, 2, 65, 2, 116, 106, 40, 2, 4, 65, 127, 32, 1, 116, 113, 34, 1, 4, 127, 32, 0, 32, 1, 104, 32, 2, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 32, 0, 40, 2, 0, 65, 127, 32, 2, 65, 1, 106, 116, 113, 34, 1, 4, 127, 32, 0, 32, 0, 32, 1, 104, 34, 0, 65, 2, 116, 106, 40, 2, 4, 104, 32, 0, 65, 4, 116, 106, 65, 2, 116, 106, 40, 2, 96, 5, 65, 0, 11, 11, 11, 111, 1, 1, 127, 63, 0, 34, 2, 32, 1, 65, 248, 255, 255, 255, 1, 73, 4, 127, 32, 1, 65, 1, 65, 27, 32, 1, 103, 107, 116, 65, 1, 107, 106, 5, 32, 1, 11, 65, 16, 32, 0, 40, 2, 160, 12, 32, 2, 65, 16, 116, 65, 16, 107, 71, 116, 106, 65, 255, 255, 3, 106, 65, 128, 128, 124, 113, 65, 16, 118, 34, 1, 32, 2, 32, 1, 74, 27, 64, 0, 65, 0, 72, 4, 64, 32, 1, 64, 0, 65, 0, 72, 4, 64, 0, 11, 11, 32, 0, 32, 2, 65, 16, 116, 63, 0, 65, 16, 116, 16, 3, 11, 113, 1, 2, 127, 32, 1, 40, 2, 0, 34, 3, 65, 124, 113, 32, 2, 107, 34, 4, 65, 32, 79, 4, 64, 32, 1, 32, 2, 32, 3, 65, 2, 113, 114, 54, 2, 0, 32, 2, 32, 1, 65, 16, 106, 106, 34, 1, 32, 4, 65, 16, 107, 65, 1, 114, 54, 2, 0, 32, 0, 32, 1, 16, 2, 5, 32, 1, 32, 3, 65, 126, 113, 54, 2, 0, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 32, 1, 65, 16, 106, 32, 1, 40, 2, 0, 65, 124, 113, 106, 40, 2, 0, 65, 125, 113, 54, 2, 0, 11, 11, 91, 1, 2, 127, 32, 0, 32, 1, 16, 5, 34, 4, 16, 6, 34, 3, 69, 4, 64, 65, 1, 36, 1, 65, 0, 36, 1, 32, 0, 32, 4, 16, 6, 34, 3, 69, 4, 64, 32, 0, 32, 4, 16, 7, 32, 0, 32, 4, 16, 6, 33, 3, 11, 11, 32, 3, 65, 0, 54, 2, 4, 32, 3, 32, 2, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 0, 32, 3, 16, 1, 32, 0, 32, 3, 32, 4, 16, 8, 32, 3, 11, 13, 0, 16, 4, 32, 0, 32, 1, 16, 9, 65, 16, 106, 11, 33, 1, 1, 127, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 18, 0, 32, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 140, 3, 1, 1, 127, 2, 64, 32, 1, 69, 13, 0, 32, 0, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 1, 107, 65, 0, 58, 0, 0, 32, 1, 65, 2, 77, 13, 0, 32, 0, 65, 1, 106, 65, 0, 58, 0, 0, 32, 0, 65, 2, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 34, 2, 65, 2, 107, 65, 0, 58, 0, 0, 32, 2, 65, 3, 107, 65, 0, 58, 0, 0, 32, 1, 65, 6, 77, 13, 0, 32, 0, 65, 3, 106, 65, 0, 58, 0, 0, 32, 0, 32, 1, 106, 65, 4, 107, 65, 0, 58, 0, 0, 32, 1, 65, 8, 77, 13, 0, 32, 1, 65, 0, 32, 0, 107, 65, 3, 113, 34, 1, 107, 33, 2, 32, 0, 32, 1, 106, 34, 0, 65, 0, 54, 2, 0, 32, 0, 32, 2, 65, 124, 113, 34, 1, 106, 65, 4, 107, 65, 0, 54, 2, 0, 32, 1, 65, 8, 77, 13, 0, 32, 0, 65, 4, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 12, 107, 65, 0, 54, 2, 0, 32, 2, 65, 8, 107, 65, 0, 54, 2, 0, 32, 1, 65, 24, 77, 13, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 20, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 32, 1, 106, 34, 2, 65, 28, 107, 65, 0, 54, 2, 0, 32, 2, 65, 24, 107, 65, 0, 54, 2, 0, 32, 2, 65, 20, 107, 65, 0, 54, 2, 0, 32, 2, 65, 16, 107, 65, 0, 54, 2, 0, 32, 0, 32, 0, 65, 4, 113, 65, 24, 106, 34, 2, 106, 33, 0, 32, 1, 32, 2, 107, 33, 1, 3, 64, 32, 1, 65, 32, 79, 4, 64, 32, 0, 66, 0, 55, 3, 0, 32, 0, 65, 8, 106, 66, 0, 55, 3, 0, 32, 0, 65, 16, 106, 66, 0, 55, 3, 0, 32, 0, 65, 24, 106, 66, 0, 55, 3, 0, 32, 1, 65, 32, 107, 33, 1, 32, 0, 65, 32, 106, 33, 0, 12, 1, 11, 11, 11, 11, 178, 1, 1, 3, 127, 32, 1, 65, 240, 255, 255, 255, 3, 32, 2, 118, 75, 4, 64, 65, 144, 1, 65, 192, 1, 65, 23, 65, 56, 16, 0, 0, 11, 32, 1, 32, 2, 116, 34, 3, 65, 0, 16, 10, 34, 2, 32, 3, 16, 13, 32, 0, 69, 4, 64, 65, 12, 65, 2, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 2, 34, 1, 32, 0, 40, 2, 0, 34, 4, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 4, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 32, 0, 32, 2, 54, 2, 4, 32, 0, 32, 3, 54, 2, 8, 32, 0, 11, 46, 1, 2, 127, 65, 12, 65, 5, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 65, 128, 2, 65, 3, 16, 14, 11, 9, 0, 65, 63, 32, 0, 121, 167, 107, 11, 49, 1, 2, 127, 65, 63, 32, 1, 121, 167, 107, 33, 2, 3, 64, 65, 63, 32, 0, 121, 167, 107, 32, 2, 107, 34, 3, 65, 0, 78, 4, 64, 32, 0, 32, 1, 32, 3, 172, 134, 133, 33, 0, 12, 1, 11, 11, 32, 0, 11, 40, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 163, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 65, 0, 58, 0, 0, 11, 38, 0, 32, 1, 32, 0, 40, 2, 8, 79, 4, 64, 65, 128, 2, 65, 192, 2, 65, 152, 1, 65, 44, 16, 0, 0, 11, 32, 1, 32, 0, 40, 2, 4, 106, 45, 0, 0, 11, 254, 5, 2, 1, 127, 4, 126, 32, 0, 69, 4, 64, 65, 232, 0, 65, 6, 16, 10, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 5, 32, 5, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 4, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 32, 0, 66, 0, 55, 3, 40, 32, 0, 66, 0, 55, 3, 48, 32, 0, 66, 0, 55, 3, 56, 32, 0, 66, 0, 55, 3, 64, 32, 0, 66, 0, 55, 3, 72, 32, 0, 66, 0, 55, 3, 80, 32, 0, 66, 0, 55, 3, 88, 32, 0, 66, 0, 55, 3, 96, 32, 0, 32, 2, 173, 55, 3, 80, 32, 0, 32, 3, 173, 55, 3, 88, 65, 12, 65, 4, 16, 10, 34, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 32, 4, 65, 0, 16, 14, 33, 2, 32, 0, 40, 2, 0, 16, 12, 32, 0, 32, 2, 54, 2, 0, 32, 0, 32, 4, 54, 2, 4, 32, 0, 66, 1, 32, 1, 173, 134, 66, 1, 125, 55, 3, 96, 32, 0, 66, 243, 130, 183, 218, 216, 230, 232, 30, 55, 3, 72, 35, 4, 69, 4, 64, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 32, 2, 65, 255, 1, 113, 173, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 65, 0, 33, 4, 3, 64, 32, 4, 32, 0, 40, 2, 4, 65, 1, 107, 72, 4, 64, 32, 6, 66, 8, 134, 33, 6, 32, 0, 41, 3, 72, 34, 7, 33, 8, 65, 63, 32, 7, 121, 167, 107, 33, 1, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 1, 107, 34, 3, 65, 0, 78, 4, 64, 32, 6, 32, 8, 32, 3, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 4, 65, 1, 106, 33, 4, 12, 1, 11, 11, 35, 6, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 63, 32, 0, 41, 3, 72, 121, 167, 107, 172, 33, 7, 65, 0, 33, 2, 3, 64, 32, 2, 65, 128, 2, 72, 4, 64, 35, 5, 33, 1, 32, 2, 172, 32, 7, 134, 34, 8, 33, 6, 65, 63, 32, 0, 41, 3, 72, 34, 9, 121, 167, 107, 33, 3, 3, 64, 65, 63, 32, 6, 121, 167, 107, 32, 3, 107, 34, 4, 65, 0, 78, 4, 64, 32, 6, 32, 9, 32, 4, 172, 134, 133, 33, 6, 12, 1, 11, 11, 32, 1, 40, 2, 4, 32, 2, 65, 3, 116, 106, 32, 6, 32, 8, 132, 55, 3, 0, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 65, 1, 36, 4, 11, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 0, 55, 3, 32, 65, 0, 33, 2, 3, 64, 32, 2, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 2, 16, 18, 32, 2, 65, 1, 106, 33, 2, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 6, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 6, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 0, 11, 38, 1, 1, 127, 32, 0, 40, 2, 0, 34, 0, 65, 172, 3, 75, 4, 64, 32, 0, 65, 16, 107, 34, 1, 32, 1, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 0, 11, 55, 1, 2, 127, 32, 1, 32, 0, 40, 2, 0, 34, 2, 71, 4, 64, 32, 1, 65, 172, 3, 75, 4, 64, 32, 1, 65, 16, 107, 34, 3, 32, 3, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 16, 12, 11, 32, 0, 32, 1, 54, 2, 0, 11, 7, 0, 32, 0, 40, 2, 4, 11, 9, 0, 32, 0, 32, 1, 54, 2, 4, 11, 7, 0, 32, 0, 40, 2, 8, 11, 9, 0, 32, 0, 32, 1, 54, 2, 8, 11, 7, 0, 32, 0, 41, 3, 16, 11, 9, 0, 32, 0, 32, 1, 55, 3, 16, 11, 7, 0, 32, 0, 41, 3, 24, 11, 9, 0, 32, 0, 32, 1, 55, 3, 24, 11, 7, 0, 32, 0, 41, 3, 32, 11, 9, 0, 32, 0, 32, 1, 55, 3, 32, 11, 7, 0, 32, 0, 41, 3, 40, 11, 9, 0, 32, 0, 32, 1, 55, 3, 40, 11, 7, 0, 32, 0, 41, 3, 48, 11, 9, 0, 32, 0, 32, 1, 55, 3, 48, 11, 7, 0, 32, 0, 41, 3, 56, 11, 9, 0, 32, 0, 32, 1, 55, 3, 56, 11, 7, 0, 32, 0, 41, 3, 64, 11, 9, 0, 32, 0, 32, 1, 55, 3, 64, 11, 7, 0, 32, 0, 41, 3, 72, 11, 9, 0, 32, 0, 32, 1, 55, 3, 72, 11, 7, 0, 32, 0, 41, 3, 80, 11, 9, 0, 32, 0, 32, 1, 55, 3, 80, 11, 7, 0, 32, 0, 41, 3, 88, 11, 9, 0, 32, 0, 32, 1, 55, 3, 88, 11, 7, 0, 32, 0, 41, 3, 96, 11, 9, 0, 32, 0, 32, 1, 55, 3, 96, 11, 172, 4, 2, 5, 127, 1, 126, 32, 2, 65, 172, 3, 75, 4, 64, 32, 2, 65, 16, 107, 34, 4, 32, 4, 40, 2, 4, 65, 1, 106, 54, 2, 4, 11, 32, 2, 33, 4, 65, 0, 33, 2, 32, 1, 40, 2, 8, 33, 5, 32, 1, 40, 2, 4, 33, 6, 3, 64, 2, 127, 65, 0, 33, 3, 3, 64, 32, 3, 32, 5, 72, 4, 64, 32, 3, 32, 6, 106, 45, 0, 0, 33, 1, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 7, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 32, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 7, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 1, 173, 32, 8, 66, 8, 134, 132, 133, 55, 3, 40, 32, 0, 32, 0, 41, 3, 16, 66, 1, 124, 55, 3, 16, 32, 0, 32, 0, 41, 3, 24, 66, 1, 124, 55, 3, 24, 32, 0, 41, 3, 16, 32, 0, 41, 3, 80, 90, 4, 127, 32, 0, 41, 3, 40, 32, 0, 41, 3, 96, 131, 80, 5, 65, 0, 11, 4, 127, 65, 1, 5, 32, 0, 41, 3, 16, 32, 0, 41, 3, 88, 90, 11, 4, 64, 32, 0, 32, 0, 41, 3, 32, 55, 3, 48, 32, 0, 32, 0, 41, 3, 16, 55, 3, 56, 32, 0, 32, 0, 41, 3, 40, 55, 3, 64, 65, 0, 33, 1, 3, 64, 32, 1, 32, 0, 40, 2, 4, 72, 4, 64, 32, 0, 40, 2, 0, 32, 1, 16, 18, 32, 1, 65, 1, 106, 33, 1, 12, 1, 11, 11, 32, 0, 66, 0, 55, 3, 40, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 0, 55, 3, 40, 32, 0, 40, 2, 0, 32, 0, 40, 2, 8, 16, 19, 33, 1, 32, 0, 40, 2, 8, 32, 0, 40, 2, 0, 40, 2, 4, 106, 65, 1, 58, 0, 0, 32, 0, 32, 0, 41, 3, 40, 35, 6, 40, 2, 4, 32, 1, 65, 3, 116, 106, 41, 3, 0, 133, 55, 3, 40, 32, 0, 32, 0, 40, 2, 8, 65, 1, 106, 32, 0, 40, 2, 4, 111, 54, 2, 8, 32, 0, 35, 5, 40, 2, 4, 32, 0, 41, 3, 40, 34, 8, 66, 45, 136, 167, 65, 3, 116, 106, 41, 3, 0, 32, 8, 66, 8, 134, 66, 1, 132, 133, 55, 3, 40, 32, 3, 65, 1, 106, 12, 3, 11, 32, 3, 65, 1, 106, 33, 3, 12, 1, 11, 11, 65, 127, 11, 34, 1, 65, 0, 78, 4, 64, 32, 5, 32, 1, 107, 33, 5, 32, 1, 32, 6, 106, 33, 6, 32, 2, 34, 1, 65, 1, 106, 33, 2, 32, 4, 40, 2, 4, 32, 1, 65, 2, 116, 106, 32, 0, 41, 3, 56, 62, 2, 0, 12, 1, 11, 11, 32, 4, 11, 10, 0, 16, 15, 36, 5, 16, 15, 36, 6, 11, 3, 0, 1, 11, 73, 1, 2, 127, 32, 0, 40, 2, 4, 34, 1, 65, 255, 255, 255, 255, 0, 113, 34, 2, 65, 1, 70, 4, 64, 32, 0, 65, 16, 106, 16, 53, 32, 0, 32, 0, 40, 2, 0, 65, 1, 114, 54, 2, 0, 35, 0, 32, 0, 16, 2, 5, 32, 0, 32, 2, 65, 1, 107, 32, 1, 65, 128, 128, 128, 128, 127, 113, 114, 54, 2, 4, 11, 11, 58, 0, 2, 64, 2, 64, 2, 64, 32, 0, 65, 8, 107, 40, 2, 0, 14, 7, 0, 0, 1, 1, 1, 1, 1, 2, 11, 15, 11, 32, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 65, 172, 3, 79, 4, 64, 32, 0, 65, 16, 107, 16, 52, 11, 11, 15, 11, 0, 11, 11, 137, 3, 7, 0, 65, 16, 11, 55, 40, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 40, 0, 0, 0, 97, 0, 108, 0, 108, 0, 111, 0, 99, 0, 97, 0, 116, 0, 105, 0, 111, 0, 110, 0, 32, 0, 116, 0, 111, 0, 111, 0, 32, 0, 108, 0, 97, 0, 114, 0, 103, 0, 101, 0, 65, 208, 0, 11, 45, 30, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 30, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 114, 0, 116, 0, 47, 0, 116, 0, 108, 0, 115, 0, 102, 0, 46, 0, 116, 0, 115, 0, 65, 128, 1, 11, 43, 28, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 73, 0, 110, 0, 118, 0, 97, 0, 108, 0, 105, 0, 100, 0, 32, 0, 108, 0, 101, 0, 110, 0, 103, 0, 116, 0, 104, 0, 65, 176, 1, 11, 53, 38, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 38, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 98, 0, 117, 0, 102, 0, 102, 0, 101, 0, 114, 0, 46, 0, 116, 0, 115, 0, 65, 240, 1, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 73, 0, 110, 0, 100, 0, 101, 0, 120, 0, 32, 0, 111, 0, 117, 0, 116, 0, 32, 0, 111, 0, 102, 0, 32, 0, 114, 0, 97, 0, 110, 0, 103, 0, 101, 0, 65, 176, 2, 11, 51, 36, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 36, 0, 0, 0, 126, 0, 108, 0, 105, 0, 98, 0, 47, 0, 116, 0, 121, 0, 112, 0, 101, 0, 100, 0, 97, 0, 114, 0, 114, 0, 97, 0, 121, 0, 46, 0, 116, 0, 115, 0, 65, 240, 2, 11, 53, 7, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 145, 4, 0, 0, 2, 0, 0, 0, 49, 0, 0, 0, 2, 0, 0, 0, 17, 1, 0, 0, 2, 0, 0, 0, 16, 0, 34, 16, 115, 111, 117, 114, 99, 101, 77, 97, 112, 112, 105, 110, 103, 85, 82, 76, 16, 46, 47, 114, 97, 98, 105, 110, 46, 119, 97, 115, 109, 46, 109, 97, 112]); // make it work async because browsers throw when a wasm module is bigger than 4kb and load sync

  return instantiate(new Response(new Blob([wasm], {
    type: 'application/wasm'
  })), imp);
}

module.exports = loadWebAssembly;

/***/ }),

/***/ 66917:
/*!******************************************************************************!*\
  !*** ./node_modules/rabin-wasm/node_modules/@assemblyscript/loader/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
 // Runtime header offsets

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const ID_OFFSET = -8;
const SIZE_OFFSET = -4; // Runtime ids

const ARRAYBUFFER_ID = 0;
const STRING_ID = 1;
const ARRAYBUFFERVIEW_ID = 2; // Runtime type information

const ARRAYBUFFERVIEW = 1 << 0;
const ARRAY = 1 << 1;
const SET = 1 << 2;
const MAP = 1 << 3;
const VAL_ALIGN_OFFSET = 5;
const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;
const VAL_SIGNED = 1 << 10;
const VAL_FLOAT = 1 << 11;
const VAL_NULLABLE = 1 << 12;
const VAL_MANAGED = 1 << 13;
const KEY_ALIGN_OFFSET = 14;
const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;
const KEY_SIGNED = 1 << 19;
const KEY_FLOAT = 1 << 20;
const KEY_NULLABLE = 1 << 21;
const KEY_MANAGED = 1 << 22; // Array(BufferView) layout

const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;
const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;
const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;
const ARRAYBUFFERVIEW_SIZE = 12;
const ARRAY_LENGTH_OFFSET = 12;
const ARRAY_SIZE = 16;
const BIGINT = typeof BigUint64Array !== "undefined";
const THIS = Symbol();
const CHUNKSIZE = 1024;
/** Gets a string from an U32 and an U16 view on a memory. */

function getStringImpl(buffer, ptr) {
  const U32 = new Uint32Array(buffer);
  const U16 = new Uint16Array(buffer);
  var length = U32[ptr + SIZE_OFFSET >>> 2] >>> 1;
  var offset = ptr >>> 1;
  if (length <= CHUNKSIZE) return String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
  const parts = [];

  do {
    const last = U16[offset + CHUNKSIZE - 1];
    const size = last >= 0xD800 && last < 0xDC00 ? CHUNKSIZE - 1 : CHUNKSIZE;
    parts.push(String.fromCharCode.apply(String, U16.subarray(offset, offset += size)));
    length -= size;
  } while (length > CHUNKSIZE);

  return parts.join("") + String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
}
/** Prepares the base module prior to instantiation. */


function preInstantiate(imports) {
  const baseModule = {};

  function getString(memory, ptr) {
    if (!memory) return "<yet unknown>";
    return getStringImpl(memory.buffer, ptr);
  } // add common imports used by stdlib for convenience


  const env = imports.env = imports.env || {};

  env.abort = env.abort || function abort(mesg, file, line, colm) {
    const memory = baseModule.memory || env.memory; // prefer exported, otherwise try imported

    throw Error("abort: " + getString(memory, mesg) + " at " + getString(memory, file) + ":" + line + ":" + colm);
  };

  env.trace = env.trace || function trace(mesg, n) {
    const memory = baseModule.memory || env.memory;
    console.log("trace: " + getString(memory, mesg) + (n ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + n).join(", "));
  };

  imports.Math = imports.Math || Math;
  imports.Date = imports.Date || Date;
  return baseModule;
}
/** Prepares the final module once instantiation is complete. */


function postInstantiate(baseModule, instance) {
  const rawExports = instance.exports;
  const memory = rawExports.memory;
  const table = rawExports.table;
  const alloc = rawExports["__alloc"];
  const retain = rawExports["__retain"];
  const rttiBase = rawExports["__rtti_base"] || ~0; // oob if not present

  /** Gets the runtime type info for the given id. */

  function getInfo(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2];
  }
  /** Gets the runtime base id for the given id. */


  function getBase(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2 + 1];
  }
  /** Gets the runtime alignment of a collection's values. */


  function getValueAlign(info) {
    return 31 - Math.clz32(info >>> VAL_ALIGN_OFFSET & 31); // -1 if none
  }
  /** Gets the runtime alignment of a collection's keys. */


  function getKeyAlign(info) {
    return 31 - Math.clz32(info >>> KEY_ALIGN_OFFSET & 31); // -1 if none
  }
  /** Allocates a new string in the module's memory and returns its retained pointer. */


  function __allocString(str) {
    const length = str.length;
    const ptr = alloc(length << 1, STRING_ID);
    const U16 = new Uint16Array(memory.buffer);

    for (var i = 0, p = ptr >>> 1; i < length; ++i) U16[p + i] = str.charCodeAt(i);

    return ptr;
  }

  baseModule.__allocString = __allocString;
  /** Reads a string from the module's memory by its pointer. */

  function __getString(ptr) {
    const buffer = memory.buffer;
    const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];
    if (id !== STRING_ID) throw Error("not a string: " + ptr);
    return getStringImpl(buffer, ptr);
  }

  baseModule.__getString = __getString;
  /** Gets the view matching the specified alignment, signedness and floatness. */

  function getView(alignLog2, signed, float) {
    const buffer = memory.buffer;

    if (float) {
      switch (alignLog2) {
        case 2:
          return new Float32Array(buffer);

        case 3:
          return new Float64Array(buffer);
      }
    } else {
      switch (alignLog2) {
        case 0:
          return new (signed ? Int8Array : Uint8Array)(buffer);

        case 1:
          return new (signed ? Int16Array : Uint16Array)(buffer);

        case 2:
          return new (signed ? Int32Array : Uint32Array)(buffer);

        case 3:
          return new (signed ? BigInt64Array : BigUint64Array)(buffer);
      }
    }

    throw Error("unsupported align: " + alignLog2);
  }
  /** Allocates a new array in the module's memory and returns its retained pointer. */


  function __allocArray(id, values) {
    const info = getInfo(id);
    if (!(info & (ARRAYBUFFERVIEW | ARRAY))) throw Error("not an array: " + id + " @ " + info);
    const align = getValueAlign(info);
    const length = values.length;
    const buf = alloc(length << align, ARRAYBUFFER_ID);
    const arr = alloc(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);
    const U32 = new Uint32Array(memory.buffer);
    U32[arr + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = retain(buf);
    U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = buf;
    U32[arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = length << align;
    if (info & ARRAY) U32[arr + ARRAY_LENGTH_OFFSET >>> 2] = length;
    const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);

    if (info & VAL_MANAGED) {
      for (let i = 0; i < length; ++i) view[(buf >>> align) + i] = retain(values[i]);
    } else {
      view.set(values, buf >>> align);
    }

    return arr;
  }

  baseModule.__allocArray = __allocArray;
  /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */

  function __getArrayView(arr) {
    const U32 = new Uint32Array(memory.buffer);
    const id = U32[arr + ID_OFFSET >>> 2];
    const info = getInfo(id);
    if (!(info & ARRAYBUFFERVIEW)) throw Error("not an array: " + id);
    const align = getValueAlign(info);
    var buf = U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    const length = info & ARRAY ? U32[arr + ARRAY_LENGTH_OFFSET >>> 2] : U32[buf + SIZE_OFFSET >>> 2] >>> align;
    return getView(align, info & VAL_SIGNED, info & VAL_FLOAT).subarray(buf >>>= align, buf + length);
  }

  baseModule.__getArrayView = __getArrayView;
  /** Copies an array's values from the module's memory. Infers the array type from RTTI. */

  function __getArray(arr) {
    const input = __getArrayView(arr);

    const len = input.length;
    const out = new Array(len);

    for (let i = 0; i < len; i++) out[i] = input[i];

    return out;
  }

  baseModule.__getArray = __getArray;
  /** Copies an ArrayBuffer's value from the module's memory. */

  function __getArrayBuffer(ptr) {
    const buffer = memory.buffer;
    const length = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2];
    return buffer.slice(ptr, ptr + length);
  }

  baseModule.__getArrayBuffer = __getArrayBuffer;
  /** Copies a typed array's values from the module's memory. */

  function getTypedArray(Type, alignLog2, ptr) {
    return new Type(getTypedArrayView(Type, alignLog2, ptr));
  }
  /** Gets a live view on a typed array's values in the module's memory. */


  function getTypedArrayView(Type, alignLog2, ptr) {
    const buffer = memory.buffer;
    const U32 = new Uint32Array(buffer);
    const bufPtr = U32[ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    return new Type(buffer, bufPtr, U32[bufPtr + SIZE_OFFSET >>> 2] >>> alignLog2);
  }

  baseModule.__getInt8Array = getTypedArray.bind(null, Int8Array, 0);
  baseModule.__getInt8ArrayView = getTypedArrayView.bind(null, Int8Array, 0);
  baseModule.__getUint8Array = getTypedArray.bind(null, Uint8Array, 0);
  baseModule.__getUint8ArrayView = getTypedArrayView.bind(null, Uint8Array, 0);
  baseModule.__getUint8ClampedArray = getTypedArray.bind(null, Uint8ClampedArray, 0);
  baseModule.__getUint8ClampedArrayView = getTypedArrayView.bind(null, Uint8ClampedArray, 0);
  baseModule.__getInt16Array = getTypedArray.bind(null, Int16Array, 1);
  baseModule.__getInt16ArrayView = getTypedArrayView.bind(null, Int16Array, 1);
  baseModule.__getUint16Array = getTypedArray.bind(null, Uint16Array, 1);
  baseModule.__getUint16ArrayView = getTypedArrayView.bind(null, Uint16Array, 1);
  baseModule.__getInt32Array = getTypedArray.bind(null, Int32Array, 2);
  baseModule.__getInt32ArrayView = getTypedArrayView.bind(null, Int32Array, 2);
  baseModule.__getUint32Array = getTypedArray.bind(null, Uint32Array, 2);
  baseModule.__getUint32ArrayView = getTypedArrayView.bind(null, Uint32Array, 2);

  if (BIGINT) {
    baseModule.__getInt64Array = getTypedArray.bind(null, BigInt64Array, 3);
    baseModule.__getInt64ArrayView = getTypedArrayView.bind(null, BigInt64Array, 3);
    baseModule.__getUint64Array = getTypedArray.bind(null, BigUint64Array, 3);
    baseModule.__getUint64ArrayView = getTypedArrayView.bind(null, BigUint64Array, 3);
  }

  baseModule.__getFloat32Array = getTypedArray.bind(null, Float32Array, 2);
  baseModule.__getFloat32ArrayView = getTypedArrayView.bind(null, Float32Array, 2);
  baseModule.__getFloat64Array = getTypedArray.bind(null, Float64Array, 3);
  baseModule.__getFloat64ArrayView = getTypedArrayView.bind(null, Float64Array, 3);
  /** Tests whether an object is an instance of the class represented by the specified base id. */

  function __instanceof(ptr, baseId) {
    const U32 = new Uint32Array(memory.buffer);
    var id = U32[ptr + ID_OFFSET >>> 2];

    if (id <= U32[rttiBase >>> 2]) {
      do if (id == baseId) return true; while (id = getBase(id));
    }

    return false;
  }

  baseModule.__instanceof = __instanceof; // Pull basic exports to baseModule so code in preInstantiate can use them

  baseModule.memory = baseModule.memory || memory;
  baseModule.table = baseModule.table || table; // Demangle exports and provide the usual utility on the prototype

  return demangle(rawExports, baseModule);
}

function isResponse(o) {
  return typeof Response !== "undefined" && o instanceof Response;
}
/** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */


function instantiate(_x, _x2) {
  return _instantiate.apply(this, arguments);
}

function _instantiate() {
  _instantiate = _asyncToGenerator(function* (source, imports) {
    if (isResponse(source = yield source)) return instantiateStreaming(source, imports);
    return postInstantiate(preInstantiate(imports || (imports = {})), yield WebAssembly.instantiate(source instanceof WebAssembly.Module ? source : yield WebAssembly.compile(source), imports));
  });
  return _instantiate.apply(this, arguments);
}

exports.instantiate = instantiate;
/** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */

function instantiateSync(source, imports) {
  return postInstantiate(preInstantiate(imports || (imports = {})), new WebAssembly.Instance(source instanceof WebAssembly.Module ? source : new WebAssembly.Module(source), imports));
}

exports.instantiateSync = instantiateSync;
/** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */

function instantiateStreaming(_x3, _x4) {
  return _instantiateStreaming.apply(this, arguments);
}

function _instantiateStreaming() {
  _instantiateStreaming = _asyncToGenerator(function* (source, imports) {
    if (!WebAssembly.instantiateStreaming) {
      return instantiate(isResponse(source = yield source) ? source.arrayBuffer() : source, imports);
    }

    return postInstantiate(preInstantiate(imports || (imports = {})), (yield WebAssembly.instantiateStreaming(source, imports)).instance);
  });
  return _instantiateStreaming.apply(this, arguments);
}

exports.instantiateStreaming = instantiateStreaming;
/** Demangles an AssemblyScript module's exports to a friendly object structure. */

function demangle(exports, baseModule) {
  var module = baseModule ? Object.create(baseModule) : {};
  var setArgumentsLength = exports["__argumentsLength"] ? function (length) {
    exports["__argumentsLength"].value = length;
  } : exports["__setArgumentsLength"] || exports["__setargc"] || function () {};

  for (let internalName in exports) {
    if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;
    const elem = exports[internalName];
    let parts = internalName.split(".");
    let curr = module;

    while (parts.length > 1) {
      let part = parts.shift();
      if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};
      curr = curr[part];
    }

    let name = parts[0];
    let hash = name.indexOf("#");

    if (hash >= 0) {
      let className = name.substring(0, hash);
      let classElem = curr[className];

      if (typeof classElem === "undefined" || !classElem.prototype) {
        let ctor = function (...args) {
          return ctor.wrap(ctor.prototype.constructor(0, ...args));
        };

        ctor.prototype = {
          valueOf: function valueOf() {
            return this[THIS];
          }
        };

        ctor.wrap = function (thisValue) {
          return Object.create(ctor.prototype, {
            [THIS]: {
              value: thisValue,
              writable: false
            }
          });
        };

        if (classElem) Object.getOwnPropertyNames(classElem).forEach(name => Object.defineProperty(ctor, name, Object.getOwnPropertyDescriptor(classElem, name)));
        curr[className] = ctor;
      }

      name = name.substring(hash + 1);
      curr = curr[className].prototype;

      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          let getter = exports[internalName.replace("set:", "get:")];
          let setter = exports[internalName.replace("get:", "set:")];
          Object.defineProperty(curr, name, {
            get: function () {
              return getter(this[THIS]);
            },
            set: function (value) {
              setter(this[THIS], value);
            },
            enumerable: true
          });
        }
      } else {
        if (name === 'constructor') {
          (curr[name] = (...args) => {
            setArgumentsLength(args.length);
            return elem(...args);
          }).original = elem;
        } else {
          // instance method
          (curr[name] = function (...args) {
            // !
            setArgumentsLength(args.length);
            return elem(this[THIS], ...args);
          }).original = elem;
        }
      }
    } else {
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          Object.defineProperty(curr, name, {
            get: exports[internalName.replace("set:", "get:")],
            set: exports[internalName.replace("get:", "set:")],
            enumerable: true
          });
        }
      } else if (typeof elem === "function" && elem !== setArgumentsLength) {
        (curr[name] = (...args) => {
          setArgumentsLength(args.length);
          return elem(...args);
        }).original = elem;
      } else {
        curr[name] = elem;
      }
    }
  }

  return module;
}

exports.demangle = demangle;

/***/ }),

/***/ 4148:
/*!**********************************************!*\
  !*** ./node_modules/rabin-wasm/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 21778)["default"]);

const Rabin = __webpack_require__(/*! ./rabin */ 24175);

const getRabin = __webpack_require__(/*! ../dist/rabin-wasm.node.js */ 28633);

const create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (avg, min, max, windowSize, polynomial) {
    const compiled = yield getRabin();
    return new Rabin(compiled, avg, min, max, windowSize, polynomial);
  });

  return function create(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  Rabin,
  create
};

/***/ }),

/***/ 24175:
/*!**********************************************!*\
  !*** ./node_modules/rabin-wasm/src/rabin.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Rabin fingerprinting
 *
 * @class Rabin
 */
class Rabin {
  /**
   * Creates an instance of Rabin.
   * @param { import("./../dist/rabin-wasm") } asModule
   * @param {number} [bits=12]
   * @param {number} [min=8 * 1024]
   * @param {number} [max=32 * 1024]
   * @param {number} polynomial
   * @memberof Rabin
   */
  constructor(asModule, bits = 12, min = 8 * 1024, max = 32 * 1024, windowSize = 64, polynomial) {
    this.bits = bits;
    this.min = min;
    this.max = max;
    this.asModule = asModule;
    this.rabin = new asModule.Rabin(bits, min, max, windowSize, polynomial);
    this.polynomial = polynomial;
  }
  /**
   * Fingerprints the buffer
   *
   * @param {Uint8Array} buf
   * @returns {Array<number>}
   * @memberof Rabin
   */


  fingerprint(buf) {
    const {
      __retain,
      __release,
      __allocArray,
      __getInt32Array,
      Int32Array_ID,
      Uint8Array_ID
    } = this.asModule;
    const lengths = new Int32Array(Math.ceil(buf.length / this.min));

    const lengthsPtr = __retain(__allocArray(Int32Array_ID, lengths));

    const pointer = __retain(__allocArray(Uint8Array_ID, buf));

    const out = this.rabin.fingerprint(pointer, lengthsPtr);

    const processed = __getInt32Array(out);

    __release(pointer);

    __release(lengthsPtr);

    const end = processed.indexOf(0);
    return end >= 0 ? processed.subarray(0, end) : processed;
  }

}

module.exports = Rabin;

/***/ }),

/***/ 20007:
/*!********************************************!*\
  !*** ./node_modules/sparse-array/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
 // JS treats subjects of bitwise operators as SIGNED 32 bit numbers,
// which means the maximum amount of bits we can store inside each byte
// is 7..

const BITS_PER_BYTE = 7;
module.exports = class SparseArray {
  constructor() {
    this._bitArrays = [];
    this._data = [];
    this._length = 0;
    this._changedLength = false;
    this._changedData = false;
  }

  set(index, value) {
    let pos = this._internalPositionFor(index, false);

    if (value === undefined) {
      // unsetting
      if (pos !== -1) {
        // remove item from bit array and array itself
        this._unsetInternalPos(pos);

        this._unsetBit(index);

        this._changedLength = true;
        this._changedData = true;
      }
    } else {
      let needsSort = false;

      if (pos === -1) {
        pos = this._data.length;

        this._setBit(index);

        this._changedData = true;
      } else {
        needsSort = true;
      }

      this._setInternalPos(pos, index, value, needsSort);

      this._changedLength = true;
    }
  }

  unset(index) {
    this.set(index, undefined);
  }

  get(index) {
    this._sortData();

    const pos = this._internalPositionFor(index, true);

    if (pos === -1) {
      return undefined;
    }

    return this._data[pos][1];
  }

  push(value) {
    this.set(this.length, value);
    return this.length;
  }

  get length() {
    this._sortData();

    if (this._changedLength) {
      const last = this._data[this._data.length - 1];
      this._length = last ? last[0] + 1 : 0;
      this._changedLength = false;
    }

    return this._length;
  }

  forEach(iterator) {
    let i = 0;

    while (i < this.length) {
      iterator(this.get(i), i, this);
      i++;
    }
  }

  map(iterator) {
    let i = 0;
    let mapped = new Array(this.length);

    while (i < this.length) {
      mapped[i] = iterator(this.get(i), i, this);
      i++;
    }

    return mapped;
  }

  reduce(reducer, initialValue) {
    let i = 0;
    let acc = initialValue;

    while (i < this.length) {
      const value = this.get(i);
      acc = reducer(acc, value, i);
      i++;
    }

    return acc;
  }

  find(finder) {
    let i = 0,
        found,
        last;

    while (i < this.length && !found) {
      last = this.get(i);
      found = finder(last);
      i++;
    }

    return found ? last : undefined;
  }

  _internalPositionFor(index, noCreate) {
    const bytePos = this._bytePosFor(index, noCreate);

    if (bytePos >= this._bitArrays.length) {
      return -1;
    }

    const byte = this._bitArrays[bytePos];
    const bitPos = index - bytePos * BITS_PER_BYTE;
    const exists = (byte & 1 << bitPos) > 0;

    if (!exists) {
      return -1;
    }

    const previousPopCount = this._bitArrays.slice(0, bytePos).reduce(popCountReduce, 0);

    const mask = ~(0xffffffff << bitPos + 1);
    const bytePopCount = popCount(byte & mask);
    const arrayPos = previousPopCount + bytePopCount - 1;
    return arrayPos;
  }

  _bytePosFor(index, noCreate) {
    const bytePos = Math.floor(index / BITS_PER_BYTE);
    const targetLength = bytePos + 1;

    while (!noCreate && this._bitArrays.length < targetLength) {
      this._bitArrays.push(0);
    }

    return bytePos;
  }

  _setBit(index) {
    const bytePos = this._bytePosFor(index, false);

    this._bitArrays[bytePos] |= 1 << index - bytePos * BITS_PER_BYTE;
  }

  _unsetBit(index) {
    const bytePos = this._bytePosFor(index, false);

    this._bitArrays[bytePos] &= ~(1 << index - bytePos * BITS_PER_BYTE);
  }

  _setInternalPos(pos, index, value, needsSort) {
    const data = this._data;
    const elem = [index, value];

    if (needsSort) {
      this._sortData();

      data[pos] = elem;
    } else {
      // new element. just shove it into the array
      // but be nice about where we shove it
      // in order to make sorting it later easier
      if (data.length) {
        if (data[data.length - 1][0] >= index) {
          data.push(elem);
        } else if (data[0][0] <= index) {
          data.unshift(elem);
        } else {
          const randomIndex = Math.round(data.length / 2);
          this._data = data.slice(0, randomIndex).concat(elem).concat(data.slice(randomIndex));
        }
      } else {
        this._data.push(elem);
      }

      this._changedData = true;
      this._changedLength = true;
    }
  }

  _unsetInternalPos(pos) {
    this._data.splice(pos, 1);
  }

  _sortData() {
    if (this._changedData) {
      this._data.sort(sortInternal);
    }

    this._changedData = false;
  }

  bitField() {
    const bytes = [];
    let pendingBitsForResultingByte = 8;
    let pendingBitsForNewByte = 0;
    let resultingByte = 0;
    let newByte;

    const pending = this._bitArrays.slice();

    while (pending.length || pendingBitsForNewByte) {
      if (pendingBitsForNewByte === 0) {
        newByte = pending.shift();
        pendingBitsForNewByte = 7;
      }

      const usingBits = Math.min(pendingBitsForNewByte, pendingBitsForResultingByte);
      const mask = ~(0b11111111 << usingBits);
      const masked = newByte & mask;
      resultingByte |= masked << 8 - pendingBitsForResultingByte;
      newByte = newByte >>> usingBits;
      pendingBitsForNewByte -= usingBits;
      pendingBitsForResultingByte -= usingBits;

      if (!pendingBitsForResultingByte || !pendingBitsForNewByte && !pending.length) {
        bytes.push(resultingByte);
        resultingByte = 0;
        pendingBitsForResultingByte = 8;
      }
    } // remove trailing zeroes


    for (var i = bytes.length - 1; i > 0; i--) {
      const value = bytes[i];

      if (value === 0) {
        bytes.pop();
      } else {
        break;
      }
    }

    return bytes;
  }

  compactArray() {
    this._sortData();

    return this._data.map(valueOnly);
  }

};

function popCountReduce(count, byte) {
  return count + popCount(byte);
}

function popCount(_v) {
  let v = _v;
  v = v - (v >> 1 & 0x55555555); // reuse input as temporary

  v = (v & 0x33333333) + (v >> 2 & 0x33333333); // temp

  return (v + (v >> 4) & 0xF0F0F0F) * 0x1010101 >> 24;
}

function sortInternal(a, b) {
  return a[0] - b[0];
}

function valueOnly(elem) {
  return elem[1];
}

/***/ }),

/***/ 94920:
/*!*************************************************************!*\
  !*** ./node_modules/throttled-queue/dist/throttledQueue.js ***!
  \*************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function throttledQueue(maxRequestsPerInterval, interval, evenlySpaced) {
  if (evenlySpaced === void 0) {
    evenlySpaced = false;
  }
  /**
   * If all requests should be evenly spaced, adjust to suit.
   */


  if (evenlySpaced) {
    interval = interval / maxRequestsPerInterval;
    maxRequestsPerInterval = 1;
  }

  var queue = [];
  var lastIntervalStart = 0;
  var numRequestsPerInterval = 0;
  var timeout;
  /**
   * Gets called at a set interval to remove items from the queue.
   * This is a self-adjusting timer, since the browser's setTimeout is highly inaccurate.
   */

  var dequeue = function () {
    var intervalEnd = lastIntervalStart + interval;
    var now = Date.now();
    /**
     * Adjust the timer if it was called too early.
     */

    if (now < intervalEnd) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      timeout !== undefined && clearTimeout(timeout);
      timeout = setTimeout(dequeue, intervalEnd - now);
      return;
    }

    lastIntervalStart = now;
    numRequestsPerInterval = 0;

    for (var _i = 0, _a = queue.splice(0, maxRequestsPerInterval); _i < _a.length; _i++) {
      var callback = _a[_i];
      numRequestsPerInterval++;
      void callback();
    }

    if (queue.length) {
      timeout = setTimeout(dequeue, interval);
    } else {
      timeout = undefined;
    }
  };

  return function (fn) {
    return new Promise(function (resolve, reject) {
      var callback = function () {
        return Promise.resolve().then(fn).then(resolve).catch(reject);
      };

      var now = Date.now();

      if (timeout === undefined && now - lastIntervalStart > interval) {
        lastIntervalStart = now;
        numRequestsPerInterval = 0;
      }

      if (numRequestsPerInterval++ < maxRequestsPerInterval) {
        void callback();
      } else {
        queue.push(callback);

        if (timeout === undefined) {
          timeout = setTimeout(dequeue, lastIntervalStart + interval - now);
        }
      }
    });
  };
}

module.exports = throttledQueue;
exports["default"] = throttledQueue;

/***/ }),

/***/ 64108:
/*!******************************************************!*\
  !*** ./src/app/mintear/mintear.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#contenTotal {\n  padding: 1.3rem;\n  display: flex;\n  flex-direction: row;\n}\n\n#columna1 {\n  width: 25%;\n  padding: 1rem;\n}\n\n#columna2 {\n  width: 40%;\n  padding: 1rem;\n}\n\n#columna3 {\n  width: 35%;\n  padding: 1rem;\n}\n\n#formM {\n  margin-top: 1rem;\n}\n\n.logoMint {\n  width: 60%;\n  cursor: pointer;\n}\n\n.color {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  margin: 4px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.color_S {\n  width: 50%;\n  height: 50px;\n  border: 2px gainsboro;\n  border-radius: 8px;\n  border: 0px solid gainsboro;\n}\n\n.paleta {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.1rem;\n}\n\n.colorseleccionado {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 30%;\n  margin-bottom: 1rem;\n}\n\n#configContent {\n  margin-top: 1rem;\n  padding: 1.5rem;\n  border: solid #451d35;\n  border-radius: 1rem;\n  border-width: 0.4rem 0rem 0.4rem 0.4rem;\n}\n\n#botonMint {\n  margin-top: 1rem;\n  font-size: 3.5rem;\n  height: 50%;\n}\n\n.contenCanvas {\n  align-items: center;\n  padding: 10px;\n}\n\n.canvas {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 4px solid gainsboro;\n  border-radius: 8px;\n  transition: all 0.15s ease-out; /* W3C */\n}\n\n.filaPixel {\n  display: flex;\n  flex-direction: row;\n  margin: 0px;\n}\n\n.pixel {\n  background-color: gainsboro;\n  border: 1px solid gray;\n  cursor: crosshair;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.pixelAux {\n  border: 0;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  visibility: hidden;\n  vertical-align: middle;\n}\n\n.pixeltarget {\n  background-color: black;\n  display: none;\n  width: 100%;\n  height: 100%;\n  margin-top: -100%;\n}\n\n.iconoBorrar {\n  font-size: 2.8rem;\n}\n\n.capaBorrar {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnRlYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURBOztBQUlBO0VBRUMsVUFBQTtFQUNBLGFBQUE7QUFGRDs7QUFJQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0FBRkE7O0FBSUE7RUFFQyxVQUFBO0VBQ0EsYUFBQTtBQUZEOztBQUlBO0VBRUcsZ0JBQUE7QUFGSDs7QUFLQTtFQUVHLFVBQUE7RUFDQSxlQUFBO0FBSEg7O0FBTUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhBOztBQU1BO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFIRDs7QUFNQztFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQUtDO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtDO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBSEg7O0FBT0M7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUxIOztBQVVDO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0FBUEo7O0FBVUM7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBLEVBQUEsUUFBQTtBQVBKOztBQVdDO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVJIOztBQVdDO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVEg7O0FBWUM7RUFFRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVZIOztBQWFBO0VBRUcsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhIOztBQWNBO0VBRUcsaUJBQUE7QUFaSDs7QUFlQTtFQUVHLGVBQUE7QUFiSCIsImZpbGUiOiJtaW50ZWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGVuVG90YWxcclxue1xyXG5wYWRkaW5nOiAxLjNyZW07XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNjb2x1bW5hMVxyXG57XHJcbiB3aWR0aDoyNSU7XHJcbiBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbiNjb2x1bW5hMlxyXG57XHJcbndpZHRoOjQwJTtcclxucGFkZGluZzogMXJlbTtcclxufVxyXG4jY29sdW1uYTNcclxue1xyXG4gd2lkdGg6MzUlO1xyXG4gcGFkZGluZzogMXJlbTtcclxufVxyXG4jZm9ybU1cclxue1xyXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubG9nb01pbnRcclxue1xyXG4gICB3aWR0aDogNjAlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvcntcclxud2lkdGg6MzBweDtcclxuaGVpZ2h0OjMwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5tYXJnaW46NHB4O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29sb3JfU3tcclxuIHdpZHRoOjUwJTtcclxuIGhlaWdodDogNTBweDtcclxuIGJvcmRlcjoycHggZ2FpbnNib3JvO1xyXG4gYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gYm9yZGVyOiAwcHggc29saWQgZ2FpbnNib3JvO1xyXG4gfVxyXG5cclxuIC5wYWxldGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuIH1cclxuIC5jb2xvcnNlbGVjY2lvbmFkb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiB9XHJcblxyXG4gI2NvbmZpZ0NvbnRlbnRcclxuIHtcclxuICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgcGFkZGluZzogMS41cmVtO1xyXG4gICBib3JkZXI6c29saWQgIzQ1MWQzNTtcclxuICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgYm9yZGVyLXdpZHRoOiAwLjRyZW0gMHJlbSAwLjRyZW0gMC40cmVtO1xyXG4gXHJcbiB9XHJcblxyXG4gI2JvdG9uTWludFxyXG4ge1xyXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgaGVpZ2h0OiA1MCU7XHJcbiB9XHJcblxyXG4gLy8gQ0FOVkFTIC8vIENBTlZBUyAvLyBDQU5WQVMgLy8gQ0FOVkFTXHJcblxyXG4gLmNvbnRlbkNhbnZhc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gfVxyXG5cclxuIC5jYW52YXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjo0cHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4xNXMgZWFzZS1vdXQ7ICAvKiBXM0MgKi9cclxuXHJcbiB9XHJcblxyXG4gLmZpbGFQaXhlbHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgbWFyZ2luOjBweDtcclxuIH1cclxuXHJcbiAucGl4ZWxcclxue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmdhaW5zYm9ybztcclxuICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgY3Vyc29yOmNyb3NzaGFpcjtcclxuICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgIG1hcmdpbjowO1xyXG4gICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4gLnBpeGVsQXV4XHJcbiB7XHJcbiAgIGJvcmRlcjowO1xyXG4gICBsaW5lLWhlaWdodDogMDtcclxuICAgbWFyZ2luOjA7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIFxyXG4gfVxyXG4ucGl4ZWx0YXJnZXRcclxue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICBkaXNwbGF5Om5vbmU7XHJcbiAgIHdpZHRoOjEwMCU7XHJcbiAgIGhlaWdodDoxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAtMTAwJTtcclxufVxyXG5cclxuLmljb25vQm9ycmFyXHJcbntcclxuICAgZm9udC1zaXplOjIuOHJlbTtcclxufVxyXG5cclxuLmNhcGFCb3JyYXJcclxue1xyXG4gICBjdXJzb3I6cG9pbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 36319:
/*!******************************************************!*\
  !*** ./src/app/mintear/mintear.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content>\n <div id=\"contenTotal\">\n      \n   <div id=\"columna1\">\n               \n                  <div>\n                  <img [routerLink]=\"['/home']\" src=\"/assets/graficos/thewalllogo.png\" class=\"logoMint\" alt=\"logo\">\n                  </div>\n\n                  <div id=\"configContent\">\n                    \n                    <div class=\"paleta\">\n                      <div #color1 (click)=\"CambiaColor(0)\" class=\"color colorFondo\"></div>\n                      <div #color2 (click)=\"CambiaColor(1)\" class=\"color\"></div>\n                      <div #color3 (click)=\"CambiaColor(2)\" class=\"color\"></div>\n                      <div #color4 (click)=\"CambiaColor(3)\" class=\"color\"></div>\n                      <div #color5 (click)=\"CambiaColor(4)\" class=\"color\"></div>\n                      <div id=\"borrar\" (click)=\"RellenaCanvasPixels(0)\" class=\"capaBorrar\" ><ion-icon name=\"trash-outline\" class=\"iconoBorrar\"></ion-icon></div>\n                     </div>\n                     <div class=\"colorseleccionado\">\n                     <div #colorSelect class=\"color_S\"></div>\n                     </div>\n                  \n\n                  <div>\n                    <span>Resolución</span>\n                    <ion-radio-group value=\"16\" (ionChange)=\"cambiaResCheck($event)\" >\n                      <ion-item>\n                        <ion-label>16 X 16 Pixels</ion-label>\n                        <ion-radio  value=\"16\" ></ion-radio>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>32 X 32 Pixels</ion-label>\n                        <ion-radio value=\"32\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n                  </div>\n\n                </div>\n                \n       </div>\n       <div id=\"columna2\">\n                     <div class=\"contenCanvas\" id=\"contenCanvas\">\n                      <div class=\"canvas\">\n                        <div class=\"filaPixel\" *ngFor=\"let fila of this.heightArray ;index as f\">\n                          <div class=pixel [ngStyle]=\"{'background-color':colores[0]}\" *ngFor=\"let pixels of this.widthArray;index as i\" id={{idpixel}}{{(i+1)+(f*widthP)}} (mouseenter)=\"PintaPixelArrastra((i+1)+(f*widthP),$event)\" (click)=\"PintaPixelClick((i+1)+(f*widthP),$event)\" (mouseenter)=\"MuestraPixelTarget((i+1)+(f*widthP),$event)\" (mouseleave)=\"OcultaPixelTarget((i+1)+(f*widthP),$event)\">\n                              \n                            <img src='/assets/graficos/pixelAux.png' class='pixelAux'>\n                            <div class=\"pixeltarget\" id={{idpixelTarget}}{{(i+1)+(f*widthP)}} > </div>\n\n                          </div>\n                        </div>\n                       </div>\n                   </div>\n       </div>\n       <div id=\"columna3\">\n                  <div id=\"formM\">\n                    <form [formGroup]=\"FormMint\" (ngSubmit)=\"sendMint(FormMint.value)\">\n                        <div>\n                          <ion-input style=\"width:100%\" maxlength=\"40\" formControlName=\"nombre\" type=\"text\" placeholder=\"Nombre\"></ion-input>\n                        </div>\n                        <div>\n                          <ion-textarea style=\"width:100%\" maxlength=\"280\" formControlName=\"descripcion\" rows=\"12\" placeholder=\"Descripción\"></ion-textarea>\n                        </div>\n                       <div>\n                          <ion-button id=\"botonMint\" type=\"submit\" value=\"mint\" style=\"width:100%\">MINT!</ion-button>\n                  \n                        </div>\n                        <div>\n                          <canvas #canvasFly style=\"visibility: hidden\"></canvas>\n                        </div>\n                      </form> \n                   </div>\n       </div>\n     </div>\n\n</ion-content>\n";

/***/ }),

/***/ 9207:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var AwaitValue = __webpack_require__(/*! ./AwaitValue.js */ 62364);

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
};

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

module.exports = AsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62364:
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AwaitValue.js ***!
  \***********************************************************/
/***/ ((module) => {

function _AwaitValue(value) {
  this.wrapped = value;
}

module.exports = _AwaitValue, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40226:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \**************************************************************/
/***/ ((module) => {

function _asyncIterator(iterable) {
  var method,
      async,
      sync,
      retry = 2;

  for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) {
    if (async && null != (method = iterable[async])) return method.call(iterable);
    if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
    async = "@@asyncIterator", sync = "@@iterator";
  }

  throw new TypeError("Object is not async iterable");
}

function AsyncFromSyncIterator(s) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var done = r.done;
    return Promise.resolve(r.value).then(function (value) {
      return {
        value: value,
        done: done
      };
    });
  }

  return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) {
    this.s = s, this.n = s.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function next() {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    "return": function _return(value) {
      var ret = this.s["return"];
      return void 0 === ret ? Promise.resolve({
        value: value,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
    },
    "throw": function _throw(value) {
      var thr = this.s["return"];
      return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(s);
}

module.exports = _asyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21778:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14997:
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var AwaitValue = __webpack_require__(/*! ./AwaitValue.js */ 62364);

function _awaitAsyncGenerator(value) {
  return new AwaitValue(value);
}

module.exports = _awaitAsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 73671:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator.js */ 9207);

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 74285:
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/esm/car-browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBlockIterator": () => (/* reexport safe */ _lib_iterator_js__WEBPACK_IMPORTED_MODULE_2__.CarBlockIterator),
/* harmony export */   "CarCIDIterator": () => (/* reexport safe */ _lib_iterator_js__WEBPACK_IMPORTED_MODULE_2__.CarCIDIterator),
/* harmony export */   "CarIndexedReader": () => (/* reexport safe */ _lib_indexed_reader_browser_js__WEBPACK_IMPORTED_MODULE_4__.CarIndexedReader),
/* harmony export */   "CarIndexer": () => (/* reexport safe */ _lib_indexer_js__WEBPACK_IMPORTED_MODULE_1__.CarIndexer),
/* harmony export */   "CarReader": () => (/* reexport safe */ _lib_reader_browser_js__WEBPACK_IMPORTED_MODULE_0__.CarReader),
/* harmony export */   "CarWriter": () => (/* reexport safe */ _lib_writer_browser_js__WEBPACK_IMPORTED_MODULE_3__.CarWriter)
/* harmony export */ });
/* harmony import */ var _lib_reader_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/reader-browser.js */ 15050);
/* harmony import */ var _lib_indexer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/indexer.js */ 54567);
/* harmony import */ var _lib_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/iterator.js */ 47306);
/* harmony import */ var _lib_writer_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/writer-browser.js */ 87575);
/* harmony import */ var _lib_indexed_reader_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/indexed-reader-browser.js */ 23609);







/***/ }),

/***/ 17625:
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/decoder.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncIterableReader": () => (/* binding */ asyncIterableReader),
/* harmony export */   "bytesReader": () => (/* binding */ bytesReader),
/* harmony export */   "chunkReader": () => (/* binding */ chunkReader),
/* harmony export */   "createDecoder": () => (/* binding */ createDecoder),
/* harmony export */   "readBlockHead": () => (/* binding */ readBlockHead),
/* harmony export */   "readHeader": () => (/* binding */ readHeader)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var varint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! varint */ 10977);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multiformats/hashes/digest */ 89314);
/* harmony import */ var _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ipld/dag-cbor */ 6540);







const CIDV0_BYTES = {
  SHA2_256: 18,
  LENGTH: 32,
  DAG_PB: 112
};

function readVarint(_x) {
  return _readVarint.apply(this, arguments);
}

function _readVarint() {
  _readVarint = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const bytes = yield reader.upTo(8);
    const i = varint__WEBPACK_IMPORTED_MODULE_3__.decode(bytes);
    reader.seek(varint__WEBPACK_IMPORTED_MODULE_3__.decode.bytes);
    return i;
  });
  return _readVarint.apply(this, arguments);
}

function readHeader(_x2) {
  return _readHeader.apply(this, arguments);
}

function _readHeader() {
  _readHeader = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const length = yield readVarint(reader);

    if (length === 0) {
      throw new Error('Invalid CAR header (zero length)');
    }

    const header = yield reader.exactly(length);
    reader.seek(length);
    const block = (0,_ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_6__.decode)(header);

    if (block == null || Array.isArray(block) || typeof block !== 'object') {
      throw new Error('Invalid CAR header format');
    }

    if (block.version !== 1) {
      if (typeof block.version === 'string') {
        throw new Error(`Invalid CAR version: "${block.version}"`);
      }

      throw new Error(`Invalid CAR version: ${block.version}`);
    }

    if (!Array.isArray(block.roots)) {
      throw new Error('Invalid CAR header format');
    }

    if (Object.keys(block).filter(p => p !== 'roots' && p !== 'version').length) {
      throw new Error('Invalid CAR header format');
    }

    return block;
  });
  return _readHeader.apply(this, arguments);
}

function readMultihash(_x3) {
  return _readMultihash.apply(this, arguments);
}

function _readMultihash() {
  _readMultihash = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const bytes = yield reader.upTo(8);
    varint__WEBPACK_IMPORTED_MODULE_3__.decode(bytes);
    const codeLength = varint__WEBPACK_IMPORTED_MODULE_3__.decode.bytes;
    const length = varint__WEBPACK_IMPORTED_MODULE_3__.decode(bytes.subarray(varint__WEBPACK_IMPORTED_MODULE_3__.decode.bytes));
    const lengthLength = varint__WEBPACK_IMPORTED_MODULE_3__.decode.bytes;
    const mhLength = codeLength + lengthLength + length;
    const multihash = yield reader.exactly(mhLength);
    reader.seek(mhLength);
    return multihash;
  });
  return _readMultihash.apply(this, arguments);
}

function readCid(_x4) {
  return _readCid.apply(this, arguments);
}

function _readCid() {
  _readCid = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const first = yield reader.exactly(2);

    if (first[0] === CIDV0_BYTES.SHA2_256 && first[1] === CIDV0_BYTES.LENGTH) {
      const bytes = yield reader.exactly(34);
      reader.seek(34);
      const multihash = multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_5__.decode(bytes);
      return multiformats_cid__WEBPACK_IMPORTED_MODULE_4__.CID.create(0, CIDV0_BYTES.DAG_PB, multihash);
    }

    const version = yield readVarint(reader);

    if (version !== 1) {
      throw new Error(`Unexpected CID version (${version})`);
    }

    const codec = yield readVarint(reader);
    const bytes = yield readMultihash(reader);
    const multihash = multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_5__.decode(bytes);
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_4__.CID.create(version, codec, multihash);
  });
  return _readCid.apply(this, arguments);
}

function readBlockHead(_x5) {
  return _readBlockHead.apply(this, arguments);
}

function _readBlockHead() {
  _readBlockHead = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const start = reader.pos;
    let length = yield readVarint(reader);

    if (length === 0) {
      throw new Error('Invalid CAR section (zero length)');
    }

    length += reader.pos - start;
    const cid = yield readCid(reader);
    const blockLength = length - (reader.pos - start);
    return {
      cid,
      length,
      blockLength
    };
  });
  return _readBlockHead.apply(this, arguments);
}

function readBlock(_x6) {
  return _readBlock.apply(this, arguments);
}

function _readBlock() {
  _readBlock = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const {
      cid,
      blockLength
    } = yield readBlockHead(reader);
    const bytes = yield reader.exactly(blockLength);
    reader.seek(blockLength);
    return {
      bytes,
      cid
    };
  });
  return _readBlock.apply(this, arguments);
}

function readBlockIndex(_x7) {
  return _readBlockIndex.apply(this, arguments);
}

function _readBlockIndex() {
  _readBlockIndex = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const offset = reader.pos;
    const {
      cid,
      length,
      blockLength
    } = yield readBlockHead(reader);
    const index = {
      cid,
      length,
      blockLength,
      offset,
      blockOffset: reader.pos
    };
    reader.seek(index.blockLength);
    return index;
  });
  return _readBlockIndex.apply(this, arguments);
}

function createDecoder(reader) {
  const headerPromise = readHeader(reader);
  return {
    header: () => headerPromise,

    blocks() {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
        yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(headerPromise);

        while ((yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reader.upTo(8))).length > 0) {
          yield yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(readBlock(reader));
        }
      })();
    },

    blocksIndex() {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
        yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(headerPromise);

        while ((yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reader.upTo(8))).length > 0) {
          yield yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(readBlockIndex(reader));
        }
      })();
    }

  };
}
function bytesReader(bytes) {
  let pos = 0;
  return {
    upTo(length) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return bytes.subarray(pos, pos + Math.min(length, bytes.length - pos));
      })();
    },

    exactly(length) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (length > bytes.length - pos) {
          throw new Error('Unexpected end of data');
        }

        return bytes.subarray(pos, pos + length);
      })();
    },

    seek(length) {
      pos += length;
    },

    get pos() {
      return pos;
    }

  };
}
function chunkReader(readChunk) {
  let pos = 0;
  let have = 0;
  let offset = 0;
  let currentChunk = new Uint8Array(0);

  const read = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (length) {
      have = currentChunk.length - offset;
      const bufa = [currentChunk.subarray(offset)];

      while (have < length) {
        const chunk = yield readChunk();

        if (chunk == null) {
          break;
        }

        if (have < 0) {
          if (chunk.length > have) {
            bufa.push(chunk.subarray(-have));
          }
        } else {
          bufa.push(chunk);
        }

        have += chunk.length;
      }

      currentChunk = new Uint8Array(bufa.reduce((p, c) => p + c.length, 0));
      let off = 0;

      for (const b of bufa) {
        currentChunk.set(b, off);
        off += b.length;
      }

      offset = 0;
    });

    return function read(_x8) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    upTo(length) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (currentChunk.length - offset < length) {
          yield read(length);
        }

        return currentChunk.subarray(offset, offset + Math.min(currentChunk.length - offset, length));
      })();
    },

    exactly(length) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (currentChunk.length - offset < length) {
          yield read(length);
        }

        if (currentChunk.length - offset < length) {
          throw new Error('Unexpected end of data');
        }

        return currentChunk.subarray(offset, offset + length);
      })();
    },

    seek(length) {
      pos += length;
      offset += length;
    },

    get pos() {
      return pos;
    }

  };
}
function asyncIterableReader(asyncIterable) {
  const iterator = asyncIterable[Symbol.asyncIterator]();

  function readChunk() {
    return _readChunk.apply(this, arguments);
  }

  function _readChunk() {
    _readChunk = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const next = yield iterator.next();

      if (next.done) {
        return null;
      }

      return next.value;
    });
    return _readChunk.apply(this, arguments);
  }

  return chunkReader(readChunk);
}

/***/ }),

/***/ 73394:
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/encoder.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEncoder": () => (/* binding */ createEncoder),
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var varint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! varint */ 10977);
/* harmony import */ var _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ipld/dag-cbor */ 6540);



function createHeader(roots) {
  const headerBytes = (0,_ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_2__.encode)({
    version: 1,
    roots
  });
  const varintBytes = varint__WEBPACK_IMPORTED_MODULE_1__.encode(headerBytes.length);
  const header = new Uint8Array(varintBytes.length + headerBytes.length);
  header.set(varintBytes, 0);
  header.set(headerBytes, varintBytes.length);
  return header;
}

function createEncoder(writer) {
  return {
    setRoots(roots) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const bytes = createHeader(roots);
        yield writer.write(bytes);
      })();
    },

    writeBlock(block) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          cid,
          bytes
        } = block;
        yield writer.write(new Uint8Array(varint__WEBPACK_IMPORTED_MODULE_1__.encode(cid.bytes.length + bytes.length)));
        yield writer.write(cid.bytes);

        if (bytes.length) {
          yield writer.write(bytes);
        }
      })();
    },

    close() {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return writer.end();
      })();
    }

  };
}



/***/ }),

/***/ 23609:
/*!******************************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/indexed-reader-browser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarIndexedReader": () => (/* binding */ CarIndexedReader),
/* harmony export */   "__browser": () => (/* binding */ __browser)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

class CarIndexedReader {
  static fromFile() {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Unsupported in this environment');
    })();
  }

}
const __browser = true;

/***/ }),

/***/ 54567:
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/indexer.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarIndexer": () => (/* binding */ CarIndexer)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ 17625);


class CarIndexer {
  constructor(version, roots, iterator) {
    this._version = version;
    this._roots = roots;
    this._iterator = iterator;
  }

  get version() {
    return this._version;
  }

  getRoots() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._roots;
    })();
  }

  [Symbol.asyncIterator]() {
    return this._iterator;
  }

  static fromBytes(bytes) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(bytes instanceof Uint8Array)) {
        throw new TypeError('fromBytes() requires a Uint8Array');
      }

      return decodeIndexerComplete((0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.bytesReader)(bytes));
    })();
  }

  static fromIterable(asyncIterable) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
        throw new TypeError('fromIterable() requires an async iterable');
      }

      return decodeIndexerComplete((0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.asyncIterableReader)(asyncIterable));
    })();
  }

}

function decodeIndexerComplete(_x) {
  return _decodeIndexerComplete.apply(this, arguments);
}

function _decodeIndexerComplete() {
  _decodeIndexerComplete = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const decoder = (0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.createDecoder)(reader);
    const {
      version,
      roots
    } = yield decoder.header();
    return new CarIndexer(version, roots, decoder.blocksIndex());
  });
  return _decodeIndexerComplete.apply(this, arguments);
}

/***/ }),

/***/ 73828:
/*!************************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/iterator-channel.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


function noop() {}

function create() {
  const chunkQueue = [];
  let drainer = null;
  let drainerResolver = noop;
  let ended = false;
  let outWait = null;
  let outWaitResolver = noop;

  const makeDrainer = () => {
    if (!drainer) {
      drainer = new Promise(resolve => {
        drainerResolver = () => {
          drainer = null;
          drainerResolver = noop;
          resolve();
        };
      });
    }

    return drainer;
  };

  const writer = {
    write(chunk) {
      chunkQueue.push(chunk);
      const drainer = makeDrainer();
      outWaitResolver();
      return drainer;
    },

    end() {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        ended = true;
        const drainer = makeDrainer();
        outWaitResolver();
        return drainer;
      })();
    }

  };
  const iterator = {
    next() {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const chunk = chunkQueue.shift();

        if (chunk) {
          if (chunkQueue.length === 0) {
            drainerResolver();
          }

          return {
            done: false,
            value: chunk
          };
        }

        if (ended) {
          drainerResolver();
          return {
            done: true,
            value: undefined
          };
        }

        if (!outWait) {
          outWait = new Promise(resolve => {
            outWaitResolver = () => {
              outWait = null;
              outWaitResolver = noop;
              return resolve(iterator.next());
            };
          });
        }

        return outWait;
      })();
    }

  };
  return {
    writer,
    iterator
  };
}

/***/ }),

/***/ 47306:
/*!****************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/iterator.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarBlockIterator": () => (/* binding */ CarBlockIterator),
/* harmony export */   "CarCIDIterator": () => (/* binding */ CarCIDIterator),
/* harmony export */   "CarIteratorBase": () => (/* binding */ CarIteratorBase)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ 17625);


class CarIteratorBase {
  constructor(version, roots, iterable) {
    this._version = version;
    this._roots = roots;
    this._iterable = iterable;
    this._decoded = false;
  }

  get version() {
    return this._version;
  }

  getRoots() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._roots;
    })();
  }

}
class CarBlockIterator extends CarIteratorBase {
  [Symbol.asyncIterator]() {
    if (this._decoded) {
      throw new Error('Cannot decode more than once');
    }

    if (!this._iterable) {
      throw new Error('Block iterable not found');
    }

    this._decoded = true;
    return this._iterable[Symbol.asyncIterator]();
  }

  static fromBytes(bytes) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        version,
        roots,
        iterator
      } = yield fromBytes(bytes);
      return new CarBlockIterator(version, roots, iterator);
    })();
  }

  static fromIterable(asyncIterable) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        version,
        roots,
        iterator
      } = yield fromIterable(asyncIterable);
      return new CarBlockIterator(version, roots, iterator);
    })();
  }

}
class CarCIDIterator extends CarIteratorBase {
  [Symbol.asyncIterator]() {
    if (this._decoded) {
      throw new Error('Cannot decode more than once');
    }

    if (!this._iterable) {
      throw new Error('Block iterable not found');
    }

    this._decoded = true;

    const iterable = this._iterable[Symbol.asyncIterator]();

    return {
      next() {
        return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const next = yield iterable.next();

          if (next.done) {
            return next;
          }

          return {
            done: false,
            value: next.value.cid
          };
        })();
      }

    };
  }

  static fromBytes(bytes) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        version,
        roots,
        iterator
      } = yield fromBytes(bytes);
      return new CarCIDIterator(version, roots, iterator);
    })();
  }

  static fromIterable(asyncIterable) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        version,
        roots,
        iterator
      } = yield fromIterable(asyncIterable);
      return new CarCIDIterator(version, roots, iterator);
    })();
  }

}

function fromBytes(_x) {
  return _fromBytes.apply(this, arguments);
}

function _fromBytes() {
  _fromBytes = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new TypeError('fromBytes() requires a Uint8Array');
    }

    return decodeIterator((0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.bytesReader)(bytes));
  });
  return _fromBytes.apply(this, arguments);
}

function fromIterable(_x2) {
  return _fromIterable.apply(this, arguments);
}

function _fromIterable() {
  _fromIterable = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (asyncIterable) {
    if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
      throw new TypeError('fromIterable() requires an async iterable');
    }

    return decodeIterator((0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.asyncIterableReader)(asyncIterable));
  });
  return _fromIterable.apply(this, arguments);
}

function decodeIterator(_x3) {
  return _decodeIterator.apply(this, arguments);
}

function _decodeIterator() {
  _decodeIterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const decoder = (0,_decoder_js__WEBPACK_IMPORTED_MODULE_1__.createDecoder)(reader);
    const {
      version,
      roots
    } = yield decoder.header();
    return {
      version,
      roots,
      iterator: decoder.blocks()
    };
  });
  return _decodeIterator.apply(this, arguments);
}

/***/ }),

/***/ 15050:
/*!**********************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/reader-browser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReader": () => (/* binding */ CarReader),
/* harmony export */   "__browser": () => (/* binding */ __browser)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decoder.js */ 17625);





class CarReader {
  constructor(version, roots, blocks) {
    this._version = version;
    this._roots = roots;
    this._blocks = blocks;
    this._keys = blocks.map(b => b.cid.toString());
  }

  get version() {
    return this._version;
  }

  getRoots() {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3._roots;
    })();
  }

  has(key) {
    var _this4 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4._keys.indexOf(key.toString()) > -1;
    })();
  }

  get(key) {
    var _this5 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const index = _this5._keys.indexOf(key.toString());

      return index > -1 ? _this5._blocks[index] : undefined;
    })();
  }

  blocks() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      for (const block of _this._blocks) {
        yield block;
      }
    })();
  }

  cids() {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      for (const block of _this2._blocks) {
        yield block.cid;
      }
    })();
  }

  static fromBytes(bytes) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(bytes instanceof Uint8Array)) {
        throw new TypeError('fromBytes() requires a Uint8Array');
      }

      return decodeReaderComplete((0,_decoder_js__WEBPACK_IMPORTED_MODULE_4__.bytesReader)(bytes));
    })();
  }

  static fromIterable(asyncIterable) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
        throw new TypeError('fromIterable() requires an async iterable');
      }

      return decodeReaderComplete((0,_decoder_js__WEBPACK_IMPORTED_MODULE_4__.asyncIterableReader)(asyncIterable));
    })();
  }

}

function decodeReaderComplete(_x) {
  return _decodeReaderComplete.apply(this, arguments);
}

function _decodeReaderComplete() {
  _decodeReaderComplete = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
    const decoder = (0,_decoder_js__WEBPACK_IMPORTED_MODULE_4__.createDecoder)(reader);
    const {
      version,
      roots
    } = yield decoder.header();
    const blocks = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(decoder.blocks()), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const block = _step.value;
        blocks.push(block);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return new CarReader(version, roots, blocks);
  });
  return _decodeReaderComplete.apply(this, arguments);
}

const __browser = true;

/***/ }),

/***/ 87575:
/*!**********************************************************!*\
  !*** ./node_modules/@ipld/car/esm/lib/writer-browser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarWriter": () => (/* binding */ CarWriter),
/* harmony export */   "CarWriterOut": () => (/* binding */ CarWriterOut),
/* harmony export */   "__browser": () => (/* binding */ __browser)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var _encoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encoder.js */ 73394);
/* harmony import */ var _iterator_channel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iterator-channel.js */ 73828);
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decoder.js */ 17625);





class CarWriter {
  constructor(roots, encoder) {
    this._encoder = encoder;
    this._mutex = encoder.setRoots(roots);
    this._ended = false;
  }

  put(block) {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(block.bytes instanceof Uint8Array) || !block.cid) {
        throw new TypeError('Can only write {cid, bytes} objects');
      }

      if (_this._ended) {
        throw new Error('Already closed');
      }

      const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(block.cid);

      if (!cid) {
        throw new TypeError('Can only write {cid, bytes} objects');
      }

      _this._mutex = _this._mutex.then(() => _this._encoder.writeBlock({
        cid,
        bytes: block.bytes
      }));
      return _this._mutex;
    })();
  }

  close() {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._ended) {
        throw new Error('Already closed');
      }

      yield _this2._mutex;
      _this2._ended = true;
      return _this2._encoder.close();
    })();
  }

  static create(roots) {
    roots = toRoots(roots);
    const {
      encoder,
      iterator
    } = encodeWriter();
    const writer = new CarWriter(roots, encoder);
    const out = new CarWriterOut(iterator);
    return {
      writer,
      out
    };
  }

  static createAppender() {
    const {
      encoder,
      iterator
    } = encodeWriter();

    encoder.setRoots = () => Promise.resolve();

    const writer = new CarWriter([], encoder);
    const out = new CarWriterOut(iterator);
    return {
      writer,
      out
    };
  }

  static updateRootsInBytes(bytes, roots) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reader = (0,_decoder_js__WEBPACK_IMPORTED_MODULE_4__.bytesReader)(bytes);
      yield (0,_decoder_js__WEBPACK_IMPORTED_MODULE_4__.readHeader)(reader);
      const newHeader = (0,_encoder_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)(roots);

      if (reader.pos !== newHeader.length) {
        throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${reader.pos} bytes, new header is ${newHeader.length} bytes)`);
      }

      bytes.set(newHeader, 0);
      return bytes;
    })();
  }

}
class CarWriterOut {
  constructor(iterator) {
    this._iterator = iterator;
  }

  [Symbol.asyncIterator]() {
    if (this._iterating) {
      throw new Error('Multiple iterator not supported');
    }

    this._iterating = true;
    return this._iterator;
  }

}

function encodeWriter() {
  const iw = (0,_iterator_channel_js__WEBPACK_IMPORTED_MODULE_3__.create)();
  const {
    writer,
    iterator
  } = iw;
  const encoder = (0,_encoder_js__WEBPACK_IMPORTED_MODULE_2__.createEncoder)(writer);
  return {
    encoder,
    iterator
  };
}

function toRoots(roots) {
  if (roots === undefined) {
    return [];
  }

  if (!Array.isArray(roots)) {
    const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(roots);

    if (!cid) {
      throw new TypeError('roots must be a single CID or an array of CIDs');
    }

    return [cid];
  }

  const _roots = [];

  for (const root of roots) {
    const _root = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(root);

    if (!_root) {
      throw new TypeError('roots must be a single CID or an array of CIDs');
    }

    _roots.push(_root);
  }

  return _roots;
}

const __browser = true;

/***/ }),

/***/ 6540:
/*!**************************************************!*\
  !*** ./node_modules/@ipld/dag-cbor/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cborg */ 61982);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 8371);


const CID_CBOR_TAG = 42;

function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }

  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(obj);

  if (!cid) {
    return null;
  }

  const bytes = new Uint8Array(cid.bytes.byteLength + 1);
  bytes.set(cid.bytes, 1);
  return [new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.tag, CID_CBOR_TAG), new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, bytes)];
}

function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}

function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }

  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }

  return null;
}

const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};

function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }

  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.decode(bytes.subarray(1));
}

const decodeOptions = {
  allowIndefinite: false,
  coerceUndefinedToNull: true,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__WEBPACK_IMPORTED_MODULE_0__.encode(node, encodeOptions);
const decode = data => cborg__WEBPACK_IMPORTED_MODULE_0__.decode(data, decodeOptions);

/***/ }),

/***/ 32184:
/*!****************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "createLink": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.createLink),
/* harmony export */   "createNode": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.createNode),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "prepare": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.prepare),
/* harmony export */   "validate": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.validate)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var _pb_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pb-decode.js */ 64287);
/* harmony import */ var _pb_encode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-encode.js */ 84973);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ 88396);




const name = 'dag-pb';
const code = 112;
function encode(node) {
  (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.validate)(node);
  const pbn = {};

  if (node.Links) {
    pbn.Links = node.Links.map(l => {
      const link = {};

      if (l.Hash) {
        link.Hash = l.Hash.bytes;
      }

      if (l.Name !== undefined) {
        link.Name = l.Name;
      }

      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }

      return link;
    });
  }

  if (node.Data) {
    pbn.Data = node.Data;
  }

  return (0,_pb_encode_js__WEBPACK_IMPORTED_MODULE_2__.encodeNode)(pbn);
}
function decode(bytes) {
  const pbn = (0,_pb_decode_js__WEBPACK_IMPORTED_MODULE_1__.decodeNode)(bytes);
  const node = {};

  if (pbn.Data) {
    node.Data = pbn.Data;
  }

  if (pbn.Links) {
    node.Links = pbn.Links.map(l => {
      const link = {};

      try {
        link.Hash = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(l.Hash);
      } catch (e) {}

      if (!link.Hash) {
        throw new Error('Invalid Hash field found in link, expected CID');
      }

      if (l.Name !== undefined) {
        link.Name = l.Name;
      }

      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }

      return link;
    });
  }

  return node;
}


/***/ }),

/***/ 64287:
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/pb-decode.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeNode": () => (/* binding */ decodeNode)
/* harmony export */ });
const textDecoder = new TextDecoder();

function decodeVarint(bytes, offset) {
  let v = 0;

  for (let shift = 0;; shift += 7) {
    if (shift >= 64) {
      throw new Error('protobuf: varint overflow');
    }

    if (offset >= bytes.length) {
      throw new Error('protobuf: unexpected end of data');
    }

    const b = bytes[offset++];
    v += shift < 28 ? (b & 127) << shift : (b & 127) * 2 ** shift;

    if (b < 128) {
      break;
    }
  }

  return [v, offset];
}

function decodeBytes(bytes, offset) {
  let byteLen;
  [byteLen, offset] = decodeVarint(bytes, offset);
  const postOffset = offset + byteLen;

  if (byteLen < 0 || postOffset < 0) {
    throw new Error('protobuf: invalid length');
  }

  if (postOffset > bytes.length) {
    throw new Error('protobuf: unexpected end of data');
  }

  return [bytes.subarray(offset, postOffset), postOffset];
}

function decodeKey(bytes, index) {
  let wire;
  [wire, index] = decodeVarint(bytes, index);
  return [wire & 7, wire >> 3, index];
}

function decodeLink(bytes) {
  const link = {};
  const l = bytes.length;
  let index = 0;

  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);

    if (fieldNum === 1) {
      if (link.Hash) {
        throw new Error('protobuf: (PBLink) duplicate Hash section');
      }

      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Hash`);
      }

      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Name before Hash');
      }

      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash');
      }

      ;
      [link.Hash, index] = decodeBytes(bytes, index);
    } else if (fieldNum === 2) {
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Name section');
      }

      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Name`);
      }

      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name');
      }

      let byts;
      [byts, index] = decodeBytes(bytes, index);
      link.Name = textDecoder.decode(byts);
    } else if (fieldNum === 3) {
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Tsize section');
      }

      if (wireType !== 0) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Tsize`);
      }

      ;
      [link.Tsize, index] = decodeVarint(bytes, index);
    } else {
      throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${fieldNum}`);
    }
  }

  if (index > l) {
    throw new Error('protobuf: (PBLink) unexpected end of data');
  }

  return link;
}

function decodeNode(bytes) {
  const l = bytes.length;
  let index = 0;
  let links;
  let linksBeforeData = false;
  let data;

  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);

    if (wireType !== 2) {
      throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${wireType}`);
    }

    if (fieldNum === 1) {
      if (data) {
        throw new Error('protobuf: (PBNode) duplicate Data section');
      }

      ;
      [data, index] = decodeBytes(bytes, index);

      if (links) {
        linksBeforeData = true;
      }
    } else if (fieldNum === 2) {
      if (linksBeforeData) {
        throw new Error('protobuf: (PBNode) duplicate Links section');
      } else if (!links) {
        links = [];
      }

      let byts;
      [byts, index] = decodeBytes(bytes, index);
      links.push(decodeLink(byts));
    } else {
      throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${fieldNum}`);
    }
  }

  if (index > l) {
    throw new Error('protobuf: (PBNode) unexpected end of data');
  }

  const node = {};

  if (data) {
    node.Data = data;
  }

  node.Links = links || [];
  return node;
}

/***/ }),

/***/ 84973:
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/pb-encode.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeNode": () => (/* binding */ encodeNode)
/* harmony export */ });
const textEncoder = new TextEncoder();
const maxInt32 = 2 ** 32;
const maxUInt32 = 2 ** 31;

function encodeLink(link, bytes) {
  let i = bytes.length;

  if (typeof link.Tsize === 'number') {
    if (link.Tsize < 0) {
      throw new Error('Tsize cannot be negative');
    }

    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error('Tsize too large for encoding');
    }

    i = encodeVarint(bytes, i, link.Tsize) - 1;
    bytes[i] = 24;
  }

  if (typeof link.Name === 'string') {
    const nameBytes = textEncoder.encode(link.Name);
    i -= nameBytes.length;
    bytes.set(nameBytes, i);
    i = encodeVarint(bytes, i, nameBytes.length) - 1;
    bytes[i] = 18;
  }

  if (link.Hash) {
    i -= link.Hash.length;
    bytes.set(link.Hash, i);
    i = encodeVarint(bytes, i, link.Hash.length) - 1;
    bytes[i] = 10;
  }

  return bytes.length - i;
}

function encodeNode(node) {
  const size = sizeNode(node);
  const bytes = new Uint8Array(size);
  let i = size;

  if (node.Data) {
    i -= node.Data.length;
    bytes.set(node.Data, i);
    i = encodeVarint(bytes, i, node.Data.length) - 1;
    bytes[i] = 10;
  }

  if (node.Links) {
    for (let index = node.Links.length - 1; index >= 0; index--) {
      const size = encodeLink(node.Links[index], bytes.subarray(0, i));
      i -= size;
      i = encodeVarint(bytes, i, size) - 1;
      bytes[i] = 18;
    }
  }

  return bytes;
}

function sizeLink(link) {
  let n = 0;

  if (link.Hash) {
    const l = link.Hash.length;
    n += 1 + l + sov(l);
  }

  if (typeof link.Name === 'string') {
    const l = textEncoder.encode(link.Name).length;
    n += 1 + l + sov(l);
  }

  if (typeof link.Tsize === 'number') {
    n += 1 + sov(link.Tsize);
  }

  return n;
}

function sizeNode(node) {
  let n = 0;

  if (node.Data) {
    const l = node.Data.length;
    n += 1 + l + sov(l);
  }

  if (node.Links) {
    for (const link of node.Links) {
      const l = sizeLink(link);
      n += 1 + l + sov(l);
    }
  }

  return n;
}

function encodeVarint(bytes, offset, v) {
  offset -= sov(v);
  const base = offset;

  while (v >= maxUInt32) {
    bytes[offset++] = v & 127 | 128;
    v /= 128;
  }

  while (v >= 128) {
    bytes[offset++] = v & 127 | 128;
    v >>>= 7;
  }

  bytes[offset] = v;
  return base;
}

function sov(x) {
  if (x % 2 === 0) {
    x++;
  }

  return Math.floor((len64(x) + 6) / 7);
}

function len64(x) {
  let n = 0;

  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n = 32;
  }

  if (x >= 1 << 16) {
    x >>>= 16;
    n += 16;
  }

  if (x >= 1 << 8) {
    x >>>= 8;
    n += 8;
  }

  return n + len8tab[x];
}

const len8tab = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];

/***/ }),

/***/ 88396:
/*!***************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/util.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLink": () => (/* binding */ createLink),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "prepare": () => (/* binding */ prepare),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ 8371);

const pbNodeProperties = ['Data', 'Links'];
const pbLinkProperties = ['Hash', 'Name', 'Tsize'];
const textEncoder = new TextEncoder();

function linkComparator(a, b) {
  if (a === b) {
    return 0;
  }

  const abuf = a.Name ? textEncoder.encode(a.Name) : [];
  const bbuf = b.Name ? textEncoder.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i];
      y = bbuf[i];
      break;
    }
  }

  return x < y ? -1 : y < x ? 1 : 0;
}

function hasOnlyProperties(node, properties) {
  return !Object.keys(node).some(p => !properties.includes(p));
}

function asLink(link) {
  if (typeof link.asCID === 'object') {
    const Hash = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(link);

    if (!Hash) {
      throw new TypeError('Invalid DAG-PB form');
    }

    return {
      Hash
    };
  }

  if (typeof link !== 'object' || Array.isArray(link)) {
    throw new TypeError('Invalid DAG-PB form');
  }

  const pbl = {};

  if (link.Hash) {
    let cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(link.Hash);

    try {
      if (!cid) {
        if (typeof link.Hash === 'string') {
          cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(link.Hash);
        } else if (link.Hash instanceof Uint8Array) {
          cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(link.Hash);
        }
      }
    } catch (e) {
      throw new TypeError(`Invalid DAG-PB form: ${e.message}`);
    }

    if (cid) {
      pbl.Hash = cid;
    }
  }

  if (!pbl.Hash) {
    throw new TypeError('Invalid DAG-PB form');
  }

  if (typeof link.Name === 'string') {
    pbl.Name = link.Name;
  }

  if (typeof link.Tsize === 'number') {
    pbl.Tsize = link.Tsize;
  }

  return pbl;
}

function prepare(node) {
  if (node instanceof Uint8Array || typeof node === 'string') {
    node = {
      Data: node
    };
  }

  if (typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }

  const pbn = {};

  if (node.Data !== undefined) {
    if (typeof node.Data === 'string') {
      pbn.Data = textEncoder.encode(node.Data);
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data;
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  }

  if (node.Links !== undefined) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  } else {
    pbn.Links = [];
  }

  return pbn;
}
function validate(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }

  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError('Invalid DAG-PB form (extraneous properties)');
  }

  if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
    throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)');
  }

  if (!Array.isArray(node.Links)) {
    throw new TypeError('Invalid DAG-PB form (Links must be an array)');
  }

  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i];

    if (!link || typeof link !== 'object' || Array.isArray(link)) {
      throw new TypeError('Invalid DAG-PB form (bad link object)');
    }

    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)');
    }

    if (!link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
    }

    if (link.Hash.asCID !== link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)');
    }

    if (link.Name !== undefined && typeof link.Name !== 'string') {
      throw new TypeError('Invalid DAG-PB form (link Name must be a string)');
    }

    if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) {
      throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)');
    }

    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)');
    }
  }
}
function createNode(data, links = []) {
  return prepare({
    Data: data,
    Links: links
  });
}
function createLink(name, size, cid) {
  return asLink({
    Hash: cid,
    Name: name,
    Tsize: size
  });
}

/***/ }),

/***/ 71723:
/*!*********************************************************!*\
  !*** ./node_modules/@multiformats/murmur3/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "murmur3128": () => (/* binding */ murmur3128),
/* harmony export */   "murmur332": () => (/* binding */ murmur332)
/* harmony export */ });
/* harmony import */ var multiformats_hashes_hasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/hashes/hasher */ 2323);
/* harmony import */ var multiformats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats */ 21231);
/* harmony import */ var murmurhash3js_revisited__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! murmurhash3js-revisited */ 48019);




function fromNumberTo32BitBuf(number) {
  const bytes = new Array(4);

  for (let i = 0; i < 4; i++) {
    bytes[i] = number & 255;
    number = number >> 8;
  }

  return new Uint8Array(bytes);
}

const murmur332 = (0,multiformats_hashes_hasher__WEBPACK_IMPORTED_MODULE_0__.from)({
  name: 'murmur3-32',
  code: 35,
  encode: input => fromNumberTo32BitBuf(murmurhash3js_revisited__WEBPACK_IMPORTED_MODULE_2__.x86.hash32(input))
});
const murmur3128 = (0,multiformats_hashes_hasher__WEBPACK_IMPORTED_MODULE_0__.from)({
  name: 'murmur3-128',
  code: 34,
  encode: input => multiformats__WEBPACK_IMPORTED_MODULE_1__.bytes.fromHex(murmurhash3js_revisited__WEBPACK_IMPORTED_MODULE_2__.x64.hash128(input))
});

/***/ }),

/***/ 45252:
/*!******************************************************!*\
  !*** ./node_modules/blockstore-core/esm/src/base.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseBlockstore": () => (/* binding */ BaseBlockstore)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var it_drain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! it-drain */ 97591);
/* harmony import */ var it_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! it-filter */ 84223);
/* harmony import */ var it_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! it-take */ 95709);
/* harmony import */ var it_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! it-all */ 54264);










const sortAll = (iterable, sorter) => {
  return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
    const values = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(it_all__WEBPACK_IMPORTED_MODULE_8__(iterable));
    yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values.sort(sorter)), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  })();
};

class BaseBlockstore {
  open() {
    return Promise.reject(new Error('.open is not implemented'));
  }

  close() {
    return Promise.reject(new Error('.close is not implemented'));
  }

  put(key, val, options) {
    return Promise.reject(new Error('.put is not implemented'));
  }

  get(key, options) {
    return Promise.reject(new Error('.get is not implemented'));
  }

  has(key, options) {
    return Promise.reject(new Error('.has is not implemented'));
  }

  delete(key, options) {
    return Promise.reject(new Error('.delete is not implemented'));
  }

  putMany(source, options = {}) {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(source), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const {
            key,
            value
          } = _step.value;
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.put(key, value, options));
          yield {
            key,
            value
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })();
  }

  getMany(source, options = {}) {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _iteratorAbruptCompletion2 = false;
      var _didIteratorError2 = false;

      var _iteratorError2;

      try {
        for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(source), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
          const key = _step2.value;
          yield _this2.get(key, options);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator2.return());
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    })();
  }

  deleteMany(source, options = {}) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _iteratorAbruptCompletion3 = false;
      var _didIteratorError3 = false;

      var _iteratorError3;

      try {
        for (var _iterator3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(source), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator3.next())).done; _iteratorAbruptCompletion3 = false) {
          const key = _step3.value;
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3.delete(key, options));
          yield key;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator3.return());
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    })();
  }

  batch() {
    var _this4 = this;

    let puts = [];
    let dels = [];
    return {
      put(key, value) {
        puts.push({
          key,
          value
        });
      },

      delete(key) {
        dels.push(key);
      },

      commit: function () {
        var _ref2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (options) {
          yield it_drain__WEBPACK_IMPORTED_MODULE_5__(_this4.putMany(puts, options));
          puts = [];
          yield it_drain__WEBPACK_IMPORTED_MODULE_5__(_this4.deleteMany(dels, options));
          dels = [];
        });

        return function commit(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }

  _all(q, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      throw new Error('._all is not implemented');
    })();
  }

  _allKeys(q, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      throw new Error('._allKeys is not implemented');
    })();
  }

  query(q, options) {
    let it = this._all(q, options);

    if (q.prefix != null) {
      it = it_filter__WEBPACK_IMPORTED_MODULE_6__(it, e => e.key.toString().startsWith(q.prefix || ''));
    }

    if (Array.isArray(q.filters)) {
      it = q.filters.reduce((it, f) => it_filter__WEBPACK_IMPORTED_MODULE_6__(it, f), it);
    }

    if (Array.isArray(q.orders)) {
      it = q.orders.reduce((it, f) => sortAll(it, f), it);
    }

    if (q.offset != null) {
      let i = 0;
      it = it_filter__WEBPACK_IMPORTED_MODULE_6__(it, () => i++ >= (q.offset || 0));
    }

    if (q.limit != null) {
      it = it_take__WEBPACK_IMPORTED_MODULE_7__(it, q.limit);
    }

    return it;
  }

  queryKeys(q, options) {
    let it = this._allKeys(q, options);

    if (q.prefix != null) {
      it = it_filter__WEBPACK_IMPORTED_MODULE_6__(it, cid => cid.toString().startsWith(q.prefix || ''));
    }

    if (Array.isArray(q.filters)) {
      it = q.filters.reduce((it, f) => it_filter__WEBPACK_IMPORTED_MODULE_6__(it, f), it);
    }

    if (Array.isArray(q.orders)) {
      it = q.orders.reduce((it, f) => sortAll(it, f), it);
    }

    if (q.offset != null) {
      let i = 0;
      it = it_filter__WEBPACK_IMPORTED_MODULE_6__(it, () => i++ >= q.offset);
    }

    if (q.limit != null) {
      it = it_take__WEBPACK_IMPORTED_MODULE_7__(it, q.limit);
    }

    return it;
  }

}

/***/ }),

/***/ 90220:
/*!********************************************************!*\
  !*** ./node_modules/blockstore-core/esm/src/errors.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abortedError": () => (/* binding */ abortedError),
/* harmony export */   "notFoundError": () => (/* binding */ notFoundError)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ 68263);

function notFoundError(err) {
  err = err || new Error('Not Found');
  return err_code__WEBPACK_IMPORTED_MODULE_0__(err, 'ERR_NOT_FOUND');
}
function abortedError(err) {
  err = err || new Error('Aborted');
  return err_code__WEBPACK_IMPORTED_MODULE_0__(err, 'ERR_ABORTED');
}

/***/ }),

/***/ 46340:
/*!*******************************************************!*\
  !*** ./node_modules/blockstore-core/esm/src/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseBlockstore": () => (/* reexport safe */ _base_js__WEBPACK_IMPORTED_MODULE_1__.BaseBlockstore),
/* harmony export */   "Errors": () => (/* binding */ Errors),
/* harmony export */   "MemoryBlockstore": () => (/* reexport safe */ _memory_js__WEBPACK_IMPORTED_MODULE_2__.MemoryBlockstore)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ 90220);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ 45252);
/* harmony import */ var _memory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory.js */ 51851);



const Errors = { ..._errors_js__WEBPACK_IMPORTED_MODULE_0__
};

/***/ }),

/***/ 51851:
/*!********************************************************!*\
  !*** ./node_modules/blockstore-core/esm/src/memory.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryBlockstore": () => (/* binding */ MemoryBlockstore)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ 45252);
/* harmony import */ var multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multiformats/bases/base32 */ 20559);
/* harmony import */ var multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! multiformats/codecs/raw */ 61608);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! multiformats/hashes/digest */ 89314);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors.js */ 90220);











class MemoryBlockstore extends _base_js__WEBPACK_IMPORTED_MODULE_5__.BaseBlockstore {
  constructor() {
    super();
    this.data = {};
  }

  open() {
    return Promise.resolve();
  }

  close() {
    return Promise.resolve();
  }

  put(key, val) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.data[multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.encode(key.multihash.bytes)] = val;
    })();
  }

  get(key) {
    var _this4 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const exists = yield _this4.has(key);
      if (!exists) throw _errors_js__WEBPACK_IMPORTED_MODULE_10__.notFoundError();
      return _this4.data[multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.encode(key.multihash.bytes)];
    })();
  }

  has(key) {
    var _this5 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.data[multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.encode(key.multihash.bytes)] !== undefined;
    })();
  }

  delete(key) {
    var _this6 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      delete _this6.data[multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.encode(key.multihash.bytes)];
    })();
  }

  _all() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.entries(_this.data).map(([key, value]) => ({
        key: multiformats_cid__WEBPACK_IMPORTED_MODULE_8__.CID.createV1(multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_7__.code, multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_9__.decode(multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.decode(key))),
        value
      }))), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    })();
  }

  _allKeys() {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object.entries(_this2.data).map(([key]) => multiformats_cid__WEBPACK_IMPORTED_MODULE_8__.CID.createV1(multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_7__.code, multiformats_hashes_digest__WEBPACK_IMPORTED_MODULE_9__.decode(multiformats_bases_base32__WEBPACK_IMPORTED_MODULE_6__.base32.decode(key))))), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    })();
  }

}

/***/ }),

/***/ 70718:
/*!*********************************************************!*\
  !*** ./node_modules/carbites/esm/lib/treewalk/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreewalkCarJoiner": () => (/* reexport safe */ _joiner_js__WEBPACK_IMPORTED_MODULE_1__.TreewalkCarJoiner),
/* harmony export */   "TreewalkCarSplitter": () => (/* reexport safe */ _splitter_js__WEBPACK_IMPORTED_MODULE_0__.TreewalkCarSplitter)
/* harmony export */ });
/* harmony import */ var _splitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splitter.js */ 22908);
/* harmony import */ var _joiner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joiner.js */ 96594);




/***/ }),

/***/ 96594:
/*!**********************************************************!*\
  !*** ./node_modules/carbites/esm/lib/treewalk/joiner.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreewalkCarJoiner": () => (/* binding */ TreewalkCarJoiner)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var _ipld_car__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ipld/car */ 74285);






class TreewalkCarJoiner {
  constructor(cars) {
    this._cars = Array.from(cars);
    if (!this._cars.length) throw new Error('missing CARs');
  }

  car() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      const reader = _this._cars[0];
      const roots = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reader.getRoots());
      const {
        writer,
        out
      } = _ipld_car__WEBPACK_IMPORTED_MODULE_5__.CarWriter.create(roots);

      const writeCar = /*#__PURE__*/function () {
        var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const written = new Set();

          const writeBlocks = /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (reader) {
              var _iteratorAbruptCompletion = false;
              var _didIteratorError = false;

              var _iteratorError;

              try {
                for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(reader.blocks()), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
                  const b = _step.value;
                  if (written.has(b.cid.toString())) continue;
                  yield writer.put(b);
                  written.add(b.cid.toString());
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (_iteratorAbruptCompletion && _iterator.return != null) {
                    yield _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });

            return function writeBlocks(_x) {
              return _ref2.apply(this, arguments);
            };
          }();

          try {
            yield writeBlocks(reader);

            for (const reader of _this._cars.slice(1)) {
              yield writeBlocks(reader);
            }
          } catch (err) {
            console.error(err);
          } finally {
            yield writer.close();
          }
        });

        return function writeCar() {
          return _ref.apply(this, arguments);
        };
      }();

      writeCar();
      yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(out), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    })();
  }

}

/***/ }),

/***/ 22908:
/*!************************************************************!*\
  !*** ./node_modules/carbites/esm/lib/treewalk/splitter.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreewalkCarSplitter": () => (/* binding */ TreewalkCarSplitter)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var _ipld_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ipld/car */ 74285);
/* harmony import */ var multiformats_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multiformats/block */ 52910);
/* harmony import */ var multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multiformats/codecs/raw */ 61608);
/* harmony import */ var _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ipld/dag-cbor */ 82096);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);









class TreewalkCarSplitter {
  constructor(reader, targetSize, options = {}) {
    if (typeof targetSize !== 'number' || targetSize <= 0) {
      throw new Error('invalid target chunk size');
    }

    this._reader = reader;
    this._targetSize = targetSize;
    this._decoders = [_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_8__, multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_6__, _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_7__, ...(options.decoders || [])];
  }

  cars() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      const roots = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_this._reader.getRoots());
      if (roots.length !== 1) throw new Error(`unexpected number of roots: ${roots.length}`);
      let channel;
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._cars(roots[0])), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const val = _step.value;
          channel = val.channel;
          if (val.out) yield val.out;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (!channel) {
        throw new Error('missing CAR writer channel');
      }

      channel.writer.close();
      yield channel.out;
    })();
  }

  _get(cid) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rawBlock = yield _this3._reader.get(cid);
      if (!rawBlock) throw new Error(`missing block for ${cid}`);
      const {
        bytes
      } = rawBlock;

      const decoder = _this3._decoders.find(d => d.code === cid.code);

      if (!decoder) throw new Error(`missing decoder for ${cid.code}`);
      return new multiformats_block__WEBPACK_IMPORTED_MODULE_5__.Block({
        cid,
        bytes,
        value: decoder.decode(bytes)
      });
    })();
  }

  _cars(cid, parents = [], channel = undefined) {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      const block = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2._get(cid));
      channel = channel || Object.assign(_ipld_car__WEBPACK_IMPORTED_MODULE_4__.CarWriter.create(cid), {
        size: 0
      });

      if (channel.size > 0 && channel.size + block.bytes.byteLength >= _this2._targetSize) {
        channel.writer.close();
        const {
          out
        } = channel;
        channel = newCar(parents);
        yield {
          channel,
          out
        };
      }

      parents = parents.concat(block);
      channel.size += block.bytes.byteLength;
      channel.writer.put(block);

      for (const [, cid] of block.links()) {
        var _iteratorAbruptCompletion2 = false;
        var _didIteratorError2 = false;

        var _iteratorError2;

        try {
          for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2._cars(cid, parents, channel)), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
            const val = _step2.value;
            channel = val.channel;
            yield val;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
              yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator2.return());
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      if (!channel) {
        throw new Error('missing CAR writer channel');
      }

      yield {
        channel
      };
    })();
  }

  static fromIterable(iterable, targetSize, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reader = yield _ipld_car__WEBPACK_IMPORTED_MODULE_4__.CarReader.fromIterable(iterable);
      return new TreewalkCarSplitter(reader, targetSize, options);
    })();
  }

  static fromBlob(blob, targetSize, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const buffer = yield blob.arrayBuffer();
      const reader = yield _ipld_car__WEBPACK_IMPORTED_MODULE_4__.CarReader.fromBytes(new Uint8Array(buffer));
      return new TreewalkCarSplitter(reader, targetSize, options);
    })();
  }

}

function newCar(parents) {
  const ch = Object.assign(_ipld_car__WEBPACK_IMPORTED_MODULE_4__.CarWriter.create(parents[0].cid), {
    size: parents.reduce((size, b) => size + b.bytes.byteLength, 0)
  });

  for (const b of parents) {
    ch.writer.put(b);
  }

  return ch;
}

/***/ }),

/***/ 82096:
/*!************************************************************************!*\
  !*** ./node_modules/carbites/node_modules/@ipld/dag-cbor/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cborg */ 61982);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 8371);


const CID_CBOR_TAG = 42;

function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }

  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(obj);

  if (!cid) {
    return null;
  }

  const bytes = new Uint8Array(cid.bytes.byteLength + 1);
  bytes.set(cid.bytes, 1);
  return [new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.tag, CID_CBOR_TAG), new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, bytes)];
}

function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}

function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }

  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }

  return null;
}

const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};

function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }

  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.decode(bytes.subarray(1));
}

const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__WEBPACK_IMPORTED_MODULE_0__.encode(node, encodeOptions);
const decode = data => cborg__WEBPACK_IMPORTED_MODULE_0__.decode(data, decodeOptions);

/***/ }),

/***/ 61982:
/*!*****************************************!*\
  !*** ./node_modules/cborg/esm/cborg.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.Token),
/* harmony export */   "Type": () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.Type),
/* harmony export */   "decode": () => (/* reexport safe */ _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__.decode),
/* harmony export */   "encode": () => (/* reexport safe */ _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__.encode)
/* harmony export */ });
/* harmony import */ var _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/encode.js */ 52193);
/* harmony import */ var _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/decode.js */ 69866);
/* harmony import */ var _lib_token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/token.js */ 6929);





/***/ }),

/***/ 43188:
/*!*********************************************!*\
  !*** ./node_modules/cborg/esm/lib/0uint.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeUint16": () => (/* binding */ decodeUint16),
/* harmony export */   "decodeUint32": () => (/* binding */ decodeUint32),
/* harmony export */   "decodeUint64": () => (/* binding */ decodeUint64),
/* harmony export */   "decodeUint8": () => (/* binding */ decodeUint8),
/* harmony export */   "encodeUint": () => (/* binding */ encodeUint),
/* harmony export */   "encodeUintValue": () => (/* binding */ encodeUintValue),
/* harmony export */   "readUint16": () => (/* binding */ readUint16),
/* harmony export */   "readUint32": () => (/* binding */ readUint32),
/* harmony export */   "readUint64": () => (/* binding */ readUint64),
/* harmony export */   "readUint8": () => (/* binding */ readUint8),
/* harmony export */   "uintBoundaries": () => (/* binding */ uintBoundaries)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ 88680);


const uintBoundaries = [24, 256, 65536, 4294967296, BigInt('18446744073709551616')];
function readUint8(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 1);
  const value = data[offset];

  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }

  return value;
}
function readUint16(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 2);
  const value = data[offset] << 8 | data[offset + 1];

  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }

  return value;
}
function readUint32(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 4);
  const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];

  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }

  return value;
}
function readUint64(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 8);
  const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);

  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }

  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value);
  }

  if (options.allowBigInt === true) {
    return value;
  }

  throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token) {
  return encodeUintValue(buf, 0, token.value);
}
function encodeUintValue(buf, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    buf.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    buf.push([major | 24, nuint]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    buf.push([major | 25, nuint >>> 8, nuint & 255]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    buf.push([major | 26, nuint >>> 24 & 255, nuint >>> 16 & 255, nuint >>> 8 & 255, nuint & 255]);
  } else {
    const buint = BigInt(uint);

    if (buint < uintBoundaries[4]) {
      const set = [major | 27, 0, 0, 0, 0, 0, 0, 0];
      let lo = Number(buint & BigInt(4294967295));
      let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
      set[8] = lo & 255;
      lo = lo >> 8;
      set[7] = lo & 255;
      lo = lo >> 8;
      set[6] = lo & 255;
      lo = lo >> 8;
      set[5] = lo & 255;
      set[4] = hi & 255;
      hi = hi >> 8;
      set[3] = hi & 255;
      hi = hi >> 8;
      set[2] = hi & 255;
      hi = hi >> 8;
      set[1] = hi & 255;
      buf.push(set);
    } else {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} encountered BigInt larger than allowable range`);
    }
  }
}

encodeUint.encodedSize = function encodedSize(token) {
  return encodeUintValue.encodedSize(token.value);
};

encodeUintValue.encodedSize = function encodedSize(uint) {
  if (uint < uintBoundaries[0]) {
    return 1;
  }

  if (uint < uintBoundaries[1]) {
    return 2;
  }

  if (uint < uintBoundaries[2]) {
    return 3;
  }

  if (uint < uintBoundaries[3]) {
    return 5;
  }

  return 9;
};

encodeUint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};

/***/ }),

/***/ 41726:
/*!***********************************************!*\
  !*** ./node_modules/cborg/esm/lib/1negint.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeNegint16": () => (/* binding */ decodeNegint16),
/* harmony export */   "decodeNegint32": () => (/* binding */ decodeNegint32),
/* harmony export */   "decodeNegint64": () => (/* binding */ decodeNegint64),
/* harmony export */   "decodeNegint8": () => (/* binding */ decodeNegint8),
/* harmony export */   "encodeNegint": () => (/* binding */ encodeNegint)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ 88680);



function decodeNegint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
  const int = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);

  if (typeof int !== 'bigint') {
    const value = -1 - int;

    if (value >= Number.MIN_SAFE_INTEGER) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, value, 9);
    }
  }

  if (options.allowBigInt !== true) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix} integers outside of the safe integer range are not supported`);
  }

  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, token.type.majorEncoded, unsigned);
}

encodeNegint.encodedSize = function encodedSize(token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;

  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[0]) {
    return 1;
  }

  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[1]) {
    return 2;
  }

  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[2]) {
    return 3;
  }

  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[3]) {
    return 5;
  }

  return 9;
};

encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};

/***/ }),

/***/ 27048:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/2bytes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareBytes": () => (/* binding */ compareBytes),
/* harmony export */   "decodeBytes16": () => (/* binding */ decodeBytes16),
/* harmony export */   "decodeBytes32": () => (/* binding */ decodeBytes32),
/* harmony export */   "decodeBytes64": () => (/* binding */ decodeBytes64),
/* harmony export */   "decodeBytes8": () => (/* binding */ decodeBytes8),
/* harmony export */   "decodeBytesCompact": () => (/* binding */ decodeBytesCompact),
/* harmony export */   "encodeBytes": () => (/* binding */ encodeBytes)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./byte-utils.js */ 19447);





function toToken(data, pos, prefix, length) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, pos, prefix + length);
  const buf = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, pos + prefix, pos + prefix + length);
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, buf, prefix + length);
}

function decodeBytesCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint8(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint16(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint32(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint64(data, pos + 1, options);

  if (typeof l === 'bigint') {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} 64-bit integer bytes lengths not supported`);
  }

  return toToken(data, pos, 9, l);
}

function tokenBytes(token) {
  if (token.encodedBytes === undefined) {
    token.encodedBytes = token.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string ? (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromString)(token.value) : token.value;
  }

  return token.encodedBytes;
}

function encodeBytes(buf, token) {
  const bytes = tokenBytes(token);
  _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUintValue(buf, token.type.majorEncoded, bytes.length);
  buf.push(bytes);
}

encodeBytes.encodedSize = function encodedSize(token) {
  const bytes = tokenBytes(token);
  return _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUintValue.encodedSize(bytes.length) + bytes.length;
};

encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};

function compareBytes(b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.compare)(b1, b2);
}

/***/ }),

/***/ 72406:
/*!***********************************************!*\
  !*** ./node_modules/cborg/esm/lib/3string.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeString16": () => (/* binding */ decodeString16),
/* harmony export */   "decodeString32": () => (/* binding */ decodeString32),
/* harmony export */   "decodeString64": () => (/* binding */ decodeString64),
/* harmony export */   "decodeString8": () => (/* binding */ decodeString8),
/* harmony export */   "decodeStringCompact": () => (/* binding */ decodeStringCompact),
/* harmony export */   "encodeString": () => (/* binding */ encodeString)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2bytes.js */ 27048);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./byte-utils.js */ 19447);






function toToken(data, pos, prefix, length, options) {
  const totLength = prefix + length;
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, pos, totLength);
  const tok = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string, (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_4__.toString)(data, pos + prefix, pos + totLength), totLength);

  if (options.retainStringBytes === true) {
    tok.byteValue = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_4__.slice)(data, pos + prefix, pos + totLength);
  }

  return tok;
}

function decodeStringCompact(data, pos, minor, options) {
  return toToken(data, pos, 1, minor, options);
}
function decodeString8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint8(data, pos + 1, options), options);
}
function decodeString16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint16(data, pos + 1, options), options);
}
function decodeString32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint32(data, pos + 1, options), options);
}
function decodeString64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint64(data, pos + 1, options);

  if (typeof l === 'bigint') {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} 64-bit integer string lengths not supported`);
  }

  return toToken(data, pos, 9, l, options);
}
const encodeString = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.encodeBytes;

/***/ }),

/***/ 19453:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/4array.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeArray16": () => (/* binding */ decodeArray16),
/* harmony export */   "decodeArray32": () => (/* binding */ decodeArray32),
/* harmony export */   "decodeArray64": () => (/* binding */ decodeArray64),
/* harmony export */   "decodeArray8": () => (/* binding */ decodeArray8),
/* harmony export */   "decodeArrayCompact": () => (/* binding */ decodeArrayCompact),
/* harmony export */   "decodeArrayIndefinite": () => (/* binding */ decodeArrayIndefinite),
/* harmony export */   "encodeArray": () => (/* binding */ encodeArray)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ 88680);




function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array, length, prefix);
}

function decodeArrayCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);

  if (typeof l === 'bigint') {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix} 64-bit integer array lengths not supported`);
  }

  return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix} indefinite length items not allowed`);
  }

  return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array.majorEncoded, token.value);
}
encodeArray.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

encodeArray.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue.encodedSize(token.value);
};

/***/ }),

/***/ 42532:
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/5map.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeMap16": () => (/* binding */ decodeMap16),
/* harmony export */   "decodeMap32": () => (/* binding */ decodeMap32),
/* harmony export */   "decodeMap64": () => (/* binding */ decodeMap64),
/* harmony export */   "decodeMap8": () => (/* binding */ decodeMap8),
/* harmony export */   "decodeMapCompact": () => (/* binding */ decodeMapCompact),
/* harmony export */   "decodeMapIndefinite": () => (/* binding */ decodeMapIndefinite),
/* harmony export */   "encodeMap": () => (/* binding */ encodeMap)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ 88680);




function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map, length, prefix);
}

function decodeMapCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);

  if (typeof l === 'bigint') {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix} 64-bit integer map lengths not supported`);
  }

  return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix} indefinite length items not allowed`);
  }

  return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map.majorEncoded, token.value);
}
encodeMap.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

encodeMap.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue.encodedSize(token.value);
};

/***/ }),

/***/ 155:
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/6tag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeTag16": () => (/* binding */ decodeTag16),
/* harmony export */   "decodeTag32": () => (/* binding */ decodeTag32),
/* harmony export */   "decodeTag64": () => (/* binding */ decodeTag64),
/* harmony export */   "decodeTag8": () => (/* binding */ decodeTag8),
/* harmony export */   "decodeTagCompact": () => (/* binding */ decodeTagCompact),
/* harmony export */   "encodeTag": () => (/* binding */ encodeTag)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ 43188);


function decodeTagCompact(_data, _pos, minor, _options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options), 9);
}
function encodeTag(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag.majorEncoded, token.value);
}
encodeTag.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

encodeTag.encodedSize = function encodedSize(token) {
  return _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue.encodedSize(token.value);
};

/***/ }),

/***/ 65395:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/7float.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeBreak": () => (/* binding */ decodeBreak),
/* harmony export */   "decodeFloat16": () => (/* binding */ decodeFloat16),
/* harmony export */   "decodeFloat32": () => (/* binding */ decodeFloat32),
/* harmony export */   "decodeFloat64": () => (/* binding */ decodeFloat64),
/* harmony export */   "decodeUndefined": () => (/* binding */ decodeUndefined),
/* harmony export */   "encodeFloat": () => (/* binding */ encodeFloat)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ 43188);



const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} undefined values are not supported`);
  } else if (options.coerceUndefinedToNull === true) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"], null, 1);
  }

  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} indefinite length items not allowed`);
  }

  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["break"], undefined, 1);
}

function createToken(value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} NaN values are not supported`);
    }

    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} Infinity values are not supported`);
    }
  }

  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float, value, bytes);
}

function decodeFloat16(data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token, options) {
  const float = token.value;

  if (float === false) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_NULL]);
  } else if (float === undefined) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;

    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);

      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 249;
        buf.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);

        if (float === decoded) {
          ui8a[0] = 250;
          buf.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }

    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 251;
      buf.push(ui8a.slice(0, 9));
    }
  }
}

encodeFloat.encodedSize = function encodedSize(token, options) {
  const float = token.value;

  if (float === false || float === true || float === null || float === undefined) {
    return 1;
  }

  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    let decoded = readFloat16(ui8a, 1);

    if (float === decoded || Number.isNaN(float)) {
      return 3;
    }

    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);

    if (float === decoded) {
      return 5;
    }
  }

  return 9;
};

const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);

function encodeFloat16(inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 31744, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 64512, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 32256, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 2139095040) >> 23;
    const mantissa = valu32 & 8388607;

    if (exponent === 255) {
      dataView.setUint16(0, 31744, false);
    } else if (exponent === 0) {
      dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
    } else {
      const logicalExponent = exponent - 127;

      if (logicalExponent < -24) {
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
      } else {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
      }
    }
  }
}

function readFloat16(ui8a, pos) {
  if (ui8a.length - pos < 2) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} not enough data for float16`);
  }

  const half = (ui8a[pos] << 8) + ui8a[pos + 1];

  if (half === 31744) {
    return Infinity;
  }

  if (half === 64512) {
    return -Infinity;
  }

  if (half === 32256) {
    return NaN;
  }

  const exp = half >> 10 & 31;
  const mant = half & 1023;
  let val;

  if (exp === 0) {
    val = mant * 2 ** -24;
  } else if (exp !== 31) {
    val = (mant + 1024) * 2 ** (exp - 25);
  } else {
    val = mant === 0 ? Infinity : NaN;
  }

  return half & 32768 ? -val : val;
}

function encodeFloat32(inp) {
  dataView.setFloat32(0, inp, false);
}

function readFloat32(ui8a, pos) {
  if (ui8a.length - pos < 4) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} not enough data for float32`);
  }

  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false);
}

function encodeFloat64(inp) {
  dataView.setFloat64(0, inp, false);
}

function readFloat64(ui8a, pos) {
  if (ui8a.length - pos < 8) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix} not enough data for float64`);
  }

  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false);
}

encodeFloat.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUint.compareTokens;

/***/ }),

/***/ 20757:
/*!******************************************!*\
  !*** ./node_modules/cborg/esm/lib/bl.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bl": () => (/* binding */ Bl)
/* harmony export */ });
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-utils.js */ 19447);

const defaultChunkSize = 256;
class Bl {
  constructor(chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    this.cursor = 0;
    this.maxCursor = -1;
    this.chunks = [];
    this._initReuseChunk = null;
  }

  reset() {
    this.cursor = 0;
    this.maxCursor = -1;

    if (this.chunks.length) {
      this.chunks = [];
    }

    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }

  push(bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;

    if (newMax <= this.maxCursor + 1) {
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      topChunk.set(bytes, chunkPos);
    } else {
      if (topChunk) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;

        if (chunkPos < topChunk.length) {
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }

      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        topChunk = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;

        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }

        topChunk.set(bytes, 0);
      } else {
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }

    this.cursor += bytes.length;
  }

  toBytes(reset = false) {
    let byts;

    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];

      if (reset && this.cursor > chunk.length / 2) {
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        byts = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.slice)(chunk, 0, this.cursor);
      }
    } else {
      byts = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.concat)(this.chunks, this.cursor);
    }

    if (reset) {
      this.reset();
    }

    return byts;
  }

}

/***/ }),

/***/ 19447:
/*!**************************************************!*\
  !*** ./node_modules/cborg/esm/lib/byte-utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alloc": () => (/* binding */ alloc),
/* harmony export */   "asU8A": () => (/* binding */ asU8A),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "decodeCodePointsArray": () => (/* binding */ decodeCodePointsArray),
/* harmony export */   "fromArray": () => (/* binding */ fromArray),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "slice": () => (/* binding */ slice),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "useBuffer": () => (/* binding */ useBuffer)
/* harmony export */ });
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

function isBuffer(buf) {
  return useBuffer && globalThis.Buffer.isBuffer(buf);
}

function asU8A(buf) {
  if (!(buf instanceof Uint8Array)) {
    return Uint8Array.from(buf);
  }

  return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end) => {
  return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end) => {
  return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? string => {
  return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : string => {
  return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = arr => {
  return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end) => {
  if (isBuffer(bytes)) {
    return new Uint8Array(bytes.subarray(start, end));
  }

  return bytes.slice(start, end);
} : (bytes, start, end) => {
  return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length) => {
  chunks = chunks.map(c => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
  return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length) => {
  const out = new Uint8Array(length);
  let off = 0;

  for (let b of chunks) {
    if (off + b.length > out.length) {
      b = b.subarray(0, out.length - off);
    }

    out.set(b, off);
    off += b.length;
  }

  return out;
};
const alloc = useBuffer ? size => {
  return globalThis.Buffer.allocUnsafe(size);
} : size => {
  return new Uint8Array(size);
};
const toHex = useBuffer ? d => {
  if (typeof d === 'string') {
    return d;
  }

  return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : d => {
  if (typeof d === 'string') {
    return d;
  }

  return Array.prototype.reduce.call(toBytes(d), (p, c) => `${p}${c.toString(16).padStart(2, '0')}`, '');
};
const fromHex = useBuffer ? hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }

  return globalThis.Buffer.from(hex, 'hex');
} : hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }

  if (!hex.length) {
    return new Uint8Array(0);
  }

  return new Uint8Array(hex.split('').map((c, i, d) => i % 2 === 0 ? `0x${c}${d[i + 1]}` : '').filter(Boolean).map(e => parseInt(e, 16)));
};

function toBytes(obj) {
  if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
    return obj;
  }

  if (obj instanceof ArrayBuffer) {
    return new Uint8Array(obj);
  }

  if (ArrayBuffer.isView(obj)) {
    return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
  }

  throw new Error('Unknown type, must be binary type');
}

function compare(b1, b2) {
  if (isBuffer(b1) && isBuffer(b2)) {
    return b1.compare(b2);
  }

  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue;
    }

    return b1[i] < b2[i] ? -1 : 1;
  }

  return 0;
}

function utf8ToBytes(string, units = Infinity) {
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        }

        leadSurrogate = codePoint;
        continue;
      }

      if (codePoint < 56320) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }

      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(239, 191, 189);
    }

    leadSurrogate = null;

    if (codePoint < 128) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function utf8Slice(buf, offset, end) {
  const res = [];

  while (offset < end) {
    const firstByte = buf[offset];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;

    if (offset + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[offset + 1];

          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;

            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[offset + 1];
          thirdByte = buf[offset + 2];

          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;

            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[offset + 1];
          thirdByte = buf[offset + 2];
          fourthByte = buf[offset + 3];

          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;

            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }

    res.push(codePoint);
    offset += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }

  let res = '';
  let i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

/***/ }),

/***/ 88680:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertEnoughData": () => (/* binding */ assertEnoughData),
/* harmony export */   "decodeErrPrefix": () => (/* binding */ decodeErrPrefix),
/* harmony export */   "encodeErrPrefix": () => (/* binding */ encodeErrPrefix),
/* harmony export */   "uintMinorPrefixBytes": () => (/* binding */ uintMinorPrefixBytes)
/* harmony export */ });
const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;

function assertEnoughData(data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${decodeErrPrefix} not enough data for type`);
  }
}



/***/ }),

/***/ 69866:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/decode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tokeniser": () => (/* binding */ Tokeniser),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "tokensToObject": () => (/* binding */ tokensToObject)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _jump_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jump.js */ 37245);



const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};

class Tokeniser {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
  }

  done() {
    return this.pos >= this.data.length;
  }

  next() {
    const byt = this.data[this.pos];
    let token = _jump_js__WEBPACK_IMPORTED_MODULE_2__.quick[byt];

    if (token === undefined) {
      const decoder = _jump_js__WEBPACK_IMPORTED_MODULE_2__.jump[byt];

      if (!decoder) {
        throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, '0')})`);
      }

      const minor = byt & 31;
      token = decoder(this.data, this.pos, minor, this.options);
    }

    this.pos += token.encodedLength;
    return token;
  }

}

const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');

function tokenToArray(token, tokeniser, options) {
  const arr = [];

  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);

    if (value === BREAK) {
      if (token.value === Infinity) {
        break;
      }

      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} got unexpected break to lengthed array`);
    }

    if (value === DONE) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token.value})`);
    }

    arr[i] = value;
  }

  return arr;
}

function tokenToMap(token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const obj = useMaps ? undefined : {};
  const m = useMaps ? new Map() : undefined;

  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);

    if (key === BREAK) {
      if (token.value === Infinity) {
        break;
      }

      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} got unexpected break to lengthed map`);
    }

    if (key === DONE) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`);
    }

    if (useMaps !== true && typeof key !== 'string') {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} non-string keys not supported (got ${typeof key})`);
    }

    const value = tokensToObject(tokeniser, options);

    if (value === DONE) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`);
    }

    if (useMaps) {
      m.set(key, value);
    } else {
      obj[key] = value;
    }
  }

  return useMaps ? m : obj;
}

function tokensToObject(tokeniser, options) {
  if (tokeniser.done()) {
    return DONE;
  }

  const token = tokeniser.next();

  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"]) {
    return BREAK;
  }

  if (token.type.terminal) {
    return token.value;
  }

  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array) {
    return tokenToArray(token, tokeniser, options);
  }

  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map) {
    return tokenToMap(token, tokeniser, options);
  }

  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.tag) {
    if (options.tags && typeof options.tags[token.value] === 'function') {
      const tagged = tokensToObject(tokeniser, options);
      return options.tags[token.value](tagged);
    }

    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} tag not supported (${token.value})`);
  }

  throw new Error('unsupported');
}

function decode(data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} data to decode must be a Uint8Array`);
  }

  options = Object.assign({}, defaultDecodeOptions, options);
  const tokeniser = options.tokenizer || new Tokeniser(data, options);
  const decoded = tokensToObject(tokeniser, options);

  if (decoded === DONE) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} did not find any content to decode`);
  }

  if (decoded === BREAK) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} got unexpected break`);
  }

  if (!tokeniser.done()) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix} too many terminals, data makes no sense`);
  }

  return decoded;
}



/***/ }),

/***/ 52193:
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/encode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ref": () => (/* binding */ Ref),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "encodeCustom": () => (/* binding */ encodeCustom),
/* harmony export */   "makeCborEncoders": () => (/* binding */ makeCborEncoders),
/* harmony export */   "objectToTokens": () => (/* binding */ objectToTokens)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ 55461);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _bl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bl.js */ 20757);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _jump_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jump.js */ 37245);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./byte-utils.js */ 19447);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _1negint_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./1negint.js */ 41726);
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./2bytes.js */ 27048);
/* harmony import */ var _3string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./3string.js */ 72406);
/* harmony import */ var _4array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./4array.js */ 19453);
/* harmony import */ var _5map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./5map.js */ 42532);
/* harmony import */ var _6tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./6tag.js */ 155);
/* harmony import */ var _7float_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./7float.js */ 65395);














const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken: _jump_js__WEBPACK_IMPORTED_MODULE_4__.quickEncodeToken
};
function makeCborEncoders() {
  const encoders = [];
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint.major] = _0uint_js__WEBPACK_IMPORTED_MODULE_6__.encodeUint;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint.major] = _1negint_js__WEBPACK_IMPORTED_MODULE_7__.encodeNegint;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes.major] = _2bytes_js__WEBPACK_IMPORTED_MODULE_8__.encodeBytes;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string.major] = _3string_js__WEBPACK_IMPORTED_MODULE_9__.encodeString;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array.major] = _4array_js__WEBPACK_IMPORTED_MODULE_10__.encodeArray;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map.major] = _5map_js__WEBPACK_IMPORTED_MODULE_11__.encodeMap;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.tag.major] = _6tag_js__WEBPACK_IMPORTED_MODULE_12__.encodeTag;
  encoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.float.major] = _7float_js__WEBPACK_IMPORTED_MODULE_13__.encodeFloat;
  return encoders;
}
const cborEncoders = makeCborEncoders();
const buf = new _bl_js__WEBPACK_IMPORTED_MODULE_2__.Bl();

class Ref {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }

  includes(obj) {
    let p = this;

    do {
      if (p.obj === obj) {
        return true;
      }
    } while (p = p.parent);

    return false;
  }

  static createCheck(stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_3__.encodeErrPrefix} object contains circular references`);
    }

    return new Ref(obj, stack);
  }

}

const simpleTokens = {
  null: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["null"], null),
  undefined: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.undefined, undefined),
  true: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["true"], true),
  false: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["false"], false),
  emptyArray: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, 0),
  emptyMap: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, 0)
};
const typeEncoders = {
  number(obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.float, obj);
    } else if (obj >= 0) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint, obj);
    } else {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, obj);
    }
  },

  bigint(obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint, obj);
    } else {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, obj);
    }
  },

  Uint8Array(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, obj);
  },

  string(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string, obj);
  },

  boolean(obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false;
  },

  null(_obj, _typ, _options, _refStack) {
    return simpleTokens.null;
  },

  undefined(_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined;
  },

  ArrayBuffer(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, new Uint8Array(obj));
  },

  DataView(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  },

  Array(obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [simpleTokens.emptyArray, new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])];
      }

      return simpleTokens.emptyArray;
    }

    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;

    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }

    if (options.addBreakTokens) {
      return [new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, obj.length), entries, new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])];
    }

    return [new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, obj.length), entries];
  },

  Object(obj, typ, options, refStack) {
    const isMap = typ !== 'Object';
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const length = isMap ? obj.size : keys.length;

    if (!length) {
      if (options.addBreakTokens === true) {
        return [simpleTokens.emptyMap, new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])];
      }

      return simpleTokens.emptyMap;
    }

    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;

    for (const key of keys) {
      entries[i++] = [objectToTokens(key, options, refStack), objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)];
    }

    sortMapEntries(entries, options);

    if (options.addBreakTokens) {
      return [new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, length), entries, new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])];
    }

    return [new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, length), entries];
  }

};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;

for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')) {
  typeEncoders[`${typ}Array`] = typeEncoders.DataView;
}

function objectToTokens(obj, options = {}, refStack) {
  const typ = (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.is)(obj);
  const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];

  if (typeof customTypeEncoder === 'function') {
    const tokens = customTypeEncoder(obj, typ, options, refStack);

    if (tokens != null) {
      return tokens;
    }
  }

  const typeEncoder = typeEncoders[typ];

  if (!typeEncoder) {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_3__.encodeErrPrefix} unsupported type: ${typ}`);
  }

  return typeEncoder(obj, typ, options, refStack);
}

function sortMapEntries(entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}

function mapSorter(e1, e2) {
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];

  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type);
  }

  const major = keyToken1.type.major;
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);

  if (tcmp === 0) {
    console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
  }

  return tcmp;
}

function tokensToEncoded(buf, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(buf, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](buf, tokens, options);
  }
}

function encodeCustom(data, encoders, options) {
  const tokens = objectToTokens(data, options);

  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);

    if (quickBytes) {
      return quickBytes;
    }

    const encoder = encoders[tokens.type.major];

    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      const buf = new _bl_js__WEBPACK_IMPORTED_MODULE_2__.Bl(size);
      encoder(buf, tokens, options);

      if (buf.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
      }

      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_5__.asU8A)(buf.chunks[0]);
    }
  }

  buf.reset();
  tokensToEncoded(buf, tokens, encoders, options);
  return buf.toBytes(true);
}

function encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return encodeCustom(data, cborEncoders, options);
}



/***/ }),

/***/ 55461:
/*!******************************************!*\
  !*** ./node_modules/cborg/esm/lib/is.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ is)
/* harmony export */ });
const typeofs = ['string', 'number', 'bigint', 'symbol'];
const objectTypeNames = ['Function', 'Generator', 'AsyncGenerator', 'GeneratorFunction', 'AsyncGeneratorFunction', 'AsyncFunction', 'Observable', 'Array', 'Buffer', 'Object', 'RegExp', 'Date', 'Error', 'Map', 'Set', 'WeakMap', 'WeakSet', 'ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'Promise', 'URL', 'HTMLElement', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array'];
function is(value) {
  if (value === null) {
    return 'null';
  }

  if (value === undefined) {
    return 'undefined';
  }

  if (value === true || value === false) {
    return 'boolean';
  }

  const typeOf = typeof value;

  if (typeofs.includes(typeOf)) {
    return typeOf;
  }

  if (typeOf === 'function') {
    return 'Function';
  }

  if (Array.isArray(value)) {
    return 'Array';
  }

  if (isBuffer(value)) {
    return 'Buffer';
  }

  const objectType = getObjectType(value);

  if (objectType) {
    return objectType;
  }

  return 'Object';
}

function isBuffer(value) {
  return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}

function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);

  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName;
  }

  return undefined;
}

/***/ }),

/***/ 37245:
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/jump.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jump": () => (/* binding */ jump),
/* harmony export */   "quick": () => (/* binding */ quick),
/* harmony export */   "quickEncodeToken": () => (/* binding */ quickEncodeToken)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ 6929);
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ 43188);
/* harmony import */ var _1negint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1negint.js */ 41726);
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2bytes.js */ 27048);
/* harmony import */ var _3string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3string.js */ 72406);
/* harmony import */ var _4array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./4array.js */ 19453);
/* harmony import */ var _5map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./5map.js */ 42532);
/* harmony import */ var _6tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./6tag.js */ 155);
/* harmony import */ var _7float_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./7float.js */ 65395);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common.js */ 88680);
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./byte-utils.js */ 19447);












function invalidMinor(data, pos, minor) {
  throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_9__.decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
}

function errorer(msg) {
  return () => {
    throw new Error(`${_common_js__WEBPACK_IMPORTED_MODULE_9__.decodeErrPrefix} ${msg}`);
  };
}

const jump = [];

for (let i = 0; i <= 23; i++) {
  jump[i] = invalidMinor;
}

jump[24] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint8;
jump[25] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint16;
jump[26] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint32;
jump[27] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint64;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;

for (let i = 32; i <= 55; i++) {
  jump[i] = invalidMinor;
}

jump[56] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint8;
jump[57] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint16;
jump[58] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint32;
jump[59] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint64;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;

for (let i = 64; i <= 87; i++) {
  jump[i] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytesCompact;
}

jump[88] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes8;
jump[89] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes16;
jump[90] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes32;
jump[91] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes64;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');

for (let i = 96; i <= 119; i++) {
  jump[i] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeStringCompact;
}

jump[120] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString8;
jump[121] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString16;
jump[122] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString32;
jump[123] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString64;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');

for (let i = 128; i <= 151; i++) {
  jump[i] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArrayCompact;
}

jump[152] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray8;
jump[153] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray16;
jump[154] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray32;
jump[155] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray64;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArrayIndefinite;

for (let i = 160; i <= 183; i++) {
  jump[i] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMapCompact;
}

jump[184] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap8;
jump[185] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap16;
jump[186] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap32;
jump[187] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap64;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMapIndefinite;

for (let i = 192; i <= 215; i++) {
  jump[i] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTagCompact;
}

jump[216] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag8;
jump[217] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag16;
jump[218] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag32;
jump[219] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag64;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;

for (let i = 224; i <= 243; i++) {
  jump[i] = errorer('simple values are not supported');
}

jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeUndefined;
jump[248] = errorer('simple values are not supported');
jump[249] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat16;
jump[250] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat32;
jump[251] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat64;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeBreak;
const quick = [];

for (let i = 0; i < 24; i++) {
  quick[i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, i, 1);
}

for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, i, 1);
}

quick[64] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, new Uint8Array(0), 1);
quick[96] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string, '', 1);
quick[128] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array, 0, 1);
quick[160] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map, 0, 1);
quick[244] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["false"], false, 1);
quick[245] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["true"], true, 1);
quick[246] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"], null, 1);
function quickEncodeToken(token) {
  switch (token.type) {
    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["false"]:
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([244]);

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["true"]:
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([245]);

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"]:
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([246]);

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes:
      if (!token.value.length) {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([64]);
      }

      return;

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string:
      if (token.value === '') {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([96]);
      }

      return;

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array:
      if (token.value === 0) {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([128]);
      }

      return;

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map:
      if (token.value === 0) {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([160]);
      }

      return;

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint:
      if (token.value < 24) {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([Number(token.value)]);
      }

      return;

    case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint:
      if (token.value >= -24) {
        return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([31 - Number(token.value)]);
      }

  }
}

/***/ }),

/***/ 6929:
/*!*********************************************!*\
  !*** ./node_modules/cborg/esm/lib/token.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "Type": () => (/* binding */ Type)
/* harmony export */ });
class Type {
  constructor(major, name, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name;
    this.terminal = terminal;
  }

  toString() {
    return `Type[${this.major}].${this.name}`;
  }

  compare(typ) {
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
  }

}

Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);

class Token {
  constructor(type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    this.encodedBytes = undefined;
    this.byteValue = undefined;
  }

  toString() {
    return `Token[${this.type}].${this.value}`;
  }

}



/***/ }),

/***/ 57933:
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-car/dist/esm/blockstore/memory.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryBlockStore": () => (/* binding */ MemoryBlockStore)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var multiformats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiformats */ 21231);
/* harmony import */ var blockstore_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blockstore-core */ 46340);




class MemoryBlockStore extends blockstore_core__WEBPACK_IMPORTED_MODULE_3__.BaseBlockstore {
  constructor() {
    super();
    this.store = new Map();
  }

  blocks() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      for (const [cidStr, bytes] of _this.store.entries()) {
        yield {
          cid: multiformats__WEBPACK_IMPORTED_MODULE_2__.CID.parse(cidStr),
          bytes
        };
      }
    })();
  }

  put(cid, bytes) {
    this.store.set(cid.toString(), bytes);
    return Promise.resolve();
  }

  get(cid) {
    const bytes = this.store.get(cid.toString());

    if (!bytes) {
      throw new Error(`block with cid ${cid.toString()} no found`);
    }

    return Promise.resolve(bytes);
  }

  has(cid) {
    return Promise.resolve(this.store.has(cid.toString()));
  }

  close() {
    this.store.clear();
    return Promise.resolve();
  }

}

/***/ }),

/***/ 11910:
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-car/dist/esm/pack/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unixfsImporterOptionsDefault": () => (/* binding */ unixfsImporterOptionsDefault)
/* harmony export */ });
/* harmony import */ var multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/hashes/sha2 */ 94228);

const unixfsImporterOptionsDefault = {
  cidVersion: 1,
  chunker: 'fixed',
  maxChunkSize: 262144,
  hasher: multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_0__.sha256,
  rawLeaves: true,
  wrapWithDirectory: true,
  maxChildrenPerNode: 174
};

/***/ }),

/***/ 50718:
/*!******************************************************!*\
  !*** ./node_modules/ipfs-car/dist/esm/pack/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pack": () => (/* binding */ pack)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var it_last__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-last */ 75761);
/* harmony import */ var it_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! it-pipe */ 83943);
/* harmony import */ var _ipld_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ipld/car */ 74285);
/* harmony import */ var ipfs_unixfs_importer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-unixfs-importer */ 39527);
/* harmony import */ var _utils_normalise_input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/normalise-input.js */ 14258);
/* harmony import */ var _blockstore_memory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blockstore/memory.js */ 57933);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants.js */ 11910);









function pack(_x) {
  return _pack.apply(this, arguments);
}

function _pack() {
  _pack = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    input,
    blockstore: userBlockstore,
    hasher,
    maxChunkSize,
    maxChildrenPerNode,
    wrapWithDirectory,
    rawLeaves
  }) {
    if (!input || Array.isArray(input) && !input.length) {
      throw new Error('missing input file(s)');
    }

    const blockstore = userBlockstore ? userBlockstore : new _blockstore_memory_js__WEBPACK_IMPORTED_MODULE_7__.MemoryBlockStore(); // Consume the source

    const rootEntry = yield it_last__WEBPACK_IMPORTED_MODULE_2__(it_pipe__WEBPACK_IMPORTED_MODULE_3__((0,_utils_normalise_input_js__WEBPACK_IMPORTED_MODULE_6__.getNormaliser)(input), source => (0,ipfs_unixfs_importer__WEBPACK_IMPORTED_MODULE_5__.importer)(source, blockstore, { ..._constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault,
      hasher: hasher || _constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault.hasher,
      maxChunkSize: maxChunkSize || _constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault.maxChunkSize,
      maxChildrenPerNode: maxChildrenPerNode || _constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault.maxChildrenPerNode,
      wrapWithDirectory: wrapWithDirectory === false ? false : _constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault.wrapWithDirectory,
      rawLeaves: rawLeaves == null ? _constants_js__WEBPACK_IMPORTED_MODULE_8__.unixfsImporterOptionsDefault.rawLeaves : rawLeaves
    })));

    if (!rootEntry || !rootEntry.cid) {
      throw new Error('given input could not be parsed correctly');
    }

    const root = rootEntry.cid;
    const {
      writer,
      out: carOut
    } = yield _ipld_car__WEBPACK_IMPORTED_MODULE_4__.CarWriter.create([root]);
    const carOutIter = carOut[Symbol.asyncIterator]();
    let writingPromise;

    const writeAll = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _iteratorAbruptCompletion = false;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(blockstore.blocks()), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
            const block = _step.value;
            // `await` will block until all bytes in `carOut` are consumed by the user
            // so we have backpressure here
            yield writer.put(block);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion && _iterator.return != null) {
              yield _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        yield writer.close();

        if (!userBlockstore) {
          yield blockstore.close();
        }
      });

      return function writeAll() {
        return _ref.apply(this, arguments);
      };
    }();

    const out = {
      [Symbol.asyncIterator]() {
        if (writingPromise != null) {
          throw new Error('Multiple iterator not supported');
        } // don't start writing until the user starts consuming the iterator


        writingPromise = writeAll();
        return {
          next() {
            return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const result = yield carOutIter.next();

              if (result.done) {
                yield writingPromise; // any errors will propagate from here
              }

              return result;
            })();
          }

        };
      }

    };
    return {
      root,
      out
    };
  });
  return _pack.apply(this, arguments);
}

/***/ }),

/***/ 14258:
/*!**********************************************************************!*\
  !*** ./node_modules/ipfs-car/dist/esm/pack/utils/normalise-input.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNormaliser": () => (/* binding */ getNormaliser)
/* harmony export */ });
/* harmony import */ var ipfs_core_utils_files_normalise_input_single__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ipfs-core-utils/files/normalise-input-single */ 51658);
/* harmony import */ var ipfs_core_utils_files_normalise_input_multiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/files/normalise-input-multiple */ 83108);



function isBytes(obj) {
  return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer;
}

function isBlob(obj) {
  return Boolean(obj.constructor) && (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') && typeof obj.stream === 'function';
}

function isSingle(input) {
  return typeof input === 'string' || input instanceof String || isBytes(input) || isBlob(input) || '_readableState' in input;
}
/**
 * Get a single or multiple normaliser depending on the input.
 */


function getNormaliser(input) {
  if (isSingle(input)) {
    return (0,ipfs_core_utils_files_normalise_input_single__WEBPACK_IMPORTED_MODULE_0__.normaliseInput)(input);
  } else {
    return (0,ipfs_core_utils_files_normalise_input_multiple__WEBPACK_IMPORTED_MODULE_1__.normaliseInput)(input);
  }
}

/***/ }),

/***/ 52664:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-multiple.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseCandidateMultiple": () => (/* binding */ normaliseCandidateMultiple)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! err-code */ 37940);
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! browser-readablestream-to-it */ 66636);
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! it-peekable */ 62129);
/* harmony import */ var it_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! it-map */ 51275);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ 72141);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ipfs-unixfs */ 90436);











function normaliseCandidateMultiple(_x, _x2) {
  return _normaliseCandidateMultiple.apply(this, arguments);
}

function _normaliseCandidateMultiple() {
  _normaliseCandidateMultiple = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (input, normaliseContent) {
    if (typeof input === 'string' || input instanceof String || (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isBytes)(input) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isBlob)(input) || input._readableState) {
      throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isReadableStream)(input)) {
      input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_6__(input);
    }

    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
      const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_7__(input);
      const {
        value,
        done
      } = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(peekable.peek());

      if (done) {
        yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])([]), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        return;
      }

      peekable.push(value);

      if (Number.isInteger(value)) {
        throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
      }

      if (value._readableState) {
        yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(it_map__WEBPACK_IMPORTED_MODULE_8__(peekable, value => toFileObject({
          content: value
        }, normaliseContent))), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        return;
      }

      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isBytes)(value)) {
        yield toFileObject({
          content: peekable
        }, normaliseContent);
        return;
      }

      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isFileObject)(value) || value[Symbol.iterator] || value[Symbol.asyncIterator] || (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isReadableStream)(value) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isBlob)(value)) {
        yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(it_map__WEBPACK_IMPORTED_MODULE_8__(peekable, value => toFileObject(value, normaliseContent))), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        return;
      }
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.isFileObject)(input)) {
      throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    }

    throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
  });
  return _normaliseCandidateMultiple.apply(this, arguments);
}

function toFileObject(_x3, _x4) {
  return _toFileObject.apply(this, arguments);
}

function _toFileObject() {
  _toFileObject = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input, normaliseContent) {
    const {
      path,
      mode,
      mtime,
      content
    } = input;
    const file = {
      path: path || '',
      mode: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_10__.parseMode)(mode),
      mtime: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_10__.parseMtime)(mtime)
    };

    if (content) {
      file.content = yield normaliseContent(content);
    } else if (!path) {
      file.content = yield normaliseContent(input);
    }

    return file;
  });
  return _toFileObject.apply(this, arguments);
}

/***/ }),

/***/ 43131:
/*!********************************************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-single.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseCandidateSingle": () => (/* binding */ normaliseCandidateSingle)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! err-code */ 37940);
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser-readablestream-to-it */ 66636);
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! it-peekable */ 62129);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ 72141);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ipfs-unixfs */ 90436);








function normaliseCandidateSingle(_x, _x2) {
  return _normaliseCandidateSingle.apply(this, arguments);
}

function _normaliseCandidateSingle() {
  _normaliseCandidateSingle = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (input, normaliseContent) {
    if (input === null || input === undefined) {
      throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
    }

    if (typeof input === 'string' || input instanceof String) {
      yield toFileObject(input.toString(), normaliseContent);
      return;
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isBytes)(input) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isBlob)(input)) {
      yield toFileObject(input, normaliseContent);
      return;
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isReadableStream)(input)) {
      input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_4__(input);
    }

    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
      const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_5__(input);
      const {
        value,
        done
      } = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(peekable.peek());

      if (done) {
        yield {
          content: []
        };
        return;
      }

      peekable.push(value);

      if (Number.isInteger(value) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isBytes)(value) || typeof value === 'string' || value instanceof String) {
        yield toFileObject(peekable, normaliseContent);
        return;
      }

      throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error('Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead'), 'ERR_UNEXPECTED_INPUT');
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isFileObject)(input)) {
      yield toFileObject(input, normaliseContent);
      return;
    }

    throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error('Unexpected input: cannot convert "' + typeof input + '" into ImportCandidate'), 'ERR_UNEXPECTED_INPUT');
  });
  return _normaliseCandidateSingle.apply(this, arguments);
}

function toFileObject(_x3, _x4) {
  return _toFileObject.apply(this, arguments);
}

function _toFileObject() {
  _toFileObject = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input, normaliseContent) {
    const {
      path,
      mode,
      mtime,
      content
    } = input;
    const file = {
      path: path || '',
      mode: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_7__.parseMode)(mode),
      mtime: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_7__.parseMtime)(mtime)
    };

    if (content) {
      file.content = yield normaliseContent(content);
    } else if (!path) {
      file.content = yield normaliseContent(input);
    }

    return file;
  });
  return _toFileObject.apply(this, arguments);
}

/***/ }),

/***/ 97655:
/*!***********************************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/normalise-content.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseContent": () => (/* binding */ normaliseContent)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! err-code */ 37940);
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uint8arrays/from-string */ 43807);
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser-readablestream-to-it */ 66636);
/* harmony import */ var blob_to_it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! blob-to-it */ 9392);
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! it-peekable */ 62129);
/* harmony import */ var it_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! it-all */ 54264);
/* harmony import */ var it_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! it-map */ 51275);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ 72141);












function toAsyncIterable(_x) {
  return _toAsyncIterable.apply(this, arguments);
}

function _toAsyncIterable() {
  _toAsyncIterable = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (thing) {
    yield thing;
  });
  return _toAsyncIterable.apply(this, arguments);
}

function normaliseContent(_x2) {
  return _normaliseContent.apply(this, arguments);
}

function _normaliseContent() {
  _normaliseContent = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isBytes)(input)) {
      return toAsyncIterable(toBytes(input));
    }

    if (typeof input === 'string' || input instanceof String) {
      return toAsyncIterable(toBytes(input.toString()));
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isBlob)(input)) {
      return blob_to_it__WEBPACK_IMPORTED_MODULE_6__(input);
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isReadableStream)(input)) {
      input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_5__(input);
    }

    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
      const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_7__(input);
      const {
        value,
        done
      } = yield peekable.peek();

      if (done) {
        return toAsyncIterable(new Uint8Array(0));
      }

      peekable.push(value);

      if (Number.isInteger(value)) {
        return toAsyncIterable(Uint8Array.from(yield it_all__WEBPACK_IMPORTED_MODULE_8__(peekable)));
      }

      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isBytes)(value) || typeof value === 'string' || value instanceof String) {
        return it_map__WEBPACK_IMPORTED_MODULE_9__(peekable, toBytes);
      }
    }

    throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
  });
  return _normaliseContent.apply(this, arguments);
}

function toBytes(chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }

  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }

  if (chunk instanceof ArrayBuffer) {
    return new Uint8Array(chunk);
  }

  if (Array.isArray(chunk)) {
    return Uint8Array.from(chunk);
  }

  return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_4__.fromString)(chunk.toString());
}

/***/ }),

/***/ 83108:
/*!******************************************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/normalise-input-multiple.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseInput": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-content.js */ 97655);
/* harmony import */ var _normalise_candidate_multiple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-candidate-multiple.js */ 52664);


function normaliseInput(input) {
  return (0,_normalise_candidate_multiple_js__WEBPACK_IMPORTED_MODULE_1__.normaliseCandidateMultiple)(input, _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__.normaliseContent);
}

/***/ }),

/***/ 51658:
/*!****************************************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseInput": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-content.js */ 97655);
/* harmony import */ var _normalise_candidate_single_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-candidate-single.js */ 43131);


function normaliseInput(input) {
  return (0,_normalise_candidate_single_js__WEBPACK_IMPORTED_MODULE_1__.normaliseCandidateSingle)(input, _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__.normaliseContent);
}

/***/ }),

/***/ 72141:
/*!***********************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-core-utils/esm/src/files/utils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isBytes": () => (/* binding */ isBytes),
/* harmony export */   "isFileObject": () => (/* binding */ isFileObject),
/* harmony export */   "isReadableStream": () => (/* binding */ isReadableStream)
/* harmony export */ });
function isBytes(obj) {
  return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer;
}
function isBlob(obj) {
  return obj.constructor && (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') && typeof obj.stream === 'function';
}
function isFileObject(obj) {
  return typeof obj === 'object' && (obj.path || obj.content);
}
const isReadableStream = value => value && typeof value.getReader === 'function';

/***/ }),

/***/ 90436:
/*!*************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-unixfs/esm/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnixFS": () => (/* binding */ UnixFS),
/* harmony export */   "parseMode": () => (/* binding */ parseMode),
/* harmony export */   "parseMtime": () => (/* binding */ parseMtime)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ 37940);
/* harmony import */ var _unixfs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unixfs.js */ 20057);


const PBData = _unixfs_js__WEBPACK_IMPORTED_MODULE_1__.Data;
const types = ['raw', 'directory', 'file', 'metadata', 'symlink', 'hamt-sharded-directory'];
const dirTypes = ['directory', 'hamt-sharded-directory'];
const DEFAULT_FILE_MODE = parseInt('0644', 8);
const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);
function parseMode(mode) {
  if (mode == null) {
    return undefined;
  }

  if (typeof mode === 'number') {
    return mode & 4095;
  }

  mode = mode.toString();

  if (mode.substring(0, 1) === '0') {
    return parseInt(mode, 8) & 4095;
  }

  return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
  if (input == null) {
    return undefined;
  }

  let mtime;

  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }

  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }

  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }

  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }

  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }

  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }

  return mtime;
}

class UnixFS {
  static unmarshal(marshaled) {
    const message = PBData.decode(marshaled);
    const decoded = PBData.toObject(message, {
      defaults: false,
      arrays: true,
      longs: Number,
      objects: false
    });
    const data = new UnixFS({
      type: types[decoded.Type],
      data: decoded.Data,
      blockSizes: decoded.blocksizes,
      mode: decoded.mode,
      mtime: decoded.mtime ? {
        secs: decoded.mtime.Seconds,
        nsecs: decoded.mtime.FractionalNanoseconds
      } : undefined
    });
    data._originalMode = decoded.mode || 0;
    return data;
  }

  constructor(options = {
    type: 'file'
  }) {
    const {
      type,
      data,
      blockSizes,
      hashType,
      fanout,
      mtime,
      mode
    } = options;

    if (type && !types.includes(type)) {
      throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }

    this.type = type || 'file';
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes || [];
    this._originalMode = 0;
    this.mode = parseMode(mode);

    if (mtime) {
      this.mtime = parseMtime(mtime);

      if (this.mtime && !this.mtime.nsecs) {
        this.mtime.nsecs = 0;
      }
    }
  }

  set mode(mode) {
    this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    const parsedMode = parseMode(mode);

    if (parsedMode !== undefined) {
      this._mode = parsedMode;
    }
  }

  get mode() {
    return this._mode;
  }

  isDirectory() {
    return Boolean(this.type && dirTypes.includes(this.type));
  }

  addBlockSize(size) {
    this.blockSizes.push(size);
  }

  removeBlockSize(index) {
    this.blockSizes.splice(index, 1);
  }

  fileSize() {
    if (this.isDirectory()) {
      return 0;
    }

    let sum = 0;
    this.blockSizes.forEach(size => {
      sum += size;
    });

    if (this.data) {
      sum += this.data.length;
    }

    return sum;
  }

  marshal() {
    let type;

    switch (this.type) {
      case 'raw':
        type = PBData.DataType.Raw;
        break;

      case 'directory':
        type = PBData.DataType.Directory;
        break;

      case 'file':
        type = PBData.DataType.File;
        break;

      case 'metadata':
        type = PBData.DataType.Metadata;
        break;

      case 'symlink':
        type = PBData.DataType.Symlink;
        break;

      case 'hamt-sharded-directory':
        type = PBData.DataType.HAMTShard;
        break;

      default:
        throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }

    let data = this.data;

    if (!this.data || !this.data.length) {
      data = undefined;
    }

    let mode;

    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);

      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = undefined;
      }

      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = undefined;
      }
    }

    let mtime;

    if (this.mtime != null) {
      const parsed = parseMtime(this.mtime);

      if (parsed) {
        mtime = {
          Seconds: parsed.secs,
          FractionalNanoseconds: parsed.nsecs
        };

        if (mtime.FractionalNanoseconds === 0) {
          delete mtime.FractionalNanoseconds;
        }
      }
    }

    const pbData = {
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? undefined : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    };
    return PBData.encode(pbData).finish();
  }

}



/***/ }),

/***/ 20057:
/*!**************************************************************************!*\
  !*** ./node_modules/ipfs-car/node_modules/ipfs-unixfs/esm/src/unixfs.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "Metadata": () => (/* binding */ Metadata),
/* harmony export */   "UnixTime": () => (/* binding */ UnixTime),
/* harmony export */   "default": () => (/* binding */ $root)
/* harmony export */ });
/* harmony import */ var protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! protobufjs/minimal.js */ 12369);

const $Reader = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Reader,
      $Writer = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Writer,
      $util = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util;
const $root = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] || (protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] = {});
const Data = $root.Data = (() => {
  function Data(p) {
    this.blocksizes = [];
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  Data.prototype.Type = 0;
  Data.prototype.Data = $util.newBuffer([]);
  Data.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.blocksizes = $util.emptyArray;
  Data.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.mode = 0;
  Data.prototype.mtime = null;

  Data.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    w.uint32(8).int32(m.Type);
    if (m.Data != null && Object.hasOwnProperty.call(m, 'Data')) w.uint32(18).bytes(m.Data);
    if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize')) w.uint32(24).uint64(m.filesize);

    if (m.blocksizes != null && m.blocksizes.length) {
      for (var i = 0; i < m.blocksizes.length; ++i) w.uint32(32).uint64(m.blocksizes[i]);
    }

    if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType')) w.uint32(40).uint64(m.hashType);
    if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout')) w.uint32(48).uint64(m.fanout);
    if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) w.uint32(56).uint32(m.mode);
    if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime')) $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
    return w;
  };

  Data.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.Data();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.Type = r.int32();
          break;

        case 2:
          m.Data = r.bytes();
          break;

        case 3:
          m.filesize = r.uint64();
          break;

        case 4:
          if (!(m.blocksizes && m.blocksizes.length)) m.blocksizes = [];

          if ((t & 7) === 2) {
            var c2 = r.uint32() + r.pos;

            while (r.pos < c2) m.blocksizes.push(r.uint64());
          } else m.blocksizes.push(r.uint64());

          break;

        case 5:
          m.hashType = r.uint64();
          break;

        case 6:
          m.fanout = r.uint64();
          break;

        case 7:
          m.mode = r.uint32();
          break;

        case 8:
          m.mtime = $root.UnixTime.decode(r, r.uint32());
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    if (!m.hasOwnProperty('Type')) throw $util.ProtocolError('missing required \'Type\'', {
      instance: m
    });
    return m;
  };

  Data.fromObject = function fromObject(d) {
    if (d instanceof $root.Data) return d;
    var m = new $root.Data();

    switch (d.Type) {
      case 'Raw':
      case 0:
        m.Type = 0;
        break;

      case 'Directory':
      case 1:
        m.Type = 1;
        break;

      case 'File':
      case 2:
        m.Type = 2;
        break;

      case 'Metadata':
      case 3:
        m.Type = 3;
        break;

      case 'Symlink':
      case 4:
        m.Type = 4;
        break;

      case 'HAMTShard':
      case 5:
        m.Type = 5;
        break;
    }

    if (d.Data != null) {
      if (typeof d.Data === 'string') $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);else if (d.Data.length) m.Data = d.Data;
    }

    if (d.filesize != null) {
      if ($util.Long) (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;else if (typeof d.filesize === 'string') m.filesize = parseInt(d.filesize, 10);else if (typeof d.filesize === 'number') m.filesize = d.filesize;else if (typeof d.filesize === 'object') m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
    }

    if (d.blocksizes) {
      if (!Array.isArray(d.blocksizes)) throw TypeError('.Data.blocksizes: array expected');
      m.blocksizes = [];

      for (var i = 0; i < d.blocksizes.length; ++i) {
        if ($util.Long) (m.blocksizes[i] = $util.Long.fromValue(d.blocksizes[i])).unsigned = true;else if (typeof d.blocksizes[i] === 'string') m.blocksizes[i] = parseInt(d.blocksizes[i], 10);else if (typeof d.blocksizes[i] === 'number') m.blocksizes[i] = d.blocksizes[i];else if (typeof d.blocksizes[i] === 'object') m.blocksizes[i] = new $util.LongBits(d.blocksizes[i].low >>> 0, d.blocksizes[i].high >>> 0).toNumber(true);
      }
    }

    if (d.hashType != null) {
      if ($util.Long) (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;else if (typeof d.hashType === 'string') m.hashType = parseInt(d.hashType, 10);else if (typeof d.hashType === 'number') m.hashType = d.hashType;else if (typeof d.hashType === 'object') m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
    }

    if (d.fanout != null) {
      if ($util.Long) (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;else if (typeof d.fanout === 'string') m.fanout = parseInt(d.fanout, 10);else if (typeof d.fanout === 'number') m.fanout = d.fanout;else if (typeof d.fanout === 'object') m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
    }

    if (d.mode != null) {
      m.mode = d.mode >>> 0;
    }

    if (d.mtime != null) {
      if (typeof d.mtime !== 'object') throw TypeError('.Data.mtime: object expected');
      m.mtime = $root.UnixTime.fromObject(d.mtime);
    }

    return m;
  };

  Data.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.arrays || o.defaults) {
      d.blocksizes = [];
    }

    if (o.defaults) {
      d.Type = o.enums === String ? 'Raw' : 0;
      if (o.bytes === String) d.Data = '';else {
        d.Data = [];
        if (o.bytes !== Array) d.Data = $util.newBuffer(d.Data);
      }

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.filesize = o.longs === String ? '0' : 0;

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.hashType = o.longs === String ? '0' : 0;

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.fanout = o.longs === String ? '0' : 0;

      d.mode = 0;
      d.mtime = null;
    }

    if (m.Type != null && m.hasOwnProperty('Type')) {
      d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
    }

    if (m.Data != null && m.hasOwnProperty('Data')) {
      d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
    }

    if (m.filesize != null && m.hasOwnProperty('filesize')) {
      if (typeof m.filesize === 'number') d.filesize = o.longs === String ? String(m.filesize) : m.filesize;else d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
    }

    if (m.blocksizes && m.blocksizes.length) {
      d.blocksizes = [];

      for (var j = 0; j < m.blocksizes.length; ++j) {
        if (typeof m.blocksizes[j] === 'number') d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];else d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
      }
    }

    if (m.hashType != null && m.hasOwnProperty('hashType')) {
      if (typeof m.hashType === 'number') d.hashType = o.longs === String ? String(m.hashType) : m.hashType;else d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
    }

    if (m.fanout != null && m.hasOwnProperty('fanout')) {
      if (typeof m.fanout === 'number') d.fanout = o.longs === String ? String(m.fanout) : m.fanout;else d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
    }

    if (m.mode != null && m.hasOwnProperty('mode')) {
      d.mode = m.mode;
    }

    if (m.mtime != null && m.hasOwnProperty('mtime')) {
      d.mtime = $root.UnixTime.toObject(m.mtime, o);
    }

    return d;
  };

  Data.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  Data.DataType = function () {
    const valuesById = {},
          values = Object.create(valuesById);
    values[valuesById[0] = 'Raw'] = 0;
    values[valuesById[1] = 'Directory'] = 1;
    values[valuesById[2] = 'File'] = 2;
    values[valuesById[3] = 'Metadata'] = 3;
    values[valuesById[4] = 'Symlink'] = 4;
    values[valuesById[5] = 'HAMTShard'] = 5;
    return values;
  }();

  return Data;
})();
const UnixTime = $root.UnixTime = (() => {
  function UnixTime(p) {
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  UnixTime.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
  UnixTime.prototype.FractionalNanoseconds = 0;

  UnixTime.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    w.uint32(8).int64(m.Seconds);
    if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, 'FractionalNanoseconds')) w.uint32(21).fixed32(m.FractionalNanoseconds);
    return w;
  };

  UnixTime.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.UnixTime();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.Seconds = r.int64();
          break;

        case 2:
          m.FractionalNanoseconds = r.fixed32();
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    if (!m.hasOwnProperty('Seconds')) throw $util.ProtocolError('missing required \'Seconds\'', {
      instance: m
    });
    return m;
  };

  UnixTime.fromObject = function fromObject(d) {
    if (d instanceof $root.UnixTime) return d;
    var m = new $root.UnixTime();

    if (d.Seconds != null) {
      if ($util.Long) (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;else if (typeof d.Seconds === 'string') m.Seconds = parseInt(d.Seconds, 10);else if (typeof d.Seconds === 'number') m.Seconds = d.Seconds;else if (typeof d.Seconds === 'object') m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
    }

    if (d.FractionalNanoseconds != null) {
      m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
    }

    return m;
  };

  UnixTime.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.defaults) {
      if ($util.Long) {
        var n = new $util.Long(0, 0, false);
        d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.Seconds = o.longs === String ? '0' : 0;

      d.FractionalNanoseconds = 0;
    }

    if (m.Seconds != null && m.hasOwnProperty('Seconds')) {
      if (typeof m.Seconds === 'number') d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;else d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
    }

    if (m.FractionalNanoseconds != null && m.hasOwnProperty('FractionalNanoseconds')) {
      d.FractionalNanoseconds = m.FractionalNanoseconds;
    }

    return d;
  };

  UnixTime.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  return UnixTime;
})();
const Metadata = $root.Metadata = (() => {
  function Metadata(p) {
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  Metadata.prototype.MimeType = '';

  Metadata.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    if (m.MimeType != null && Object.hasOwnProperty.call(m, 'MimeType')) w.uint32(10).string(m.MimeType);
    return w;
  };

  Metadata.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.Metadata();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.MimeType = r.string();
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    return m;
  };

  Metadata.fromObject = function fromObject(d) {
    if (d instanceof $root.Metadata) return d;
    var m = new $root.Metadata();

    if (d.MimeType != null) {
      m.MimeType = String(d.MimeType);
    }

    return m;
  };

  Metadata.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.defaults) {
      d.MimeType = '';
    }

    if (m.MimeType != null && m.hasOwnProperty('MimeType')) {
      d.MimeType = m.MimeType;
    }

    return d;
  };

  Metadata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  return Metadata;
})();


/***/ }),

/***/ 20797:
/*!*************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/chunker/fixed-size.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bl/BufferList.js */ 73282);





function fixedSizeChunker(_x, _x2) {
  return _fixedSizeChunker.apply(this, arguments);
}

function _fixedSizeChunker() {
  _fixedSizeChunker = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source, options) {
    let bl = new bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__();
    let currentLength = 0;
    let emitted = false;
    const maxChunkSize = options.maxChunkSize;
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const buffer = _step.value;
        bl.append(buffer);
        currentLength += buffer.length;

        while (currentLength >= maxChunkSize) {
          yield bl.slice(0, maxChunkSize);
          emitted = true;

          if (maxChunkSize === bl.length) {
            bl = new bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__();
            currentLength = 0;
          } else {
            const newBl = new bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__();
            newBl.append(bl.shallowSlice(maxChunkSize));
            bl = newBl;
            currentLength -= maxChunkSize;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (!emitted || currentLength) {
      yield bl.slice(0, currentLength);
    }
  });
  return _fixedSizeChunker.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fixedSizeChunker);

/***/ }),

/***/ 35824:
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/chunker/rabin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bl/BufferList.js */ 73282);
/* harmony import */ var rabin_wasm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rabin-wasm */ 4148);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! err-code */ 47847);







function rabinChunker(_x, _x2) {
  return _rabinChunker.apply(this, arguments);
}

function _rabinChunker() {
  _rabinChunker = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source, options) {
    let min, max, avg;

    if (options.minChunkSize && options.maxChunkSize && options.avgChunkSize) {
      avg = options.avgChunkSize;
      min = options.minChunkSize;
      max = options.maxChunkSize;
    } else if (!options.avgChunkSize) {
      throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('please specify an average chunk size'), 'ERR_INVALID_AVG_CHUNK_SIZE');
    } else {
      avg = options.avgChunkSize;
      min = avg / 3;
      max = avg + avg / 2;
    }

    if (min < 16) {
      throw err_code__WEBPACK_IMPORTED_MODULE_5__(new Error('rabin min must be greater than 16'), 'ERR_INVALID_MIN_CHUNK_SIZE');
    }

    if (max < min) {
      max = min;
    }

    if (avg < min) {
      avg = min;
    }

    const sizepow = Math.floor(Math.log2(avg));
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(rabin(source, {
        min: min,
        max: max,
        bits: sizepow,
        window: options.window,
        polynomial: options.polynomial
      })), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const chunk = _step.value;
        yield chunk;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _rabinChunker.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rabinChunker);

function rabin(_x3, _x4) {
  return _rabin.apply(this, arguments);
}

function _rabin() {
  _rabin = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source, options) {
    const r = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,rabin_wasm__WEBPACK_IMPORTED_MODULE_4__.create)(options.bits, options.min, options.max, options.window));
    const buffers = new bl_BufferList_js__WEBPACK_IMPORTED_MODULE_3__();
    var _iteratorAbruptCompletion2 = false;
    var _didIteratorError2 = false;

    var _iteratorError2;

    try {
      for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
        const chunk = _step2.value;
        buffers.append(chunk);
        const sizes = r.fingerprint(chunk);

        for (let i = 0; i < sizes.length; i++) {
          const size = sizes[i];
          const buf = buffers.slice(0, size);
          buffers.consume(size);
          yield buf;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator2.return());
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (buffers.length) {
      yield buffers.slice(0);
    }
  });
  return _rabin.apply(this, arguments);
}

/***/ }),

/***/ 21961:
/*!**********************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/dir.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-unixfs */ 59837);
/* harmony import */ var _utils_persist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/persist.js */ 11958);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);





const dirBuilder = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item, blockstore, options) {
    const unixfs = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_1__.UnixFS({
      type: 'directory',
      mtime: item.mtime,
      mode: item.mode
    });
    const buffer = (0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_3__.encode)((0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_3__.prepare)({
      Data: unixfs.marshal()
    }));
    const cid = yield (0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_2__["default"])(buffer, blockstore, options);
    const path = item.path;
    return {
      cid,
      path,
      unixfs,
      size: buffer.length
    };
  });

  return function dirBuilder(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dirBuilder);

/***/ }),

/***/ 76821:
/*!********************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/file/balanced.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var it_batch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-batch */ 36584);




function balanced(source, reduce, options) {
  return reduceToParents(source, reduce, options);
}

function reduceToParents(_x, _x2, _x3) {
  return _reduceToParents.apply(this, arguments);
}

function _reduceToParents() {
  _reduceToParents = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source, reduce, options) {
    const roots = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(it_batch__WEBPACK_IMPORTED_MODULE_2__(source, options.maxChildrenPerNode)), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const chunked = _step.value;
        roots.push(yield reduce(chunked));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (roots.length > 1) {
      return reduceToParents(roots, reduce, options);
    }

    return roots[0];
  });
  return _reduceToParents.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (balanced);

/***/ }),

/***/ 26280:
/*!***************************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/file/buffer-importer.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-unixfs */ 59837);
/* harmony import */ var _utils_persist_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/persist.js */ 11958);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);
/* harmony import */ var multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! multiformats/codecs/raw */ 61608);









function bufferImporter(_x, _x2, _x3) {
  return _bufferImporter.apply(this, arguments);
}

function _bufferImporter() {
  _bufferImporter = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (file, block, options) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(file.content), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        let buffer = _step.value;
        yield /*#__PURE__*/(0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          options.progress(buffer.length, file.path);
          let unixfs;
          const opts = {
            codec: _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_6__,
            cidVersion: options.cidVersion,
            hasher: options.hasher,
            onlyHash: options.onlyHash
          };

          if (options.rawLeaves) {
            opts.codec = multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_7__;
            opts.cidVersion = 1;
          } else {
            unixfs = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_4__.UnixFS({
              type: options.leafType,
              data: buffer
            });
            buffer = _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_6__.encode({
              Data: unixfs.marshal(),
              Links: []
            });
          }

          return {
            cid: yield (0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buffer, block, opts),
            unixfs,
            size: buffer.length
          };
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _bufferImporter.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bufferImporter);

/***/ }),

/***/ 72687:
/*!****************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/file/flat.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var it_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-all */ 54264);



function flat(_x, _x2) {
  return _flat.apply(this, arguments);
}

function _flat() {
  _flat = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source, reduce) {
    return reduce(yield it_all__WEBPACK_IMPORTED_MODULE_1__(source));
  });
  return _flat.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flat);

/***/ }),

/***/ 75679:
/*!*****************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/file/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! err-code */ 47847);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-unixfs */ 59837);
/* harmony import */ var _utils_persist_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/persist.js */ 11958);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);
/* harmony import */ var it_parallel_batch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! it-parallel-batch */ 60885);
/* harmony import */ var multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! multiformats/codecs/raw */ 61608);
/* harmony import */ var _flat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flat.js */ 72687);
/* harmony import */ var _balanced_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./balanced.js */ 76821);
/* harmony import */ var _trickle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trickle.js */ 37247);
/* harmony import */ var _buffer_importer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buffer-importer.js */ 26280);















const dagBuilders = {
  flat: _flat_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  balanced: _balanced_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  trickle: _trickle_js__WEBPACK_IMPORTED_MODULE_12__["default"]
};

function buildFileBatch(_x, _x2, _x3) {
  return _buildFileBatch.apply(this, arguments);
}

function _buildFileBatch() {
  _buildFileBatch = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (file, blockstore, options) {
    let count = -1;
    let previous;
    let bufferImporter;

    if (typeof options.bufferImporter === 'function') {
      bufferImporter = options.bufferImporter;
    } else {
      bufferImporter = _buffer_importer_js__WEBPACK_IMPORTED_MODULE_13__["default"];
    }

    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(it_parallel_batch__WEBPACK_IMPORTED_MODULE_8__(bufferImporter(file, blockstore, options), options.blockWriteConcurrency)), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;
        count++;

        if (count === 0) {
          previous = entry;
          continue;
        } else if (count === 1 && previous) {
          yield previous;
          previous = null;
        }

        yield entry;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (previous) {
      previous.single = true;
      yield previous;
    }
  });
  return _buildFileBatch.apply(this, arguments);
}

const reduce = (file, blockstore, options) => {
  function reducer(_x4) {
    return _reducer.apply(this, arguments);
  }

  function _reducer() {
    _reducer = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (leaves) {
      if (leaves.length === 1 && leaves[0].single && options.reduceSingleLeafToSelf) {
        const leaf = leaves[0];

        if (file.mtime !== undefined || file.mode !== undefined) {
          let buffer = yield blockstore.get(leaf.cid);
          leaf.unixfs = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.UnixFS({
            type: 'file',
            mtime: file.mtime,
            mode: file.mode,
            data: buffer
          });
          buffer = (0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__.encode)((0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__.prepare)({
            Data: leaf.unixfs.marshal()
          }));
          leaf.cid = yield (0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_6__["default"])(buffer, blockstore, { ...options,
            codec: _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__,
            hasher: options.hasher,
            cidVersion: options.cidVersion
          });
          leaf.size = buffer.length;
        }

        return {
          cid: leaf.cid,
          path: file.path,
          unixfs: leaf.unixfs,
          size: leaf.size
        };
      }

      const f = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.UnixFS({
        type: 'file',
        mtime: file.mtime,
        mode: file.mode
      });
      const links = leaves.filter(leaf => {
        if (leaf.cid.code === multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_9__.code && leaf.size) {
          return true;
        }

        if (leaf.unixfs && !leaf.unixfs.data && leaf.unixfs.fileSize()) {
          return true;
        }

        return Boolean(leaf.unixfs && leaf.unixfs.data && leaf.unixfs.data.length);
      }).map(leaf => {
        if (leaf.cid.code === multiformats_codecs_raw__WEBPACK_IMPORTED_MODULE_9__.code) {
          f.addBlockSize(leaf.size);
          return {
            Name: '',
            Tsize: leaf.size,
            Hash: leaf.cid
          };
        }

        if (!leaf.unixfs || !leaf.unixfs.data) {
          f.addBlockSize(leaf.unixfs && leaf.unixfs.fileSize() || 0);
        } else {
          f.addBlockSize(leaf.unixfs.data.length);
        }

        return {
          Name: '',
          Tsize: leaf.size,
          Hash: leaf.cid
        };
      });
      const node = {
        Data: f.marshal(),
        Links: links
      };
      const buffer = (0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__.encode)((0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_7__.prepare)(node));
      const cid = yield (0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_6__["default"])(buffer, blockstore, options);
      return {
        cid,
        path: file.path,
        unixfs: f,
        size: buffer.length + node.Links.reduce((acc, curr) => acc + curr.Tsize, 0)
      };
    });
    return _reducer.apply(this, arguments);
  }

  return reducer;
};

function fileBuilder(file, block, options) {
  const dagBuilder = dagBuilders[options.strategy];

  if (!dagBuilder) {
    throw err_code__WEBPACK_IMPORTED_MODULE_4__(new Error(`Unknown importer build strategy name: ${options.strategy}`), 'ERR_BAD_STRATEGY');
  }

  return dagBuilder(buildFileBatch(file, block, options), reduce(file, block, options), options);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileBuilder);

/***/ }),

/***/ 37247:
/*!*******************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/file/trickle.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var it_batch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-batch */ 36584);




function trickleStream(_x, _x2, _x3) {
  return _trickleStream.apply(this, arguments);
}

function _trickleStream() {
  _trickleStream = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source, reduce, options) {
    const root = new Root(options.layerRepeat);
    let iteration = 0;
    let maxDepth = 1;
    let subTree = root;
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(it_batch__WEBPACK_IMPORTED_MODULE_2__(source, options.maxChildrenPerNode)), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const layer = _step.value;

        if (subTree.isFull()) {
          if (subTree !== root) {
            root.addChild(yield subTree.reduce(reduce));
          }

          if (iteration && iteration % options.layerRepeat === 0) {
            maxDepth++;
          }

          subTree = new SubTree(maxDepth, options.layerRepeat, iteration);
          iteration++;
        }

        subTree.append(layer);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (subTree && subTree !== root) {
      root.addChild(yield subTree.reduce(reduce));
    }

    return root.reduce(reduce);
  });
  return _trickleStream.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trickleStream);

class SubTree {
  constructor(maxDepth, layerRepeat, iteration = 0) {
    this.maxDepth = maxDepth;
    this.layerRepeat = layerRepeat;
    this.currentDepth = 1;
    this.iteration = iteration;
    this.root = this.node = this.parent = {
      children: [],
      depth: this.currentDepth,
      maxDepth,
      maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat
    };
  }

  isFull() {
    if (!this.root.data) {
      return false;
    }

    if (this.currentDepth < this.maxDepth && this.node.maxChildren) {
      this._addNextNodeToParent(this.node);

      return false;
    }

    const distantRelative = this._findParent(this.node, this.currentDepth);

    if (distantRelative) {
      this._addNextNodeToParent(distantRelative);

      return false;
    }

    return true;
  }

  _addNextNodeToParent(parent) {
    this.parent = parent;
    const nextNode = {
      children: [],
      depth: parent.depth + 1,
      parent,
      maxDepth: this.maxDepth,
      maxChildren: Math.floor(parent.children.length / this.layerRepeat) * this.layerRepeat
    };
    parent.children.push(nextNode);
    this.currentDepth = nextNode.depth;
    this.node = nextNode;
  }

  append(layer) {
    this.node.data = layer;
  }

  reduce(reduce) {
    return this._reduce(this.root, reduce);
  }

  _reduce(node, reduce) {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let children = [];

      if (node.children.length) {
        children = yield Promise.all(node.children.filter(child => child.data).map(child => _this._reduce(child, reduce)));
      }

      return reduce((node.data || []).concat(children));
    })();
  }

  _findParent(node, depth) {
    const parent = node.parent;

    if (!parent || parent.depth === 0) {
      return;
    }

    if (parent.children.length === parent.maxChildren || !parent.maxChildren) {
      return this._findParent(parent, depth);
    }

    return parent;
  }

}

class Root extends SubTree {
  constructor(layerRepeat) {
    super(0, layerRepeat);
    this.root.depth = 0;
    this.currentDepth = 1;
  }

  addChild(child) {
    this.root.children.push(child);
  }

  reduce(reduce) {
    return reduce((this.root.data || []).concat(this.root.children));
  }

}

/***/ }),

/***/ 22199:
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var _dir_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dir.js */ 21961);
/* harmony import */ var _file_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file/index.js */ 75679);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! err-code */ 47847);
/* harmony import */ var _chunker_rabin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chunker/rabin.js */ 35824);
/* harmony import */ var _chunker_fixed_size_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chunker/fixed-size.js */ 20797);
/* harmony import */ var _validate_chunks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validate-chunks.js */ 96916);











function isIterable(thing) {
  return Symbol.iterator in thing;
}

function isAsyncIterable(thing) {
  return Symbol.asyncIterator in thing;
}

function contentAsAsyncIterable(content) {
  try {
    if (content instanceof Uint8Array) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
        yield content;
      })();
    } else if (isIterable(content)) {
      return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
        yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      })();
    } else if (isAsyncIterable(content)) {
      return content;
    }
  } catch {
    throw err_code__WEBPACK_IMPORTED_MODULE_6__(new Error('Content was invalid'), 'ERR_INVALID_CONTENT');
  }

  throw err_code__WEBPACK_IMPORTED_MODULE_6__(new Error('Content was invalid'), 'ERR_INVALID_CONTENT');
}

function dagBuilder(_x, _x2, _x3) {
  return _dagBuilder.apply(this, arguments);
}

function _dagBuilder() {
  _dagBuilder = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (source, blockstore, options) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;

        if (entry.path) {
          if (entry.path.substring(0, 2) === './') {
            options.wrapWithDirectory = true;
          }

          entry.path = entry.path.split('/').filter(path => path && path !== '.').join('/');
        }

        if (entry.content) {
          let chunker;

          if (typeof options.chunker === 'function') {
            chunker = options.chunker;
          } else if (options.chunker === 'rabin') {
            chunker = _chunker_rabin_js__WEBPACK_IMPORTED_MODULE_7__["default"];
          } else {
            chunker = _chunker_fixed_size_js__WEBPACK_IMPORTED_MODULE_8__["default"];
          }

          let chunkValidator;

          if (typeof options.chunkValidator === 'function') {
            chunkValidator = options.chunkValidator;
          } else {
            chunkValidator = _validate_chunks_js__WEBPACK_IMPORTED_MODULE_9__["default"];
          }

          const file = {
            path: entry.path,
            mtime: entry.mtime,
            mode: entry.mode,
            content: chunker(chunkValidator(contentAsAsyncIterable(entry.content), options), options)
          };
          yield () => (0,_file_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(file, blockstore, options);
        } else if (entry.path) {
          const dir = {
            path: entry.path,
            mtime: entry.mtime,
            mode: entry.mode
          };
          yield () => (0,_dir_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dir, blockstore, options);
        } else {
          throw new Error('Import candidate must have content or path or both');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _dagBuilder.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dagBuilder);

/***/ }),

/***/ 96916:
/*!**********************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dag-builder/validate-chunks.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! err-code */ 47847);
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uint8arrays/from-string */ 43807);






function validateChunks(_x) {
  return _validateChunks.apply(this, arguments);
}

function _validateChunks() {
  _validateChunks = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const content = _step.value;

        if (content.length === undefined) {
          throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error('Content was invalid'), 'ERR_INVALID_CONTENT');
        }

        if (typeof content === 'string' || content instanceof String) {
          yield (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_4__.fromString)(content.toString());
        } else if (Array.isArray(content)) {
          yield Uint8Array.from(content);
        } else if (content instanceof Uint8Array) {
          yield content;
        } else {
          throw err_code__WEBPACK_IMPORTED_MODULE_3__(new Error('Content was invalid'), 'ERR_INVALID_CONTENT');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _validateChunks.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateChunks);

/***/ }),

/***/ 35064:
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dir-flat.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-unixfs */ 59837);
/* harmony import */ var _dir_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir.js */ 7074);
/* harmony import */ var _utils_persist_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/persist.js */ 11958);









class DirFlat extends _dir_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(props, options) {
    super(props, options);
    this._children = {};
  }

  put(name, value) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.cid = undefined;
      _this3.size = undefined;
      _this3._children[name] = value;
    })();
  }

  get(name) {
    return Promise.resolve(this._children[name]);
  }

  childCount() {
    return Object.keys(this._children).length;
  }

  directChildrenCount() {
    return this.childCount();
  }

  onlyChild() {
    return this._children[Object.keys(this._children)[0]];
  }

  eachChildSeries() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      const keys = Object.keys(_this._children);

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        yield {
          key: key,
          child: _this._children[key]
        };
      }
    })();
  }

  flush(block) {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      const children = Object.keys(_this2._children);
      const links = [];

      for (let i = 0; i < children.length; i++) {
        let child = _this2._children[children[i]];

        if (child instanceof _dir_js__WEBPACK_IMPORTED_MODULE_6__["default"]) {
          var _iteratorAbruptCompletion = false;
          var _didIteratorError = false;

          var _iteratorError;

          try {
            for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(child.flush(block)), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
              const entry = _step.value;
              child = entry;
              yield child;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion && _iterator.return != null) {
                yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        if (child.size != null && child.cid) {
          links.push({
            Name: children[i],
            Tsize: child.size,
            Hash: child.cid
          });
        }
      }

      const unixfs = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.UnixFS({
        type: 'directory',
        mtime: _this2.mtime,
        mode: _this2.mode
      });
      const node = {
        Data: unixfs.marshal(),
        Links: links
      };
      const buffer = (0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__.encode)((0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__.prepare)(node));
      const cid = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_7__["default"])(buffer, block, _this2.options));
      const size = buffer.length + node.Links.reduce((acc, curr) => acc + (curr.Tsize == null ? 0 : curr.Tsize), 0);
      _this2.cid = cid;
      _this2.size = size;
      yield {
        cid,
        unixfs,
        path: _this2.path,
        size
      };
    })();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirFlat);

/***/ }),

/***/ 18733:
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dir-sharded.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-unixfs */ 59837);
/* harmony import */ var _dir_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir.js */ 7074);
/* harmony import */ var _utils_persist_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/persist.js */ 11958);
/* harmony import */ var hamt_sharding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hamt-sharding */ 2454);










class DirSharded extends _dir_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(props, options) {
    super(props, options);
    this._bucket = (0,hamt_sharding__WEBPACK_IMPORTED_MODULE_8__.createHAMT)({
      hashFn: options.hamtHashFn,
      bits: options.hamtBucketBits
    });
  }

  put(name, value) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3._bucket.put(name, value);
    })();
  }

  get(name) {
    return this._bucket.get(name);
  }

  childCount() {
    return this._bucket.leafCount();
  }

  directChildrenCount() {
    return this._bucket.childrenCount();
  }

  onlyChild() {
    return this._bucket.onlyChild();
  }

  eachChildSeries() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this._bucket.eachLeafSeries()), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const {
            key,
            value
          } = _step.value;
          yield {
            key,
            child: value
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })();
  }

  flush(blockstore) {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      var _iteratorAbruptCompletion2 = false;
      var _didIteratorError2 = false;

      var _iteratorError2;

      try {
        for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(flush(_this2._bucket, blockstore, _this2, _this2.options)), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
          const entry = _step2.value;
          yield { ...entry,
            path: _this2.path
          };
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator2.return());
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    })();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirSharded);

function flush(_x, _x2, _x3, _x4) {
  return _flush.apply(this, arguments);
}

function _flush() {
  _flush = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (bucket, blockstore, shardRoot, options) {
    const children = bucket._children;
    const links = [];
    let childrenSize = 0;

    for (let i = 0; i < children.length; i++) {
      const child = children.get(i);

      if (!child) {
        continue;
      }

      const labelPrefix = i.toString(16).toUpperCase().padStart(2, '0');

      if (child instanceof hamt_sharding__WEBPACK_IMPORTED_MODULE_8__.Bucket) {
        let shard;
        var _iteratorAbruptCompletion3 = false;
        var _didIteratorError3 = false;

        var _iteratorError3;

        try {
          for (var _iterator3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(flush(child, blockstore, null, options))), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator3.next())).done; _iteratorAbruptCompletion3 = false) {
            const subShard = _step3.value;
            shard = subShard;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
              yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator3.return());
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (!shard) {
          throw new Error('Could not flush sharded directory, no subshard found');
        }

        links.push({
          Name: labelPrefix,
          Tsize: shard.size,
          Hash: shard.cid
        });
        childrenSize += shard.size;
      } else if (typeof child.value.flush === 'function') {
        const dir = child.value;
        let flushedDir;
        var _iteratorAbruptCompletion4 = false;
        var _didIteratorError4 = false;

        var _iteratorError4;

        try {
          for (var _iterator4 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dir.flush(blockstore)), _step4; _iteratorAbruptCompletion4 = !(_step4 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator4.next())).done; _iteratorAbruptCompletion4 = false) {
            const entry = _step4.value;
            flushedDir = entry;
            yield flushedDir;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion4 && _iterator4.return != null) {
              yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator4.return());
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        const label = labelPrefix + child.key;
        links.push({
          Name: label,
          Tsize: flushedDir.size,
          Hash: flushedDir.cid
        });
        childrenSize += flushedDir.size;
      } else {
        const value = child.value;

        if (!value.cid) {
          continue;
        }

        const label = labelPrefix + child.key;
        const size = value.size;
        links.push({
          Name: label,
          Tsize: size,
          Hash: value.cid
        });
        childrenSize += size;
      }
    }

    const data = Uint8Array.from(children.bitField().reverse());
    const dir = new ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.UnixFS({
      type: 'hamt-sharded-directory',
      data,
      fanout: bucket.tableSize(),
      hashType: options.hamtHashCode,
      mtime: shardRoot && shardRoot.mtime,
      mode: shardRoot && shardRoot.mode
    });
    const node = {
      Data: dir.marshal(),
      Links: links
    };
    const buffer = (0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__.encode)((0,_ipld_dag_pb__WEBPACK_IMPORTED_MODULE_4__.prepare)(node));
    const cid = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_persist_js__WEBPACK_IMPORTED_MODULE_7__["default"])(buffer, blockstore, options));
    const size = buffer.length + childrenSize;
    yield {
      cid,
      unixfs: dir,
      size
    };
  });
  return _flush.apply(this, arguments);
}

/***/ }),

/***/ 7074:
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/dir.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);




class Dir {
  constructor(props, options) {
    this.options = options || {};
    this.root = props.root;
    this.dir = props.dir;
    this.path = props.path;
    this.dirty = props.dirty;
    this.flat = props.flat;
    this.parent = props.parent;
    this.parentKey = props.parentKey;
    this.unixfs = props.unixfs;
    this.mode = props.mode;
    this.mtime = props.mtime;
    this.cid = undefined;
    this.size = undefined;
  }

  put(name, value) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  get(name) {
    return Promise.resolve(this);
  }

  eachChildSeries() {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {})();
  }

  flush(blockstore) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {})();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dir);

/***/ }),

/***/ 38073:
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/flat-to-shard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var _dir_sharded_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dir-sharded.js */ 18733);
/* harmony import */ var _dir_flat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dir-flat.js */ 35064);





function flatToShard(_x, _x2, _x3, _x4) {
  return _flatToShard.apply(this, arguments);
}

function _flatToShard() {
  _flatToShard = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (child, dir, threshold, options) {
    let newDir = dir;

    if (dir instanceof _dir_flat_js__WEBPACK_IMPORTED_MODULE_3__["default"] && dir.directChildrenCount() >= threshold) {
      newDir = yield convertToShard(dir, options);
    }

    const parent = newDir.parent;

    if (parent) {
      if (newDir !== dir) {
        if (child) {
          child.parent = newDir;
        }

        if (!newDir.parentKey) {
          throw new Error('No parent key found');
        }

        yield parent.put(newDir.parentKey, newDir);
      }

      return flatToShard(newDir, parent, threshold, options);
    }

    return newDir;
  });
  return _flatToShard.apply(this, arguments);
}

function convertToShard(_x5, _x6) {
  return _convertToShard.apply(this, arguments);
}

function _convertToShard() {
  _convertToShard = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (oldDir, options) {
    const newDir = new _dir_sharded_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      root: oldDir.root,
      dir: true,
      parent: oldDir.parent,
      parentKey: oldDir.parentKey,
      path: oldDir.path,
      dirty: oldDir.dirty,
      flat: false,
      mtime: oldDir.mtime,
      mode: oldDir.mode
    }, options);
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(oldDir.eachChildSeries()), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const {
          key,
          child
        } = _step.value;
        yield newDir.put(key, child);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return newDir;
  });
  return _convertToShard.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatToShard);

/***/ }),

/***/ 39527:
/*!************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importer": () => (/* binding */ importer)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var it_parallel_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! it-parallel-batch */ 60885);
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options.js */ 39573);
/* harmony import */ var _dag_builder_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dag-builder/index.js */ 22199);
/* harmony import */ var _tree_builder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-builder.js */ 85868);







function importer(_x, _x2) {
  return _importer.apply(this, arguments);
}

function _importer() {
  _importer = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source, blockstore, options = {}) {
    const opts = (0,_options_js__WEBPACK_IMPORTED_MODULE_4__["default"])(options);
    let dagBuilder;

    if (typeof options.dagBuilder === 'function') {
      dagBuilder = options.dagBuilder;
    } else {
      dagBuilder = _dag_builder_index_js__WEBPACK_IMPORTED_MODULE_5__["default"];
    }

    let treeBuilder;

    if (typeof options.treeBuilder === 'function') {
      treeBuilder = options.treeBuilder;
    } else {
      treeBuilder = _tree_builder_js__WEBPACK_IMPORTED_MODULE_6__["default"];
    }

    let candidates;

    if (Symbol.asyncIterator in source || Symbol.iterator in source) {
      candidates = source;
    } else {
      candidates = [source];
    }

    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(treeBuilder(it_parallel_batch__WEBPACK_IMPORTED_MODULE_3__(dagBuilder(candidates, blockstore, opts), opts.fileImportConcurrency), blockstore, opts)), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;
        yield {
          cid: entry.cid,
          path: entry.path,
          unixfs: entry.unixfs,
          size: entry.size
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _importer.apply(this, arguments);
}

/***/ }),

/***/ 39573:
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/options.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var merge_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merge-options */ 35738);
/* harmony import */ var multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiformats/hashes/sha2 */ 94228);
/* harmony import */ var _multiformats_murmur3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @multiformats/murmur3 */ 71723);





function hamtHashFn(_x) {
  return _hamtHashFn.apply(this, arguments);
}

function _hamtHashFn() {
  _hamtHashFn = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (buf) {
    return (yield _multiformats_murmur3__WEBPACK_IMPORTED_MODULE_3__.murmur3128.encode(buf)).slice(0, 8).reverse();
  });
  return _hamtHashFn.apply(this, arguments);
}

const defaultOptions = {
  chunker: 'fixed',
  strategy: 'balanced',
  rawLeaves: false,
  onlyHash: false,
  reduceSingleLeafToSelf: true,
  hasher: multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_2__.sha256,
  leafType: 'file',
  cidVersion: 0,
  progress: () => () => {},
  shardSplitThreshold: 1000,
  fileImportConcurrency: 50,
  blockWriteConcurrency: 10,
  minChunkSize: 262144,
  maxChunkSize: 262144,
  avgChunkSize: 262144,
  window: 16,
  polynomial: 17437180132763652,
  maxChildrenPerNode: 174,
  layerRepeat: 4,
  wrapWithDirectory: false,
  recursive: false,
  hidden: false,
  timeout: undefined,
  hamtHashFn,
  hamtHashCode: 34,
  hamtBucketBits: 8
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((options = {}) => {
  const defaults = merge_options__WEBPACK_IMPORTED_MODULE_1__["default"].bind({
    ignoreUndefined: true
  });
  return defaults(defaultOptions, options);
});

/***/ }),

/***/ 85868:
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/tree-builder.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var _dir_flat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dir-flat.js */ 35064);
/* harmony import */ var _flat_to_shard_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flat-to-shard.js */ 38073);
/* harmony import */ var _dir_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dir.js */ 7074);
/* harmony import */ var _utils_to_path_components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/to-path-components.js */ 39910);










function addToTree(_x6, _x7, _x8) {
  return _addToTree.apply(this, arguments);
}

function _addToTree() {
  _addToTree = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, tree, options) {
    const pathElems = (0,_utils_to_path_components_js__WEBPACK_IMPORTED_MODULE_8__["default"])(elem.path || '');
    const lastIndex = pathElems.length - 1;
    let parent = tree;
    let currentPath = '';

    for (let i = 0; i < pathElems.length; i++) {
      const pathElem = pathElems[i];
      currentPath += `${currentPath ? '/' : ''}${pathElem}`;
      const last = i === lastIndex;
      parent.dirty = true;
      parent.cid = undefined;
      parent.size = undefined;

      if (last) {
        yield parent.put(pathElem, elem);
        tree = yield (0,_flat_to_shard_js__WEBPACK_IMPORTED_MODULE_6__["default"])(null, parent, options.shardSplitThreshold, options);
      } else {
        let dir = yield parent.get(pathElem);

        if (!dir || !(dir instanceof _dir_js__WEBPACK_IMPORTED_MODULE_7__["default"])) {
          dir = new _dir_flat_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            root: false,
            dir: true,
            parent: parent,
            parentKey: pathElem,
            path: currentPath,
            dirty: true,
            flat: true,
            mtime: dir && dir.unixfs && dir.unixfs.mtime,
            mode: dir && dir.unixfs && dir.unixfs.mode
          }, options);
        }

        yield parent.put(pathElem, dir);
        parent = dir;
      }
    }

    return tree;
  });
  return _addToTree.apply(this, arguments);
}

function flushAndYield(_x, _x2) {
  return _flushAndYield.apply(this, arguments);
}

function _flushAndYield() {
  _flushAndYield = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (tree, blockstore) {
    if (!(tree instanceof _dir_js__WEBPACK_IMPORTED_MODULE_7__["default"])) {
      if (tree && tree.unixfs && tree.unixfs.isDirectory()) {
        yield tree;
      }

      return;
    }

    yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tree.flush(blockstore)), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
  return _flushAndYield.apply(this, arguments);
}

function treeBuilder(_x3, _x4, _x5) {
  return _treeBuilder.apply(this, arguments);
}

function _treeBuilder() {
  _treeBuilder = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (source, block, options) {
    let tree = new _dir_flat_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      root: true,
      dir: true,
      path: '',
      dirty: true,
      flat: true
    }, options);
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(source), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const entry = _step.value;

        if (!entry) {
          continue;
        }

        tree = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(addToTree(entry, tree, options));

        if (!entry.unixfs || !entry.unixfs.isDirectory()) {
          yield entry;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (options.wrapWithDirectory) {
      yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(flushAndYield(tree, block)), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    } else {
      var _iteratorAbruptCompletion2 = false;
      var _didIteratorError2 = false;

      var _iteratorError2;

      try {
        for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tree.eachChildSeries()), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
          const unwrapped = _step2.value;

          if (!unwrapped) {
            continue;
          }

          yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(flushAndYield(unwrapped.child, block)), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator2.return());
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  });
  return _treeBuilder.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (treeBuilder);

/***/ }),

/***/ 11958:
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/utils/persist.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ipld/dag-pb */ 32184);
/* harmony import */ var multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multiformats/hashes/sha2 */ 94228);





const persist = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (buffer, blockstore, options) {
    if (!options.codec) {
      options.codec = _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_2__;
    }

    if (!options.hasher) {
      options.hasher = multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_3__.sha256;
    }

    if (options.cidVersion === undefined) {
      options.cidVersion = 1;
    }

    if (options.codec === _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_2__ && options.hasher !== multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_3__.sha256) {
      options.cidVersion = 1;
    }

    const multihash = yield options.hasher.digest(buffer);
    const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.create(options.cidVersion, options.codec.code, multihash);

    if (!options.onlyHash) {
      yield blockstore.put(cid, buffer, {
        signal: options.signal
      });
    }

    return cid;
  });

  return function persist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (persist);

/***/ }),

/***/ 39910:
/*!*******************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/esm/src/utils/to-path-components.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toPathComponents = (path = '') => {
  return (path.trim().match(/([^\\/]|\\\/)+/g) || []).filter(Boolean);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPathComponents);

/***/ }),

/***/ 59837:
/*!*************************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/node_modules/ipfs-unixfs/esm/src/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnixFS": () => (/* binding */ UnixFS),
/* harmony export */   "parseMode": () => (/* binding */ parseMode),
/* harmony export */   "parseMtime": () => (/* binding */ parseMtime)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ 47847);
/* harmony import */ var _unixfs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unixfs.js */ 96731);


const PBData = _unixfs_js__WEBPACK_IMPORTED_MODULE_1__.Data;
const types = ['raw', 'directory', 'file', 'metadata', 'symlink', 'hamt-sharded-directory'];
const dirTypes = ['directory', 'hamt-sharded-directory'];
const DEFAULT_FILE_MODE = parseInt('0644', 8);
const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);
function parseMode(mode) {
  if (mode == null) {
    return undefined;
  }

  if (typeof mode === 'number') {
    return mode & 4095;
  }

  mode = mode.toString();

  if (mode.substring(0, 1) === '0') {
    return parseInt(mode, 8) & 4095;
  }

  return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
  if (input == null) {
    return undefined;
  }

  let mtime;

  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }

  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }

  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }

  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }

  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }

  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }

  return mtime;
}

class UnixFS {
  static unmarshal(marshaled) {
    const message = PBData.decode(marshaled);
    const decoded = PBData.toObject(message, {
      defaults: false,
      arrays: true,
      longs: Number,
      objects: false
    });
    const data = new UnixFS({
      type: types[decoded.Type],
      data: decoded.Data,
      blockSizes: decoded.blocksizes,
      mode: decoded.mode,
      mtime: decoded.mtime ? {
        secs: decoded.mtime.Seconds,
        nsecs: decoded.mtime.FractionalNanoseconds
      } : undefined
    });
    data._originalMode = decoded.mode || 0;
    return data;
  }

  constructor(options = {
    type: 'file'
  }) {
    const {
      type,
      data,
      blockSizes,
      hashType,
      fanout,
      mtime,
      mode
    } = options;

    if (type && !types.includes(type)) {
      throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }

    this.type = type || 'file';
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes || [];
    this._originalMode = 0;
    this.mode = parseMode(mode);

    if (mtime) {
      this.mtime = parseMtime(mtime);

      if (this.mtime && !this.mtime.nsecs) {
        this.mtime.nsecs = 0;
      }
    }
  }

  set mode(mode) {
    this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    const parsedMode = parseMode(mode);

    if (parsedMode !== undefined) {
      this._mode = parsedMode;
    }
  }

  get mode() {
    return this._mode;
  }

  isDirectory() {
    return Boolean(this.type && dirTypes.includes(this.type));
  }

  addBlockSize(size) {
    this.blockSizes.push(size);
  }

  removeBlockSize(index) {
    this.blockSizes.splice(index, 1);
  }

  fileSize() {
    if (this.isDirectory()) {
      return 0;
    }

    let sum = 0;
    this.blockSizes.forEach(size => {
      sum += size;
    });

    if (this.data) {
      sum += this.data.length;
    }

    return sum;
  }

  marshal() {
    let type;

    switch (this.type) {
      case 'raw':
        type = PBData.DataType.Raw;
        break;

      case 'directory':
        type = PBData.DataType.Directory;
        break;

      case 'file':
        type = PBData.DataType.File;
        break;

      case 'metadata':
        type = PBData.DataType.Metadata;
        break;

      case 'symlink':
        type = PBData.DataType.Symlink;
        break;

      case 'hamt-sharded-directory':
        type = PBData.DataType.HAMTShard;
        break;

      default:
        throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }

    let data = this.data;

    if (!this.data || !this.data.length) {
      data = undefined;
    }

    let mode;

    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);

      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = undefined;
      }

      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = undefined;
      }
    }

    let mtime;

    if (this.mtime != null) {
      const parsed = parseMtime(this.mtime);

      if (parsed) {
        mtime = {
          Seconds: parsed.secs,
          FractionalNanoseconds: parsed.nsecs
        };

        if (mtime.FractionalNanoseconds === 0) {
          delete mtime.FractionalNanoseconds;
        }
      }
    }

    const pbData = {
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? undefined : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    };
    return PBData.encode(pbData).finish();
  }

}



/***/ }),

/***/ 96731:
/*!**************************************************************************************!*\
  !*** ./node_modules/ipfs-unixfs-importer/node_modules/ipfs-unixfs/esm/src/unixfs.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "Metadata": () => (/* binding */ Metadata),
/* harmony export */   "UnixTime": () => (/* binding */ UnixTime),
/* harmony export */   "default": () => (/* binding */ $root)
/* harmony export */ });
/* harmony import */ var protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! protobufjs/minimal.js */ 30375);

const $Reader = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Reader,
      $Writer = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Writer,
      $util = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util;
const $root = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] || (protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] = {});
const Data = $root.Data = (() => {
  function Data(p) {
    this.blocksizes = [];
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  Data.prototype.Type = 0;
  Data.prototype.Data = $util.newBuffer([]);
  Data.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.blocksizes = $util.emptyArray;
  Data.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.mode = 0;
  Data.prototype.mtime = null;

  Data.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    w.uint32(8).int32(m.Type);
    if (m.Data != null && Object.hasOwnProperty.call(m, 'Data')) w.uint32(18).bytes(m.Data);
    if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize')) w.uint32(24).uint64(m.filesize);

    if (m.blocksizes != null && m.blocksizes.length) {
      for (var i = 0; i < m.blocksizes.length; ++i) w.uint32(32).uint64(m.blocksizes[i]);
    }

    if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType')) w.uint32(40).uint64(m.hashType);
    if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout')) w.uint32(48).uint64(m.fanout);
    if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) w.uint32(56).uint32(m.mode);
    if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime')) $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
    return w;
  };

  Data.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.Data();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.Type = r.int32();
          break;

        case 2:
          m.Data = r.bytes();
          break;

        case 3:
          m.filesize = r.uint64();
          break;

        case 4:
          if (!(m.blocksizes && m.blocksizes.length)) m.blocksizes = [];

          if ((t & 7) === 2) {
            var c2 = r.uint32() + r.pos;

            while (r.pos < c2) m.blocksizes.push(r.uint64());
          } else m.blocksizes.push(r.uint64());

          break;

        case 5:
          m.hashType = r.uint64();
          break;

        case 6:
          m.fanout = r.uint64();
          break;

        case 7:
          m.mode = r.uint32();
          break;

        case 8:
          m.mtime = $root.UnixTime.decode(r, r.uint32());
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    if (!m.hasOwnProperty('Type')) throw $util.ProtocolError('missing required \'Type\'', {
      instance: m
    });
    return m;
  };

  Data.fromObject = function fromObject(d) {
    if (d instanceof $root.Data) return d;
    var m = new $root.Data();

    switch (d.Type) {
      case 'Raw':
      case 0:
        m.Type = 0;
        break;

      case 'Directory':
      case 1:
        m.Type = 1;
        break;

      case 'File':
      case 2:
        m.Type = 2;
        break;

      case 'Metadata':
      case 3:
        m.Type = 3;
        break;

      case 'Symlink':
      case 4:
        m.Type = 4;
        break;

      case 'HAMTShard':
      case 5:
        m.Type = 5;
        break;
    }

    if (d.Data != null) {
      if (typeof d.Data === 'string') $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);else if (d.Data.length) m.Data = d.Data;
    }

    if (d.filesize != null) {
      if ($util.Long) (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;else if (typeof d.filesize === 'string') m.filesize = parseInt(d.filesize, 10);else if (typeof d.filesize === 'number') m.filesize = d.filesize;else if (typeof d.filesize === 'object') m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
    }

    if (d.blocksizes) {
      if (!Array.isArray(d.blocksizes)) throw TypeError('.Data.blocksizes: array expected');
      m.blocksizes = [];

      for (var i = 0; i < d.blocksizes.length; ++i) {
        if ($util.Long) (m.blocksizes[i] = $util.Long.fromValue(d.blocksizes[i])).unsigned = true;else if (typeof d.blocksizes[i] === 'string') m.blocksizes[i] = parseInt(d.blocksizes[i], 10);else if (typeof d.blocksizes[i] === 'number') m.blocksizes[i] = d.blocksizes[i];else if (typeof d.blocksizes[i] === 'object') m.blocksizes[i] = new $util.LongBits(d.blocksizes[i].low >>> 0, d.blocksizes[i].high >>> 0).toNumber(true);
      }
    }

    if (d.hashType != null) {
      if ($util.Long) (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;else if (typeof d.hashType === 'string') m.hashType = parseInt(d.hashType, 10);else if (typeof d.hashType === 'number') m.hashType = d.hashType;else if (typeof d.hashType === 'object') m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
    }

    if (d.fanout != null) {
      if ($util.Long) (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;else if (typeof d.fanout === 'string') m.fanout = parseInt(d.fanout, 10);else if (typeof d.fanout === 'number') m.fanout = d.fanout;else if (typeof d.fanout === 'object') m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
    }

    if (d.mode != null) {
      m.mode = d.mode >>> 0;
    }

    if (d.mtime != null) {
      if (typeof d.mtime !== 'object') throw TypeError('.Data.mtime: object expected');
      m.mtime = $root.UnixTime.fromObject(d.mtime);
    }

    return m;
  };

  Data.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.arrays || o.defaults) {
      d.blocksizes = [];
    }

    if (o.defaults) {
      d.Type = o.enums === String ? 'Raw' : 0;
      if (o.bytes === String) d.Data = '';else {
        d.Data = [];
        if (o.bytes !== Array) d.Data = $util.newBuffer(d.Data);
      }

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.filesize = o.longs === String ? '0' : 0;

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.hashType = o.longs === String ? '0' : 0;

      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.fanout = o.longs === String ? '0' : 0;

      d.mode = 0;
      d.mtime = null;
    }

    if (m.Type != null && m.hasOwnProperty('Type')) {
      d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
    }

    if (m.Data != null && m.hasOwnProperty('Data')) {
      d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
    }

    if (m.filesize != null && m.hasOwnProperty('filesize')) {
      if (typeof m.filesize === 'number') d.filesize = o.longs === String ? String(m.filesize) : m.filesize;else d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
    }

    if (m.blocksizes && m.blocksizes.length) {
      d.blocksizes = [];

      for (var j = 0; j < m.blocksizes.length; ++j) {
        if (typeof m.blocksizes[j] === 'number') d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];else d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
      }
    }

    if (m.hashType != null && m.hasOwnProperty('hashType')) {
      if (typeof m.hashType === 'number') d.hashType = o.longs === String ? String(m.hashType) : m.hashType;else d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
    }

    if (m.fanout != null && m.hasOwnProperty('fanout')) {
      if (typeof m.fanout === 'number') d.fanout = o.longs === String ? String(m.fanout) : m.fanout;else d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
    }

    if (m.mode != null && m.hasOwnProperty('mode')) {
      d.mode = m.mode;
    }

    if (m.mtime != null && m.hasOwnProperty('mtime')) {
      d.mtime = $root.UnixTime.toObject(m.mtime, o);
    }

    return d;
  };

  Data.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  Data.DataType = function () {
    const valuesById = {},
          values = Object.create(valuesById);
    values[valuesById[0] = 'Raw'] = 0;
    values[valuesById[1] = 'Directory'] = 1;
    values[valuesById[2] = 'File'] = 2;
    values[valuesById[3] = 'Metadata'] = 3;
    values[valuesById[4] = 'Symlink'] = 4;
    values[valuesById[5] = 'HAMTShard'] = 5;
    return values;
  }();

  return Data;
})();
const UnixTime = $root.UnixTime = (() => {
  function UnixTime(p) {
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  UnixTime.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
  UnixTime.prototype.FractionalNanoseconds = 0;

  UnixTime.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    w.uint32(8).int64(m.Seconds);
    if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, 'FractionalNanoseconds')) w.uint32(21).fixed32(m.FractionalNanoseconds);
    return w;
  };

  UnixTime.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.UnixTime();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.Seconds = r.int64();
          break;

        case 2:
          m.FractionalNanoseconds = r.fixed32();
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    if (!m.hasOwnProperty('Seconds')) throw $util.ProtocolError('missing required \'Seconds\'', {
      instance: m
    });
    return m;
  };

  UnixTime.fromObject = function fromObject(d) {
    if (d instanceof $root.UnixTime) return d;
    var m = new $root.UnixTime();

    if (d.Seconds != null) {
      if ($util.Long) (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;else if (typeof d.Seconds === 'string') m.Seconds = parseInt(d.Seconds, 10);else if (typeof d.Seconds === 'number') m.Seconds = d.Seconds;else if (typeof d.Seconds === 'object') m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
    }

    if (d.FractionalNanoseconds != null) {
      m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
    }

    return m;
  };

  UnixTime.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.defaults) {
      if ($util.Long) {
        var n = new $util.Long(0, 0, false);
        d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else d.Seconds = o.longs === String ? '0' : 0;

      d.FractionalNanoseconds = 0;
    }

    if (m.Seconds != null && m.hasOwnProperty('Seconds')) {
      if (typeof m.Seconds === 'number') d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;else d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
    }

    if (m.FractionalNanoseconds != null && m.hasOwnProperty('FractionalNanoseconds')) {
      d.FractionalNanoseconds = m.FractionalNanoseconds;
    }

    return d;
  };

  UnixTime.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  return UnixTime;
})();
const Metadata = $root.Metadata = (() => {
  function Metadata(p) {
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
  }

  Metadata.prototype.MimeType = '';

  Metadata.encode = function encode(m, w) {
    if (!w) w = $Writer.create();
    if (m.MimeType != null && Object.hasOwnProperty.call(m, 'MimeType')) w.uint32(10).string(m.MimeType);
    return w;
  };

  Metadata.decode = function decode(r, l) {
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.Metadata();

    while (r.pos < c) {
      var t = r.uint32();

      switch (t >>> 3) {
        case 1:
          m.MimeType = r.string();
          break;

        default:
          r.skipType(t & 7);
          break;
      }
    }

    return m;
  };

  Metadata.fromObject = function fromObject(d) {
    if (d instanceof $root.Metadata) return d;
    var m = new $root.Metadata();

    if (d.MimeType != null) {
      m.MimeType = String(d.MimeType);
    }

    return m;
  };

  Metadata.toObject = function toObject(m, o) {
    if (!o) o = {};
    var d = {};

    if (o.defaults) {
      d.MimeType = '';
    }

    if (m.MimeType != null && m.hasOwnProperty('MimeType')) {
      d.MimeType = m.MimeType;
    }

    return d;
  };

  Metadata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };

  return Metadata;
})();


/***/ }),

/***/ 35738:
/*!**********************************************!*\
  !*** ./node_modules/merge-options/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ 30954);
/**
 * Thin ESM wrapper for CJS named exports.
 *
 * Ref: https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 98523:
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Codec": () => (/* binding */ Codec),
/* harmony export */   "baseX": () => (/* binding */ baseX),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "rfc4648": () => (/* binding */ rfc4648)
/* harmony export */ });
/* harmony import */ var _vendor_base_x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/base-x.js */ 36301);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bytes.js */ 70185);



class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }

  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }

}

class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;

    if (prefix.codePointAt(0) === undefined) {
      throw new Error('Invalid prefix character');
    }

    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }

  decode(text) {
    if (typeof text === 'string') {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }

      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error('Can only multibase decode strings');
    }
  }

  or(decoder) {
    return or(this, decoder);
  }

}

class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }

  or(decoder) {
    return or(this, decoder);
  }

  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];

    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }

}

const or = (left, right) => new ComposedDecoder({ ...(left.decoders || {
    [left.prefix]: left
  }),
  ...(right.decoders || {
    [right.prefix]: right
  })
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }

  encode(input) {
    return this.encoder.encode(input);
  }

  decode(input) {
    return this.decoder.decode(input);
  }

}
const from = ({
  name,
  prefix,
  encode,
  decode
}) => new Codec(name, prefix, encode, decode);
const baseX = ({
  prefix,
  name,
  alphabet
}) => {
  const {
    encode,
    decode
  } = (0,_vendor_base_x_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.coerce)(decode(text))
  });
};

const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};

  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }

  let end = string.length;

  while (string[end - 1] === '=') {
    --end;
  }

  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;

  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];

    if (value === undefined) {
      throw new SyntaxError(`Non-${name} character`);
    }

    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;

    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }

  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }

  return out;
};

const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;

  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;

    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }

  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }

  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }

  return out;
};

const rfc4648 = ({
  name,
  prefix,
  bitsPerChar,
  alphabet
}) => {
  return from({
    prefix,
    name,

    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },

    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }

  });
};

/***/ }),

/***/ 79814:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base10.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base10": () => (/* binding */ base10)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base10 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});

/***/ }),

/***/ 94025:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base16.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base16": () => (/* binding */ base16),
/* harmony export */   "base16upper": () => (/* binding */ base16upper)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base16 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});

/***/ }),

/***/ 22244:
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base2.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base2": () => (/* binding */ base2)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base2 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});

/***/ }),

/***/ 79357:
/*!*****************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base256emoji.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base256emoji": () => (/* binding */ base256emoji)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);

function encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}

function decode(str) {
  const byts = [];

  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];

    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }

    byts.push(byt);
  }

  return new Uint8Array(byts);
}

const base256emoji = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode,
  decode
});

/***/ }),

/***/ 20559:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base32.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base32": () => (/* binding */ base32),
/* harmony export */   "base32hex": () => (/* binding */ base32hex),
/* harmony export */   "base32hexpad": () => (/* binding */ base32hexpad),
/* harmony export */   "base32hexpadupper": () => (/* binding */ base32hexpadupper),
/* harmony export */   "base32hexupper": () => (/* binding */ base32hexupper),
/* harmony export */   "base32pad": () => (/* binding */ base32pad),
/* harmony export */   "base32padupper": () => (/* binding */ base32padupper),
/* harmony export */   "base32upper": () => (/* binding */ base32upper),
/* harmony export */   "base32z": () => (/* binding */ base32z)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base32 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

/***/ }),

/***/ 74061:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base36.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base36": () => (/* binding */ base36),
/* harmony export */   "base36upper": () => (/* binding */ base36upper)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base36 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});

/***/ }),

/***/ 64964:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base58.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base58btc": () => (/* binding */ base58btc),
/* harmony export */   "base58flickr": () => (/* binding */ base58flickr)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base58btc = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

/***/ }),

/***/ 41694:
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base64.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64pad": () => (/* binding */ base64pad),
/* harmony export */   "base64url": () => (/* binding */ base64url),
/* harmony export */   "base64urlpad": () => (/* binding */ base64urlpad)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base64 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});

/***/ }),

/***/ 81604:
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base8.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base8": () => (/* binding */ base8)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);

const base8 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});

/***/ }),

/***/ 16506:
/*!*************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/identity.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 98523);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bytes.js */ 70185);


const identity = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.toString)(buf),
  decode: str => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.fromString)(str)
});

/***/ }),

/***/ 22001:
/*!*****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/basics.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_14__.CID),
/* harmony export */   "bases": () => (/* binding */ bases),
/* harmony export */   "bytes": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_14__.bytes),
/* harmony export */   "codecs": () => (/* binding */ codecs),
/* harmony export */   "digest": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_14__.digest),
/* harmony export */   "hasher": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_14__.hasher),
/* harmony export */   "hashes": () => (/* binding */ hashes),
/* harmony export */   "varint": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_14__.varint)
/* harmony export */ });
/* harmony import */ var _bases_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bases/identity.js */ 16506);
/* harmony import */ var _bases_base2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bases/base2.js */ 22244);
/* harmony import */ var _bases_base8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bases/base8.js */ 81604);
/* harmony import */ var _bases_base10_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bases/base10.js */ 79814);
/* harmony import */ var _bases_base16_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bases/base16.js */ 94025);
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bases/base32.js */ 20559);
/* harmony import */ var _bases_base36_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bases/base36.js */ 74061);
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bases/base58.js */ 64964);
/* harmony import */ var _bases_base64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bases/base64.js */ 41694);
/* harmony import */ var _bases_base256emoji_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bases/base256emoji.js */ 79357);
/* harmony import */ var _hashes_sha2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hashes/sha2.js */ 94228);
/* harmony import */ var _hashes_identity_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hashes/identity.js */ 23412);
/* harmony import */ var _codecs_raw_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./codecs/raw.js */ 61608);
/* harmony import */ var _codecs_json_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./codecs/json.js */ 9437);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.js */ 21231);















const bases = { ..._bases_identity_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._bases_base2_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._bases_base8_js__WEBPACK_IMPORTED_MODULE_2__,
  ..._bases_base10_js__WEBPACK_IMPORTED_MODULE_3__,
  ..._bases_base16_js__WEBPACK_IMPORTED_MODULE_4__,
  ..._bases_base32_js__WEBPACK_IMPORTED_MODULE_5__,
  ..._bases_base36_js__WEBPACK_IMPORTED_MODULE_6__,
  ..._bases_base58_js__WEBPACK_IMPORTED_MODULE_7__,
  ..._bases_base64_js__WEBPACK_IMPORTED_MODULE_8__,
  ..._bases_base256emoji_js__WEBPACK_IMPORTED_MODULE_9__
};
const hashes = { ..._hashes_sha2_js__WEBPACK_IMPORTED_MODULE_10__,
  ..._hashes_identity_js__WEBPACK_IMPORTED_MODULE_11__
};
const codecs = {
  raw: _codecs_raw_js__WEBPACK_IMPORTED_MODULE_12__,
  json: _codecs_json_js__WEBPACK_IMPORTED_MODULE_13__
};


/***/ }),

/***/ 52910:
/*!****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/block.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "createUnsafe": () => (/* binding */ createUnsafe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ 21231);



const readonly = ({
  enumerable = true,
  configurable = false
} = {}) => ({
  enumerable,
  configurable,
  writable: false
});

const links = function* (source, base) {
  if (source == null) return;
  if (source instanceof Uint8Array) return;

  for (const [key, value] of Object.entries(source)) {
    const path = [...base, key];

    if (value != null && typeof value === 'object') {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = _index_js__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(element);

          if (cid) {
            yield [elementPath.join('/'), cid];
          } else if (typeof element === 'object') {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid = _index_js__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(value);

        if (cid) {
          yield [path.join('/'), cid];
        } else {
          yield* links(value, path);
        }
      }
    }
  }
};

const tree = function* (source, base) {
  if (source == null) return;

  for (const [key, value] of Object.entries(source)) {
    const path = [...base, key];
    yield path.join('/');

    if (value != null && !(value instanceof Uint8Array) && typeof value === 'object' && !_index_js__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(value)) {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          yield elementPath.join('/');

          if (typeof element === 'object' && !_index_js__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(element)) {
            yield* tree(element, elementPath);
          }
        }
      } else {
        yield* tree(value, path);
      }
    }
  }
};

const get = (source, path) => {
  let node = source;

  for (const [index, key] of path.entries()) {
    node = node[key];

    if (node == null) {
      throw new Error(`Object has no property at ${path.slice(0, index + 1).map(part => `[${JSON.stringify(part)}]`).join('')}`);
    }

    const cid = _index_js__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(node);

    if (cid) {
      return {
        value: cid,
        remaining: path.slice(index + 1).join('/')
      };
    }
  }

  return {
    value: node
  };
};

class Block {
  constructor({
    cid,
    bytes,
    value
  }) {
    if (!cid || !bytes || typeof value === 'undefined') throw new Error('Missing required argument');
    this.cid = cid;
    this.bytes = bytes;
    this.value = value;
    this.asBlock = this;
    Object.defineProperties(this, {
      cid: readonly(),
      bytes: readonly(),
      value: readonly(),
      asBlock: readonly()
    });
  }

  links() {
    return links(this.value, []);
  }

  tree() {
    return tree(this.value, []);
  }

  get(path = '/') {
    return get(this.value, path.split('/').filter(Boolean));
  }

}

const encode = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    value,
    codec,
    hasher
  }) {
    if (typeof value === 'undefined') throw new Error('Missing required argument "value"');
    if (!codec || !hasher) throw new Error('Missing required argument: codec or hasher');
    const bytes = codec.encode(value);
    const hash = yield hasher.digest(bytes);
    const cid = _index_js__WEBPACK_IMPORTED_MODULE_1__.CID.create(1, codec.code, hash);
    return new Block({
      value,
      bytes,
      cid
    });
  });

  return function encode(_x) {
    return _ref.apply(this, arguments);
  };
}();

const decode = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    bytes,
    codec,
    hasher
  }) {
    if (!bytes) throw new Error('Missing required argument "bytes"');
    if (!codec || !hasher) throw new Error('Missing required argument: codec or hasher');
    const value = codec.decode(bytes);
    const hash = yield hasher.digest(bytes);
    const cid = _index_js__WEBPACK_IMPORTED_MODULE_1__.CID.create(1, codec.code, hash);
    return new Block({
      value,
      bytes,
      cid
    });
  });

  return function decode(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

const createUnsafe = ({
  bytes,
  cid,
  value: maybeValue,
  codec
}) => {
  const value = maybeValue !== undefined ? maybeValue : codec && codec.decode(bytes);
  if (value === undefined) throw new Error('Missing required argument, must either provide "value" or "codec"');
  return new Block({
    cid,
    bytes,
    value
  });
};

const create = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    bytes,
    cid,
    hasher,
    codec
  }) {
    if (!bytes) throw new Error('Missing required argument "bytes"');
    if (!hasher) throw new Error('Missing required argument "hasher"');
    const value = codec.decode(bytes);
    const hash = yield hasher.digest(bytes);

    if (!_index_js__WEBPACK_IMPORTED_MODULE_1__.bytes.equals(cid.multihash.bytes, hash.bytes)) {
      throw new Error('CID hash does not match bytes');
    }

    return createUnsafe({
      bytes,
      cid,
      value,
      codec
    });
  });

  return function create(_x3) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ 70185:
/*!****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bytes.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coerce": () => (/* binding */ coerce),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "isBinary": () => (/* binding */ isBinary),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
const empty = new Uint8Array(0);

const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');

const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};

const equals = (aa, bb) => {
  if (aa === bb) return true;

  if (aa.byteLength !== bb.byteLength) {
    return false;
  }

  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }

  return true;
};

const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array') return o;
  if (o instanceof ArrayBuffer) return new Uint8Array(o);

  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }

  throw new Error('Unknown type, must be binary type');
};

const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);

const fromString = str => new TextEncoder().encode(str);

const toString = b => new TextDecoder().decode(b);



/***/ }),

/***/ 8371:
/*!**************************************************!*\
  !*** ./node_modules/multiformats/esm/src/cid.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* binding */ CID)
/* harmony export */ });
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./varint.js */ 71474);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashes/digest.js */ 89314);
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bases/base58.js */ 64964);
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bases/base32.js */ 20559);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bytes.js */ 70185);





class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }

  toV0() {
    switch (this.version) {
      case 0:
        {
          return this;
        }

      default:
        {
          const {
            code,
            multihash
          } = this;

          if (code !== DAG_PB_CODE) {
            throw new Error('Cannot convert a non dag-pb CID to CIDv0');
          }

          if (multihash.code !== SHA_256_CODE) {
            throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
          }

          return CID.createV0(multihash);
        }
    }
  }

  toV1() {
    switch (this.version) {
      case 0:
        {
          const {
            code,
            digest
          } = this.multihash;
          const multihash = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.create(code, digest);
          return CID.createV1(this.code, multihash);
        }

      case 1:
        {
          return this;
        }

      default:
        {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
  }

  equals(other) {
    return other && this.code === other.code && this.version === other.version && _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.equals(this.multihash, other.multihash);
  }

  toString(base) {
    const {
      bytes,
      version,
      _baseCache
    } = this;

    switch (version) {
      case 0:
        return toStringV0(bytes, _baseCache, base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.encoder);

      default:
        return toStringV1(bytes, _baseCache, base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.encoder);
    }
  }

  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }

  get [Symbol.toStringTag]() {
    return 'CID';
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }

  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }

  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }

  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }

  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }

  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }

  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }

  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {
        version,
        code,
        multihash,
        bytes
      } = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {
        version,
        multihash,
        code
      } = value;
      const digest = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.decode(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }

  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }

    switch (version) {
      case 0:
        {
          if (code !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
          } else {
            return new CID(version, code, digest, digest.bytes);
          }
        }

      case 1:
        {
          const bytes = encodeCID(version, code, digest.bytes);
          return new CID(version, code, digest, bytes);
        }

      default:
        {
          throw new Error('Invalid version');
        }
    }
  }

  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }

  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }

  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);

    if (remainder.length) {
      throw new Error('Incorrect length');
    }

    return cid;
  }

  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_4__.coerce)(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));

    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }

    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [cid, bytes.subarray(specs.size)];
  }

  static inspectBytes(initialBytes) {
    let offset = 0;

    const next = () => {
      const [i, length] = _varint_js__WEBPACK_IMPORTED_MODULE_0__.decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };

    let version = next();
    let codec = DAG_PB_CODE;

    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }

    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${version}`);
    }

    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }

  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);

    cid._baseCache.set(prefix, source);

    return cid;
  }

}

const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
    case 'Q':
      {
        const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
        return [_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix, decoder.decode(`${_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix}${source}`)];
      }

    case _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix:
      {
        const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
        return [_bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix, decoder.decode(source)];
      }

    case _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix:
      {
        const decoder = base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32;
        return [_bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix, decoder.decode(source)];
      }

    default:
      {
        if (base == null) {
          throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
        }

        return [source[0], base.decode(source)];
      }
  }
};

const toStringV0 = (bytes, cache, base) => {
  const {
    prefix
  } = base;

  if (prefix !== _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base.name} encoding`);
  }

  const cid = cache.get(prefix);

  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};

const toStringV1 = (bytes, cache, base) => {
  const {
    prefix
  } = base;
  const cid = cache.get(prefix);

  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};

const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;

const encodeCID = (version, code, multihash) => {
  const codeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(version);
  const hashOffset = codeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(version, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};

const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';

const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};

const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

/***/ }),

/***/ 9437:
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/codecs/json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = 'json';
const code = 512;
const encode = node => textEncoder.encode(JSON.stringify(node));
const decode = data => JSON.parse(textDecoder.decode(data));

/***/ }),

/***/ 61608:
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/codecs/raw.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bytes.js */ 70185);

const name = 'raw';
const code = 85;
const encode = node => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(node);
const decode = data => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(data);

/***/ }),

/***/ 89314:
/*!************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/digest.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Digest": () => (/* binding */ Digest),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bytes.js */ 70185);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../varint.js */ 71474);


const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(code);
  const digestOffset = sizeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(code, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(multihash);
  const [code, sizeOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes);
  const [size, digestOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);

  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }

  return new Digest(code, size, digest, bytes);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.equals)(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }

}

/***/ }),

/***/ 2323:
/*!************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/hasher.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hasher": () => (/* binding */ Hasher),
/* harmony export */   "from": () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digest.js */ 89314);

const from = ({
  name,
  code,
  encode
}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }

  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? _digest_js__WEBPACK_IMPORTED_MODULE_0__.create(this.code, result) : result.then(digest => _digest_js__WEBPACK_IMPORTED_MODULE_0__.create(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }

}

/***/ }),

/***/ 23412:
/*!**************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bytes.js */ 70185);
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digest.js */ 89314);


const code = 0;
const name = 'identity';
const encode = _bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce;

const digest = input => _digest_js__WEBPACK_IMPORTED_MODULE_1__.create(code, encode(input));

const identity = {
  code,
  name,
  encode,
  digest
};

/***/ }),

/***/ 94228:
/*!******************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/sha2-browser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sha256": () => (/* binding */ sha256),
/* harmony export */   "sha512": () => (/* binding */ sha512)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hasher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasher.js */ 2323);



const sha = name => /*#__PURE__*/function () {
  var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    return new Uint8Array(yield crypto.subtle.digest(name, data));
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

const sha256 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_1__.from)({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_1__.from)({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});

/***/ }),

/***/ 21231:
/*!****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* reexport safe */ _cid_js__WEBPACK_IMPORTED_MODULE_0__.CID),
/* harmony export */   "bytes": () => (/* reexport module object */ _bytes_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "digest": () => (/* reexport module object */ _hashes_digest_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "hasher": () => (/* reexport module object */ _hashes_hasher_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "varint": () => (/* reexport module object */ _varint_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _cid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cid.js */ 8371);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./varint.js */ 71474);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bytes.js */ 70185);
/* harmony import */ var _hashes_hasher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashes/hasher.js */ 2323);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashes/digest.js */ 89314);







/***/ }),

/***/ 71474:
/*!*****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/varint.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encodeTo": () => (/* binding */ encodeTo),
/* harmony export */   "encodingLength": () => (/* binding */ encodingLength)
/* harmony export */ });
/* harmony import */ var _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/varint.js */ 89667);

const decode = (data, offset = 0) => {
  const code = _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].decode(data, offset);
  return [code, _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].decode.bytes];
};
const encodeTo = (int, target, offset = 0) => {
  _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].encodingLength(int);
};

/***/ }),

/***/ 36301:
/*!********************************************************!*\
  !*** ./node_modules/multiformats/esm/vendor/base-x.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }

  var BASE_MAP = new Uint8Array(256);

  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }

  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);

    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }

    BASE_MAP[xc] = i;
  }

  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);

  function encode(source) {
    if (source instanceof Uint8Array) ;else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }

    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }

    if (source.length === 0) {
      return '';
    }

    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;

    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }

    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);

    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;

      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }

      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }

      length = i;
      pbegin++;
    }

    var it2 = size - length;

    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }

    var str = LEADER.repeat(zeroes);

    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }

    return str;
  }

  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }

    if (source.length === 0) {
      return new Uint8Array();
    }

    var psz = 0;

    if (source[psz] === ' ') {
      return;
    }

    var zeroes = 0;
    var length = 0;

    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }

    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);

    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];

      if (carry === 255) {
        return;
      }

      var i = 0;

      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }

      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }

      length = i;
      psz++;
    }

    if (source[psz] === ' ') {
      return;
    }

    var it4 = size - length;

    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }

    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;

    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }

    return vch;
  }

  function decode(string) {
    var buffer = decodeUnsafe(string);

    if (buffer) {
      return buffer;
    }

    throw new Error(`Non-${name} character`);
  }

  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}

var src = base;
var _brrp__multiformats_scope_baseX = src;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_brrp__multiformats_scope_baseX);

/***/ }),

/***/ 89667:
/*!********************************************************!*\
  !*** ./node_modules/multiformats/esm/vendor/varint.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var encode_1 = encode;
var MSB = 128,
    REST = 127,
    MSBALL = ~REST,
    INT = Math.pow(2, 31);

function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;

  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }

  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }

  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}

var decode = read;
var MSB$1 = 128,
    REST$1 = 127;

function read(buf, offset) {
  var res = 0,
      offset = offset || 0,
      shift = 0,
      counter = offset,
      b,
      l = buf.length;

  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }

    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);

  read.bytes = counter - offset;
  return res;
}

var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);

var length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};

var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: length
};
var _brrp_varint = varint;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_brrp_varint);

/***/ }),

/***/ 30243:
/*!***************************************************************************!*\
  !*** ./node_modules/nft.storage/node_modules/@ipld/dag-cbor/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cborg */ 61982);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ 8371);


const CID_CBOR_TAG = 42;

function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }

  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(obj);

  if (!cid) {
    return null;
  }

  const bytes = new Uint8Array(cid.bytes.byteLength + 1);
  bytes.set(cid.bytes, 1);
  return [new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.tag, CID_CBOR_TAG), new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, bytes)];
}

function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}

function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }

  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }

  return null;
}

const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};

function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }

  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.decode(bytes.subarray(1));
}

const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__WEBPACK_IMPORTED_MODULE_0__.encode(node, encodeOptions);
const decode = data => cborg__WEBPACK_IMPORTED_MODULE_0__.decode(data, decodeOptions);

/***/ }),

/***/ 44157:
/*!*******************************************************!*\
  !*** ./node_modules/nft.storage/src/bs-car-reader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockstoreCarReader": () => (/* binding */ BlockstoreCarReader)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);





/**
 * An implementation of the CAR reader interface that is backed by a blockstore.
 *
 * @typedef {import('multiformats').CID} CID
 * @typedef {import('@ipld/car/api').CarReader} CarReader
 * @implements {CarReader}
 */
class BlockstoreCarReader {
  /**
   * @param {number} version
   * @param {CID[]} roots
   * @param {import('ipfs-car/blockstore').Blockstore} blockstore
   */
  constructor(version, roots, blockstore) {
    /**
     * @private
     */
    this._version = version;
    /**
     * @private
     */

    this._roots = roots;
    /**
     * @private
     */

    this._blockstore = blockstore;
  }

  get version() {
    return this._version;
  }

  get blockstore() {
    return this._blockstore;
  }

  getRoots() {
    var _this2 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2._roots;
    })();
  }
  /**
   * @param {CID} cid
   */


  has(cid) {
    return this._blockstore.has(cid);
  }
  /**
   * @param {CID} cid
   */


  get(cid) {
    var _this3 = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bytes = yield _this3._blockstore.get(cid);
      return {
        cid,
        bytes
      };
    })();
  }

  blocks() {
    return this._blockstore.blocks();
  }

  cids() {
    var _this = this;

    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.blocks()), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const b = _step.value;
          yield b.cid;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })();
  }

}

/***/ }),

/***/ 31390:
/*!*************************************************!*\
  !*** ./node_modules/nft.storage/src/gateway.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GATEWAY": () => (/* binding */ GATEWAY),
/* harmony export */   "toGatewayURL": () => (/* binding */ toGatewayURL)
/* harmony export */ });
const GATEWAY = new URL('https://nftstorage.link/');
/**
 * @typedef {string|URL} GatewayURL Base URL of an IPFS Gateway e.g. https://dweb.link/ or https://ipfs.io/
 * @typedef {{ gateway?: GatewayURL }} GatewayURLOptions
 */

/**
 * Convert an IPFS URL (starting ipfs://) to a gateway URL (starting https://)
 * that can be used in a webpage. If the passed URL is not an IPFS URL it is
 * returned as a new URL object with no further changes.
 *
 * @param {string|URL} url An IPFS URL e.g. ipfs://bafy.../path
 * @param {GatewayURLOptions} [options] Options that allow customization of the gateway used.
 * @returns {URL} An IPFS gateway URL e.g. https://nftstorage.link/ipfs/bafy.../path
 */

const toGatewayURL = (url, options = {}) => {
  const gateway = options.gateway || GATEWAY;
  url = new URL(String(url));
  return url.protocol === 'ipfs:' ? new URL(`/ipfs/${url.href.slice('ipfs://'.length)}`, gateway) : url;
};

/***/ }),

/***/ 86336:
/*!*********************************************!*\
  !*** ./node_modules/nft.storage/src/lib.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blob": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blob),
/* harmony export */   "File": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_11__.File),
/* harmony export */   "FormData": () => (/* reexport safe */ _platform_js__WEBPACK_IMPORTED_MODULE_11__.FormData),
/* harmony export */   "NFTStorage": () => (/* binding */ NFTStorage),
/* harmony export */   "Token": () => (/* reexport module object */ _token_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "createRateLimiter": () => (/* binding */ createRateLimiter),
/* harmony export */   "toAsyncIterable": () => (/* binding */ toAsyncIterable),
/* harmony export */   "toGatewayURL": () => (/* reexport safe */ _gateway_js__WEBPACK_IMPORTED_MODULE_12__.toGatewayURL)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);
/* harmony import */ var streaming_iterables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! streaming-iterables */ 73061);
/* harmony import */ var p_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! p-retry */ 25375);
/* harmony import */ var carbites_treewalk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! carbites/treewalk */ 70718);
/* harmony import */ var ipfs_car_pack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ipfs-car/pack */ 50718);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var throttled_queue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! throttled-queue */ 94920);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token.js */ 36942);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./platform.js */ 52177);
/* harmony import */ var _gateway_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gateway.js */ 31390);
/* harmony import */ var _bs_car_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bs-car-reader.js */ 44157);
/* harmony import */ var it_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! it-pipe */ 83943);





/**
 * A client library for the https://nft.storage/ service. It provides a convenient
 * interface for working with the [Raw HTTP API](https://nft.storage/#api-docs)
 * from a web browser or [Node.js](https://nodejs.org/) and comes bundled with
 * TS for out-of-the box type inference and better IntelliSense.
 *
 * @example
 * ```js
 * import { NFTStorage, File, Blob } from "nft.storage"
 * const client = new NFTStorage({ token: API_TOKEN })
 *
 * const cid = await client.storeBlob(new Blob(['hello world']))
 * ```
 * @module
 */











const MAX_STORE_RETRIES = 5;
const MAX_CONCURRENT_UPLOADS = 3;
const MAX_CHUNK_SIZE = 1024 * 1024 * 10; // chunk to ~10MB CARs

const RATE_LIMIT_REQUESTS = 30;
const RATE_LIMIT_PERIOD = 10 * 1000;
/**
 * @typedef {import('./lib/interface.js').Service} Service
 * @typedef {import('./lib/interface.js').CIDString} CIDString
 * @typedef {import('./lib/interface.js').Deal} Deal
 * @typedef {import('./lib/interface.js').FileObject} FileObject
 * @typedef {import('./lib/interface.js').FilesSource} FilesSource
 * @typedef {import('./lib/interface.js').Pin} Pin
 * @typedef {import('./lib/interface.js').CarReader} CarReader
 * @typedef {import('ipfs-car/blockstore').Blockstore} BlockstoreI
 * @typedef {import('./lib/interface.js').RateLimiter} RateLimiter
 * @typedef {import('./lib/interface.js').RequestOptions} RequestOptions
 */

/**
 * @returns {RateLimiter}
 */

function createRateLimiter() {
  const throttle = throttled_queue__WEBPACK_IMPORTED_MODULE_9__(RATE_LIMIT_REQUESTS, RATE_LIMIT_PERIOD);
  return () => throttle(() => {});
}
/**
 * Rate limiter used by static API if no rate limiter is passed. Note that each
 * instance of the NFTStorage class gets it's own limiter if none is passed.
 * This is because rate limits are enforced per API token.
 */

const globalRateLimiter = createRateLimiter();
/**
 * @template {import('./lib/interface.js').TokenInput} T
 * @typedef {import('./lib/interface.js').Token<T>} TokenType
 */

/**
 * @implements {Service}
 */

class NFTStorage {
  /**
   * Constructs a client bound to the given `options.token` and
   * `options.endpoint`.
   *
   * @example
   * ```js
   * import { NFTStorage, File, Blob } from "nft.storage"
   * const client = new NFTStorage({ token: API_TOKEN })
   *
   * const cid = await client.storeBlob(new Blob(['hello world']))
   * ```
   * Optionally you could pass an alternative API endpoint (e.g. for testing)
   * @example
   * ```js
   * import { NFTStorage } from "nft.storage"
   * const client = new NFTStorage({
   *   token: API_TOKEN
   *   endpoint: new URL('http://localhost:8080/')
   * })
   * ```
   *
   * @param {{token: string, endpoint?: URL, rateLimiter?: RateLimiter, did?: string}} options
   */
  constructor({
    token,
    did,
    endpoint = new URL('https://api.nft.storage'),
    rateLimiter
  }) {
    /**
     * Authorization token.
     *
     * @readonly
     */
    this.token = token;
    /**
     * Service API endpoint `URL`.
     * @readonly
     */

    this.endpoint = endpoint;
    /**
     * @readonly
     */

    this.rateLimiter = rateLimiter || createRateLimiter();
    /**
     * @readonly
     */

    this.did = did;
  }
  /**
   * @hidden
   * @param {object} options
   * @param {string} options.token
   * @param {string} [options.did]
   */


  static auth({
    token,
    did
  }) {
    if (!token) throw new Error('missing token');
    return {
      Authorization: `Bearer ${token}`,
      'X-Client': 'nft.storage/js',
      ...(did ? {
        'x-agent-did': did
      } : {})
    };
  }
  /**
   * Stores a single file and returns its CID.
   *
   * @param {Service} service
   * @param {Blob} blob
   * @param {RequestOptions} [options]
   * @returns {Promise<CIDString>}
   */


  static storeBlob(service, blob, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blockstore = new _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blockstore();
      let cidString;

      try {
        const {
          cid,
          car
        } = yield NFTStorage.encodeBlob(blob, {
          blockstore
        });
        yield NFTStorage.storeCar(service, car, options);
        cidString = cid.toString();
      } finally {
        yield blockstore.close();
      }

      return cidString;
    })();
  }
  /**
   * Stores a CAR file and returns its root CID.
   *
   * @param {Service} service
   * @param {Blob|CarReader} car
   * @param {import('./lib/interface.js').CarStorerOptions} [options]
   * @returns {Promise<CIDString>}
   */


  static storeCar({
    endpoint,
    rateLimiter = globalRateLimiter,
    ...token
  }, car, {
    onStoredChunk,
    maxRetries,
    decoders,
    signal
  } = {}) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = new URL('upload/', endpoint);
      const headers = NFTStorage.auth(token);
      const targetSize = MAX_CHUNK_SIZE;
      const splitter = car instanceof _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blob ? yield carbites_treewalk__WEBPACK_IMPORTED_MODULE_6__.TreewalkCarSplitter.fromBlob(car, targetSize, {
        decoders
      }) : new carbites_treewalk__WEBPACK_IMPORTED_MODULE_6__.TreewalkCarSplitter(car, targetSize, {
        decoders
      });
      const upload = (0,streaming_iterables__WEBPACK_IMPORTED_MODULE_4__.transform)(MAX_CONCURRENT_UPLOADS, /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (
        /** @type {AsyncIterable<Uint8Array>} */
        car) {
          const carParts = [];
          var _iteratorAbruptCompletion2 = false;
          var _didIteratorError2 = false;

          var _iteratorError2;

          try {
            for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(car), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _iterator2.next()).done; _iteratorAbruptCompletion2 = false) {
              const part = _step2.value;
              carParts.push(part);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
                yield _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          const carFile = new _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blob(carParts, {
            type: 'application/car'
          });
          const cid = yield p_retry__WEBPACK_IMPORTED_MODULE_5__( /*#__PURE__*/(0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield rateLimiter();
            /** @type {Response} */

            let response;

            try {
              response = yield (0,_platform_js__WEBPACK_IMPORTED_MODULE_11__.fetch)(url.toString(), {
                method: 'POST',
                headers,
                body: carFile,
                signal
              });
            } catch (
            /** @type {any} */
            err) {
              // TODO: remove me and test when client accepts custom fetch impl

              /* c8 ignore next 1 */
              throw signal && signal.aborted ? new p_retry__WEBPACK_IMPORTED_MODULE_5__.AbortError(err) : err;
            }
            /* c8 ignore next 3 */


            if (response.status === 429) {
              throw new Error('rate limited');
            }

            const result = yield response.json();

            if (!result.ok) {
              // do not retry if unauthorized - will not succeed
              if (response.status === 401) {
                throw new p_retry__WEBPACK_IMPORTED_MODULE_5__.AbortError(result.error.message);
              }

              throw new Error(result.error.message);
            }

            return result.value.cid;
          }), {
            retries: maxRetries == null ? MAX_STORE_RETRIES : maxRetries
          });
          onStoredChunk && onStoredChunk(carFile.size);
          return cid;
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
      let root;
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(upload(splitter.cars())), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
          const cid = _step.value;
          root = cid;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return (
        /** @type {CIDString} */
        root
      );
    })();
  }
  /**
   * Stores a directory of files and returns a CID. Provided files **MUST**
   * be within the same directory, otherwise error is raised e.g. `foo/bar.png`,
   * `foo/bla/baz.json` is ok but `foo/bar.png`, `bla/baz.json` is not.
   *
   * @param {Service} service
   * @param {FilesSource} filesSource
   * @param {RequestOptions} [options]
   * @returns {Promise<CIDString>}
   */


  static storeDirectory(service, filesSource, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blockstore = new _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blockstore();
      let cidString;

      try {
        const {
          cid,
          car
        } = yield NFTStorage.encodeDirectory(filesSource, {
          blockstore
        });
        yield NFTStorage.storeCar(service, car, options);
        cidString = cid.toString();
      } finally {
        yield blockstore.close();
      }

      return cidString;
    })();
  }
  /**
   * Stores the given token and all resources it references (in the form of a
   * File or a Blob) along with a metadata JSON as specificed in ERC-1155. The
   * `token.image` must be either a `File` or a `Blob` instance, which will be
   * stored and the corresponding content address URL will be saved in the
   * metadata JSON file under `image` field.
   *
   * If `token.properties` contains properties with `File` or `Blob` values,
   * those also get stored and their URLs will be saved in the metadata JSON
   * file in their place.
   *
   * Note: URLs for `File` objects will retain file names e.g. in case of
   * `new File([bytes], 'cat.png', { type: 'image/png' })` will be transformed
   * into a URL that looks like `ipfs://bafy...hash/image/cat.png`. For `Blob`
   * objects, the URL will not have a file name name or mime type, instead it
   * will be transformed into a URL that looks like
   * `ipfs://bafy...hash/image/blob`.
   *
   * @template {import('./lib/interface.js').TokenInput} T
   * @param {Service} service
   * @param {T} metadata
   * @param {RequestOptions} [options]
   * @returns {Promise<TokenType<T>>}
   */


  static store(service, metadata, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        token,
        car
      } = yield NFTStorage.encodeNFT(metadata);
      yield NFTStorage.storeCar(service, car, options);
      return token;
    })();
  }
  /**
   * Returns current status of the stored NFT by its CID. Note the NFT must
   * have previously been stored by this account.
   *
   * @param {Service} service
   * @param {string} cid
   * @param {RequestOptions} [options]
   * @returns {Promise<import('./lib/interface.js').StatusResult>}
   */


  static status({
    endpoint,
    rateLimiter = globalRateLimiter,
    ...token
  }, cid, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = new URL(`${cid}/`, endpoint);
      yield rateLimiter();
      const response = yield (0,_platform_js__WEBPACK_IMPORTED_MODULE_11__.fetch)(url.toString(), {
        method: 'GET',
        headers: NFTStorage.auth(token),
        signal: options && options.signal
      });
      /* c8 ignore next 3 */

      if (response.status === 429) {
        throw new Error('rate limited');
      }

      const result = yield response.json();

      if (result.ok) {
        return {
          cid: result.value.cid,
          deals: decodeDeals(result.value.deals),
          size: result.value.size,
          pin: decodePin(result.value.pin),
          created: new Date(result.value.created)
        };
      } else {
        throw new Error(result.error.message);
      }
    })();
  }
  /**
   * Check if a CID of an NFT is being stored by NFT.Storage.
   *
   * @param {import('./lib/interface.js').PublicService} service
   * @param {string} cid
   * @param {RequestOptions} [options]
   * @returns {Promise<import('./lib/interface.js').CheckResult>}
   */


  static check({
    endpoint,
    rateLimiter = globalRateLimiter
  }, cid, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = new URL(`check/${cid}/`, endpoint);
      yield rateLimiter();
      const response = yield (0,_platform_js__WEBPACK_IMPORTED_MODULE_11__.fetch)(url.toString(), {
        signal: options && options.signal
      });
      /* c8 ignore next 3 */

      if (response.status === 429) {
        throw new Error('rate limited');
      }

      const result = yield response.json();

      if (result.ok) {
        return {
          cid: result.value.cid,
          deals: decodeDeals(result.value.deals),
          pin: result.value.pin
        };
      } else {
        throw new Error(result.error.message);
      }
    })();
  }
  /**
   * Removes stored content by its CID from this account. Please note that
   * even if content is removed from the service other nodes that have
   * replicated it might still continue providing it.
   *
   * @param {Service} service
   * @param {string} cid
   * @param {RequestOptions} [options]
   * @returns {Promise<void>}
   */


  static delete({
    endpoint,
    rateLimiter = globalRateLimiter,
    ...token
  }, cid, options) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = new URL(`${cid}/`, endpoint);
      yield rateLimiter();
      const response = yield (0,_platform_js__WEBPACK_IMPORTED_MODULE_11__.fetch)(url.toString(), {
        method: 'DELETE',
        headers: NFTStorage.auth(token),
        signal: options && options.signal
      });
      /* c8 ignore next 3 */

      if (response.status === 429) {
        throw new Error('rate limited');
      }

      const result = yield response.json();

      if (!result.ok) {
        throw new Error(result.error.message);
      }
    })();
  }
  /**
   * Encodes the given token and all resources it references (in the form of a
   * File or a Blob) along with a metadata JSON as specificed in ERC-1155 to a
   * CAR file. The `token.image` must be either a `File` or a `Blob` instance,
   * which will be stored and the corresponding content address URL will be
   * saved in the metadata JSON file under `image` field.
   *
   * If `token.properties` contains properties with `File` or `Blob` values,
   * those also get stored and their URLs will be saved in the metadata JSON
   * file in their place.
   *
   * Note: URLs for `File` objects will retain file names e.g. in case of
   * `new File([bytes], 'cat.png', { type: 'image/png' })` will be transformed
   * into a URL that looks like `ipfs://bafy...hash/image/cat.png`. For `Blob`
   * objects, the URL will not have a file name name or mime type, instead it
   * will be transformed into a URL that looks like
   * `ipfs://bafy...hash/image/blob`.
   *
   * @example
   * ```js
   * const { token, car } = await NFTStorage.encodeNFT({
   *   name: 'nft.storage store test',
   *   description: 'Test ERC-1155 compatible metadata.',
   *   image: new File(['<DATA>'], 'pinpie.jpg', { type: 'image/jpg' }),
   *   properties: {
   *     custom: 'Custom data can appear here, files are auto uploaded.',
   *     file: new File(['<DATA>'], 'README.md', { type: 'text/plain' }),
   *   }
   * })
   *
   * console.log('IPFS URL for the metadata:', token.url)
   * console.log('metadata.json contents:\n', token.data)
   * console.log('metadata.json with IPFS gateway URLs:\n', token.embed())
   *
   * // Now store the CAR file on NFT.Storage
   * await client.storeCar(car)
   * ```
   *
   * @template {import('./lib/interface.js').TokenInput} T
   * @param {T} input
   * @returns {Promise<{ cid: CID, token: TokenType<T>, car: CarReader }>}
   */


  static encodeNFT(input) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      validateERC1155(input);
      return _token_js__WEBPACK_IMPORTED_MODULE_10__.Token.encode(input);
    })();
  }
  /**
   * Encodes a single file to a CAR file and also returns its root CID.
   *
   * @example
   * ```js
   * const content = new Blob(['hello world'])
   * const { cid, car } = await NFTStorage.encodeBlob(content)
   *
   * // Root CID of the file
   * console.log(cid.toString())
   *
   * // Now store the CAR file on NFT.Storage
   * await client.storeCar(car)
   * ```
   *
   * @param {Blob} blob
   * @param {object} [options]
   * @param {BlockstoreI} [options.blockstore]
   * @returns {Promise<{ cid: CID, car: CarReader }>}
   */


  static encodeBlob(blob, {
    blockstore
  } = {}) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (blob.size === 0) {
        throw new Error('Content size is 0, make sure to provide some content');
      }

      return packCar([toImportCandidate('blob', blob)], {
        blockstore,
        wrapWithDirectory: false
      });
    })();
  }
  /**
   * Encodes a directory of files to a CAR file and also returns the root CID.
   * Provided files **MUST** be within the same directory, otherwise error is
   * raised e.g. `foo/bar.png`, `foo/bla/baz.json` is ok but `foo/bar.png`,
   * `bla/baz.json` is not.
   *
   * @example
   * ```js
   * const { cid, car } = await NFTStorage.encodeDirectory([
   *   new File(['hello world'], 'hello.txt'),
   *   new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
   * ])
   *
   * // Root CID of the directory
   * console.log(cid.toString())
   *
   * // Now store the CAR file on NFT.Storage
   * await client.storeCar(car)
   * ```
   *
   * @param {FilesSource} files
   * @param {object} [options]
   * @param {BlockstoreI} [options.blockstore]
   * @returns {Promise<{ cid: CID, car: CarReader }>}
   */


  static encodeDirectory(files, {
    blockstore
  } = {}) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let size = 0;
      const input = it_pipe__WEBPACK_IMPORTED_MODULE_14__(files, /*#__PURE__*/function () {
        var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (files) {
          var _iteratorAbruptCompletion3 = false;
          var _didIteratorError3 = false;

          var _iteratorError3;

          try {
            for (var _iterator3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(files), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator3.next())).done; _iteratorAbruptCompletion3 = false) {
              const file = _step3.value;
              yield toImportCandidate(file.name, file);
              size += file.size;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
                yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_iterator3.return());
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      const packed = yield packCar(input, {
        blockstore,
        wrapWithDirectory: true
      });

      if (size === 0) {
        throw new Error('Total size of files should exceed 0, make sure to provide some content');
      }

      return packed;
    })();
  } // Just a sugar so you don't have to pass around endpoint and token around.

  /**
   * Stores a single file and returns the corresponding Content Identifier (CID).
   * Takes a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
   * or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File). Note
   * that no file name or file metadata is retained.
   *
   * @example
   * ```js
   * const content = new Blob(['hello world'])
   * const cid = await client.storeBlob(content)
   * cid //> 'zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9'
   * ```
   *
   * @param {Blob} blob
   * @param {RequestOptions} [options]
   */


  storeBlob(blob, options) {
    return NFTStorage.storeBlob(this, blob, options);
  }
  /**
   * Stores files encoded as a single [Content Addressed Archive
   * (CAR)](https://github.com/ipld/specs/blob/master/block-layer/content-addressable-archives.md).
   *
   * Takes a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
   * or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
   *
   * Returns the corresponding Content Identifier (CID).
   *
   * See the [`ipfs-car` docs](https://www.npmjs.com/package/ipfs-car) for more
   * details on packing a CAR file.
   *
   * @example
   * ```js
   * import { pack } from 'ipfs-car/pack'
   * import { CarReader } from '@ipld/car'
   * const { out, root } = await pack({
   *  input: fs.createReadStream('pinpie.pdf')
   * })
   * const expectedCid = root.toString()
   * const carReader = await CarReader.fromIterable(out)
   * const cid = await storage.storeCar(carReader)
   * console.assert(cid === expectedCid)
   * ```
   *
   * @example
   * ```
   * import { packToBlob } from 'ipfs-car/pack/blob'
   * const data = 'Hello world'
   * const { root, car } = await packToBlob({ input: [new TextEncoder().encode(data)] })
   * const expectedCid = root.toString()
   * const cid = await client.storeCar(car)
   * console.assert(cid === expectedCid)
   * ```
   * @param {Blob|CarReader} car
   * @param {import('./lib/interface.js').CarStorerOptions} [options]
   */


  storeCar(car, options) {
    return NFTStorage.storeCar(this, car, options);
  }
  /**
   * Stores a directory of files and returns a CID for the directory.
   *
   * @example
   * ```js
   * const cid = await client.storeDirectory([
   *   new File(['hello world'], 'hello.txt'),
   *   new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
   * ])
   * cid //>
   * ```
   *
   * Argument can be a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * instance as well, in which case directory structure will be retained.
   *
   * @param {FilesSource} files
   * @param {RequestOptions} [options]
   */


  storeDirectory(files, options) {
    return NFTStorage.storeDirectory(this, files, options);
  }
  /**
   * Returns current status of the stored NFT by its CID. Note the NFT must
   * have previously been stored by this account.
   *
   * @example
   * ```js
   * const status = await client.status('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   * @param {RequestOptions} [options]
   */


  status(cid, options) {
    return NFTStorage.status(this, cid, options);
  }
  /**
   * Removes stored content by its CID from the service.
   *
   * > Please note that even if content is removed from the service other nodes
   * that have replicated it might still continue providing it.
   *
   * @example
   * ```js
   * await client.delete('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   * @param {RequestOptions} [options]
   */


  delete(cid, options) {
    return NFTStorage.delete(this, cid, options);
  }
  /**
   * Check if a CID of an NFT is being stored by nft.storage. Throws if the NFT
   * was not found.
   *
   * @example
   * ```js
   * const status = await client.check('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   * @param {RequestOptions} [options]
   */


  check(cid, options) {
    return NFTStorage.check(this, cid, options);
  }
  /**
   * Stores the given token and all resources it references (in the form of a
   * File or a Blob) along with a metadata JSON as specificed in
   * [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155#metadata). The
   * `token.image` must be either a `File` or a `Blob` instance, which will be
   * stored and the corresponding content address URL will be saved in the
   * metadata JSON file under `image` field.
   *
   * If `token.properties` contains properties with `File` or `Blob` values,
   * those also get stored and their URLs will be saved in the metadata JSON
   * file in their place.
   *
   * Note: URLs for `File` objects will retain file names e.g. in case of
   * `new File([bytes], 'cat.png', { type: 'image/png' })` will be transformed
   * into a URL that looks like `ipfs://bafy...hash/image/cat.png`. For `Blob`
   * objects, the URL will not have a file name name or mime type, instead it
   * will be transformed into a URL that looks like
   * `ipfs://bafy...hash/image/blob`.
   *
   * @example
   * ```js
   * const metadata = await client.store({
   *   name: 'nft.storage store test',
   *   description: 'Test ERC-1155 compatible metadata.',
   *   image: new File(['<DATA>'], 'pinpie.jpg', { type: 'image/jpg' }),
   *   properties: {
   *     custom: 'Custom data can appear here, files are auto uploaded.',
   *     file: new File(['<DATA>'], 'README.md', { type: 'text/plain' }),
   *   }
   * })
   *
   * console.log('IPFS URL for the metadata:', metadata.url)
   * console.log('metadata.json contents:\n', metadata.data)
   * console.log('metadata.json with IPFS gateway URLs:\n', metadata.embed())
   * ```
   *
   * @template {import('./lib/interface.js').TokenInput} T
   * @param {T} token
   * @param {RequestOptions} [options]
   */


  store(token, options) {
    return NFTStorage.store(this, token, options);
  }

}
/**
 * Cast an iterable to an asyncIterable
 * @template T
 * @param {Iterable<T>} iterable
 * @returns {AsyncIterable<T>}
 */


function toAsyncIterable(iterable) {
  return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
    for (const item of iterable) {
      yield item;
    }
  })();
}
/**
 * @template {import('./lib/interface.js').TokenInput} T
 * @param {T} metadata
 */

const validateERC1155 = ({
  name,
  description,
  image,
  decimals
}) => {
  // Just validate that expected fields are present
  if (typeof name !== 'string') {
    throw new TypeError('string property `name` identifying the asset is required');
  }

  if (typeof description !== 'string') {
    throw new TypeError('string property `description` describing asset is required');
  }

  if (!(image instanceof _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blob)) {
    throw new TypeError('property `image` must be a Blob or File object');
  } else if (!image.type.startsWith('image/')) {
    console.warn(`According to ERC721 Metadata JSON Schema 'image' must have 'image/*' mime type.

For better interoperability we would highly recommend storing content with different mime type under 'properties' namespace e.g. \`properties: { video: file }\` and using 'image' field for storing a preview image for it instead.

For more context please see ERC-721 specification https://eips.ethereum.org/EIPS/eip-721`);
  }

  if (typeof decimals !== 'undefined' && typeof decimals !== 'number') {
    throw new TypeError('property `decimals` must be an integer value');
  }
};
/**
 * @param {import('ipfs-car/pack').ImportCandidateStream|Array<{ path: string, content: import('./platform.js').ReadableStream }>} input
 * @param {object} [options]
 * @param {BlockstoreI} [options.blockstore]
 * @param {boolean} [options.wrapWithDirectory]
 */


const packCar = /*#__PURE__*/function () {
  var _ref5 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input, {
    blockstore,
    wrapWithDirectory
  } = {}) {
    /* c8 ignore next 1 */
    blockstore = blockstore || new _platform_js__WEBPACK_IMPORTED_MODULE_11__.Blockstore();
    const {
      root: cid
    } = yield (0,ipfs_car_pack__WEBPACK_IMPORTED_MODULE_7__.pack)({
      input,
      blockstore,
      wrapWithDirectory
    });
    const car = new _bs_car_reader_js__WEBPACK_IMPORTED_MODULE_13__.BlockstoreCarReader(1, [cid], blockstore);
    return {
      cid,
      car
    };
  });

  return function packCar(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * @param {Deal[]} deals
 * @returns {Deal[]}
 */


const decodeDeals = deals => deals.map(deal => {
  const {
    dealActivation,
    dealExpiration,
    lastChanged
  } = {
    dealExpiration: null,
    dealActivation: null,
    ...deal
  };
  return { ...deal,
    lastChanged: new Date(lastChanged),
    ...(dealActivation && {
      dealActivation: new Date(dealActivation)
    }),
    ...(dealExpiration && {
      dealExpiration: new Date(dealExpiration)
    })
  };
});
/**
 * @param {Pin} pin
 * @returns {Pin}
 */


const decodePin = pin => ({ ...pin,
  created: new Date(pin.created)
});
/**
 * Convert the passed blob to an "import candidate" - an object suitable for
 * passing to the ipfs-unixfs-importer. Note: content is an accessor so that
 * the stream is created only when needed.
 *
 * @param {string} path
 * @param {Pick<Blob, 'stream'>|{ stream: () => AsyncIterable<Uint8Array> }} blob
 * @returns {import('ipfs-core-types/src/utils.js').ImportCandidate}
 */


function toImportCandidate(path, blob) {
  /** @type {AsyncIterable<Uint8Array>} */
  let stream;
  return {
    path,

    get content() {
      stream = stream || blob.stream();
      return stream;
    }

  };
}



/***/ }),

/***/ 52177:
/*!******************************************************!*\
  !*** ./node_modules/nft.storage/src/platform.web.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blob": () => (/* binding */ Blob),
/* harmony export */   "Blockstore": () => (/* binding */ Blockstore),
/* harmony export */   "File": () => (/* binding */ File),
/* harmony export */   "FormData": () => (/* binding */ FormData),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "ReadableStream": () => (/* binding */ ReadableStream),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
/* harmony import */ var ipfs_car_blockstore_memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ipfs-car/blockstore/memory */ 57933);

const fetch = globalThis.fetch;
const FormData = globalThis.FormData;
const Headers = globalThis.Headers;
const Request = globalThis.Request;
const Response = globalThis.Response;
const Blob = globalThis.Blob;
const File = globalThis.File;
const ReadableStream = globalThis.ReadableStream;
const Blockstore = ipfs_car_blockstore_memory__WEBPACK_IMPORTED_MODULE_0__.MemoryBlockStore;

/***/ }),

/***/ 36942:
/*!***********************************************!*\
  !*** ./node_modules/nft.storage/src/token.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "embed": () => (/* binding */ embed),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "mapWith": () => (/* binding */ mapWith)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var ipfs_car_pack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-car/pack */ 50718);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiformats/cid */ 8371);
/* harmony import */ var multiformats_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multiformats/block */ 52910);
/* harmony import */ var multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multiformats/hashes/sha2 */ 94228);
/* harmony import */ var _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ipld/dag-cbor */ 30243);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./platform.js */ 52177);
/* harmony import */ var _gateway_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gateway.js */ 31390);
/* harmony import */ var _bs_car_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs-car-reader.js */ 44157);









/**
 * @typedef {import('./gateway.js').GatewayURLOptions} EmbedOptions
 * @typedef {import('./lib/interface.js').TokenInput} TokenInput
 * @typedef {import('ipfs-car/blockstore').Blockstore} Blockstore
 */

/**
 * @template T
 * @typedef {import('./lib/interface.js').Encoded<T, [[Blob, URL]]>} EncodedBlobUrl
 */

/**
 * @template G
 * @typedef {import('./lib/interface.js').Encoded<G, [[Blob, Blob]]>} EncodedBlobBlob
 */

/**
 * @template {import('./lib/interface.js').TokenInput} T
 * @typedef {import('./lib/interface.js').Token<T>} TokenType
 */

/**
 * @template {TokenInput} T
 * @implements {TokenType<T>}
 */

class Token {
  /**
   * @param {import('./lib/interface.js').CIDString} ipnft
   * @param {import('./lib/interface.js').EncodedURL} url
   * @param {import('./lib/interface.js').Encoded<T, [[Blob, URL]]>} data
   */
  constructor(ipnft, url, data) {
    /** @readonly */
    this.ipnft = ipnft;
    /** @readonly */

    this.url = url;
    /** @readonly */

    this.data = data;
    Object.defineProperties(this, {
      ipnft: {
        enumerable: true,
        writable: false
      },
      url: {
        enumerable: true,
        writable: false
      },
      data: {
        enumerable: false,
        writable: false
      }
    });
  }
  /**
   * @returns {import('./lib/interface.js').Encoded<T, [[Blob, URL]]>}
   */


  embed() {
    return Token.embed(this);
  }
  /**
   * @template {TokenInput} T
   * @param {{data: import('./lib/interface.js').Encoded<T, [[Blob, URL]]>}} token
   * @returns {import('./lib/interface.js').Encoded<T, [[Blob, URL]]>}
   */


  static embed({
    data
  }) {
    return embed(data, {
      gateway: _gateway_js__WEBPACK_IMPORTED_MODULE_7__.GATEWAY
    });
  }
  /**
   * Takes token input, encodes it as a DAG, wraps it in a CAR and creates a new
   * Token instance from it. Where values are discovered `Blob` (or `File`)
   * objects in the given input, they are replaced with IPFS URLs (an `ipfs://`
   * prefixed CID with an optional path).
   *
   * @example
   * ```js
   * const cat = new File(['...'], 'cat.png')
   * const kitty = new File(['...'], 'kitty.png')
   * const { token, car } = await Token.encode({
   *   name: 'hello'
   *   image: cat
   *   properties: {
   *     extra: {
   *       image: kitty
   *     }
   *   }
   * })
   * ```
   *
   * @template {TokenInput} T
   * @param {T} input
   * @returns {Promise<{ cid: CID, token: TokenType<T>, car: import('./lib/interface.js').CarReader }>}
   */


  static encode(input) {
    return (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blockstore = new _platform_js__WEBPACK_IMPORTED_MODULE_6__.Blockstore();
      const [blobs, meta] = mapTokenInputBlobs(input);
      /** @type {EncodedBlobUrl<T>} */

      const data = JSON.parse(JSON.stringify(meta));
      /** @type {import('./lib/interface.js').Encoded<T, [[Blob, CID]]>} */

      const dag = JSON.parse(JSON.stringify(meta));

      for (const [dotPath, blob] of blobs.entries()) {
        /** @type {string|undefined} */
        // @ts-ignore blob may be a File!
        const name = blob.name || 'blob';
        /** @type {import('./platform.js').ReadableStream} */

        const content = blob.stream();
        const {
          root: cid
        } = yield (0,ipfs_car_pack__WEBPACK_IMPORTED_MODULE_1__.pack)({
          input: [{
            path: name,
            content
          }],
          blockstore,
          wrapWithDirectory: true
        });
        const href = new URL(`ipfs://${cid}/${name}`);
        const path = dotPath.split('.');
        setIn(data, path, href);
        setIn(dag, path, cid);
      }

      const {
        root: metadataJsonCid
      } = yield (0,ipfs_car_pack__WEBPACK_IMPORTED_MODULE_1__.pack)({
        input: [{
          path: 'metadata.json',
          content: JSON.stringify(data)
        }],
        blockstore,
        wrapWithDirectory: false
      });
      const block = yield multiformats_block__WEBPACK_IMPORTED_MODULE_3__.encode({
        value: { ...dag,
          'metadata.json': metadataJsonCid,
          type: 'nft'
        },
        codec: _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_5__,
        hasher: multiformats_hashes_sha2__WEBPACK_IMPORTED_MODULE_4__.sha256
      });
      yield blockstore.put(block.cid, block.bytes);
      return {
        cid: block.cid,
        token: new Token(block.cid.toString(), `ipfs://${block.cid}/metadata.json`, data),
        car: new _bs_car_reader_js__WEBPACK_IMPORTED_MODULE_8__.BlockstoreCarReader(1, [block.cid], blockstore)
      };
    })();
  }

}
/**
 * @template T
 * @param {EncodedBlobUrl<T>} input
 * @param {EmbedOptions} options
 * @returns {EncodedBlobUrl<T>}
 */

const embed = (input, options) => mapWith(input, isURL, embedURL, options);
/**
 * @template {TokenInput} T
 * @param {import('./lib/interface.js').EncodedToken<T>} value
 * @param {Set<string>} paths - Paths were to expect EncodedURLs
 * @returns {Token<T>}
 */

const decode = ({
  ipnft,
  url,
  data
}, paths) => new Token(ipnft, url, mapWith(data, isEncodedURL, decodeURL, paths));
/**
 * @param {any} value
 * @returns {value is URL}
 */

const isURL = value => value instanceof URL;
/**
 * @template State
 * @param {State} state
 * @param {import('./lib/interface.js').EncodedURL} url
 * @returns {[State, URL]}
 */


const decodeURL = (state, url) => [state, new URL(url)];
/**
 * @param {EmbedOptions} context
 * @param {URL} url
 * @returns {[EmbedOptions, URL]}
 */


const embedURL = (context, url) => [context, (0,_gateway_js__WEBPACK_IMPORTED_MODULE_7__.toGatewayURL)(url, context)];
/**
 * @param {any} value
 * @returns {value is object}
 */


const isObject = value => typeof value === 'object' && value != null;
/**
 * @param {any} value
 * @param {Set<string>} assetPaths
 * @param {PropertyKey[]} path
 * @returns {value is import('./lib/interface.js').EncodedURL}
 */


const isEncodedURL = (value, assetPaths, path) => typeof value === 'string' && assetPaths.has(path.join('.'));
/**
 * Takes token input and encodes it into
 * [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
 * object where form field values are discovered `Blob` (or `File`) objects in
 * the given token and field keys are `.` joined paths where they were discoverd
 * in the token. Additionally encoded `FormData` will also have a field
 * named `meta` containing JSON serialized token with blobs and file values
 * `null` set to null (this allows backend to injest all of the files from
 * `multipart/form-data` request and update provided "meta" data with
 * corresponding file ipfs:// URLs)
 *
 * @example
 * ```js
 * const cat = new File([], 'cat.png')
 * const kitty = new File([], 'kitty.png')
 * const form = encode({
 *   name: 'hello'
 *   image: cat
 *   properties: {
 *     extra: {
 *       image: kitty
 *     }
 *   }
 * })
 * [...form.entries()] //>
 * // [
 * //   ['image', cat],
 * //   ['properties.extra.image', kitty],
 * //   ['meta', '{"name":"hello",image:null,"properties":{"extra":{"kitty": null}}}']
 * // ]
 * ```
 *
 * @template {TokenInput} T
 * @param {EncodedBlobBlob<T>} input
 * @returns {FormData}
 */


const encode = input => {
  const [map, meta] = mapValueWith(input, isBlob, encodeBlob, new Map(), []);
  const form = new _platform_js__WEBPACK_IMPORTED_MODULE_6__.FormData();

  for (const [k, v] of map.entries()) {
    form.set(k, v);
  }

  form.set('meta', JSON.stringify(meta));
  return form;
};
/**
 * @param {Map<string, Blob>} data
 * @param {Blob} blob
 * @param {PropertyKey[]} path
 * @returns {[Map<string, Blob>, void]}
 */

const encodeBlob = (data, blob, path) => {
  data.set(path.join('.'), blob);
  return [data, undefined];
};
/**
 * @param {any} value
 * @returns {value is Blob}
 */


const isBlob = value => value instanceof _platform_js__WEBPACK_IMPORTED_MODULE_6__.Blob;
/**
 * @template {TokenInput} T
 * @param {EncodedBlobBlob<T>} input
 */


const mapTokenInputBlobs = input => {
  return mapValueWith(input, isBlob, encodeBlob, new Map(), []);
};
/**
 * Substitues values in the given `input` that match `p(value) == true` with
 * `f(value, context, path)` where `context` is whatever you pass (usually
 * a mutable state) and `path` is a array of keys / indexes where the value
 * was encountered.
 *
 * @template T, I, X, O, State
 * @param {import('./lib/interface.js').Encoded<T, [[I, X]]>} input - Arbitrary input.
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p - Predicate function to determine
 * which values to swap.
 * @param {(state:State, input:X, path:PropertyKey[]) => [State, O]} f - Function
 * that swaps matching values.
 * @param {State} state - Some additional context you need in the process.
 * likey you'll start with `[]`.
 * @returns {import('./lib/interface.js').Encoded<T, [[I, O]]>}
 */


const mapWith = (input, p, f, state) => {
  const [, output] = mapValueWith(input, p, f, state, []);
  return output;
};
/**
 * @template T, I, X, O, State
 * @param {import('./lib/interface.js').Encoded<T, [[I, X]]>} input - Arbitrary input.
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p - Predicate function to determine
 * which values to swap.
 * @param {(state:State, input:X, path:PropertyKey[]) => [State, O]} f - Function
 * that swaps matching values.
 * @param {State} state - Some additional context you need in the process.
 * @param {PropertyKey[]} path - Path where the value was encountered. Most
 * likey you'll start with `[]`.
 * @returns {[State, import('./lib/interface.js').Encoded<T, [[I, O]]>]}
 */

const mapValueWith = (input, p, f, state, path) => p(input, state, path) ? f(state, input, path) : Array.isArray(input) ? mapArrayWith(input, p, f, state, path) : isObject(input) ? mapObjectWith(input, p, f, state, path) : [state,
/** @type {any} */
input];
/**
 * Just like `mapWith` except
 *
 * @template State, T, I, X, O
 * @param {import('./lib/interface.js').Encoded<T, [[I, X]]>} input
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p
 * @param {(state: State, input:X, path:PropertyKey[]) => [State, O]} f
 * @param {State} init
 * @param {PropertyKey[]} path
 * @returns {[State, import('./lib/interface.js').Encoded<T, [[I, O]]>]}
 */


const mapObjectWith = (input, p, f, init, path) => {
  let state = init;
  const output =
  /** @type {import('./lib/interface.js').Encoded<T, [[I, O]]>} */
  {};

  for (const [key, value] of Object.entries(input)) {
    const [next, out] = mapValueWith(value, p, f, state, [...path, key]); // @ts-ignore

    output[key] = out;
    state = next;
  }

  return [state, output];
};
/**
 * Just like `mapWith` except for Arrays.
 *
 * @template I, X, O, State
 * @template {any[]} T
 * @param {T} input
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p
 * @param {(state: State, input:X, path:PropertyKey[]) => [State, O]} f
 * @param {State} init
 * @param {PropertyKey[]} path
 * @returns {[State, import('./lib/interface.js').Encoded<T, [[I, O]]>]}
 */


const mapArrayWith = (input, p, f, init, path) => {
  const output =
  /** @type {unknown[]} */
  [];
  let state = init;

  for (const [index, element] of input.entries()) {
    const [next, out] = mapValueWith(element, p, f, state, [...path, index]);
    output[index] = out;
    state = next;
  }

  return [state,
  /** @type {import('./lib/interface.js').Encoded<T, [[I, O]]>} */
  output];
};
/**
 * Sets a given `value` at the given `path` on a passed `object`.
 *
 * @example
 * ```js
 * const obj = { a: { b: { c: 1 }}}
 * setIn(obj, ['a', 'b', 'c'], 5)
 * obj.a.b.c //> 5
 * ```
 *
 * @template V
 * @param {any} object
 * @param {string[]} path
 * @param {V} value
 */


const setIn = (object, path, value) => {
  const n = path.length - 1;
  let target = object;

  for (let [index, key] of path.entries()) {
    if (index === n) {
      target[key] = value;
    } else {
      target = target[key];
    }
  }
};

/***/ }),

/***/ 73061:
/*!*********************************************************!*\
  !*** ./node_modules/streaming-iterables/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batch": () => (/* binding */ batch),
/* harmony export */   "batchWithTimeout": () => (/* binding */ batchWithTimeout),
/* harmony export */   "buffer": () => (/* binding */ buffer),
/* harmony export */   "collect": () => (/* binding */ collect),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "consume": () => (/* binding */ consume),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "flatMap": () => (/* binding */ flatMap),
/* harmony export */   "flatTransform": () => (/* binding */ flatTransform),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "fromStream": () => (/* binding */ fromStream),
/* harmony export */   "getIterator": () => (/* binding */ getIterator),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "parallelFlatMap": () => (/* binding */ parallelFlatMap),
/* harmony export */   "parallelMap": () => (/* binding */ parallelMap),
/* harmony export */   "parallelMerge": () => (/* binding */ parallelMerge),
/* harmony export */   "pipeline": () => (/* binding */ pipeline),
/* harmony export */   "reduce": () => (/* binding */ reduce),
/* harmony export */   "take": () => (/* binding */ take),
/* harmony export */   "tap": () => (/* binding */ tap),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "writeToStream": () => (/* binding */ writeToStream)
/* harmony export */ });
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js */ 81619);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js */ 87507);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js */ 26865);
/* harmony import */ var C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js */ 38665);






function _batch(_x, _x2) {
  return _batch2.apply(this, arguments);
}

function _batch2() {
  _batch2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (size, iterable) {
    let dataBatch = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const data = _step.value;
        dataBatch.push(data);

        if (dataBatch.length === size) {
          yield dataBatch;
          dataBatch = [];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (dataBatch.length > 0) {
      yield dataBatch;
    }
  });
  return _batch2.apply(this, arguments);
}

function* _syncBatch(size, iterable) {
  let dataBatch = [];

  for (const data of iterable) {
    dataBatch.push(data);

    if (dataBatch.length === size) {
      yield dataBatch;
      dataBatch = [];
    }
  }

  if (dataBatch.length > 0) {
    yield dataBatch;
  }
}

function batch(size, iterable) {
  if (iterable === undefined) {
    return curriedIterable => batch(size, curriedIterable);
  }

  if (iterable[Symbol.asyncIterator]) {
    return _batch(size, iterable);
  }

  return _syncBatch(size, iterable);
}

const TIMEOUT = Symbol('TIMEOUT');

const createTimer = duration => {
  let timeoutId;
  return [new Promise(resolve => {
    timeoutId = setTimeout(() => resolve(TIMEOUT), duration);
  }), () => {
    clearTimeout(timeoutId);
  }];
}; // Like `batch` but flushes early if the `timeout` is reached
// NOTE: The strategy is to only hold onto a single item for a maximum of `timeout` ms.


function _batchWithTimeout(_x3, _x4, _x5) {
  return _batchWithTimeout2.apply(this, arguments);
}

function _batchWithTimeout2() {
  _batchWithTimeout2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (size, timeout, iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    let pendingData;
    let batchData = [];
    let timer;
    let clearTimer;

    const startTimer = () => {
      deleteTimer();
      [timer, clearTimer] = createTimer(timeout);
    };

    const deleteTimer = () => {
      if (clearTimer) {
        clearTimer();
      }

      timer = undefined;
    };

    pendingData = iterator.next();

    while (true) {
      const res = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timer ? Promise.race([pendingData, timer]) : pendingData);

      if (res === TIMEOUT || res.done) {
        // Flush early (before we reach the batch size)
        if (batchData.length) {
          yield batchData;
          batchData = [];
        }

        deleteTimer(); // And exit appropriately

        if (res !== TIMEOUT) {
          // done
          break;
        }

        continue;
      } // Fetch next item early doors (before we potentially yield)


      pendingData = iterator.next(); // Then handle the value

      batchData.push(res.value);

      if (batchData.length === 1) {
        // Start timer once we have at least 1 item ready to go
        startTimer();
      }

      if (batchData.length === size) {
        yield batchData;
        batchData = [];
        deleteTimer();
        continue;
      }
    }
  });
  return _batchWithTimeout2.apply(this, arguments);
}

function batchWithTimeout(size, timeout, iterable) {
  if (iterable === undefined) {
    return curriedIterable => batchWithTimeout(size, timeout, curriedIterable);
  }

  if (iterable[Symbol.asyncIterator] && timeout !== Infinity) {
    return _batchWithTimeout(size, timeout, iterable);
  } // For sync iterables or an infinite timeout, the timeout is irrelevant so just fallback to regular `batch`.


  return batch(size, iterable);
}

function getIterator(iterable) {
  if (typeof iterable.next === 'function') {
    return iterable;
  }

  if (typeof iterable[Symbol.iterator] === 'function') {
    return iterable[Symbol.iterator]();
  }

  if (typeof iterable[Symbol.asyncIterator] === 'function') {
    return iterable[Symbol.asyncIterator]();
  }

  throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols');
}

function defer() {
  let reject;
  let resolve;
  const promise = new Promise((resolveFunc, rejectFunc) => {
    resolve = resolveFunc;
    reject = rejectFunc;
  });
  return {
    promise,
    reject,
    resolve
  };
}

function _buffer(size, iterable) {
  const iterator = getIterator(iterable);
  const resultQueue = [];
  const readQueue = [];
  let reading = false;
  let ended = false;

  function fulfillReadQueue() {
    while (readQueue.length > 0 && resultQueue.length > 0) {
      const readDeferred = readQueue.shift();
      const {
        error,
        value
      } = resultQueue.shift();

      if (error) {
        readDeferred.reject(error);
      } else {
        readDeferred.resolve({
          done: false,
          value
        });
      }
    }

    while (readQueue.length > 0 && ended) {
      const {
        resolve
      } = readQueue.shift();
      resolve({
        done: true,
        value: undefined
      });
    }
  }

  function fillQueue() {
    return _fillQueue.apply(this, arguments);
  }

  function _fillQueue() {
    _fillQueue = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (ended) {
        return;
      }

      if (reading) {
        return;
      }

      if (resultQueue.length >= size) {
        return;
      }

      reading = true;

      try {
        const {
          done,
          value
        } = yield iterator.next();

        if (done) {
          ended = true;
        } else {
          resultQueue.push({
            value
          });
        }
      } catch (error) {
        ended = true;
        resultQueue.push({
          error
        });
      }

      fulfillReadQueue();
      reading = false;
      fillQueue();
    });
    return _fillQueue.apply(this, arguments);
  }

  function next() {
    return _next.apply(this, arguments);
  }

  function _next() {
    _next = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (resultQueue.length > 0) {
        const {
          error,
          value
        } = resultQueue.shift();

        if (error) {
          throw error;
        }

        fillQueue();
        return {
          done: false,
          value
        };
      }

      if (ended) {
        return {
          done: true,
          value: undefined
        }; // stupid ts
      }

      const deferred = defer();
      readQueue.push(deferred);
      fillQueue();
      return deferred.promise;
    });
    return _next.apply(this, arguments);
  }

  const asyncIterableIterator = {
    next,
    [Symbol.asyncIterator]: () => asyncIterableIterator
  };
  return asyncIterableIterator;
}

function* syncBuffer(size, iterable) {
  const valueQueue = [];
  let e;

  try {
    for (const value of iterable) {
      valueQueue.push(value);

      if (valueQueue.length <= size) {
        continue;
      }

      yield valueQueue.shift();
    }
  } catch (error) {
    e = error;
  }

  for (const value of valueQueue) {
    yield value;
  }

  if (e) {
    throw e;
  }
}

function buffer(size, iterable) {
  if (iterable === undefined) {
    return curriedIterable => buffer(size, curriedIterable);
  }

  if (size === 0) {
    return iterable;
  }

  if (iterable[Symbol.asyncIterator]) {
    return _buffer(size, iterable);
  }

  return syncBuffer(size, iterable);
}

function _collect(_x23) {
  return _collect2.apply(this, arguments);
}

function _collect2() {
  _collect2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (iterable) {
    const values = [];
    var _iteratorAbruptCompletion2 = false;
    var _didIteratorError2 = false;

    var _iteratorError2;

    try {
      for (var _iterator2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _iterator2.next()).done; _iteratorAbruptCompletion2 = false) {
        const value = _step2.value;
        values.push(value);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
          yield _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return values;
  });
  return _collect2.apply(this, arguments);
}

function collect(iterable) {
  if (iterable[Symbol.asyncIterator]) {
    return _collect(iterable);
  }

  return Array.from(iterable);
}

function _concat(_x6) {
  return _concat2.apply(this, arguments);
}

function _concat2() {
  _concat2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (iterables) {
    var _iteratorAbruptCompletion3 = false;
    var _didIteratorError3 = false;

    var _iteratorError3;

    try {
      for (var _iterator3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterables), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator3.next())).done; _iteratorAbruptCompletion3 = false) {
        const iterable = _step3.value;
        yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator3.return());
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  });
  return _concat2.apply(this, arguments);
}

function* _syncConcat(iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}

function concat(...iterables) {
  const hasAnyAsync = iterables.find(itr => itr[Symbol.asyncIterator] !== undefined);

  if (hasAnyAsync) {
    return _concat(iterables);
  } else {
    return _syncConcat(iterables);
  }
}

function _consume(_x24) {
  return _consume2.apply(this, arguments);
}

function _consume2() {
  _consume2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (iterable) {
    var _iteratorAbruptCompletion4 = false;
    var _didIteratorError4 = false;

    var _iteratorError4;

    try {
      for (var _iterator4 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step4; _iteratorAbruptCompletion4 = !(_step4 = yield _iterator4.next()).done; _iteratorAbruptCompletion4 = false) {// do nothing

        const val = _step4.value;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion4 && _iterator4.return != null) {
          yield _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  });
  return _consume2.apply(this, arguments);
}

function consume(iterable) {
  if (iterable[Symbol.asyncIterator]) {
    return _consume(iterable);
  }

  for (const val of iterable) {// do nothing
  }
}

function _filter(_x7, _x8) {
  return _filter2.apply(this, arguments);
}

function _filter2() {
  _filter2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (filterFunc, iterable) {
    var _iteratorAbruptCompletion5 = false;
    var _didIteratorError5 = false;

    var _iteratorError5;

    try {
      for (var _iterator5 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step5; _iteratorAbruptCompletion5 = !(_step5 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator5.next())).done; _iteratorAbruptCompletion5 = false) {
        const data = _step5.value;

        if (yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(filterFunc(data))) {
          yield data;
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion5 && _iterator5.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator5.return());
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  });
  return _filter2.apply(this, arguments);
}

function filter(filterFunc, iterable) {
  if (iterable === undefined) {
    return curriedIterable => _filter(filterFunc, curriedIterable);
  }

  return _filter(filterFunc, iterable);
}

function flatten(_x9) {
  return _flatten.apply(this, arguments);
}

function _flatten() {
  _flatten = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (iterable) {
    var _iteratorAbruptCompletion6 = false;
    var _didIteratorError6 = false;

    var _iteratorError6;

    try {
      for (var _iterator6 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step6; _iteratorAbruptCompletion6 = !(_step6 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator6.next())).done; _iteratorAbruptCompletion6 = false) {
        const maybeItr = _step6.value;

        if (maybeItr && typeof maybeItr !== 'string' && (maybeItr[Symbol.iterator] || maybeItr[Symbol.asyncIterator])) {
          yield* (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncGeneratorDelegate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(flatten(maybeItr)), C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        } else {
          yield maybeItr;
        }
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion6 && _iterator6.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator6.return());
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  });
  return _flatten.apply(this, arguments);
}

function _map(_x10, _x11) {
  return _map2.apply(this, arguments);
}

function _map2() {
  _map2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (func, iterable) {
    var _iteratorAbruptCompletion7 = false;
    var _didIteratorError7 = false;

    var _iteratorError7;

    try {
      for (var _iterator7 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step7; _iteratorAbruptCompletion7 = !(_step7 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator7.next())).done; _iteratorAbruptCompletion7 = false) {
        const val = _step7.value;
        yield yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func(val));
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion7 && _iterator7.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator7.return());
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }
  });
  return _map2.apply(this, arguments);
}

function map(func, iterable) {
  if (iterable === undefined) {
    return curriedIterable => _map(func, curriedIterable);
  }

  return _map(func, iterable);
}

function flatMap(func, iterable) {
  if (iterable === undefined) {
    return curriedIterable => flatMap(func, curriedIterable);
  }

  return filter(i => i !== undefined && i !== null, flatten(map(func, iterable)));
}

function _flatTransform(concurrency, func, iterable) {
  const iterator = getIterator(iterable);
  const resultQueue = [];
  const readQueue = [];
  let ended = false;
  let reading = false;
  let inflightCount = 0;
  let lastError = null;

  function fulfillReadQueue() {
    while (readQueue.length > 0 && resultQueue.length > 0) {
      const {
        resolve
      } = readQueue.shift();
      const value = resultQueue.shift();
      resolve({
        done: false,
        value
      });
    }

    while (readQueue.length > 0 && inflightCount === 0 && ended) {
      const {
        resolve,
        reject
      } = readQueue.shift();

      if (lastError) {
        reject(lastError);
        lastError = null;
      } else {
        resolve({
          done: true,
          value: undefined
        });
      }
    }
  }

  function fillQueue() {
    return _fillQueue2.apply(this, arguments);
  }

  function _fillQueue2() {
    _fillQueue2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (ended) {
        fulfillReadQueue();
        return;
      }

      if (reading) {
        return;
      }

      if (inflightCount + resultQueue.length >= concurrency) {
        return;
      }

      reading = true;
      inflightCount++;

      try {
        const {
          done,
          value
        } = yield iterator.next();

        if (done) {
          ended = true;
          inflightCount--;
          fulfillReadQueue();
        } else {
          mapAndQueue(value);
        }
      } catch (error) {
        ended = true;
        inflightCount--;
        lastError = error;
        fulfillReadQueue();
      }

      reading = false;
      fillQueue();
    });
    return _fillQueue2.apply(this, arguments);
  }

  function mapAndQueue(_x25) {
    return _mapAndQueue.apply(this, arguments);
  }

  function _mapAndQueue() {
    _mapAndQueue = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (itrValue) {
      try {
        const value = yield func(itrValue);

        if (value && value[Symbol.asyncIterator]) {
          var _iteratorAbruptCompletion8 = false;
          var _didIteratorError8 = false;

          var _iteratorError8;

          try {
            for (var _iterator8 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value), _step8; _iteratorAbruptCompletion8 = !(_step8 = yield _iterator8.next()).done; _iteratorAbruptCompletion8 = false) {
              const asyncVal = _step8.value;
              resultQueue.push(asyncVal);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion8 && _iterator8.return != null) {
                yield _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        } else {
          resultQueue.push(value);
        }
      } catch (error) {
        ended = true;
        lastError = error;
      }

      inflightCount--;
      fulfillReadQueue();
      fillQueue();
    });
    return _mapAndQueue.apply(this, arguments);
  }

  function next() {
    return _next2.apply(this, arguments);
  }

  function _next2() {
    _next2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (resultQueue.length === 0) {
        const deferred = defer();
        readQueue.push(deferred);
        fillQueue();
        return deferred.promise;
      }

      const value = resultQueue.shift();
      fillQueue();
      return {
        done: false,
        value
      };
    });
    return _next2.apply(this, arguments);
  }

  const asyncIterableIterator = {
    next,
    [Symbol.asyncIterator]: () => asyncIterableIterator
  };
  return asyncIterableIterator;
}

function flatTransform(concurrency, func, iterable) {
  if (func === undefined) {
    return (curriedFunc, curriedIterable) => curriedIterable ? flatTransform(concurrency, curriedFunc, curriedIterable) : flatTransform(concurrency, curriedFunc);
  }

  if (iterable === undefined) {
    return curriedIterable => flatTransform(concurrency, func, curriedIterable);
  }

  return filter(i => i !== undefined && i !== null, flatten(_flatTransform(concurrency, func, iterable)));
}

function onceReadable(_x26) {
  return _onceReadable.apply(this, arguments);
}

function _onceReadable() {
  _onceReadable = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (stream) {
    return new Promise(resolve => {
      stream.once('readable', () => {
        resolve();
      });
    });
  });
  return _onceReadable.apply(this, arguments);
}

function _fromStream(_x12) {
  return _fromStream2.apply(this, arguments);
}

function _fromStream2() {
  _fromStream2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (stream) {
    while (true) {
      const data = stream.read();

      if (data !== null) {
        yield data;
        continue;
      }

      if (stream._readableState.ended) {
        break;
      }

      yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(onceReadable(stream));
    }
  });
  return _fromStream2.apply(this, arguments);
}

function fromStream(stream) {
  if (typeof stream[Symbol.asyncIterator] === 'function') {
    return stream;
  }

  return _fromStream(stream);
}

function merge() {
  return _merge.apply(this, arguments);
}

function _merge() {
  _merge = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (...iterables) {
    const sources = new Set(iterables.map(getIterator));

    while (sources.size > 0) {
      for (const iterator of sources) {
        const nextVal = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iterator.next());

        if (nextVal.done) {
          sources.delete(iterator);
        } else {
          yield nextVal.value;
        }
      }
    }
  });
  return _merge.apply(this, arguments);
}

function pipeline(firstFn, ...fns) {
  let previousFn = firstFn();

  for (const func of fns) {
    previousFn = func(previousFn);
  }

  return previousFn;
}

function _parallelMap(_x13, _x14, _x15) {
  return _parallelMap2.apply(this, arguments);
}

function _parallelMap2() {
  _parallelMap2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (concurrency, func, iterable) {
    let transformError = null;

    const wrapFunc = value => ({
      value: func(value)
    });

    const stopOnError = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (source) {
        var _iteratorAbruptCompletion14 = false;
        var _didIteratorError14 = false;

        var _iteratorError14;

        try {
          for (var _iterator14 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(source), _step14; _iteratorAbruptCompletion14 = !(_step14 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator14.next())).done; _iteratorAbruptCompletion14 = false) {
            const value = _step14.value;

            if (transformError) {
              return;
            }

            yield value;
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (_iteratorAbruptCompletion14 && _iterator14.return != null) {
              yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator14.return());
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }
      });

      return function stopOnError(_x22) {
        return _ref.apply(this, arguments);
      };
    }();

    const output = pipeline(() => iterable, buffer(1), stopOnError, map(wrapFunc), buffer(concurrency - 1));
    const itr = getIterator(output);

    while (true) {
      const {
        value,
        done
      } = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(itr.next());

      if (done) {
        break;
      }

      try {
        const val = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value.value);

        if (!transformError) {
          yield val;
        }
      } catch (error) {
        transformError = error;
      }
    }

    if (transformError) {
      throw transformError;
    }
  });
  return _parallelMap2.apply(this, arguments);
}

function parallelMap(concurrency, func, iterable) {
  if (func === undefined) {
    return (curriedFunc, curriedIterable) => parallelMap(concurrency, curriedFunc, curriedIterable);
  }

  if (iterable === undefined) {
    return curriedIterable => parallelMap(concurrency, func, curriedIterable);
  }

  if (concurrency === 1) {
    return map(func, iterable);
  }

  return _parallelMap(concurrency, func, iterable);
}

function parallelFlatMap(concurrency, func, iterable) {
  if (func === undefined) {
    return (curriedFunc, curriedIterable) => curriedIterable ? parallelFlatMap(concurrency, curriedFunc, curriedIterable) : parallelFlatMap(concurrency, curriedFunc);
  }

  if (iterable === undefined) {
    return curriedIterable => parallelFlatMap(concurrency, func, curriedIterable);
  }

  return filter(i => i !== undefined && i !== null, flatten(parallelMap(concurrency, func, iterable)));
}

function parallelMerge() {
  return _parallelMerge.apply(this, arguments);
}

function _parallelMerge() {
  _parallelMerge = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (...iterables) {
    const inputs = iterables.map(getIterator);
    const concurrentWork = new Set();
    const values = new Map();
    let lastError = null;
    let errCb = null;
    let valueCb = null;

    const notifyError = err => {
      lastError = err;

      if (errCb) {
        errCb(err);
      }
    };

    const notifyDone = value => {
      if (valueCb) {
        valueCb(value);
      }
    };

    const waitForQueue = () => new Promise((resolve, reject) => {
      if (lastError) {
        reject(lastError);
      }

      if (values.size > 0) {
        return resolve();
      }

      valueCb = resolve;
      errCb = reject;
    });

    const queueNext = input => {
      const nextVal = Promise.resolve(input.next()).then( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          done,
          value
        }) {
          if (!done) {
            values.set(input, value);
          }

          concurrentWork.delete(nextVal);
        });

        return function (_x27) {
          return _ref2.apply(this, arguments);
        };
      }());
      concurrentWork.add(nextVal);
      nextVal.then(notifyDone, notifyError);
    };

    for (const input of inputs) {
      queueNext(input);
    }

    while (true) {
      // We technically don't have to check `values.size` as the for loop should have emptied it
      // However I haven't yet found specs verifying that behavior, only tests
      // the guard in waitForQueue() checking for values is in place for the same reason
      if (concurrentWork.size === 0 && values.size === 0) {
        return;
      }

      yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(waitForQueue());

      for (const [input, value] of values) {
        values.delete(input);
        yield value;
        queueNext(input);
      }
    }
  });
  return _parallelMerge.apply(this, arguments);
}

function _reduce(_x28, _x29, _x30) {
  return _reduce2.apply(this, arguments);
}

function _reduce2() {
  _reduce2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (func, start, iterable) {
    let value = start;
    var _iteratorAbruptCompletion9 = false;
    var _didIteratorError9 = false;

    var _iteratorError9;

    try {
      for (var _iterator9 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step9; _iteratorAbruptCompletion9 = !(_step9 = yield _iterator9.next()).done; _iteratorAbruptCompletion9 = false) {
        const nextItem = _step9.value;
        value = yield func(value, nextItem);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion9 && _iterator9.return != null) {
          yield _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }

    return value;
  });
  return _reduce2.apply(this, arguments);
}

function reduce(func, start, iterable) {
  if (start === undefined) {
    return (curriedStart, curriedIterable) => curriedIterable ? _reduce(func, curriedStart, curriedIterable) : reduce(func, curriedStart);
  }

  if (iterable === undefined) {
    return curriedIterable => reduce(func, start, curriedIterable);
  }

  return _reduce(func, start, iterable);
}

function _take(_x16, _x17) {
  return _take2.apply(this, arguments);
}

function _take2() {
  _take2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (count, iterable) {
    let taken = 0;
    var _iteratorAbruptCompletion10 = false;
    var _didIteratorError10 = false;

    var _iteratorError10;

    try {
      for (var _iterator10 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step10; _iteratorAbruptCompletion10 = !(_step10 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator10.next())).done; _iteratorAbruptCompletion10 = false) {
        const val = _step10.value;
        yield yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(val);
        taken++;

        if (taken >= count) {
          break;
        }
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion10 && _iterator10.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator10.return());
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }
  });
  return _take2.apply(this, arguments);
}

function* _syncTake(count, iterable) {
  let taken = 0;

  for (const val of iterable) {
    yield val;
    taken++;

    if (taken >= count) {
      break;
    }
  }
}

function take(count, iterable) {
  if (iterable === undefined) {
    return curriedIterable => take(count, curriedIterable);
  }

  if (iterable[Symbol.asyncIterator]) {
    return _take(count, iterable);
  }

  return _syncTake(count, iterable);
}

function _asyncTap(_x18, _x19) {
  return _asyncTap2.apply(this, arguments);
}

function _asyncTap2() {
  _asyncTap2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (func, iterable) {
    var _iteratorAbruptCompletion11 = false;
    var _didIteratorError11 = false;

    var _iteratorError11;

    try {
      for (var _iterator11 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step11; _iteratorAbruptCompletion11 = !(_step11 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator11.next())).done; _iteratorAbruptCompletion11 = false) {
        const val = _step11.value;
        yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func(val));
        yield val;
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion11 && _iterator11.return != null) {
          yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator11.return());
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }
  });
  return _asyncTap2.apply(this, arguments);
}

function tap(func, iterable) {
  if (iterable === undefined) {
    return curriedIterable => _asyncTap(func, curriedIterable);
  }

  return _asyncTap(func, iterable);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function _throttle(limit, interval, iterable) {
  if (!Number.isFinite(limit)) {
    throw new TypeError('Expected `limit` to be a finite number');
  }

  if (limit <= 0) {
    throw new TypeError('Expected `limit` to be greater than 0');
  }

  if (!Number.isFinite(interval)) {
    throw new TypeError('Expected `interval` to be a finite number');
  }

  return function () {
    var _throttle2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      let sent = 0;
      let time;
      var _iteratorAbruptCompletion12 = false;
      var _didIteratorError12 = false;

      var _iteratorError12;

      try {
        for (var _iterator12 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step12; _iteratorAbruptCompletion12 = !(_step12 = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator12.next())).done; _iteratorAbruptCompletion12 = false) {
          const val = _step12.value;

          if (sent < limit) {
            if (typeof time === 'undefined') {
              time = Date.now();
            }

            sent++;
            yield val;
            continue;
          } // Only wait if the interval hasn't already passed while we were
          // yielding the previous values.


          const elapsedMs = Date.now() - time;
          const waitFor = interval - elapsedMs;

          if (waitFor > 0) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sleep(waitFor));
          }

          time = Date.now();
          sent = 1;
          yield val;
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion12 && _iterator12.return != null) {
            yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_iterator12.return());
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    });

    function __throttle() {
      return _throttle2.apply(this, arguments);
    }

    return __throttle;
  }()();
}

function throttle(limit, interval, iterable) {
  if (iterable === undefined) {
    return curriedIterable => _throttle(limit, interval, curriedIterable);
  }

  return _throttle(limit, interval, iterable);
}

function addTime(a, b) {
  let seconds = a[0] + b[0];
  let nanoseconds = a[1] + b[1];

  if (nanoseconds >= 1000000000) {
    const remainder = nanoseconds % 1000000000;
    seconds += (nanoseconds - remainder) / 1000000000;
    nanoseconds = remainder;
  }

  return [seconds, nanoseconds];
}

function _asyncTime(_x20, _x21) {
  return _asyncTime2.apply(this, arguments);
}

function _asyncTime2() {
  _asyncTime2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_wrapAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (config, iterable) {
    const itr = iterable[Symbol.asyncIterator]();
    let total = [0, 0];

    while (true) {
      const start = process.hrtime();
      const {
        value,
        done
      } = yield (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_awaitAsyncGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(itr.next());
      const delta = process.hrtime(start);
      total = addTime(total, delta);

      if (config.progress) {
        config.progress(delta, total);
      }

      if (done) {
        if (config.total) {
          config.total(total);
        }

        return value;
      }

      yield value;
    }
  });
  return _asyncTime2.apply(this, arguments);
}

function* _syncTime(config, iterable) {
  const itr = iterable[Symbol.iterator]();
  let total = [0, 0];

  while (true) {
    const start = process.hrtime();
    const {
      value,
      done
    } = itr.next();
    const delta = process.hrtime(start);
    total = addTime(total, delta);

    if (config.progress) {
      config.progress(delta, total);
    }

    if (done) {
      if (config.total) {
        config.total(total);
      }

      return value;
    }

    yield value;
  }
}

function time(config = {}, iterable) {
  if (iterable === undefined) {
    return curriedIterable => time(config, curriedIterable);
  }

  if (iterable[Symbol.asyncIterator] !== undefined) {
    return _asyncTime(config, iterable);
  } else {
    return _syncTime(config, iterable);
  }
}

function _transform(concurrency, func, iterable) {
  const iterator = getIterator(iterable);
  const resultQueue = [];
  const readQueue = [];
  let ended = false;
  let reading = false;
  let inflightCount = 0;
  let lastError = null;

  function fulfillReadQueue() {
    while (readQueue.length > 0 && resultQueue.length > 0) {
      const {
        resolve
      } = readQueue.shift();
      const value = resultQueue.shift();
      resolve({
        done: false,
        value
      });
    }

    while (readQueue.length > 0 && inflightCount === 0 && ended) {
      const {
        resolve,
        reject
      } = readQueue.shift();

      if (lastError) {
        reject(lastError);
        lastError = null;
      } else {
        resolve({
          done: true,
          value: undefined
        });
      }
    }
  }

  function fillQueue() {
    return _fillQueue3.apply(this, arguments);
  }

  function _fillQueue3() {
    _fillQueue3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (ended) {
        fulfillReadQueue();
        return;
      }

      if (reading) {
        return;
      }

      if (inflightCount + resultQueue.length >= concurrency) {
        return;
      }

      reading = true;
      inflightCount++;

      try {
        const {
          done,
          value
        } = yield iterator.next();

        if (done) {
          ended = true;
          inflightCount--;
          fulfillReadQueue();
        } else {
          mapAndQueue(value);
        }
      } catch (error) {
        ended = true;
        inflightCount--;
        lastError = error;
        fulfillReadQueue();
      }

      reading = false;
      fillQueue();
    });
    return _fillQueue3.apply(this, arguments);
  }

  function mapAndQueue(_x31) {
    return _mapAndQueue2.apply(this, arguments);
  }

  function _mapAndQueue2() {
    _mapAndQueue2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (itrValue) {
      try {
        const value = yield func(itrValue);
        resultQueue.push(value);
      } catch (error) {
        ended = true;
        lastError = error;
      }

      inflightCount--;
      fulfillReadQueue();
      fillQueue();
    });
    return _mapAndQueue2.apply(this, arguments);
  }

  function next() {
    return _next3.apply(this, arguments);
  }

  function _next3() {
    _next3 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (resultQueue.length === 0) {
        const deferred = defer();
        readQueue.push(deferred);
        fillQueue();
        return deferred.promise;
      }

      const value = resultQueue.shift();
      fillQueue();
      return {
        done: false,
        value
      };
    });
    return _next3.apply(this, arguments);
  }

  const asyncIterableIterator = {
    next,
    [Symbol.asyncIterator]: () => asyncIterableIterator
  };
  return asyncIterableIterator;
}

function transform(concurrency, func, iterable) {
  if (func === undefined) {
    return (curriedFunc, curriedIterable) => curriedIterable ? transform(concurrency, curriedFunc, curriedIterable) : transform(concurrency, curriedFunc);
  }

  if (iterable === undefined) {
    return curriedIterable => transform(concurrency, func, curriedIterable);
  }

  return _transform(concurrency, func, iterable);
}

function _writeToStream(_x32, _x33) {
  return _writeToStream2.apply(this, arguments);
}

function _writeToStream2() {
  _writeToStream2 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (stream, iterable) {
    let lastError = null;
    let errCb = null;
    let drainCb = null;

    const notifyError = err => {
      lastError = err;

      if (errCb) {
        errCb(err);
      }
    };

    const notifyDrain = () => {
      if (drainCb) {
        drainCb();
      }
    };

    const cleanup = () => {
      stream.removeListener('error', notifyError);
      stream.removeListener('drain', notifyDrain);
    };

    stream.once('error', notifyError);

    const waitForDrain = () => new Promise((resolve, reject) => {
      if (lastError) {
        return reject(lastError);
      }

      stream.once('drain', notifyDrain);
      drainCb = resolve;
      errCb = reject;
    });

    var _iteratorAbruptCompletion13 = false;
    var _didIteratorError13 = false;

    var _iteratorError13;

    try {
      for (var _iterator13 = (0,C_Users_Administrathor_Desktop_TheWall_desarrollo_thewall_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(iterable), _step13; _iteratorAbruptCompletion13 = !(_step13 = yield _iterator13.next()).done; _iteratorAbruptCompletion13 = false) {
        const value = _step13.value;

        if (stream.write(value) === false) {
          yield waitForDrain();
        }

        if (lastError) {
          break;
        }
      }
    } catch (err) {
      _didIteratorError13 = true;
      _iteratorError13 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion13 && _iterator13.return != null) {
          yield _iterator13.return();
        }
      } finally {
        if (_didIteratorError13) {
          throw _iteratorError13;
        }
      }
    }

    cleanup();

    if (lastError) {
      throw lastError;
    }
  });
  return _writeToStream2.apply(this, arguments);
}

function writeToStream(stream, iterable) {
  if (iterable === undefined) {
    return curriedIterable => _writeToStream(stream, curriedIterable);
  }

  return _writeToStream(stream, iterable);
}



/***/ }),

/***/ 66762:
/*!***************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/alloc.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alloc": () => (/* binding */ alloc),
/* harmony export */   "allocUnsafe": () => (/* binding */ allocUnsafe)
/* harmony export */ });
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/as-uint8array.js */ 45336);

function alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.alloc(size));
  }

  return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.allocUnsafe(size));
  }

  return new Uint8Array(size);
}

/***/ }),

/***/ 49330:
/*!****************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/concat.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ 66762);
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ 45336);


function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }

  const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(length);
  let offset = 0;

  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }

  return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(output);
}

/***/ }),

/***/ 43807:
/*!*********************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/from-string.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ 21992);
/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ 45336);


function fromString(string, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__["default"][encoding];

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }

  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(globalThis.Buffer.from(string, 'utf-8'));
  }

  return base.decoder.decode(`${base.prefix}${string}`);
}

/***/ }),

/***/ 45336:
/*!****************************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/util/as-uint8array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asUint8Array": () => (/* binding */ asUint8Array)
/* harmony export */ });
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }

  return buf;
}

/***/ }),

/***/ 21992:
/*!********************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/util/bases.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ 22001);
/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alloc.js */ 66762);



function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: {
      decode
    }
  };
}

const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';

  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }

  return string;
}, str => {
  str = str.substring(1);
  const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__.allocUnsafe)(str.length);

  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }

  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);

/***/ }),

/***/ 28451:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/AsyncGenerator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncGenerator)
/* harmony export */ });
/* harmony import */ var _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AwaitValue.js */ 87391);

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
};

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

/***/ }),

/***/ 87391:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/AwaitValue.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _AwaitValue)
/* harmony export */ });
function _AwaitValue(value) {
  this.wrapped = value;
}

/***/ }),

/***/ 81619:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncGeneratorDelegate)
/* harmony export */ });
function _asyncGeneratorDelegate(inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  ;

  iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () {
    return this;
  };

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner["throw"] === "function") {
    iter["throw"] = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner["return"] === "function") {
    iter["return"] = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("return", value);
    };
  }

  return iter;
}

/***/ }),

/***/ 38665:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncIterator)
/* harmony export */ });
function _asyncIterator(iterable) {
  var method,
      async,
      sync,
      retry = 2;

  for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) {
    if (async && null != (method = iterable[async])) return method.call(iterable);
    if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
    async = "@@asyncIterator", sync = "@@iterator";
  }

  throw new TypeError("Object is not async iterable");
}

function AsyncFromSyncIterator(s) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var done = r.done;
    return Promise.resolve(r.value).then(function (value) {
      return {
        value: value,
        done: done
      };
    });
  }

  return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) {
    this.s = s, this.n = s.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function next() {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    "return": function _return(value) {
      var ret = this.s["return"];
      return void 0 === ret ? Promise.resolve({
        value: value,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
    },
    "throw": function _throw(value) {
      var thr = this.s["return"];
      return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(s);
}

/***/ }),

/***/ 87507:
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _awaitAsyncGenerator)
/* harmony export */ });
/* harmony import */ var _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AwaitValue.js */ 87391);

function _awaitAsyncGenerator(value) {
  return new _AwaitValue_js__WEBPACK_IMPORTED_MODULE_0__["default"](value);
}

/***/ }),

/***/ 26865:
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapAsyncGenerator)
/* harmony export */ });
/* harmony import */ var _AsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncGenerator.js */ 28451);

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"](fn.apply(this, arguments));
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_mintear_mintear_module_ts.js.map