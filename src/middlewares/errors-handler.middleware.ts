import { NextFunction, Request, Response } from "express";
import {CustomError} from "../domain/entities/errors/CustomError";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }

    res.status(500).send({
        errors: {err}
    });
}