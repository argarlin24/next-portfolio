import React from 'react';
import type { FC } from 'react';

import type { ComponentNavItemRecord } from '../../../graphql/generated';

interface DesktopProps {
  navItems: ComponentNavItemRecord[];
}

const Desktop: FC<DesktopProps> = ({ navItems }) => (
  <div className="navbar bg-transparent hidden md:flex">
    <div className="container mx-auto">
      <a href="/" className="flex-1">
        <img className="w-[50px]" src="/logo.svg" alt="Adam Garling" />
      </a>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map(item => (
            <li key={item?.label}>
              <a
                className="text-xl font-bold text-slate-900"
                href={item?.url || '#'}
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
export default Desktop;
