import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Drinks = () => {
  const [jewellery, setJellery] = useState([])

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => setJellery(data.drinks || []))

  }, [])

  return (
    <>
   
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Drinks</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem"
        }}>
          {jewellery.map(item => (
            <div key={item.idDrink} style={{
              textAlign: "center",
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              background: '#fdfdfd'
            }}>
              <Link to={`/unique/drinks/${item.idDrink}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={item.strDrinkThumb} alt={item.title} style={{
                  width: "120px",
                  height: "160px",
                  objectFit: "contain",
                  marginBottom: "0.75rem"
                }} />
                <h4 style={{ fontSize: '1rem' }}>
                  {item.strDrink.length > 50 ? item.strDrink.slice(0, 50) + '...' : item.strDrink}
                </h4>
              </Link>
            </div>
          ))}
        </div>
      
      </div>
    </>
  )
}

export default Drinks
