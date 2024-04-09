import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import SocialIcons from '../SocialIcons/SocialIcons';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();


  const [isSignedIn, setIsSignedIn] = useState(null); // Initialize to null

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user); // Set isSignedIn to true if user is authenticated
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const onLogout= function(){
    auth.signOut();
  }

  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-row--1'>
          <a className='nav-contact__link' href='#'>
            <span className='nav-contact__icon'>
              <BsFillEnvelopeAtFill size={12} />
            </span>
            <span className='nav-contact__email'>
              reyleciadavidson@gmail.com
            </span>
          </a>
          
          {isSignedIn === null ? (
            <div className='nav-log'><p className='loggedin'>Loading...</p></div>
              
            ) : isSignedIn ? (
              <div className='nav-log'><p  className='loggedin'>Welcome, <Link to='profile'className='loggedin-link'>{auth.currentUser.displayName}</Link>!(<span className='loggedin-logout' onClick={onLogout}>logout</span>)</p></div>
            ) : (
              <div className='nav-log'>
                <Link to='/log-in' className='nav-log-btn nav-log-btn--1'>
                  Login
                </Link>
                <Link to='/sign-up' className='nav-log-btn nav-log-btn--2'>
                  Sign up
                </Link>
              </div>
            )}
         
          

          <SocialIcons />
        </div>
        <div className='nav-row--2'>
          <h1 className='nav-logo'>
            
            <Link to='/'>Raze Nails</Link>
          </h1>
          <ul className='nav-menu__list'>
            <li className='nav-menu__item'>
              
              <Link to='/' className='nav-menu__link'>Home</Link>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Book
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                About
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Reviews
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='#' className='nav-menu__link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
