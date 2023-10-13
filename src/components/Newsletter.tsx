'use-strict';
import React from 'react';
export default function Newsletter() {
  const [email, setEmail] = React.useState<string>('');
  const [loading, setIsLoading] = React.useState<boolean>(false);
  const [validEmail, setValidEmail] = React.useState(true);

  const isEmailValid = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (loading || !isEmailValid(email.trim())) {
      setValidEmail(false);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setEmail('');
      setIsLoading(false);
      setValidEmail(true);
    }, 2000);
  };

  return (
    <div
      id="aboutus"
      className="w-screen h-full flex flex-row pt-[120px] pl-[216px] pb-32 gap-8 bg-gradient-to-b from-transparent mt-[120px] bg-Primary md:pl-12 sm:flex-col sm:pt-14 sm:px-6"
    >
      <div className="flex flex-col gap-2 w-1/2 sm:w-full">
        <div className="flex flex-col gap-1">
          <p className="text-NewsletterText text-1xl sm:text-base">
            Lorem ipsum
          </p>
          <p className="text-white text-[40px] font-bold tracking-[-0.4px] sm:text-1xl">
            Lorem ipsum
          </p>
        </div>
        <div className="w-96 sm:w-[272px]">
          <p className="text-white text-base leading-6 w-full md:w-5/6 sm:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
      </div>
      <div className="flex flex-col w-96 gap-2 mt-5 sm:gap-4">
        <span className="text-base font-medium text-white">Email</span>
        <div
          className={`flex items-center bg-white rounded-md shadow-md w-full h-12 md:w-5/6 sm:w-[65%] ${
            !validEmail ? 'border-red-500 border-2' : ''
          }`}
        >
          <input
            className={`w-full h-full px-4 rounded-md placeholder-gray-400 focus:outline-none ${
              !validEmail ? 'border-red-500' : ''
            }`}
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setValidEmail(true);
            }}
            disabled={loading}
          />
        </div>
        {!validEmail && (
          <p className="text-red-500 text-sm mt-1">
            Please, insert a valid email.
          </p>
        )}
        <button
          className="flex justify-center items-center gap-2 w-96 h-12 px-6 rounded-full bg-Primary shadow-md mt-3 md:w-5/6 sm:w-[65%]"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? (
            <span className="text-base text-white font-medium">Loading...</span>
          ) : (
            <span className="text-base text-white font-medium">Subscribe</span>
          )}
        </button>
      </div>
    </div>
  );
}
