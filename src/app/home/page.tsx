'use client';
import React, { useEffect, useState } from 'react';
import ForYourCompanyContainer from '../../components/ForYourCompany';
import TopCryptos from '../../components/TopCryptos';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import SignUpModal from '../../components/SignUpModal';
import SignInModal from '../../components/SignInModal';
import '../../styles/carousel.css';
import Layout from '../../components/Layout/LayoutHome';

const Home: React.FC = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440,
  );
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  const closeSignIn = () => {
    setIsSignInModalOpen(false);
  };
  const closeSignUp = () => {
    setIsSignUpModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setShowFirstImage(prevShowFirstImage => !prevShowFirstImage);
    }, 20000); // Switch images every 20 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="flex flex-row pl-28 w-full h-full md:pl-12 sm:px-6">
          <div className="flex flex-col w-1/2 sm:w-full">
            <div>
              <p className="mb-6 text-Primary text-5xl tracking-[.48px] font-bold leading-[56px] md:text-[32px] md:leading-[40px] sm:text-xl sm:leading-8 sm:text-center">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-TextBase text-xl leading-8 md:text-base sm:text-base md:leading-6 sm:leading-6 sm:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
            <div
              className="mt-8 w-[278px] h-12 flex justify-center items-center bg-Primary gap-[10px] py-2 px-4 rounded-3xl cursor-pointer md:w-[232px] sm:w-[180px] sm:self-center"
              onClick={openSignUpModal}
            >
              <span className="text-base text-white font-bold sm:text-[14px] sm:font-normal">
                SIGN UP NOW
              </span>
              <img src="/rounded.png" width={12} height={12} alt="arrow" />
            </div>
            <div className="flex flex-row gap-8 items-center mt-20 md:mt-11 sm:mt-6 sm:justify-center">
              <div className="bg-background py-1 px-4">
                <span className="text-xl text-Primary sm:text-[12px]">
                  Cryptos
                </span>
              </div>
              <div className="bg-background py-1 px-4">
                <span className="text-xl text-Primary sm:text-[12px]">
                  NFTs
                </span>
              </div>
              <div className="bg-background py-1 px-4">
                <span className="text-xl text-Primary sm:text-[12px]">
                  Games
                </span>
              </div>
            </div>
          </div>
          <div
            id="carouselimages"
            className="flex flex-row w-1/2 justify-center -mt-3 sm:hidden"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <img
              src="/smilingwoman.png"
              alt="woman"
              className={`${showFirstImage ? 'block h-fit' : 'hidden w-0'}`}
              style={{ width: 'inherit' }}
            />
            <img
              src="/smilinguy.png"
              alt="guy"
              className={`${
                !showFirstImage ? 'block w-fit h-fit' : 'hidden w-0'
              }`}
            />
          </div>
        </div>
        <ForYourCompanyContainer />
        <TopCryptos />
        <Newsletter />
        <Footer />
        {isSignInModalOpen && (
          <SignInModal
            onClose={closeSignIn}
            setIsSignUpModalOpen={setIsSignUpModalOpen}
          />
        )}
        {isSignUpModalOpen && (
          <SignUpModal
            onClose={closeSignUp}
            setIsSignInModalOpen={setIsSignInModalOpen}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;
