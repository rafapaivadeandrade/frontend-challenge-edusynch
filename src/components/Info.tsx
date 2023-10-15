'use-client';
import React from 'react';
import { formatCurrency, formatPercentage } from '../utils/transformCurrency';
import HistoryChart from './HistoryChart';

function Info({ balance, exchangeRates }: any) {
  return (
    <div
      id="info"
      className="flex flex-row gap-8 items-center md:flex-col sm:flex-col"
    >
      <div
        id="balance"
        className="flex flex-row bg-white rounded-lg shadow-md w-full max-h-[102px]"
      >
        <div className="w-1/2 flex flex-row gap-7 p-4 items-center">
          <div className="w-16 h-16 bg-Balance rounded-full flex flex-col items-center justify-center sm:h-8 sm:w-12">
            <img src="/legal-scale.png" alt="scale" />
          </div>
          <div className="flex flex-col">
            <p className="text-1xl text-TextBase sm:text-[14px]">
              Balance <span className="text-Secondary">in US$</span>
            </p>
            <p className="text-base text-ModalText sm:hidden">approximately</p>
          </div>
        </div>
        <div className="w-1/2 bg-Balance flex flex-col items-center justify-center p-6">
          <p className="text-[32px] font-bold text-TextBase sm:text-base">
            {formatCurrency(balance)}
          </p>
        </div>
      </div>
      <div
        id="variation-news"
        className="flex flex-row gap-8 max-h-[102px] w-full justify-between md:max-h-[112px] sm:gap-4 sm:max-h-[142px]"
      >
        <div
          id="variation"
          className="flex flex-row bg-white rounded-lg shadow-md md:justify-between md:w-1/2 sm:flex-col sm:w-[128px]"
        >
          <div className="flex flex-row p-2 w-2/5 sm:w-full">
            <div className="flex flex-col gap-2 sm:w-full">
              <p className="text-[12px] text-Secondary md:text-base">
                Daily Variation
              </p>
              <div className="sm:flex sm:gap-2 sm:justify-between">
                <div className="flex flex-row items-center gap-1">
                  <img
                    src={exchangeRates[0]?.image}
                    width="32"
                    alt="avatar"
                    className="menu-dropdown-user-image"
                  />
                  <p className="text-TextBase text-[14px] sm:text-[12px]">
                    ETH
                  </p>
                </div>
                <p
                  className={`text-base ${
                    exchangeRates[0]?.price_change_percentage_24h >= 0
                      ? 'text-Terciary'
                      : 'text-Quaternary'
                  } sm:text-[14px]`}
                >
                  {formatPercentage(
                    exchangeRates[0]?.price_change_percentage_24h,
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* <img src="/variation.png" alt="variation" /> */}
          <HistoryChart />
        </div>
        <div
          id="news"
          className="flex flex-row bg-white rounded-lg shadow-md md:justify-between md:w-1/2 items-center sm:w-[128px] sm:flex-col"
        >
          <div className="flex flex-row p-4 sm:p-2">
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="text-[14px] font-bold text-TextBase sm:text-[12px]">
                NFT's NEWS
              </p>
              <p className="text-[12px] text-Secondary">
                New ElephantX NFT to be lauched!
              </p>
              <p className="text-[12px] text-Yellow cursor-pointer sm:hidden">
                Read more +
              </p>
            </div>
          </div>
          <img
            src="/elephant.png"
            className="w-fit h-[stretch] rounded-lg sm:h-[68px] sm:w-[stretch]"
            width="130.743"
            alt="elephant"
          />
        </div>
      </div>
    </div>
  );
}
export default Info;
