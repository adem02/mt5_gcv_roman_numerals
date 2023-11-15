import 'reflect-metadata';
import { Converter } from '../../../../src/domain/useCase/NumeralsConverter/Strategies/Converter';
import { NumeralsConverter } from '../../../../src/domain/useCase/NumeralsConverter/NumeralsConverter';
import {AllowedNumeralTypes, romanNumerals, StrategyTokensType} from "../../../../src/domain/entities/utils";
import {NumeralsConverterRequest} from "../../../../src/domain/useCase/NumeralsConverter/NumeralsConverter.request";
describe('Numerals Converter', () => {
    let useCaseMock: NumeralsConverter;
    let converter: Partial<Converter>;
    let request: NumeralsConverterRequest;

    beforeEach(() => {
        converter = {
            processConversion: jest.fn((strategyToken, value) => {
                return '1';
            })
        }

        useCaseMock = new NumeralsConverter(converter as Converter);
    })

    it('should execute use case successfully', () => {
        const converterProcessConversionSpy = jest.spyOn(converter, 'processConversion');
        request = {
            token: 'roman_to_arabic',
            value: 'I'
        };
        const response = useCaseMock.execute(request);

        expect(converterProcessConversionSpy).toHaveBeenCalledTimes(1);
        expect(converterProcessConversionSpy).toHaveBeenCalledWith(request.token, request.value);
        expect(response).toBe('1');
    });
});