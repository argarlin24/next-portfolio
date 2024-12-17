import React from 'react';

import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import Switcher from '../components/Switcher/Switcher';

const componentGenerator = (components: any[] | undefined) => {
  if (!components || components.length === 0) return null;

  return components?.map(component => {
    switch (component._modelApiKey) {
      case 'component_nav':
        return <Navigation key={component.id} component={component} />;
      case 'component_hero':
        return <Hero key={component.id} component={component} />;
      case 'component_switcher':
        return <Switcher key={component?.id} component={component} />;
      default:
        console.warn(`${component?.__modelApiKey} is incorrect or missing from componentGenerator`);

        return null;
    }
  });
};

export default componentGenerator;
