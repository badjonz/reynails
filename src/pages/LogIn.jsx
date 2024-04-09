import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {ReactComponent as UserIcon} from '../assets/svg/personIcon.svg';
import {ReactComponent as VisibilityIcon} from '../assets/svg/visibilityIcon.svg';
import {ReactComponent as LockIcon} from '../assets/svg/lockIcon.svg';


function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = function (e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  };

  const onSubmit = async function(e){
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if(userCredential.user){
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials');
    }

  }

  return (
    <div id='login'>
      <div className='login-container'>
        <header>
          <h2 className='form-header'>Welcome back</h2>
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
