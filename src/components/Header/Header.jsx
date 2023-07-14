import React from 'react';

import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import SocialIcons from '../SocialIcons/SocialIcons';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-row--1'>
          <a className='nav-contact__link' href='#'>
            <span className='nav-contact__icon'>
              <BsFillEnvelopeAtFill size={12} />
            </span>
            <span className='nav-contact__email'>
              reyleciadavidson@gmail.com
            </span>
          </a>

          <SocialIcons />
        </div>
        <div className='nav-row--2'>
          <h1 className='nav-logo'>Raze Nails</h1>
          <ul className='nav-menu__list'>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Home
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Book
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                About
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Reviews
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
