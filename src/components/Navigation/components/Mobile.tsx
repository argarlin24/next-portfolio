'use client';

import React, { useState } from 'react';
import type { FC } from 'react';

import type { ComponentNavItemRecord } from '../../../graphql/generated';

interface MobileProps {
  navItems: ComponentNavItemRecord[];
}

const Mobile: FC<MobileProps> = ({ navItems }) => {
  const [active, setActive] = useState(false);

  const menuStyles = {
    open: 'flex absolute bg-white z-50 top-[64px] left-0 right-0 h-dvh items-start',
    closed: 'hidden',
  };

  return (
    <div className="navbar bg-transparent md:hidden relative">
      <div className="flex-1">
        <p className="text-xl font-bold">AG</p>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          aria-label="Open Navigation"
          onClick={() => setActive(!active)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${menuStyles[active ? 'open' : 'closed']}`}>
        <ul className="menu menu-vertical px-1">
          {navItems.map(item => (
            <li key={item?.label}>
              <a className="text-xl font-bold" href={item?.url || '#'}>
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Mobile;
