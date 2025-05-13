
import React, { useState } from 'react'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

 
    const RegisterHandler = async (e) => {
  e.preventDefault();

  if (!userName || !email || !password) {
    alert("All fields are required.");
    return;
  }

  try {
    const result = await axios.post('http://localhost:5000/register', { userName, email, password });
    console.log("✅ Registration Success:", result.data);

    if (result.data.status === "Success") {
      navigate('/login');
    } else {
      alert("Registration failed.");
    }
  } catch (err) {
    console.error("❌ Registration Error:", err.response?.data?.message || err.message);
    alert(err.response?.data?.message || "Registration failed. Try again.");
  }
};

    

  return (
    <div style={{
      maxWidth: '400px',
      margin: '5rem auto',
      padding: '2rem',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fafafa'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create Account</h2>

      <form onSubmit={RegisterHandler}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username:</label>
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
        </div>
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
        <div style={{ marginBottom: '1rem' }}>
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
          type="submit"
          style={{
            width: '100%',
            padding: '0.6rem',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Register
        </button>
      </form>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>Already have an account?</p>
      <Link to="/login">
        <button style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </Link>
    </div>
  );
}

export default Register