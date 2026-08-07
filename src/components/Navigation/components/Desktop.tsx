import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';

import type { ComponentNavItemRecord } from '../../../graphql/generated';

interface DesktopProps {
  navItems: ComponentNavItemRecord[];
}

const Desktop: FC<DesktopProps> = ({ navItems }) => (
  <div className="flex navbar bg-transparent">
    <div className="container mx-auto">
      <Link href="/" className="flex-1 text-lg font-bold">
        Adam Garling
      </Link>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map(item => (
            <li key={item?.label}>
              <a className="text-lg font-bold" href={item?.url || '#'}>
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
