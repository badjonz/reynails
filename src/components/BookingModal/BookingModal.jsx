import React from 'react';

import BookingCard from '../BookingCard/BookingCard';

const BookingModal = ({ modal, toggleModal, photoName, title }) => {
  return (
    <>
      {modal && (
        <div className='booking-modal'>
          <div className='booking-overlay' onClick={toggleModal}></div>
          <div className='booking-modal-content'></div>
          // Added console.log here
          {/* {console.log('The modal is open')} */}
          <a className='close-modal' onClick={toggleModal}>
            &times;
          </a>
        </div>
      )}
    </>
  );
};

export default BookingModal;
