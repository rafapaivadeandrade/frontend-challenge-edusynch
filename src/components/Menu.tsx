import { Tooltip as ReactTooltip } from 'react-tooltip';
import { BackArrowIcon } from '../icons/icons';
import { MenuProps } from '../types';

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <aside
      className={`flex flex-col md:absolute md:top-0 sm:absolute sm:top-0 w-[86px] md:w-60 gap-8 lg:block xxsm:hidden h-screen border-1 sm:z-50 sm:ease-in-out sm:duration-300 md:bg-white md:z-50 md:ease-in-out md:duration-300 sm:w-[224px] sm:bg-white ${
        isOpen
          ? 'md:translate-x-0 sm:translate-x-0'
          : 'md:-translate-x-full sm:-translate-x-full'
      }`}
    >
      <div
        id="sidemenu"
        className={`h-screen overflow-auto flex-col flex-shrink-0 flex gap-5 pt-12 border-t-[1px] lg:block xxsm:block sm:bg-white`}
      >
        <div
          id="IconsBar"
          className="flex flex-col gap-8 justify-center items-center md:items-start md:pl-6 sm:items-start sm:pl-6"
        >
          <div className="flex flex-row items-center gap-4">
            <img
              data-tooltip-id="my-tooltip-2"
              src="/2.png"
              width={32}
              height={32}
              alt="CoinSynch"
            />
            <span className="lg:hidden text-TextBase font-roboto text-[14px]">
              Lorem Ipsum
            </span>
          </div>
          <ReactTooltip
            id="my-tooltip-2"
            place="right"
            content="Lorem Ipsum"
            className="md:hidden z-[99]"
            style={{ backgroundColor: '#FBAB34' }}
          />
          <div className="flex flex-row items-center gap-4">
            <img
              data-tooltip-id="my-tooltip-3"
              src="/3.png"
              width={32}
              height={32}
              alt="CoinSynch"
            />
            <span className="lg:hidden text-TextBase font-roboto text-[14px]">
              Lorem Ipsum
            </span>
          </div>
          <ReactTooltip
            id="my-tooltip-3"
            place="right"
            content="Lorem Ipsum"
            className="md:hidden z-[99]"
            style={{ backgroundColor: '#FBAB34' }}
          />
          <div className="flex flex-row items-center gap-4">
            <img
              data-tooltip-id="my-tooltip-1"
              src="/1.png"
              width={32}
              height={32}
              alt="CoinSynch"
            />
            <span className="lg:hidden text-TextBase font-roboto text-[14px]">
              Lorem Ipsum
            </span>
          </div>
          <ReactTooltip
            id="my-tooltip-1"
            place="right"
            content="Lorem Ipsum"
            className="md:hidden z-[99]"
            style={{ backgroundColor: '#FBAB34' }}
          />
          <div className="flex flex-row items-center gap-4">
            <img
              data-tooltip-id="my-tooltip-4"
              src="/4.png"
              width={32}
              height={32}
              alt="CoinSynch"
            />
            <span className="lg:hidden text-TextBase font-roboto text-[14px]">
              Lorem Ipsum
            </span>
          </div>
          <ReactTooltip
            id="my-tooltip-4"
            place="right"
            content="Lorem Ipsum"
            className="md:hidden z-[99]"
            style={{ backgroundColor: '#FBAB34' }}
          />

          <div
            id="circle"
            className="flex items-center justify-center w-8 h-8 border rounded-full border-yellow-500 md:mt-12 lg:hidden"
            onClick={goBack}
          >
            <BackArrowIcon />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
