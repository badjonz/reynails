import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as UserIcon} from '../assets/svg/personIcon.svg';
import {ReactComponent as VisibilityIcon} from '../assets/svg/visibilityIcon.svg';
import {ReactComponent as LockIcon} from '../assets/svg/lockIcon.svg';
import {ReactComponent as PersonIcon} from '../assets/svg/userCardIcon.svg';


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });

  const { name,email, password } = formData;

  const navigate = useNavigate();

  const onChange = function (e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  };

  return (
    <div id='login'>
      <div className='login-container'>
        <header>
          <h2 className='form-header'>Welcome back</h2>
        </header>
        <form>
          <div className='form-input-container form-input-container__login'>
            <input
              type='text'
              id='name'
              value={name}
              onChange={onChange}
              className='form-input'
              placeholder='Full name'
            />
            
            <PersonIcon className='user-card-icon'/>
          </div>
          <div className='form-input-container form-input-container__login'>
            <input
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              className='form-input form-input--email'
              placeholder='Email address'
            />
            
            <UserIcon className='login-icon'/>
          </div>
          <div className='form-input-container form-input-container__login'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='form-input form-input--password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />
            <LockIcon className='login-icon'/>
            <VisibilityIcon className='login-icon__visibility' onClick={() => setShowPassword((prevState) => !prevState)}/>
          </div>
          <div className='form-input-container'>
            <button className='form-input__btn'>Sign Up</button>
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
              to='/log-in'
              className='form-input__btn form-input__btn--sign-up'
            >
              Log In
            </Link>
          </div>
        </form>
        {/* Google OAuth */}
      </div>
    </div>
  );
}

export default SignUp;
