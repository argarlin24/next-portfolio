'use client';

import dynamic from 'next/dynamic';

const Threads = dynamic(() => import('@/components/Threads/Threads'), {
  ssr: false,
  loading: () => null,
});

interface ThreadsBackgroundProps {
  amplitude?: number;
  distance?: number;
}

const ThreadsBackground = ({
  amplitude = 1.5,
  distance = 0.3,
}: ThreadsBackgroundProps) => {
  // Temporarily disabled for testing
  return null;
  return (
    <div className="pointer-events-none absolute -bottom-1/2 -top-1/2 -left-20 right-0 -rotate-6 origin-left w-[120%]">
      <Threads amplitude={amplitude} distance={distance} />
    </div>
  );
};

export default ThreadsBackground;
