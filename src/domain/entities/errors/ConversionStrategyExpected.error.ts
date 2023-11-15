import {CustomError, SerializedErrorResponse} from "./CustomError";

export class ConversionStrategyExpectedError extends CustomError
{
    statusCode: number = 402;

    constructor() {
        super(`No Strategy set.`);

        Object.setPrototypeOf(this, ConversionStrategyExpectedError.prototype);
    }

    serializeErrors(): SerializedErrorResponse[] {
        return [{
            message: 'No Strategy set.'
        }];
    }
}