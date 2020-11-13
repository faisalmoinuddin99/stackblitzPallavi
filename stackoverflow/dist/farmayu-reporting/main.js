(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _image_map_image_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-map/image-map.component */ "Mqab");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "D8EZ");
/* harmony import */ var src_app_shared_services_main_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/main-service.service */ "T+Qh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");















function MainComponent_mat_card_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PRICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/icons/crops/", crop_r6.Name, ".PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", crop_r6.Quantity, " Kgs");
} }
function MainComponent_mat_card_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PRICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/icons/crops/", crop_r7.name, ".PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r7.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", crop_r7.Quantity, " Kgs");
} }
function MainComponent_mat_card_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PRICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/icons/crops/", crop_r8.name, ".PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r8.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", crop_r8.Quantity, " Kgs");
} }
function MainComponent_mat_card_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r9.District);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Area Mapped : ", district_r9.TotalArea, " Acres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Area Sown : ", district_r9.AreaSown, " Acres ");
} }
function MainComponent_mat_card_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r10.District);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Farmers Connected : ", district_r10.TotalFarmers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Farmers Currently Sowing : ", district_r10.SowingFarmers, " ");
} }
const _c0 = function () { return { width: "100%", height: 350 }; };
class MainComponent {
    constructor(dialog, _mainService, router) {
        this.dialog = dialog;
        this._mainService = _mainService;
        this.router = router;
        // districts = [{name:'Nashik',totalarea:'1000',areasown:'500',totalfarmers:100,sowingfarmers:50},
        // {name:'Thane',totalarea:'110',areasown:'90',totalfarmers:50,sowingfarmers:20},
        // {name:'Ratnagiri',totalarea:'105',areasown:'75',totalfarmers:10,sowingfarmers:5},
        // {name:'Pune',totalarea:'20',areasown:'15',totalfarmers:1,sowingfarmers:1},
        // ];
        this.imageObject = [{
                image: 'assets/img/banner-bg.jpg',
                thumbImage: 'assets/img/farmayu-logo.png',
                alt: 'alt of image',
                title: 'title of image'
            }, {
                image: 'assets/img/field_grass_landscape_farm.jpg',
                thumbImage: 'assets/img/field_grass_landscape_farm.jpg',
                title: 'Image title',
                alt: 'Image alt' //Optional: You can use this key if want to show image with alt
            }
        ];
    }
    ngOnInit() {
        this.GetCrops();
        this.GetTopAreaSown();
        this.GetTopFarmers();
        this.setCarouselHeight('#carousel-example');
        var test = $('area').each(function () {
            var txt = $(this).data('name');
            console.log('txt-' + txt);
            var left = $(this).data('left');
            var top = $(this).data('top') - 50;
            console.log('left-' + left);
            console.log('top-' + top);
            // var $span=$('<span class="text-block">'+txt+'</span>');        
            // $span.css({top: top+'px', left: left+'px', position:'absolute', width:'100px', height:'50px' ,background: 'rgba(0, 0, 0, 0.5)',
            // color: 'rgba(243, 239, 239, 1)',"text-align":'center',"padding-top": '5px'});
            // $span.appendTo('#map');
        });
    }
    chartdata(name) {
        console.log('district:' + name);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = name;
        this.dialog.open(_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_2__["ImageMapComponent"], dialogConfig);
    }
    GetCrops() {
        var crops = this._mainService.GetTopCrops();
        crops.subscribe((res) => {
            //   this.technologyData = res;
            this.crops = res;
            console.log("CROPS:" + crops);
            this.firstrowcrops = this.crops.slice(0, 5);
            this.secondrowcrops = this.crops.slice(5, 10);
            this.thirdrowcrops = this.crops.slice(10, 15);
            console.log("firstrowcrops:" + this.firstrowcrops);
            console.log("secondrowcrops:" + this.secondrowcrops);
            console.log("thirdrowcrops:" + this.thirdrowcrops);
        });
    }
    GetTopAreaSown() {
        var districts = this._mainService.GetTopAreaSown();
        districts.subscribe((res) => {
            this.districts = res;
            console.log(this.districts);
        });
    }
    GetTopFarmers() {
        var districts = this._mainService.GetTopFarmers();
        districts.subscribe((res) => {
            this.districts_farmers = res;
            console.log(this.districts_farmers);
        });
    }
    setCarouselHeight(id) {
        // set the slide's height
        $(id + ' .carousel-content').each(function () {
            $(this).css('height', '150px');
        });
    }
    ShowLoginPopup() {
        console.log("Reached Showloginpopup");
        //this.router.navigate(['\login']);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        //dialogConfig.height = "40%";
        dialogConfig.data = name;
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], dialogConfig);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_main_service_service__WEBPACK_IMPORTED_MODULE_4__["MainServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 126, vars: 11, consts: [[1, "header"], [1, "showBand"], ["scrollamount", "15", "behavior", "scroll", "direction", "left"], [1, "banner"], ["fxLayout", "row", 1, "container-panel"], ["fxFlex", "70"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "nav", "mynavbar"], ["href", "home", 1, "mynavbar-elements"], [1, "dropdown"], ["href", "#", 1, "mynavbar-elements"], [1, "dropdown-menu"], ["ref", "#", 1, "dropdown-elements"], ["href", "#", 1, "dropdown-elements"], ["href", "about", 1, "dropdown-elements"], ["fxLayout", "row", "fxLayoutAlign", "end stretch", "fxFlex", "30"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [2, "height", "350px", "width", "100%"], ["slideImage", "1", 3, "images", "infinite", "autoSlide", "imageSize", "imagePopup", "direction"], ["nav", ""], ["id", "carousel-example", "data-ride", "carousel", 1, "carousel", "slide", "container-playcards"], ["fxFill", "", 1, "row"], ["fxFill", "", 2, "padding-left", "7%", "padding-right", "5%"], [1, "carousel-inner"], [1, "item", "active"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "carousel-content"], ["class", " crop-card", "style", "min-width: 17%", 4, "ngFor", "ngForOf"], [1, "item"], ["fxFlex", "5", "href", "#carousel-example", "data-slide", "prev", 1, "left", "carousel-control"], [1, "glyphicon", "glyphicon-chevron-left"], ["fxFlex", "5", "href", "#carousel-example", "data-slide", "next", 1, "right", "carousel-control"], [1, "glyphicon", "glyphicon-chevron-right"], [1, "border-line"], ["fxFill", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", "fxFlex", "15", 1, "mapcards"], ["class", "district-card", "style", "min-height: 10%", 4, "ngFor", "ngForOf"], ["id", "map"], ["src", "/assets/maharashtra-map-english.jpg", "usemap", "#image-map", 2, "height", "600px", "width", "100%", "padding-left", "25px", "padding-right", "25px"], ["name", "image-map"], ["target", "", "alt", "Ratnagiri", "title", "Ratnagiri", "href", "javascript:chartdata('Ratnagiri')", "coords", "76,397,103,537,149,525,124,412,95,389", "shape", "poly", "data-left", "147", "data-top", "440", 3, "click"], ["target", "", "alt", "Thane", "title", "Thane", "href", "javascript:chartdata('Thane')", "coords", "72,156,76,228,178,229,140,169", "shape", "poly", "data-left", "123", "data-top", "227", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "container-contact", "container-outer"], ["fxFlex", "35", "fxFill", "", 1, "container"], [1, "icon-wrap"], ["src", "assets/img/Submit_feedback_icon.png", "align", "left", "height", "88", "width", "80"], [1, "content"], [1, "row"], [1, "col"], ["href", "mailto:Feedbk_invg@nse.co.in"], [1, "button"], ["id", "handshake", "src", "assets/img/handshake.jpg", "align", "left", "height", "88", "width", "80"], ["src", "assets/img/Investor_Support_icon.png", "align", "left", "height", "88", "width", "80"], [1, "content2"], [1, "row2"], [1, "col2"], ["href", "tel:18002660058"], ["href", "tel:02226598100144"], [1, "button1"], [1, "crop-card", 2, "min-width", "17%"], ["mat-card-avatar", "", "alt", "crop-image", 1, "example-header-image", 3, "src"], [1, "district-card", 2, "min-height", "10%"], [2, "font-size", "smaller"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "marquee", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "News Go Here! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " News1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " News2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Structure & Key Personnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Relations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Products & Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Commodity Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Crop Forecasting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Crop Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Event Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_46_listener() { return ctx.ShowLoginPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "ng-image-slider", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MainComponent_mat_card_57_Template, 10, 3, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MainComponent_mat_card_60_Template, 10, 3, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MainComponent_mat_card_63_Template, 10, 3, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MainComponent_mat_card_72_Template, 9, 3, "mat-card", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "map", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "area", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_area_click_77_listener() { return ctx.chartdata("Ratnagiri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "area", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_area_click_78_listener() { return ctx.chartdata("Thane"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, MainComponent_mat_card_80_Template, 9, 3, "mat-card", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Submit a tip off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Write on us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Feedbk_invg@nse.co.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Partner With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Click Here...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Toll Free : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1800 266 0058");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tel No. : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "(022) 26598100-144");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.imageObject)("infinite", true)("autoSlide", 3)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("imagePopup", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firstrowcrops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.secondrowcrops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thirdrowcrops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.districts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.districts_farmers);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], ng_image_slider__WEBPACK_IMPORTED_MODULE_9__["NgImageSliderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"]], styles: ["marquee[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 25%;\n}\n\n.container-images[_ngcontent-%COMP%] {\n  height: 350px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.container-playcards[_ngcontent-%COMP%] {\n  height: 150px;\n  background-color: rgb(211, 211, 211);\n}\n\n.border-line[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n  background-color: red;\n}\n\n.container-contact[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.mynavbar-elements[_ngcontent-%COMP%] {\n  color: chartreuse;\n  font-size: medium;\n}\n\n.container-panel[_ngcontent-%COMP%] {\n  \n\n  height: 50px;\n  background-color: rgb(0, 0, 0);\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 99;\n  position: fixed;\n}\n\n.banner[_ngcontent-%COMP%] {\n  top: 100px;\n  position: relative;\n  z-index: 0;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n\n  background-color: white;\n  box-shadow: 2px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-elements[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  \n  background-size: cover;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  background-color: white;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: orange;\n}\n\nimg.map[_ngcontent-%COMP%], map[_ngcontent-%COMP%]   area[_ngcontent-%COMP%] {\n  \n  outline: none;\n}\n\n.mapcards[_ngcontent-%COMP%] {\n  height: 600px;\n  background-color: rgba(9, 223, 38, 0.979);\n}\n\n#map[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.map_title[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.map[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  min-width: 70px;\n  min-height: 30px;\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: rgba(243, 239, 239, 1);\n}\n\n.crop-card[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 5px black;\n  border-radius: 10px;\n}\n\n.district-card[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 5px black;\n  background-color: rgb(219, 213, 213);\n}\n\n.carousel-content[_ngcontent-%COMP%] {\n  color: black;\n  display: flex;\n  align-items: center;\n}\n\n\n\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #3a2d7d;\n  font-weight: normal;\n  margin-bottom: 14px;\n  margin-top: 5px;\n  background-color: transparent;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n}\n\n.row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #4a4a4a;\n  margin-bottom: 4px;\n  margin-top: -16px;\n  background-color: white;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: -7px;\n  margin-bottom: 1px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #4caf50; \n  border: none;\n  border-radius: 12px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n\n\n#handshake[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid orange;\n}\n\n\n\n.content2[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 2.45rem;\n  color: #3a2d7d;\n  font-weight: normal;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  background-color: transparent;\n}\n\n.row2[_ngcontent-%COMP%]   .col2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: normal;\n  color: #4a4a4a;\n  margin-bottom: 1px;\n  margin-top: -7px;\n  background-color: white;\n}\n\n.content2[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: #4caf50; \n  border: none;\n  border-radius: 12px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTs7RUFFZixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFO2lCQUNlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFycXVlZSBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG59XG5cbi5jb250YWluZXItaW1hZ2VzIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY29udGFpbmVyLXBsYXljYXJkcyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcbn1cblxuLmJvcmRlci1saW5lIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY29udGFpbmVyLWNvbnRhY3Qge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubXluYXZiYXItZWxlbWVudHMge1xuICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5jb250YWluZXItcGFuZWwge1xuICAvKiB0b3A6IDc1cHg7ICovXG5cbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmJhbm5lciB7XG4gIHRvcDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDJweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tZWxlbWVudHMge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvY3JvcHMvV2hlYXQuUE5HJyk7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbmltZy5tYXAsXG5tYXAgYXJlYSB7XG4gIC8qIHdpZHRoOjgwJTtcbiBoZWlnaHQ6IDQwMHB4OyAqL1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFwY2FyZHMge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDIyMywgMzgsIDAuOTc5KTtcbn1cblxuI21hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXBfdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYXAgLnRleHQtYmxvY2sge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiByZ2JhKDI0MywgMjM5LCAyMzksIDEpO1xufVxuXG4uY3JvcC1jYXJkIHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRpc3RyaWN0LWNhcmQge1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTMsIDIxMyk7XG59XG5cbi5jYXJvdXNlbC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBGZWVkYmFjayBzdHlsZSAqL1xuXG4uY29udGVudCBoNCB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjogIzNhMmQ3ZDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdyAuY29sIGg1IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxucCB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBQYXJ0bmVyIHdpdGggdXMgKi9cblxuI2hhbmRzaGFrZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xufVxuXG4vKiBDb250YWN0IEluZm8gKi9cbi5jb250ZW50MiBoNSB7XG4gIGZvbnQtc2l6ZTogMi40NXJlbTtcbiAgY29sb3I6ICMzYTJkN2Q7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucm93MiAuY29sMiBoNiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50MiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: src_app_shared_services_main_service_service__WEBPACK_IMPORTED_MODULE_4__["MainServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "/vvF":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-side/layout-side.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSideComponent", function() { return LayoutSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/registration-sidebar/registration-sidebar.component */ "A2z1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");







class LayoutSideComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutSideComponent.ɵfac = function LayoutSideComponent_Factory(t) { return new (t || LayoutSideComponent)(); };
LayoutSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutSideComponent, selectors: [["app-layout-side"]], decls: 7, vars: 0, consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", "fxLayoutAlign.lt-md", "start stretch"], ["fxFlex", "20", "fxFlex.fxFlex.md", "35", 1, "container-outer"], ["fxFlex", "80", "fxFlex.fxFlex.md", "65", 1, "content", "container-outer"]], template: function LayoutSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-registration-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _shared_components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0LXNpZGUvbGF5b3V0LXNpZGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-side',
                templateUrl: './layout-side.component.html',
                styleUrls: ['./layout-side.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zareennaushad/Documents/Yadnesh Dada/project1.1/farmayu-reporting/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _image_map_image_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-map/image-map.component */ "Mqab");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);






class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        var test = 
        //this.ReportDistrict()
        jquery__WEBPACK_IMPORTED_MODULE_3__('area').each(function () {
            var txt = jquery__WEBPACK_IMPORTED_MODULE_3__(this).data('name');
            console.log('txt-' + txt);
            // var coor=$(this).attr('coords');
            // var coorA=coor.split(',');
            // console.log('coorA-' + coorA);
            var left = jquery__WEBPACK_IMPORTED_MODULE_3__(this).data('left');
            var top = jquery__WEBPACK_IMPORTED_MODULE_3__(this).data('top') - 50;
            console.log('left-' + left);
            console.log('top-' + top);
            var $span = jquery__WEBPACK_IMPORTED_MODULE_3__('<span class="text-block">' + txt + '</span>');
            // $span.css({top: top+'px', left: left+'px', position:'absolute',  min-width:'70px' ,min-height: '30px' ,
            // text-align: center,
            // padding-top: 5px,
            // background: rgba(0, 0, 0, 0.5),
            // color: rgba(243, 239, 239, 1)});
            $span.css({ top: top + 'px', left: left + 'px', position: 'absolute', width: '100px', height: '50px', background: 'rgba(0, 0, 0, 0.5)',
                color: 'rgba(243, 239, 239, 1)', "text-align": 'center', "padding-top": '5px' });
            $span.appendTo('#map');
        });
    }
    chartdata(name) {
        console.log('district:' + name);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = name;
        this.dialog.open(_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_2__["ImageMapComponent"], dialogConfig);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [["id", "map"], ["src", "/assets/maharashtra-map-english.jpg", "usemap", "#image-map"], ["name", "image-map"], ["target", "", "alt", "Ratnagiri", "title", "Ratnagiri", "href", "javascript:chartdata('Ratnagiri')", "coords", "76,397,103,537,149,525,124,412,95,389", "shape", "poly", "data-name", "Ratnagiri", "data-left", "112", "data-top", "462", 3, "click"], ["target", "", "alt", "Thane", "title", "Thane", "href", "javascript:chartdata('Thane')", "coords", "49,266,113,288,136,263,100,200,54,186,39,218", "shape", "poly", "data-name", "Thane", "data-left", "93", "data-top", "237", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "area", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_area_click_3_listener() { return ctx.chartdata("Ratnagiri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_area_click_4_listener() { return ctx.chartdata("Thane"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img.map[_ngcontent-%COMP%], map[_ngcontent-%COMP%]   area[_ngcontent-%COMP%]{\n    width:80%;\n    height: 600px;\n    outline: none;\n}\n\n\n\n#map[_ngcontent-%COMP%] {\n  position:relative\n}\n\n.map_title[_ngcontent-%COMP%] {\n  position:absolute;    \n}\n\n.mapcards[_ngcontent-%COMP%]{\n  width: 200px;\n}\n\n.text-block[_ngcontent-%COMP%] {\n    \n    min-width: 70px;\n    min-height: 30px;\n    text-align: center;\n    padding-top: 5px;\n    position:absolute;\n    background: rgba(0, 0, 0, 0.5);\n    color: rgba(243, 239, 239, 1);\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7O0VBRS9CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltZy5tYXAsIG1hcCBhcmVhe1xuICAgIHdpZHRoOjgwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIC5ib3h7XG4gIFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0gKi9cblxuI21hcCB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlXG59XG4ubWFwX3RpdGxlIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7ICAgIFxufVxuLm1hcGNhcmRze1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgICBcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6IHJnYmEoMjQzLCAyMzksIDIzOSwgMSk7XG5cbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "9ObS":
/*!*******************************************************************!*\
  !*** ./src/app/pages/register/upload-doc/upload-doc.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocComponent", function() { return UploadDocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UploadDocComponent {
    constructor() { }
    ngOnInit() {
    }
}
UploadDocComponent.ɵfac = function UploadDocComponent_Factory(t) { return new (t || UploadDocComponent)(); };
UploadDocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadDocComponent, selectors: [["app-upload-doc"]], decls: 51, vars: 0, consts: [[1, "container"], [1, "row", "it"], ["id", "one", 1, "col-sm-offset-1", "col-sm-10"], [1, "row"], [1, "col-sm-offset-4", "col-sm-4", "form-group"], [1, "text-center"], ["id", "social_icons", 1, "grid_5"], ["src", "assets/icons/id-card.svg", 1, "icon"], ["src", "assets/icons/card.svg", 1, "icon"], ["id", "uploader"], [1, "row", "uploadDoc"], [1, "col-sm-3"], [1, "docErr"], [1, "fileUpload", "btn", "btn-orange"], ["src", "https://image.flaticon.com/icons/svg/136/136549.svg", 1, "icon"], ["id", "upload", 1, "upl"], ["type", "file", "id", "up", "onchange", "readURL(this);", 1, "upload", "up"], [1, "col-sm-8"], ["type", "text", "name", "", "placeholder", " Addhar Card / VoterId", 1, "form-control"], [1, "col-sm-1"], [1, "btn-check"], [1, "fa", "fa-times"], ["type", "text", "name", "", "placeholder", "Cancelled Cheque", 1, "form-control"], [1, "btn", "btn-next"], [1, "fa", "fa-paper-plane"]], template: function UploadDocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png' & 'text' format. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please upload the followings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Addhar Card / VoterId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancelled Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please upload valid file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upload document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Please upload valid file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Upload document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#one[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);\n  \n\n  border-style: dashed;\n}\n.it[_ngcontent-%COMP%]   .btn-orange[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #777 !important;\n  color: #777;\n  text-align: left;\n  width: 100%;\n}\n.it[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  height: 54px;\n  border: none;\n  margin-bottom: 0px;\n  border-radius: 0px;\n  border-bottom: 1px solid #ddd;\n  box-shadow: none;\n}\n.it[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #ff4d0d;\n  box-shadow: none;\n  outline: none;\n}\n.fileUpload[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n.fileUpload[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.it[_ngcontent-%COMP%]   .btn-new[_ngcontent-%COMP%], .it[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  border-radius: 0px;\n  background-color: #333;\n  color: #f5f5f5;\n  font-size: 16px;\n  width: 155px;\n}\n.it[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%] {\n  background-color: #ff4d0d;\n  color: #fff;\n}\n.it[_ngcontent-%COMP%]   .btn-check[_ngcontent-%COMP%] {\n  cursor: pointer;\n  line-height: 54px;\n  color: red;\n}\n.it[_ngcontent-%COMP%]   .uploadDoc[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.it[_ngcontent-%COMP%]   .uploadDoc[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.it[_ngcontent-%COMP%]   .btn-orange[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  margin: 30px 0px;\n}\n.it[_ngcontent-%COMP%]   #uploader[_ngcontent-%COMP%]   .docErr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: auto;\n  left: 10px;\n  top: -56px;\n  padding: 10px;\n  font-size: 15px;\n  background-color: #fff;\n  color: red;\n  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);\n  display: none;\n}\n.it[_ngcontent-%COMP%]   #uploader[_ngcontent-%COMP%]   .docErr[_ngcontent-%COMP%]:after {\n  content: \"\\f0d7\";\n  display: inline-block;\n  font-family: FontAwesome;\n  font-size: 50px;\n  color: #fff;\n  position: absolute;\n  left: 30px;\n  bottom: -40px;\n  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvdXBsb2FkLWRvYy91cGxvYWQtZG9jLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLHVDQUF1Qzs7RUFFdkMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci91cGxvYWQtZG9jL3VwbG9hZC1kb2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvbmUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAvKiBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4ICM4ODg4ODg7ICovXG5cbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG4uaXQgLmJ0bi1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdCBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLml0IC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNmZjRkMGQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uaXQgLmJ0bi1uZXcsXG4uaXQgLmJ0bi1uZXh0IHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTU1cHg7XG59XG4uaXQgLmJ0bi1uZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGQwZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaXQgLmJ0bi1jaGVjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGNvbG9yOiByZWQ7XG59XG4uaXQgLnVwbG9hZERvYyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaXQgLnVwbG9hZERvYyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaXQgLmJ0bi1vcmFuZ2UgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4uaXQgI3VwbG9hZGVyIC5kb2NFcnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IC01NnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiByZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaXQgI3VwbG9hZGVyIC5kb2NFcnI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjBkN1wiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICBib3R0b206IC00MHB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadDocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-doc',
                templateUrl: './upload-doc.component.html',
                styleUrls: ['./upload-doc.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A2z1":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/registration-sidebar/registration-sidebar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSidebarComponent", function() { return RegistrationSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/phone-reg-page"]; };
const _c1 = function () { return ["/register-page"]; };
const _c2 = function () { return ["/upload-doc"]; };
class RegistrationSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegistrationSidebarComponent.ɵfac = function RegistrationSidebarComponent_Factory(t) { return new (t || RegistrationSidebarComponent)(); };
RegistrationSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationSidebarComponent, selectors: [["app-registration-sidebar"]], decls: 48, vars: 6, consts: [[1, "wrapper"], [1, "sidebar"], [2, "list-style-type", "none"], [1, "btn"], ["src", "/assets/icons/phone.png", "alt", "", 2, "width", "20%"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["src", "/assets/icons/admin.png", "alt", "", 2, "width", "20%", "margin-right", "5px"], ["src", "/assets/icons/card.png", "alt", "", 2, "width", "20%", "margin-right", "5px"], ["src", "/assets/icons/Commodities.png", "alt", "", 2, "width", "20%", "margin-right", "5px"]], template: function RegistrationSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Requires OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Basic Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Name, Occupation etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Upload Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "KYC Documents, Cancelled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Add Commodities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Wheat, Maze, Turmeric, Spices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " or others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap\");\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  font-size: 18px;\n  padding: 10px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 0px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\\00bb\";\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #1890ff;\n  padding: 18px 10px;\n  outline: none;\n}\n\n[placeholder][_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  -webkit-transition: text-indent 0.4s 0.4s ease;\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n\n.sidebar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.active[_ngcontent-%COMP%] {\n  \n  border-bottom: 2px solid black;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: rgb(36, 29, 29);\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #594f8d;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid #bdb8d7;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bdb8d7;\n  display: block;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #4b4276;\n  padding: 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLXNpZGViYXIvcmVnaXN0cmF0aW9uLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7O0FBRWhGO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOENBQXNDO0VBQXRDLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRDQUE0QztFQUM1QywrQ0FBK0M7QUFDakQ7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi1zaWRlYmFyL3JlZ2lzdHJhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDAwYmJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qICAqL1xuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxODkwZmY7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zaWRlYmFyIC5idG4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYWN0aXZlIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTc0LCAxNzQpOyAqL1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIGgyIHtcbiAgY29sb3I6IHJnYigzNiwgMjksIDI5KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLndyYXBwZXIgLnNpZGViYXIgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0ZjhkO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiOGQ3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaSBhIHtcbiAgY29sb3I6ICNiZGI4ZDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM0YjQyNzY7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-sidebar',
                templateUrl: './registration-sidebar.component.html',
                styleUrls: ['./registration-sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Annh":
/*!***********************************************************!*\
  !*** ./src/app/layouts/layout-side/layout-side.module.ts ***!
  \***********************************************************/
/*! exports provided: LayoutSideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSideModule", function() { return LayoutSideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-side.component */ "/vvF");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_pages_report_district_report_district_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/report-district/report-district.component */ "RC+G");
/* harmony import */ var src_app_pages_report_crop_report_crop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/report-crop/report-crop.component */ "drxN");
/* harmony import */ var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/home/home.component */ "1LmZ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "6OSH");
/* harmony import */ var src_app_pages_register_phone_reg_page_phone_reg_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/register/phone-reg-page/phone-reg-page.component */ "nK9Z");
/* harmony import */ var src_app_pages_register_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/register/register-page/register-page.component */ "zAL3");
/* harmony import */ var src_app_pages_register_upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/register/upload-doc/upload-doc.component */ "9ObS");














