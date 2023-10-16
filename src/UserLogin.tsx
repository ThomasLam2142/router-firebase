import React from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import { auth } from './firebaseConfig'; // Import your Firebase auth object

const UserLogin: React.FC = () => {
  return (
    <div>
      <h2>Welcome Login Page</h2>
      <GoogleAuthButton auth={auth} />
    </div>
  );
};

export default UserLogin;
