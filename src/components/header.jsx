'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SideNav from './side-nav';

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <header className="header">
        <button
          className="header__toggle"
          onClick={toggleSideNav}
          aria-label="Toggle side navigation"
        >
          <Image
            src="/Frame 35.png"
            alt="Mobile Sidenev"
            width={20}
            height={20}
          />
        </button>
        <div className="header__logo">
          <Image src="/logo.png" alt="News Logo" width={170} height={20} />
        </div>
        <div className="header__menu">
          <a className="header__menu__item" href="#">
            Newsletter
          </a>
          <a className="header__menu__item" href="#">
            Sign In
          </a>
          <button className="header__menu__button">Subscribe</button>
          <Image
            className="header__menu__icon"
            src="/Frame 35.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </div>
      </header>

      <SideNav isOpen={isSideNavOpen} onClose={toggleSideNav} />
    </>
  );
};

export default Header;
