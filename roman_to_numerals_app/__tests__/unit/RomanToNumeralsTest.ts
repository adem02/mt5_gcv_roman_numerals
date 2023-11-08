import { romanToArabic } from "../../src/Services/RomanToNumerals";

describe('romanToArabic', () => {
    it('converts I to 1', () => {
        const result = romanToArabic("I");
        expect(result).toBe(1);
    });

    it('converts v to 5', () => {
        const result = romanToArabic("V");
        expect(result).toBe(5);
    });

    it('converts MCMLXXXIV to 1984', () => {
        const result = romanToArabic("MCMLXXXIV");
        expect(result).toBe(1984);
    });

    it("renvoie une erreur pour un chiffre romain non valide", () => {
        const romanNumber = "XZ"; // XZ n'est pas un chiffre romain valide
        expect(() => romanToArabic(romanNumber)).toThrow("La saisie de chiffres romains n'est pas valide.");
    });
});