import React, { useState } from 'react';
import Select from './Select';
import InputNumber from './InputNumber';
import '../styles/input-number.css';

export default function CryptoModal({ onClose }: any) {
  const [numberValue, setNumberValue] = useState(0);

  const options = [
    {
      value: 'option1',
      label: (
        <div className="flex flex-row gap-1">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/51189721?v=4"
              width="32"
              alt="avatar"
              className="menu-dropdown-user-image"
            />
          </div>
          <p className="text-TextBase text-[14px]">Rafael</p>
          <span className="ml-auto">&#10148;</span>
        </div>
      ),
    },
    {
      value: 'option2',
      label: (
        <div className="flex flex-row gap-1">
          <div className="rounded-full overflow-hidden"></div>
          <p className="text-TextBase text-[14px]">Rafael</p>
          <img
            src="https://avatars.githubusercontent.com/u/51189721?v=4"
            width="32"
            alt="avatar"
            className="menu-dropdown-user-image"
            onError={e => {
              console.error('Image failed to load:', e.target);
            }}
          />
          <span className="ml-auto">&#10148;</span>
        </div>
      ),
    },
  ];

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
        <h2 className="text-1xl font-bold mb-6 text-center text-TextBase">
          Add Crypto
        </h2>
        <div className="mb-4">
          <div className="relative">
            <Select name="mySelect" options={options} />
          </div>
        </div>
        <div className="mb-6">
          <InputNumber value={numberValue} onChange={setNumberValue} />
        </div>
        <div className="mb-6">
          <button
            className="bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full"
            onClick={onClose}
          >
            Add Crypto
          </button>
        </div>
      </div>
    </div>
  );
}
