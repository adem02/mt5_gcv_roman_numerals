import {AllowedNumeralTypes, romanNumerals} from "../../../entities/utils";
import {OutOfRangeError} from "../../../entities/errors/OutOfRange.error";
import {Strategy} from "./Strategy";
import {InvalidConvertableNumberTypeError} from "../../../entities/errors/InvalidConvertableNumberType.error";

export class ArabicToRoman implements Strategy
{
    private arabicValue: number;
    constructor(value: AllowedNumeralTypes) {
        value = Number(value);
        if (isNaN(value)) {
            throw new InvalidConvertableNumberTypeError();
        }

        if (value < 0 || value >= 4000) {
            throw new OutOfRangeError();
        }
        this.arabicValue = Number(value);
    }

    convert(): string
    {
        let roman = '';

        if (this.arabicValue === 0) {
            return '0';
        }

        for (const symbol in romanNumerals) {
            if (romanNumerals.hasOwnProperty(symbol)) {
                while (this.arabicValue >= romanNumerals[symbol]) {
                    roman += symbol;
                    this.arabicValue -= romanNumerals[symbol];
                }
            }
        }

        return roman;
    }
}