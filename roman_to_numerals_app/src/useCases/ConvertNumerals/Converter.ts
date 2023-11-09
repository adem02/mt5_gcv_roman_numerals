import {ConverterStrategy} from "./ConverterStrategy.ts";
import {AllowedNumeralTypes, StrategyToken} from "../utils/numeralsConverter.utils.ts";
import {StrategyNotFoundError} from "../errors/StrategyNotFound.error.ts";
import {ArabicToRoman} from "./ArabicToRoman.ts";
import {RomanToArabic} from "./RomanToArabic.ts";

export class Converter {
    private converterStrategy: ConverterStrategy|null = null;
    private strategyMap: {[key: string]: new (value: AllowedNumeralTypes) => ConverterStrategy} = {
        'arabic_to_roman': ArabicToRoman,
        'roman_to_arabic': RomanToArabic
    }

    private setStrategy(strategyToken: StrategyToken) {
        return this.strategyMap[strategyToken.toString()];
    }

    proceedConversion(strategyToken: StrategyToken, value: AllowedNumeralTypes)
    {
        const Strategy = this.setStrategy(strategyToken);
        this.converterStrategy = new Strategy(value);
        if (!this.converterStrategy) {
            throw new StrategyNotFoundError();
        }
        return this.converterStrategy.convert();
    }
}