import React from 'react';
import { Icon } from '../Icons';
import { unsetToken } from '../../../lib/auth';
import { useRouter } from 'next/navigation';
import './style.css';

export const MenuDropDownUser = () => {
  // const { getUser } = useAuth();
  // const user = getUser();
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState(false);
  const [arrow, setArrow] = React.useState('Show');

  React.useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  function changeMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      {showMenu && (
        <div className="container-close-dropdown" onClick={changeMenu}></div>
      )}
      <div className={`menu-dropdown-container ${showMenu && 'active'}`}>
        <div className="menu-dropdown-username" onClick={changeMenu}>
          <img
            src="https://avatars.githubusercontent.com/u/51189721?v=4"
            // src={user?.avatar ? user?.avatar : AvatarIcon}
            width="32"
            alt=""
            className="menu-dropdown-user-image"
          />
          <p className="text-TextBase text-[14px]">Rafael</p>
          {/* <div>{user?.name || user?.email}</div> */}
          <Icon name="iconArrowDown" />
        </div>
        {showMenu && (
          <nav className={`menu-dropdown-nav`}>
            <div
              className={`w-32 h-[55px] cursor-pointer flex flex-row gap-4 items-center justify-center text-white
          before:content-[att]
          before:absolute
          before:px-3 before:py-2
          before:left-1/2 before:-bottom-3
          before:w-max before:max-w-xs

          after:absolute
          after:left-3/4 after:-top-4
          after:-translate-x-1 after:border-8
          after:border-l-transparent
          after:border-t-transparent
          after:border-r-transparent
          after:border-b-white
          after:transition-all
        `}
              onClick={() => router.push('/')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3997 11C11.3997 10.6667 11.6664 10.4 11.9997 10.4C12.333 10.4 12.5997 10.6667 12.533 11V11.8C12.533 13 11.533 14 10.333 14H7.73304C7.53304 15.6 5.79971 16.4667 4.39971 15.6L1.19971 13.6C0.599707 13.2 0.199707 12.4667 0.199707 11.7333V2.26665C0.199707 0.999984 1.26637 0.0666504 2.39971 0.0666504H10.3997C11.5997 0.0666504 12.5997 1.06665 12.5997 2.26665V3.06665C12.5997 3.39998 12.333 3.66665 11.9997 3.66665C11.6664 3.66665 11.3997 3.39998 11.3997 3.06665V2.26665C11.3997 1.73332 10.933 1.26665 10.3997 1.26665H4.93304L6.79971 2.39998C7.39971 2.79998 7.79971 3.53332 7.79971 4.26665V12.8H10.3997C10.933 12.8 11.3997 12.3333 11.3997 11.8V11ZM6.59971 13.7333V13.4V4.26665C6.59971 3.93332 6.39971 3.59998 6.13304 3.39998L2.93304 1.39998C2.26637 0.999984 1.39971 1.46665 1.39971 2.26665V11.7333C1.39971 12.0667 1.59971 12.4 1.86637 12.6L5.06637 14.6C5.73304 15 6.59971 14.5333 6.59971 13.7333ZM15.733 6.79999C15.7996 6.86665 15.7996 6.93332 15.7996 6.99999C15.7996 7.06665 15.783 7.11665 15.7663 7.16666C15.7496 7.21665 15.733 7.26665 15.733 7.33332C15.6996 7.36665 15.683 7.39999 15.6663 7.43332C15.6496 7.46666 15.633 7.49999 15.5996 7.53332L13.9996 9.13332C13.733 9.39999 13.3996 9.39999 13.133 9.13332C12.8663 8.86665 12.8663 8.53332 13.133 8.26665L13.733 7.66665H10.3996C10.0663 7.66665 9.79964 7.39999 9.79964 7.06665C9.79964 6.73332 10.0663 6.46665 10.3996 6.46665H13.733L13.133 5.86665C12.8663 5.59999 12.8663 5.26665 13.133 4.99999C13.3996 4.73332 13.733 4.73332 13.9996 4.99999L15.5996 6.59999C15.6663 6.66665 15.733 6.73332 15.733 6.79999Z"
                  fill="#8C8A97"
                />
              </svg>
              <p className="font-inter text-[14px] text-ModalText">Logout</p>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};
