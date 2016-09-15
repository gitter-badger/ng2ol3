"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _index_1 = require('../../models/@index');
var Ng2ol3MapComponent = (function () {
    function Ng2ol3MapComponent() {
        this.mapCreated = new core_1.EventEmitter();
    }
    Ng2ol3MapComponent.prototype.ngOnInit = function () {
        this.target = this.options.target;
        this.view = new ol.View({
            projection: this.options.view.projection || 'EPSG:900913',
            center: this.options.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.options.view.zoom || 7
        });
    };
    Ng2ol3MapComponent.prototype.ngAfterViewInit = function () {
        this.map = new _index_1.Ng2ol3Map({
            layers: [],
            target: this.target,
            view: this.view
        });
        this.map.addLayersAndLayerGroups(this.options.layers);
        this.mapCreated.emit(this.map);
        this.map.updateSize();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3MapComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3MapComponent.prototype, "mapCreated", void 0);
    Ng2ol3MapComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-map',
            template: "\n      <div [attr.id]=\"target\" class=\"ng2ol3-map-div\"></div>\n    ",
            host: {
                class: 'ng2ol3-map'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3MapComponent);
    return Ng2ol3MapComponent;
}());
exports.Ng2ol3MapComponent = Ng2ol3MapComponent;
//# sourceMappingURL=map.component.js.map