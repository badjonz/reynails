import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthStatus} from '../../hooks/useAuthStatus';

function PrivateRoute() {

  const {loggedIn, checkingStatus} = useAuthStatus();
  if(checkingStatus){
    return <h3>Loading...</h3>
  }

  return loggedIn ? <Outlet /> : <Navigate to='/log-in' />
}

export default PrivateRoute