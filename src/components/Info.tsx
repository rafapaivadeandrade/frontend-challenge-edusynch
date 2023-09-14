'use client';
import { useFetchCoins } from '../../lib/coinContext';

export default function Info() {
  const { exchangeRates } = useFetchCoins();

  return (
    <div id="info" className="flex flex-row gap-8">
      <div
        id="balance"
        className="flex flex-row bg-white rounded-lg shadow-md w-[592px]"
      >
        <div className="w-1/2 flex flex-row gap-7 p-4 items-center">
          <div className="w-16 h-16 bg-Balance rounded-full flex flex-col items-center justify-center">
            <img src="/legal-scale.png" alt="scale" />
          </div>
          <div className="flex flex-col">
            <p className="text-1xl text-TextBase">Balance in US$</p>
            <p className="text-base text-ModalText">approximately</p>
          </div>
        </div>
        <div className="w-1/2 bg-Balance flex flex-col items-center justify-center p-6">
          <p className="text-[32px] font-bold text-TextBase">$32,256.56</p>
        </div>
      </div>
      <div
        id="variation"
        className="flex flex-row bg-white rounded-lg shadow-md w-[280px]"
      >
        <div className="flex flex-row p-2">
          <div className="flex flex-col gap-3">
            <p className="text-[12px] text-Secondary">Daily Variation</p>
            <div className="flex flex-row items-center justify-center gap-1">
              <img
                src="https://avatars.githubusercontent.com/u/51189721?v=4"
                // src={user?.avatar ? user?.avatar : AvatarIcon}
                width="32"
                alt="avatar"
                className="menu-dropdown-user-image"
              />
              <p className="text-TextBase text-[14px]">ETH</p>
            </div>
            <p className={`text-base text-Green`}>+5,65%</p>
          </div>
        </div>
        <img src="/variation.png" width="187" alt="" />
      </div>
      <div
        id="news"
        className="flex flex-row bg-white rounded-lg shadow-md w-[280px] p-2 items-center"
      >
        <div className="flex flex-row p-2">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-bold text-TextBase">NFT's NEWS</p>
            <p className="text-[12px] text-Secondary">
              New ElephantX NFT to be lauched!
            </p>
            <p className={`text-[12px] text-Yellow`}>Read more +</p>
          </div>
        </div>
        <img src="/elephant.png" width="187" alt="elephant" />
      </div>
    </div>
  );
}
