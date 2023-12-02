import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Use math.evaluate for safer expression evaluation
        setResult(math.evaluate(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('C')}>C</button>
      </div>
      <div className="result">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default App;
