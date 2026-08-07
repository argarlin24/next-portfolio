'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { FC } from 'react';

import { ComponentHeroRecord } from '@/graphql/generated';

const Threads = dynamic(() => import('@/components/Threads/Threads'), {
  ssr: false,
  loading: () => null,
});

interface HeroProps {
  component: ComponentHeroRecord;
}

const Hero: FC<HeroProps> = ({ component }) => {
  const { heading, headingKicker, description, featuredImage } = component;

  return (
    <div className="hero relative min-h-[80vh] overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-base-100 via-base-100/80 to-transparent" />
      <div className="hero-content relative z-10 flex flex-col lg:flex-row p-10 gap-10 justify-center">
        <div className="max-w-xl gap-6 flex flex-col lg:max-w-3xl text-center drop-shadow-lg">
          {headingKicker && (
            <p className="text-2xl font-semibold text-white">{headingKicker}</p>
          )}
          {heading && (
            <h1 className="text-4xl font-medium lg:text-6xl text-white">
              {heading}
            </h1>
          )}
          {description && (
            <div
              className="text-lg text-base-content lg:text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <a className="btn btn-accent text-lg" href="#projects">
              View Projects
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-1/2 -top-1/2 -left-20 right-0 -rotate-6 origin-left w-[120%]">
        <Threads
          amplitude={1.5}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>
    </div>
  );
};

export default Hero;
