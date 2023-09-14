'use client';
import React from 'react';
import { useFetchCoins } from '../../../lib/coinContext';
import Info from '../../components/Info';
import Layout from '../../components/Layout/LayoutDashboard';
import Wallet from '../../components/Wallet';

export const metadata = {
  title: 'Dashboard',
};

export default function Page() {
  const { exchangeRates } = useFetchCoins();

  return (
    <Layout exchangeRates={exchangeRates}>
      <div className="bg-Dashboard w-full h-screen px-16 pt-14">
        <div id="container" className="flex flex-col gap-8">
          <Info />
          <Wallet />
        </div>
      </div>
    </Layout>
  );
}
