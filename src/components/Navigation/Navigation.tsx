import React from 'react';
import type { FC } from 'react';

import type { ComponentNavRecord } from '../../graphql/generated';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

interface NavigationProps {
  component: ComponentNavRecord;
}

export const Navigation: FC<NavigationProps> = ({ component }) => {
  const { navItems } = component;

  return (
    <div className="absolute top-0 left-0 right-0">
      <Desktop navItems={navItems} />
      <Mobile navItems={navItems} />
    </div>
  );
};
