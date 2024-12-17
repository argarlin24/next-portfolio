import React from 'react';
import { FC } from 'react';

import type { TemplateProjectRecord } from '@/graphql/generated';

interface ControlProps {
  projects: TemplateProjectRecord[];
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Controls: FC<ControlProps> = ({
  projects,
  activeSlide,
  setActiveSlide,
}) => {
  return (
    <div className="flex flex-row gap-4 overflow-x-scroll lg:justify-center no-scrollbar">
      {projects?.map((project, idx) => (
        <button
          key={project?.id}
          className={`btn btn-neutral btn-outline rounded-lg text-l min-w-max ${idx === activeSlide && 'active bg-gray-800 text-white'}`}
          onClick={() => setActiveSlide(idx)}
        >
          {project?.heading}
        </button>
      ))}
    </div>
  );
};

export default Controls;
