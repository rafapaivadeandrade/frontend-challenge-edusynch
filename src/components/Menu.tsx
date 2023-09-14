import { Tooltip as ReactTooltip } from 'react-tooltip';
export default function Menu() {
  return (
    <aside className="flex flex-col w-[86px] gap-8 lg:hidden xxsm:hidden h-screen border-1">
      <div
        id="sidemenu"
        className={`h-screen overflow-auto flex-col flex-shrink-0 flex gap-5 pt-12 border-t-2 lg:hidden xxsm:hidden`}
      >
        <div
          id="IconsBar"
          className="flex flex-col gap-8 justify-center items-center"
        >
          <img
            data-tooltip-id="my-tooltip-2"
            src="/2.png"
            width={32}
            height={32}
            alt="CoinSynch"
          />
          <ReactTooltip
            id="my-tooltip-2"
            place="right"
            content="Lorem Ipsum"
            style={{ backgroundColor: '#FBAB34' }}
          />
          <img
            data-tooltip-id="my-tooltip-3"
            src="/3.png"
            width={32}
            height={32}
            alt="CoinSynch"
          />
          <ReactTooltip
            id="my-tooltip-3"
            place="right"
            content="Lorem Ipsum"
            style={{ backgroundColor: '#FBAB34' }}
          />

          <img
            data-tooltip-id="my-tooltip-1"
            src="/1.png"
            width={32}
            height={32}
            alt="CoinSynch"
          />
          <ReactTooltip
            id="my-tooltip-1"
            place="right"
            content="Lorem Ipsum"
            style={{ backgroundColor: '#FBAB34' }}
          />

          <img
            data-tooltip-id="my-tooltip-4"
            src="/4.png"
            width={32}
            height={32}
            alt="CoinSynch"
          />
          <ReactTooltip
            id="my-tooltip-4"
            place="right"
            content="Lorem Ipsum"
            style={{ backgroundColor: '#FBAB34' }}
          />
        </div>
      </div>
    </aside>
  );
}
