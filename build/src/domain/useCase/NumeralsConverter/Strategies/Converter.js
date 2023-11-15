"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
const RomanToArabic_1 = require("./RomanToArabic");
const ArabicToRoman_1 = require("./ArabicToRoman");
const ConversionStrategyExpected_error_1 = require("../../../entities/errors/ConversionStrategyExpected.error");
const tsyringe_1 = require("tsyringe");
let Converter = class Converter {
    constructor() {
        this.strategy = null;
        this.strategyMap = {
            'arabic_to_roman': ArabicToRoman_1.ArabicToRoman,
            'roman_to_arabic': RomanToArabic_1.RomanToArabic
        };
    }
    setStrategy(token) {
        return this.strategyMap[token];
    }
    processConversion(strategyToken, value) {
        const Strategy = this.setStrategy(strategyToken);
        if (!Strategy) {
            throw new ConversionStrategyExpected_error_1.ConversionStrategyExpectedError();
        }
        this.strategy = new Strategy(value);
        return this.strategy.convert();
    }
};
exports.Converter = Converter;
exports.Converter = Converter = __decorate([
    (0, tsyringe_1.singleton)()
], Converter);
