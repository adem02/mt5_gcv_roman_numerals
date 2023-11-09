import {ArabicToRoman} from "../../../../../src/domain/useCase/NumeralsConverter/Strategies/ArabicToRoman";

describe('Arabic to Roman', () => {
    it('should transform 1 to I successfully.', () => {
        const arabicToRoman = new ArabicToRoman(1);
        const expectedRoman = 'I';

        expect(arabicToRoman.convert()).toBe(expectedRoman);
    });

    it('should transform 5 to V successfully.', () => {
        const arabicToRoman = new ArabicToRoman(5);
        const expectedRoman = 'V';

        expect(arabicToRoman.convert()).toBe(expectedRoman);
    });

    it('should throw InvalidConvertableNumberTypeError when value is not a number.', () => {
        expect(() => new ArabicToRoman('a')).toThrow('Invalid type given.');
    });

    it('should throw OutOfRangeError when value is less than 0.', () => {
        expect(() => new ArabicToRoman(-1)).toThrow('Value should be greater than 0 and lower than 4000.');
    });

    it('should throw OutOfRangeError when value is greater than 3999.', () => {
        expect(() => new ArabicToRoman(4000)).toThrow('Value should be greater than 0 and lower than 4000.');
    });
});