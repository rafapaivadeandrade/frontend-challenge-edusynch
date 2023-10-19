import React from 'react';
import Link from 'next/link';
import { MenuDropDownUser } from '../MenuDropdownUser';
import { NavProps } from '../../types';

const Nav: React.FC<NavProps> = ({ setOpen }) => {
  const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setOpen(prevValue => !prevValue);
  };

  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          h-16
          shadow-md bg-gray-100 bg-opacity-50
          px-10
          py-4
          sm:flex-nowrap
          sm:px-6
        "
    >
      <img
        className="md:block sm:block lg:hidden"
        src="/burguer.png"
        alt="burguer"
        onClick={handleClick}
      />
      <div className="flex flex-row gap-6 items-center">
        <Link href="/" passHref legacyBehavior>
          <a>
            <img
              src="/logo.png"
              className="w-[94px] h-[16px]"
              width={124}
              height={21}
              alt="CoinSynch"
            />
          </a>
        </Link>
      </div>
      <MenuDropDownUser />
    </nav>
  );
};

export default Nav;
