'use client';
import { useEffect, useState } from 'react';

interface Option {
  value: number | string;
  name: string;
  imageLink: string;
  abbvr: string;
  boolean?: boolean;
}

interface TransferOption {
  service?: string;
  boolean?: boolean;
}

export const useWallet = () => {
  const [wallet, setWallet] = useState<Option[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number | string>(0);
  const [isCryptoAdded, setIsCryptoAdded] = useState<boolean>(false);
  const [isTransfered, setIsTransfered] = useState<TransferOption>();
  const initialSelectedItem: Option | null = null;
  const [selectedItem, setSelectedItem] = useState<Option | null>(
    initialSelectedItem,
  );
  // let totalBalance = 0;

  const getWallet = () => {
    // if (selectedItem) {
    return wallet;
    // }
  };

  // const calculateBalance = () => {
  //   let totalBalance = 0;

  //   for (const item of wallet) {
  //     const value = parseFloat(item.value as unknown as string);
  //     if (!isNaN(value)) {
  //       console.log(value);
  //       totalBalance += value;
  //     }
  //   }
  //   console.log(balance);
  //   setBalance(totalBalance);
  //   return balance;
  // };

  const handleAddCrypto = () => {
    // Add numberValue inside the wallet here
    if (selectedItem) {
      const existingItem = wallet.find(item => item.name === selectedItem.name);
      const existingItemIndex = wallet.findIndex(
        item => item.name === selectedItem.name,
      );
      if (existingItem) {
        // Parse the existing value and numberValue to numbers
        const existingValue = parseFloat(
          existingItem.value as unknown as string,
        );
        const newValue = parseFloat(numberValue.toString()); // Convert to string
        // Check if parsing is successful
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
              // Remove the item from the wallet when downgradedValue is less than or equal to 0
              wallet.splice(existingItemIndex, 1); // Remove 1 element at existingItemIndex
            } else {
              // Convert it back to string
              existingItem.value = downgradedValue;
            }
          } else {
            // Downgrade the values
            const accumulatedValue = existingValue + newValue;
            existingItem.value = accumulatedValue;
          }
          // Update the wallet with the modified item
          // wallet.splice(existingItemIndex, 1); // Remove 1 element at existingItemIndex

          // setWallet([...wallet, existingItem]);
          setWallet(prevValue => {
            console.log('newItem:', existingItem);
            const value = parseFloat(existingItem.value as unknown as string);
            console.log('test2');
            console.log(value);

            if (!isNaN(value)) {
              setBalance(prevValue => {
                console.log('prevValue:', prevValue);
                return value;
              });
            }
            return [
              ...prevValue.slice(0, existingItemIndex),
              ...prevValue.slice(existingItemIndex + 1),
              existingItem,
            ];
          });
          // setWallet([...wallet]);
        }
      } else {
        console.log('test');
        const newItem: Option = {
          value: numberValue,
          name: selectedItem.name,
          imageLink: selectedItem.imageLink,
          abbvr: selectedItem.abbvr,
        };

        // Add the new item to the wallet array
        // setWallet([...wallet, newItem]);
        setWallet(prevValue => {
          console.log('newItem:', newItem);
          const value = parseFloat(newItem.value as unknown as string);
          console.log('test2');
          console.log(value);

          if (!isNaN(value)) {
            setBalance(prevValue => {
              console.log('prevValue:', prevValue);
              return prevValue + value;
            });
          }
          return [...prevValue, newItem];
        });
        // setBalance(totalBalance);
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
    wallet,
    setWallet,
    selectedItem,
    setSelectedItem,
    isCryptoAdded,
    setIsCryptoAdded,
    numberValue,
    setNumberValue,
    isTransfered,
    setIsTransfered,
    // balance,
    // setBalance,
    handleAddCrypto,
  };
};
