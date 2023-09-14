import { useState } from 'react';
import './styles.css';

interface Option {
  value: string;
  label: React.ReactNode;
}

interface SelectProps {
  name: string;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ name, options, ...rest }: any) => {
  const [open, setOpen] = useState(false);
  const [isCryptoAdded, setIsCryptoAdded] = useState(false);

  return (
    <div className="selector w-full">
      <div
        className="selectField flex flex-row border-1 border-Eye w-full py-4 px-5 mb-2 bg-white rounded-md items-center justify-between cursor-pointer"
        onClick={() => [setOpen(!open), setIsCryptoAdded(false)]}
      >
        {isCryptoAdded ? (
          <div className="flex flex-row gap-2 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/51189721?v=4"
              // src={user?.avatar ? user?.avatar : AvatarIcon}
              width="12"
              alt=""
              className="w-[25px] rounded-2xl"
            />
            <p className="text-TextBase text-[14px]">Rafael</p>
            <p className="text-Secondary text-[14px]">BTC</p>
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
        <li
          className="px-5 flex flex-row gap-2 items-center w-full p-4 list-none cursor-pointer relative border-b-1 border-Eye"
          onClick={() => [setIsCryptoAdded(true), setOpen(false)]}
        >
          <div className="flex flex-row gap-2 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/51189721?v=4"
              // src={user?.avatar ? user?.avatar : AvatarIcon}
              width="12"
              alt=""
              className="w-[25px] rounded-2xl"
            />
            <p className="text-TextBase text-[14px]">Rafael</p>
            <p className="text-Secondary text-[14px]">BTC</p>
          </div>
          <img
            width="12"
            className="absolute right-5"
            src="/rightarrow.png"
            alt="right-arrow"
          />
        </li>
        <li
          className="px-5 flex flex-row gap-2 items-center w-full p-4 list-none cursor-pointer relative border-b-1 border-Eye"
          onClick={() => [setIsCryptoAdded(true), setOpen(false)]}
        >
          <div className="flex flex-row gap-2 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/51189721?v=4"
              // src={user?.avatar ? user?.avatar : AvatarIcon}
              width="12"
              alt=""
              className="w-[25px] rounded-2xl"
            />
            <p className="text-TextBase text-[14px]">Rafael</p>
            <p className="text-Secondary text-[14px]">BTC</p>
          </div>
          <img
            width="12"
            className="absolute right-5"
            src="/rightarrow.png"
            alt="right-arrow"
          />
        </li>
      </ul>
    </div>
  );
};

export default Select;
