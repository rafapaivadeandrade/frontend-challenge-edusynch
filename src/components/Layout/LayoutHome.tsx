'use client';

import Head from 'next/head';
import React from 'react';
import Nav from '../../components/Nav/home';

const Layout = ({ children }: any) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Coin Synch</title>
      </Head>

      <Nav setOpen={setOpen} />
      <>
        <main>
          <div
            className="
                      w-full
                      flex
                      bg-white
                      mx-auto
                      mt-16
                      font-roboto
                      "
          >
            {children}
          </div>
        </main>
      </>
    </>
  );
};
export default Layout;
