import classes from './App.module.css'
import {useState} from "react";
import {NumeralsConverter} from "./useCases/NumeralsConverter.ts";

function App() {
    const [roman, setRoman] = useState<string>('');
    const [arabic, setArabic] = useState<number>(1);
    const [result, setResult] = useState<string|number|null>(null);

    const fromArabicToRoman = () => {
        const convert = new NumeralsConverter();
        setResult(convert.arabicToRoman(arabic));
    }

    const fromRomanToArabic = () => {
        const convert = new NumeralsConverter();
        setResult(convert.romanToArabic(roman));
    }

    return (
      <div className={classes.container}>
          <div className={classes.convertersContainer}>
              <h1>Roman/Arabic Converter</h1>
              <div className={classes.converterFormControl}>
                  <h2>From Roman to Arabic</h2>
                  <input type={'text'} value={roman} id={'romanNumber'} onChange={e => setRoman(e.target.value)}/>
                  <button onClick={fromRomanToArabic}>Convert</button>

                  {result && (typeof result === 'number') && <div>Résultat: {result}</div>}
              </div>

              <div className={classes.converterFormControl}>
                  <h2>From Arabic to Roman</h2>
                  <input type={'number'} value={arabic} min={1} max={3999} id={'arabicNumber'} onChange={e => setArabic(Number(e.target.value))}/>
                  <button onClick={fromArabicToRoman}>Convert</button>

                  {result && (typeof result === 'string') && <div>Résultat: {result}</div>}
              </div>
          </div>
      </div>
    )
}

export default App
