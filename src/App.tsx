import React from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import { auth } from './firebaseConfig'; // Import your Firebase auth object
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"
import UserLogin from './UserLogin';
import UserDashboard from './UserDashboard';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin/>}/>
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

