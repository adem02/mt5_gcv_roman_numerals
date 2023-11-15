"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanToArabic = void 0;
const utils_1 = require("../../../entities/utils");
const OutOfRange_error_1 = require("../../../entities/errors/OutOfRange.error");
const InvalidTraditionalRomanNumber_error_1 = require("../../../entities/errors/InvalidTraditionalRomanNumber.error");
class RomanToArabic {
    constructor(value) {
        this.validationPattern = /^(M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|O)$/;
        this.validateRomanNumber(value);
        this.romanNumber = String(value);
    }
    validateRomanNumber(value) {
        value = String(value);
        if (!value || value.length > 9) {
            throw new OutOfRange_error_1.OutOfRangeError();
        }
        if (!this.validationPattern.test(value)) {
            throw new InvalidTraditionalRomanNumber_error_1.InvalidTraditionalRomanNumberError();
        }
    }
    convert() {
        this.validateRomanNumber(this.romanNumber);
        let arabic = 0;
        let i = 0;
        while (i < this.romanNumber.length) {
            const currentSymbol = this.romanNumber[i];
            const currentValue = utils_1.romanNumerals[currentSymbol];
            if (i < this.romanNumber.length - 1) {
                const nextSymbol = this.romanNumber[i + 1];
                const nextValue = utils_1.romanNumerals[nextSymbol];
                if (nextValue > currentValue) {
                    arabic += (nextValue - currentValue);
                    i += 2;
                }
                else {
                    arabic += currentValue;
                    i++;
                }
            }
            else {
                arabic += currentValue;
                i++;
            }
        }
        return String(arabic);
    }
}
exports.RomanToArabic = RomanToArabic;
