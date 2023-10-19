'use client';
import React from 'react';
import Layout from '../../components/Layout/LayoutDashboard';
import WalletContainer from '../../components/WalletContainer';

export const metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return (
    <Layout>
      <div className="bg-Dashboard w-full h-full pl-36 pr-16 pt-14 md:pl-12 md:pr-12 sm:px-6">
        <div id="container" className="flex flex-col gap-8">
          <WalletContainer />
        </div>
      </div>
    </Layout>
  );
}
