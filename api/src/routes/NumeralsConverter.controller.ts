import {Controller, Get, Path, Query, Route} from "tsoa";
import {injectable} from "tsyringe";
import {NumeralsConverter} from "../domain/useCase/NumeralsConverter/NumeralsConverter";
import {StrategyTokensType} from "../domain/entities/utils";

@injectable()
@Route('convert')
export class NumeralsConverterController extends Controller
{
    constructor(private readonly useCase: NumeralsConverter) {
        super();
    }

    @Get('{valueToConvert}')
    public async convert(
        @Query() token: StrategyTokensType,
        @Path() valueToConvert: string
    ) {
        return this.useCase.execute({token, value: valueToConvert});
    }

}