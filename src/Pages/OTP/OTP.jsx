import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function OTP() {
  const navigate = useNavigate();
  const [otp,setOtp] = useState("");

  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(otp ==="1234"){
      alert("Successful Register");
      navigate("/login");
    }else{
      alert("Faild Login");
    }
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <h2> Verification Code </h2>
        <div>
          <div>
             <label>Code :</label>
             <input 
              type='otp'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
             />            
          </div>

          <button type='submit'>Register</button>

        </div>
      </form>
      
    </div>
  )
}
