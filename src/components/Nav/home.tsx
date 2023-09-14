import React, { useState } from 'react';
import Link from 'next/link';
import SignInModal from '../SignInModal';
import SignUpModal from '../SignUpModal';
import { useFetchCoins } from '../../../lib/coinContext';
import '../../styles/carousel.css';

const Nav: React.FC = () => {
  const { exchangeRates, exchangeRatesvariation } = useFetchCoins();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignIn = () => {
    setIsSignInModalOpen(false);
  };
  const closeSignUp = () => {
    setIsSignUpModalOpen(false);
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
          px-28
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
        <Link href="/" passHref legacyBehavior>
          <a>
            <span className="text-base text-TextBase">About us</span>
          </a>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <a>
            <span className="text-base text-TextBase">Top Cryptos</span>
          </a>
        </Link>
      </div>
      <div className="flex flex-row gap-20 justify-center items-center">
        <div className="carousel-container w-[360px]">
          <div className="carousel-inner flex flex-row gap-6">
            {Object.keys(exchangeRates).map((currency: any, index: number) => (
              <div key={index} className="flex flex-row gap-2">
                <span className="text-base text-TextBase">
                  {exchangeRates[currency].currency}
                </span>
                <span className="text-base text-TextBase">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(exchangeRates[currency].rate)}
                </span>
                <span
                  className={`text-base ${
                    exchangeRatesvariation[exchangeRates[currency].currency] >=
                    0
                      ? 'text-Terciary'
                      : 'text-Quaternary'
                  }`}
                >
                  {new Intl.NumberFormat('pt-BR', {
                    signDisplay: 'exceptZero',
                  }).format(
                    exchangeRatesvariation[
                      exchangeRates[currency].currency
                    ].toFixed(3),
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <span
            className="text-TextBase text-base cursor-pointer"
            onClick={openSignInModal}
          >
            Sign in
          </span>
          <div
            onClick={openSignUpModal}
            className="flex justify-center items-center bg-Primary py-2 px-4 rounded-3xl w-24 h-8 cursor-pointer"
          >
            <span className="text-base text-white">Sign up</span>
          </div>
        </div>
      </div>
      {isSignInModalOpen && <SignInModal onClose={closeSignIn} />}
      {isSignUpModalOpen && <SignUpModal onClose={closeSignUp} />}
    </nav>
  );
};

export default Nav;
