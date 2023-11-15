import { StrategyTokensType } from "../../../src/domain/entities/utils";
import {NumeralsConverterController} from "../../../src/routes/NumeralsConverter.controller";
import {NumeralsConverter} from "../../../src/domain/useCase/NumeralsConverter/NumeralsConverter";
import {Converter} from "../../../src/domain/useCase/NumeralsConverter/Strategies/Converter";

describe('Convert Numeral Controller', () => {
    it('should call NumeralsConverterController and return response successfully.', async () => {
        const token: StrategyTokensType = 'roman_to_arabic';
        const valueToConvert = 'I';
        
        const controller = new NumeralsConverterController(new NumeralsConverter(new Converter()));

        const response = await controller.convert(token, valueToConvert);

        expect(response).toBe('1');
    });
});