'use client';

import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import type { ComponentSwitcherRecord } from '@/graphql/generated';

import Controls from './components/Controls';

interface SwitcherProps {
  component: ComponentSwitcherRecord;
}

const Switcher: FC<SwitcherProps> = ({ component }) => {
  const { heading, description, projects } = component;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div
      id="projects"
      className="flex py-12 mx-auto md:py-16 xl:max-w-screen-xl xl:py-20"
    >
      <div className="flex flex-col gap-8 w-full mx-auto p-10">
        <div className="flex flex-col gap-4 text-center">
          {heading && (
            <h2 className="text-5xl font-bold text-white">{heading}</h2>
          )}
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div className="flex flex-col w-full gap-12">
          <Controls
            projects={projects}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
          <div className="relative grid">
            {projects?.map((project, idx) => (
              <div
                key={project?.id}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ease-in-out ${activeSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="flex flex-col gap-12 w-full p-10 lg:flex-row">
                  <div className="flex flex-col gap-6">
                    {project?.heading && (
                      <p className="text-3xl font-bold text-white">
                        {project?.heading}
                      </p>
                    )}
                    {project?.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project?.description as TrustedHTML,
                        }}
                      />
                    )}
                    <div className="flex flex-wrap gap-4">
                      {project?.tags?.map(tag => (
                        <div
                          key={tag?.id}
                          className="badge badge-outline badge-lg p-2"
                        >
                          <p className="text-sm" key={tag?.id}>
                            {tag?.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <a
                      className="flex gap-2 items-center text-lg font-semibold w-max hover:text-accent"
                      href={project?.projectUrl as string}
                    >
                      Visit Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                  {project?.featuredImage?.url && (
                    <img
                      className="w-full object-cover aspect-[16/9] self-start lg:max-w-[600px] xl:max-w-[800px] rounded-lg"
                      src={project?.featuredImage?.url}
                      alt={
                        project?.featuredImage?.alt || project?.heading || ''
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switcher;
