import React from 'react';
import { useState } from 'react';

import BookingCard from '../BookingCard/BookingCard';

const BookingModal = ({ modal, toggleModal, photoName, title }) => {
  const handleSubmit = function (e) {
    e.preventDefault();
  };

  const [color, setColor] = useState('#757575');

  function handleColorChange(e) {
    // Get the new value of the input
    const newValue = e.target.value;

    // Check if the new value is empty or not
    if (newValue === '') {
      // If empty, set the color to the default
      setColor('#757575');
    } else {
      // If not empty, set the color to something else
      setColor('#2f405e');
    }
  }

  return (
    <>
      {modal && (
        <div className='booking-modal'>
          <div className='booking-overlay' onClick={toggleModal}></div>
          <div className='booking-modal-content'>
            <a className='close-modal' onClick={toggleModal}>
              &times;
            </a>
            <div className='flex-column flex-column--1'>
              <img src={photoName} alt='' className='booking-modal-img' />
            </div>
            <div className='flex-column flex-column--2'>
              <h2 className='booking-modal-heading'>New Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className='form'>
                  <div className='form-row'>
                    <label className='form-label' htmlFor='fullname'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='form-input form__full-name'
                      placeholder='ex. John Doe'
                      id='fullname'
                      name='fullname'
                    />
                  </div>
                  <div className='form-row'>
                    <label className='form-label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='johndoe@gmail.com'
                      className='form-input form__email'
                    />
                  </div>
                  <div className='form-row'>
                    <label className='form-label' htmlFor='date'>
                      Date
                    </label>
                    <input
                      type='date'
                      name='date'
                      id='date'
                      className='form-input form__date'
                      placeholder='dd/mm/yyyy'
                      style={{ color: color }}
                      onChange={handleColorChange}
                    />
                  </div>
                  <div className='form-row'>
                    <label className='form-label' htmlFor='time'>
                      Time
                    </label>

                    <ul className='form-time__list'>
                      <li className='form-time__item'>
                        <input type='radio' name='time-1' id='time-1' />
                        <label className='form-time__btn' htmlFor='time-1'>
                          11:00
                        </label>
                      </li>
                      <li className='form-time__item'>
                        <input type='radio' name='time-2' id='time-2' />
                        <label className='form-time__btn' htmlFor='time-2'>
                          14:00
                        </label>
                      </li>
                      <li className='form-time__item'>
                        <input type='radio' name='time-3' id='time-3' />
                        <label className='form-time__btn' htmlFor='time-3'>
                          17:30
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
