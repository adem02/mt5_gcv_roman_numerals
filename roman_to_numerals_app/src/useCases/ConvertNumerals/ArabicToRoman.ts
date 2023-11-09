import {ConverterStrategy} from "./ConverterStrategy.ts";
import {AllowedNumeralTypes, romanNumerals} from "../utils/numeralsConverter.utils.ts";
import {OutOfRangeError} from "../errors/OutOfRange.error.ts";

export class ArabicToRoman implements ConverterStrategy
{
    private arabicValue: number;
    constructor(value: AllowedNumeralTypes) {
        if (typeof value !== 'number' || value <= 0 || value >= 4000) {
            throw new OutOfRangeError();
        }
        this.arabicValue = value;
    }
    
    convert(): string
    {
        let roman = '';

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