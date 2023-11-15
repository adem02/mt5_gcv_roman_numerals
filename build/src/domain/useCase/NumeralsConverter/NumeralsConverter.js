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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeralsConverter = void 0;
const Converter_1 = require("./Strategies/Converter");
const tsyringe_1 = require("tsyringe");
let NumeralsConverter = class NumeralsConverter {
    constructor(converter) {
        this.converter = converter;
    }
    execute(request) {
        return this.converter.processConversion(request.token, request.value);
    }
};
exports.NumeralsConverter = NumeralsConverter;
exports.NumeralsConverter = NumeralsConverter = __decorate([
    (0, tsyringe_1.injectable)(),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [Converter_1.Converter])
], NumeralsConverter);
