import React from 'react';
import { useState } from 'react';

import BookingCard from '../BookingCard/BookingCard';

const booking = [
  {
    id: 984294,
    design: 'Test 1',
    name: 'Jon Kumar',
    email: 'badjonz@gmail.com',
    bookDate: '2023-10-01',
    apptDate: '2023-10-09',
    time: '11:00',
    comments: 'I would like this in a different colour if possible.',
  },
  {
    id: 984294,
    design: 'Test 4',
    name: 'Peter Ann',
    email: 'pj@gmail.com',
    bookDate: '2023-10-01',
    apptDate: '2023-10-09',
    time: '14:00',
    comments: 'Is this available in pink?',
  },
  {
    id: 984294,
    design: 'Test 3',
    name: 'Fatma',
    email: 'fatma@gmail.com',
    bookDate: '2023-10-01',
    apptDate: '2023-10-18',
    time: '14:00',
    comments: 'Could I make a little changes to this design?',
  },
  {
    id: 984294,
    design: 'Test 1',
    name: 'Heshani',
    email: 'heshani@gmail.com',
    bookDate: '2023-10-01',
    apptDate: '2023-10-21',
    time: '17:30',
    comments: 'Hello, my name is Heshani.',
  },
];

const BookingModal = ({ modal, toggleModal, photoName, title }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  const [color, setColor] = useState('#757575');

  function handleColorChange(e) {
    // Get the new value of the input
    const newValue = e.target.value;
    setApptDate(newValue);

    // Check if the new value is empty or not
    if (newValue === '') {
      // If empty, set the color to the default
      setColor('#757575');
    } else {
      // If not empty, set the color to something else
      setColor('#2f405e');
    }
  }

  function onValueChange(e) {
    setTime(e.target.value);
    console.log(time);
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
                      id='fullName'
                      name='fullName'
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className='form-row'>
                    <label className='form-label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      name='apptDate'
                      id='apptDate'
                      value={apptDate}
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
                        <input
                          id='time1'
                          type='radio'
                          value='11:00'
                          checked={time === '11:00'}
                          onChange={onValueChange}
                        />
                        <label className='form-time__btn' htmlFor='time1'>
                          11:00
                        </label>
                      </li>
                      <li className='form-time__item'>
                        <input
                          id='time2'
                          type='radio'
                          value='14:00'
                          checked={time === '14:00'}
                          onChange={onValueChange}
                        />
                        <label className='form-time__btn' htmlFor='time2'>
                          14:00
                        </label>
                      </li>
                      <li className='form-time__item'>
                        <input
                          id='time3'
                          type='radio'
                          value='17:30'
                          checked={time === '17:30'}
                          onChange={onValueChange}
                        />
                        <label className='form-time__btn' htmlFor='time3'>
                          17:30
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className='form-row'>
                    <label className='form-label' htmlFor='comment'>
                      Comments
                    </label>
                    <textarea
                      name='comment'
                      id='comment'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className='form-input form__comment'
                    ></textarea>
                  </div>
                  <div className='form-row'>
                    <button className='btn form__button'>Book</button>
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
