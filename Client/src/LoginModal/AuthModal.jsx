import React, { useState, useRef } from "react";


const AuthModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  if (!isOpen) return null;

  // Handle OTP input
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <div className="modal-close" onClick={onClose}>✕</div>

        {/* LEFT */}
        <div className="modal-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="car"
          />
        </div>

        {/* RIGHT */}
        <div className="modal-right">

          {step === "phone" && (
            <>
              <h2>Login/Sign Up</h2>

              <div className="phone-input">
                <div className="country-code">+91</div>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                className="otp-btn active"
                onClick={() => setStep("otp")}
              >
                Get OTP
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <h2>Enter OTP</h2>
              <p className="sub-text">Sent to +91 {phone}</p>

              {/* OTP INPUTS */}
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                  />
                ))}
              </div>

              <button className="verify-btn">
                Verify OTP
              </button>

              <p className="resend">Resend OTP</p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default AuthModal;