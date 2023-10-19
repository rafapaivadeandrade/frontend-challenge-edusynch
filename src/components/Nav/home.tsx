'use client';
import React from 'react';
import Link from 'next/link';
import SignInModal from '../SignInModal';
import SignUpModal from '../SignUpModal';
import { useFetchCoins } from '../../../lib/coinContext';
import {
  formatCurrency,
  formatPercentage,
} from '../../utils/transformCurrency';
import { NavProps } from '../../types';
import '../../styles/carousel.css';
import { useQuery } from '@tanstack/react-query';

const Nav: React.FC<NavProps> = ({ setOpen }) => {
  const { exchangeRates } = useFetchCoins();
  // const { data } = useQuery({
  //   queryKey: ['stream-hydrate-users'],
  //   queryFn: () => fetchCryptoDatas(),
  //   staleTime: 5 * 1000,
  //   refetchOnWindowFocus: false,
  // });
  // const tempCoinsString = localStorage.getItem('tempCoins');
  // const exchangeRates = JSON.parse(tempCoinsString as string);
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setOpen(prevValue => !prevValue);
  };

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
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
          lg:px-28
          py-4
          lg:flex-row
          md:flex-col
          md:px-0
          md:py-0
          md:gap-1
          md:h-[84px]
          md:justify-end
          sm:gap-2
          sm:px-0
          sm:flex-col
          sm:justify-center
          sm:h-20
          sm:pb-0
          sm:pt-5
          sm:items-start
        "
    >
      <div className="flex justify-between lg:w-full md:items-center md:w-full md:px-12 sm:w-full">
        <div className="flex gap-6 items-center md:py-3 sm:w-full sm:justify-between sm:px-4 sm:gap-0">
          <Link href="/" passHref legacyBehavior>
            <img
              className="cursor-pointer"
              src="/logo.png"
              width={124}
              height={21}
              alt="CoinSynch"
            />
          </Link>
          <span
            className="cursor-pointer text-base text-TextBase sm:hidden"
            onClick={() => scrollToSection('aboutus')}
          >
            About us
          </span>
          <span
            className="cursor-pointer text-base text-TextBase sm:hidden"
            onClick={() => scrollToSection('topcryptos')}
          >
            Top Cryptos
          </span>
          <img
            className="md:hidden sm:flex lg:hidden"
            src="/burguer.png"
            alt="burguer"
            onClick={handleClick}
          />
        </div>
        <div className="flex gap-20 justify-center items-center sm:hidden">
          <div className="carousel-container lg:flex w-[360px] md:hidden sm:hidden">
            <div className="carousel-inner flex flex-row gap-6">
              {Object.keys(exchangeRates).map(
                (currency: any, index: number) => (
                  <div key={index} className="flex flex-row gap-2">
                    <span className="text-base text-TextBase">
                      {/* {data[currency].symbol.toUpperCase()} */}
                      {exchangeRates[currency].symbol.toUpperCase()}
                    </span>
                    <span className="text-base text-TextBase">
                      {/* {formatCurrency(data[currency].current_price)} */}
                      {formatCurrency(exchangeRates[currency].current_price)}
                    </span>
                    {/* <span
                      className={`text-base ${
                        exchangeRatesvariation[
                          exchangeRates[currency].currency
                        ] >= 0
                          ? 'text-Terciary'
                          : 'text-Quaternary'
                      }`}
                    > */}
                    <span
                      // className={`text-base ${
                      //   data[currency].price_change_percentage_24h >= 0
                      //     ? 'text-Terciary'
                      //     : 'text-Quaternary'
                      // }`}
                      className={`text-base ${
                        exchangeRates[currency].price_change_percentage_24h >= 0
                          ? 'text-Terciary'
                          : 'text-Quaternary'
                      }`}
                    >
                      {/* {formatPercentage(
                      data[currency].price_change_percentage_24h,
                    )} */}
                      {formatPercentage(
                        exchangeRates[currency].price_change_percentage_24h,
                      )}
                      {/* {new Intl.NumberFormat('pt-BR', {
                        signDisplay: 'exceptZero',
                      }).format(
                        exchangeRatesvariation[
                          exchangeRates[currency].currency
                        ].toFixed(3),
                      )} */}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center sm:hidden">
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
      </div>
      <div className="carousel-container w-[360px] lg:hidden md:flex md:w-full sm:flex">
        <div className="carousel-inner flex flex-row gap-6">
          {Object.keys(exchangeRates).map((currency: any, index: number) => (
            // {data?.map((currency: any, index: number) => (
            <div key={index} className="flex flex-row gap-2">
              <span className="text-base text-TextBase">
                {/* {data[currency].symbol.toUpperCase()} */}
                {exchangeRates[currency].symbol.toUpperCase()}
              </span>
              <span className="text-base text-TextBase">
                {/* {formatCurrency(data[currency].current_price)} */}
                {formatCurrency(exchangeRates[currency].current_price)}
              </span>
              <span
                // className={`text-base ${
                // data[currency].price_change_percentage_24h >= 0
                // ? 'text-Terciary'
                // : 'text-Quaternary'
                // }`}
                className={`text-base ${
                  exchangeRates[currency].price_change_percentage_24h >= 0
                    ? 'text-Terciary'
                    : 'text-Quaternary'
                }`}
              >
                {/* {formatPercentage(data[currency].price_change_percentage_24h)} */}
                {formatPercentage(
                  exchangeRates[currency].price_change_percentage_24h,
                )}
                {/* {new Intl.NumberFormat('pt-BR', {
                  signDisplay: 'exceptZero',
                }).format(
                  exchangeRatesvariation[
                    exchangeRates[currency].currency
                  ].toFixed(3),
                )} */}
              </span>
            </div>
          ))}
        </div>
      </div>
      {isSignInModalOpen && (
        <SignInModal
          onClose={closeSignIn}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
        />
      )}
      {isSignUpModalOpen && (
        <SignUpModal
          onClose={closeSignUp}
          setIsSignInModalOpen={setIsSignInModalOpen}
        />
      )}
    </nav>
  );
};

export default Nav;
