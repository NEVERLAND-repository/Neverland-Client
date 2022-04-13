import React, { useEffect } from 'react';
import './App.css';
import {
  Route, BrowserRouter as Router, Routes, Outlet,
} from 'react-router-dom';
import axios from 'axios';
import SignUp from './pages/authPages/SignUp';
import LogIn from './pages/authPages/LogIn';

const App = () => {
  // const fetch = () => {
  //   // const res = axios.post('/')
  //   // console.log(res)
  // }
  const getData = async (url, userData) => {
    const res = await axios.post(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    console.log(res)
  }
  useEffect(() => {
    // fetch(
    //   'http://localhost:8800/',
    //   // 'http://localhost:8800/api/v1/users/login',
    //   {
    //     // headers: {
    //     //   Accept: 'application/json',
    //     //   'Content-Type': 'application/json',
    //     // },
    //     method: 'GET',
    //     // body: JSON.stringify({ username: 'username', password: 'password' }),
    //   },
    // )
    //   .then((res) => { console.log(res) })
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
    // getData('http://localhost:8800/api/v1/users/login', {
    //   username: 'kene',
    //   password: 'kene',
    // })
  }, [])

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            {/* <Route index element={<Home />} /> */}
            <Route path='register' element={ <SignUp /> } />
            <Route path='login' element={ <LogIn /> } />
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
