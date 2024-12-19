import React from 'react';

const NotFound = () => {
  return (
    <div className="hero py-20 bg-gradient-to-br from-slate-200 xl:h-dvh">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-6xl font-bold text-accent text-center">404</p>
        <h1 className="text-6xl font-bold">Are you lost?</h1>
        <a href="/" className="btn btn-accent rounded-3xl text-lg w-max mt-8">
          Take Me Home!
        </a>
      </div>
    </div>
  );
};

export default NotFound;
