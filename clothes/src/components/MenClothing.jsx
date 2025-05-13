import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const MenClothing = () => {
  const [menCloth, setMenCloth] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then(res => res.json())
      .then(data => setMenCloth(data))
  }, [])

  return (
    <>
     
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Men's Clothing</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem"
        }}>
          {menCloth.map(item => (
            <div key={item.id} style={{
              textAlign: "center",
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              background: '#fdfdfd'
            }}>
              <Link to={`/unique/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={item.image} alt={item.title} style={{
                  width: "120px",
                  height: "160px",
                  objectFit: "contain",
                  marginBottom: "0.75rem"
                }} />
                <h4 style={{ fontSize: '1rem' }}>
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

export default MenClothing
