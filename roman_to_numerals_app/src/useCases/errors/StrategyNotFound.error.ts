export class StrategyNotFoundError extends Error {
    constructor() {
        super(`Strategy not found.`);

        Object.setPrototypeOf(this, StrategyNotFoundError.prototype);
    }
}