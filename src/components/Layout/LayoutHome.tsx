import Head from 'next/head';
import React from 'react';
import Nav from '../../components/Nav/home';
import { CoinsProvider } from '../../../lib/coinContext';

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
        <main>
          <div
            className="
        flex
        bg-white
        mx-auto
        mt-16
        font-roboto
        "
          >
            {children}
          </div>
        </main>
      </>
    </CoinsProvider>
  );
};
export default Layout;
