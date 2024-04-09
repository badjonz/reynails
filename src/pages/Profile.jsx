import React from 'react';
import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import {updateDoc, doc} from 'firebase/firestore';
import {db} from '../firebase.config';
import {useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-toastify';

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData]=useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  });

  const {name, email} = formData;

  const navigate = useNavigate();

  // const onLogout = function(){
  //   auth.signOut();
  //   navigate('/');
  // };

  const onSubmit = async function(){

    try {
      if(auth.currentUser.displayName!==name){
        // Update display name in firebase
        await updateProfile(auth.currentUser,{
          displayName:name,
        });
        // Update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          name
        })
      }
    } catch (error) {
      toast.error('Could not update profile details')
    }
  };

  // const onEdit = function(e){
  //   e.preventDefault();
  //   setChangeDetails((prevState)=>!prevState);
  // }

  const onChange = function(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };

  return <div className='profile'>
    <div className="profile-container">

    
    <header className='profile-header'>
      <p className='page-header'>My Profile</p>
      {/* <button className='logout' onClick={onLogout}>
        Logout
      </button> */}
    </header>

    <main>
      <div className="profile-details-header">
        <p className="profile-details__text">Personal Details</p>
        
      </div>

      <div className="profile-details__card">
        <form className='profile-details-form'>
          <div className="profile-details-form__row">
            <label className='profile-details-form__label' htmlFor="name">Full Name</label>
            <input type="text" id='name' className='profile-details-form__input' disabled={!changeDetails} value={name} onChange={onChange}/>
          </div>
          <div className="profile-details-form__row">
          <label className='profile-details-form__label' htmlFor="email">Email</label>
            <input type="text" id='email' className='profile-details-form__input' disabled={true} value={email} onChange={onChange}/>
          </div>

          {/* <button className='profile-details__edit' onClick={onEdit}>
          {changeDetails ? 'Submit' : 'Edit'}
        </button>  */}
          <button className='profile-details__edit' onClick={(e)=>{
            e.preventDefault();
          changeDetails && onSubmit();
          setChangeDetails((prevState)=>!prevState)
        }}>
          {changeDetails ? 'Submit' : 'Edit'}
        </button> 
        </form>
      </div>
    </main>
    </div>
  </div>
}

export default Profile;
