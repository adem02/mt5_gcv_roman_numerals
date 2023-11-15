import {RomanToArabic} from "../../../../../src/domain/useCase/NumeralsConverter/Strategies/RomanToArabic";

describe('Roman to Arabic', () => {
    it('should transform I to 1 successfully.', () => {
        const romanToArabic = new RomanToArabic('I');
        const expectedArabic = '1';

        expect(romanToArabic.convert()).toBe(expectedArabic);
    });

    it('should transform V to 5 successfully.', () => {
        const romanToArabic = new RomanToArabic('V');
        const expectedArabic = '5';

        expect(romanToArabic.convert()).toBe(expectedArabic);
    });

    it('should throw InvalidTraditionalRomanNumberError when value is IIII.', () => {
        expect(() => new RomanToArabic('IIII')).toThrow('Invalid traditional roman number.');
    });

    it('should throw OutOfRangeError when value is empty.', () => {
        expect(() => new RomanToArabic('')).toThrow('Value should be greater than 0 and lower than 4000.');
    });

    it('should throw OutOfRangeError when value is longer than 9 characters.', () => {
        expect(() => new RomanToArabic('MMMMMMMMMM')).toThrow('Value should be greater than 0 and lower than 4000.');
    });
})