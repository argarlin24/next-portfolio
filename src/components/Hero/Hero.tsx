import type { FC } from 'react';

import { ComponentHeroRecord } from '@/graphql/generated';

import ThreadsBackground from './ThreadsBackground';

interface HeroProps {
  component: ComponentHeroRecord;
}

const Hero: FC<HeroProps> = ({ component }) => {
  const { heading, headingKicker, description } = component;

  return (
    <div className="hero relative min-h-[80vh] overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-base-100 via-base-100/80 to-transparent" />
      <div className="hero-content relative z-10 flex flex-col lg:flex-row section-padding gap-10 justify-center">
        <div className="max-w-xl gap-6 flex flex-col lg:max-w-3xl text-center">
          {headingKicker && (
            <p className="text-2xl font-semibold text-white">{headingKicker}</p>
          )}
          {heading && (
            <h1 className="text-4xl font-medium lg:text-6xl text-white [filter:drop-shadow(0_0_100px_rgba(255,255,255,0.7))_drop-shadow(0_0_200px_rgba(255,255,255,0.5))]">
              {heading}
            </h1>
          )}
          {description && (
            <div
              className="text-md text-base-content lg:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <a className="btn btn-accent btn-xl text-xl" href="#projects">
              View Projects
            </a>
          </div>
        </div>
      </div>
      <ThreadsBackground amplitude={1.5} distance={0.3} />
    </div>
  );
};

export default Hero;
