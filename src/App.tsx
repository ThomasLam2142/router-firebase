import React from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import { auth } from './firebaseConfig'; // Import your Firebase auth object
import './App.css';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <GoogleAuthButton auth={auth} />
    </div>
  );
}

export default App;

