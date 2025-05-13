import React from 'react'
import Navbar from '../components/Navbar'
import Jewelery from '../components/Jewelery'
import { Link } from 'react-router-dom'

const IndividualJeweller = () => {
  return (
    <div>
        <Navbar/>
        
        
        
         <Link to='/' style={{ textDecoration: 'none' }}>
                  <button style={{
                    marginTop: '2rem',
                    padding: '0.6rem 1.5rem',
                    backgroundColor: '#3b82f6',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}>
                    ← Back to Home
                  </button>
          </Link>

          <Jewelery/>
    </div>
  )
}

export default IndividualJeweller