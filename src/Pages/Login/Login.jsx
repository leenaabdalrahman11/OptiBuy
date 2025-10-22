import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(email === "leena@gmail.com" && password ==="123"){
      alert("Successful Login");
    }else{
      alert("Faild Login");
    }
  }
  return (
    <>
    <div className=''>
      <form onSubmit={handleSubmit}>
        <h2> Login </h2>
        <div>
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
                    <button
            type="button"
            className={''}
            onClick={() => navigate('/ForgotPassword')}
          >
            Forgot Password?
          </button>

          <button type='submit'>Login</button>

        </div>
      </form>

    </div>

      
    </>
  )
}
