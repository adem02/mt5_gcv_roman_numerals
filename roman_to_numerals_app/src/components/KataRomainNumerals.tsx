import { useState } from "react";
const KataRomainNumerals = () =>{


    const [number, setNumber] = useState('I');
    const [isRoman, setIsRoman] = useState(true);
  
    const decimalToRoman = (num: number) => {
      // conversion logique
    };
  
    const romanToDecimal = (roman: string) => {
      // conversion logique
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumber(e.target.value);
    }
  
    const convertToRoman = () => {
      setNumber(decimalToRoman(number));
      setIsRoman(true);
    }
  
    const convertToDecimal = () => {  
      setNumber(romanToDecimal(number));
      setIsRoman(false);
    }
  
    return (
      <>
        <input 
          value={number}
          onChange={handleChange} 
        />
  
        <button onClick={convertToRoman}>
          À l'arabe
        </button>
  
        <button onClick={convertToDecimal}>
          Au romain  
        </button>
      </>
    )

}

export default KataRomainNumerals