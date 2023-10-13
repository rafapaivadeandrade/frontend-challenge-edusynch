import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';
import { CloseIcon, EmailIcon, PasswordIcon } from '../icons/icons';

export default function SignInModal({ onClose, setIsSignUpModalOpen }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState(true);
  const router = useRouter();

  const isEmailValid = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOpenSignUp = () => {
    onClose();
    setIsSignUpModalOpen(true);
  };

  const handleSignIn = () => {
    if (!isEmailValid(email.trim())) {
      setValidEmail(false);
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setEmail('');
      setIsLoading(false);
      setValidEmail(true);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-[448px] bg-white p-8 rounded-lg shadow-lg relative md:w-[320px] md:p-6 sm:w-[272px] sm:p-4">
        <div className="flex justify-end absolute top-3 right-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-1xl mb-6 text-center text-TextBase sm:text-base">
          Sign in to
          <span className="pl-2 text-1xl text-Primary font-bold sm:text-base">
            Coin
          </span>
          <span className="text-1xl text-ModalText font-bold sm:text-base">
            Synch
          </span>
        </h2>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className={`w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none ${
                !validEmail ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setValidEmail(true);
              }}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <EmailIcon />
            </span>
          </div>
          {!validEmail && (
            <p className="text-red-500 text-sm mt-1">
              Please, insert a valid email.
            </p>
          )}
        </div>
        <div className="mb-6 sm:mb-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <PasswordIcon />
            </span>
            <span className="absolute right-[0.8rem] top-[0.8rem]">
              {showPassword ? (
                <EyeOffIcon
                  onClick={togglePasswordVisibility}
                  className="h-4 w-4 text-Eye cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={togglePasswordVisibility}
                  className="h-4 w-4 text-Eye cursor-pointer"
                />
              )}
            </span>
          </div>
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-Secondary sm:text-[12px]">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mb-6">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={handleSignIn}
            disabled={loading}
          >
            <span className="text-base text-white font-medium">
              {loading ? 'Signing in...' : 'Sign in'}
            </span>
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-TextBase sm:text-[12px]">
            <span className="sm:hidden">Don't have an account? </span>
            <a
              className="font-bold cursor-pointer"
              onClick={() => handleOpenSignUp()}
            >
              Sign up to
              <span className="pl-1 text-[14px] text-Primary font-bold">
                Coin
              </span>
              <span className="text-[14px] text-ModalText font-bold">
                Synch
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
