import React from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingCard = ({ photoName, title }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = function () {
    // console.log('You clicked the button');
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <li className='booking-card'>
        <img src={photoName} alt='' className='booking-card__img' />
        <div className='booking-card__container'>
          <h3 className='booking-card__header'>{title}</h3>
          <button onClick={toggleModal} className='booking-card__btn'>
            Book
          </button>
        </div>
      </li>
      <BookingModal
        modal={modal}
        toggleModal={toggleModal}
        photoName={photoName}
        title={title}
      />
    </>
  );
};

export default BookingCard;
