import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Component8({
  titleText = "RESET PASSWORD",
  description = "Enter your details below",
  inputs = [],
  onSubmit = () => {},
  errorMessage = "" 
}) {
  // State for each input dynamically (fallback if no props passed)
  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.placeholder]: "" }), {})
  );

  const handleChange = (placeholder, value, originalOnChange) => {
    setFormData({ ...formData, [placeholder]: value });
    if (originalOnChange) {
      originalOnChange({ target: { value } });
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="w-full bg-primary flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full py-6">
        <h2 className="text-center font-semibold mb-3 text-black text-xl">{titleText}</h2>
        <p className="text-gray-900 text-sm mb-8 text-center">{description}</p>

        {/* Dynamic Inputs */}
        {inputs.map((input, idx) => (
          <div key={idx} className="relative mb-4">
            {/* Left Icon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
              {input.icon}
            </div>

            <input
              type={input.type}
              placeholder={input.placeholder}
              value={input.value !== undefined ? input.value : formData[input.placeholder]}
              onChange={(e) => handleChange(input.placeholder, e.target.value, input.onChange)}
              // Pr-12 adds space on the right so text doesn't hide behind the eye icon
              className={`w-full pl-10 pr-12 py-3 rounded-md text-sm bg-[#6C6460] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all`}
            />

            {/* Right Icon (Eye Icon Logic) */}
            {input.rightIcon && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer text-white">
                {input.rightIcon}
              </div>
            )}
          </div>
        ))}

        {/* Error Message Display */}
        {errorMessage && (
          <p className="text-red-600 text-xs text-center mb-2 font-medium">{errorMessage}</p>
        )}

        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-2 py-2 mb-2 space-y-3 mt-4">
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative hover:bg-[#232738] transition"
          >
            <span>Submit</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}