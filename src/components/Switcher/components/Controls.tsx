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
          className={`btn min-w-max ${idx === activeSlide ? 'bg-white text-gray-800 border-white hover:bg-gray-100' : 'btn-outline border-base-content/30 text-base-content hover:bg-base-content/10 hover:border-base-content/50'}`}
          onClick={() => setActiveSlide(idx)}
        >
          {project?.heading}
        </button>
      ))}
    </div>
  );
};

export default Controls;
