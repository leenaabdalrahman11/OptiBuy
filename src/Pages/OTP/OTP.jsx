import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function OTP() {
  const navigate = useNavigate();
  const [otp,setOtp] = useState("");

  

  const handleSubmit = (e) =>{
    e.preventDefault();
      navigate("/login");

  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <h2> Verification Code </h2>
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
      
    </div>
  )
}
