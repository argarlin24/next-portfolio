import React from 'react';

import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';
import SingleInstance from '../components/SingleInstance/SingleInstance';
import Switcher from '../components/Switcher/Switcher';

const componentGenerator = (components: any[] | undefined) => {
  if (!components || components.length === 0) return null;

  return components?.map(component => {
    const key = component.id || component._modelApiKey;
    switch (component._modelApiKey) {
      case 'component_nav':
        return <Navigation key={key} component={component} />;
      case 'component_hero':
        return <Hero key={key} component={component} />;
      case 'component_switcher':
        return <Switcher key={key} component={component} />;
      case 'component_single_instance':
        return <SingleInstance key={key} component={component} />;
      default:
        console.warn(
          `${component?._modelApiKey} is incorrect or missing from componentGenerator`,
        );

        return <React.Fragment key={key} />;
    }
  });
};

export default componentGenerator;
