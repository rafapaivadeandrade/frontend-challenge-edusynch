import Head from 'next/head';
import React from 'react';
import Nav from '../../components/Nav/dashboard';
import Menu from '../Menu';
import Footer from '../Footer';
import { LayoutProps } from '../../types';

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = React.useState(false);

  // Function to update the 'open' state based on window width
  const updateOpenState = () => {
    const shouldOpen = window.innerWidth > 1279; // If page is desktop, then hide responsive side menu
    if (shouldOpen) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    updateOpenState(); // Initial check on component mount

    const handleResize = () => {
      updateOpenState(); // Update 'open' state when window is resized
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Coin Synch</title>
      </Head>

      <Nav setOpen={setOpen} />
      <div className="flex flex-col">
        <div className="flex flex-row relative">
          <Menu isOpen={open} />
          <main className={`w-full relative`}>
            {/* Add an overlay div */}
            {open && (
              <div className="fixed top-[65px] left-[240px] w-full h-full bg-gray-800 opacity-50 z-50 md:top-0 sm:top-0 sm:left-[224px]" />
            )}
            <div
              className="
            flex
            bg-white
            mx-auto
            mt-1
            font-roboto
            "
            >
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
