export function romanToArabic(roman: string): number {
    const romanNumerals: Record<string, number> = {
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

    // Vérification que la chaîne de chiffres romains est valide
    if (!/^(M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/.test(roman)) {
        throw new Error("La saisie de chiffres romains n'est pas valide.");
    }

    let arabic = 0;
    let i = 0;

    while (i < roman.length) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];

        if (i < roman.length - 1) {
            const nextSymbol = roman[i + 1];
            const nextValue = romanNumerals[nextSymbol];

            if (nextValue > currentValue) {
                arabic += (nextValue - currentValue);
                i += 2; // Avance de deux caractères pour sauter les symboles en chiffres romains spéciaux (comme CM, XL, etc.)
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

try {
    const romanNumber = "Xlki";
    const arabicNumber = romanToArabic(romanNumber);
    console.log(`${romanNumber} en chiffres arabes est : ${arabicNumber}`);
} catch (error: any) {
    console.error(error.message);
}