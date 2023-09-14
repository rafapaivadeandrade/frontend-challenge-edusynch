'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Coins = createContext({ coins: null, loading: false });
const currencies = ['BTC', 'ETH'];
// const currencies2 = ['BTC', 'ETH', 'ADA', 'SOL'];
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

export const useCoin = () => useContext(Coins);
export const useFetchCoins = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [exchangeRatesvariation, setExchangeRatesVariation] = useState({});
  const [actualCurrencies, setActualCurrencies] = useState(currencies);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      // onClick() => setActualCurrencies((prev) => {
      //   return [...prev, 'USD','USD','USD', 'USD','USD','USD']
      // })
      try {
        const responses = await Promise.all(
          actualCurrencies.map(async (currency, index) => {
            const delayDuration = index * 350; // Delay in milliseconds (1000 ms = 1 second)

            await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request
            const response = await axios.get(
              `https://rest.coinapi.io/v1/exchangerate/${currency}/BRL`,
              {
                headers: {
                  'X-CoinAPI-Key': apiKey,
                  // 'X-CoinAPI-Key': 'ECA43654-6E72-48D3-A084-9BB785976D85',
                },
              },
            );
            return {
              currency,
              rate: response.data.rate,
              time: response.data.time,
            };
          }),
        );
        const responsesVariation = await Promise.all(
          responses.map(async (currency, index) => {
            const delayDuration = index * 350; // Delay in milliseconds (1000 ms = 1 second)

            await new Promise(resolve => setTimeout(resolve, delayDuration)); // Delay before the request
            const responseVariation = await axios.get(
              `https://rest.coinapi.io/v1/exchangerate/${currency.currency}/BRL?time=${dataISO}`,
              {
                headers: {
                  'X-CoinAPI-Key': apiKey,
                },
              },
            );
            return {
              currency: currency.currency,
              previousRate: responseVariation.data.rate,
              actualRate: currency.rate,
            };
          }),
        );
        // Variação Diária (%) = ((Preço Atual - Preço Anterior) / Preço Anterior) * 100
        // const responsesVariation = [
        //   {
        //     currency: 'BTC',
        //     actualRate: 146006.90818917067,
        //     previousRate: 146006.99818917067,
        //   },
        //   {
        //     currency: 'ETH',
        //     actualRate: 9156.11723663738,
        //     previousRate: 9156.10723663738,
        //   },
        // ];
        const exchangeRateDataVariation =
          responsesVariation &&
          responsesVariation.reduce(
            (acc, { currency, previousRate, actualRate }: any) => {
              acc[currency] =
                ((actualRate - previousRate) / previousRate) * 100;
              return acc;
            },
            {},
          );
        // const exchangeRateDataVariation = responses.reduce((acc, { currency, rate }) => {
        //   acc[currency] = rate;
        //   return acc;
        // }, {});
        // console.log(responsesVariation);
        setExchangeRates(responses);
        setExchangeRatesVariation(exchangeRateDataVariation);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [actualCurrencies]);

  return { exchangeRates, exchangeRatesvariation, setActualCurrencies };
};
