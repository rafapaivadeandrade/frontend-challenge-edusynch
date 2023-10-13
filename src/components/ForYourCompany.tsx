'use client';
import CardsContainer from '../components/CardsContainer';
const datas = [
  {
    title: 'For your company',
    subtitle: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
    image: '/Group.png',
  },
  {
    title: 'For your company',
    subtitle: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
    image: '/Group4.png',
  },
  {
    title: 'For your company',
    subtitle: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
    image: '/Group3.png',
  },
  {
    title: 'For your company',
    subtitle: 'Crypto Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
    image: '/Group2.png',
  },
];
export default function ForYourCompanyContainer() {
  return (
    <div className="w-screen h-full flex flex-row pt-[120px] pl-28 pb-32 gap-8 bg-gradient-to-b from-transparent to-gray-200 md:flex-col md:pl-[0px] sm:flex-col sm:pl-[0px] sm:pb-14">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1 w-[406px] justify-center lg:hidden md:flex md:pl-[136px] md:w-[86%] sm:flex sm:pl-[28px] sm:w-[86%]">
          <span className="text-Primary text-xl font-bold sm:text-base">
            Lorem ipsum
          </span>
          <span className="text-TextBase text-[40px] font-bold tracking-[.4px] sm:text-1xl">
            Lorem ipsum
          </span>
          <span className="text-[16px] leading-6 sm:text-[14px] text-TextBase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </span>
        </div>
        <div className="flex flex-row gap-8 lg:hidden md:hidden sm:pl-[24px]">
          <CardsContainer data={datas} />
        </div>
        <div className="flex flex-row gap-8 md:pl-[72px] sm:pl-[72px] sm:hidden">
          <div className="shadow-md w-[280px] flex flex-col gap-4 p-6">
            <img src="/Group.png" alt="B" className="w-16 h-16" />
            <div className="flex flex-col gap-1">
              <span className="text-Primary text-base font-bold">
                For your company
              </span>
              <span className="text-TextBase text-1xl font-bold">
                Crypto Solutions
              </span>
              <span className="text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </span>
            </div>
          </div>
          <div className="shadow-md w-[280px] flex flex-col gap-4 p-6">
            <img src="/Group4.png" alt="B" className="w-16 h-16" />
            <div className="flex flex-col gap-1">
              <span className="text-Primary text-base font-bold">
                For your company
              </span>
              <span className="text-TextBase text-1xl font-bold">
                Crypto Solutions
              </span>
              <span className="text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 pl-28 sm:hidden">
          <div className="shadow-md w-[280px] flex flex-col gap-4 p-6">
            <img src="/Group3.png" alt="B" className="w-16 h-16" />
            <div className="flex flex-col gap-1">
              <span className="text-Primary text-base font-bold">
                For your company
              </span>
              <span className="text-TextBase text-1xl font-bold">
                Crypto Solutions
              </span>
              <span className="text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </span>
            </div>
          </div>
          <div className="shadow-md w-[280px] flex flex-col gap-4 p-6">
            <img src="/Group2.png" alt="B" className="w-16 h-16" />
            <div className="flex flex-col gap-1">
              <span className="text-Primary text-base font-bold">
                For your company
              </span>
              <span className="text-TextBase text-1xl font-bold">
                Crypto Solutions
              </span>
              <span className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[406px] justify-center lg:flex md:hidden sm:hidden">
        <span className="text-Primary text-xl font-bold">Lorem ipsum</span>
        <span className="text-TextBase text-[40px] font-bold tracking-[.4px]">
          Lorem ipsum
        </span>
        <span className="text-[16px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </span>
      </div>
    </div>
  );
}
