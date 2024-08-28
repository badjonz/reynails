import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../../assets/svg/googleIcon.svg';

// function OAuth() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const onGoogleClick = async function () {
//     try {
//       const auth = getAuth();
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Check for user
//       const docRef = doc(db, 'users', user.uid);
//       const docSnap = await getDoc(docRef);

//       // If user doesn't exist, create user
//       if (!docSnap.exists()) {
//         await setDoc(doc(db, 'users', user.uid), {
//           name: user.displayName,
//           email: user.email,
//           timestamp: serverTimestamp,
//         });
//       }
//       navigate('/');
//     } catch (error) {
//       toast.error('Could not authorize with Google');
//     }
//   };

//   return (
//     <div>
//       <p>{location.pathname === '/sign-up' ? 'Sign up' : 'Log in'} with </p>
//       <button className='social-icon-google' onClick={onGoogleClick}>
//         <img
//           src={googleIcon}
//           className='social-icon-google__img'
//           alt='google'
//         />
//       </button>
//     </div>
//   );
// }

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async function () {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User successfully signed in with Google:', user);

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      // If user doesn't exist, create user
      if (!docSnap.exists()) {
        const userData = {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        };
        console.log('Creating user document:', userData);
        await setDoc(docRef, userData);
        console.log('User document created successfully!');
      } else {
        console.log('User already exists in Firestore');
      }

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Could not authorize with Google');
    }
  };

  return (
    <div>
      <p>{location.pathname === '/sign-up' ? 'Sign up' : 'Log in'} with </p>
      <button className='social-icon-google' onClick={onGoogleClick}>
        <img
          src={googleIcon}
          className='social-icon-google__img'
          alt='google'
        />
      </button>
    </div>
  );
}

export default OAuth;
