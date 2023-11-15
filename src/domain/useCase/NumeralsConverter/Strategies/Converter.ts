import {Strategy} from "./Strategy";
import {RomanToArabic} from "./RomanToArabic";
import {ArabicToRoman} from "./ArabicToRoman";
import {AllowedNumeralTypes, StrategyTokensType} from "../../../entities/utils";
import {ConversionStrategyExpectedError} from "../../../entities/errors/ConversionStrategyExpected.error";
import {singleton} from "tsyringe";

@singleton()
export class Converter {
    private strategy: Strategy|null = null;
    private strategyMap: {[key: string]: new (value: AllowedNumeralTypes) => Strategy} = {
        'arabic_to_roman': ArabicToRoman,
        'roman_to_arabic': RomanToArabic
    }

    private setStrategy(token: StrategyTokensType) {
        return this.strategyMap[token];
    }

    public processConversion(strategyToken: StrategyTokensType, value: AllowedNumeralTypes) {
        const Strategy = this.setStrategy(strategyToken);

        if (!Strategy) {
            throw new ConversionStrategyExpectedError();
        }

        this.strategy = new Strategy(value);
        return this.strategy.convert();
    }
}