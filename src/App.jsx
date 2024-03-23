import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      // Prevent leading zeros
      if (prevValue === '0') {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  const handleClearButtonClick = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          {[7, 8, 9, '/'].map((value) => (
            <button key={value} className="button" onClick={() => handleButtonClick(value)}>
              {value}r
            </button>
          ))}
          {[4, 5, 6, '*'].map((value) => (
            <button key={value} className="button" onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          ))}
          {[1, 2, 3, '-'].map((value) => (
            <button key={value} className="button" onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          ))}
          {['C', 0, '=', '+'].map((value) => (
            <button key={value} className="button" onClick={value === 'C' ? handleClearButtonClick : value === '=' ? handleCalculate : () => handleButtonClick(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
