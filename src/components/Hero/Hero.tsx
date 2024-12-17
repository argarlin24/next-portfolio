import React from 'react';
import type { FC } from 'react';

import { ComponentHeroRecord } from '@/graphql/generated';

interface HeroProps {
  component: ComponentHeroRecord;
}

const Hero: FC<HeroProps> = ({ component }) => {
  const { heading, headingKicker, description, featuredImage } = component;

  return (
    <div className="hero py-20 bg-gradient-to-br from-slate-200 xl:h-dvh">
      <div className="hero-content flex flex-col lg:flex-row p-10 gap-10">
        <div className="max-w-xl gap-4 flex flex-col lg:max-w-2xl">
          {headingKicker && (
            <p className="text-2xl font-semibold text-accent">
              {headingKicker}
            </p>
          )}
          {heading && <h1 className="text-6xl font-bold">{heading}</h1>}
          {description && (
            <p
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          <div className="flex flex-col gap-4 md:flex-row">
            <a className="btn btn-neutral rounded-lg text-lg" href="#projects">
              View Projects
            </a>
          </div>
        </div>
        <div className="relative w-full bg-no-repeat bg-cover">
          <div className="h-auto w-full max-w-[600px] overflow-hidden rounded-lg relative z-20">
            {featuredImage?.url && <img src={featuredImage?.url} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
