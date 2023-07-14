import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
const SocialIcons = () => {
  return (
    <div className='nav-socials'>
      <div className='nav-socials__item'>
        <a className='nav-socials__link' href='#'>
          <FaInstagram size={14} />
        </a>
      </div>
      <div className='nav-socials__item'>
        <a className='nav-socials__link' href='#'>
          <FaTwitter size={14} />
        </a>
      </div>
      <div className='nav-socials__item'>
        <a className='nav-socials__link' href='#'>
          <FaFacebookF size={14} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
