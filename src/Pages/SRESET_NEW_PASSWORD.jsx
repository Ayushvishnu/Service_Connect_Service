import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Component4 from '../components/arjun/comp4';
import Component8 from '../components/arjun/Component8';
import { CiLock } from "react-icons/ci";
import { Eye, EyeOff } from "lucide-react"; 

const SRESET_NEW_PASSWORD = () => {
  const navigate = useNavigate();
  
  // Input States
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Visibility States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleUpdatePassword = () => {
    // Basic Validation
    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Success
    setError('');
    console.log("Password reset successful");
    navigate("/SRESET_CONGRATULATIONS");
  };

  return (
    <div className='bg-[#D9D9D9] min-h-screen flex flex-col w-full overflow-x-hidden'>
      {/* Header */}
      <div className="w-full">
        <Component4 theme='black' title="RESET PASSWORD"/>
      </div>
      
      <div className='flex-1 flex flex-col items-center justify-center p-4 sm:p-8 2xl:p-16'>
        <div className='w-full max-w-[550px] transition-all duration-300'>
          <Component8
            titleText="Create Your New Password"
            description="Your new password must be different from previous used passwords."
            errorMessage={error}
            onSubmit={handleUpdatePassword}
            inputs={[
              { 
                type: showPassword ? "text" : "password", 
                placeholder: "Password",
                value: password,
                icon: <CiLock size={20} />, 
                rightIcon: (
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                ),
                onChange: (e) => setPassword(e.target.value) 
              },
              { 
                type: showConfirm ? "text" : "password", 
                placeholder: "Confirm Password",
                value: confirmPassword,
                icon: <CiLock size={20} />, 
                rightIcon: (
                  <button 
                    type="button" 
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="focus:outline-none"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                ),
                onChange: (e) => setConfirmPassword(e.target.value)
              }
            ]}
          />
        </div>

        {/* Optional Hint */}
        <p className="text-gray-500 text-xs mt-6 text-center max-w-xs">
          Minimum 8 characters with a mix of letters, numbers, and symbols.
        </p>
      </div>
    </div>
  );
}

export default SRESET_NEW_PASSWORD;