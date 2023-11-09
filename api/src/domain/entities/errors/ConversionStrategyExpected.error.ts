export class ConversionStrategyExpectedError extends Error {
    constructor() {
        super(`No Strategy set.`);

        Object.setPrototypeOf(this, ConversionStrategyExpectedError.prototype);
    }
}