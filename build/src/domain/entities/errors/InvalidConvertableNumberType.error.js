"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidConvertableNumberTypeError = void 0;
class InvalidConvertableNumberTypeError extends Error {
    constructor() {
        super(`Invalid type given.`);
        Object.setPrototypeOf(this, InvalidConvertableNumberTypeError.prototype);
    }
}
exports.InvalidConvertableNumberTypeError = InvalidConvertableNumberTypeError;
