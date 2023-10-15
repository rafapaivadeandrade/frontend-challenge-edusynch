import React from 'react';
import { Option, TransferOption } from '../src/types';

const Wallet = React.createContext({});

export const WalletProvider = ({ value, children }: any) => {
  return <Wallet.Provider value={value}>{children}</Wallet.Provider>;
};

export const useWallet = () => React.useContext(Wallet);

export const useFetchWallet = () => {
  const [wallet, setWallet] = React.useState<Option[]>([]);
  const [balance, setBalance] = React.useState<number>(0);
  const [numberValue, setNumberValue] = React.useState<number | string>(0);
  const [isCryptoAdded, setIsCryptoAdded] = React.useState<boolean>(false);
  const [isTransfered, setIsTransfered] = React.useState<TransferOption>();
  const initialSelectedItem: Option | null = null;
  const [selectedItem, setSelectedItem] = React.useState<Option | null>(
    initialSelectedItem,
  );

  const handleAddCrypto = () => {
    // Add numberValue inside the wallet here
    if (selectedItem) {
      const existingItem = wallet.find(item => item.name === selectedItem.name);
      const existingItemIndex = wallet.findIndex(
        item => item.name === selectedItem.name,
      );
      // Add the item if exists in wallet
      if (existingItem) {
        // Parse the existing value and numberValue to numbers
        const existingValue = parseFloat(
          existingItem.current_price as unknown as string,
        );
        const newValue = parseFloat(numberValue.toString()); // Convert to string
        // Check if existingValue and newValue are numbers
        if (!isNaN(existingValue) && !isNaN(newValue)) {
          if (isTransfered?.boolean === false && existingValue >= 0) {
            // Downgrade the values
            const downgradedValue = existingValue - newValue;
            if (downgradedValue <= 0) {
              // Reset isTransfered?.boolean to undefined
              setIsTransfered(prevState => ({
                ...prevState,
                boolean: undefined,
              }));

              wallet.splice(existingItemIndex, 1); // Remove 1 element at existingItemIndex
              setWallet([...wallet]);

              if (existingValue < newValue) {
                setBalance(prevValue => {
                  return prevValue - existingValue;
                });
              } else {
                setBalance(prevValue => {
                  return prevValue - newValue;
                });
              }
            } else {
              // Convert it back to string
              existingItem.current_price = downgradedValue;
              setBalance(prevValue => {
                return prevValue - downgradedValue;
              });
            }
          } else {
            // Add the values
            const accumulatedValue = existingValue + newValue;
            existingItem.current_price = accumulatedValue;
            setBalance(prevValue => {
              return prevValue + newValue;
            });
          }
        }
      } else {
        // Add the new item to the wallet array
        const newItem: Option = {
          current_price: numberValue,
          name: selectedItem.name,
          image: selectedItem.image,
          symbol: selectedItem.symbol,
          price_change_percentage_24h: selectedItem.price_change_percentage_24h,
        };

        setWallet(prevValue => {
          const value = parseFloat(newItem.current_price as unknown as string);

          if (!isNaN(value)) {
            setBalance(prevValue => {
              return prevValue + value;
            });
          }
          return [...prevValue, newItem];
        });
      }

      // Clear the inputs
      setNumberValue(0);
      setIsTransfered(prevState => ({
        ...prevState,
        boolean: undefined,
      }));
    }
  };

  return {
    balance,
    setBalance,
    handleAddCrypto,
    isCryptoAdded,
    setIsCryptoAdded,
    wallet,
    setWallet,
    selectedItem,
    setSelectedItem,
    numberValue,
    setNumberValue,
    isTransfered,
    setIsTransfered,
  };
};
