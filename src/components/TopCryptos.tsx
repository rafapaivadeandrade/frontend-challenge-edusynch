import React from 'react';
import { formatCurrency, formatPercentage } from '../utils/transformCurrency';

export default function TopCryptos() {
  // const { exchangeRates, exchangeRatesvariation } = useFetchCoins();
  // const {
  //   setActualCurrencies,
  //   actualCurrencies,
  //   currencies,
  //   setExchangeRates,
  // } = useFetchCoins();
  const tempCoinsString = localStorage.getItem('tempCoins');
  const exchangeRates = JSON.parse(tempCoinsString as string);
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showLoadLess, setShowLoadLess] = React.useState(false);
  let count = 6;

  // const fetchFakeData = () => {
  //   const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
  //   fetch(fakeDataUrl)
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res.results.slice(0, count));
  //     });
  // };

  const onLoadMore = () => {
    setLoading(true);
    if (!showLoadLess) {
      // currencies.push(
      //   'litecoin',
      //   'polkadot',
      //   'chainlink',
      //   'stellar',
      //   'solana',
      //   'binancecoin',
      //   'eos',
      // );
      // count += 6;
      // fetchFakeData(); // Fetch data with the updated count
      // setActualCurrencies(prevState => {
      //   return [
      //     ...prevState,
      //     'litecoin',
      //     'polkadot',
      //     'chainlink',
      //     'stellar',
      //     'solana',
      //     'binancecoin',
      //     'eos',
      //   ];
      // });
    } else {
      const filteredCurrencies = exchangeRates.filter(
        (_, index) => index < count,
      );
      // setExchangeRates(filteredCurrencies);
      localStorage.setItem('tempCoins', JSON.stringify(filteredCurrencies));
      // const result = data.filter((_, index) => index < count);
      // Removing an item from the 'data' array based on a condition
      // setData(result);
    }
    setLoading(false);
    setShowLoadLess(!showLoadLess);
  };

  const toggleOpenIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const loadButtonText = showLoadLess ? 'View less -' : 'View more +';

  return (
    <div
      id="topcryptos"
      className="flex flex-col px-28 pt-[120px] gap-12 justify-center sm:px-0 sm:pt-14"
    >
      <p className="text-[32px] font-bold text-center text-TextBase sm:text-xl">
        Top Cryptos
      </p>
      <div className="flex flex-col items-center">
        <table className="w-[1216px] border-collapse border-spacing-0 border-gray-300 md:w-[672px] sm:w-[272px]">
          <thead>
            <tr>
              <td className="px-4 py-2 text-Secondary text-[14px] sm:hidden">
                #
              </td>
              <td className="px-4 py-2 text-Secondary text-[14px] text-start">
                Crypto
              </td>
              <td className="px-4 py-2 text-Secondary text-[14px] text-start sm:hidden">
                Price
              </td>
              <td className="px-4 py-2 text-Secondary text-[14px] text-center sm:hidden">
                Change
              </td>
              <td className="px-4 py-2 text-Secondary text-[14px] text-center pr-6 sm:text-end">
                Trade
              </td>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              exchangeRates &&
              Object.keys(exchangeRates).map((currency, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                      }  relative`}
                    >
                      <td
                        className="px-4 py-2 text-14 text-gray-500 sm:hidden"
                        style={{ zIndex: 1 }}
                      >
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </td>
                      <td
                        className="px-4 py-2 text-base text-gray-500"
                        style={{ zIndex: 1 }}
                      >
                        {exchangeRates[currency].symbol.toUpperCase()}
                      </td>
                      <td
                        className="px-4 py-2 text-base text-gray-500 sm:hidden"
                        style={{ zIndex: 1 }}
                      >
                        {formatCurrency(exchangeRates[currency].current_price)}
                      </td>
                      <td
                        className={`px-4 py-2 text-base text-gray-500 text-center sm:hidden ${
                          exchangeRates[currency].price_change_percentage_24h >=
                          0
                            ? 'text-Terciary'
                            : 'text-Quaternary'
                        }`}
                        style={{ zIndex: 1 }}
                      >
                        {formatPercentage(
                          exchangeRates[currency].price_change_percentage_24h,
                        )}
                      </td>
                      <td
                        className="flex items-center justify-center px-4 py-2 sm:items-end sm:pl-4 sm:pr-4 sm:px-0 sm:justify-end"
                        onClick={() => toggleOpenIndex(index)}
                      >
                        {openIndexes.includes(index) ? (
                          <img
                            className="lg:hidden md:hidden"
                            src="/uparrow.png"
                            alt="up-arrow"
                          />
                        ) : (
                          <img
                            className="lg:hidden md:hidden"
                            src="/arrow.png"
                            alt="down-arrow"
                          />
                        )}
                        <div className="bg-TerciaryButton flex flex-col items-center justify-center w-20 py-2 px-4 rounded-3xl text-end pr-6 cursor-pointer sm:hidden">
                          <span className="text-14 text-white text-center sm:text-end">
                            Buy
                          </span>
                        </div>
                      </td>
                    </tr>
                    {openIndexes.includes(index) && (
                      <>
                        <tr>
                          <td
                            className="text-Secondary text-12"
                            style={{ padding: '16px' }}
                          >
                            Price
                          </td>
                          <td
                            className="text-TextBase text-end"
                            style={{ padding: '16px' }}
                          >
                            {formatCurrency(
                              exchangeRates[currency].current_price,
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="text-Secondary text-12"
                            style={{ padding: '16px' }}
                          >
                            Change
                          </td>
                          <td
                            className={`text-Green text-14 text-end ${
                              exchangeRates[currency]
                                .price_change_percentage_24h >= 0
                                ? 'text-Terciary'
                                : 'text-Quaternary'
                            }`}
                            style={{ padding: '16px' }}
                          >
                            {formatPercentage(
                              exchangeRates[currency]
                                .price_change_percentage_24h,
                            )}
                          </td>
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>

        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <button onClick={onLoadMore} className="w-24 h-6">
            <span className="text-Primary text-base">{loadButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
