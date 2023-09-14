import React, { useState } from 'react';
import Link from 'next/link';
import { useFetchCoins } from '../../../lib/coinContext';
import { MenuDropDownUser } from '../MenuDropdownUser';

const Nav: React.FC = () => {
  const { exchangeRates, exchangeRatesvariation } = useFetchCoins();

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
        "
    >
      <div className="flex flex-row gap-6 items-center">
        <Link href="/" passHref legacyBehavior>
          <a>
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/logo.png" width={124} height={21} alt="CoinSynch" />
          </a>
        </Link>
      </div>
      <MenuDropDownUser />
    </nav>
  );
};

export default Nav;
