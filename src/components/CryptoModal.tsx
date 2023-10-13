import React from 'react';
import Select from './Select';
import InputNumber from './InputNumber';
import '../styles/input-number.css';
import { CloseIcon } from '../icons/icons';

export default function CryptoModal({
  onClose,
  handleAddCrypto,
  setSelectedItem,
  selectedItem,
  numberValue,
  setNumberValue,
  exchangeRates,
  exchangeRatesvariation,
}: any) {
  const options = [
    {
      value: 2,
      name: 'Rafael1',
      imageLink: 'https://avatars.githubusercontent.com/u/51189721?v=4',
      abbvr: 'BTC',
    },
    {
      value: 4,
      name: 'Rafael2',
      imageLink: 'https://avatars.githubusercontent.com/u/51189721?v=4',
      abbvr: 'BTC',
    },
  ];

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
              options={options}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              exchangeRates={exchangeRates}
              exchangeRatesvariation={exchangeRatesvariation}
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
