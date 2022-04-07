import React from 'react';
import './App.css';
import SignUp from './pages/authPages/SignUp';
import LogIn from './pages/authPages/LogIn';

function App() {
  return (
    <div className="App">
      <LogIn />
      <SignUp />
    </div>
  );
}

export default App;
