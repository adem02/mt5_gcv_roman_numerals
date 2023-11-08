export function arabicToRoman(arabic: number): string {
    if (arabic < 1 || arabic > 3999) {
        throw new Error("La saisie doit être comprise entre 1 et 3999.");
    }

    const romanNumerals: Record<string, number> = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let roman = "";

    for (const symbol of Object.keys(romanNumerals)) {
        const value = romanNumerals[symbol];
        while (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }

    return roman;
}

// Exemple d'utilisation :
const arabicNumber = 1984;
const romanNumber = arabicToRoman(arabicNumber);
console.log(`${arabicNumber} en chiffres romains est : ${romanNumber}`);
