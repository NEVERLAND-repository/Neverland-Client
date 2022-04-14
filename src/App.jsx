import React from 'react';
import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*">
          <Navigate to="/" />
        </Route>
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
