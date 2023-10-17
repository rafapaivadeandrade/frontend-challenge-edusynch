'use client';
import React from 'react';
import ForYourCompanyContainer from '../../components/ForYourCompany';
import TopCryptos from '../../components/TopCryptos';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import SignUpModal from '../../components/SignUpModal';
import SignInModal from '../../components/SignInModal';
import Layout from '../../components/Layout/LayoutHome';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const carousel = React.useRef<HTMLDivElement | null>(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const imagesData = [
    {
      src: '/smilingwoman.png',
      alt: 'woman',
      className: 'block h-fit',
      style: { width: 'inherit' },
    },
    {
      src: '/smilinguy.png',
      alt: 'guy',
      className: 'block h-fit',
      style: {},
    },
  ];

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  const closeSignIn = () => {
    setIsSignInModalOpen(false);
  };
  const closeSignUp = () => {
    setIsSignUpModalOpen(false);
  };

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
            className="flex flex-row w-1/2 justify-end -mt-3 sm:hidden"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <motion.div
              ref={carousel}
              className="cursor-grab overflow-hidden relative"
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                className="w-max flex"
                drag="x"
                dragConstraints={{ right: 0, left: -500 }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {imagesData.map((image, index: number) => (
                  <motion.div
                    key={index}
                    className={`pointer-events-none min-h-[200px] rounded overflow-hidden bg-white ${
                      index === 0
                        ? 'min-w-[32%] flex justify-end'
                        : 'min-w-[55%] opacity-50'
                    }`}
                  >
                    <div
                      key={index}
                      className={`${
                        index === 0
                          ? 'lg:w-[92%] md:w-[84%] pl-4'
                          : 'md:w-[85%]'
                      } flex flex-col gap-4`}
                    >
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                        style={image.style}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
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
