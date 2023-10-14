import React from 'react';
import { InputNumberProps } from '../types';

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex flex-row border rounded-md pr-5">
      <input
        type="number"
        step="1.00"
        className="w-full h-10 px-5 py-2 pr-[2.5rem] focus:outline-none text-gray-400"
        value={value.toFixed(2)}
        onChange={e => onChange(parseFloat(e.target.value))}
      />
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <button className="arrow-button" onClick={handleIncrement}>
          <img
            src="/up.png"
            alt="Up Arrow"
            className="arrow-image"
            width={12}
          />
        </button>
        <button className="arrow-button" onClick={handleDecrement}>
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="arrow-image"
            width={12}
          />
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
