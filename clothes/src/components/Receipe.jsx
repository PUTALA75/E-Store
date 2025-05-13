import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Receipe = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => {
        // Assuming data.recipes is an array
        setFood(data.recipes || [])  // Set to empty array if undefined
      })
  }, [])

  return (
    <>

      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Receipe</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem"
        }}>
          {food.length > 0 ? (
            food.map(item => (
              <div key={item.id} style={{
                textAlign: "center",
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                background: '#fdfdfd'
              }}>
                <Link to={`/unique/recipe/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={item.image} alt={item.name} style={{
                    width: "120px",
                    height: "160px",
                    objectFit: "contain",
                    marginBottom: "0.75rem"
                  }} />
                  <h4 style={{ fontSize: '1rem' }}>
                    {item.name}
                  </h4>
                </Link>
              </div>
            ))
          ) : (
            <p>No items found.</p>  // In case no items are found
          )}
        </div>
       

      </div>
    </>
  )
}

export default Receipe
