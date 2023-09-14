import Head from 'next/head';
import React from 'react';
import Nav from '../../components/Nav/dashboard';
import { CoinsProvider } from '../../../lib/coinContext';
import Menu from '../Menu';

const Layout = ({
  exchangeRates,
  exchangeRatesVariation,
  setActualCurrencies,
  children,
}: any) => {
  return (
    <CoinsProvider
      value={{ exchangeRates, exchangeRatesVariation, setActualCurrencies }}
    >
      <>
        <Head>
          <title>Coin Synch</title>
        </Head>

        <Nav />
        <div className="flex flex-row">
          <Menu />
          <main className="w-full">
            <div
              className="
            flex
            bg-white
            mx-auto
            mt-1
            font-roboto
            "
            >
              {children}
            </div>
          </main>
        </div>
      </>
    </CoinsProvider>
  );
};
export default Layout;
