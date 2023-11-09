import { NumeralsConverter } from '../../src/useCases/NumeralsConverter';

describe('NumeralsConverter', () => {
    let converter: NumeralsConverter;
    const invalidTraditionalRomainNumberErrorMessage = 'Invalid traditional roman number.';
    const outOfRangeErrorMessage = 'Value should be greater than 0 and lower than 4000.';

    beforeEach(() => {
        converter = new NumeralsConverter();
    });

    describe('romanToArabic', () => {
        it('should convert valid Roman numerals to Arabic', () => {
            expect(converter.romanToArabic('I')).toBe(1);
            expect(converter.romanToArabic('IV')).toBe(4);
            expect(converter.romanToArabic('IX')).toBe(9);
            expect(converter.romanToArabic('X')).toBe(10);
            expect(converter.romanToArabic('XL')).toBe(40);
            expect(converter.romanToArabic('XC')).toBe(90);
            expect(converter.romanToArabic('C')).toBe(100);
            expect(converter.romanToArabic('CD')).toBe(400);
            expect(converter.romanToArabic('CM')).toBe(900);
            expect(converter.romanToArabic('M')).toBe(1000);
            expect(converter.romanToArabic('MMMCMXCIX')).toBe(3999);
        });

        it('should throw an error for invalid Roman numerals', () => {
            expect(() => converter.romanToArabic('MMMMMMMMM')).toThrow(invalidTraditionalRomainNumberErrorMessage);
            expect(() => converter.romanToArabic('IIII')).toThrow(invalidTraditionalRomainNumberErrorMessage);
        });
    });

    describe('arabicToRoman', () => {
        it('should convert valid Arabic numbers to Roman numerals', () => {
            expect(converter.arabicToRoman(1)).toBe('I');
            expect(converter.arabicToRoman(4)).toBe('IV');
            expect(converter.arabicToRoman(9)).toBe('IX');
            expect(converter.arabicToRoman(10)).toBe('X');
            expect(converter.arabicToRoman(40)).toBe('XL');
            expect(converter.arabicToRoman(90)).toBe('XC');
            expect(converter.arabicToRoman(100)).toBe('C');
            expect(converter.arabicToRoman(400)).toBe('CD');
            expect(converter.arabicToRoman(900)).toBe('CM');
            expect(converter.arabicToRoman(1000)).toBe('M');
            expect(converter.arabicToRoman(3999)).toBe('MMMCMXCIX');
        });

        it('should throw an error for out-of-range Arabic numbers', () => {
            expect(() => converter.arabicToRoman(0)).toThrow(outOfRangeErrorMessage);
            expect(() => converter.arabicToRoman(4000)).toThrow(outOfRangeErrorMessage);
            expect(() => converter.arabicToRoman(5000)).toThrow(outOfRangeErrorMessage);
            expect(() => converter.romanToArabic('InvalidRoman')).toThrow(outOfRangeErrorMessage);
        });
    });
});
