import {Strategy} from "./Strategy";
import {AllowedNumeralTypes, romanNumerals} from "../../../entities/utils";
import {OutOfRangeError} from "../../../entities/errors/OutOfRange.error";
import {InvalidTraditionalRomanNumberError} from "../../../entities/errors/InvalidTraditionalRomanNumber.error";

export class RomanToArabic implements Strategy
{
    private readonly romanNumber: string;
    private validationPattern = /^(M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|O)$/;

    constructor(value: AllowedNumeralTypes) {
        this.validateRomanNumber(value);
        this.romanNumber = String(value);
    }

    private validateRomanNumber(value: AllowedNumeralTypes)
    {
        value = String(value);
        if (!value || value.length > 9) {
            throw new OutOfRangeError();
        }

        if (!this.validationPattern.test(value)) {
            throw new InvalidTraditionalRomanNumberError();
        }
    }

    convert(): string
    {
        this.validateRomanNumber(this.romanNumber);

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