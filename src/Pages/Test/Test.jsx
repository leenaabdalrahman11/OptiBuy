import React, { useEffect, useState } from 'react'

export default function Test() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPing = async () => {
      try {
        const response = await fetch('http://localhost:3000/ping');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage(' Failed to connect to server');
        console.error(error);
      }
    };
    fetchPing();
  }, []); 

  return (
    <div>
      <h1>Ping Test</h1>
      <p>{message}</p>
    </div>
  )
}
