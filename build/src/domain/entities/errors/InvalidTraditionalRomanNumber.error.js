"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTraditionalRomanNumberError = void 0;
class InvalidTraditionalRomanNumberError extends Error {
    constructor() {
        super(`Invalid traditional roman number.`);
        Object.setPrototypeOf(this, InvalidTraditionalRomanNumberError.prototype);
    }
}
exports.InvalidTraditionalRomanNumberError = InvalidTraditionalRomanNumberError;
