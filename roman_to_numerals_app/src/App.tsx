import classes from './App.module.css'
import {useState} from "react";
import axios from "axios";

function App() {
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string|number|null>(null);
    const [error, setError] = useState('');
    const [token, setToken] = useState('roman_to_arabic');

    const handleProcessConversion = () => {
        axios.get(`https://mt5-gcv-roman-numerals.vercel.app/convert/${value}`, {
            params: {
                token: token
            }
        }).then((res) => {
            setResult(res.data);
        }).catch(error => {
            setError(error);
        })
    }

    return (
      <div className={classes.container}>
          <div className={classes.convertersContainer}>
              {error && <div className={classes.error}>{error}</div>}
              <h1>Roman/Arabic Converter</h1>
              <div>
                  <select value={token} onChange={e => setToken(e.target.value)}>
                      <option value={"roman_to_arabic"}>Roman to Arabic</option>
                      <option value={"arabic_to_roman"}>Arabic to Roman</option>
                  </select>
              </div>
              <div className={classes.converterFormControl}>
                  <h2>From Roman to Arabic</h2>
                  <input type={'text'} value={value} onChange={e => {
                      setValue(e.target.value);
                  }} />
                  <button onClick={handleProcessConversion}>Convert</button>

                  {result && <div>Résultat: {result}</div>}
              </div>
          </div>
      </div>
    )
}

export default App
