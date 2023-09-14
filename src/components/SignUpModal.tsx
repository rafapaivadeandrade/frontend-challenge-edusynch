import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; // You might need to install the heroicons package
import { useRouter } from 'next/navigation';

export default function SignUpModal({ onClose }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          Sign up to
          <span className="pl-2 text-1xl text-Primary font-bold">Coin</span>
          <span className="text-1xl text-ModalText font-bold">Synch</span>
        </h2>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
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
                  d="M6.32203 2.00868C7.24857 1.08214 8.75078 1.08214 9.67733 2.00868C10.6039 2.93522 10.6039 4.43743 9.67733 5.36397C8.75078 6.29051 7.24857 6.29051 6.32203 5.36397C5.39549 4.43743 5.39549 2.93522 6.32203 2.00868ZM5.40695 1.0936C6.83888 -0.338328 9.16048 -0.338328 10.5924 1.0936C12.0243 2.52553 12.0243 4.84712 10.5924 6.27905C9.16048 7.71098 6.83888 7.71098 5.40695 6.27905C3.97503 4.84712 3.97503 2.52553 5.40695 1.0936ZM7.9997 8.65401C6.15957 8.65401 4.31759 9.09889 2.91353 9.91628C1.51529 10.7303 0.450684 11.9844 0.450684 13.6079V14.4706C0.450684 15.3042 1.12689 15.9804 1.96049 15.9804H14.0389C14.8725 15.9804 15.5487 15.3042 15.5487 14.4706V13.6079C15.5487 11.9844 14.4841 10.7303 13.0859 9.91628C11.6818 9.09889 9.83984 8.65401 7.9997 8.65401ZM1.7448 13.6079C1.7448 12.6207 2.38498 11.7214 3.56462 11.0347C4.73844 10.3513 6.34745 9.94813 7.9997 9.94813C9.65196 9.94813 11.261 10.3513 12.4348 11.0347C13.6144 11.7214 14.2546 12.6207 14.2546 13.6079V14.4706C14.2546 14.5895 14.1578 14.6863 14.0389 14.6863H1.96049C1.84161 14.6863 1.7448 14.5895 1.7448 14.4706V13.6079Z"
                  fill="#E0DEEA"
                />
              </svg>
            </span>
          </div>
        </div>
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
              type={confirmPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              value={password}
              onChange={e => setconfirmPassword(e.target.value)}
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
              {confirmPassword ? (
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
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm password"
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
        </div>
        <div className="flex flex-row items-start gap-7 mb-6">
          <label className="relative inline-block cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <div
              className={`w-4 h-4 border-1 ${
                isChecked ? 'border-primary' : 'border-Primary'
              } rounded-md bg-white transition-all duration-300 transform scale-100 absolute inset-0 flex items-center justify-center`}
            >
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-3 w-3 text-primary"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </label>
          <p className="text-[14px] text-text-base leading-4">
            I have read and accept the{' '}
            <span className="font-bold">Privacy Policy</span> and{' '}
            <span className="font-bold">Terms of User Sign up.</span>
          </p>
        </div>
        <div className="mb-6">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={() => router.push('/dashboard')}
          >
            Sign up
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-TextBase">
            Already have an account?{' '}
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
