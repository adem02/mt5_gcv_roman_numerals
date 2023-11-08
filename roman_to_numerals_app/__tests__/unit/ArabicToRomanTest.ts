import { arabicToRoman } from "../../src/Services/ArabicToRoman";

describe('arabicToRoman', () => {
    it('convertit 1 en "I"', () => {
      const result = arabicToRoman(1);
      expect(result).toBe("I");
    });
  
    it('convertit 1984 en "MCMLXXXIV"', () => {
      const result = arabicToRoman(1984);
      expect(result).toBe("MCMLXXXIV");
    });
  
    it('échoue pour une valeur négative', () => {
      expect(() => arabicToRoman(-5)).toThrow('La saisie doit être comprise entre 1 et 3999.');
    });
  
    it('échoue pour une valeur supérieure à 3999', () => {
      expect(() => arabicToRoman(4000)).toThrow('La saisie doit être comprise entre 1 et 3999.');
    });
  });