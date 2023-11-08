function arabicToRoman(arabic) {
    // Vérification de la validité de la saisie
    if (arabic < 1 || arabic > 3999) {
        throw new Error("La saisie doit être comprise entre 1 et 3999.");
    }
    // Tableau associatif pour les chiffres romains et leur valeur décimale
    var romanNumerals = {
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
        I: 1
    };
    var roman = "";
    // Boucle pour effectuer la conversion
    for (var _i = 0, _a = Object.keys(romanNumerals); _i < _a.length; _i++) {
        var symbol = _a[_i];
        var value = romanNumerals[symbol];
        while (arabic >= value) {
            roman += symbol;
            arabic -= value;
        }
    }
    return roman;
}
// Exemple d'utilisation :
var arabicNumber = 1;
var romanNumber = arabicToRoman(arabicNumber);
console.log("".concat(arabicNumber, " en chiffres romains est : ").concat(romanNumber));
