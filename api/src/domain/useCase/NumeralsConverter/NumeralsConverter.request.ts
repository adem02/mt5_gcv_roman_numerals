import {AllowedNumeralTypes, StrategyTokensType} from "../../entities/utils";

export interface NumeralsConverterRequest {
    value: AllowedNumeralTypes,
    token: StrategyTokensType
}