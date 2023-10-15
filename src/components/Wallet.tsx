'use client';
import React from 'react';
import CryptoModal from './CryptoModal';
import Image from 'next/image';
import TransferCryptoModal from './TransferCryptoModal';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { formatCurrency, formatPercentage } from '../utils/transformCurrency';
import { Option } from '../types';

export default function Wallet({
  wallet,
  selectedItem,
  setSelectedItem,
  numberValue,
  setNumberValue,
  isTransfered,
  setIsTransfered,
  handleAddCrypto,
  exchangeRates,
}) {
  const [isCryptoModalOpen, setisCryptoModalOpen] = React.useState(false);
  const [isTransferCryptoModalOpen, setisTransferCryptoModalOpen] =
    React.useState(false);

  const closeCryptoModal = () => {
    setisCryptoModalOpen(false);
    setisTransferCryptoModalOpen(false);
  };

  return (
    <>
      <div
        id="wallet"
        className="flex flex-col bg-white border-b-1 border-Border sm:gap-5 sm:bg-transparent"
      >
        <div className="flex flex-row justify-between p-6 border-b-2 border-b-Border sm:p-0 sm:items-center sm:bg-transparent sm:border-b-0 sm:border-t-1 sm:pt-6">
          <div id="mywallet" className="flex flex-row gap-4">
            <img src="/2.png" alt="wallet" className="sm:w-6" />
            <p className="text-1xl text-TextBase font-bold sm:text-xl">
              My Wallet
            </p>
          </div>
          <div className="flex justify-center items-center bg-Primary py-2 px-4 rounded-3xl w-[120px] h-8 cursor-pointer sm:h-6 sm:w-6">
            <span
              className="text-[14px] text-white sm:hidden"
              onClick={() => setisCryptoModalOpen(true)}
            >
              + Add crypto
            </span>
            <span
              className="text-[14px] text-white lg:hidden md:hidden sm:flex"
              onClick={() => setisCryptoModalOpen(true)}
            >
              +
            </span>
          </div>
        </div>
        <div
          className={`${
            wallet?.length > 0
              ? ''
              : 'py-20 px-[490px] md:px-[245px] sm:px-0 sm:py-10 sm:mb-6'
          } flex flex-col lg:items-center md:items-center sm:flex-initial`}
        >
          {wallet?.length > 0 ? (
            // Render this when the wallet has items
            <>
              <table className="w-full border-collapse border-spacing-0 border-gray-300 sm:hidden">
                <thead>
                  <tr>
                    <td className="px-4 py-2 text-Secondary text-[14px]">#</td>
                    <td className="px-4 py-2 text-Secondary text-[14px]">
                      Crypto
                    </td>
                    <td className="px-4 py-2 text-Secondary text-[14px] text-center">
                      Holdings
                    </td>
                    <td className="px-4 py-2 text-Secondary text-[14px] text-center">
                      Change
                    </td>
                    <td className="px-4 py-2 text-Secondary text-[14px] text-end pr-6">
                      Trade
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {wallet.map((wal: Option, index: number) => {
                    // Check if wal.value is less than or equal to 0
                    if (Number(wal.current_price) <= 0) {
                      return null; // Skip rendering this row
                    }
                    return (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                        }  relative`}
                      >
                        <td
                          className="px-4 py-2 text-[14px] text-gray-500"
                          style={{ zIndex: 1 }}
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </td>
                        <td
                          className="flex items-center gap-3 px-4 py-2 text-base text-gray-500 sm:gap-1"
                          style={{ zIndex: 1 }}
                        >
                          <img
                            src={wal.image}
                            width={32}
                            height={32}
                            alt="Coin"
                          />
                          <span className="text-gray-500">{wal.name}</span>
                          <span className="text-[14px] text-TextBase">
                            {wal.symbol.toUpperCase()}
                          </span>
                        </td>
                        <td
                          className="px-4 py-2 text-base text-gray-500 text-center"
                          style={{ zIndex: 1 }}
                        >
                          {`US ${formatCurrency(Number(wal.current_price))}`}
                        </td>

                        <td
                          className={`px-4 py-2 text-base text-center ${
                            wal.price_change_percentage_24h >= 0
                              ? 'text-Terciary'
                              : 'text-Quaternary'
                          }`}
                          style={{ zIndex: 1 }}
                        >
                          {formatPercentage(wal.price_change_percentage_24h)}
                        </td>
                        <td
                          className="px-4 py-2  flex items-center justify-end pr-6"
                          style={{ zIndex: 1 }}
                          onClick={() => [
                            setisTransferCryptoModalOpen(true),
                            setSelectedItem(wal),
                          ]}
                        >
                          <Image
                            data-tooltip-id={`my-tooltip-${5 + index}`}
                            src="/trade.png"
                            className="cursor-pointer"
                            width={16}
                            height={16}
                            alt="trade"
                          />
                          <ReactTooltip
                            id={`my-tooltip-${5 + index}`}
                            place="bottom"
                            content="Transfer Crypto"
                            style={{ backgroundColor: '#FBAB34', zIndex: 99 }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* display data in div that is not a table only on mobile */}
              <div className="grid grid-cols-2 gap-4 lg:hidden md:hidden sm:grid">
                {wallet.map((wal: Option, index: number) => {
                  // Check if wal.value is less than or equal to 0
                  if (Number(wal.current_price) <= 0) {
                    return null; // Skip rendering this row
                  }
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-4 p-4 sm:flex sm:p-0 rounded-md shadow-lg"
                    >
                      <div className="sm:flex bg-Bege sm:h-12 items-center justify-center gap-2">
                        <img
                          src={
                            wal.image
                              ? wal.image
                              : 'https://avatars.githubusercontent.com/u/51189721?v=4'
                          }
                          width="32"
                          alt="avatar"
                          className="menu-dropdown-user-image"
                        />
                        <span className="text-[12px] text-gray-500">
                          {wal.name}
                        </span>
                        <span className="text-TextBase sm:text-[12px]">
                          {wal.symbol.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-TextBase text-[12px] pl-4">
                          Holdings
                        </span>
                        <span
                          className="px-4 py-2 text-base text-gray-500"
                          style={{ zIndex: 1 }}
                        >
                          {`US ${formatCurrency(Number(wal.current_price))}`}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-TextBase text-[12px] pl-4">
                          Change
                        </span>
                        <p
                          className={`${
                            wal.price_change_percentage_24h >= 0
                              ? 'text-Terciary'
                              : 'text-Quaternary'
                          } sm:text-[14px] px-4`}
                        >
                          {formatPercentage(wal.price_change_percentage_24h)}
                        </p>
                        <button
                          className="flex items-center justify-center px-4 py-2 rounded-full bg-Primary shadow-md m-4"
                          onClick={() => [
                            setisTransferCryptoModalOpen(true),
                            setSelectedItem(wal),
                          ]}
                        >
                          <span className="text-[14px] text-white">Trade</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            // Render this when the wallet is empty
            <>
              <img
                className="mb-6 w-[82px] h-[68px] sm:w-[57.88px] sm:h-[47.999px] sm:self-center"
                src="/empty-wallet.png"
                alt="empty wallet"
              />
              <div className="flex flex-col gap-1 sm:self-center">
                <p className="text-xl mx-1 text-TextBase font-bold sm:text-base">
                  Nothing here yet...
                </p>
                <p className="text-[14px] text-TextBase sm:text-[12px]">
                  Add a crypto and start earning
                </p>
              </div>
            </>
          )}
        </div>
        {isCryptoModalOpen && (
          <CryptoModal
            onClose={closeCryptoModal}
            handleAddCrypto={handleAddCrypto}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            numberValue={numberValue}
            setNumberValue={setNumberValue}
            exchangeRates={exchangeRates}
          />
        )}
        {isTransferCryptoModalOpen && (
          <TransferCryptoModal
            onClose={closeCryptoModal}
            handleAddCrypto={handleAddCrypto}
            selectedItem={selectedItem}
            numberValue={numberValue}
            setNumberValue={setNumberValue}
            isTransfered={isTransfered}
            setIsTransfered={setIsTransfered}
            exchangeRates={exchangeRates}
          />
        )}
      </div>
    </>
  );
}
