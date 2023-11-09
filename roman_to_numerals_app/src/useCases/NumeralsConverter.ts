import {OutOfRangeError} from "./errors/OutOfRangeError.ts";
import {InvalidTraditionalRomanNumberError} from "./errors/InvalidTraditionalRomanNumberError.ts";
import {romanNumerals} from "./utils";

export class NumeralsConverter
{
    romanToArabic(roman: string) {
        this.validateInput(roman);

        let arabic: number = 0;
        let i: number = 0;
        while (i < roman.length) {
            const currentSymbol = roman[i];
            const currentValue = romanNumerals[currentSymbol];

            if (i < roman.length - 1) {
                const nextSymbol = roman[i + 1];
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

        return arabic;
    }

    arabicToRoman(arabic: number): string {
        this.validateInput(arabic);

        let roman = '';

        for (const symbol in romanNumerals) {
            if (romanNumerals.hasOwnProperty(symbol)) {
                while (arabic >= romanNumerals[symbol]) {
                    roman += symbol;
                    arabic -= romanNumerals[symbol];
                }
            }
        }

        return roman;
    }

    private validateRomanNumber(roman: string)
    {
        if (!roman || roman.length > 9) {
            throw new OutOfRangeError();
        }

        const pattern = /^(M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/;
        if (!pattern.test(roman)) {
            throw new InvalidTraditionalRomanNumberError();
        }
    }

    private validateArabicNumber(arabic: number)
    {
        if (arabic <= 0 || arabic >= 4000) {
            throw new OutOfRangeError();
        }
    }

    private validateInput(roman: string|number)
    {
        switch (typeof roman) {
            case "string":
                this.validateRomanNumber(roman);
                break;
            case "number":
                this.validateArabicNumber(roman)
                break;
            default:
                break;
        }
    }
}
