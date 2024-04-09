import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as UserIcon} from '../assets/svg/personIcon.svg';
import {ReactComponent as VisibilityIcon} from '../assets/svg/visibilityIcon.svg';
import {ReactComponent as LockIcon} from '../assets/svg/lockIcon.svg';
import {ReactComponent as PersonIcon} from '../assets/svg/userCardIcon.svg';
import { ReactComponent as EmailIcon } from '../assets/svg/envelopeIcon.svg';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase.config'


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    userName:'',
    email: '',
    password: '',
  });

  const { name, userName, email, password } = formData;

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
      const auth= getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      const user = userCredential.user;
      updateProfile(auth.currentUser,{
        displayName: name,
      });

      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/');
    } catch (error) {
      toast.error('Something went wrong wtih registration');
    }
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <header>
          <h2 className='form-header'>Sign Up</h2>
        </header>
        <form onSubmit={onSubmit}>
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
              type='text'
              id='userName'
              value={userName}
              onChange={onChange}
              className='form-input'
              placeholder='Username'
            />
            
            <UserIcon className='login-icon'/>
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
            
            <EmailIcon className='email-icon'/>
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
