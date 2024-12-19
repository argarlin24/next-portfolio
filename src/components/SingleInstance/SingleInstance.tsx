import React from 'react';
import { FC } from 'react';

import type { ComponentSingleInstanceRecord } from '@/graphql/generated';

import ContactForm from '../Socials/Socials';

interface SingleInstanceProps {
  component: ComponentSingleInstanceRecord;
}

const SingleInstance: FC<SingleInstanceProps> = ({ component }) => {
  if (!component?.singleInstanceId) return null;

  switch (component?.singleInstanceId) {
    case 'contactForm':
      return <ContactForm />;
    default:
      console.warn(
        `${component?._modelApiKey} is incorrect or missing from componentGenerator`,
      );
      return null;
  }
};

export default SingleInstance;
