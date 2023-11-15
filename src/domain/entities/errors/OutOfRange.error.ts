import {CustomError, SerializedErrorResponse} from "./CustomError";

export class OutOfRangeError extends CustomError {
    statusCode: number = 403;

    constructor() {
        super(`Value should be greater than 0 and lower than 4000.`);

        Object.setPrototypeOf(this, OutOfRangeError.prototype);
    }

    serializeErrors(): SerializedErrorResponse[] {
        return [{
            message: 'Value should be greater than 0 and lower than 4000.'
        }];
    }
}