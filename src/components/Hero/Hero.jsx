import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <header className='header'>
        <div className='header-container'>
          <h1>
            <span className='header-main'>
              Enjoy the Best Nail Designs at Raze Nails
            </span>

            <span className='header-secondary'>
              Make your nails perfect right now!
            </span>
          </h1>

          <div className='flex-cards'>
            <div className='flex-cards__item'>
              <h2>Location</h2>
              <p>
                <span>2-1290 Ogawa-cho</span>
                <span>Kodaira-shi, 187-0032</span>
                <span>Tokyo-to</span>
              </p>
            </div>
            <div className='flex-cards__item'>
              <h2>Hours</h2>
              <p>
                <span>Monday-Friday</span>
                <span>10:30-12:30, 14:00-16:00</span>
                <span>17:30-19:30</span>
              </p>
            </div>
            <div className='flex-cards__item'>
              <h2>Contacts</h2>
              <p>
                <span>+81(070)4456 9781</span>
                <span>reyleciadavidson@gmail.com</span>
              </p>
            </div>
          </div>
          <div className='header-button'>
            <button className='btn'>Book an Appointment</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
