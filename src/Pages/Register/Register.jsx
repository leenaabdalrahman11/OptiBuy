import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(confirmpassword === password){
      alert("Successful Register");
      navigate("/otp");
    }else{
      alert("Faild Register");
    }
  }
  return (
    <>
    <div className=''>
      <form onSubmit={handleSubmit}>
        <h2> Register </h2>
        <div>
          <div>
             <label>Username</label>
             <input 
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
             />            
          </div>
          <div>
             <label>email</label>
             <input 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             />            
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type='confirmpassword'
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
          <button type='submit'
          onClick={() => navigate('/otp')}>Register</button>

        </div>
      </form>

    </div>

      
    </>
  )
}
