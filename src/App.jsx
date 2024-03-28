import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === 'Error') {
        return value; // Clear the display and start fresh
      } else if (prevValue === '0' && value !== '.') {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  const handleClearButtonClick = () => {
    setDisplayValue('0');
    console.log('Cleared display value');
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
      console.log('Calculated result:', result);
    } catch (error) {
      setDisplayValue('Error');
      console.error('Error occurred during calculation:', error);
    }
  };

  console.log('Display value:', displayValue);

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          {[7, 8, 9, '/'].map((value) => (
            <button key={value} className="button" onClick={() => handleButtonClick(value)}>
              {value}
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
