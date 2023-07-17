import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingCard = ({ photoName, title, toggleModal }) => {
  return (
    <>
      <div className='booking-card'>
        <img src={photoName} alt='' className='booking-card__img' />
        <div className='booking-card__container'>
          <h3 className='booking-card__header'>{title}</h3>
          <button onClick={toggleModal} className='booking-card__btn'>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
