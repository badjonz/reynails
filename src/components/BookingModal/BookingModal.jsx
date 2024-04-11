import React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from "react-toastify";
import { addDays, parseISO } from 'date-fns';
import { db, query, getDocs, collection, addDoc } from '../../firebase.config.js';

import BookingCard from '../BookingCard/BookingCard';

const booking = [
  {
    id: '342345',
    design: 'Test 1',
    name: 'Jon Kumar',
    email: 'badjonz@gmail.com',
    bookDate: '2023-11-24',
    apptDate: '2023-12-01',
    time: '11:00',
    comments: 'I would like this in a different colour if possible.',
  },
  {
    id: '645642',
    design: 'Test 4',
    name: 'Peter Ann',
    email: 'pj@gmail.com',
    bookDate: '2023-11-28',
    apptDate: '2023-12-05',
    time: '14:00',
    comments: 'Is this available in pink?',
  },
  {
    id: '313432',
    design: 'Test 3',
    name: 'Fatma',
    email: 'fatma@gmail.com',
    bookDate: '2023-11-25',
    apptDate: '2023-12-02',
    time: '14:00',
    comments: 'Could I make a little changes to this design?',
  },
  {
    id: '756744',
    design: 'Test 1',
    name: 'Heshani',
    email: 'heshani@gmail.com',
    bookDate: '2023-11-25',
    apptDate: '2023-12-07',
    time: '17:30',
    comments: 'Hello, my name is Heshani.',
  },
];

const BookingModal = ({ modal, toggleModal, photoName, title }) => {
  const [bookings, setBookings] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  const bookDate = `${year}-${month}-${day}`;

  const weekFromBookingDate = `${year}-${month}-${day + 7}`;// ... existing code for calculating bookDate and weekFromBookingDate

  const fetchBookings = async () => {
    try {
      const bookingsRef = collection(db, "appointments"); // Replace "appointments" with your collection name
      const q = query(bookingsRef); // Optional: Add filtering conditions to the query here
      const querySnapshot = await getDocs(q);
      const fetchedBookings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(fetchedBookings);
      
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings(); // Fetch bookings on component mount
  }, []);


  const handleSubmit = function (e) {
    e.preventDefault();
    // let dateObj = new Date();
    // let month = dateObj.getUTCMonth() + 1; //months from 1-12
    // let day = dateObj.getUTCDate();
    // let year = dateObj.getUTCFullYear();
    // const bookDate = `${year}-${month}-${day}`;

    const newBooking = {
      id:crypto.randomUUID(),
      design: title,
      fullName,
      email,
      time,
      apptDate,
      bookDate,
      comment,
    };

    const bookingsRef = collection(db, "appointments");

    // Add the new appointment to Firestore
    addDoc(bookingsRef, newBooking)
      .then((docRef) => {
        console.log("Document written with ID:", docRef.id);
        // Optionally update local state after successful write
        setBookings((bookings) => [...bookings, newBooking]);
      })
      .catch((error) => {
        console.error("Error adding document:", error);
      });

    
  };

  const [color, setColor] = useState('#757575');

  function handleDateChange(e) {
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
  }

  function getAvailableTimes(date) {
    const bookingTimes = bookings
      .filter((booking) => booking.apptDate === date)
      .map((booking) => booking.time);

    // const allAvailableTimes = ['11:00', '14:00', '17:30'];

    return bookingTimes;
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
                    
                    <label className='form-label' htmlFor='fullName'>
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
                      className='form-input form-input__date'
                      placeholder='dd/mm/yyyy'
                      style={{ color: color }}
                      onChange={handleDateChange}
                      min={weekFromBookingDate}
                    />
                    {/* <DatePicker
                      className='form-input'
                      showIcon
                      selected={apptDate}
                      dateFormat='yyyy-MM-dd'
                      onChange={handleDateChange}
                      minDate={new Date()}
                    /> */}
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
                          disabled={getAvailableTimes(apptDate).includes(
                            '11:00'
                          )}
                        />

                        <label className='form-time__btn' htmlFor='time1'>
                          11:00
                        </label>
                      </li>
                      {/* <label
                          className={`form-time__btn ${
                            time === '11:00' ? 'form-time__btn--selected' : ''
                          }`}
                          htmlFor='time1'
                        >
                          11:00
                        </label> */}
                      {/* bookings.map((booking)=>{
                             if(booking.apptDate === apptDate)
                           }) */}
                      <li className='form-time__item'>
                        <input
                          id='time2'
                          type='radio'
                          value='14:00'
                          checked={time === '14:00'}
                          onChange={onValueChange}
                          disabled={getAvailableTimes(apptDate).includes(
                            '14:00'
                          )}
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
                          disabled={getAvailableTimes(apptDate).includes(
                            '17:30'
                          )}
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
