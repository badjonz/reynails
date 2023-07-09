import React from 'react';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-row--1'>
          <p>reyleciadavidson@gmail.com</p>
          <div className='nav-socials'>
            <a href='#'>Insta</a>
            <a href='#'>Twitt</a>
            <a href='#'>Face</a>
          </div>
        </div>
        <div className='nav-row--2'>
          <h1>Rey Nails</h1>
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
