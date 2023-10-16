import React from 'react';
import { GoogleAuthProvider, signInWithPopup, Auth } from 'firebase/auth';

interface GoogleAuthButtonProps {
  auth: Auth; // Pass the Firebase Auth object as a prop
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ auth }) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // User has been signed in with Google
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
