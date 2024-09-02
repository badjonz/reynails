import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Index from './pages/Index';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
// import { useContext } from 'react';
// import { UserContext } from './components/UserContext/UserContext';

function App() {
  // const user = useContext(UserContext);

  // // Use the user data here
  // console.log(user);
  return (
    <div className='App'>
      {/* <UserProvider> */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>

      <ToastContainer />
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
