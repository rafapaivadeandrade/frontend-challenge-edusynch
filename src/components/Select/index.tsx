import { useState } from 'react';
import { useFetchWallet } from '../../../lib/walletContext';
import { SelectProps } from '../../types';
import './styles.css';

const Select: React.FC<SelectProps> = ({
  setSelectedItem,
  selectedItem,
  exchangeRates,
}: any) => {
  const [open, setOpen] = useState(false);
  const { isCryptoAdded, setIsCryptoAdded } = useFetchWallet();

  return (
    <div className="selector w-full">
      <div
        className="selectField flex flex-row border-1 border-Eye w-full py-4 px-5 mb-2 bg-white rounded-md items-center justify-between cursor-pointer"
        onClick={() => [setOpen(!open), setIsCryptoAdded(false)]}
      >
        {isCryptoAdded ? (
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
        ) : (
          <p className="text-TextBase">{open ? 'Choose' : 'Choose Crypto'}</p>
        )}
        {open ? (
          <img src="/uparrow.png" alt="up-arrow" />
        ) : (
          <img src="/arrow.png" alt="down-arrow" />
        )}
      </div>
      <ul
        className={`z-10 w-full bg-white rounded-md overflow-hidden border-1 border-Eye ${
          open ? 'absolute' : 'hidden'
        }`}
      >
        {Object.keys(exchangeRates).map((currency: any, index: number) => (
          <li
            key={index}
            className="px-5 flex flex-row gap-2 items-center w-full p-4 list-none cursor-pointer relative border-b-1 border-Eye"
            onClick={() => [
              setIsCryptoAdded(true),
              setOpen(false),
              setSelectedItem(exchangeRates[currency]),
            ]}
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                src={exchangeRates[currency].image}
                width="12"
                alt=""
                className="w-[25px] rounded-2xl"
              />
              <p className="text-TextBase text-[14px]">
                {exchangeRates[currency].name}
              </p>
              <p className="text-Secondary text-[14px]">
                {exchangeRates[currency].symbol.toUpperCase()}
              </p>
            </div>
            <img
              width="12"
              className="absolute right-5"
              src="/rightarrow.png"
              alt="right-arrow"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
