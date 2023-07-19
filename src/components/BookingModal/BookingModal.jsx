import React from 'react';

import BookingCard from '../BookingCard/BookingCard';

const BookingModal = ({ modal, toggleModal, photoName, title }) => {
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
              <form action=''>
                <div className='grid-column'>
                  <div className='form-column'>
                    <div className='form-row'>
                      <input
                        type='text'
                        className='form-input form__full-name'
                        placeholder='Full name'
                        id='fullname'
                      />
                    </div>
                  </div>
                  <div className='form-column'>
                    <div className='form-row'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='form-input form__email'
                      />
                    </div>
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
