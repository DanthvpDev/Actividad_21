"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
const decoradorGestorTareas_1 = require("./decoradorGestorTareas");
class GestorTareas {
    constructor() {
        this._almacenadorTareas = [];
    }
    AgregarItem(item) {
        this._almacenadorTareas.push(item);
    }
    ListarItems() {
        return this._almacenadorTareas;
    }
    BuscarItemPorId(id) {
        return this._almacenadorTareas.find((elem) => elem.id == id);
    }
}
exports.GestorTareas = GestorTareas;
__decorate([
    decoradorGestorTareas_1.LogMetodo
], GestorTareas.prototype, "AgregarItem", null);
__decorate([
    decoradorGestorTareas_1.LogMetodo
], GestorTareas.prototype, "ListarItems", null);
__decorate([
    decoradorGestorTareas_1.LogMetodo
], GestorTareas.prototype, "BuscarItemPorId", null);
