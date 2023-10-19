'use client';
import React from 'react';
import useAxios from '../src/hooks/useAxios';
import { MockedData } from './mockedData';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Coins = React.createContext({ coins: null, loading: false });
const currencies = ['bitcoin', 'ethereum', 'cardano', 'ripple'];
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Obtém a data atual
const dataAtual = new Date();
// Ajusta para o fuso horário local
dataAtual.setDate(dataAtual.getDate() - 1); // Subtract one day
// const dataMeiaNoite = dataAtual;
const dataISO = dataAtual.toISOString();

export const CoinsProvider = ({ value, children }: any) => {
  return <Coins.Provider value={value}>{children}</Coins.Provider>;
};

export const useCoin = () => React.useContext(Coins);
export const useFetchCoins = () => {
  const [exchangeRates, setExchangeRates] = React.useState({});
  const [exchangeRatesvariation, setExchangeRatesVariation] = React.useState(
    {},
  );
  const [actualCurrencies, setActualCurrencies] = React.useState(currencies);

  React.useEffect(() => {
    // const fetchExchangeRates = async () => {
    //   try {
    //     const responses = await Promise.all(
    //       actualCurrencies.map(async (currency, index) => {
    //         const delayDuration = index * 350; // Delay in milliseconds (1000 ms = 1 second)

    //         await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request
    //         const response = await axios.get(
    //           `https://rest.coinapi.io/v1/exchangerate/${currency}/BRL`,
    //           {
    //             headers: {
    //               'X-CoinAPI-Key': apiKey,
    //               // 'X-CoinAPI-Key': 'ECA43654-6E72-48D3-A084-9BB785976D85',
    //             },
    //           },
    //         );
    //         return {
    //           currency,
    //           rate: response.data.rate,
    //           time: response.data.time,
    //         };
    //       }),
    //     );
    //     const responsesVariation = await Promise.all(
    //       responses.map(async (currency, index) => {
    //         const delayDuration = index * 350; // Delay in milliseconds (1000 ms = 1 second)

    //         await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request
    //         const responseVariation = await axios.get(
    //           `https://rest.coinapi.io/v1/exchangerate/${currency.currency}/BRL?time=${dataISO}`,
    //           {
    //             headers: {
    //               'X-CoinAPI-Key': apiKey,
    //             },
    //           },
    //         );
    //         return {
    //           currency: currency.currency,
    //           previousRate: responseVariation.data.rate,
    //           actualRate: currency.rate,
    //         };
    //       }),
    //     );
    //     // Variação Diária (%) = ((Preço Atual - Preço Anterior) / Preço Anterior) * 100
    //     // const responsesVariation = [
    //     //   {
    //     //     currency: 'BTC',
    //     //     actualRate: 146006.90818917067,
    //     //     previousRate: 146006.99818917067,
    //     //   },
    //     //   {
    //     //     currency: 'ETH',
    //     //     actualRate: 9156.11723663738,
    //     //     previousRate: 9156.10723663738,
    //     //   },
    //     // ];
    //     const exchangeRateDataVariation =
    //       responsesVariation &&
    //       responsesVariation.reduce(
    //         (acc, { currency, previousRate, actualRate }: any) => {
    //           acc[currency] =
    //             ((actualRate - previousRate) / previousRate) * 100;
    //           return acc;
    //         },
    //         {},
    //       );
    //     setExchangeRates(responses);
    //     setExchangeRatesVariation(exchangeRateDataVariation);
    //   } catch (error) {
    //     console.error('Error fetching exchange rates:', error);
    //   }
    // };

    const fetchCryptoData = async currencies => {
      const responses = await Promise.all(
        currencies.map(async (currency, index) => {
          const delayDuration = index * 350; // Delay in milliseconds (1000 ms = 1 second)

          await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request

          const response = await axios.get(
            // `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets`,
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currency}&order=market_cap_desc&per_page=3&page=1&sparkline=false`,
            // {
            //   params: {
            //     vs_currency: 'usd', // Replace with your preferred currency
            //     ids: currency,
            //     order: 'market_cap_desc',
            //     per_page: 3, // Number of cryptocurrencies to retrieve (adjust as needed)
            //     page: 1,
            //     sparkline: false,
            //   },
            // },
          );
          return response.data;
        }),
      );

      const tempCoins = responses.map(crypto => ({
        id: crypto[0].id,
        symbol: crypto[0].symbol,
        name: crypto[0].name,
        image: crypto[0].image,
        current_price: crypto[0].current_price,
        price_change_percentage_24h: crypto[0].price_change_percentage_24h,
      }));

      // // Store tempCoins in local storage
      // localStorage.setItem('tempCoins', JSON.stringify(tempCoins));

      // setExchangeRates(tempCoins);
    };
    setExchangeRates(MockedData);
    // fetchCryptoData(currencies);
  }, []);

  return {
    exchangeRates,
    setExchangeRates,
    exchangeRatesvariation,
    setActualCurrencies,
    actualCurrencies,
    currencies,
  };
};

// export const fetchCryptoDatas = async () => {
//   const currencies = ['bitcoin', 'ethereum', 'cardano', 'ripple'];

//   const responses = await Promise.all(
//     currencies.map(async currency => {
//       const delayDuration = 350; // Delay in milliseconds (1000 ms = 1 second)

//       await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request
//       const response = await fetch(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currency}&order=market_cap_desc&per_page=3&page=1&sparkline=false`,
//       );
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     }),
//   );

//   const tempCoins = responses.map(crypto => ({
//     id: crypto[0].id,
//     symbol: crypto[0].symbol,
//     name: crypto[0].name,
//     image: crypto[0].image,
//     current_price: crypto[0].current_price,
//     price_change_percentage_24h: crypto[0].price_change_percentage_24h,
//   }));

//   console.log(tempCoins);

//   return tempCoins;
// };
