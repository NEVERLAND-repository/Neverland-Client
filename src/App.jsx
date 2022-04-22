import React, { useEffect } from 'react';
import './App.css';
import {
  Route, BrowserRouter as Router, Routes, Outlet,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './pages/landingPage/LandingPage';
import SignUp from './pages/authPages/SignUp';
import LogIn from './pages/authPages/LogIn';
import Home from './pages/homePage/Home';
import { USER_DATA } from './constants';
import { addUser } from './store/slice/neverlandUserSlice';
import BookReading from './pages/bookReadingPage/BookReading';

const App = () => {
  const dispatch = useDispatch();

  const getUserData = () => {
    const userData = JSON.parse(localStorage.getItem(USER_DATA));
    dispatch(addUser({
      token: userData?.token,
      data: userData?.data,
    }))
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <LandingPage /> } />
            <Route path='register' element={ <SignUp /> } />
            <Route path='login' element={ <LogIn /> } />
            <Route path='home' element={ <Home /> }>
              <Route path=':category' element={ <Home /> } />
            </Route>
            <Route path='book/:bookId' element={ <BookReading /> } />
            {/* <Route path='*' element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}
