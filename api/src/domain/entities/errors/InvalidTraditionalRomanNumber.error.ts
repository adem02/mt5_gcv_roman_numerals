export class InvalidTraditionalRomanNumberError extends Error {
    constructor() {
        super(`Invalid traditional roman number.`);

        Object.setPrototypeOf(this, InvalidTraditionalRomanNumberError.prototype);
    }
}