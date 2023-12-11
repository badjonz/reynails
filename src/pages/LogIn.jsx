import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as userIcon } from '../assets/svg/personIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = function () {};

  return (
    <div id='login'>
      <div className='login-container'>
        <header>
          <h2 className='form-header'>Welcome back</h2>
        </header>
        <form action=''>
          <div className='form-input-container'>
            <input
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              className='form-input form-input--email'
              placeholder='Email address'
            />
          </div>
          <div className='form-input-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='form-input form-input--password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt='show password'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className='form-input-container'>
            <button className='form-input__btn'>Log In</button>
          </div>
          <div className='form-input-container'>
            <Link to='/forgot-password' className='form-input__forgot-password'>
              Forgot password?
            </Link>
          </div>
          <div className='form-input-container'>
            <p className='form-input__or'>or</p>
          </div>
          <div className='form-input-container'>
            <Link
              to='/sign-up'
              className='form-input__btn form-input__btn--sign-up'
            >
              Create Account
            </Link>
          </div>
        </form>
        {/* Google OAuth */}
      </div>
    </div>
  );
}

export default LogIn;
