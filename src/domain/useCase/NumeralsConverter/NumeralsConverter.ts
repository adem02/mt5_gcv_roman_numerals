import {Converter} from "./Strategies/Converter";
import {NumeralsConverterRequest} from "./NumeralsConverter.request";
import {injectable, singleton} from "tsyringe";

@injectable()
@singleton()
export class NumeralsConverter
{
    constructor(private readonly converter: Converter) {
    }

    public execute(request: NumeralsConverterRequest)
    {
        return this.converter.processConversion(request.token, request.value);
    }
}