import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmpassword === newpassword) {
      alert("Successful Password Change");
      navigate("/login"); 
    } else {
      alert("Failed: Passwords do not match");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password</label>
          <input
            type="password"
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
