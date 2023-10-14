import React from 'react';
import Wallet from '../Wallet';
import Info from '../Info';
import { useFetchWallet } from '../../../lib/walletContext';

const WalletContainer: React.FC = () => {
  // To retrieve tempCoins from local storage
  const tempCoinsString = localStorage.getItem('tempCoins');
  // const { exchangeRates, exchangeRatesvariation } = useFetchCoins();
  const {
    wallet,
    selectedItem,
    setSelectedItem,
    numberValue,
    setNumberValue,
    isTransfered,
    setIsTransfered,
    handleAddCrypto,
    balance,
  } = useFetchWallet();

  return (
    <>
      <Info balance={balance} />
      <Wallet
        wallet={wallet}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        numberValue={numberValue}
        setNumberValue={setNumberValue}
        isTransfered={isTransfered}
        setIsTransfered={setIsTransfered}
        handleAddCrypto={handleAddCrypto}
        exchangeRates={JSON.parse(tempCoinsString as string)}
        // exchangeRatesvariation={exchangeRatesvariation}
      />
    </>
  );
};

export default WalletContainer;
