import React, { useState } from 'react';
import { CheckIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { CloseIcon, EmailIcon, NameIcon, PasswordIcon } from '../icons/icons';

type FormValues = {
  name: string;
  email: string;
  password: string | null;
  confirmPassword: string | null;
  isChecked: boolean;
};

type FormValuesErrors = {
  name: string;
  email: string;
  password: string | null;
  confirmPassword: string | null;
  isChecked: boolean;
};

export default function SignUpModal({ onClose, setIsSignInModalOpen }: any) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [data, setData] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  });
  const [errors, setErrors] = useState<FormValuesErrors>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  });

  const schema = yup.object().shape({
    name: yup.string().required('Name is obligatory'),
    email: yup
      .string()
      .required('E-mail is obligatory')
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
        message: 'Invalid E-mail',
        excludeEmptyString: true,
      }),
    password: yup.string().required('Password is obligatory'),
    confirmPassword: yup
      .string()
      .required('Password is obligatory')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
    isChecked: yup
      .boolean()
      .oneOf([true], 'Please, accept the Privacy Policy and Terms of User'),
  });

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOpenSignIn = () => {
    onClose();
    setIsSignInModalOpen(true);
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      await schema.validate(data, { abortEarly: false });
      setIsLoading(true);

      setTimeout(() => {
        // Reset fields after register
        setData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          isChecked: false,
        });

        setIsLoading(false);
        router.push('/dashboard');
      }, 2000);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const yupErrors = error.inner.reduce((acc, currentError) => {
          return {
            ...acc,
            [currentError.path as keyof FormValues]: currentError.message,
          };
        }, {});

        setErrors(yupErrors as FormValuesErrors);
      }
    }
  };

  const handleChange = (e: any) => {
    if (e.target.type === 'checkbox') {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-[448px] bg-white p-8 rounded-lg shadow-lg relative md:w-[320px] md:px-6 md:py-8 sm:w-[272px] sm:p-4">
        <div className="flex justify-end absolute top-3 right-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-1xl mb-6 text-center text-TextBase sm:text-base">
          Sign up to
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
              name="name"
              placeholder="Name"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              onChange={handleChange}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <NameIcon />
            </span>
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              onChange={handleChange}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <EmailIcon />
            </span>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              onChange={handleChange}
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
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full h-10 border rounded-md px-8 py-2 pr-10 focus:outline-none"
              onChange={handleChange}
            />
            <span className="absolute left-3 top-[0.8rem]">
              <PasswordIcon />
            </span>
            <span className="absolute right-[0.8rem] top-[0.8rem]">
              {showConfirmPassword ? (
                <EyeOffIcon
                  onClick={toggleConfirmPasswordVisibility}
                  className="h-4 w-4 text-Eye cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={toggleConfirmPasswordVisibility}
                  className="h-4 w-4 text-Eye cursor-pointer"
                />
              )}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="flex flex-row items-start gap-7 mb-6">
          <label className="relative inline-block cursor-pointer">
            <input
              type="checkbox"
              name="isChecked"
              className="hidden"
              checked={isChecked}
              onChange={e => {
                toggleCheckbox(), handleChange(e);
              }}
            />
            <div
              className={`w-4 h-4 border-1 border-Primary rounded-[4px] bg-white transition-all duration-300 transform scale-100 absolute inset-0 flex items-center justify-center`}
            >
              {isChecked && <CheckIcon />}
            </div>
          </label>
          <p className="text-[14px] text-text-base leading-4 sm:text-[12px]">
            I have read and accept the&nbsp;
            <span className="font-bold">Privacy Policy</span> and&nbsp;
            <span className="font-bold">Terms of User Sign up.</span>
          </p>
        </div>
        {errors.isChecked && (
          <p className="text-red-500 text-sm -mt-4 mb-4">{errors.isChecked}</p>
        )}
        <div className="mb-6">
          <button
            className={`bg-Primary rounded-3xl text-white px-4 py-2 h-12 text-base w-full ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleSignUp}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </div>
        <p className="text-center text-[12px] text-TextBase">
          <span className="sm:hidden">Already have an account?&nbsp;</span>
          <a
            className="font-bold cursor-pointer text"
            onClick={() => handleOpenSignIn()}
          >
            Sign in to
            <span className="pl-1 text-[14px] text-Primary font-bold sm:text-[12px]">
              Coin
            </span>
            <span className="text-[14px] text-ModalText font-bold sm:text-[12px]">
              Synch
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
