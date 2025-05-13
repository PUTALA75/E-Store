import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartItem } = useCart()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(() => {
  const interval = setInterval(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, 500); // poll every 500ms

  return () => clearInterval(interval);
}, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

const [query, setQuery] = useState('')
const [allProducts, setAllProducts] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const urls = [
      'https://fakestoreapi.com/products/category/electronics',
      'https://fakestoreapi.com/products/category/jewelery',
      "https://fakestoreapi.com/products/category/men's%20clothing",
      "https://fakestoreapi.com/products/category/women's%20clothing",
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    ]
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(res => res.json()))
    setAllProducts(data.flat())
  }
  fetchData()
}, [])

const handleSearch = (e) => {
  if (e.key === 'Enter') {
    const filtered = allProducts.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
    localStorage.setItem('searchResults', JSON.stringify(filtered))
    navigate('/search-results')
  }
}




  return (
   <>
  {/* Grid container for navbar and nav links */}
  <div style={{
    display: 'grid',
    gridTemplateRows: 'auto auto',
    rowGap: '0.5rem',
    background: '#1e293b',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  }}>
    
    {/* Grid Row 1: Logo, Search, Actions */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      alignItems: 'center',
      padding: '1rem 2rem',
      columnGap: '1rem'
    }}>
      {/* Logo */}
      <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#facc15' }}>
        E-Mart
      </div>

      {/* Search */}
      <div style={{ textAlign: 'center' }}>
        <input
          type='text'
          placeholder='Search...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            border: 'none',
            outline: 'none',
            width: '80%',
            maxWidth: '300px',
            boxShadow: '0 0 6px rgba(255,255,255,0.1)',
          }}
        />
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              fontWeight: '600',
              padding: '8px 14px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#dc2626')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ef4444')}
          >
            Logout
          </button>
        ) : (
          <span style={{ fontWeight: '500', fontSize: '1rem' }}>
            <Link to='/login' style={{ color: '#3b82f6', marginRight: '6px' }}>SignIn</Link>
            /
            <Link to='/register' style={{ color: '#3b82f6', marginLeft: '6px' }}>SignUp</Link>
          </span>
        )}
        <Link to='/cart' style={{ textDecoration: 'none', color: '#fff' }}>
          <div style={{
            backgroundColor: '#facc15',
            color: '#000',
            padding: '6px 12px',
            borderRadius: '8px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            Cart <span style={{ background: '#000', color: '#fff', padding: '2px 8px', borderRadius: '999px' }}>{cartItem.length}</span>
          </div>
        </Link>
      </div>
    </div>

    {/* Grid Row 2: Category links */}
    <div style={{ background: '#334155', padding: '0.5rem 2rem' }}>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        textAlign: 'center'
      }}>
        <Link to='/singleComponent' style={{ color: '#f1f5f9', textDecoration: 'none' }}><li>Electronics</li></Link>
        <Link to='/singleJewellery' style={{ color: '#f1f5f9', textDecoration: 'none' }}><li>Jewelery</li></Link>
        <Link to='/singleMenClothing' style={{ color: '#f1f5f9', textDecoration: 'none' }}><li>Men Clothing</li></Link>
        <Link to='/singleReceipe' style={{ color: '#f1f5f9', textDecoration: 'none' }}><li>Receipe</li></Link>
        <Link to='/singleDrink' style={{ color: '#f1f5f9', textDecoration: 'none' }}><li>Drinks</li></Link>
      </ul>
    </div>
  </div>
</>

  )
}

export default Navbar
