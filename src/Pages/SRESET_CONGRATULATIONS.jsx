import React from 'react';
import Comp9 from '../components/arjun/component9';
import alertImage from '../../src/assets/alert1.jpeg'; 

const SRESET_CONGRATULATIONS = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Comp9 
        open={true}
        image={alertImage}
        title="Password Reset Successful! 🔐" 
        message="Your security credentials have been updated. For your safety, you will be redirected to the login page to sign in with your new password."
        redirectTo="/home" // Redirecting to login is safer than Home after a reset
        delay={4000} 
      />
    </div>
  );
}

export default SRESET_CONGRATULATIONS;