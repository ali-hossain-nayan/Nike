import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="header" width={130} height={29} />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 ${isNavOpen ? '' : ''} max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden" onClick={toggleNav}>
          <img src={hamburger} alt="hamburg"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
