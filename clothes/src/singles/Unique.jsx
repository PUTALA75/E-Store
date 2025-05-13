import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'
import { useCart } from '../context/CartContext'

const Unique = () => {
  const { id, type } = useParams()

  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchData = async () => {
    let res, data, unifiedProduct

    if (type === 'product') {
      res = await fetch(`https://fakestoreapi.com/products/${id}`)
      data = await res.json()
      unifiedProduct = {
        id: data.id,
        image: data.image,
        title: data.title,
        price: `$${data.price}`,
        model: data.category,
        rating: data.rating?.rate || 'N/A'
      }
      
    } else if (type === 'recipe') {
      res = await fetch(`https://dummyjson.com/recipes/${id}`)
      data = await res.json()
      unifiedProduct = {
        id: data.id,
        image: data.image,
        title: data.name,
        price: data.mealType || 'N/A',
        model: data.difficulty || 'Standard',
        rating: data.rating || 'N/A'
      }
    }
    else if (type === 'drinks') {
     res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    
     data = await res.json()
      const drink = data.drinks[0]
unifiedProduct = {
  id: drink.idDrink,
  image: drink.strDrinkThumb,
  title: drink.strDrink,
  price: 'Drink',
  model: drink.strCategory || 'Standard',
  GlassDesign: drink.strGlass || 'N/A'
}

    }

    setProduct(unifiedProduct)
  }


    fetchData()
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
   <>
    <Navbar />
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'center',
          padding: '2rem',
          maxWidth: '1000px',
          margin: 'auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={product.image || ''}
              alt={product.title}
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.title}</h3>
            <h2 style={{ fontSize: '1.25rem', color: '#3b82f6' }}>{product.price}</h2>
            <p style={{ margin: 0 }}>Model: <strong>{product.model}</strong></p>
            <p style={{ margin: 0 }}>Rating: <strong>{product.rating }</strong></p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
            >
              Add to Cart
            </button>
          </div>
        </div>

   </>
  )
}

export default Unique
