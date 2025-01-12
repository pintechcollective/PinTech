import React from 'react';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            {' '}
            © 2024 Pintech, Inc. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <CiFacebook />
            </li>
            <li>
              <CiInstagram />
            </li>
            <li>
              <CiLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
