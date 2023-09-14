import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row justify-between px-28 py-6 w-full h-16 flex-shrink-0 bg-white shadow-md">
      <span className="text-[14px] text-TextBase">
        Copyright © 2022 - All rights reserved
      </span>
      <Link href="/" passHref legacyBehavior>
        <a>
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/logo.png" width={94} height={16} alt="CoinSynch" />
        </a>
      </Link>
    </div>
  );
}
