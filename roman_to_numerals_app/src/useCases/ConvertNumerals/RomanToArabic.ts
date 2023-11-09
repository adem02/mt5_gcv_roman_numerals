import {ConverterStrategy} from "./ConverterStrategy.ts";
import {AllowedNumeralTypes, romanNumerals} from "../utils/numeralsConverter.utils.ts";
import {OutOfRangeError} from "../errors/OutOfRange.error.ts";
import {InvalidTraditionalRomanNumberError} from "../errors/InvalidTraditionalRomanNumber.error.ts";

export class RomanToArabic implements ConverterStrategy
{
    private readonly romanNumber: string;
    private validationPattern = /^(M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/;
    constructor(value: AllowedNumeralTypes) {
        this.romanNumber = String(value);
    }

    private validateRomanNumber()
    {
        if (!this.romanNumber || this.romanNumber.length > 9) {
            throw new OutOfRangeError();
        }

        if (!this.validationPattern.test(this.romanNumber)) {
            throw new InvalidTraditionalRomanNumberError();
        }
    }
    
    convert(): string
    {
        this.validateRomanNumber();

        let arabic: number = 0;
        let i: number = 0;
        while (i < this.romanNumber.length) {
            const currentSymbol = this.romanNumber[i];
            const currentValue = romanNumerals[currentSymbol];

            if (i < this.romanNumber.length - 1) {
                const nextSymbol = this.romanNumber[i + 1];
                const nextValue = romanNumerals[nextSymbol];

                if (nextValue > currentValue) {
                    arabic += (nextValue - currentValue);
                    i += 2;
                } else {
                    arabic += currentValue;
                    i++;
                }
            } else {
                arabic += currentValue;
                i++;
            }
        }

        return String(arabic);
    }
}