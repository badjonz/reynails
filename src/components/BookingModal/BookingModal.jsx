import React from 'react';
import { useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = function () {
    console.log('You clicked the button');
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <BookingCard
        photoName={props.photoName}
        title={props.title}
        toggleModal={toggleModal}
      />

      {modal && (
        <div class='booking-modal'>
          <div class='booking-overlay' onClick={toggleModal}></div>
          <div className='booking-modal-content'>
            <h2>Testing modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              repudiandae ad impedit iusto quas, velit, facilis sed neque
              tempore libero hic ex fugiat obcaecati, veniam labore atque ut
              earum minima cupiditate odit blanditiis. Accusamus, velit!
              Pariatur officia perferendis in incidunt esse quae cumque soluta
              laboriosam illo fugit tenetur, debitis qui.
            </p>
          </div>
          // Added console.log here
          {console.log('The modal is open')}
          <a class='close-modal' onClick={toggleModal}>
            &times;
          </a>
        </div>
      )}
    </>
  );
};

export default BookingModal;
