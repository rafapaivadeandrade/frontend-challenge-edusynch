'use client';
import React from 'react';
import Select2 from './Select/index2';
import InputNumber from './InputNumber';
import { CloseIcon } from '../icons/icons';
import '../styles/input-number.css';

export default function TransferCryptoModal({
  onClose,
  handleAddCrypto,
  selectedItem,
  numberValue,
  setNumberValue,
  isTransfered,
  setIsTransfered,
}: any) {
  const options = [
    {
      service: 'Transfer In',
      boolean: true,
    },
    {
      service: 'Transfer Out',
      boolean: false,
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-[448px] bg-white p-8 rounded-lg shadow-lg relative sm:w-[272px] sm:h-[353px] sm:p-4">
        <div className="flex justify-end absolute top-3 right-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-1xl font-bold mb-6 text-center text-TextBase sm:text-base">
          Transfer Crypto
        </h2>
        <div className="flex flex-row items-center justify-center border-t-1 gap-6 py-6 sm:py-4 sm:gap-2">
          <p className="text-[14px] text-TextButton sm:text-[12px]">
            You are transfering
          </p>
          <div className="flex flex-row gap-2 items-center">
            <img
              src={selectedItem?.image}
              width="12"
              alt=""
              className="w-[25px] rounded-2xl"
            />
            <p className="text-TextBase text-[14px]">{selectedItem?.name}</p>
            <p className="text-Secondary text-[14px]">
              {selectedItem?.symbol.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-4 gap-2">
          <label className="text-[14px] text-TextBase">Transfer</label>
          <div className="relative">
            <Select2
              name="mySelect"
              options={options}
              isTransfered={isTransfered}
              setIsTransfered={setIsTransfered}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6 gap-2 sm:mb-2">
          <label className="text-[14px] text-TextBase">Quantity</label>
          <InputNumber value={numberValue} onChange={setNumberValue} />
        </div>
        <div className="mb-6">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={() => [onClose(), handleAddCrypto()]}
          >
            Transfer Crypto
          </button>
        </div>
      </div>
    </div>
  );
}