class LayoutSideModule {
}
LayoutSideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutSideModule });
LayoutSideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutSideModule_Factory(t) { return new (t || LayoutSideModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutSideModule, { declarations: [_layout_side_component__WEBPACK_IMPORTED_MODULE_2__["LayoutSideComponent"], src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], src_app_pages_report_district_report_district_component__WEBPACK_IMPORTED_MODULE_6__["ReportDistrictComponent"],
        src_app_pages_report_crop_report_crop_component__WEBPACK_IMPORTED_MODULE_7__["ReportCropComponent"], src_app_pages_register_phone_reg_page_phone_reg_page_component__WEBPACK_IMPORTED_MODULE_10__["PhoneRegPageComponent"], src_app_pages_register_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisterPageComponent"],
        src_app_pages_register_upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_12__["UploadDocComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutSideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_side_component__WEBPACK_IMPORTED_MODULE_2__["LayoutSideComponent"], src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], src_app_pages_report_district_report_district_component__WEBPACK_IMPORTED_MODULE_6__["ReportDistrictComponent"],
                    src_app_pages_report_crop_report_crop_component__WEBPACK_IMPORTED_MODULE_7__["ReportCropComponent"], src_app_pages_register_phone_reg_page_phone_reg_page_component__WEBPACK_IMPORTED_MODULE_10__["PhoneRegPageComponent"], src_app_pages_register_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisterPageComponent"],
                    src_app_pages_register_upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_12__["UploadDocComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const baseURL = 'http://localhost:8081';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BAfr":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/report-district"]; };
const _c2 = function () { return ["/report-crop"]; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 12, vars: 6, consts: [[1, "container"], [1, "container-inner"], ["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Report By District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report By Crop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth-service.service */ "pZQt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function LoginComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.loginError);
} }
class LoginComponent {
    constructor(authservice, router, dialogRef, data) {
        this.authservice = authservice;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isTrue = false;
        this.loginErrorFlag = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.loginform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    IsValidLogin() {
        console.log("Entered Login");
        // if(this.loginform.valid){
        //   this.authservice.login(this.loginform.value).subscribe(result=>{
        //       console.log("Response received")
        //       console.log(result.status);
        //       alert(result.token);
        //   })
        // }
        var observable = this.authservice.login(this.loginform.value);
        observable.subscribe((res) => {
            if (res.status == "1" && res.token != null) {
                console.log("success", JSON.stringify(res));
                console.log("success", res.status);
                this.isTrue = true;
                sessionStorage.setItem("token", res.token);
                this.router.navigate(['\home']);
                //alert("Valid User");
            }
            else {
                console.log("failure", JSON.stringify(res));
                alert("Incorrect UserName and Password");
            }
        }, (error) => {
            console.log("failure");
            this.loginError = "Please Enter Valid Username And/Or Password Or Contact Your Administrator.";
            this.loginErrorFlag = true;
            //alert("Incorrect UserName and Password");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 2, consts: [["fxLayout", "column", "fxLayoutAlign", "space-between stretch", "fxFlexFill", ""], [1, "main-div"], ["color", "primary"], ["fxLayout", "column", "fxLayoutAlign", "stretch", 1, "login-form", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxFlex", "60"], ["matInput", "", "placeholder", "UserName", "formControlName", "UserName"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "Password"], [1, "row"], ["style", "color:red;text-align: center;", 4, "ngIf"], ["fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [2, "color", "red", "text-align", "center"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LOGIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.IsValidLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_p_17_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginErrorFlag);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".main-div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\n    padding: 0px;\n}\n\n.login-form[_ngcontent-%COMP%]{\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiBtYXQtY2FyZHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sb2dpbi1mb3Jte1xuICAgIHBhZGRpbmc6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Fphd":
/*!***********************************************************!*\
  !*** ./src/app/layouts/layout-full/layout-full.module.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullModule", function() { return LayoutFullModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-full.component */ "eVth");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");












class LayoutFullModule {
}
LayoutFullModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutFullModule });
LayoutFullModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutFullModule_Factory(t) { return new (t || LayoutFullModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutFullModule, { declarations: [_layout_full_component__WEBPACK_IMPORTED_MODULE_4__["LayoutFullComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFullModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_full_component__WEBPACK_IMPORTED_MODULE_4__["LayoutFullComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FqCg":
/*!**********************************************************************!*\
  !*** ./src/app/pages/crop-forecasting/crop-forecasting.component.ts ***!
  \**********************************************************************/
/*! exports provided: CropForecastingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropForecastingComponent", function() { return CropForecastingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CropForecastingComponent {
    constructor() { }
    ngOnInit() {
    }
}
CropForecastingComponent.ɵfac = function CropForecastingComponent_Factory(t) { return new (t || CropForecastingComponent)(); };
CropForecastingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropForecastingComponent, selectors: [["app-crop-forecasting"]], decls: 2, vars: 0, template: function CropForecastingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "crop-forecasting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nyb3AtZm9yZWNhc3RpbmcvY3JvcC1mb3JlY2FzdGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropForecastingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crop-forecasting',
                templateUrl: './crop-forecasting.component.html',
                styleUrls: ['./crop-forecasting.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MaMD":
/*!************************************************************!*\
  !*** ./src/app/shared/services/reports-service.service.ts ***!
  \************************************************************/
/*! exports provided: ReportsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsServiceService", function() { return ReportsServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ReportsServiceService {
    constructor(_http) {
        this._http = _http;
        this.token = sessionStorage.getItem("token");
    }
    GetCrops() {
        console.log(this.token);
        var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
                .set('Authorization', `Bearer  ${this.token}`)
        };
        //return [];
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["baseURL"]}/NewCrop/GetExistingCrops`, header);
    }
}
ReportsServiceService.ɵfac = function ReportsServiceService_Factory(t) { return new (t || ReportsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReportsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportsServiceService, factory: ReportsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Mqab":
/*!********************************************************!*\
  !*** ./src/app/pages/image-map/image-map.component.ts ***!
  \********************************************************/
/*! exports provided: ImageMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMapComponent", function() { return ImageMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "6OSH");







class ImageMapComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['RICE', 'WHEAT', 'ONION', 'POTATO', 'TOMATO'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: this.data },
        ];
        console.log('Received data at imagecomponent:' + data);
    }
    ngOnInit() {
    }
}
ImageMapComponent.ɵfac = function ImageMapComponent_Factory(t) { return new (t || ImageMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ImageMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageMapComponent, selectors: [["app-image-map"]], decls: 5, vars: 6, consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], ["color", "warn", 1, "close-icon"], ["mat-dialog-content", "", 1, "container-inner"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"]], template: function ImageMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: [".close-button[_ngcontent-%COMP%]{\n    float: right;\n    top:-24px;\n    right:-24px;\n  }\n  \n  .close-icon[_ngcontent-%COMP%] {\n    transition: 1s ease-in-out;\n  }\n  \n  .close-icon[_ngcontent-%COMP%]:hover {\n    transform: rotate(180deg);\n  }\n  \n    .icon-outside .close-button{\n    float: right;\n    top:-52px;\n    right:-52px;\n  }\n  \n    .icon-outside .mat-dialog-container {\n   overflow: unset\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1hZ2UtbWFwL2ltYWdlLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtHQUNDO0VBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbWFnZS1tYXAvaW1hZ2UtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6LTI0cHg7XG4gICAgcmlnaHQ6LTI0cHg7XG4gIH1cbiAgXG4gIC5jbG9zZS1pY29uIHtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmNsb3NlLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5jbG9zZS1idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDotNTJweDtcbiAgICByaWdodDotNTJweDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgIG92ZXJmbG93OiB1bnNldFxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-map',
                templateUrl: './image-map.component.html',
                styleUrls: ['./image-map.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Mwfp":
/*!**********************************************************!*\
  !*** ./src/app/pages/all-trades/all-trades.component.ts ***!
  \**********************************************************/
/*! exports provided: AllTradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTradesComponent", function() { return AllTradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









function AllTradesComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllTradesComponent_li_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const crop_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onChange($event, ctx_r4.i, crop_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", crop_r3.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", crop_r3.name, " ");
} }
function AllTradesComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", district_r6.name, " ");
} }
function AllTradesComponent_mat_card_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "100 Kgs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PRICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !crop_r7.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/icons/crops/", crop_r7.name, ".PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r7.name);
} }
class AllTradesComponent {
    constructor(route) {
        this.route = route;
        // crops = [
        //   {
        //     name: 'Rice',
        //     checked: true,
        //   },
        //   {
        //     name: 'Wheat',
        //     checked: true,
        //   },
        //   {
        //     name: 'Barley',
        //     checked: true,
        //   },
        //   {
        //     name: 'Soyabean',
        //     checked: true,
        //   },
        // ];
        this.crops = [
            {
                name: 'Rice',
                checked: true,
                subCategory: [
                    {
                        id: 1,
                        name: 'Basmati',
                        isActive: true,
                    },
                    {
                        id: 2,
                        name: 'Ammamore',
                        isActive: true,
                    },
                ],
            },
            {
                name: 'Wheat',
                checked: true,
                subCategory: [
                    {
                        id: 1,
                        name: 'Durum',
                        isActive: true,
                    },
                    {
                        id: 2,
                        name: 'Emmer',
                        isActive: true,
                    },
                ],
            }, {
                name: 'Barley',
                checked: true,
                subCategory: [
                    {
                        id: 1,
                        name: 'Hulless Barley',
                        isActive: true,
                    },
                    {
                        id: 2,
                        name: 'Barley Flakes',
                        isActive: true,
                    },
                ],
            }
        ];
        this.districts = [
            {
                name: 'Nashik',
                totalarea: '1000',
                areasown: '500',
                totalfarmers: 100,
                sowingfarmers: 50,
            },
            {
                name: 'Thane',
                totalarea: '110',
                areasown: '90',
                totalfarmers: 50,
                sowingfarmers: 20,
            },
            {
                name: 'Ratnagiri',
                totalarea: '105',
                areasown: '75',
                totalfarmers: 10,
                sowingfarmers: 5,
            },
            {
                name: 'Pune',
                totalarea: '20',
                areasown: '15',
                totalfarmers: 1,
                sowingfarmers: 1,
            },
        ];
    }
    onChange(event, index, item) {
        item.checked = !item.checked;
        console.log(index, event, item);
    }
    ngOnInit() { }
}
AllTradesComponent.ɵfac = function AllTradesComponent_Factory(t) { return new (t || AllTradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AllTradesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllTradesComponent, selectors: [["app-all-trades"]], decls: 21, vars: 3, consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", "fxLayoutAlign.lt-md", "start stretch"], ["fxFlex", "20", 1, "container-outer"], [1, "filters"], [1, "example-section"], [1, "example-list-section"], [4, "ngFor", "ngForOf"], ["fxFlex", "80", 1, "content", "container-outer"], ["class", "crop-card", "style", "min-width: 17%", 3, "hidden", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [1, "crop-card", 2, "min-width", "17%", 3, "hidden"], ["mat-card-avatar", "", "alt", "crop-image", 1, "example-header-image", 3, "src"]], template: function AllTradesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select Crop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllTradesComponent_li_10_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllTradesComponent_li_17_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllTradesComponent_mat_card_19_Template, 10, 3, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.districts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crops);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]], styles: [".filters[_ngcontent-%COMP%]{\n    min-height: 600px;\n}\n\n.crop-card[_ngcontent-%COMP%]{\n    box-shadow: 10px 10px 5px black;\n   border-radius: 10px;\n   width: 80%;\n   margin: 25px;\n  }\n\n.example-section[_ngcontent-%COMP%] {\n    margin: 12px 0;\n  }\n\n.example-margin[_ngcontent-%COMP%] {\n    margin: 0 12px;\n  }\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-top: 4px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLXRyYWRlcy9hbGwtdHJhZGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7R0FDaEMsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixZQUFZO0VBQ2I7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxsLXRyYWRlcy9hbGwtdHJhZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyc3tcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cblxuLmNyb3AtY2FyZHtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGJsYWNrO1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIHdpZHRoOiA4MCU7XG4gICBtYXJnaW46IDI1cHg7XG4gIH1cblxuICAuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTJweDtcbiAgfVxuICBcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cblxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllTradesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-trades',
                templateUrl: './all-trades.component.html',
                styleUrls: ['./all-trades.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration-sidebar/registration-sidebar.component */ "A2z1");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationSidebarComponent"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_registration_sidebar_registration_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationSidebarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Qns9":
/*!************************************************************************!*\
  !*** ./src/app/pages/investor-relation/investor-relation.component.ts ***!
  \************************************************************************/
/*! exports provided: InvestorRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorRelationComponent", function() { return InvestorRelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InvestorRelationComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvestorRelationComponent.ɵfac = function InvestorRelationComponent_Factory(t) { return new (t || InvestorRelationComponent)(); };
InvestorRelationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestorRelationComponent, selectors: [["app-investor-relation"]], decls: 2, vars: 0, template: function InvestorRelationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "investor-relation works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVzdG9yLXJlbGF0aW9uL2ludmVzdG9yLXJlbGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestorRelationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-investor-relation',
                templateUrl: './investor-relation.component.html',
                styleUrls: ['./investor-relation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RC+G":
/*!********************************************************************!*\
  !*** ./src/app/pages/report-district/report-district.component.ts ***!
  \********************************************************************/
/*! exports provided: ReportDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDistrictComponent", function() { return ReportDistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "6OSH");




class ReportDistrictComponent {
    constructor() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    ngOnInit() {
    }
}
ReportDistrictComponent.ɵfac = function ReportDistrictComponent_Factory(t) { return new (t || ReportDistrictComponent)(); };
ReportDistrictComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportDistrictComponent, selectors: [["app-report-district"]], decls: 15, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "50", 1, "container-inner"], ["id", "ddlTypes", "name", "ddlTypes", 1, "form-control"], ["selected", "", "id", "ddlTypes", "value", ""], [1, "container-inner"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"]], template: function ReportDistrictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydC1kaXN0cmljdC9yZXBvcnQtZGlzdHJpY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDistrictComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-district',
                templateUrl: './report-district.component.html',
                styleUrls: ['./report-district.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'farmayu-reporting';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "T+Qh":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/main-service.service.ts ***!
  \*********************************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MainServiceService {
    constructor(http) {
        this.http = http;
    }
    GetTopCrops() {
        console.log("Calling GetTopCrops API");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["baseURL"]}/Crop/GetTopCrops`);
    }
    GetTopAreaSown() {
        console.log("Calling GetTopAreaSown API");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["baseURL"]}/district/GetTopAreaSown`);
    }
    GetTopFarmers() {
        console.log("Calling GetTopFarmers API");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["baseURL"]}/district/GetTopFarmers`);
    }
}
MainServiceService.ɵfac = function MainServiceService_Factory(t) { return new (t || MainServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MainServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainServiceService, factory: MainServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Uh3H":
/*!**************************************************************************!*\
  !*** ./src/app/pages/commodity-purchase/commodity-purchase.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommodityPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityPurchaseComponent", function() { return CommodityPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommodityPurchaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommodityPurchaseComponent.ɵfac = function CommodityPurchaseComponent_Factory(t) { return new (t || CommodityPurchaseComponent)(); };
CommodityPurchaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommodityPurchaseComponent, selectors: [["app-commodity-purchase"]], decls: 2, vars: 0, template: function CommodityPurchaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "commodity-purchase works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vZGl0eS1wdXJjaGFzZS9jb21tb2RpdHktcHVyY2hhc2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommodityPurchaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-commodity-purchase',
                templateUrl: './commodity-purchase.component.html',
                styleUrls: ['./commodity-purchase.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _layouts_layout_side_layout_side_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts/layout-side/layout-side.module */ "Annh");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _pages_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/image-map/image-map.component */ "Mqab");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-charts */ "6OSH");
/* harmony import */ var _layouts_layout_full_layout_full_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/layout-full/layout-full.module */ "Fphd");
/* harmony import */ var _pages_all_trades_all_trades_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/all-trades/all-trades.component */ "Mwfp");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _pages_crop_crop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/crop/crop.component */ "lDWC");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _layouts_layout_side_layout_side_module__WEBPACK_IMPORTED_MODULE_19__["LayoutSideModule"],
            _layouts_layout_full_layout_full_module__WEBPACK_IMPORTED_MODULE_24__["LayoutFullModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_21__["NgImageSliderModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"], _pages_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_22__["ImageMapComponent"], _pages_all_trades_all_trades_component__WEBPACK_IMPORTED_MODULE_25__["AllTradesComponent"], _pages_crop_crop_component__WEBPACK_IMPORTED_MODULE_27__["CropComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
        _layouts_layout_side_layout_side_module__WEBPACK_IMPORTED_MODULE_19__["LayoutSideModule"],
        _layouts_layout_full_layout_full_module__WEBPACK_IMPORTED_MODULE_24__["LayoutFullModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_21__["NgImageSliderModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"], _pages_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_22__["ImageMapComponent"], _pages_all_trades_all_trades_component__WEBPACK_IMPORTED_MODULE_25__["AllTradesComponent"], _pages_crop_crop_component__WEBPACK_IMPORTED_MODULE_27__["CropComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                    _layouts_layout_side_layout_side_module__WEBPACK_IMPORTED_MODULE_19__["LayoutSideModule"],
                    _layouts_layout_full_layout_full_module__WEBPACK_IMPORTED_MODULE_24__["LayoutFullModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_21__["NgImageSliderModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/structure-key-personnel"]; };
const _c2 = function () { return ["/investor-relation"]; };
const _c3 = function () { return ["/commodity-purchase"]; };
const _c4 = function () { return ["/crop-forecasting"]; };
const _c5 = function () { return ["/crop-insurance"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 60, vars: 12, consts: [[1, "new_footer_area", "bg_color"], [1, "new_footer_top"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6"], ["data-wow-delay", "0.4s", 1, "f_widget", "about-widget", "pl_70", "wow", "fadeInLeft", 2, "visibility", "visible", "animation-delay", "0.4s", "animation-name", "fadeInLeft"], [1, "f-title", "f_600", "t_color", "f_size_18"], [1, "list-unstyled", "f_list"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["href", "#"], ["data-wow-delay", "0.6s", 1, "f_widget", "about-widget", "pl_70", "wow", "fadeInLeft", 2, "visibility", "visible", "animation-delay", "0.6s", "animation-name", "fadeInLeft"], ["data-wow-delay", "0.8s", 1, "f_widget", "social-widget", "pl_70", "wow", "fadeInLeft", 2, "visibility", "visible", "animation-delay", "0.8s", "animation-name", "fadeInLeft"], [1, "f_social_icon"], ["href", "#", "aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "#", "aria-hidden", "true", 1, "fa", "fa-twitter-square"], ["href", "#", "aria-hidden", "true", 1, "fa", "fa-linkedin-square"], ["href", "#", "aria-hidden", "true", 1, "fa", "fa-pinterest-square"], [1, "footer_bg", 2, "background-color", "white"], [1, "footer_bg_one"], [1, "footer_bg_two"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "showBand"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Farmayu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Structure & Key Personnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Investor Relations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Event Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Event 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Event 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Event 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Products & Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Commodity Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Crop Forecasting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Crop Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Team Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Copyright@farmayu 2020. All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]], styles: [".new_footer_area[_ngcontent-%COMP%] {\n  background: #fbfbfd;\n}\n\n.new_footer_top[_ngcontent-%COMP%] {\n  padding: 120px 0px -3px;\n  position: relative;\n  overflow-x: hidden;\n}\n\n.new_footer_area[_ngcontent-%COMP%]   .footer_bottom[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 50px;\n}\n\n.footer_bottom[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 20px;\n  \n  color: #263b5e;\n  padding: 27px 0px;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .company_widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 28px;\n  color: #6a7695;\n  margin-bottom: 20px;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .company_widget[_ngcontent-%COMP%]   .f_subscribe_two[_ngcontent-%COMP%]   .btn_get[_ngcontent-%COMP%] {\n  border-width: 1px;\n  margin-top: 20px;\n}\n\n.btn_get_two[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n\n.btn_get[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #6754e2;\n  border-color: #6754e2;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #5e2ced;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\n\n.f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_social_icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  line-height: 43px;\n  background: transparent;\n  border: 1px solid #e2e2eb;\n  font-size: 24px;\n}\n\n.f_social_icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  font-size: 14px;\n  line-height: 45px;\n  color: #858da8;\n  display: inline-block;\n  background: #ebeef5;\n  text-align: center;\n  transition: all 0.2s linear;\n}\n\n.ti-facebook[_ngcontent-%COMP%]:before {\n  content: \"\\e741\";\n}\n\n.ti-twitter-alt[_ngcontent-%COMP%]:before {\n  content: \"\\e74b\";\n}\n\n.ti-vimeo-alt[_ngcontent-%COMP%]:before {\n  content: \"\\e74a\";\n}\n\n.ti-pinterest[_ngcontent-%COMP%]:before {\n  content: \"\\e731\";\n}\n\n.btn_get_two[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: #5e2ced;\n  border-color: #5e2ced;\n  color: #fff;\n}\n\n.btn_get_two[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_social_icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #5e2ced;\n  border-color: #5e2ced;\n  color: white;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_social_icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f-title[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #263b5e;\n}\n\n.f_600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.f_size_18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: #4b505e;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .f_widget.about-widget[_ngcontent-%COMP%]   .f_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6a7695;\n}\n\n.new_footer_top[_ngcontent-%COMP%]   .footer_bg[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  \n\n  background: url(\"https://geturbanleaf.com/wp-content/uploads/2018/05/footer-bg-leaf-trim-pattern.png\")\n    no-repeat scroll center 0;\n  width: 100%;\n  height: 466px;\n}\n\n\n\n.new_footer_top[_ngcontent-%COMP%]   .footer_bg[_ngcontent-%COMP%]   .footer_bg_two[_ngcontent-%COMP%] {\n  background: url(\"https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif\")\n    no-repeat center center;\n  width: 88px;\n  height: 100px;\n  background-size: 100%;\n  bottom: 0;\n  left: 38%;\n  position: absolute;\n  animation: myfirst 30s linear infinite;\n}\n\n@keyframes myfirst {\n  0% {\n    left: -25%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBRXJCLGdCQUFnQjtBQUNsQjs7QUFDQTs7Ozs7O0VBTUUscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUdsQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBOzs7Ozs7RUFNRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Q7K0JBQzZCOztFQUU3Qjs2QkFDMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtFQUNFOzJCQUN5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsU0FBUztFQUNULGtCQUFrQjtFQUVsQixzQ0FBc0M7QUFDeEM7O0FBb0JBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBLHlDQUF5QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250YWluZXItdXBwZXItZm9vdGVyIHtcbiBoZWlnaHQ6IDI1MHB4O1xuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59ICovXG5cbi5uZXdfZm9vdGVyX2FyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZkO1xufVxuXG4ubmV3X2Zvb3Rlcl90b3Age1xuICBwYWRkaW5nOiAxMjBweCAwcHggLTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubmV3X2Zvb3Rlcl9hcmVhIC5mb290ZXJfYm90dG9tIHtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uZm9vdGVyX2JvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC8qIGNvbG9yOiAjN2Y4OGE2OyAqL1xuICBjb2xvcjogIzI2M2I1ZTtcbiAgcGFkZGluZzogMjdweCAwcHg7XG59XG4ubmV3X2Zvb3Rlcl90b3AgLmNvbXBhbnlfd2lkZ2V0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzZhNzY5NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5uZXdfZm9vdGVyX3RvcCAuY29tcGFueV93aWRnZXQgLmZfc3Vic2NyaWJlX3R3byAuYnRuX2dldCB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJ0bl9nZXRfdHdvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNWUyY2VkO1xufVxuLmJ0bl9nZXQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzY3NTRlMjtcbiAgYm9yZGVyLWNvbG9yOiAjNjc1NGUyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5hOmhvdmVyLFxuYTpmb2N1cyxcbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzLFxuYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3X2Zvb3Rlcl90b3AgLmZfd2lkZ2V0LmFib3V0LXdpZGdldCAuZl9saXN0IGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzVlMmNlZDtcbn1cbi5uZXdfZm9vdGVyX3RvcCAuZl93aWRnZXQuYWJvdXQtd2lkZ2V0IC5mX2xpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuLmZfd2lkZ2V0LmFib3V0LXdpZGdldCAuZl9saXN0IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uZl93aWRnZXQuYWJvdXQtd2lkZ2V0IC5mX2xpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZfd2lkZ2V0LmFib3V0LXdpZGdldCAuZl9saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm5ld19mb290ZXJfdG9wIC5mX3NvY2lhbF9pY29uIGEge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZWI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5mX3NvY2lhbF9pY29uIGEge1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiAjODU4ZGE4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuLnRpLWZhY2Vib29rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzQxXCI7XG59XG4udGktdHdpdHRlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGJcIjtcbn1cbi50aS12aW1lby1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGFcIjtcbn1cbi50aS1waW50ZXJlc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MzFcIjtcbn1cblxuLmJ0bl9nZXRfdHdvIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNWUyY2VkO1xuICBib3JkZXItY29sb3I6ICM1ZTJjZWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuX2dldF90d286aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM1ZTJjZWQ7XG59XG5cbi5uZXdfZm9vdGVyX3RvcCAuZl9zb2NpYWxfaWNvbiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVlMmNlZDtcbiAgYm9yZGVyLWNvbG9yOiAjNWUyY2VkO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmV3X2Zvb3Rlcl90b3AgLmZfc29jaWFsX2ljb24gYSArIGEge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLm5ld19mb290ZXJfdG9wIC5mLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICMyNjNiNWU7XG59XG4uZl82MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZfc2l6ZV8xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGNvbG9yOiAjNGI1MDVlO1xufVxuLm5ld19mb290ZXJfdG9wIC5mX3dpZGdldC5hYm91dC13aWRnZXQgLmZfbGlzdCBsaSBhIHtcbiAgY29sb3I6ICM2YTc2OTU7XG59XG5cbi5uZXdfZm9vdGVyX3RvcCAuZm9vdGVyX2JnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIC8qIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly9kcm9pdHRoZW1lcy5jb20vaHRtbC9zYWFzbGFuZC9pbWcvc2VvL2Zvb3Rlcl9iZy5wbmdcIilcbiAgIG5vLXJlcGVhdCBzY3JvbGwgY2VudGVyIDA7ICovXG5cbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9nZXR1cmJhbmxlYWYuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L2Zvb3Rlci1iZy1sZWFmLXRyaW0tcGF0dGVybi5wbmdcIilcbiAgICBuby1yZXBlYXQgc2Nyb2xsIGNlbnRlciAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NjZweDtcbn1cblxuLyogLm5ld19mb290ZXJfdG9wIC5mb290ZXJfYmcgLmZvb3Rlcl9iZ19vbmUge1xuIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLW12S1VKRkdFYy1rL1hjbENPVVN2Q25JL0FBQUFBQUFBVUFFL2puQlNmNkZlNV84dGpqbEtydW5MQlh3Y2VTTnZQY3Azd0NMY0JHQXNZSFEvczE2MDAvdm9sa3MuZ2lmXCIpXG4gICBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiB3aWR0aDogMzMwcHg7XG4gaGVpZ2h0OiAxMDVweDtcbiBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIGJvdHRvbTogMDtcbiBsZWZ0OiAzMCU7XG4gLXdlYmtpdC1hbmltYXRpb246IG15Zmlyc3QgMjJzIGxpbmVhciBpbmZpbml0ZTtcbiBhbmltYXRpb246IG15Zmlyc3QgMjJzIGxpbmVhciBpbmZpbml0ZTtcbn0gKi9cblxuLm5ld19mb290ZXJfdG9wIC5mb290ZXJfYmcgLmZvb3Rlcl9iZ190d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovLzEuYnAuYmxvZ3Nwb3QuY29tLy1oamdmeFVXMW8xZy9YY2stLVhPZGx4SS9BQUFBQUFBQVRfNC9KV1lGSmw4M3VzZ1JGTXZSZm9La1NER2QtLV9TdjA0VVFDTGNCR0FzWUhRL3MxNjAwL2N5Y2xpc3QuZ2lmXCIpXG4gICAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiA4OHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMzglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBteWZpcnN0IDMwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbXlmaXJzdCAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgbXlmaXJzdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMjUlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG15Zmlyc3Qge1xuICAwJSB7XG4gICAgbGVmdDogLTI1JTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbXlmaXJzdCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMjUlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cblxuLyoqKioqKioqKioqKipmb290ZXIgRW5kKioqKioqKioqKioqKioqKiovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["src", "/assets/img/logo2.PNG", "alt", "", 2, "width", "100%"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "drxN":
/*!************************************************************!*\
  !*** ./src/app/pages/report-crop/report-crop.component.ts ***!
  \************************************************************/
/*! exports provided: ReportCropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCropComponent", function() { return ReportCropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_reports_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/reports-service.service */ "MaMD");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "6OSH");






function ReportCropComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", crop_r1.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", crop_r1.Name, "");
} }
class ReportCropComponent {
    constructor(_reportService) {
        this._reportService = _reportService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    ngOnInit() {
        this.GetCrops();
    }
    GetCrops() {
        var crops = this._reportService.GetCrops();
        crops.subscribe((res) => {
            //   this.technologyData = res;
            console.log(res);
            this.Crops = res;
        });
    }
    selectCropChange(event) {
        let selectedType = event.target["options"];
        let selectedIndexType = selectedType.selectedIndex;
    }
}
ReportCropComponent.ɵfac = function ReportCropComponent_Factory(t) { return new (t || ReportCropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_reports_service_service__WEBPACK_IMPORTED_MODULE_1__["ReportsServiceService"])); };
ReportCropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportCropComponent, selectors: [["app-report-crop"]], decls: 10, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "start"], ["fxFlex", "50", 1, "container-inner"], ["id", "ddlTypes", "name", "ddlTypes", 1, "form-control"], ["selected", "", "id", "ddlTypes", "value", ""], ["style", "color: black", 3, "value", 4, "ngFor", "ngForOf"], [1, "container-inner"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], [2, "color", "black", 3, "value"]], template: function ReportCropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReportCropComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Crops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydC1jcm9wL3JlcG9ydC1jcm9wLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportCropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-crop',
                templateUrl: './report-crop.component.html',
                styleUrls: ['./report-crop.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_reports_service_service__WEBPACK_IMPORTED_MODULE_1__["ReportsServiceService"] }]; }, null); })();


/***/ }),

/***/ "e5f5":
/*!******************************************************************!*\
  !*** ./src/app/pages/crop-insurance/crop-insurance.component.ts ***!
  \******************************************************************/
/*! exports provided: CropInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropInsuranceComponent", function() { return CropInsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CropInsuranceComponent {
    constructor() { }
    ngOnInit() {
    }
}
CropInsuranceComponent.ɵfac = function CropInsuranceComponent_Factory(t) { return new (t || CropInsuranceComponent)(); };
CropInsuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropInsuranceComponent, selectors: [["app-crop-insurance"]], decls: 2, vars: 0, template: function CropInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "crop-insurance works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nyb3AtaW5zdXJhbmNlL2Nyb3AtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropInsuranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crop-insurance',
                templateUrl: './crop-insurance.component.html',
                styleUrls: ['./crop-insurance.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eVth":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-full/layout-full.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullComponent", function() { return LayoutFullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");





class LayoutFullComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutFullComponent.ɵfac = function LayoutFullComponent_Factory(t) { return new (t || LayoutFullComponent)(); };
LayoutFullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutFullComponent, selectors: [["app-layout-full"]], decls: 4, vars: 0, template: function LayoutFullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".body[_ngcontent-%COMP%] {\n    overflow: hidden; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sYXlvdXQtZnVsbC9sYXlvdXQtZnVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCLEVBQUUsb0JBQW9CO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9sYXlvdXQtZnVsbC9sYXlvdXQtZnVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIEhpZGUgc2Nyb2xsYmFycyAqL1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-full',
                templateUrl: './layout-full.component.html',
                styleUrls: ['./layout-full.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lDWC":
/*!**********************************************!*\
  !*** ./src/app/pages/crop/crop.component.ts ***!
  \**********************************************/
/*! exports provided: CropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropComponent", function() { return CropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CropComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.id);
} }
class CropComponent {
    constructor() { }
    ngOnInit() {
        this.service.getCrop().subscribe((selectedCrop) => this.crop =
            selectedCrop);
    }
}
CropComponent.ɵfac = function CropComponent_Factory(t) { return new (t || CropComponent)(); };
CropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropComponent, selectors: [["app-crop"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function CropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CropComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crop.subCategory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nyb3AvY3JvcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crop',
                templateUrl: './crop.component.html',
                styleUrls: ['./crop.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m7Lj":
/*!************************************************************************************!*\
  !*** ./src/app/pages/structure-key-personnel/structure-key-personnel.component.ts ***!
  \************************************************************************************/
/*! exports provided: StructureKeyPersonnelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureKeyPersonnelComponent", function() { return StructureKeyPersonnelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StructureKeyPersonnelComponent {
    constructor() { }
    ngOnInit() {
    }
}
StructureKeyPersonnelComponent.ɵfac = function StructureKeyPersonnelComponent_Factory(t) { return new (t || StructureKeyPersonnelComponent)(); };
StructureKeyPersonnelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StructureKeyPersonnelComponent, selectors: [["app-structure-key-personnel"]], decls: 2, vars: 0, consts: [[1, "filters"]], template: function StructureKeyPersonnelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "structure-key-personnel works! with faisal, 123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cnVjdHVyZS1rZXktcGVyc29ubmVsL3N0cnVjdHVyZS1rZXktcGVyc29ubmVsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StructureKeyPersonnelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-structure-key-personnel',
                templateUrl: './structure-key-personnel.component.html',
                styleUrls: ['./structure-key-personnel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nK9Z":
/*!***************************************************************************!*\
  !*** ./src/app/pages/register/phone-reg-page/phone-reg-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: PhoneRegPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneRegPageComponent", function() { return PhoneRegPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PhoneRegPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhoneRegPageComponent.ɵfac = function PhoneRegPageComponent_Factory(t) { return new (t || PhoneRegPageComponent)(); };
PhoneRegPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneRegPageComponent, selectors: [["app-phone-reg-page"]], decls: 448, vars: 0, consts: [[1, "wrapper"], [1, "main_content"], [1, "header"], [1, "info"], [1, "form-row"], ["name", "countryCode", "id", ""], ["data-countryCode", "GB", "value", "44", "Selected", ""], ["data-countryCode", "US", "value", "1"], ["label", "Other countries"], ["data-countryCode", "DZ", "value", "213"], ["data-countryCode", "AD", "value", "376"], ["data-countryCode", "AO", "value", "244"], ["data-countryCode", "AI", "value", "1264"], ["data-countryCode", "AG", "value", "1268"], ["data-countryCode", "AR", "value", "54"], ["data-countryCode", "AM", "value", "374"], ["data-countryCode", "AW", "value", "297"], ["data-countryCode", "AU", "value", "61"], ["data-countryCode", "AT", "value", "43"], ["data-countryCode", "AZ", "value", "994"], ["data-countryCode", "BS", "value", "1242"], ["data-countryCode", "BH", "value", "973"], ["data-countryCode", "BD", "value", "880"], ["data-countryCode", "BB", "value", "1246"], ["data-countryCode", "BY", "value", "375"], ["data-countryCode", "BE", "value", "32"], ["data-countryCode", "BZ", "value", "501"], ["data-countryCode", "BJ", "value", "229"], ["data-countryCode", "BM", "value", "1441"], ["data-countryCode", "BT", "value", "975"], ["data-countryCode", "BO", "value", "591"], ["data-countryCode", "BA", "value", "387"], ["data-countryCode", "BW", "value", "267"], ["data-countryCode", "BR", "value", "55"], ["data-countryCode", "BN", "value", "673"], ["data-countryCode", "BG", "value", "359"], ["data-countryCode", "BF", "value", "226"], ["data-countryCode", "BI", "value", "257"], ["data-countryCode", "KH", "value", "855"], ["data-countryCode", "CM", "value", "237"], ["data-countryCode", "CA", "value", "1"], ["data-countryCode", "CV", "value", "238"], ["data-countryCode", "KY", "value", "1345"], ["data-countryCode", "CF", "value", "236"], ["data-countryCode", "CL", "value", "56"], ["data-countryCode", "CN", "value", "86"], ["data-countryCode", "CO", "value", "57"], ["data-countryCode", "KM", "value", "269"], ["data-countryCode", "CG", "value", "242"], ["data-countryCode", "CK", "value", "682"], ["data-countryCode", "CR", "value", "506"], ["data-countryCode", "HR", "value", "385"], ["data-countryCode", "CU", "value", "53"], ["data-countryCode", "CY", "value", "90392"], ["data-countryCode", "CY", "value", "357"], ["data-countryCode", "CZ", "value", "42"], ["data-countryCode", "DK", "value", "45"], ["data-countryCode", "DJ", "value", "253"], ["data-countryCode", "DM", "value", "1809"], ["data-countryCode", "DO", "value", "1809"], ["data-countryCode", "EC", "value", "593"], ["data-countryCode", "EG", "value", "20"], ["data-countryCode", "SV", "value", "503"], ["data-countryCode", "GQ", "value", "240"], ["data-countryCode", "ER", "value", "291"], ["data-countryCode", "EE", "value", "372"], ["data-countryCode", "ET", "value", "251"], ["data-countryCode", "FK", "value", "500"], ["data-countryCode", "FO", "value", "298"], ["data-countryCode", "FJ", "value", "679"], ["data-countryCode", "FI", "value", "358"], ["data-countryCode", "FR", "value", "33"], ["data-countryCode", "GF", "value", "594"], ["data-countryCode", "PF", "value", "689"], ["data-countryCode", "GA", "value", "241"], ["data-countryCode", "GM", "value", "220"], ["data-countryCode", "GE", "value", "7880"], ["data-countryCode", "DE", "value", "49"], ["data-countryCode", "GH", "value", "233"], ["data-countryCode", "GI", "value", "350"], ["data-countryCode", "GR", "value", "30"], ["data-countryCode", "GL", "value", "299"], ["data-countryCode", "GD", "value", "1473"], ["data-countryCode", "GP", "value", "590"], ["data-countryCode", "GU", "value", "671"], ["data-countryCode", "GT", "value", "502"], ["data-countryCode", "GN", "value", "224"], ["data-countryCode", "GW", "value", "245"], ["data-countryCode", "GY", "value", "592"], ["data-countryCode", "HT", "value", "509"], ["data-countryCode", "HN", "value", "504"], ["data-countryCode", "HK", "value", "852"], ["data-countryCode", "HU", "value", "36"], ["data-countryCode", "IS", "value", "354"], ["data-countryCode", "IN", "value", "91"], ["data-countryCode", "ID", "value", "62"], ["data-countryCode", "IR", "value", "98"], ["data-countryCode", "IQ", "value", "964"], ["data-countryCode", "IE", "value", "353"], ["data-countryCode", "IL", "value", "972"], ["data-countryCode", "IT", "value", "39"], ["data-countryCode", "JM", "value", "1876"], ["data-countryCode", "JP", "value", "81"], ["data-countryCode", "JO", "value", "962"], ["data-countryCode", "KZ", "value", "7"], ["data-countryCode", "KE", "value", "254"], ["data-countryCode", "KI", "value", "686"], ["data-countryCode", "KP", "value", "850"], ["data-countryCode", "KR", "value", "82"], ["data-countryCode", "KW", "value", "965"], ["data-countryCode", "KG", "value", "996"], ["data-countryCode", "LA", "value", "856"], ["data-countryCode", "LV", "value", "371"], ["data-countryCode", "LB", "value", "961"], ["data-countryCode", "LS", "value", "266"], ["data-countryCode", "LR", "value", "231"], ["data-countryCode", "LY", "value", "218"], ["data-countryCode", "LI", "value", "417"], ["data-countryCode", "LT", "value", "370"], ["data-countryCode", "LU", "value", "352"], ["data-countryCode", "MO", "value", "853"], ["data-countryCode", "MK", "value", "389"], ["data-countryCode", "MG", "value", "261"], ["data-countryCode", "MW", "value", "265"], ["data-countryCode", "MY", "value", "60"], ["data-countryCode", "MV", "value", "960"], ["data-countryCode", "ML", "value", "223"], ["data-countryCode", "MT", "value", "356"], ["data-countryCode", "MH", "value", "692"], ["data-countryCode", "MQ", "value", "596"], ["data-countryCode", "MR", "value", "222"], ["data-countryCode", "YT", "value", "269"], ["data-countryCode", "MX", "value", "52"], ["data-countryCode", "FM", "value", "691"], ["data-countryCode", "MD", "value", "373"], ["data-countryCode", "MC", "value", "377"], ["data-countryCode", "MN", "value", "976"], ["data-countryCode", "MS", "value", "1664"], ["data-countryCode", "MA", "value", "212"], ["data-countryCode", "MZ", "value", "258"], ["data-countryCode", "MN", "value", "95"], ["data-countryCode", "NA", "value", "264"], ["data-countryCode", "NR", "value", "674"], ["data-countryCode", "NP", "value", "977"], ["data-countryCode", "NL", "value", "31"], ["data-countryCode", "NC", "value", "687"], ["data-countryCode", "NZ", "value", "64"], ["data-countryCode", "NI", "value", "505"], ["data-countryCode", "NE", "value", "227"], ["data-countryCode", "NG", "value", "234"], ["data-countryCode", "NU", "value", "683"], ["data-countryCode", "NF", "value", "672"], ["data-countryCode", "NP", "value", "670"], ["data-countryCode", "NO", "value", "47"], ["data-countryCode", "OM", "value", "968"], ["data-countryCode", "PW", "value", "680"], ["data-countryCode", "PA", "value", "507"], ["data-countryCode", "PG", "value", "675"], ["data-countryCode", "PY", "value", "595"], ["data-countryCode", "PE", "value", "51"], ["data-countryCode", "PH", "value", "63"], ["data-countryCode", "PL", "value", "48"], ["data-countryCode", "PT", "value", "351"], ["data-countryCode", "PR", "value", "1787"], ["data-countryCode", "QA", "value", "974"], ["data-countryCode", "RE", "value", "262"], ["data-countryCode", "RO", "value", "40"], ["data-countryCode", "RU", "value", "7"], ["data-countryCode", "RW", "value", "250"], ["data-countryCode", "SM", "value", "378"], ["data-countryCode", "ST", "value", "239"], ["data-countryCode", "SA", "value", "966"], ["data-countryCode", "SN", "value", "221"], ["data-countryCode", "CS", "value", "381"], ["data-countryCode", "SC", "value", "248"], ["data-countryCode", "SL", "value", "232"], ["data-countryCode", "SG", "value", "65"], ["data-countryCode", "SK", "value", "421"], ["data-countryCode", "SI", "value", "386"], ["data-countryCode", "SB", "value", "677"], ["data-countryCode", "SO", "value", "252"], ["data-countryCode", "ZA", "value", "27"], ["data-countryCode", "ES", "value", "34"], ["data-countryCode", "LK", "value", "94"], ["data-countryCode", "SH", "value", "290"], ["data-countryCode", "KN", "value", "1869"], ["data-countryCode", "SC", "value", "1758"], ["data-countryCode", "SD", "value", "249"], ["data-countryCode", "SR", "value", "597"], ["data-countryCode", "SZ", "value", "268"], ["data-countryCode", "SE", "value", "46"], ["data-countryCode", "CH", "value", "41"], ["data-countryCode", "SI", "value", "963"], ["data-countryCode", "TW", "value", "886"], ["data-countryCode", "TJ", "value", "7"], ["data-countryCode", "TH", "value", "66"], ["data-countryCode", "TG", "value", "228"], ["data-countryCode", "TO", "value", "676"], ["data-countryCode", "TT", "value", "1868"], ["data-countryCode", "TN", "value", "216"], ["data-countryCode", "TR", "value", "90"], ["data-countryCode", "TM", "value", "7"], ["data-countryCode", "TM", "value", "993"], ["data-countryCode", "TC", "value", "1649"], ["data-countryCode", "TV", "value", "688"], ["data-countryCode", "UG", "value", "256"], ["data-countryCode", "UA", "value", "380"], ["data-countryCode", "AE", "value", "971"], ["data-countryCode", "UY", "value", "598"], ["data-countryCode", "UZ", "value", "7"], ["data-countryCode", "VU", "value", "678"], ["data-countryCode", "VA", "value", "379"], ["data-countryCode", "VE", "value", "58"], ["data-countryCode", "VN", "value", "84"], ["data-countryCode", "VG", "value", "84"], ["data-countryCode", "VI", "value", "84"], ["data-countryCode", "WF", "value", "681"], ["data-countryCode", "YE", "value", "969"], ["data-countryCode", "YE", "value", "967"], ["data-countryCode", "ZM", "value", "260"], ["data-countryCode", "ZW", "value", "263"], [1, "col-md-4", "mb-3"], ["for", "validationDefault05"], ["type", "text", "id", "validationDefault05", "placeholder", "Enter your phone No.", "required", "", 1, "form-control"], [1, "button"]], template: function PhoneRegPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tell us more about you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please enter your mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UK (+44)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "USA (+1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "optgroup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Algeria (+213)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Andorra (+376)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Angola (+244)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Anguilla (+1264)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Antigua & Barbuda (+1268)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Argentina (+54)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Armenia (+374)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Aruba (+297)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Australia (+61)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Austria (+43)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Azerbaijan (+994)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bahamas (+1242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bahrain (+973)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Bangladesh (+880)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Barbados (+1246)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Belarus (+375)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Belgium (+32)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Belize (+501)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Benin (+229)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Bermuda (+1441)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Bhutan (+975)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Bolivia (+591)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Bosnia Herzegovina (+387)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Botswana (+267)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Brazil (+55)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Brunei (+673)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Bulgaria (+359)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Burkina Faso (+226)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Burundi (+257)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Cambodia (+855)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Cameroon (+237)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Canada (+1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cape Verde Islands (+238)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cayman Islands (+1345)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Central African Republic (+236)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Chile (+56)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "China (+86)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Colombia (+57)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Comoros (+269)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Congo (+242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Cook Islands (+682)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Costa Rica (+506)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Croatia (+385)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Cuba (+53)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Cyprus North (+90392)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Cyprus South (+357)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Czech Republic (+42)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Denmark (+45)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Djibouti (+253)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Dominica (+1809)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Dominican Republic (+1809)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Ecuador (+593)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Egypt (+20)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "El Salvador (+503)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Equatorial Guinea (+240)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Eritrea (+291)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Estonia (+372)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Ethiopia (+251)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Falkland Islands (+500)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Faroe Islands (+298)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Fiji (+679)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Finland (+358)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "France (+33)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "French Guiana (+594)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "French Polynesia (+689)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Gabon (+241)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Gambia (+220)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Georgia (+7880)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Germany (+49)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Ghana (+233)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Gibraltar (+350)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Greece (+30)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Greenland (+299)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Grenada (+1473)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Guadeloupe (+590)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Guam (+671)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Guatemala (+502)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Guinea (+224)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Guinea - Bissau (+245)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Guyana (+592)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Haiti (+509)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Honduras (+504)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Hong Kong (+852)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Hungary (+36)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Iceland (+354)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "India (+91)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Indonesia (+62)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Iran (+98)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Iraq (+964)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Ireland (+353)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Israel (+972)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Italy (+39)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Jamaica (+1876)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Japan (+81)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Jordan (+962)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Kazakhstan (+7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Kenya (+254)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Kiribati (+686)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Korea North (+850)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Korea South (+82)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Kuwait (+965)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Kyrgyzstan (+996)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Laos (+856)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Latvia (+371)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Lebanon (+961)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Lesotho (+266)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Liberia (+231)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Libya (+218)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Liechtenstein (+417)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Lithuania (+370)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Luxembourg (+352)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Macao (+853)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Macedonia (+389)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Madagascar (+261)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Malawi (+265)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Malaysia (+60)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Maldives (+960)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Mali (+223)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Malta (+356)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Marshall Islands (+692)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Martinique (+596)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Mauritania (+222)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Mayotte (+269)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Mexico (+52)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Micronesia (+691)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Moldova (+373)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Monaco (+377)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Mongolia (+976)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Montserrat (+1664)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Morocco (+212)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Mozambique (+258)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Myanmar (+95)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Namibia (+264)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Nauru (+674)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Nepal (+977)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Netherlands (+31)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "New Caledonia (+687)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "New Zealand (+64)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Nicaragua (+505)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Niger (+227)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Nigeria (+234)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Niue (+683)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Norfolk Islands (+672)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Northern Marianas (+670)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Norway (+47)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Oman (+968)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "option", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Palau (+680)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "option", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Panama (+507)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "option", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Papua New Guinea (+675)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Paraguay (+595)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "option", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Peru (+51)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "option", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Philippines (+63)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Poland (+48)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Portugal (+351)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "option", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Puerto Rico (+1787)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Qatar (+974)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Reunion (+262)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Romania (+40)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Russia (+7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Rwanda (+250)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "option", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "San Marino (+378)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "option", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Sao Tome & Principe (+239)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "option", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Saudi Arabia (+966)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Senegal (+221)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Serbia (+381)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Seychelles (+248)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "option", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Sierra Leone (+232)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "option", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Singapore (+65)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "option", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Slovak Republic (+421)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "option", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Slovenia (+386)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "option", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Solomon Islands (+677)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "option", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Somalia (+252)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "option", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "South Africa (+27)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "option", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Spain (+34)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "option", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Sri Lanka (+94)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "option", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "St. Helena (+290)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "option", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "St. Kitts (+1869)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "St. Lucia (+1758)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "option", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Sudan (+249)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "option", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Suriname (+597)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "option", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Swaziland (+268)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "option", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Sweden (+46)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "option", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Switzerland (+41)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "option", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Syria (+963)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "option", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Taiwan (+886)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "option", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Tajikstan (+7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "option", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Thailand (+66)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "option", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Togo (+228)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "option", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Tonga (+676)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "option", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Trinidad & Tobago (+1868)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "option", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Tunisia (+216)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Turkey (+90)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Turkmenistan (+7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Turkmenistan (+993)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Turks & Caicos Islands (+1649)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "option", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Tuvalu (+688)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "option", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Uganda (+256)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "option", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Ukraine (+380)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "option", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "United Arab Emirates (+971)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "option", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Uruguay (+598)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "option", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Uzbekistan (+7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "option", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Vanuatu (+678)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "option", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Vatican City (+379)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "option", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Venezuela (+58)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "option", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Vietnam (+84)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Virgin Islands - British (+1284)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "option", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Virgin Islands - US (+1340)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "option", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Wallis & Futuna (+681)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "option", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Yemen (North)(+969)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "option", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Yemen (South)(+967)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "option", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Zambia (+260)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "option", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Zimbabwe (+263)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "label", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Mobile No.*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "input", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "button", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Send OTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #f3f5f9;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  position: absolute;\n  background: #4b4276;\n  padding: 3px 0px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-bottom: 1px solid #bdb8d7;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bdb8d7;\n  display: block;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #594f8d;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  background: #594f8d;\n  height: 40px;\n  line-height: 45px;\n  text-align: center;\n  margin: 0 5px;\n  color: #bdb8d7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 200px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #fff;\n  color: #717171;\n  border-bottom: 1px solid #e0e4e8;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 20px;\n  color: #717171;\n  line-height: 25px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 78px;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  font-size: 18px;\n  padding: 10px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 0px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\\00bb\";\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #1890ff;\n  padding: 18px 10px;\n  outline: none;\n}\n\n[placeholder][_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  -webkit-transition: text-indent 0.4s 0.4s ease;\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n\n.sidebar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.active[_ngcontent-%COMP%] {\n  \n  border-bottom: 1px solid #e0e4e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcGhvbmUtcmVnLXBhZ2UvcGhvbmUtcmVnLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7O0FBRWhGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsNENBQTRDO0VBQzVDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOENBQXNDO0VBQXRDLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9waG9uZS1yZWctcGFnZS9waG9uZS1yZWctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjk7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICM0YjQyNzY7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLndyYXBwZXIgLnNpZGViYXIgdWwgbGkge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYjhkNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaSBhIHtcbiAgY29sb3I6ICNiZGI4ZDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaSBhIC5mYXMge1xuICB3aWR0aDogMjVweDtcbn1cblxuLndyYXBwZXIgLnNpZGViYXIgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0ZjhkO1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIC5zb2NpYWxfbWVkaWEgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogIzU5NGY4ZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgNXB4O1xuICBjb2xvcjogI2JkYjhkNztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4ud3JhcHBlciAubWFpbl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cblxuLndyYXBwZXIgLm1haW5fY29udGVudCAuaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM3MTcxNzE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlNGU4O1xufVxuXG4ud3JhcHBlciAubWFpbl9jb250ZW50IC5pbmZvIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogIzcxNzE3MTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi53cmFwcGVyIC5tYWluX2NvbnRlbnQgLmluZm8gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogNzhweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5idXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwwMGJiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiAgKi9cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTg5MGZmO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjRzIDAuNHMgZWFzZTtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2lkZWJhciAuYnRuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmFjdGl2ZSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDE3NCwgMTc0KSA7ICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlNGU4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneRegPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-reg-page',
                templateUrl: './phone-reg-page.component.html',
                styleUrls: ['./phone-reg-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pZQt":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/auth-service.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthServiceService {
    constructor(http) {
        this.http = http;
    }
    login(data) {
        console.log("Calling API");
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["baseURL"]}/Auth/token`, data);
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, consts: [[1, "filters"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About Component Working with faisal, 123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#frugalmap[_ngcontent-%COMP%] {\n\theight: 300px;\n\tbackground-color: #EEE;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7OztLQUdHOztFQUVIO0NBQ0QsYUFBYTtDQUNiLHNCQUFzQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLyogbWF0LXRvb2xiYXJbY29sb3I9XCJ3YXJuXCJdIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiB2YXIoLS1kZWZhdWx0LWhlaWdodCk7XG4gIH0gKi9cbiAgXG4gICNmcnVnYWxtYXAge1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_layout_full_layout_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layout-full/layout-full.component */ "eVth");
/* harmony import */ var _layouts_layout_side_layout_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layout-side/layout-side.component */ "/vvF");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_all_trades_all_trades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/all-trades/all-trades.component */ "Mwfp");
/* harmony import */ var _pages_commodity_purchase_commodity_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/commodity-purchase/commodity-purchase.component */ "Uh3H");
/* harmony import */ var _pages_crop_forecasting_crop_forecasting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/crop-forecasting/crop-forecasting.component */ "FqCg");
/* harmony import */ var _pages_crop_insurance_crop_insurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/crop-insurance/crop-insurance.component */ "e5f5");
/* harmony import */ var _pages_crop_crop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/crop/crop.component */ "lDWC");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/image-map/image-map.component */ "Mqab");
/* harmony import */ var _pages_investor_relation_investor_relation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/investor-relation/investor-relation.component */ "Qns9");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_register_phone_reg_page_phone_reg_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/register/phone-reg-page/phone-reg-page.component */ "nK9Z");
/* harmony import */ var _pages_register_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register-page/register-page.component */ "zAL3");
/* harmony import */ var _pages_register_upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/upload-doc/upload-doc.component */ "9ObS");
/* harmony import */ var _pages_report_crop_report_crop_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/report-crop/report-crop.component */ "drxN");
/* harmony import */ var _pages_report_district_report_district_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/report-district/report-district.component */ "RC+G");
/* harmony import */ var _pages_structure_key_personnel_structure_key_personnel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/structure-key-personnel/structure-key-personnel.component */ "m7Lj");













