import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Adam Garling | Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/argarlin24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.52777099609375 15.667875289916992"
            aria-labelledby="github-title"
            role="img"
            height="24"
            width="24"
            className="fill-current"
          >
            <title id="github-title">logo of github</title>
            <path d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 5.47 7.59c.4.076.547-.171.547-.384 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82A7.68 7.68 0 0 1 8 3.869c.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385A8 8 0 0 0 8 0" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/adam-garling/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-labelledby="linkedin-title"
            role="img"
            height="24"
            width="24"
            className="fill-current"
          >
            <title id="linkedin-title">logo of linkedin</title>
            <path
              fill-rule="nonzero"
              d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955a1.376 1.376 0 1 1-.001-2.751 1.376 1.376 0 0 1 .001 2.751zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
            />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
