'use client';
import { useFetchCoins } from '../../lib/coinContext';
import Layout from '../components/Layout/LayoutHome';
import Home from './home/page';

export const metadata = {
  title: 'Page',
};

export default function Page() {
  const { exchangeRates } = useFetchCoins();

  return (
    <Layout exchangeRates={exchangeRates}>
      <Home></Home>
    </Layout>
  );
}
