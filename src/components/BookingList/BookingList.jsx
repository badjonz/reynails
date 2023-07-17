import React from 'react';

import BookingCard from '../BookingCard/BookingCard';

const Book = () => {
  return (
    <div className='booking'>
      <div className='container'>
        <h2>Featured Nail Designs</h2>
        <div className='booking-selections'>
          <BookingCard title='Test 1' photoName='./nail-design-1.jpg' />
          <BookingCard title='Test 2' photoName='./nail-design-2.jpg' />
          <BookingCard title='Test 3' photoName='./nail-design-3.jpg' />
          <BookingCard title='Test 4' photoName='./nail-design-4.jpg' />
          <BookingCard title='Test 5' photoName='./nail-design-5.jpg' />
          <BookingCard title='Test 6' photoName='./nail-design-6.jpg' />
        </div>
      </div>
    </div>
  );
};

export default Book;
