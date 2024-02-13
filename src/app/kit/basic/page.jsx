"use client"
import { useState } from 'react';

function Basic() {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(operation);
        setDisplay(result.toString());
        setOperation('');
      } catch (error) {
        setDisplay('Error');
        setOperation('');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setOperation('');
    } else {
      if (display === '0' && value !== '.') {
        setDisplay(value.toString());
        setOperation(operation + value.toString());
      } else {
        setDisplay(display + value.toString());
        setOperation(operation + value.toString());
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen section-kit">
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full p-2 mb-2 text-2xl text-right border border-gray-300 rounded-md"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleButtonClick(1)} className="btn">1</button>
          <button onClick={() => handleButtonClick(2)} className="btn">2</button>
          <button onClick={() => handleButtonClick(3)} className="btn">3</button>
          <button onClick={() => handleButtonClick('+')} className="btn">+</button>
          <button onClick={() => handleButtonClick(4)} className="btn">4</button>
          <button onClick={() => handleButtonClick(5)} className="btn">5</button>
          <button onClick={() => handleButtonClick(6)} className="btn">6</button>
          <button onClick={() => handleButtonClick('-')} className="btn">-</button>
          <button onClick={() => handleButtonClick(7)} className="btn">7</button>
          <button onClick={() => handleButtonClick(8)} className="btn">8</button>
          <button onClick={() => handleButtonClick(9)} className="btn">9</button>
          <button onClick={() => handleButtonClick('*')} className="btn">*</button>
          <button onClick={() => handleButtonClick('.')} className="btn">.</button>
          <button onClick={() => handleButtonClick(0)} className="btn">0</button>
          <button onClick={() => handleButtonClick('=')} className="col-span-2 btn">=</button>
          <button onClick={() => handleButtonClick('/')} className="btn">/</button>
          <button onClick={() => handleButtonClick('C')} className="btn">C</button>
        </div>
      </div>
    </div>
  );
}

export default Basic;
