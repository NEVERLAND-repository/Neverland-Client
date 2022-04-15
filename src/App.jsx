import React, { useEffect } from 'react';
import './App.css';
import {
  Route, BrowserRouter as Router, Routes, Outlet,
} from 'react-router-dom';
import axios from 'axios';
import axiosInstance from './services/axios';
import LandingPage from './pages/landingPage/LandingPage';
import SignUp from './pages/authPages/SignUp';
import LogIn from './pages/authPages/LogIn';
import Home from './pages/homePage/Home';
import { Comics } from './pages/homePage/screens/comics';
import { Novels } from './pages/homePage/screens/novels';
import { Mangas } from './pages/homePage/screens/mangas';
import { Books } from './pages/homePage/screens/books';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:8800/')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((err) => console.log(err))
    // axios.post('http://localhost:8800/api/v1/users/signup', {
    //   fullname: 'fullname', username: 'Fred', password: 'password',
    // })
    //   .then((response) => {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch((err) => console.log(err))
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
              <Route index element={ <Books /> } />
              <Route path='comics' element={ <Comics /> } />
              <Route path='novels' element={ <Novels /> } />
              <Route path='mangas' element={ <Mangas /> } />
            </Route>
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
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
