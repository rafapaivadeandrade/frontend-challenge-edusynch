import { useState } from 'react';
import { SelectProps, TransferOption } from '../../types';
import './styles.css';

const Select: React.FC<SelectProps> = ({
  options,
  isTransfered,
  setIsTransfered,
}: any) => {
  const [open, setOpen] = useState(false);
  const [isCryptoAdded, setIsCryptoAdded] = useState(false);

  return (
    <div className="selector w-full">
      <div
        className="selectField flex flex-row border-1 border-Eye w-full py-4 px-5 mb-2 bg-white rounded-md items-center justify-between cursor-pointer sm:p-3 sm:mb-0"
        onClick={() => [setOpen(!open), setIsCryptoAdded(false)]}
      >
        {isCryptoAdded ? (
          <div className="flex flex-row gap-2 items-center">
            <p className="text-gray-400 text-[14px]">{isTransfered.service}</p>
          </div>
        ) : (
          <p className="text-gray-400">{open ? 'Choose' : 'Select transfer'}</p>
        )}
        {open ? (
          <img src="/uparrow.png" alt="up-arrow" />
        ) : (
          <img src="/arrow.png" alt="down-arrow" />
        )}
      </div>
      <ul
        className={`z-10 w-full bg-white rounded-md overflow-hidden border-1 border-Eye max-w-md sm:mt-2 ${
          open ? 'absolute' : 'hidden'
        }`}
      >
        {options.map((op: TransferOption, index: number) => (
          <li
            key={index}
            className="px-5 flex flex-row gap-2 items-center w-full p-4 list-none cursor-pointer relative border-b-1 border-Eye"
            onClick={() => [
              setIsCryptoAdded(true),
              setOpen(false),
              setIsTransfered(op),
            ]}
          >
            <div className="flex flex-row gap-2 items-center">
              <p className="text-TextBase text-[14px]">{op.service}</p>
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
