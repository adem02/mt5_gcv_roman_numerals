"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionStrategyExpectedError = void 0;
class ConversionStrategyExpectedError extends Error {
    constructor() {
        super(`No Strategy set.`);
        Object.setPrototypeOf(this, ConversionStrategyExpectedError.prototype);
    }
}
exports.ConversionStrategyExpectedError = ConversionStrategyExpectedError;
