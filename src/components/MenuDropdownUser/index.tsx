import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../hooks/useUser';
import { ArrowDownIcon, LogoutIcon } from '../../icons/icons';
import './style.css';

export const MenuDropDownUser = () => {
  const user = useUser();
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState(false);

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
            src={
              user?.picture?.thumbnail
                ? user?.picture?.thumbnail
                : 'https://avatars.githubusercontent.com/u/51189721?v=4'
            }
            width="32"
            alt=""
            className="menu-dropdown-user-image"
          />
          <p className="text-TextBase text-[14px] sm:hidden">
            {user?.name?.first ? user?.name?.first : 'Rafael'}
          </p>
          <ArrowDownIcon />
        </div>
        {showMenu && (
          <nav className={`menu-dropdown-nav`}>
            <div
              className={`w-32 sm:w-20 sm:h-[50px] h-[55px] sm:gap-2 cursor-pointer flex flex-row gap-4 items-center justify-center text-white
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
              <LogoutIcon />
              <p className="font-inter text-[14px] text-ModalText sm:-mt-1">
                Logout
              </p>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};
