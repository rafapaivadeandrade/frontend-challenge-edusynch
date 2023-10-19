import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const params = usePathname();
  return (
    <div className="flex flex-row justify-between px-28 py-6 w-full h-16 flex-shrink-0 bg-white shadow-md z-[49] border-t-1 md:px-12 sm:px-0 sm:justify-center">
      <span
        className={`text-[14px] text-TextBase ${params === '/' && 'sm:hidden'}`}
      >
        Copyright © 2022 - All rights reserved
      </span>
      <Link href="/" passHref legacyBehavior>
        <a className={`${params === '/dashboard' && 'sm:hidden'}`}>
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/logo.png" width={94} height={16} alt="CoinSynch" />
        </a>
      </Link>
    </div>
  );
}
