import React from 'react';

import { Hero } from '../components/Hero/Hero';

const componentGenerator = (components: any[] | undefined) => {
  if (!components || components.length === 0) return null;

  return components?.map(component => {
    switch (component._modelApiKey) {
      case 'component_hero':
        return <Hero key={component.id} />;
      default:
        console.warn(`${component?.__modelApiKey} is incorrect or missing from componentGenerator`);

        return null;
    }
  });
};

export default componentGenerator;
