import {SerializedErrorResponse} from "./CustomError";

export class InvalidTraditionalRomanNumberError extends Error {
    statusCode: number = 408;

    constructor() {
        super(`Invalid traditional roman number.`);

        Object.setPrototypeOf(this, InvalidTraditionalRomanNumberError.prototype);
    }

    serializeErrors(): SerializedErrorResponse[] {
        return [{
            message: 'Invalid traditional roman number.'
        }];
    }
}