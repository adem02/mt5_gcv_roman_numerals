"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutOfRangeError = void 0;
class OutOfRangeError extends Error {
    constructor() {
        super(`Value should be greater than 0 and lower than 4000.`);
        Object.setPrototypeOf(this, OutOfRangeError.prototype);
    }
}
exports.OutOfRangeError = OutOfRangeError;
