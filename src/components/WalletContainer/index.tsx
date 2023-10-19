import React from 'react';
import Wallet from '../Wallet';
import Info from '../Info';
import { useFetchWallet } from '../../../lib/walletContext';
import { useFetchCoins } from '../../../lib/coinContext';

const WalletContainer: React.FC = () => {
  const { exchangeRates } = useFetchCoins();
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
      <Info balance={balance} exchangeRates={exchangeRates} />
      <Wallet
        wallet={wallet}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        numberValue={numberValue}
        setNumberValue={setNumberValue}
        isTransfered={isTransfered}
        setIsTransfered={setIsTransfered}
        handleAddCrypto={handleAddCrypto}
        // exchangeRates={JSON.parse(tempCoinsString as string)}
        exchangeRates={exchangeRates}
      />
    </>
  );
};

export default WalletContainer;
