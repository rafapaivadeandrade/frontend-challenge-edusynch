'use client';
import React from 'react';
import { useFetchCoins } from '../../lib/coinContext';
import CryptoModal from './CryptoModal';

export default function Wallet() {
  const { exchangeRates } = useFetchCoins();
  const [isCryptoModalOpen, setisCryptoModalOpen] = React.useState(false);

  const closeCryptoModal = () => {
    setisCryptoModalOpen(false);
  };

  return (
    <div
      id="wallet"
      className="flex flex-col bg-white border-b-1 border-Border"
    >
      <div className="flex flex-row justify-between p-6 border-b-2 border-b-Border">
        <div id="mywallet" className="flex flex-row gap-4">
          <img src="/2.png" alt="wallet" />
          <p className="text-1xl text-TextBase font-bold">My Wallet</p>
        </div>
        <div
          // onClick={addCrypto}
          className="flex justify-center items-center bg-Primary py-2 px-4 rounded-3xl w-[120px] h-8 cursor-pointer"
        >
          <span
            className="text-[14px] text-white"
            onClick={() => setisCryptoModalOpen(true)}
          >
            + Add crypto
          </span>
        </div>
      </div>
      <div className="py-20 px-[490px] flex flex-col items-center">
        <img
          className="mb-6 w-[82px] h-[68px]"
          src="/empty-wallet.png"
          alt="empty wallet"
        />
        <div className="flex flex-col gap-1">
          <p className="text-xl mx-1 text-TextBase font-bold">
            Nothing here yet...
          </p>
          <p className="text-[14px] text-TextBase">
            Add a crypto and start earning
          </p>
        </div>
      </div>
      {isCryptoModalOpen && <CryptoModal onClose={closeCryptoModal} />}
    </div>
  );
}
