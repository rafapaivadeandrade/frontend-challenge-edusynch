import { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
// Define a type for the data structure
type UserData = {
  loading?: boolean;
  name?: any; // You can provide more specific types here
  picture?: any; // You can provide more specific types here
  // ... other properties
};

export default function TopCryptos() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserData[]>([]); // Provide the type UserData[]
  const [list, setList] = useState<UserData[]>([]); // Provide the type UserData[]
  const [showLoadLess, setShowLoadLess] = useState(false);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false);
        setData(res.results.slice(0, count));
        // setData(res.results);
        setList(res.results.slice(0, count));
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    if (!showLoadLess) {
      fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
          console.log('loadmoreData', data);
          const newData = data.concat(res.results);
          console.log('loadmoreResults', res.results);
          setData(newData);
          setList(newData);
          setLoading(false);
          const result = data.filter((_, index) => index < count);
          window.dispatchEvent(new Event('resize'));
        });
    } else {
      const result = data.filter((_, index) => index < count);
      // Removing an item from the 'data' array based on a condition
      setData(result);
      setList(data.filter((_, index) => index < count)); // Filter to keep first 'count' items
      // setList(data.slice(0, newCount));
    }
    setLoading(false);
    setShowLoadLess(!showLoadLess);
  };

  const loadButtonText = showLoadLess ? 'View less -' : 'View more +';

  return (
    <div className="flex flex-col px-28 pt-[120px] gap-12 justify-center">
      <p className="text-[32px] font-bold text-center text-TextBase">
        Top Cryptos
      </p>
      <div className="flex flex-col items-center">
        <table className="w-[1216px] border-collapse border-spacing-0 border-gray-300">
          <thead>
            <tr>
              <td className="px-4 py-2 text-Secondary text-[14px]">#</td>
              <td className="px-4 py-2 text-Secondary text-[14px]">Crypto</td>
              <td className="px-4 py-2 text-Secondary text-[14px]">Price</td>
              <td className="px-4 py-2 text-Secondary text-[14px]">Change</td>
              <td className="px-4 py-2 text-Secondary text-[14px]">Trade</td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 relative">
              <td
                className="px-4 py-2 text-[14px] text-gray-500"
                style={{ zIndex: 1 }}
              >
                01
              </td>
              <td
                className="px-4 py-2 text-base text-gray-500"
                style={{ zIndex: 1 }}
              >
                {/* <span className="ant-avatar ant-avatar-circle ant-avatar-image css-dev-only-do-not-override-fpg3f5">
                  <img src="https://randomuser.me/api/portraits/women/10.jpg" />
                </span> */}
                Bitcoin
              </td>
              <td
                className="px-4 py-2 text-base text-gray-500"
                style={{ zIndex: 1 }}
              >
                $45,678
              </td>
              <td
                className="px-4 py-2 text-base text-gray-500"
                style={{ zIndex: 1 }}
              >
                +3.45%
              </td>
              <td className="px-4 py-2" style={{ zIndex: 1 }}>
                <div className="bg-TerciaryButton flex flex-col items-center justify-center w-20 py-2 px-4 rounded-3xl">
                  <span className="text-[14px] text-white">Buy</span>
                </div>
              </td>
              <td
                className="absolute inset-0 bg-gray-100 opacity-0"
                style={{ zIndex: 0 }}
              ></td>
            </tr>
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
          {/* <Button onClick={onLoadMore}>{loadButtonText}</Button> */}
        </div>
      </div>
    </div>
  );
}
