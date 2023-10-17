import React from 'react';
import { GoogleAuthProvider, signInWithPopup, Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface GoogleAuthButtonProps {
  auth: Auth;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ auth }) => {
  let navigate = useNavigate();  
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
        navigate('/dashboard');
    } catch (error) {
      // Handle authentication errors
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );
};

export default GoogleAuthButton;
