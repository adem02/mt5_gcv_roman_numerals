export class InvalidConvertableNumberTypeError extends Error {
    constructor() {
        super(`Invalid type given.`);

        Object.setPrototypeOf(this, InvalidConvertableNumberTypeError.prototype);
    }
}