import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Electronics = () => {
  const [electronic, setElectronic] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(data => setElectronic(data))
  }, [])

  return (
    <>
      
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
          Electronics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {electronic.map(item => (
            <div
              key={item.id}
              style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: "center",
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease',
              }}
            >
              <Link to={`/unique/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "120px",
                    height: "160px",
                    objectFit: "contain",
                    marginBottom: "0.75rem"
                  }}
                />
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  minHeight: '3em'
                }}>
                  {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
                </h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Electronics