//import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';










const routes = [
    {
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
    },
    {
        path: 'map',
        component: _pages_image_map_image_map_component__WEBPACK_IMPORTED_MODULE_11__["ImageMapComponent"],
    },
    {
        path: 'all-trades',
        component: _pages_all_trades_all_trades_component__WEBPACK_IMPORTED_MODULE_5__["AllTradesComponent"],
    }, { path: 'crop/:name', component: _pages_crop_crop_component__WEBPACK_IMPORTED_MODULE_9__["CropComponent"] },
    {
        path: '',
        component: _layouts_layout_full_layout_full_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFullComponent"],
        children: [
            {
                path: 'about',
                component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
            },
            {
                path: 'structure-key-personnel',
                component: _pages_structure_key_personnel_structure_key_personnel_component__WEBPACK_IMPORTED_MODULE_20__["StructureKeyPersonnelComponent"]
            },
            {
                path: 'investor-relation',
                component: _pages_investor_relation_investor_relation_component__WEBPACK_IMPORTED_MODULE_12__["InvestorRelationComponent"]
            }, {
                path: 'commodity-purchase',
                component: _pages_commodity_purchase_commodity_purchase_component__WEBPACK_IMPORTED_MODULE_6__["CommodityPurchaseComponent"]
            },
            {
                path: 'crop-forecasting',
                component: _pages_crop_forecasting_crop_forecasting_component__WEBPACK_IMPORTED_MODULE_7__["CropForecastingComponent"]
            }, {
                path: 'crop-insurance',
                component: _pages_crop_insurance_crop_insurance_component__WEBPACK_IMPORTED_MODULE_8__["CropInsuranceComponent"]
            }
        ],
    },
    {
        path: '',
        component: _layouts_layout_side_layout_side_component__WEBPACK_IMPORTED_MODULE_3__["LayoutSideComponent"],
        children: [
            {
                path: 'home',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            },
            {
                path: 'report-district',
                component: _pages_report_district_report_district_component__WEBPACK_IMPORTED_MODULE_19__["ReportDistrictComponent"],
            },
            {
                path: 'report-crop',
                component: _pages_report_crop_report_crop_component__WEBPACK_IMPORTED_MODULE_18__["ReportCropComponent"],
            },
            {
                path: 'phone-reg-page',
                component: _pages_register_phone_reg_page_phone_reg_page_component__WEBPACK_IMPORTED_MODULE_15__["PhoneRegPageComponent"]
            },
            {
                path: 'register-page',
                component: _pages_register_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__["RegisterPageComponent"]
            },
            {
                path: 'upload-doc',
                component: _pages_register_upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_17__["UploadDocComponent"]
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zAL3":
/*!*************************************************************************!*\
  !*** ./src/app/pages/register/register-page/register-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegisterPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 42, vars: 0, consts: [[1, "wrapper"], [1, "main_content"], [1, "header"], [1, "info"], [1, "form-row"], [1, "col-md-4", "mb-3"], ["for", "validationDefault01"], ["type", "text", "id", "validationDefault01", "placeholder", "Enter your name", "required", "", 1, "form-control", "no-border"], ["for", "validationDefault02"], ["type", "email", "id", "validationDefault02", "placeholder", "example@domain.com", "required", "", 1, "form-control"], ["for", "validationDefaultUsername"], ["type", "number", "id", "validationDefaultUsername", "placeholder", "Eg: 110018", "aria-describedby", "inputGroupPrepend2", "required", "", 1, "form-control"], ["for", "validationDefault03"], ["type", "text", "id", "validationDefault03", "placeholder", "Please enter your address here", "required", "", 1, "form-control"], ["for", "validationDefault04"], ["type", "text", "id", "validationDefault04", "placeholder", "Your state", "required", "", 1, "form-control"], ["for", "validationDefault05"], ["type", "text", "id", "validationDefault05", "placeholder", "Your District", "required", "", 1, "form-control"], ["for", "validationDefault06"], ["type", "text", "id", "validationDefault06", "placeholder", "Your City/Town/Village", "required", "", 1, "form-control"], [1, "button"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tell us more about you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pin Code*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "State*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "District*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "City/Town/Village*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #f3f5f9;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  position: absolute;\n  background: #4b4276;\n  padding: 3px 0px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-bottom: 1px solid #bdb8d7;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bdb8d7;\n  display: block;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #594f8d;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  background: #594f8d;\n  height: 40px;\n  line-height: 45px;\n  text-align: center;\n  margin: 0 5px;\n  color: #bdb8d7;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 200px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #fff;\n  color: #717171;\n  border-bottom: 1px solid #e0e4e8;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 20px;\n  color: #717171;\n  line-height: 25px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 78px;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  font-size: 18px;\n  padding: 10px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 0px;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\\00bb\";\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #1890ff;\n  padding: 18px 10px;\n  outline: none;\n}\n\n[placeholder][_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  -webkit-transition: text-indent 0.4s 0.4s ease;\n  transition: text-indent 0.4s 0.4s ease;\n  text-indent: -100%;\n  opacity: 1;\n}\n\n.sidebar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.active[_ngcontent-%COMP%] {\n  \n  border-bottom: 1px solid #e0e4e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOztBQUVoRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRDQUE0QztFQUM1QywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUEsS0FBSzs7QUFFTDtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwyQ0FBMkM7RUFDM0MsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmOTtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzRiNDI3NjtcbiAgcGFkZGluZzogM3B4IDBweDtcbn1cblxuLndyYXBwZXIgLnNpZGViYXIgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiOGQ3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIHVsIGxpIGEge1xuICBjb2xvcjogI2JkYjhkNztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIHVsIGxpIGEgLmZhcyB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ud3JhcHBlciAuc2lkZWJhciB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTRmOGQ7XG59XG5cbi53cmFwcGVyIC5zaWRlYmFyIHVsIGxpOmhvdmVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLndyYXBwZXIgLnNpZGViYXIgLnNvY2lhbF9tZWRpYSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTk0ZjhkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGNvbG9yOiAjYmRiOGQ3O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi53cmFwcGVyIC5tYWluX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4ud3JhcHBlciAubWFpbl9jb250ZW50IC5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzcxNzE3MTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGU0ZTg7XG59XG5cbi53cmFwcGVyIC5tYWluX2NvbnRlbnQgLmluZm8ge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjNzE3MTcxO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLndyYXBwZXIgLm1haW5fY29udGVudCAuaW5mbyBkaXYge1xuICBtYXJnaW4tYm90dG9tOiA3OHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDAwYmJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qICAqL1xuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxODkwZmY7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNHMgMC40cyBlYXNlO1xuICB0ZXh0LWluZGVudDogLTEwMCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zaWRlYmFyIC5idG4ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYWN0aXZlIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTc0LCAxNzQpIDsgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGU0ZTg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styleUrls: ['./register-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map