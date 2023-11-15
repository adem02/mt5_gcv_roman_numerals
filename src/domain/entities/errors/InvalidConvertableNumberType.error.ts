import {SerializedErrorResponse} from "./CustomError";

export class InvalidConvertableNumberTypeError extends Error {
    statusCode: number = 405;

    constructor() {
        super(`Invalid type given.`);

        Object.setPrototypeOf(this, InvalidConvertableNumberTypeError.prototype);
    }

    serializeErrors(): SerializedErrorResponse[] {
        return [{
            message: 'Invalid type given.'
        }];
    }
}