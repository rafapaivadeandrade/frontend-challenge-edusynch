import React, { useEffect, useState } from 'react';
import '../../styles/carousel.css';
import ForYourCompanyContainer from '../../components/ForYourCompany';
import TopCryptos from '../../components/TopCryptos';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440,
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setShowFirstImage(prevShowFirstImage => !prevShowFirstImage);
    }, 20000); // Switch images every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row pl-28 w-full h-full">
        <div className="flex flex-col w-1/2">
          <div>
            <p className="mb-6 text-Primary text-5xl tracking-[.48px] font-bold leading-[56px]">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-TextBase text-xl leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="mt-8 w-[278px] h-12 flex justify-center items-center bg-Primary gap-[10px] py-2 px-4 rounded-3xl cursor-pointer">
            <span className="text-base text-white font-bold">SIGN UP NOW</span>
            <img src="/rounded.png" width={12} height={12} alt="arrow" />
          </div>
          <div className="flex flex-row gap-8 items-center mt-20">
            <div className="bg-background py-1 px-4">
              <span className="text-xl text-Primary">Cryptos</span>
            </div>
            <div className="bg-background py-1 px-4">
              <span className="text-xl text-Primary">NFTs</span>
            </div>
            <div className="bg-background py-1 px-4">
              <span className="text-xl text-Primary">Games</span>
            </div>
          </div>
        </div>
        <div
          id="carouselimages"
          className="flex flex-row w-1/2 justify-center -mt-3"
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
        {/* <div
        id="carouselimages"
        className="flex flex-row w-1/2 carousel-images-container"
        >
        <div
        className="carousel-inner flex flex-row"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
        {currentIndex === 0 ? (
          <img src="/smilingwoman.png" alt="woman" />
          ) : (
            <img src="/smilingguy.png" alt="guy" />
            )}
            </div>
          </div> */}
      </div>
      <ForYourCompanyContainer />
      <TopCryptos />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
