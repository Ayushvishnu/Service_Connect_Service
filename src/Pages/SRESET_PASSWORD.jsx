import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Component4 from '../components/arjun/comp4';
import Component8 from '../components/arjun/Component8';
import { BsEnvelope } from "react-icons/bs";

function SResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // Validation Regex for Gmail
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const handleProcessSubmit = () => {
    // 1. Validation Logic
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!gmailRegex.test(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }
    
    // 2. Clear errors if successful
    setError('');

    // 3. Navigation
    console.log("Email is valid, navigating...");
    navigate("/SVERIFY_RESET_PASSWORD"); 
  };

  return (
    <div className='w-full min-h-screen bg-[#D9D9D9] flex flex-col overflow-x-hidden'>
      {/* Header */}
      <div className="w-full">
        <Component4 title={"RESET PASSWORD"} theme='black'/>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[550px] transition-all duration-300">
          <Component8 
            titleText="RESET PASSWORD"
            description="Enter your registered email to receive an OTP to reset your password"
            errorMessage={error}
            onSubmit={handleProcessSubmit} 
            inputs={[
              { 
                type: "email",
                placeholder: "Email",
                value: email,
                icon: <BsEnvelope size={20} />, 
                onChange: (e) => setEmail(e.target.value)
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SResetPassword;