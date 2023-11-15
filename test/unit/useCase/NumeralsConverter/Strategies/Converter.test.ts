import 'reflect-metadata';
import {Converter} from "../../../../../src/domain/useCase/NumeralsConverter/Strategies/Converter";

describe('Converter', () => {
    it('should convert 1 to I successfully.', () => {
        const converter = new Converter();
        const expectedRoman = 'I';

        expect(converter.processConversion('arabic_to_roman', 1)).toBe(expectedRoman);
    });

    it('should convert 5 to V successfully.', () => {
        const converter = new Converter();
        const expectedRoman = 'V';

        expect(converter.processConversion('arabic_to_roman', 5)).toBe(expectedRoman);
    });

    it('should convert I to 1 successfully.', () => {
        const converter = new Converter();
        const expectedArabic = '1';

        expect(converter.processConversion('roman_to_arabic', 'I')).toBe(expectedArabic);
    });

    it('should convert V to 5 successfully.', () => {
        const converter = new Converter();
        const expectedArabic = '5';

        expect(converter.processConversion('roman_to_arabic', 'V')).toBe(expectedArabic);
    });

    it('should throw InvalidTraditionalRomanNumberError when value is IIII.', () => {
        const converter = new Converter();

        expect(() => converter.processConversion('roman_to_arabic', 'IIII')).toThrow('Invalid traditional roman number.');
    });
});