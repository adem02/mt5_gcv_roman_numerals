import classes from './App.module.css'
import {useState} from "react";
import {Converter} from "./useCases/ConvertNumerals/Converter.ts";
import {StrategyToken} from "./useCases/utils/numeralsConverter.utils.ts";

function App() {
    const converter: Converter = new Converter();
    const [roman, setRoman] = useState<string>('');
    const [arabic, setArabic] = useState<number>(1);
    const [result, setResult] = useState<string|number|null>(null);
    const [strategyToken, setStrategyToken] = useState('');
    const [error, setError] = useState('')

    const fromArabicToRoman = () => {
        try {
            setError('');
            const result = converter.proceedConversion(strategyToken as StrategyToken, arabic);
            setResult(result);
        } catch (e: any) {
            setError(e.message);
        }
    }

    const fromRomanToArabic = () => {
        try {
            setError('');
            const result = converter.proceedConversion(strategyToken as StrategyToken, roman);
            setResult(Number(result));
        } catch (e: any) {
            setError(e.message);
        }
    }

    return (
      <div className={classes.container}>
          <div className={classes.convertersContainer}>
              {error && <div className={classes.error}>{error}</div>}
              <h1>Roman/Arabic Converter</h1>
              <div className={classes.converterFormControl}>
                  <h2>From Roman to Arabic</h2>
                  <input type={'text'} value={roman} id={StrategyToken.ROMAN_TO_ARABIC} onChange={e => {
                      setRoman(e.target.value);
                      setStrategyToken(e.target.id);
                  }} />
                  <button onClick={fromRomanToArabic}>Convert</button>

                  {result && (typeof result === 'number') && <div>Résultat: {result}</div>}
              </div>

              <div className={classes.converterFormControl}>
                  <h2>From Arabic to Roman</h2>
                  <input type={'number'} value={arabic} min={1} max={3999} id={StrategyToken.ARABIC_TO_ROMAN} onChange={e => {
                      setArabic(Number(e.target.value));
                      setStrategyToken(e.target.id);
                  }} />
                  <button onClick={fromArabicToRoman}>Convert</button>

                  {result && (typeof result === 'string') && <div>Résultat: {result}</div>}
              </div>
          </div>
      </div>
    )
}

export default App
