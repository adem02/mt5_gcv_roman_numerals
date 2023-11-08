export class OutOfRangeError extends Error {
    constructor() {
        super(`Value should be greater than 0 and lower than 4000.`);

        Object.setPrototypeOf(this, OutOfRangeError.prototype);
    }
}