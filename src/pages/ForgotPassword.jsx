import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as UserIcon } from '../assets/svg/personIcon.svg';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onChange = function (e) {
    return setEmail(e.target.value);
  };

  const onSubmit = async function (e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (error) {
      toast.error('Could not send reset email');
    }
  };

  return (
    <div id='login'>
      <div className='login-container'>
        <header>
          <h2 className='form-header'>Forgot your password</h2>
        </header>

        <form onSubmit={onSubmit}>
          <div className='form-input-container form-input-container__login'>
            <input
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              className='form-input form-input--email'
              placeholder='Email address'
            />
            <UserIcon className='login-icon' />
          </div>
          <div className='form-input-container'>
            <button className='form-input__btn'>Send Reset Link</button>
          </div>
          <div className='form-input-container'>
            <p className='form-input__or'>or</p>
          </div>
          <div className='form-input-container'>
            <Link
              to='/log-in'
              className='form-input__btn form-input__btn--sign-up'
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
