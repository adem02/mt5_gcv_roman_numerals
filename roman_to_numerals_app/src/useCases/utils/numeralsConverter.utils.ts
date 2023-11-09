export const romanNumerals: Record<string, number> = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
};


export enum StrategyToken {
    ROMAN_TO_ARABIC = 'roman_to_arabic',
    ARABIC_TO_ROMAN = 'arabic_to_roman'
}

export type AllowedNumeralTypes = string|number;