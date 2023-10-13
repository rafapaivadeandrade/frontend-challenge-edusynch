import { createContext, useContext, useState } from 'react';

// interface Option {
//   value: number | string;
//   name: string;
//   imageLink: string;
//   abbvr: string;
//   boolean?: boolean;
// }
interface Option {
  current_price: number | string;
  price_change_percentage_24h: number;
  name: string;
  image: string;
  symbol: string;
  boolean?: boolean;
}

interface TransferOption {
  service?: string;
  boolean?: boolean;
}

const Wallet = createContext({});

export const WalletProvider = ({ value, children }: any) => {
  return <Wallet.Provider value={value}>{children}</Wallet.Provider>;
};

export const useWallet = () => useContext(Wallet);

export const useFetchWallet = () => {
  const [wallet, setWallet] = useState<Option[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number | string>(0);
  const [isCryptoAdded, setIsCryptoAdded] = useState<boolean>(false);
  const [isTransfered, setIsTransfered] = useState<TransferOption>();
  const initialSelectedItem: Option | null = null;
  const [selectedItem, setSelectedItem] = useState<Option | null>(
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
            console.log('test1');
            // Downgrade the values
            const downgradedValue = existingValue - newValue;
            if (downgradedValue <= 0) {
              console.log('test1.1', downgradedValue);
              // Reset isTransfered?.boolean to undefined
              setIsTransfered(prevState => ({
                ...prevState,
                boolean: undefined,
              }));
              wallet.splice(existingItemIndex, 1); // Remove 1 element at existingItemIndex
              // Create a new array without the removed item
              // const updatedWallet = wallet.filter(
              //   (item, index) => index !== existingItemIndex,
              // );
              // setWallet(updatedWallet);
              // Create a new array without the removed item
              // const updatedWallet = [
              //   ...wallet.slice(0, existingItemIndex),
              //   ...wallet.slice(existingItemIndex + 1),
              // ];
              // setWallet(updatedWallet);

              console.log('newValue:', newValue);
              setWallet([...wallet]);
              if (existingValue < newValue) {
                console.log('newValue1:', newValue);

                setBalance(prevValue => {
                  return prevValue - existingValue;
                });
              } else {
                console.log('newValue2:', newValue);

                setBalance(prevValue => {
                  return prevValue - newValue;
                });
              }
            } else {
              // Convert it back to string
              existingItem.current_price = downgradedValue;
              console.log('test1.2', existingItem.current_price);
              setBalance(prevValue => {
                return prevValue - downgradedValue;
              });
            }
          } else {
            // Add the values
            const accumulatedValue = existingValue + newValue;
            existingItem.current_price = accumulatedValue;
            console.log('test2', existingItem.current_price);
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

        // setWallet([...wallet, newItem]);
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
