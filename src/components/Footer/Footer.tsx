import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer flex bg-neutral text-neutral-content py-4
    px-10 justify-center"
    >
      <p>Adam Garling | Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
