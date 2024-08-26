import React from 'react';

const SideNav = ({ isOpen, onClose }) => {
  return (
    <nav className={`side-nav ${isOpen ? 'side-nav--open' : ''}`}>
      <button
        className="side-nav__close"
        onClick={onClose}
        aria-label="Close navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="side-nav__list">
        <li>
          <a href="#">Newsletter</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
        <li>
          <button className="side-nav__subscribe-btn">Subscribe</button>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
