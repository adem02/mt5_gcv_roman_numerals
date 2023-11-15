"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArabicToRoman = void 0;
const utils_1 = require("../../../entities/utils");
const OutOfRange_error_1 = require("../../../entities/errors/OutOfRange.error");
const InvalidConvertableNumberType_error_1 = require("../../../entities/errors/InvalidConvertableNumberType.error");
class ArabicToRoman {
    constructor(value) {
        value = Number(value);
        if (isNaN(value)) {
            throw new InvalidConvertableNumberType_error_1.InvalidConvertableNumberTypeError();
        }
        if (value < 0 || value >= 4000) {
            throw new OutOfRange_error_1.OutOfRangeError();
        }
        this.arabicValue = Number(value);
    }
    convert() {
        let roman = '';
        if (this.arabicValue === 0) {
            return '0';
        }
        for (const symbol in utils_1.romanNumerals) {
            if (utils_1.romanNumerals.hasOwnProperty(symbol)) {
                while (this.arabicValue >= utils_1.romanNumerals[symbol]) {
                    roman += symbol;
                    this.arabicValue -= utils_1.romanNumerals[symbol];
                }
            }
        }
        return roman;
    }
}
exports.ArabicToRoman = ArabicToRoman;
