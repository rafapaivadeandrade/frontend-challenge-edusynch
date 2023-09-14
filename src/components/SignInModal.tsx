import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';

export default function SignInModal({ onClose }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-[448px] bg-white p-8 rounded-lg shadow-lg relative">
        <div className="flex justify-end absolute top-3 right-3">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.10431 2.9134C3.77545 2.58453 3.24226 2.58453 2.9134 2.9134C2.58453 3.24226 2.58453 3.77545 2.9134 4.10431L6.80916 8.00008L2.9134 11.8959C2.58453 12.2247 2.58453 12.7579 2.9134 13.0868C3.24226 13.4156 3.77545 13.4156 4.10431 13.0868L8.00008 9.191L11.8959 13.0868C12.2247 13.4156 12.7579 13.4156 13.0868 13.0868C13.4156 12.7579 13.4156 12.2247 13.0868 11.8959L9.191 8.00008L13.0868 4.10431C13.4156 3.77545 13.4156 3.24226 13.0868 2.9134C12.7579 2.58453 12.2247 2.58453 11.8959 2.9134L8.00008 6.80916L4.10431 2.9134Z"
                fill="#8C8A97"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-1xl mb-6 text-center text-TextBase">
          Sign in to
          <span className="pl-2 text-1xl text-Primary font-bold">Coin</span>
          <span className="text-1xl text-ModalText font-bold">Synch</span>
        </h2>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.23077 3.91315C1.23077 3.34635 1.68961 2.88751 2.25641 2.88751H13.7436C14.3104 2.88751 14.7692 3.34635 14.7692 3.91315V12.0879C14.7692 12.6537 14.3106 13.1127 13.7436 13.1127H2.25641C1.68961 13.1127 1.23077 12.6539 1.23077 12.0871V3.91315ZM2.25641 14.3435H13.7436C14.9899 14.3435 16 13.3338 16 12.0879V3.91315C16 2.66661 14.9901 1.65674 13.7436 1.65674H2.25641C1.00988 1.65674 0 2.66661 0 3.91315V12.0871C0 13.3336 1.00988 14.3435 2.25641 14.3435ZM4.21406 5.01092C3.92262 4.83606 3.54462 4.93056 3.36976 5.22199C3.1949 5.51343 3.2894 5.89143 3.58083 6.06629L7.6834 8.52783C7.87828 8.64476 8.12174 8.64476 8.31662 8.52783L12.4192 6.06629C12.7106 5.89143 12.8051 5.51343 12.6303 5.22199C12.4554 4.93056 12.0774 4.83606 11.786 5.01092L8.00001 7.28249L4.21406 5.01092Z"
                  fill="#E0DEEA"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.36907 3.90481C5.36907 2.45189 6.5471 1.27386 8.00002 1.27386C9.45295 1.27386 10.631 2.45189 10.631 3.90481V4.91671H5.36907V3.90481ZM4.75926 6.13099C4.76015 6.131 4.76104 6.131 4.76193 6.131C4.76282 6.131 4.7637 6.131 4.76459 6.13099H11.2355C11.2363 6.131 11.2372 6.131 11.2381 6.131C11.239 6.131 11.2399 6.131 11.2408 6.13099H12.0475C12.6067 6.13099 13.0594 6.58369 13.0594 7.1429V13.6191C13.0594 14.1783 12.6067 14.631 12.0475 14.631H3.95226C3.39306 14.631 2.94036 14.1783 2.94036 13.6191V7.1429C2.94036 6.58369 3.39306 6.13099 3.95226 6.13099H4.75926ZM4.15479 4.91671V3.90481C4.15479 1.78125 5.87647 0.0595703 8.00002 0.0595703C10.1236 0.0595703 11.8453 1.78125 11.8453 3.90481V4.91671H12.0475C13.2773 4.91671 14.2737 5.91306 14.2737 7.1429V13.6191C14.2737 14.8489 13.2773 15.8453 12.0475 15.8453H3.95226C2.72243 15.8453 1.72607 14.8489 1.72607 13.6191V7.1429C1.72607 5.91306 2.72243 4.91671 3.95226 4.91671H4.15479ZM8.85856 10.2277C8.78163 10.3047 8.69695 10.3691 8.60703 10.4211V12.0729C8.60703 12.4082 8.3352 12.6801 7.99988 12.6801C7.66457 12.6801 7.39274 12.4082 7.39274 12.0729V10.421C7.30285 10.3691 7.2182 10.3046 7.1413 10.2277C6.66709 9.75351 6.66709 8.98467 7.1413 8.51046C7.61551 8.03625 8.38435 8.03625 8.85856 8.51046C9.33277 8.98467 9.33277 9.75351 8.85856 10.2277Z"
                  fill="#E0DEEA"
                />
              </svg>
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
            <a href="#" className="text-sm text-Secondary">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mb-6">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={() => router.push('/dashboard')}
          >
            Sign in
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-TextBase">
            Don't have an account?{' '}
            <a className="font-bold" href="#">
              Sign up to{' '}
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
