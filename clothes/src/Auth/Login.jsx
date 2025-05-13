import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

   const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:5000/login", { email, password });
            console.log(result.data); // should be "Success"
        
            if (result.data.status === "Success") {
            localStorage.setItem('authToken', result.data.token);
            navigate("/");
             }

            
            else {
            alert(result.data);
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    }

  return (
  <div style={{
  maxWidth: '400px',
  margin: '5rem auto',
  padding: '2rem',
  border: '1px solid #ddd',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#ffffff'
}}>  
  <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login</h2>

  <form onSubmit={loginHandler}>
    <div style={{ marginBottom: '1rem' }}>
      <label>Email:</label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <div style={{ marginBottom: '1.5rem' }}>
      <label>Password:</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <button
      type='submit'
      style={{
        width: '100%',
        padding: '0.6rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Login
    </button>
  </form>
</div>

  );
}

export default Login