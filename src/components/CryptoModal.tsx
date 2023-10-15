import React from 'react';
import Select from './Select';
import InputNumber from './InputNumber';
import { CloseIcon } from '../icons/icons';
import '../styles/input-number.css';

export default function CryptoModal({
  onClose,
  handleAddCrypto,
  setSelectedItem,
  selectedItem,
  numberValue,
  setNumberValue,
  exchangeRates,
}: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-[448px] bg-white p-8 rounded-lg shadow-lg relative sm:w-[272px] sm:pt-4">
        <div className="flex justify-end absolute top-3 right-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-1xl font-bold mb-6 text-center text-TextBase sm:text-base">
          Add Crypto
        </h2>
        <div className="mb-4">
          <div className="relative">
            <Select
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              exchangeRates={exchangeRates}
            />
          </div>
        </div>
        <div className="mb-6">
          <InputNumber value={numberValue} onChange={setNumberValue} />
        </div>
        <div className="mb-6 sm:mb-0">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={() => [onClose(), handleAddCrypto()]}
          >
            Add Crypto
          </button>
        </div>
      </div>
    </div>
  );
}
